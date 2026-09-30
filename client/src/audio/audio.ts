/**
 * audio.ts — fully procedural WebAudio engine. No sound files ship with the
 * game: gunshots, clicks, cylinder spins, footsteps, glass clinks, ambience,
 * music pad and cinematic LFE hits are all synthesized at load time.
 * Includes a generated bar reverb (convolver IR), 3D positional playback via
 * PannerNodes, and a slow-motion master filter.
 */
import * as THREE from 'three';
import { rand } from '../game/mathUtils.js';

export type SoundName =
  | 'click' | 'cock' | 'cylinderStop' | 'trigger' | 'shot' | 'shotIndoor'
  | 'reloadClack' | 'craneOpen' | 'cartridgeIn' | 'spinLoop'
  | 'footstep' | 'footstep2' | 'glassClink' | 'whoosh' | 'boom' | 'heartbeat'
  | 'riser' | 'relief' | 'spectator' | 'ui' | 'draw' | 'cheer' | 'thud'
  | 'ambience' | 'music';

export class AudioEngine {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  private sfxBus!: GainNode;
  private musicBus!: GainNode;
  private ambienceBus!: GainNode;
  private reverb!: ConvolverNode;
  private reverbSend!: GainNode;
  private slowmoFilter!: BiquadFilterNode;
  private buffers = new Map<SoundName, AudioBuffer>();
  private started = false;
  private musicNodes: AudioBufferSourceNode[] = [];
  private musicFilter!: BiquadFilterNode;
  private tension = 0;
  private tensionNodes: { osc: OscillatorNode; gain: GainNode }[] = [];
  private nextClink = 0;
  private clinkTimer = 0;
  volume = 0.8;
  musicVolume = 0.5;
  ready = false;

  /** Must be called from a user gesture. */
  async start(report?: (s: string) => void): Promise<void> {
    if (this.started) return;
    this.started = true;
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new Ctor();
    const ctx = this.ctx;

    this.master = ctx.createGain();
    this.master.gain.value = this.volume;
    this.slowmoFilter = ctx.createBiquadFilter();
    this.slowmoFilter.type = 'lowpass';
    this.slowmoFilter.frequency.value = 20000;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.knee.value = 20; comp.ratio.value = 5;
    this.master.connect(this.slowmoFilter).connect(comp).connect(ctx.destination);

    this.sfxBus = ctx.createGain();
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = this.musicVolume;
    this.ambienceBus = ctx.createGain();
    this.ambienceBus.gain.value = 0.5;
    this.sfxBus.connect(this.master);
    this.musicBus.connect(this.master);
    this.ambienceBus.connect(this.master);

    // generated bar reverb
    report?.('Tuning the room reverb');
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulseResponse(2.1, 2.6);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 0.35;
    this.reverbSend.connect(this.reverb).connect(this.master);

    // synthesize everything
    report?.('Loading the revolver sounds');
    this.buffers.set('click', this.makeClick(2400, 0.05, 0.6));
    this.buffers.set('trigger', this.makeClick(1400, 0.04, 0.35));
    this.buffers.set('cock', this.makeTwoStage());
    this.buffers.set('cylinderStop', this.makeClick(1700, 0.06, 0.5));
    this.buffers.set('shot', this.makeGunshot());
    this.buffers.set('shotIndoor', this.makeGunshot(true));
    this.buffers.set('reloadClack', this.makeClack(900, 0.09));
    this.buffers.set('craneOpen', this.makeClack(600, 0.14));
    this.buffers.set('cartridgeIn', this.makeBrassInsert());
    this.buffers.set('spinLoop', this.makeSpinLoop());
    report?.('Recording the bar ambience');
    this.buffers.set('footstep', this.makeFootstep(0.9));
    this.buffers.set('footstep2', this.makeFootstep(1.1));
    this.buffers.set('glassClink', this.makeGlassClink());
    this.buffers.set('whoosh', this.makeWhoosh());
    this.buffers.set('boom', this.makeBoom());
    this.buffers.set('heartbeat', this.makeHeartbeat());
    this.buffers.set('riser', this.makeRiser());
    this.buffers.set('relief', this.makeRelief());
    this.buffers.set('spectator', this.makeSpectator());
    this.buffers.set('ui', this.makeClick(3000, 0.03, 0.25));
    this.buffers.set('draw', this.makeDraw());
    this.buffers.set('cheer', this.makeCheer());
    this.buffers.set('thud', this.makeThud());
    this.buffers.set('ambience', this.makeAmbience());
    this.buffers.set('music', this.makeMusicLoop());

    this.ready = true;
    report?.('Sound check complete');
  }

  resume(): void { this.ctx?.resume(); }

  setVolume(v: number): void {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }
  setMusicVolume(v: number): void {
    this.musicVolume = v;
    if (this.musicBus) this.musicBus.gain.value = v;
  }

  /* ------------------------------------------------ synthesis helpers */

  private get sr(): number { return this.ctx?.sampleRate ?? 44100; }

  private makeBuffer(seconds: number, fn: (t: number, i: number, data: Float32Array) => number): AudioBuffer {
    const len = Math.max(1, Math.floor(this.sr * seconds));
    const buf = this.ctx!.createBuffer(2, len, this.sr);
    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        const t = i / this.sr;
        data[i] = fn(t, i, data);
      }
    }
    return buf;
  }

  private makeImpulseResponse(seconds: number, decay: number): AudioBuffer {
    const len = Math.floor(this.sr * seconds);
    const buf = this.ctx!.createBuffer(2, len, this.sr);
    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * (i < 40 ? i / 40 : 1);
      }
    }
    return buf;
  }

  private makeClick(freq: number, dur: number, amp: number): AudioBuffer {
    return this.makeBuffer(dur, (t) => {
      const decay = Math.exp(-t / (dur * 0.22));
      const attack = Math.min(1, t / 0.0008);
      const body = Math.sin(2 * Math.PI * freq * t) * 0.6 + Math.sin(2 * Math.PI * freq * 2.7 * t) * 0.25;
      const noise = (Math.random() * 2 - 1) * 0.5 * Math.exp(-t / 0.004);
      return (body + noise) * decay * attack * amp;
    });
  }

  private makeTwoStage(): AudioBuffer {
    return this.makeBuffer(0.24, (t) => {
      const c1 = t < 0.12 ? this.clickShape(t, 1800, 0.05) : 0;
      const c2 = t >= 0.13 ? this.clickShape(t - 0.13, 900, 0.08) : 0;
      return (c1 + c2) * 0.9;
    });
  }
  private clickShape(t: number, f: number, dur: number): number {
    const decay = Math.exp(-t / (dur * 0.25));
    return (Math.sin(2 * Math.PI * f * t) * 0.5 + (Math.random() * 2 - 1) * 0.5 * Math.exp(-t / 0.003)) * decay;
  }

  private makeGunshot(indoor = false): AudioBuffer {
    const dur = indoor ? 1.8 : 0.9;
    return this.makeBuffer(dur, (t) => {
      const crack = (Math.random() * 2 - 1) * Math.exp(-t / 0.006);
      const body = (Math.random() * 2 - 1) * Math.exp(-t / 0.05) * 0.9;
      const thump = Math.sin(2 * Math.PI * 52 * t) * Math.exp(-t / 0.16) * 1.1;
      const mid = (Math.random() * 2 - 1) * Math.exp(-t / 0.22) * 0.32;
      let v = crack * 0.95 + body + thump + mid;
      if (indoor) {
        const tail = (Math.random() * 2 - 1) * Math.pow(1 - t / dur, 2.6) * 0.22;
        v += tail;
      }
      return Math.tanh(v * 1.4) * 0.9;
    });
  }

  private makeClack(freq: number, dur: number): AudioBuffer {
    return this.makeBuffer(dur, (t) => {
      const decay = Math.exp(-t / (dur * 0.2));
      const metallic = Math.sin(2 * Math.PI * freq * t) * 0.5
        + Math.sin(2 * Math.PI * freq * 1.62 * t) * 0.3
        + Math.sin(2 * Math.PI * freq * 2.9 * t) * 0.18;
      const noise = (Math.random() * 2 - 1) * Math.exp(-t / 0.005) * 0.7;
      return (metallic + noise) * decay * 0.7;
    });
  }

  private makeBrassInsert(): AudioBuffer {
    return this.makeBuffer(0.34, (t) => {
      let v = 0;
      if (t < 0.05) v = (Math.random() * 2 - 1) * Math.exp(-t / 0.01) * 0.4;             // slide
      if (t >= 0.16 && t < 0.26) {                                                        // seat
        const dt = t - 0.16;
        v = (Math.sin(2 * Math.PI * 3100 * dt) * 0.5 + Math.sin(2 * Math.PI * 4700 * dt) * 0.3
          + (Math.random() * 2 - 1) * Math.exp(-dt / 0.006) * 0.5) * Math.exp(-dt / 0.03);
      }
      if (t >= 0.26) {                                                                     // final click
        const dt = t - 0.26;
        v = (Math.sin(2 * Math.PI * 1100 * dt) * 0.5 + (Math.random() * 2 - 1) * 0.4) * Math.exp(-dt / 0.015);
      }
      return v * 0.8;
    });
  }

  private makeSpinLoop(): AudioBuffer {
    // decelerating mechanical ticks — used during reload cylinder spin
    return this.makeBuffer(3.4, (t) => {
      const speed = Math.max(1.6, 22 - t * 7);
      const tickPhase = (t * speed) % 1;
      const tick = tickPhase < 0.12 ? (1 - tickPhase / 0.12) : 0;
      const decay = Math.max(0, 1 - t / 3.3);
      return (Math.sin(2 * Math.PI * 1500 * tickPhase) * 0.4 * tick
        + (Math.random() * 2 - 1) * tick * 0.3) * decay * 0.5;
    });
  }

  private makeFootstep(pitch: number): AudioBuffer {
    return this.makeBuffer(0.16, (t) => {
      const thud = Math.sin(2 * Math.PI * 95 * pitch * t) * Math.exp(-t / 0.035) * 0.8;
      const scuff = (Math.random() * 2 - 1) * Math.exp(-t / 0.02) * 0.25;
      return (thud + scuff) * 0.5;
    });
  }

  private makeGlassClink(): AudioBuffer {
    return this.makeBuffer(0.5, (t) => {
      const decay = Math.exp(-t / 0.14);
      return (Math.sin(2 * Math.PI * 2350 * t) * 0.5
        + Math.sin(2 * Math.PI * 3570 * t + 0.7) * 0.35
        + Math.sin(2 * Math.PI * 5230 * t + 1.3) * 0.2) * decay * 0.24;
    });
  }

  private makeWhoosh(): AudioBuffer {
    return this.makeBuffer(1.0, (t) => {
      const center = 0.4;
      const env = Math.exp(-Math.pow((t - center) / 0.26, 2));
      const noise = (Math.random() * 2 - 1);
      const sweep = 400 + Math.sin(t * 7) * 350;
      return noise * env * Math.sin(2 * Math.PI * sweep * t) * 0.3;
    });
  }

  private makeBoom(): AudioBuffer {
    return this.makeBuffer(2.2, (t) => {
      const sweep = 60 * Math.exp(-t * 1.6) + 30;
      const body = Math.sin(2 * Math.PI * sweep * t) * Math.exp(-t / 0.7);
      const sub = Math.sin(2 * Math.PI * 28 * t) * Math.exp(-t / 1.1) * 0.6;
      return Math.tanh((body + sub) * 1.8) * 0.9;
    });
  }

  private makeHeartbeat(): AudioBuffer {
    return this.makeBuffer(1.0, (t) => {
      const lub = Math.exp(-Math.pow((t - 0.08) / 0.05, 2));
      const dub = Math.exp(-Math.pow((t - 0.34) / 0.05, 2)) * 0.7;
      return (Math.sin(2 * Math.PI * 58 * t) * (lub + dub)) * 0.9;
    });
  }

  private makeRiser(): AudioBuffer {
    return this.makeBuffer(2.6, (t) => {
      const x = t / 2.6;
      const env = x * x;
      const noise = (Math.random() * 2 - 1);
      const tone = Math.sin(2 * Math.PI * (55 + 220 * x) * t);
      return (noise * 0.35 + tone * 0.3) * env * 0.4;
    });
  }

  private makeRelief(): AudioBuffer {
    return this.makeBuffer(1.4, (t) => {
      const f = 220 * Math.pow(2, t * 0.4);
      const env = Math.exp(-t / 0.7);
      return (Math.sin(2 * Math.PI * f * t) * 0.3 + Math.sin(2 * Math.PI * f * 1.5 * t) * 0.15) * env * 0.25;
    });
  }

  private makeSpectator(): AudioBuffer {
    return this.makeBuffer(2.6, (t) => {
      const env = Math.exp(-t / 1.2);
      const drone = Math.sin(2 * Math.PI * 70 * t) * 0.4 + Math.sin(2 * Math.PI * 70 * 1.01 * t) * 0.4;
      const sweep = Math.sin(2 * Math.PI * (900 - 500 * t) * t) * Math.exp(-t / 0.4) * 0.15;
      return (drone + sweep) * env * 0.5;
    });
  }

  private makeDraw(): AudioBuffer {
    return this.makeBuffer(0.3, (t) => {
      const decay = Math.exp(-t / 0.07);
      return (Math.sin(2 * Math.PI * 700 * t) * 0.4 + (Math.random() * 2 - 1) * Math.exp(-t / 0.01) * 0.4) * decay * 0.6;
    });
  }

  private makeCheer(): AudioBuffer {
    return this.makeBuffer(3.0, (t) => {
      const env = Math.min(1, t / 0.3) * Math.exp(-t / 1.6);
      // many randomized claps = crowd
      let claps = 0;
      for (let k = 0; k < 5; k++) {
        const phase = (t * (2.7 + k * 0.83)) % 1;
        if (phase < 0.1) claps += (1 - phase / 0.1) * (0.5 + Math.random() * 0.5);
      }
      const murmur = (Math.random() * 2 - 1) * 0.25;
      return (claps * 0.22 + murmur) * env * 0.6;
    });
  }

  private makeThud(): AudioBuffer {
    return this.makeBuffer(0.3, (t) => {
      const body = Math.sin(2 * Math.PI * 70 * t) * Math.exp(-t / 0.06);
      return (body + (Math.random() * 2 - 1) * Math.exp(-t / 0.015) * 0.3) * 0.7;
    });
  }

  private makeAmbience(): AudioBuffer {
    // 8s loop: low room rumble + fridge hum + faint chatter shimmer
    return this.makeBuffer(8, (t) => {
      const hum = Math.sin(2 * Math.PI * 58 * t) * 0.5 + Math.sin(2 * Math.PI * 116 * t) * 0.22;
      const air = (Math.random() * 2 - 1) * 0.16;
      const chatter = Math.sin(2 * Math.PI * 0.37 * t) * Math.sin(2 * Math.PI * 0.61 * t) > 0.55
        ? (Math.random() * 2 - 1) * 0.05 : 0;
      return (hum * 0.3 + air + chatter) * 0.5;
    });
  }

  private makeMusicLoop(): AudioBuffer {
    // 24s slow jazzy loop: minor pad + sparse walking bass + soft brush
    const chordRoots = [55, 51.9, 46.2, 49]; // A1, G#1, F#1, G1
    const chordTypes = [[1, 1.2, 1.5, 1.8], [1, 1.19, 1.5, 1.78], [1, 1.25, 1.5, 1.875], [1, 1.2, 1.5, 1.78]];
    const bars = 8;
    const barDur = 3;
    return this.makeBuffer(bars * barDur, (t) => {
      const bar = Math.floor(t / barDur) % bars;
      const root = chordRoots[bar % 4];
      const type = chordTypes[bar % 4];
      const bt = (t % barDur) / barDur;
      let v = 0;
      // pad
      for (const [i, ratio] of type.entries()) {
        const f = root * 4 * ratio; // two octaves up
        v += Math.sin(2 * Math.PI * f * t + i) * (0.16 + 0.05 * Math.sin(t * 0.5 + i)) / type.length;
      }
      // walking bass on beats 1 and 3
      const beat = t % (barDur / 2);
      const bassEnv = Math.exp(-beat / 0.5);
      const bassNote = root * (beat < barDur / 4 ? 1 : 1.5);
      v += Math.sin(2 * Math.PI * bassNote * t) * bassEnv * 0.3;
      // brushed texture
      v += (Math.random() * 2 - 1) * 0.015 * (bt > 0.5 ? 1 : 0.4);
      return v * 0.55;
    });
  }

  /* ------------------------------------------------ playback */

  private source(name: SoundName, rate = 1): AudioBufferSourceNode | null {
    const buf = this.buffers.get(name);
    if (!buf || !this.ctx) return null;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    return src;
  }

  /** Play 2D (UI / cinematic layers). */
  play(name: SoundName, opts: { gain?: number; rate?: number; reverb?: number; music?: boolean } = {}): void {
    if (!this.ctx) return;
    const src = this.source(name, opts.rate ?? 1);
    if (!src) return;
    const g = this.ctx.createGain();
    g.gain.value = opts.gain ?? 1;
    src.connect(g);
    g.connect(opts.music ? this.musicBus : this.sfxBus);
    if (opts.reverb) {
      const send = this.ctx.createGain();
      send.gain.value = opts.reverb;
      g.connect(send).connect(this.reverbSend);
    }
    src.start();
    src.onended = () => { try { g.disconnect(); } catch { /* noop */ } };
  }

  /** Positional playback at a world point. */
  play3D(name: SoundName, pos: THREE.Vector3, opts: { gain?: number; rate?: number; reverb?: number } = {}): void {
    if (!this.ctx) return;
    const src = this.source(name, opts.rate ?? 1);
    if (!src) return;
    const panner = this.ctx.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 1.2;
    panner.maxDistance = 30;
    panner.rolloffFactor = 1.4;
    if (panner.positionX) {
      panner.positionX.value = pos.x; panner.positionY.value = pos.y; panner.positionZ.value = pos.z;
    } else {
      (panner as unknown as { setPosition: (x: number, y: number, z: number) => void }).setPosition(pos.x, pos.y, pos.z);
    }
    const g = this.ctx.createGain();
    g.gain.value = opts.gain ?? 1;
    src.connect(g).connect(panner);
    panner.connect(this.sfxBus);
    if (opts.reverb) {
      const send = this.ctx.createGain();
      send.gain.value = opts.reverb;
      panner.connect(send).connect(this.reverbSend);
    }
    src.start();
    src.onended = () => { try { panner.disconnect(); g.disconnect(); } catch { /* noop */ } };
  }

  /* ------------------------------------------------ loops */

  startLoops(): void {
    if (!this.ctx || this.musicNodes.length) return;
    const amb = this.source('ambience');
    const mus = this.source('music');
    if (amb) { amb.loop = true; amb.connect(this.ambienceBus); amb.start(); this.musicNodes.push(amb); }
    if (mus) {
      mus.loop = true;
      this.musicFilter = this.ctx.createBiquadFilter();
      this.musicFilter.type = 'lowpass';
      this.musicFilter.frequency.value = 8000;
      mus.connect(this.musicFilter).connect(this.musicBus);
      mus.start();
      this.musicNodes.push(mus);
    }
  }

  setLoopsRunning(on: boolean): void {
    const t = this.ctx?.currentTime ?? 0;
    this.ambienceBus.gain.linearRampToValueAtTime(on ? 0.5 : 0.15, t + 0.8);
    this.musicBus.gain.linearRampToValueAtTime(on ? this.musicVolume : this.musicVolume * 0.4, t + 0.8);
  }

  /** Tension drone 0..1 — rises while a player aims. */
  setTension(v: number): void {
    this.tension = v;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (v > 0.05 && this.tensionNodes.length === 0) {
      for (const detune of [0, 3.1]) {
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = 55 + detune;
        const gain = this.ctx.createGain();
        gain.gain.value = 0;
        const filt = this.ctx.createBiquadFilter();
        filt.type = 'lowpass'; filt.frequency.value = 240;
        osc.connect(filt).connect(gain).connect(this.musicBus);
        osc.start();
        this.tensionNodes.push({ osc, gain });
      }
    }
    for (const { gain } of this.tensionNodes) {
      gain.gain.linearRampToValueAtTime(v * 0.05, t + 0.4);
    }
    if (v <= 0.05 && this.tensionNodes.length) {
      for (const { osc, gain } of this.tensionNodes) {
        gain.gain.linearRampToValueAtTime(0, t + 1.0);
        osc.stop(t + 1.2);
      }
      this.tensionNodes = [];
    }
  }

  setSlowmo(on: boolean): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.slowmoFilter.frequency.linearRampToValueAtTime(on ? 420 : 20000, t + 0.15);
    if (this.musicFilter) this.musicFilter.frequency.linearRampToValueAtTime(on ? 500 : 8000, t + 0.15);
  }

  updateListener(camera: THREE.Camera, dt: number): void {
    if (!this.ctx) return;
    const l = this.ctx.listener;
    const p = camera.getWorldPosition(_v1);
    const q = camera.getWorldQuaternion(_q1);
    const fwd = _v2.set(0, 0, -1).applyQuaternion(q);
    const up = _v3.set(0, 1, 0).applyQuaternion(q);
    try {
      if (l.positionX) {
        // direct assignment — scheduling ramps every frame piles up audio
        // thread events and costs CPU for no audible benefit
        l.positionX.value = p.x;
        l.positionY.value = p.y;
        l.positionZ.value = p.z;
        l.forwardX.value = fwd.x;
        l.forwardY.value = fwd.y;
        l.forwardZ.value = fwd.z;
        l.upX.value = up.x;
        l.upY.value = up.y;
        l.upZ.value = up.z;
      } else {
        (l as unknown as { setPosition: (x: number, y: number, z: number) => void }).setPosition(p.x, p.y, p.z);
        (l as unknown as { setOrientation: (...a: number[]) => void }).setOrientation(fwd.x, fwd.y, fwd.z, up.x, up.y, up.z);
      }
    } catch { /* older browsers */ }

    // random glass clinks in the room for ambience life
    this.clinkTimer += dt;
    if (this.clinkTimer > this.nextClink) {
      this.nextClink = rand(6, 18);
      this.clinkTimer = 0;
      this.play3D('glassClink', new THREE.Vector3(rand(-6, 6), 1.1, rand(-7, -4)), { gain: rand(0.3, 0.7), reverb: 0.6 });
    }
  }
}

const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _q1 = new THREE.Quaternion();

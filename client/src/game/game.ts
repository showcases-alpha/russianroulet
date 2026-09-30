/**
 * game.ts — the client orchestrator: renderer, scene, camera modes, input,
 * local player movement + collisions, remote player interpolation, ragdoll
 * management, the revolver's whereabouts, network glue and the quality
 * watchdog. Gameplay authority always lives on the server; this class only
 * requests actions and presents the results.
 */
import * as THREE from 'three';
import type { ClientMessage, GameRules, LobbyPlayerInfo, MatchPlayerInfo, ServerMessage } from '../../../shared/protocol.js';
import { NetClient } from '../networking/netClient.js';
import { BarEnvironment, type Collider2D } from '../environment/bar.js';
import { Character, HAT_TYPES, JACKET_COLORS } from '../player/character.js';
import { Ragdoll } from '../physics/ragdoll.js';
import { PhysicsWorld } from '../physics/physicsWorld.js';
import { Revolver } from '../weapons/revolver.js';
import { ParticleSystem } from '../cinematic/particles.js';
import { CinematicSystem, type CineContext } from '../cinematic/cinematic.js';
import { PostFX } from './postfx.js';
import { getPreset, QUALITY_LEVELS, type QualityLevel, type QualitySettings } from './quality.js';
import { AudioEngine } from '../audio/audio.js';
import { UI, type UICallbacks } from '../ui/ui.js';
import { clamp, damp, dampV3, lerp } from './mathUtils.js';

interface PlayerEntity {
  id: string;
  name: string;
  colorIndex: number;
  character: Character | null;
  inMatch: boolean;
  alive: boolean;
  spectator: boolean;
  left: boolean;
  netPos: THREE.Vector3;
  netYaw: number;
  netSpeed: number;
  lastNetTime: number;
  footTimer: number;
  ragdoll: Ragdoll | null;
}

const LOBBY_SPAWNS: [number, number][] = [
  [3.6, 3.2], [-3.6, 3.4], [4.4, -2.6], [-4.4, -2.8],
  [0, 4.6], [6, 1.4], [-6, -1.2], [1.8, -4.2],
];

export class Game implements CineContext {
  renderer!: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera!: THREE.PerspectiveCamera;
  physics!: PhysicsWorld;
  bar!: BarEnvironment;
  particles!: ParticleSystem;
  revolver!: Revolver;
  audio = new AudioEngine();
  postfx!: PostFX;
  cinematic!: CinematicSystem;
  net = new NetClient();
  ui!: UI;

  rules: GameRules = { chamberCount: 6, liveCount: 1 } as GameRules;
  phase: 'CONNECTING' | 'LOBBY' | 'PLAYING' | 'ENDING' = 'CONNECTING';
  myId = '';
  private entities = new Map<string, PlayerEntity>();
  private currentTurnId: string | null = null;
  private turnNumber = 0;
  private visualChamber = 0;
  private matchPlayers: MatchPlayerInfo[] = [];

  // camera state
  camYaw = Math.PI;
  camPitch = -0.12;
  private camPos = new THREE.Vector3(0, 2, 5);
  private camLook = new THREE.Vector3(0, 1.4, 0);
  private spectatorMode: 'follow' | 'free' = 'follow';
  private spectatorTargetId: string | null = null;
  private freeCamPos = new THREE.Vector3(0, 2.4, 6);
  private shake = 0;

  // input
  private keys = new Set<string>();
  private pointerLocked = false;
  private sentShotThisTurn = false;

  // movement
  private sendMoveTimer = 0;
  private footTimer = 0;

  // quality
  qualityLevel: QualityLevel = 'high';
  private quality: QualitySettings = getPreset('high');
  private autoQuality = true;
  private fpsEMA = 60;
  private qualityCheckTimer = 0;

  // gun tween (back to the table when the holder dies)
  private gunTween: { from: THREE.Vector3; to: THREE.Vector3; fromQ: THREE.Quaternion; toQ: THREE.Quaternion; t: number; dur: number } | null = null;

  private clock = new THREE.Clock();
  private raf = 0;
  private lastNetInfo = 0;
  private matchStartGrace = 0;
  private paused = false;

  /** Debug/testing: stop rendering & simulating (network handlers keep working). */
  setPaused(p: boolean): void { this.paused = p; }

  /* ================================================== boot */

  async init(canvas: HTMLCanvasElement, progress: (frac: number, step: string) => void): Promise<void> {
    progress(0.05, 'Warming up the renderer');
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.camera = new THREE.PerspectiveCamera(58, 1, 0.05, 60);
    this.scene.fog = new THREE.FogExp2(0x0c0906, 0.030);
    this.scene.background = new THREE.Color(0x060403);

    await frame();
    progress(0.12, 'Pouring the drinks');
    this.quality = getPreset(this.qualityLevel);
    this.bar = new BarEnvironment(this.quality);
    this.bar.build((step, frac) => progress(0.12 + frac * 0.55, step));
    this.scene.add(this.bar.group);

    await frame();
    progress(0.7, 'Capturing the room reflections');
    this.physics = new PhysicsWorld();
    this.particles = new ParticleSystem(this.quality.particleDensity);
    this.scene.add(this.particles.group);

    // one-time cube camera → scene.environment (real bar-colored PBR reflections)
    const cubeRT = new THREE.WebGLCubeRenderTarget(this.quality.envMapSize, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
    const cubeCam = new THREE.CubeCamera(0.4, 40, cubeRT);
    cubeCam.position.set(0, 1.7, 0);
    this.scene.add(cubeCam);
    cubeCam.update(this.renderer, this.scene);
    this.scene.environment = cubeRT.texture;
    this.scene.remove(cubeCam);

    await frame();
    progress(0.8, 'Loading the revolver');
    this.revolver = new Revolver({
      onCockStart: () => this.audio.play3D('cock', this.revolver.getFlashWorld(V1), { gain: 0.9, reverb: 0.4 }),
      onCylinderStop: () => this.audio.play3D('cylinderStop', this.revolver.getFlashWorld(V1), { gain: 0.7 }),
      onHammerFall: () => { /* click handled per empty/live */ },
      onFire: () => { /* shot sound handled by the cinematic */ },
    });
    this.scene.add(this.revolver.group);
    this.revolver.placeOnTable(new THREE.Vector3(0.42, 0.855, 0.18), 2.1);
    this.revolver.group.visible = false;

    progress(0.9, 'Setting the mood');
    this.postfx = new PostFX(this.renderer, this.scene, this.camera, this.quality);
    this.cinematic = new CinematicSystem(this);

    this.ui = new UI(this.makeUICallbacks());
    this.wireInput(canvas);
    this.wireNetwork();
    this.applyQuality(this.qualityLevel, true);

    progress(1, 'Ready');
    this.startLoop();
  }

  /* ================================================== quality */

  applyQuality(level: QualityLevel, initial = false): void {
    this.qualityLevel = level;
    this.quality = getPreset(level);
    const q = this.quality;
    const dpr = Math.min(window.devicePixelRatio || 1, q.pixelRatio);
    this.renderer.setPixelRatio(dpr);
    this.renderer.shadowMap.enabled = q.shadows;
    this.scene.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
      if (m) (Array.isArray(m) ? m : [m]).forEach((mm) => (mm.needsUpdate = true));
    });
    this.renderer.shadowMap.needsUpdate = true;
    this.postfx.bloomPass.enabled = q.bloom;
    this.postfx.refreshDof();
    if (this.bar) {
      this.bar.group.traverse((o) => {
        if (o instanceof THREE.SpotLight || o instanceof THREE.DirectionalLight) {
          if (o.shadow) o.shadow.mapSize.set(q.shadowMapSize, q.shadowMapSize);
          if (o.shadow) o.shadow.map?.dispose?.();
          if (o.shadow) (o.shadow as unknown as { map: unknown }).map = null as unknown as THREE.Texture;
        }
      });
    }
    this.resize();
    if (!initial) this.ui.toast(`Graphics: ${level.toUpperCase()}`, 'info');
  }

  /* ================================================== UI callbacks */

  private makeUICallbacks(): UICallbacks {
    return {
      onEnter: (name, quality) => this.enter(name, quality),
      onReady: (ready) => this.net.send({ type: 'set_ready', ready }),
      onStart: () => this.net.send({ type: 'start_game' }),
      onSettingsChanged: (rules) => this.net.send({ type: 'update_settings', rules }),
      onBackToLobby: () => this.net.send({ type: 'return_to_lobby' }),
      onQualityChange: (q) => this.applyQuality(q),
      onAutoQuality: (auto) => { this.autoQuality = auto; },
      onVolume: (v) => this.audio.setVolume(v),
      onMusicVolume: (v) => this.audio.setMusicVolume(v),
      onSensitivity: (v) => { this.sensitivity = v; },
      onSpectatorPrev: () => this.cycleSpectator(-1),
      onSpectatorNext: () => this.cycleSpectator(1),
      onSpectatorFree: () => this.toggleFreeCam(),
    };
  }

  private sensitivity = 1;

  private async enter(name: string, quality: QualityLevel): Promise<void> {
    this.applyQuality(quality);
    await this.audio.start();
    this.audio.startLoops();
    this.audio.setLoopsRunning(true);
    this.net.connect(name);
    this.ui.hideLoading();
  }

  /* ================================================== network */

  private wireNetwork(): void {
    this.net.onStatusChange = (connected) => {
      if (!connected && this.phase !== 'CONNECTING') this.ui.toast('Connection lost — reconnecting…', 'error');
    };

    this.net.on('welcome', (m) => {
      this.myId = m.playerId;
      this.rules = m.rules;
      this.phase = m.phase === 'PLAYING' ? 'PLAYING' : m.phase === 'ENDING' ? 'ENDING' : 'LOBBY';
      this.ui.setMyInfo(this.myId, '');
      if (this.phase === 'LOBBY') this.ui.showLobby();
    });

    this.net.on('lobby_state', (m) => {
      this.syncLobbyEntities(m.players);
      const hostId = m.hostId;
      this.ui.setMyInfo(this.myId, hostId);
      this.ui.renderLobby(m.players, hostId, m.canStart, m.rules);
      this.rules = m.rules;
    });

    this.net.on('game_start', (m) => this.onGameStart(m));
    this.net.on('turn_start', (m) => this.onTurnStart(m));
    this.net.on('turn_action', (m) => this.onTurnAction(m));
    this.net.on('shot_result', (m) => this.onShotResult(m));
    this.net.on('reload_start', (m) => {
      this.cinematic.beginReload();
      void m.firstChamberOffset;
    });
    this.net.on('states', (m) => this.onStates(m));
    this.net.on('player_left', (m) => this.onPlayerLeft(m));
    this.net.on('spectator_start', (m) => this.onSpectatorStart(m));
    this.net.on('match_end', (m) => this.onMatchEnd(m));
    this.net.on('back_to_lobby', () => this.onBackToLobby());
    this.net.on('error', (m) => this.ui.toast(m.message, 'error'));
  }

  private entity(id: string): PlayerEntity | undefined { return this.entities.get(id); }
  private ensureEntity(id: string, name: string, colorIndex: number): PlayerEntity {
    let e = this.entities.get(id);
    if (!e) {
      e = {
        id, name, colorIndex, character: null, inMatch: false, alive: true,
        spectator: false, left: false,
        netPos: new THREE.Vector3(), netYaw: 0, netSpeed: 0,
        lastNetTime: 0, footTimer: 0, ragdoll: null,
      };
      this.entities.set(id, e);
    }
    return e;
  }

  private spawnCharacter(e: PlayerEntity, pos: THREE.Vector3, yaw: number): void {
    if (e.character) return;
    const hat = HAT_TYPES[e.colorIndex % HAT_TYPES.length];
    e.character = new Character(e.id, e.name, e.colorIndex, hat);
    e.character.group.position.copy(pos);
    e.character.group.rotation.y = yaw;
    this.scene.add(e.character.group);
  }

  private removeCharacter(e: PlayerEntity): void {
    if (e.ragdoll) {
      e.ragdoll.dispose(this.physics);
      e.ragdoll = null;
    }
    if (e.character) {
      e.character.dispose();
      e.character = null;
    }
  }

  /* ---------------- lobby ---------------- */

  private syncLobbyEntities(players: LobbyPlayerInfo[]): void {
    if (this.phase !== 'LOBBY') return;
    const seen = new Set<string>();
    players.forEach((p, i) => {
      seen.add(p.id);
      const e = this.ensureEntity(p.id, p.name, p.colorIndex);
      e.name = p.name;
      if (!e.character && p.connected) {
        const spawn = LOBBY_SPAWNS[i % LOBBY_SPAWNS.length];
        this.spawnCharacter(e, new THREE.Vector3(spawn[0], 0, spawn[1]), Math.PI);
      }
    });
    for (const [id, e] of this.entities) {
      if (!seen.has(id) && !e.inMatch) {
        this.removeCharacter(e);
        this.entities.delete(id);
      }
    }
  }

  /* ---------------- match ---------------- */

  private onGameStart(m: Extract<ServerMessage, { type: 'game_start' }>): void {
    this.phase = 'PLAYING';
    this.rules = m.rules;
    this.cinematic.cancel();
    this.ui.hideLobby();
    this.ui.hideEndScreen();
    this.ui.hideSpectator();
    this.ui.setTurnDuration(m.rules.turnTimeoutSec);

    // clear everything from the previous match / lobby
    for (const e of this.entities.values()) {
      this.removeCharacter(e);
      e.ragdoll = null;
    }
    this.entities.clear();

    const seats = this.bar.buildChairsForPlayers(m.players.length);
    this.matchPlayers = m.players;
    m.players.forEach((p) => {
      const e = this.ensureEntity(p.id, p.name, p.colorIndex);
      e.inMatch = true;
      e.alive = p.alive;
      e.spectator = p.spectator;
      e.left = false;
      const seat = seats[p.seat] ?? seats[0];
      if (!p.spectator && p.alive) {
        this.spawnCharacter(e, seat.pos, seat.yaw);
        e.netPos.copy(seat.pos);
        e.netYaw = seat.yaw;
        if (p.id === this.myId) {
          // start behind my character, facing the table
          this.camYaw = seat.yaw;
          this.camPitch = -0.1;
        }
      }
    });

    this.revolver.group.visible = true;
    this.revolver.placeOnTable(new THREE.Vector3(0.42, 0.855, 0.18), Math.random() * Math.PI * 2);
    this.revolver.resetChambers();
    this.visualChamber = 0;
    this.currentTurnId = null;
    this.matchStartGrace = 1.2;
    this.audio.play3D('glassClink', new THREE.Vector3(0, 1, 0), { gain: 0.8, reverb: 0.7 });
    this.ui.toast('The revolver is on the table.', 'info');
    this.ui.renderPlayersList(m.players, null);
    this.ui.hideTurnBanner();
    this.ui.hidePrompt();
    if (m.joining) {
      this.becomeSpectatorNow('joined mid-match');
    }
  }

  private onTurnStart(m: Extract<ServerMessage, { type: 'turn_start' }>): void {
    this.currentTurnId = m.playerId;
    this.turnNumber = m.turnNumber;
    this.sentShotThisTurn = false;
    const holder = this.entity(m.playerId);
    if (holder?.character && holder.alive) {
      this.revolver.giveTo(holder.character.getGripAnchor('R'));
      this.audio.play3D('draw', this.revolver.getFlashWorld(V1), { gain: 0.8, reverb: 0.3 });
    }
    const mine = m.playerId === this.myId;
    const name = holder?.name ?? '?';
    this.ui.showTurnBanner(mine ? 'YOUR TURN' : `${name}'s turn`, mine, m.deadline);
    this.ui.renderPlayersList(this.matchPlayers, m.playerId);
    this.audio.setTension(mine ? 0.3 : 0.15);
    if (mine) this.audio.play('ui', { gain: 0.6 });
    // clear stale aim poses from the last shot
    for (const e of this.entities.values()) e.character?.setAimTarget(null);
  }

  private onTurnAction(m: Extract<ServerMessage, { type: 'turn_action' }>): void {
    // everyone watches the shooter take aim
    this.cinematic.beginPreShot({ shooterId: m.shooterId, targetId: m.targetId, self: m.self });
    this.ui.hidePrompt();
    this.ui.hideCrosshair();
    this.ui.hideTurnBanner();
    if (m.shooterId === this.myId) this.sentShotThisTurn = true;
  }

  private onShotResult(m: Extract<ServerMessage, { type: 'shot_result' }>): void {
    this.cinematic.resolveShot({
      result: m.result,
      chamberIndex: m.chamberIndex,
      eliminatedId: m.eliminatedId,
    });
    // authoritative roster update
    if (m.eliminatedId) {
      const e = this.entity(m.eliminatedId);
      if (e) { e.alive = false; e.spectator = true; }
      const mp = this.matchPlayers.find((p) => p.id === m.eliminatedId);
      if (mp) { mp.alive = false; mp.spectator = true; }
    }
    this.ui.renderPlayersList(this.matchPlayers, m.nextPlayerId);
  }

  private onStates(m: Extract<ServerMessage, { type: 'states' }>): void {
    for (const [id, x, y, z, yaw, anim] of m.s) {
      if (id === this.myId) continue;
      const e = this.entity(id);
      if (!e || !e.character || !e.alive) continue;
      const now = performance.now() / 1000;
      const prev = V1.copy(e.netPos);
      e.netPos.set(x, y, z);
      e.netYaw = yaw;
      if (e.lastNetTime > 0) {
        const dt = Math.max(0.05, now - e.lastNetTime);
        e.netSpeed = lerp(e.netSpeed, Math.min(4.5, prev.distanceTo(e.netPos) / dt), 0.5);
      }
      e.lastNetTime = now;
      void anim;
    }
  }

  private onPlayerLeft(m: Extract<ServerMessage, { type: 'player_left' }>): void {
    const e = this.entity(m.id);
    this.ui.toast(`${m.name} left the bar`, 'info');
    if (e) {
      this.removeCharacter(e);
      this.entities.delete(m.id);
      this.matchPlayers = this.matchPlayers.filter((p) => p.id !== m.id);
    }
    if (m.newHostId === this.myId) this.ui.toast('You are the host now.', 'info');
    this.ui.renderPlayersList(this.matchPlayers, this.currentTurnId);
  }

  private onSpectatorStart(m: Extract<ServerMessage, { type: 'spectator_start' }>): void {
    // the cinematic (if running) will call becomeSpectator at the right beat;
    // otherwise switch immediately (reconnects / mid-match joins)
    if (!this.cinematic.activeShot) this.becomeSpectatorNow('eliminated');
    void m;
  }

  private onMatchEnd(m: Extract<ServerMessage, { type: 'match_end' }>): void {
    this.phase = 'ENDING';
    this.matchPlayers = m.players;
    this.currentTurnId = null;
    this.ui.hidePrompt();
    this.ui.hideCrosshair();
    this.ui.hideTurnBanner();
    this.audio.setTension(0);
    this.cinematic.beginWinner(m.winnerId);
  }

  private onBackToLobby(): void {
    this.phase = 'LOBBY';
    this.cinematic.cancel();
    this.ui.hideEndScreen();
    this.ui.hideSpectator();
    this.ui.hidePrompt();
    this.ui.hideCrosshair();
    for (const e of this.entities.values()) {
      this.removeCharacter(e);
    }
    this.entities.clear();
    this.matchPlayers = [];
    this.currentTurnId = null;
    this.spectatorMode = 'follow';
    this.spectatorTargetId = null;
    this.revolver.placeOnTable(new THREE.Vector3(0.42, 0.855, 0.18), Math.random() * Math.PI * 2);
    this.ui.showLobby();
  }

  /* ================================================== cinematic context */

  getScene(): THREE.Scene { return this.scene; }
  getCharacter(id: string): Character | null { return this.entities.get(id)?.character ?? null; }
  getRevolver(): Revolver { return this.revolver; }
  getParticles(): ParticleSystem { return this.particles; }
  getAudio(): AudioEngine { return this.audio; }
  getPostFX(): PostFX { return this.postfx; }
  isMe(id: string): boolean { return id === this.myId; }
  myCharacter(): Character | null { return this.entities.get(this.myId)?.character ?? null; }
  visualChamberIndex(): number { return this.visualChamber; }

  onVisualChamberFired(index: number): void {
    this.visualChamber = (index + 1) % this.rules.chamberCount;
  }
  onResetChambers(): void { this.visualChamber = 0; }

  createRagdoll(playerId: string, impulse: THREE.Vector3): void {
    const e = this.entity(playerId);
    if (!e || !e.character || e.ragdoll) return;
    e.ragdoll = new Ragdoll(this.physics, e.character, impulse);
    e.character = e.character; // ragdoll owns the meshes now; keep ref for tags
    // if the gun holder just died, the gun drops back to the table
    if (playerId === this.currentTurnId) {
      this.scene.attach(this.revolver.group);
      const from = this.revolver.group.position.clone();
      const fromQ = this.revolver.group.quaternion.clone();
      const to = new THREE.Vector3(0.42, 0.855, 0.18);
      const toQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.random() * Math.PI * 2, Math.PI / 2 - 0.08));
      this.gunTween = { from, to, fromQ, toQ, t: 0, dur: 0.75 };
      this.currentTurnId = null;
    }
  }

  becomeSpectator(): void {
    this.becomeSpectatorNow('eliminated');
  }

  private becomeSpectatorNow(reason: string): void {
    const me = this.entity(this.myId);
    if (me) { me.alive = false; me.spectator = true; }
    this.spectatorMode = 'follow';
    this.spectatorTargetId = this.firstAliveId();
    this.ui.showSpectator(this.spectatorName());
    this.ui.toast(reason === 'joined mid-match' ? 'You joined mid-match — spectating.' : 'You were eliminated.', 'info');
    this.audio.play('spectator', { gain: 0.7 });
    this.exitPointerLock();
  }

  private firstAliveId(): string | null {
    for (const p of this.matchPlayers) if (p.alive && !p.spectator && !p.left && p.id !== this.myId) return p.id;
    return null;
  }

  private spectatorName(): string {
    const e = this.spectatorTargetId ? this.entity(this.spectatorTargetId) : null;
    return e?.name ?? (this.spectatorMode === 'free' ? 'free camera' : 'nobody');
  }

  private cycleSpectator(dir: number): void {
    const alive = this.matchPlayers.filter((p) => p.alive && !p.spectator && !p.left && p.id !== this.myId);
    if (!alive.length) return;
    const idx = alive.findIndex((p) => p.id === this.spectatorTargetId);
    const next = alive[(idx + dir + alive.length) % alive.length];
    this.spectatorTargetId = next.id;
    this.spectatorMode = 'follow';
    this.ui.showSpectator(this.spectatorName());
    this.audio.play('ui', { gain: 0.4 });
  }

  private toggleFreeCam(): void {
    if (this.phase !== 'PLAYING' && this.phase !== 'ENDING') return;
    const me = this.entity(this.myId);
    if (me && me.alive && !me.spectator) return;
    this.spectatorMode = this.spectatorMode === 'free' ? 'follow' : 'free';
    if (this.spectatorMode === 'free') {
      const target = this.spectatorTargetId ? this.entity(this.spectatorTargetId) : null;
      if (target?.character) this.freeCamPos.copy(target.character.group.position).add(new THREE.Vector3(0, 2.2, 3));
      else this.freeCamPos.set(0, 2.4, 6);
    }
    this.ui.showSpectator(this.spectatorName());
  }

  gameplayCameraPose(out: { pos: THREE.Vector3; look: THREE.Vector3 }): void {
    const me = this.entity(this.myId);
    const iAmAlive = me?.alive && !me.spectator && (this.phase === 'PLAYING' || this.phase === 'LOBBY');
    if (iAmAlive && me?.character) {
      this.thirdPersonPose(me.character, out);
      return;
    }
    if (this.spectatorMode === 'free') {
      out.pos.copy(this.freeCamPos);
      out.look.copy(this.freeCamPos).add(this.freeCamDir());
      return;
    }
    // follow the spectated player (or the table if nobody left)
    const t = this.spectatorTargetId ? this.entity(this.spectatorTargetId) : null;
    const anchor = t?.character ? t.character.group.position : TMP_A.set(0, 1, 0);
    out.pos.set(
      anchor.x + Math.sin(this.camYaw + Math.PI) * 3.4,
      anchor.y + 1.9,
      anchor.z + Math.cos(this.camYaw + Math.PI) * 3.4,
    );
    out.look.set(anchor.x, anchor.y + 1.2, anchor.z);
  }

  private freeCamDir(): THREE.Vector3 {
    return TMP_B.set(
      Math.sin(this.camYaw) * Math.cos(this.camPitch),
      Math.sin(this.camPitch),
      Math.cos(this.camYaw) * Math.cos(this.camPitch),
    );
  }

  private thirdPersonPose(char: Character, out: { pos: THREE.Vector3; look: THREE.Vector3 }): void {
    const head = char.getPartWorld('head');
    const dist = 3.1;
    const dir = TMP_C.set(
      Math.sin(this.camYaw) * Math.cos(this.camPitch),
      Math.sin(this.camPitch),            // pitch > 0 = looking up (matches mouse + free cam)
      Math.cos(this.camYaw) * Math.cos(this.camPitch),
    );
    // shoulder offset to the right of the view
    const right = TMP_D.set(-dir.z, 0, dir.x).normalize();
    out.pos.copy(head).addScaledVector(dir, -dist).addScaledVector(right, 0.55);
    out.pos.y = clamp(out.pos.y, 0.4, 3.85); // keep the chase camera inside the room
    out.look.copy(head).addScaledVector(dir, 4);
  }

  showEndScreen(winnerId: string | null): void {
    const winner = this.matchPlayers.find((p) => p.id === winnerId);
    const iWon = winnerId === this.myId;
    this.ui.showEndScreen(winner?.name ?? null, this.matchPlayers, this.myId === this.lastKnownHostId, iWon);
  }

  private lastKnownHostId = '';

  /* ================================================== input */

  private wireInput(canvas: HTMLCanvasElement): void {
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === canvas;
      if (!this.pointerLocked) this.keys.clear();
    });
    canvas.addEventListener('click', () => {
      if (!this.audio.ready) return;
      const me = this.entity(this.myId);
      const inGame = this.phase === 'PLAYING' || this.phase === 'LOBBY' || this.phase === 'ENDING';
      const iAmAlive = !!(me?.alive && !me.spectator);
      // anyone in the game (alive or spectating) can take the mouse to look around
      if (inGame && !this.cinematic.activeShot && !this.pointerLocked) {
        canvas.requestPointerLock();
        return;
      }
      if (this.pointerLocked && this.phase === 'PLAYING' && iAmAlive && !this.cinematic.activeShot
        && this.currentTurnId === this.myId && !this.sentShotThisTurn) {
        this.tryShootAtCrosshair();
      }
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.pointerLocked) return;
      const s = 0.0022 * this.sensitivity;
      this.camYaw -= e.movementX * s;
      this.camPitch = clamp(this.camPitch - e.movementY * s, -1.25, 1.0);
    });
    document.addEventListener('keydown', (e) => {
      if (e.target instanceof HTMLInputElement) return;
      this.keys.add(e.code);
      if (e.code === 'KeyF') this.tryShootSelf();
      if (e.code === 'KeyV') this.toggleFreeCam();
      if (e.code === 'KeyQ') this.cycleSpectator(-1);
      if (e.code === 'KeyE') this.cycleSpectator(1);
    });
    document.addEventListener('keyup', (e) => this.keys.delete(e.code));
  }

  private exitPointerLock(): void {
    if (document.pointerLockElement) document.exitPointerLock();
  }

  /** My turn, alive, not in a cinematic → fire at whoever is under the crosshair. */
  private tryShootAtCrosshair(): void {
    if (this.currentTurnId !== this.myId || this.sentShotThisTurn || this.cinematic.activeShot) return;
    const me = this.entity(this.myId);
    if (!me?.alive || me.spectator) return;
    const hit = this.raycastCharacters();
    if (hit && hit !== this.myId) {
      this.net.send({ type: 'shoot', target: hit });
      this.sentShotThisTurn = true;
    }
  }

  private tryShootSelf(): void {
    if (this.phase !== 'PLAYING') return;
    const me = this.entity(this.myId);
    if (!me?.alive || me.spectator) return;
    if (this.currentTurnId !== this.myId || this.sentShotThisTurn || this.cinematic.activeShot) return;
    this.net.send({ type: 'shoot', target: 'self' });
    this.sentShotThisTurn = true;
  }

  private raycastCharacters(): string | null {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const hitboxes: THREE.Object3D[] = [];
    for (const e of this.entities.values()) {
      if (e.character && e.alive && !e.spectator && e.id !== this.myId && !e.ragdoll) {
        hitboxes.push(e.character.hitbox);
      }
    }
    const hits = this.raycaster.intersectObjects(hitboxes, false);
    return hits.length ? (hits[0].object.userData.playerId as string) : null;
  }

  private raycaster = new THREE.Raycaster();

  /* ================================================== movement */

  private moveLocal(dt: number): void {
    const me = this.entity(this.myId);
    if (!me?.character || !me.alive || me.spectator) return;
    const canMove =
      (this.phase === 'LOBBY' || (this.phase === 'PLAYING' && !this.cinematic.activeShot && this.matchStartGrace <= 0));
    if (!canMove || !this.pointerLocked) {
      me.character.update(dt, 0);
      this.sendMove(me, 0);
      return;
    }

    const forward = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    const strafe = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    const run = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
    const speed = run ? 4.1 : 2.1;
    const move = V1.set(0, 0, 0);
    if (forward || strafe) {
      // camera-relative movement
      // camera-relative movement: view forward is (sin(yaw), 0, cos(yaw)),
      // screen right is (-cos(yaw), 0, sin(yaw))
      const sin = Math.sin(this.camYaw), cos = Math.cos(this.camYaw);
      move.x = forward * sin - strafe * cos;
      move.z = forward * cos + strafe * sin;
      move.normalize().multiplyScalar(speed);
    }
    const char = me.character;
    const pos = char.group.position;
    pos.x += move.x * dt;
    pos.z += move.z * dt;
    this.resolveCollisions(pos);
    pos.x = clamp(pos.x, -10.2, 10.2);
    pos.z = clamp(pos.z, -7.0, 7.2);
    pos.y = 0;

    const moving = move.lengthSq() > 0.01;
    if (moving) {
      const targetYaw = Math.atan2(move.x, move.z);
      let d = targetYaw - char.group.rotation.y;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      char.group.rotation.y += d * Math.min(1, dt * 12);
      this.footTimer -= dt;
      if (this.footTimer <= 0) {
        this.footTimer = run ? 0.31 : 0.46;
        this.audio.play('footstep', { gain: 0.5, rate: 0.9 + Math.random() * 0.2 });
      }
    }
    char.update(dt, moving ? speed : 0);
    this.sendMove(me, moving ? 1 : 0);
  }

  private resolveCollisions(pos: THREE.Vector3): void {
    const R = 0.42;
    for (const c of this.bar.colliders) {
      if (c.kind === 'circle') {
        const dx = pos.x - c.x, dz = pos.z - c.z;
        const dist = Math.hypot(dx, dz);
        const min = (c.r ?? 1) + R;
        if (dist < min && dist > 0.0001) {
          pos.x = c.x + (dx / dist) * min;
          pos.z = c.z + (dz / dist) * min;
        }
      } else {
        const hw = (c.hw ?? 1) + R, hd = (c.hd ?? 1) + R;
        const dx = pos.x - c.x, dz = pos.z - c.z;
        if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
          const px = hw - Math.abs(dx), pz = hd - Math.abs(dz);
          if (px < pz) pos.x = c.x + Math.sign(dx || 1) * hw;
          else pos.z = c.z + Math.sign(dz || 1) * hd;
        }
      }
    }
  }

  private sendMove(me: PlayerEntity, anim: number): void {
    const now = performance.now();
    if (now - this.sendMoveTimer < 66) return; // ~15 Hz
    this.sendMoveTimer = now;
    const p = me.character!.group.position;
    this.net.send({
      type: 'move',
      p: [+p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2)],
      yaw: +me.character!.group.rotation.y.toFixed(2),
      anim,
    });
  }

  /* ================================================== per-frame */

  private updateRemotes(dt: number): void {
    for (const e of this.entities.values()) {
      if (!e.character || !e.alive || e.ragdoll) continue;
      if (e.id === this.myId) continue;
      // smooth interpolation toward the last server state
      dampV3(e.character.group.position, e.netPos, 9, dt);
      let d = e.netYaw - e.character.group.rotation.y;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      e.character.group.rotation.y += d * Math.min(1, dt * 10);
      e.character.update(dt, e.netSpeed);
      if (e.netSpeed > 0.6) {
        e.footTimer -= dt;
        if (e.footTimer <= 0) {
          e.footTimer = 0.45;
          this.audio.play3D('footstep', e.character.group.position, { gain: 0.45, rate: 0.9 + Math.random() * 0.25 });
        }
      }
      if (e.netSpeed > 0.1) e.netSpeed = lerp(e.netSpeed, 0, dt * 0.6);
    }
  }

  private updateRagdolls(dt: number): void {
    for (const e of this.entities.values()) {
      if (!e.ragdoll) continue;
      e.ragdoll.update(dt);
      const ageMs = e.ragdoll.age * 1000;
      if (ageMs > (this.rules.cleanupDelayMs ?? 9000)) {
        if (e.ragdoll.fade(dt)) {
          e.ragdoll.dispose(this.physics);
          e.ragdoll = null;
          e.character?.dispose();
          e.character = null;
        }
      }
      if (false) {
      }
    }
  }

  private updateCamera(dt: number): void {
    const cineActive = this.cinematic.active;
    if (!cineActive) {
      // normal gameplay camera
      const me = this.entity(this.myId);
      const iAmAlive = me?.alive && !me.spectator && (this.phase === 'PLAYING' || this.phase === 'LOBBY');
      const pose = { pos: POSE_POS, look: POSE_LOOK };
      this.gameplayCameraPose(pose);
      if (iAmAlive && me?.character) {
        dampV3(this.camPos, pose.pos, 10, dt);
        dampV3(this.camLook, pose.look, 14, dt);
      } else if (this.spectatorMode === 'free') {
        // free cam is directly controlled
        const speed = (this.keys.has('ShiftLeft') ? 8 : 4);
        const dir = this.freeCamDir();
        const fwd = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
        const strafe = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
        const up = (this.keys.has('Space') ? 1 : 0) - (this.keys.has('ControlLeft') ? 1 : 0);
        const right = TMP_D.set(-dir.z, 0, dir.x).normalize();
        this.freeCamPos.addScaledVector(dir, fwd * speed * dt);
        this.freeCamPos.addScaledVector(right, strafe * speed * dt);
        this.freeCamPos.y = clamp(this.freeCamPos.y + up * speed * dt, 0.4, 4.0);
        this.freeCamPos.x = clamp(this.freeCamPos.x, -10.5, 10.5);
        this.freeCamPos.z = clamp(this.freeCamPos.z, -7.4, 7.4);
        this.camPos.copy(this.freeCamPos);
        this.camLook.copy(this.freeCamPos).add(dir);
      } else {
        dampV3(this.camPos, pose.pos, 4.5, dt);
        dampV3(this.camLook, pose.look, 6, dt);
      }
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(this.camLook);
      if (Math.abs(this.camera.fov - 58) > 0.01) {
        this.camera.fov = damp(this.camera.fov, 58, 4, dt);
        this.camera.updateProjectionMatrix();
      }
    }

    // camera shake (from cinematics + impacts)
    const cineShake = this.cinematic.consumeShake();
    if (cineShake > 0) this.shake = Math.max(this.shake, cineShake);
    if (this.shake > 0.001) {
      const t = performance.now() / 1000;
      const s = this.shake * this.shake * 0.09;
      this.camera.position.add(V1.set(
        Math.sin(t * 71) * s + (Math.random() - 0.5) * s * 0.6,
        Math.sin(t * 83 + 2) * s + (Math.random() - 0.5) * s * 0.6,
        Math.sin(t * 61 + 4) * s,
      ));
      this.camera.rotation.z += Math.sin(t * 77) * this.shake * 0.012;
      this.shake = Math.max(0, this.shake - dt * 2.4);
    }
  }

  private updateTurnUI(dt: number): void {
    const me = this.entity(this.myId);
    const iAmAlive = me?.alive && !me.spectator;
    const myTurn = this.phase === 'PLAYING' && this.currentTurnId === this.myId && !this.cinematic.activeShot && !this.sentShotThisTurn;
    if (myTurn && iAmAlive && this.matchStartGrace <= 0) {
      const hovered = this.pointerLocked ? this.raycastCharacters() : null;
      const hoveredName = hovered ? this.entity(hovered)?.name : null;
      if (hoveredName) {
        this.ui.showCrosshair(true);
        this.ui.showPrompt(`<span class="accent">${escapeHtml(hoveredName)}</span> is in your sights.<br><b>Click to pull the trigger</b> — or press <kbd>F</kbd> to shoot yourself.`);
      } else {
        this.ui.showCrosshair(false);
        this.ui.showPrompt(`Your turn. <span class="accent">Click a player to shoot them</span> · <kbd>F</kbd> shoot yourself`);
      }
    } else if (this.phase === 'PLAYING' && iAmAlive && !this.cinematic.activeShot) {
      this.ui.hideCrosshair();
      if (this.currentTurnId && this.currentTurnId !== this.myId && !this.cinematic.activeShot) {
        const name = this.entity(this.currentTurnId)?.name ?? 'someone';
        this.ui.showPrompt(`${escapeHtml(name)} has the revolver…`);
      } else {
        this.ui.hidePrompt();
      }
    } else if (this.phase === 'LOBBY' && me?.character) {
      this.ui.hideCrosshair();
      this.ui.hidePrompt();
    } else {
      this.ui.hideCrosshair();
    }
    void dt;
  }

  private startLoop(): void {
    const loop = () => {
      this.raf = requestAnimationFrame(loop);
      if (this.paused) return;
      // realDt drives cinematic clocks / camera / audio (always completes on time);
      // rawDt is capped so physics and animation stay stable after long stalls.
      const realDt = Math.min(0.5, this.clock.getDelta());
      const rawDt = Math.min(0.05, realDt);
      const dt = rawDt * this.cinematic.timeScale;

      if (this.matchStartGrace > 0) this.matchStartGrace -= rawDt;

      // world simulation (slow-motion aware)
      this.moveLocal(dt);
      this.updateRemotes(dt);
      this.bar.update(dt);
      this.particles.update(dt);
      this.physics.step(dt, 1);
      this.updateRagdolls(dt);
      this.updateGunTween(rawDt);
      this.revolver.update(dt);

      // during a shot cinematic everyone watches the shooter
      if (this.cinematic.activeShot) {
        const shooter = this.currentCineShooterId ? this.entity(this.currentCineShooterId) : null;
        if (shooter?.character) {
          for (const e of this.entities.values()) {
            if (e.character && e.id !== shooter.id && !e.ragdoll) {
              e.character.setLookAt(shooter.character.getPartWorld('head'));
            }
          }
        }
      }

      // camera + cinematics (real time)
      this.cinematic.update(realDt, this.camera);
      this.updateCamera(realDt);
      this.updateTurnUI(realDt);

      // audio
      this.audio.updateListener(this.camera, realDt);

      // hud refresh
      const now = performance.now();
      if (now - this.lastNetInfo > 500) {
        this.lastNetInfo = now;
        this.fpsEMA = this.fpsEMA * 0.7 + (1 / Math.max(0.001, realDt)) * 0.3;
        this.ui.setNetInfo(this.net.connected, this.net.latency, Math.round(this.fpsEMA), this.qualityLevel);
        this.watchdogQuality();
      }

      this.postfx.render(realDt);
    };
    this.raf = requestAnimationFrame(loop);
  }

  private currentCineShooterId: string | null = null;

  private updateGunTween(dt: number): void {
    if (!this.gunTween) return;
    const g = this.gunTween;
    g.t = Math.min(1, g.t + dt / g.dur);
    const e = 1 - Math.pow(1 - g.t, 3);
    this.revolver.setTweening(true);
    this.revolver.group.position.lerpVectors(g.from, g.to, e);
    this.revolver.group.quaternion.slerpQuaternions(g.fromQ, g.toQ, e);
    if (g.t >= 1) {
      this.gunTween = null;
      this.revolver.setTweening(false);
    }
  }

  private watchdogQuality(): void {
    if (!this.autoQuality) return;
    this.qualityCheckTimer += 0.5;
    if (this.qualityCheckTimer < 6) return;
    this.qualityCheckTimer = 0;
    if (this.fpsEMA < 33) {
      const idx = QUALITY_LEVELS.indexOf(this.qualityLevel);
      if (idx > 0) {
        this.applyQuality(QUALITY_LEVELS[idx - 1]);
        this.ui.toast(`Performance guard: graphics lowered to ${this.qualityLevel.toUpperCase()}`, 'info');
      }
    }
  }

  resize(): void {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.postfx?.setSize(w, h);
  }

  /** Debug/testing handle (also exposed as window.__game). */
  debugState(): {
    phase: string; myId: string; turnId: string | null; alive: Record<string, boolean>;
    entities: number; cine: string; fps: number; connected: boolean;
  } {
    const alive: Record<string, boolean> = {};
    for (const [id, e] of this.entities) alive[id] = e.alive && !e.spectator;
    return {
      phase: this.phase, myId: this.myId, turnId: this.currentTurnId,
      alive, entities: this.entities.size, cine: this.cinematic?.phase ?? 'n/a',
      fps: Math.round(this.fpsEMA), connected: this.net.connected,
    };
  }

  dispose(): void {
    cancelAnimationFrame(this.raf);
    this.net.disconnect();
    this.renderer.dispose();
  }
}

const V1 = new THREE.Vector3();
const V2 = new THREE.Vector3();
const V3 = new THREE.Vector3();
const TMP_A = new THREE.Vector3();
const TMP_B = new THREE.Vector3();
const TMP_C = new THREE.Vector3();
const TMP_D = new THREE.Vector3();
const POSE_POS = new THREE.Vector3();
const POSE_LOOK = new THREE.Vector3();

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

/** Yield to the event loop without relying on rAF (works in throttled tabs). */
function frame(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0));
}


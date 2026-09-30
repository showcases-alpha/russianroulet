/**
 * cinematic.ts — the shot / reload / winner cinematic state machine.
 *
 *   NORMAL → PRE_SHOT → TRIGGER ─┬─(EMPTY)→ click → hold → return
 *                                └─(LIVE)→ FIRE → BULLET cam → IMPACT →
 *                                          ragdoll → HOLD → RETURN → NORMAL
 *   RELOAD: focus gun → tilt → cylinder out → cartridge in → spin →
 *           close → fade black → (server resets chambers) → fade in → NORMAL
 *
 * Everything runs inside the real 3D scene: real revolver model, real
 * projectile, real ragdolls, real lights. The server decides outcomes and
 * pacing; this system is pure presentation and never snaps the camera.
 */
import * as THREE from 'three';
import type { GameRules } from '../../../shared/protocol.js';
import type { Character } from '../player/character.js';
import type { Revolver } from '../weapons/revolver.js';
import type { ParticleSystem } from './particles.js';
import type { AudioEngine } from '../audio/audio.js';
import type { PostFX } from '../game/postfx.js';
import { Bullet } from './bullet.js';
import { clamp, damp, dampV3, easeIn, easeOut, lerp } from '../game/mathUtils.js';

export type CinePhase =
  | 'idle' | 'preShot' | 'trigger' | 'fire' | 'bullet' | 'impact'
  | 'hold' | 'return' | 'reload' | 'winner' | 'returnAfterReload';

export interface ShotInfo {
  shooterId: string;
  targetId: string;
  self: boolean;
}

export interface ShotResultInfo {
  result: 'LIVE' | 'EMPTY';
  chamberIndex: number;
  eliminatedId: string | null;
}

export interface CineContext {
  rules: GameRules;
  getScene(): THREE.Scene;
  getCharacter(id: string): Character | null;
  getRevolver(): Revolver;
  getParticles(): ParticleSystem;
  getAudio(): AudioEngine;
  getPostFX(): PostFX;
  isMe(id: string): boolean;
  myCharacter(): Character | null;
  /** next chamber that would fire, for cylinder animation sync (visual only) */
  visualChamberIndex(): number;
  onVisualChamberFired(index: number): void;
  onResetChambers(): void;
  createRagdoll(playerId: string, impulse: THREE.Vector3): void;
  becomeSpectator(): void;
  /** where the normal gameplay camera wants to be right now */
  gameplayCameraPose(out: { pos: THREE.Vector3; look: THREE.Vector3 }): void;
  showEndScreen(winnerId: string | null): void;
}

const UP = new THREE.Vector3(0, 1, 0);
// scratch objects — the cinematic update path must not allocate (GC = stutter)
const T1 = new THREE.Vector3();
const T2 = new THREE.Vector3();
const T3 = new THREE.Vector3();
const T4 = new THREE.Vector3();
const T5 = new THREE.Vector3();
const TQ = new THREE.Quaternion();

export class CinematicSystem {
  phase: CinePhase = 'idle';
  private phaseTime = 0;
  private shot: ShotInfo | null = null;
  private result: ShotResultInfo | null = null;
  private resultKnown = false;
  private reloadTotal = 9000;
  private winnerId: string | null = null;
  private endScreenShown = false;

  timeScale = 1;
  private timeScaleTarget = 1;
  activeShot = false;      // any shot cinematic running (locks input)

  private camPos = new THREE.Vector3();
  private camLook = new THREE.Vector3();
  private camInitialized = false;
  private fovCurrent = 55;
  private fovTarget = 55;

  private fxTarget = {
    letterbox: 0, vignette: 0.32, grain: 0.35, chroma: 0, radial: 0, fade: 0,
    exposure: 1, contrast: 1.04, saturation: 1.02, tintR: 1, tintG: 1, tintB: 1,
    bloomBoost: 0, dofMaxBlur: 0,
  };

  private bullet: Bullet | null = null;
  private bulletPath = { from: new THREE.Vector3(), to: new THREE.Vector3() };
  private bulletAim = new THREE.Vector3();
  private bulletSide = new THREE.Vector3();
  private tmpHeadY = new THREE.Vector3();
  private tmpHeadY2 = new THREE.Vector3();
  private heartbeatAccum = 0;
  private spectatorDone = false;

  constructor(private ctx: CineContext) {}

  get active(): boolean { return this.phase !== 'idle'; }

  /* ================= entry points ================= */

  beginPreShot(shot: ShotInfo): void {
    // A new shot always takes over — even if a previous cinematic is still
    // running on a very slow client (the server has already moved on).
    if (this.phase === 'preShot' && this.shot?.shooterId === shot.shooterId && this.shot?.targetId === shot.targetId) return;
    if (this.phase !== 'idle') this.cancel();
    this.phase = 'preShot';
    this.phaseTime = 0;
    this.shot = shot;
    this.result = null;
    this.resultKnown = false;
    this.spectatorDone = false;
    this.activeShot = true;
    this.camInitialized = false;
    this.ctx.getPostFX().setCinematic(true);
    this.ctx.getAudio().setTension(0.75);
    this.ctx.getAudio().play('riser', { gain: 0.5 });
    this.fxTarget = { ...this.fxTarget, letterbox: 1, vignette: 0.55, grain: 0.55, chroma: 0.0015, radial: 0, fade: 0, exposure: 1.04, contrast: 1.1, saturation: 0.94, tintR: 1.02, tintG: 0.99, tintB: 1.0, bloomBoost: 0.05, dofMaxBlur: 0.008 };
  }

  resolveShot(result: ShotResultInfo): void {
    this.result = result;
    this.resultKnown = true;
  }

  beginReload(): void {
    // only after a live shot (server guarantees this); allow starting from return/idle
    this.phase = 'reload';
    this.phaseTime = 0;
    this.reloadTotal = Math.max(2500, this.ctx.rules.reloadMs);
    this.camInitialized = false;
    this.activeShot = true;
    this.fxTarget = { ...this.fxTarget, letterbox: 1, vignette: 0.5, grain: 0.5, chroma: 0.001, radial: 0, fade: 0, exposure: 1.02, contrast: 1.08, saturation: 0.96, bloomBoost: 0.03, dofMaxBlur: 0.0085 };
  }

  beginWinner(winnerId: string | null): void {
    this.phase = 'winner';
    this.phaseTime = 0;
    this.winnerId = winnerId;
    this.endScreenShown = false;
    this.camInitialized = false;
    this.activeShot = false;
    this.ctx.getAudio().setTension(0);
    this.ctx.getAudio().play('cheer', { gain: 0.7, reverb: 0.5 });
    this.fxTarget = { ...this.fxTarget, letterbox: 1, vignette: 0.45, grain: 0.5, chroma: 0, radial: 0, fade: 0, exposure: 1.06, contrast: 1.08, saturation: 1.06, bloomBoost: 0.15, dofMaxBlur: 0.006 };
  }

  cancel(): void {
    this.phase = 'idle';
    this.activeShot = false;
    this.timeScale = this.timeScaleTarget = 1;
    this.ctx.getAudio().setSlowmo(false);
    this.ctx.getAudio().setTension(0);
    this.removeBullet();
    this.fxTarget = { letterbox: 0, vignette: 0.32, grain: 0.35, chroma: 0, radial: 0, fade: 0, exposure: 1, contrast: 1.04, saturation: 1.02, tintR: 1, tintG: 1, tintB: 1, bloomBoost: 0, dofMaxBlur: 0 };
    this.ctx.getPostFX().setCinematic(false);
  }

  /* ================= per-frame ================= */

  update(dt: number, camera: THREE.PerspectiveCamera): void {
    // time scale easing
    this.timeScale = damp(this.timeScale, this.timeScaleTarget, 6, dt);
    this.ctx.getAudio().setSlowmo(this.timeScale < 0.7);

    if (this.phase === 'idle') {
      this.applyFx(dt, 3);
      return;
    }

    this.phaseTime += dt;
    const fx = this.ctx.getPostFX();

    switch (this.phase) {
      case 'preShot': this.updatePreShot(dt, camera); break;
      case 'trigger': this.updateTrigger(dt, camera); break;
      case 'fire': this.updateFire(dt, camera); break;
      case 'bullet': this.updateBullet(dt, camera); break;
      case 'impact': this.updateImpact(dt, camera); break;
      case 'hold': this.updateHold(dt, camera); break;
      case 'return': this.updateReturn(dt, camera); break;
      case 'reload': this.updateReload(dt, camera); break;
      case 'returnAfterReload': this.updateReturnAfterReload(dt, camera); break;
      case 'winner': this.updateWinner(dt, camera); break;
    }

    // apply camera
    if (this.camInitialized && this.phase !== 'return' && this.phase !== 'returnAfterReload') {
      camera.position.copy(this.camPos);
      camera.lookAt(this.camLook);
    }
    this.fovCurrent = damp(this.fovCurrent, this.fovTarget, 4, dt);
    if (Math.abs(camera.fov - this.fovCurrent) > 0.01) {
      camera.fov = this.fovCurrent;
      camera.updateProjectionMatrix();
    }
    // DOF focus tracks whatever we're looking at
    fx.params.dofFocus = this.camInitialized ? this.camPos.distanceTo(this.camLook) : 8;
    this.applyFx(dt, 4);
    void fx;
  }

  /* ---------------- PRE_SHOT ---------------- */

  private updatePreShot(dt: number, camera: THREE.PerspectiveCamera): void {
    const shot = this.shot!;
    const shooter = this.ctx.getCharacter(shot.shooterId);
    const target = this.ctx.getCharacter(shot.targetId);
    if (!shooter) return this.cancel();
    const gun = this.ctx.getRevolver();

    const total = Math.max(900, this.ctx.rules.preShotMs - 500);
    const t = this.phaseTime;

    // aim pose
    const headY = this.tmpHeadY;
    if (target) target.getPartWorld('head', headY);
    else shooter.getPartWorld('head', headY);
    headY.y += 0.12;
    shooter.setAimTarget(headY);
    shooter.setLookAt(headY);
    if (target && !shot.self) target.setLookAt(gun.getMuzzleWorld(T4));

    // camera pose
    const muzzle = gun.getMuzzleWorld(T1);
    const aim = T2;
    if (shot.self) {
      aim.copy(shooter.getPartWorld('head', T5)).sub(muzzle).normalize();
    } else {
      aim.copy(headY).sub(muzzle).normalize();
    }
    const side = T3.crossVectors(aim, UP).normalize();

    if (!this.camInitialized) {
      this.camPos.copy(camera.position);
      this.camLook.copy(headY);
      this.camInitialized = true;
      this.fovTarget = shot.self ? 44 : 38;
    }

    const desired = T4;
    if (shot.self) {
      // profile of the shooter: head + gun visible, dramatic side angle
      const back = T5.copy(aim).negate();
      desired.copy(shooter.getPartWorld('head', this.tmpHeadY2)).addScaledVector(side, 1.25).addScaledVector(back, 0.45).addScaledVector(UP, 0.12);
    } else {
      // just off the muzzle, looking down the barrel toward the target
      desired.copy(muzzle).addScaledVector(aim, -0.52).addScaledVector(side, 0.36).addScaledVector(UP, 0.17);
    }
    // gentle drift for operator feel
    desired.x += Math.sin(t * 0.7) * 0.02;
    desired.y += Math.sin(t * 0.53) * 0.012;
    dampV3(this.camPos, desired, 2.6, dt);

    const lookDesired = T5;
    if (shot.self) lookDesired.copy(shooter.getPartWorld('head', this.tmpHeadY2)).lerp(muzzle, 0.35);
    else lookDesired.copy(muzzle).addScaledVector(aim, 1.4).lerp(headY, 0.35);
    dampV3(this.camLook, lookDesired, 3, dt);

    // heartbeat tension
    this.heartbeatAccum += dt;
    if (this.heartbeatAccum > 0.85) {
      this.heartbeatAccum = 0;
      this.ctx.getAudio().play('heartbeat', { gain: 0.35 });
    }

    // beats: cock the hammer mid-pause, then take up trigger slack
    if (!this.beatFired('cocked') && t > total * 0.42) {
      this.setBeat('cocked');
      gun.cock(this.ctx.visualChamberIndex() + 1);
    }
    if (!this.beatFired('squeezed') && t > total * 0.75) {
      this.setBeat('squeezed');
      gun.squeezeTrigger();
      this.ctx.getAudio().play('trigger', { gain: 0.7 });
    }

    if (t >= total && this.resultKnown) {
      this.phase = 'trigger';
      this.phaseTime = 0;
      this.fovTarget = shot.self ? 40 : 33;
      this.setBeat(''); // reset beats for trigger phase
    }
  }

  /* ---------------- TRIGGER ---------------- */

  private updateTrigger(dt: number, camera: THREE.PerspectiveCamera): void {
    const shot = this.shot!;
    const gun = this.ctx.getRevolver();
    const live = this.result?.result === 'LIVE';
    const t = this.phaseTime;

    // slow push-in
    const push = easeOut(Math.min(1, t / 0.65)) * 0.16;
    const back = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    this.camPos.addScaledVector(back, -push * dt * 2.2);

    if (!this.beatFired('fall') && t > (live ? 0.3 : 0.22)) {
      this.setBeat('fall');
      gun.hammerFall();
      if (!live) {
        this.ctx.getAudio().play3D('click', gun.getFlashWorld(T1), { gain: 1.2, reverb: 0.5 });
      }
    }
    if (live) {
      if (t > 0.42) {
        this.phase = 'fire';
        this.phaseTime = 0;
      }
    } else {
      // empty: hammer already fell with a click — hold the beat, then let it go
      if (t > 1.6) {
        this.phase = 'hold';
        this.phaseTime = 0;
        this.holdEmpty = true;
        gun.releaseTrigger();
        this.ctx.getAudio().setTension(0);
        this.ctx.getAudio().play('relief', { gain: 0.5 });
        const shooter = this.ctx.getCharacter(shot.shooterId);
        shooter?.setHeadReaction(0.3);
        const target = this.ctx.getCharacter(shot.targetId);
        target?.setHeadReaction(-0.2);
      }
    }
  }

  /* ---------------- FIRE ---------------- */

  private updateFire(dt: number, camera: THREE.PerspectiveCamera): void {
    const shot = this.shot!;
    const gun = this.ctx.getRevolver();
    const audio = this.ctx.getAudio();
    const particles = this.ctx.getParticles();

    if (!this.beatFired('fired')) {
      this.setBeat('fired');
      const muzzle = gun.getMuzzleWorld(new THREE.Vector3());
      const targetHead = this.ctx.getCharacter(shot.targetId)?.getPartWorld('head') ?? muzzle;
      const aim = shot.self
        ? new THREE.Vector3().copy(this.ctx.getCharacter(shot.shooterId)!.getPartWorld('head')).sub(muzzle).normalize()
        : new THREE.Vector3().copy(targetHead).sub(muzzle).normalize();

      gun.fire();
      gun.releaseTrigger();
      particles.muzzleSparks(muzzle, aim);
      particles.muzzleSmoke(muzzle, aim);
      audio.play3D('shot', muzzle, { gain: 1.15, reverb: 0.9 });
      audio.play('boom', { gain: 0.5 });
      this.ctx.onVisualChamberFired(this.result!.chamberIndex);
      gun.markChamberFired(this.result!.chamberIndex);
      audio.setTension(0);
      this.shake(1.1);

      if (shot.self) {
        // self-shot: no bullet cam — impact directly after a beat
        this.bulletPath.from.copy(muzzle);
        this.bulletPath.to.copy(this.ctx.getCharacter(shot.shooterId)!.getPartWorld('head'));
        this.phase = 'impact';
        this.phaseTime = 0.25; // small delay for the flash to register
        this.impactDone = false;
        this.timeScaleTarget = 0.55;
        return;
      }

      // spawn the projectile
      this.removeBullet();
      this.bullet = new Bullet();
      this.bullet.group.position.copy(muzzle);
      this.bullet.setDirection(aim);
      this.ctx.getScene().add(this.bullet.group);
      this.bulletAim.copy(aim);
      this.bulletSide.crossVectors(aim, UP).normalize();
      this.bulletPath.from.copy(muzzle);
      const targetChar = this.ctx.getCharacter(shot.targetId);
      this.bulletPath.to.copy(targetChar ? targetChar.getPartWorld('torso') : muzzle.clone().addScaledVector(aim, 3));
      this.bulletPath.to.y += 0.25;
      this.phase = 'bullet';
      this.phaseTime = 0;
      this.timeScaleTarget = 0.16;
    }
  }

  /* ---------------- BULLET ---------------- */

  private updateBullet(dt: number, camera: THREE.PerspectiveCamera): void {
    const BULLET_DUR = 1.55;
    const t = clamp(this.phaseTime / BULLET_DUR, 0, 1);
    const gun = this.ctx.getRevolver();
    const audio = this.ctx.getAudio();
    const particles = this.ctx.getParticles();

    if (!this.bullet) return this.advanceToImpact();
    const { from, to } = this.bulletPath;
    const progress = easeIn(t); // accelerates like a real round
    const pos = T5.copy(from).lerp(to, progress);
    this.bullet.group.position.copy(pos);
    this.bullet.update(dt);
    if (this.bullet.trailAccum > 0.016) {
      this.bullet.trailAccum = 0;
      particles.trail(pos);
    }

    // ---- camera choreography: muzzle side → orbit → impact side ----
    const aim = this.bulletAim;
    const side = this.bulletSide;
    const desired = T1;
    const look = T2;

    if (t < 0.3) {
      // slip sideways off the muzzle as the bullet departs
      const k = easeOut(t / 0.3);
      desired.copy(from).addScaledVector(aim, -0.55 + k * 0.5).addScaledVector(side, 0.3 + k * 0.55).addScaledVector(UP, 0.22 - k * 0.05);
      look.copy(from).lerp(this.bullet.group.position, 0.8);
    } else if (t < 0.78) {
      // trailing three-quarter orbit around the round
      const k = (t - 0.3) / 0.48;
      const orbitAngle = k * 1.9 - 0.35;
      const orbitSide = T3.copy(side).applyAxisAngle(aim, orbitAngle);
      const dist = lerp(1.15, 0.85, k);
      desired.copy(this.bullet.group.position).addScaledVector(aim, -dist).addScaledVector(orbitSide, dist * 0.75).addScaledVector(UP, lerp(0.3, 0.12, k));
      look.copy(this.bullet.group.position);
    } else {
      // swing ahead of the target, catch the arrival
      const k = easeOut((t - 0.78) / 0.22);
      desired.copy(to).addScaledVector(aim, -(1.7 - k * 0.5)).addScaledVector(side, lerp(0.9, 1.25, k)).addScaledVector(UP, lerp(0.25, 0.4, k));
      look.copy(pos).lerp(to, k * 0.7);
    }

    if (!this.camInitialized) { this.camPos.copy(desired); this.camLook.copy(look); this.camInitialized = true; }
    dampV3(this.camPos, desired, 3.4, dt);
    dampV3(this.camLook, look, 6.5, dt);
    this.fovTarget = lerp(46, 40, t);

    // fx arc
    this.fxTarget.radial = Math.sin(Math.PI * clamp(t * 1.15, 0, 1)) * 0.55;
    this.fxTarget.chroma = 0.0022 + t * 0.002;
    this.fxTarget.bloomBoost = 0.12;

    if (t >= 1) this.advanceToImpact();
  }

  private advanceToImpact(): void {
    this.phase = 'impact';
    this.phaseTime = 0;
    this.impactDone = false;
    this.timeScaleTarget = 0.5;
    this.removeBullet();
  }

  /* ---------------- IMPACT ---------------- */

  private impactDone = false;
  private holdEmpty = false;

  private updateImpact(dt: number, camera: THREE.PerspectiveCamera): void {
    const shot = this.shot!;
    const audio = this.ctx.getAudio();
    const particles = this.ctx.getParticles();

    if (!this.impactDone) {
      this.impactDone = true;
      const target = this.ctx.getCharacter(shot.targetId);
      const hitPos = target ? target.getPartWorld('torso') : this.bulletPath.to.clone();
      hitPos.y += 0.3;
      const dir = hitPos.clone().sub(this.bulletPath.from).normalize();

      particles.impact(hitPos, dir);
      audio.play3D('thud', hitPos, { gain: 1.0, reverb: 0.4 });
      audio.play('boom', { gain: 0.9 });
      this.shake(1.6);

      // ragdoll + controlled knockback
      const impulse = shot.self
        ? new THREE.Vector3(-Math.sin(this.ctx.getCharacter(shot.shooterId)!.group.rotation.y) * -2.2, 2.6, -Math.cos(this.ctx.getCharacter(shot.shooterId)!.group.rotation.y) * -2.2)
        : dir.clone().multiplyScalar(4.2).add(new THREE.Vector3(0, 2.4, 0));
      this.ctx.createRagdoll(shot.targetId, impulse);
      this.timeScaleTarget = 1;
    }

    this.timeScaleTarget = lerp(this.timeScaleTarget, 1, dt * 3);

    // hold the impact frame while physics takes over
    if (this.phaseTime > 0.55) {
      this.phase = 'hold';
      this.phaseTime = 0;
      this.holdEmpty = false;
    }
  }

  /* ---------------- HOLD ---------------- */

  private updateHold(dt: number, camera: THREE.PerspectiveCamera): void {
    const empty = this.holdEmpty;
    const duration = empty ? 1.3 : 1.6;
    const shot = this.shot!;

    if (!empty) {
      // slow drift around where the body fell
      const ragdollPos = this.bulletPath.to;
      const a = this.phaseTime * 0.22;
      const desired = T1.set(Math.sin(a + 1.2) * 1.7, 0.55, Math.cos(a + 1.2) * 1.7).add(ragdollPos);
      dampV3(this.camPos, desired, 1.6, dt);
      dampV3(this.camLook, T2.copy(ragdollPos).addScaledVector(UP, -0.4), 3, dt);
      this.fovTarget = 44;

      // eliminated local player transitions to spectator right here
      const victimId = this.result?.eliminatedId;
      if (!this.spectatorDone && victimId && this.ctx.isMe(victimId) && this.phaseTime > duration * 0.55) {
        this.spectatorDone = true;
        this.ctx.becomeSpectator();
      }
    } else {
      // empty chamber: small push back from the gun
      const gun = this.ctx.getRevolver();
      const muzzle = gun.getFlashWorld(new THREE.Vector3());
      dampV3(this.camLook, muzzle, 2, dt);
      this.fovTarget = 46;
    }

    if (this.phaseTime > duration) {
      this.phase = 'return';
      this.phaseTime = 0;
      this.fxTarget.radial = 0;
      this.fxTarget.chroma = 0.0008;
    }
    void shot;
  }

  /* ---------------- RETURN (smooth blend back to gameplay) ---------------- */

  private returnPose = { pos: new THREE.Vector3(), look: new THREE.Vector3() };

  private updateReturn(dt: number, camera: THREE.PerspectiveCamera): void {
    const pose = this.returnPose;
    this.ctx.gameplayCameraPose(pose);
    const k = 2.3;
    dampV3(this.camPos, pose.pos, k, dt);
    dampV3(this.camLook, pose.look, k + 1, dt);
    camera.position.copy(this.camPos);
    camera.lookAt(this.camLook);
    this.fovTarget = 58;

    // relax the grade
    const r = clamp(this.phaseTime / 0.9, 0, 1);
    this.fxTarget.letterbox = Math.max(0, 1 - r);
    this.fxTarget.vignette = lerp(0.55, 0.32, r);
    this.fxTarget.grain = lerp(0.55, 0.35, r);
    this.fxTarget.chroma = 0;
    this.fxTarget.exposure = lerp(1.04, 1, r);
    this.fxTarget.contrast = lerp(1.1, 1.04, r);
    this.fxTarget.saturation = lerp(0.94, 1.02, r);
    this.fxTarget.dofMaxBlur = 0.004;

    if (this.phaseTime > 1.15) {
      this.finishShot();
    }
  }

  private finishShot(): void {
    this.phase = 'idle';
    this.activeShot = false;
    this.shot = null;
    this.result = null;
    this.resultKnown = false;
    this.timeScaleTarget = 1;
    this.fxTarget = { letterbox: 0, vignette: 0.32, grain: 0.35, chroma: 0, radial: 0, fade: 0, exposure: 1, contrast: 1.04, saturation: 1.02, tintR: 1, tintG: 1, tintB: 1, bloomBoost: 0, dofMaxBlur: 0 };
    this.ctx.getPostFX().setCinematic(false);
  }

  /* ---------------- RELOAD ---------------- */

  private reloadBeats = new Set<string>();

  private updateReload(dt: number, camera: THREE.PerspectiveCamera): void {
    const total = this.reloadTotal;
    const t = this.phaseTime / total;         // 0..1
    const gun = this.ctx.getRevolver();
    const audio = this.ctx.getAudio();
    const beat = (name: string, at: number) => {
      if (t >= at && !this.reloadBeats.has(name)) { this.reloadBeats.add(name); return true; }
      return false;
    };

    // aim the shooter's arm up so we can see the gun
    const shooter = this.shot ? this.ctx.getCharacter(this.shot.shooterId) : null;
    const gunHolder = shooter ?? this.ctx.myCharacter();
    if (gunHolder) {
      gun.group.getWorldPosition(T1);
      gunHolder.setAimTarget(T2.copy(T1).add(T3.set(0, 0.6, 0)));
    }

    // ---- camera: close-up on the revolver, slowly orbiting ----
    const gunPos = gun.group.getWorldPosition(T1);
    const gunQuat = gun.group.getWorldQuaternion(TQ);
    const gunFwd = T2.set(0, 0, 1).applyQuaternion(gunQuat);
    const gunSide = T3.set(1, 0, 0).applyQuaternion(gunQuat).normalize();
    const orbit = this.phaseTime * 0.12;
    const camOffset = T4.set(0, 0, 0)
      .addScaledVector(gunSide, Math.cos(orbit) * 0.42)
      .addScaledVector(gunFwd, 0.22)
      .addScaledVector(UP, 0.12 + Math.sin(orbit) * 0.04);
    const desired = T5.copy(gunPos).add(camOffset);

    if (!this.camInitialized) {
      this.camPos.copy(camera.position);
      this.camLook.copy(gunPos);
      this.camInitialized = true;
      this.fovTarget = 34;
    }
    // during the spin we pull back a little to show the whole cylinder
    const spinZoom = t > 0.58 && t < 0.82 ? 1.35 : 1.0;
    desired.sub(gunPos).multiplyScalar(spinZoom).add(gunPos);
    dampV3(this.camPos, desired, 2.2, dt);
    dampV3(this.camLook, gunPos, 4, dt);

    // ---- beats ----
    if (beat('tilt', 0.10)) gun.setTilt(1);                    // step 2: move sideways
    if (beat('crane', 0.24)) {                                  // step 3: cylinder pops out
      gun.openCylinder(true);
      audio.play3D('craneOpen', gunPos, { gain: 0.9, reverb: 0.5 });
    }
    if (beat('cartridge', 0.40)) {                              // step 4: one cartridge inserted
      gun.spawnCartridge();
      audio.play3D('cartridgeIn', gunPos, { gain: 1.0, reverb: 0.6 });
    }
    if (beat('spin', 0.58)) {                                   // step 5: cylinder spins
      gun.startFreeSpin();
      audio.play3D('spinLoop', gunPos, { gain: 0.8, rate: 1, reverb: 0.35 });
      this.fxTarget.radial = 0.18;
    }
    if (beat('spinStop', 0.78)) {
      gun.stopFreeSpin();
      this.fxTarget.radial = 0;
    }
    if (beat('close', 0.84)) {                                  // step 6: back + close
      gun.openCylinder(false);
      gun.setTilt(0);
      audio.play3D('reloadClack', gunPos, { gain: 1.0, reverb: 0.6 });
    }
    if (t >= 0.90) {                                            // step 7: fade to black
      this.fxTarget.fade = clamp((t - 0.90) / 0.06, 0, 1);
    }
    if (beat('reset', 0.965)) {
      // at full black: reset the visual cylinder (server already reloaded)
      gun.resetChambers();
      gun.finishCartridge();
      this.ctx.onResetChambers();
    }
    if (t >= 1.0) {
      this.phase = 'returnAfterReload';
      this.phaseTime = 0;
      this.reloadBeats.clear();
    }
  }

  private updateReturnAfterReload(dt: number, camera: THREE.PerspectiveCamera): void {
    const pose = this.returnPose;
    this.ctx.gameplayCameraPose(pose);
    // fade back in while the camera glides home
    this.fxTarget.fade = Math.max(0, 1 - this.phaseTime / 0.8);
    dampV3(this.camPos, pose.pos, 2.0, dt);
    dampV3(this.camLook, pose.look, 2.6, dt);
    camera.position.copy(this.camPos);
    camera.lookAt(this.camLook);
    this.fovTarget = 58;
    this.fxTarget.letterbox = Math.max(0, 1 - this.phaseTime / 1.1);

    if (this.phaseTime > 1.4) {
      this.finishShot();
      this.fxTarget.fade = 0;
    }
  }

  /* ---------------- WINNER ---------------- */

  private updateWinner(dt: number, camera: THREE.PerspectiveCamera): void {
    const winner = this.winnerId ? this.ctx.getCharacter(this.winnerId) : null;
    if (winner) {
      const center = winner.getPartWorld('torso', T1);
      const a = this.phaseTime * 0.25 + 1.0;
      const desired = T2.set(center.x + Math.sin(a) * 2.6, center.y + 0.7, center.z + Math.cos(a) * 2.6);
      if (!this.camInitialized) { this.camPos.copy(desired); this.camLook.copy(center); this.camInitialized = true; }
      dampV3(this.camPos, desired, 1.4, dt);
      dampV3(this.camLook, center, 3, dt);
      camera.position.copy(this.camPos);
      camera.lookAt(this.camLook);
      this.fovTarget = 42;
      winner.setLookAt(camera.position.clone());
    }
    if (!this.endScreenShown && this.phaseTime > 3.2) {
      this.endScreenShown = true;
      this.ctx.showEndScreen(this.winnerId);
    }
  }

  /* ================= helpers ================= */

  private beats = new Set<string>();
  private beatFired(name: string): boolean { return this.beats.has(name); }
  private setBeat(name: string): void { if (!name) this.beats.clear(); else this.beats.add(name); }

  private removeBullet(): void {
    if (this.bullet) {
      this.bullet.group.removeFromParent();
      this.bullet = null;
    }
  }

  private shakeAmount = 0;
  private shake(mag: number): void { this.shakeAmount = Math.max(this.shakeAmount, mag); }
  consumeShake(): number {
    const s = this.shakeAmount;
    this.shakeAmount = 0;
    return s;
  }

  private applyFx(dt: number, k: number): void {
    const p = this.ctx.getPostFX().params;
    const t = this.fxTarget;
    p.letterbox = damp(p.letterbox, t.letterbox, k, dt);
    p.vignette = damp(p.vignette, t.vignette, k, dt);
    p.grain = damp(p.grain, t.grain, k, dt);
    p.chroma = damp(p.chroma, t.chroma, k, dt);
    p.radial = damp(p.radial, t.radial, k + 2, dt);
    p.fade = damp(p.fade, t.fade, 6, dt);
    p.exposure = damp(p.exposure, t.exposure, k, dt);
    p.contrast = damp(p.contrast, t.contrast, k, dt);
    p.saturation = damp(p.saturation, t.saturation, k, dt);
    p.tint.setRGB(
      damp(p.tint.r, t.tintR, k, dt),
      damp(p.tint.g, t.tintG, k, dt),
      damp(p.tint.b, t.tintB, k, dt),
    );
    p.bloomBoost = damp(p.bloomBoost, t.bloomBoost, k, dt);
    p.dofMaxBlur = damp(p.dofMaxBlur, t.dofMaxBlur, k, dt);
  }
}

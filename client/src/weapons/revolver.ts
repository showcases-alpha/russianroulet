/**
 * revolver.ts — hyper-detailed procedural revolver (visual counterpoint to
 * the blocky characters). Classic 6-shot swing-out-cylinder design built from
 * ~50 parts with PBR metals, procedural scratched-steel textures, brass
 * cartridge rims, animated hammer / trigger / cylinder / crane, recoil spring,
 * muzzle flash and smoke hooks.
 *
 * IMPORTANT: purely presentational. The chamber contents live on the server;
 * every chamber looks identical from the outside.
 */
import * as THREE from 'three';
import { makeMetal, makeWood } from '../game/textures.js';
import { damp } from '../game/mathUtils.js';

export interface RevolverEvents {
  onCockStart?: () => void;
  onHammerFall?: () => void;
  onTriggerClick?: () => void;
  onCylinderStop?: () => void;
  onFire?: () => void;
}

export class Revolver {
  group = new THREE.Group();          // gun-local: +Z = muzzle direction, +Y = up
  private cylinderAssembly = new THREE.Group(); // crane pivot
  private spinGroup = new THREE.Group();        // spins around Z (cylinder axis)
  private hammer = new THREE.Group();
  private trigger = new THREE.Group();
  private muzzle = new THREE.Object3D();        // world muzzle tip marker
  private flashGroup = new THREE.Group();
  private flashLight: THREE.PointLight;
  private cartridge: THREE.Group | null = null;

  // animation state (targets damped toward)
  private hammerAngle = 0;       // 0 down, 1 cocked
  private hammerTarget = 0;
  private triggerAngle = 0;
  private triggerTarget = 0;
  private spinAngle = 0;         // current cylinder rotation
  private spinTarget = 0;
  private spinVelocity = 0;      // free-spin mode during reload
  private freeSpin = false;
  private craneAngle = 0;
  private craneTarget = 0;
  private recoil = 0;            // 0..1 impulse that springs back
  private flashTime = 0;
  private raiseT = 0;            // draw-in animation when changing hands
  private tilt = 0;              // sideways tilt during reload
  private tiltTarget = 0;
  private held = false;          // true while attached to a hand
  private tweening = false;      // true while the game tweens the transform

  private chamberRims: THREE.Mesh[] = [];
  private events: RevolverEvents;

  constructor(events: RevolverEvents = {}) {
    this.events = events;
    const metal = makeMetal(512, 3);
    const steel = new THREE.MeshStandardMaterial({
      map: metal.map, roughnessMap: metal.roughness, normalMap: metal.normal,
      color: 0xc8ccd2, metalness: 0.96, roughness: 0.38, envMapIntensity: 1.6,
    });
    const darkSteel = new THREE.MeshStandardMaterial({
      map: metal.map, roughnessMap: metal.roughness,
      color: 0x3a3d42, metalness: 0.9, roughness: 0.45, envMapIntensity: 1.2,
    });
    const brass = new THREE.MeshStandardMaterial({
      color: 0xc9a24a, metalness: 1, roughness: 0.28, envMapIntensity: 1.8,
    });
    const holeMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.7, metalness: 0.3 });
    const gripWood = makeWood({ size: 256, plankCount: 1, base: [92, 52, 28], seed: 13, gloss: 0.25 });
    const gripMat = new THREE.MeshStandardMaterial({
      map: gripWood.map, roughnessMap: gripWood.roughness, normalMap: gripWood.normal,
      roughness: 0.4, metalness: 0.05, envMapIntensity: 0.8,
    });

    const mesh = (geo: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      parent.add(m);
      return m;
    };

    /* ---------- frame ---------- */
    const frame = mesh(new THREE.BoxGeometry(0.046, 0.062, 0.135), steel, this.group, 0, 0.006, -0.028);
    void frame;
    // top strap
    mesh(new THREE.BoxGeometry(0.03, 0.014, 0.14), steel, this.group, 0, 0.042, -0.028);
    // rear sight notch
    mesh(new THREE.BoxGeometry(0.022, 0.012, 0.02), darkSteel, this.group, 0, 0.052, -0.088);

    /* ---------- barrel ---------- */
    const barrel = mesh(new THREE.CylinderGeometry(0.0165, 0.0165, 0.175, 20), steel, this.group, 0, 0.028, 0.105);
    barrel.rotation.x = Math.PI / 2;
    // barrel shroud / vent rib
    mesh(new THREE.BoxGeometry(0.018, 0.006, 0.17), darkSteel, this.group, 0, 0.048, 0.105);
    for (let i = 0; i < 5; i++) {
      mesh(new THREE.BoxGeometry(0.014, 0.008, 0.006), darkSteel, this.group, 0, 0.047, 0.03 + i * 0.032);
    }
    // underlug + ejector rod
    mesh(new THREE.BoxGeometry(0.02, 0.02, 0.16), steel, this.group, 0, 0.006, 0.1);
    const ejector = mesh(new THREE.CylinderGeometry(0.0045, 0.0045, 0.14, 10), darkSteel, this.group, 0, -0.008, 0.11);
    ejector.rotation.x = Math.PI / 2;
    // front sight
    mesh(new THREE.BoxGeometry(0.006, 0.016, 0.014), darkSteel, this.group, 0, 0.058, 0.185);
    // muzzle bore
    const bore = mesh(new THREE.CylinderGeometry(0.0085, 0.0085, 0.02, 12), holeMat, this.group, 0, 0.028, 0.192);
    bore.rotation.x = Math.PI / 2;

    /* ---------- cylinder assembly (crane → spin → cylinder) ---------- */
    this.cylinderAssembly.position.set(0.028, 0.012, -0.028);
    this.group.add(this.cylinderAssembly);
    this.cylinderAssembly.add(this.spinGroup);
    const cyl = mesh(new THREE.CylinderGeometry(0.0275, 0.0275, 0.056, 24), steel, this.spinGroup);
    cyl.rotation.x = Math.PI / 2;
    // flutes
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const flute = mesh(new THREE.BoxGeometry(0.008, 0.004, 0.05), darkSteel, this.spinGroup, Math.sin(a) * 0.0245, Math.cos(a) * 0.0245, 0);
      flute.rotation.z = -a;
    }
    // 6 chambers: dark bores at the front face + brass rims at the rear
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 2; // chamber 0 starts at top
      const x = Math.sin(a) * 0.0155, y = Math.cos(a) * 0.0155;
      const boreHole = mesh(new THREE.CylinderGeometry(0.0072, 0.0072, 0.06, 10), holeMat, this.spinGroup, x, y, 0.001);
      boreHole.rotation.x = Math.PI / 2;
      // brass cartridge rim at the rear face (fired chambers get darkened)
      const rim = mesh(new THREE.CylinderGeometry(0.0085, 0.0085, 0.005, 12), brass.clone(), this.spinGroup, x, y, -0.029);
      rim.rotation.x = Math.PI / 2;
      this.chamberRims.push(rim);
    }
    // crane arm connecting to the frame
    const crane = mesh(new THREE.BoxGeometry(0.016, 0.02, 0.05), steel, this.cylinderAssembly, -0.012, 0, 0.028);
    void crane;
    // center pin
    const pin = mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.07, 8), darkSteel, this.spinGroup);
    pin.rotation.x = Math.PI / 2;

    /* ---------- hammer ---------- */
    this.hammer.position.set(0, 0.03, -0.098);
    this.group.add(this.hammer);
    mesh(new THREE.BoxGeometry(0.012, 0.03, 0.02), steel, this.hammer, 0, 0.012, 0);
    mesh(new THREE.BoxGeometry(0.016, 0.008, 0.022), darkSteel, this.hammer, 0, 0.032, -0.004); // spur

    /* ---------- trigger + guard ---------- */
    this.trigger.position.set(0, -0.02, -0.038);
    this.group.add(this.trigger);
    const trig = mesh(new THREE.BoxGeometry(0.007, 0.024, 0.009), steel, this.trigger, 0, -0.012, 0.002);
    trig.rotation.x = 0.25;
    const guard = new THREE.Mesh(new THREE.TorusGeometry(0.017, 0.0028, 8, 18, Math.PI), darkSteel);
    guard.position.set(0, -0.026, -0.032);
    guard.rotation.set(Math.PI / 2, 0, 0);
    guard.castShadow = true;
    this.group.add(guard);

    /* ---------- grip ---------- */
    const grip = new THREE.Group();
    grip.position.set(0, -0.028, -0.062);
    grip.rotation.x = -0.32;
    this.group.add(grip);
    mesh(new THREE.BoxGeometry(0.034, 0.09, 0.046), gripMat, grip, 0, -0.045, 0);
    const medallion = mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.036, 10), brass, grip, 0, -0.06, 0);
    medallion.rotation.z = Math.PI / 2;

    /* ---------- muzzle marker + flash ---------- */
    this.muzzle.position.set(0, 0.028, 0.21);
    this.group.add(this.muzzle);
    this.flashGroup.position.copy(this.muzzle.position);
    this.group.add(this.flashGroup);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffd9a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    for (let i = 0; i < 3; i++) {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.34), flashMat);
      plane.rotation.z = (i / 3) * Math.PI;
      this.flashGroup.add(plane);
    }
    this.flashLight = new THREE.PointLight(0xffc070, 0, 4, 2);
    this.flashLight.position.copy(this.muzzle.position);
    this.group.add(this.flashLight);

    this.group.visible = false;
  }

  /* ---------------- attachment ---------------- */

  /** Put the revolver in a character's right hand (draw-in animation). */
  giveTo(gripAnchor: THREE.Object3D): void {
    gripAnchor.add(this.group);
    this.group.position.set(0, -0.05, 0.02);
    this.group.rotation.set(Math.PI / 2 + 0.12, 0, 0); // barrel along the forearm
    this.group.visible = true;
    this.held = true;
    this.raiseT = 0;
  }

  /** Lay the revolver on the game table (between rounds / lobby). */
  placeOnTable(pos: THREE.Vector3, yaw: number): void {
    const parent = this.group.parent;
    if (parent) parent.remove(this.group);
    this.group.position.copy(pos);
    this.group.rotation.set(0, yaw, Math.PI / 2 - 0.08);
    this.group.visible = true;
    this.held = false;
    this.raiseT = 1;
    this.tiltTarget = 0;
    this.recoil = 0;
  }

  /** External transform tween in progress (gun flying back to the table). */
  setTweening(v: boolean): void { this.tweening = v; }

  getMuzzleWorld(out: THREE.Vector3): THREE.Vector3 {
    return this.muzzle.getWorldPosition(out);
  }

  getFlashWorld(out: THREE.Vector3): THREE.Vector3 {
    return this.flashGroup.getWorldPosition(out);
  }

  /* ---------------- animations ---------------- */

  /** Cock the hammer: cylinder locks the given chamber under the hammer. */
  cock(chamberIndex: number): void {
    this.hammerTarget = 1;
    this.spinTarget = -chamberIndex * (Math.PI * 2 / 6);
    this.events.onCockStart?.();
  }

  /** Sideways tilt for the reload cinematic (0 = upright, 1 = tilted). */
  setTilt(t: number): void { this.tiltTarget = t; }

  /** Finger takes up trigger slack. */
  squeezeTrigger(): void { this.triggerTarget = 1; }

  releaseTrigger(): void { this.triggerTarget = 0; }

  /** Hammer drops (empty or live is decided by the caller's effects). */
  hammerFall(): void {
    this.hammerTarget = 0;
    this.events.onHammerFall?.();
  }

  fire(): void {
    this.recoil = 1;
    this.flashTime = 1;
    this.hammerTarget = 0;
    this.triggerTarget = 0;
    this.events.onFire?.();
  }

  /** Mark a chamber as fired (public info — dark rim). */
  markChamberFired(index: number): void {
    const rim = this.chamberRims[index % 6];
    if (rim) (rim.material as THREE.MeshStandardMaterial).color.setHex(0x1a1a1c);
  }

  resetChambers(): void {
    for (const rim of this.chamberRims) (rim.material as THREE.MeshStandardMaterial).color.setHex(0xc9a24a);
    this.spinAngle = 0;
    this.spinTarget = 0;
  }

  /** Reload cinematic: swing the cylinder out (0..1). */
  openCylinder(t: boolean): void { this.craneTarget = t ? 1.85 : 0; }

  /** Free-spin the cylinder (reload). */
  startFreeSpin(): void { this.freeSpin = true; this.spinVelocity = 26; }
  stopFreeSpin(): void { this.freeSpin = false; this.spinTarget = Math.round(this.spinAngle / (Math.PI * 2 / 6)) * (Math.PI * 2 / 6); }

  /** Animate a detailed cartridge insertion (returns the cartridge group). */
  spawnCartridge(): THREE.Group {
    if (this.cartridge) return this.cartridge;
    const g = new THREE.Group();
    const brass = new THREE.MeshStandardMaterial({ color: 0xc9a24a, metalness: 1, roughness: 0.25, envMapIntensity: 1.8 });
    const copper = new THREE.MeshStandardMaterial({ color: 0xb0682e, metalness: 1, roughness: 0.35, envMapIntensity: 1.5 });
    const casing = new THREE.Mesh(new THREE.CylinderGeometry(0.0079, 0.0079, 0.024, 12), brass);
    const bullet = new THREE.Mesh(new THREE.CylinderGeometry(0.0062, 0.0075, 0.012, 12), copper);
    bullet.position.y = 0.018;
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.0062, 10, 8), copper);
    tip.position.y = 0.024;
    g.add(casing, bullet, tip);
    g.userData.t = 0;
    this.cartridge = g;
    this.group.add(g);
    return g;
  }

  finishCartridge(): void {
    if (this.cartridge) { this.cartridge.removeFromParent(); this.cartridge = null; }
  }

  /* ---------------- per-frame ---------------- */

  update(dt: number): void {
    // draw-in
    if (this.raiseT < 1) {
      this.raiseT = Math.min(1, this.raiseT + dt * 3.5);
      const s = 0.6 + 0.4 * this.raiseT;
      this.group.scale.setScalar(s);
    } else this.group.scale.setScalar(1);

    // hammer / trigger
    this.hammerAngle = damp(this.hammerAngle, this.hammerTarget, 14, dt);
    this.triggerAngle = damp(this.triggerAngle, this.triggerTarget, 18, dt);
    this.hammer.rotation.x = -this.hammerAngle * 0.85;
    this.trigger.rotation.x = this.triggerAngle * 0.45;

    // cylinder
    if (this.freeSpin) {
      this.spinVelocity = Math.max(2.5, this.spinVelocity - dt * 9);
      this.spinAngle += this.spinVelocity * dt;
      this.spinGroup.rotation.z = this.spinAngle;
    } else {
      const before = this.spinAngle;
      this.spinAngle = damp(this.spinAngle, this.spinTarget, 10, dt);
      this.spinGroup.rotation.z = this.spinAngle;
      if (Math.abs(before - this.spinTarget) > 0.001 && Math.abs(this.spinAngle - this.spinTarget) < 0.02) {
        this.events.onCylinderStop?.();
      }
    }

    // crane swing
    this.craneAngle = damp(this.craneAngle, this.craneTarget, 6, dt);
    this.cylinderAssembly.rotation.y = this.craneAngle;
    this.cylinderAssembly.position.x = 0.028 + Math.sin(this.craneAngle) * 0.012;

    // cartridge insertion animation
    if (this.cartridge) {
      const c = this.cartridge;
      c.userData.t = Math.min(1, (c.userData.t as number) + dt * 1.15);
      const t = c.userData.t as number;
      const eased = t * t * (3 - 2 * t);
      // from below-front toward the top chamber (world-ish, approximated in gun space)
      const from = new THREE.Vector3(0.06, -0.08, -0.1);
      const to = new THREE.Vector3(0.028, 0.012 + 0.0155, -0.055);
      c.position.lerpVectors(from, to, eased);
      c.quaternion.setFromEuler(new THREE.Euler(Math.PI / 2 + (1 - eased) * 1.2, (1 - eased) * 2.4, 0));
    }

    // transform ownership:
    //   tweening  → the game's tween owns the transform completely
    //   held      → recoil / tilt spring around the in-hand pose
    //   resting   → lying on the table; only the reload tilt rolls it
    if (!this.tweening) {
      this.tilt = damp(this.tilt, this.tiltTarget, 5, dt);
      if (this.held) {
        this.recoil = Math.max(0, this.recoil - dt * 5.5);
        const r = this.recoil * this.recoil;
        this.group.position.z = 0.02 - r * 0.03;
        this.group.rotation.x = (Math.PI / 2 + 0.12) + r * 0.5;
        this.group.rotation.z = this.tilt * 1.05;
      } else {
        this.group.rotation.z = (Math.PI / 2 - 0.08) + this.tilt * 1.05;
      }
    }

    // muzzle flash
    if (this.flashTime > 0) {
      this.flashTime = Math.max(0, this.flashTime - dt * 14);
      const f = this.flashTime;
      const mat = (this.flashGroup.children[0] as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = f;
      this.flashGroup.scale.setScalar(0.7 + (1 - f) * 0.9);
      this.flashGroup.rotation.z += dt * 30;
      this.flashLight.intensity = f * 40;
    } else {
      this.flashLight.intensity = 0;
    }
  }

  get isFlashing(): boolean { return this.flashTime > 0; }
}

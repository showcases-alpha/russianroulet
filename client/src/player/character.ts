/**
 * character.ts — deliberately simple, blocky humanoid (per the reference art):
 * a cuboid head, rectangular torso, straight rectangular arms, rectangular
 * legs and block feet — with no facial features and no cosmetics. Clearly
 * separated parts so the ragdoll system can take over each section.
 * PBR-lit, shadow receiving, per-player jacket colors + name tags.
 *
 * Perf notes: part meshes are cached in a Map (no scene traversals at
 * runtime) and the per-frame update path performs no allocations.
 */
import * as THREE from 'three';
import { makeNameTag } from '../game/textures.js';
import { clamp, dampAngle, lerp } from '../game/mathUtils.js';

export const JACKET_COLORS = [
  0x9c2b2b, 0x2b4a9c, 0x2b8a4a, 0xc7a029, 0x6a3a9c, 0xb5622a,
  0x356e6e, 0x8a8a92, 0x58704a, 0x9c4a6e, 0x2b2b34, 0xa8895a,
];
export const PANTS_COLORS = [0x23252e, 0x2e2620, 0x1f2a30, 0x30222b, 0x26302a];
export const SKIN_TONES = [0xe8b88f, 0xc98d63, 0x9c6a44, 0x70482c, 0xf0cfa8, 0x5a3620];

const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _q1 = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const DOWN = new THREE.Vector3(0, -1, 0);

export class Character {
  group = new THREE.Group();          // root at the feet
  headPivot = new THREE.Group();      // neck
  armRPivot = new THREE.Group();
  armLPivot = new THREE.Group();
  elbowRPivot = new THREE.Group();
  elbowLPivot = new THREE.Group();
  legRPivot = new THREE.Group();
  legLPivot = new THREE.Group();
  torso!: THREE.Mesh;
  head!: THREE.Mesh;
  hitbox!: THREE.Mesh;

  nameTag: THREE.Sprite;
  colorHex: string;

  private walkPhase = Math.random() * 10;
  private idlePhase = Math.random() * 10;
  private aimWeight = 0;              // 0 = relaxed, 1 = gun raised
  private aimTarget: THREE.Vector3 | null = null;
  private lookAt: THREE.Vector3 | null = null;
  private headYaw = 0;
  private headPitch = 0;
  /** name → mesh cache: ragdoll + cinematic lookups are O(1), no traversals */
  private parts = new Map<string, THREE.Mesh>();
  private materials: THREE.MeshStandardMaterial[] = [];

  readonly playerId: string;
  readonly displayName: string;

  constructor(playerId: string, name: string, colorIndex: number) {
    this.playerId = playerId;
    this.displayName = name;

    const color = JACKET_COLORS[colorIndex % JACKET_COLORS.length];
    this.colorHex = '#' + color.toString(16).padStart(6, '0');

    const jacketMat = new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.02 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: PANTS_COLORS[colorIndex % PANTS_COLORS.length], roughness: 0.9 });
    const skinMat = new THREE.MeshStandardMaterial({ color: SKIN_TONES[colorIndex % SKIN_TONES.length], roughness: 0.6 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.45, metalness: 0.1 });
    this.materials.push(jacketMat, pantsMat, skinMat, shoeMat);

    const box = (w: number, h: number, d: number, mat: THREE.Material, name: string) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      m.castShadow = true; m.receiveShadow = true;
      m.name = name;
      this.parts.set(name, m);
      return m;
    };

    /* ----- torso ----- */
    this.torso = box(0.72, 0.78, 0.38, jacketMat, 'torso');
    this.torso.position.y = 1.31;
    this.group.add(this.torso);
    // belt — child of the torso so it follows into the ragdoll
    const belt = box(0.74, 0.08, 0.40, shoeMat, 'belt');
    belt.position.y = -0.36;
    this.torso.add(belt);

    /* ----- head (plain cuboid — no face) ----- */
    this.headPivot.position.y = 1.70;
    this.group.add(this.headPivot);
    this.head = box(0.48, 0.46, 0.48, skinMat, 'head');
    this.head.position.y = 0.25;
    this.headPivot.add(this.head);

    /* ----- arms ----- */
    const mkArm = (side: -1 | 1, pivot: THREE.Group, elbow: THREE.Group) => {
      pivot.position.set(side * 0.455, 1.60, 0);
      this.group.add(pivot);
      const upper = box(0.19, 0.36, 0.19, jacketMat, `upperArm${side < 0 ? 'L' : 'R'}`);
      upper.position.y = -0.18;
      pivot.add(upper);
      elbow.position.y = -0.36;
      pivot.add(elbow);
      const fore = box(0.17, 0.30, 0.17, jacketMat, `forearm${side < 0 ? 'L' : 'R'}`);
      fore.position.y = -0.15;
      elbow.add(fore);
      const hand = box(0.15, 0.14, 0.15, skinMat, `hand${side < 0 ? 'L' : 'R'}`);
      hand.position.y = -0.36;
      elbow.add(hand);
      // hand attach point for the revolver
      const grip = new THREE.Object3D();
      grip.name = 'grip';
      grip.position.set(0, -0.42, 0.02);
      elbow.add(grip);
    };
    mkArm(1, this.armRPivot, this.elbowRPivot);
    mkArm(-1, this.armLPivot, this.elbowLPivot);

    /* ----- legs + feet ----- */
    const mkLeg = (side: -1 | 1, pivot: THREE.Group) => {
      pivot.position.set(side * 0.18, 0.92, 0);
      this.group.add(pivot);
      const leg = box(0.24, 0.88, 0.26, pantsMat, `leg${side < 0 ? 'L' : 'R'}`);
      leg.position.y = -0.44;
      pivot.add(leg);
      const foot = box(0.26, 0.12, 0.42, shoeMat, `foot${side < 0 ? 'L' : 'R'}`);
      foot.position.set(0, -0.93, 0.08);
      pivot.add(foot);
    };
    mkLeg(1, this.legRPivot);
    mkLeg(-1, this.legLPivot);

    /* ----- name tag ----- */
    const tagTex = makeNameTag(name, this.colorHex);
    this.nameTag = new THREE.Sprite(new THREE.SpriteMaterial({ map: tagTex, transparent: true, depthTest: true }));
    this.nameTag.scale.set(1.5 * (tagTex.image.width / 64), 1.5 * 0.85, 1);
    this.nameTag.position.y = 2.62;
    this.group.add(this.nameTag);

    /* ----- click hitbox (invisible) ----- */
    this.hitbox = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 2.35, 1.0),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    this.hitbox.position.y = 1.15;
    this.hitbox.userData.playerId = playerId;
    this.group.add(this.hitbox);
  }

  getGripAnchor(side: 'R' | 'L' = 'R'): THREE.Object3D {
    return (side === 'R' ? this.elbowRPivot : this.elbowLPivot).children.find((c) => c.name === 'grip')!;
  }

  setAimTarget(target: THREE.Vector3 | null): void {
    this.aimTarget = target ? target.clone() : null;
  }

  setLookAt(target: THREE.Vector3 | null): void {
    this.lookAt = target ? target.clone() : null;
  }

  setHeadReaction(intensity: number): void {
    // small "flinch/relief" bounce of the head after a result
    this.headPitch = intensity;
  }

  /** World-space position of a body part (reuses `out` — no allocation). */
  getPartWorld(name: string, out = new THREE.Vector3()): THREE.Vector3 {
    const part = this.parts.get(name);
    if (!part) return out.set(0, 0, 0);
    return part.getWorldPosition(out);
  }

  findPart(name: string): THREE.Mesh | null {
    return this.parts.get(name) ?? null;
  }

  allParts(): THREE.Mesh[] { return [...this.parts.values()]; }

  update(dt: number, speed: number): void {
    this.walkPhase += dt * clamp(speed, 0, 6) * 3.1;
    this.idlePhase += dt;
    this.aimWeight = lerp(this.aimWeight, this.aimTarget ? 1 : 0, 1 - Math.exp(-6 * dt));

    const walking = speed > 0.15;
    const swing = walking ? Math.sin(this.walkPhase) * 0.55 * clamp(speed, 0, 1.6) : 0;
    const idleSway = Math.sin(this.idlePhase * 1.4) * 0.035;
    const breathe = Math.sin(this.idlePhase * 2.1) * 0.012;

    // legs
    this.legRPivot.rotation.x = swing;
    this.legLPivot.rotation.x = -swing;

    // torso bob + breathe
    this.torso.position.y = 1.31 + (walking ? Math.abs(Math.sin(this.walkPhase)) * 0.03 : 0) + breathe;
    this.torso.rotation.z = idleSway * 0.4;

    // arms
    const armSwingR = walking ? -swing * 0.7 : idleSway;
    const armSwingL = walking ? swing * 0.7 : -idleSway;

    if (this.aimWeight > 0.01 && this.aimTarget) {
      // aim right arm (and support with left) toward the target
      this.applyAim(this.armRPivot, this.elbowRPivot, this.aimTarget, this.aimWeight, true);
      this.applyAim(this.armLPivot, this.elbowLPivot, this.aimTarget, this.aimWeight * 0.8, false);
    } else {
      this.armRPivot.rotation.x = lerp(this.armRPivot.rotation.x, armSwingR, 1 - Math.exp(-8 * dt));
      this.armRPivot.rotation.z = lerp(this.armRPivot.rotation.z, 0.06, 0.1);
      this.elbowRPivot.rotation.x = lerp(this.elbowRPivot.rotation.x, -0.25, 0.1);
      this.armLPivot.rotation.x = lerp(this.armLPivot.rotation.x, armSwingL, 1 - Math.exp(-8 * dt));
      this.armLPivot.rotation.z = lerp(this.armLPivot.rotation.z, -0.06, 0.1);
      this.elbowLPivot.rotation.x = lerp(this.elbowLPivot.rotation.x, -0.25, 0.1);
    }

    // head: look at point or face forward, with flinch reaction decaying
    this.headPitch = lerp(this.headPitch, 0, 1 - Math.exp(-4 * dt));
    let targetYaw = 0, targetPitch = this.headPitch;
    if (this.lookAt) {
      this.headPivot.getWorldPosition(_v1);
      const d = _v2.copy(this.lookAt).sub(_v1);
      const parentYaw = this.group.rotation.y;
      const worldYaw = Math.atan2(d.x, d.z);
      targetYaw = worldYaw - parentYaw;
      targetPitch = -Math.atan2(d.y, Math.hypot(d.x, d.z)) * 0.8 + this.headPitch;
      targetYaw = clamp(targetYaw, -1.15, 1.15);
      targetPitch = clamp(targetPitch, -0.8, 0.8);
    }
    this.headYaw = dampAngle(this.headYaw, targetYaw, 7, dt);
    this.headPitch = dampAngle(this.headPitch, targetPitch, 7, dt);
    this.headPivot.rotation.set(this.headPitch, this.headYaw, 0);
  }

  private applyAim(pivot: THREE.Group, elbow: THREE.Group, target: THREE.Vector3, weight: number, primary: boolean): void {
    pivot.getWorldPosition(_v1);
    const dir = _v2.copy(target).sub(_v1).normalize();
    // quaternion that rotates the hanging arm (local -Y) to point at the target
    _q1.setFromUnitVectors(DOWN, dir);
    pivot.parent!.getWorldQuaternion(_q2);
    // local rotation = inverse(parent world) * desired world rotation
    _q2.invert().multiply(_q1);
    pivot.quaternion.slerp(_q2, weight);
    // slight bend relaxation for the support arm
    elbow.rotation.x = lerp(elbow.rotation.x, primary ? -0.12 : -0.45, weight * 0.5);
  }

  /** Fade out (used when ragdolls are cleaned up or players leave). */
  setOpacity(o: number): void {
    for (const m of this.materials) {
      m.transparent = true;
      m.opacity = o;
    }
    (this.nameTag.material as THREE.SpriteMaterial).opacity = o;
  }

  /** Release GPU resources (character must be out of the scene or inside a ragdoll). */
  dispose(): void {
    for (const m of this.parts.values()) m.geometry?.dispose();
    for (const m of this.materials) m.dispose();
    (this.nameTag.material as THREE.SpriteMaterial).map?.dispose();
    (this.nameTag.material as THREE.SpriteMaterial).dispose();
    this.group.removeFromParent();
  }
}

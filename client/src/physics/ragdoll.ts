/**
 * ragdoll.ts — converts a living blocky Character into a physical ragdoll.
 *
 * Every visual body part (head, torso, upper arms, forearms/hands, legs,
 * feet) is detached into world space and driven by a cannon-es body joined
 * with cone-twist (neck/shoulders/hips) and hinge (elbows/ankles)
 * constraints. The result falls naturally, never explodes apart, and accepts
 * a small directional impulse for shot knockback. Deliberately non-graphic.
 */
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Character } from '../player/character.js';
import type { PhysicsWorld } from './physicsWorld.js';

interface PartSpec {
  meshName: string;
  half: [number, number, number];
  mass: number;
}

const PARTS: PartSpec[] = [
  { meshName: 'torso', half: [0.36, 0.39, 0.19], mass: 10 },
  { meshName: 'head', half: [0.24, 0.23, 0.24], mass: 2.4 },
  { meshName: 'upperArmR', half: [0.095, 0.18, 0.095], mass: 1.1 },
  { meshName: 'upperArmL', half: [0.095, 0.18, 0.095], mass: 1.1 },
  { meshName: 'forearmR', half: [0.085, 0.22, 0.085], mass: 0.9 },
  { meshName: 'forearmL', half: [0.085, 0.22, 0.085], mass: 0.9 },
  { meshName: 'legR', half: [0.12, 0.44, 0.13], mass: 3 },
  { meshName: 'legL', half: [0.12, 0.44, 0.13], mass: 3 },
  { meshName: 'footR', half: [0.13, 0.06, 0.21], mass: 0.7 },
  { meshName: 'footL', half: [0.13, 0.06, 0.21], mass: 0.7 },
];

const CONE = Math.PI / 3;

export class Ragdoll {
  group = new THREE.Group();          // holds detached part meshes
  private bodies = new Map<string, CANNON.Body>();
  private meshes = new Map<string, THREE.Mesh>();
  private character: Character;
  age = 0;
  private fading = false;
  private opacity = 1;

  constructor(physics: PhysicsWorld, character: Character, impulse: THREE.Vector3) {
    this.character = character;
    const root = character.group;

    // Detach every ragdoll part into world space (attach preserves transforms).
    for (const spec of PARTS) {
      const mesh = character.findPart(spec.meshName);
      if (!mesh) continue;
      // nested decorations follow their parent part
      this.group.attach(mesh);
      this.meshes.set(spec.meshName, mesh);

      const body = new CANNON.Body({
        mass: spec.mass,
        shape: new CANNON.Box(new CANNON.Vec3(...spec.half)),
        position: new CANNON.Vec3(),
        linearDamping: 0.32,
        angularDamping: 0.72,
      });
      mesh.getWorldPosition(_tmpV3);
      body.position.set(_tmpV3.x, _tmpV3.y, _tmpV3.z);
      mesh.getWorldQuaternion(_tmpQ);
      body.quaternion.set(_tmpQ.x, _tmpQ.y, _tmpQ.z, _tmpQ.w);
      body.updateMassProperties();
      physics.world.addBody(body);
      this.bodies.set(spec.meshName, body);
    }

    // Keep the name tag hovering over the torso.
    const torso = this.meshes.get('torso');
    if (torso) torso.attach(character.nameTag);
    const head = this.meshes.get('head');
    if (head && character.findPart('hat')) {
      const hat = character.findPart('hat')!;
      if (hat.parent === head) { /* hats are children of head already */ }
    }

    this.buildConstraints(physics);

    // small, controlled impulse — enough to feel the hit, never cartoonish
    const imp = new CANNON.Vec3(impulse.x, impulse.y, impulse.z);
    const torsoBody = this.bodies.get('torso');
    const headBody = this.bodies.get('head');
    torsoBody?.applyImpulse(new CANNON.Vec3(imp.x * torsoBody.mass * 0.55, imp.y * torsoBody.mass * 0.4, imp.z * torsoBody.mass * 0.55));
    headBody?.applyImpulse(new CANNON.Vec3(imp.x * 0.9, imp.y * 0.9, imp.z * 0.9));

    root.parent?.add(this.group);
    // remove the now-empty living character
    root.removeFromParent();
  }

  private buildConstraints(physics: PhysicsWorld): void {
    const get = (n: string) => this.bodies.get(n)!;
    const add = (c: CANNON.Constraint) => { c.collideConnected = false; physics.world.addConstraint(c); };

    const cone = (a: string, b: string, pivotA: CANNON.Vec3, pivotB: CANNON.Vec3, angle = CONE, twist = Math.PI / 6) => {
      add(new CANNON.ConeTwistConstraint(get(a), get(b), {
        pivotA, pivotB,
        axisA: CANNON.Vec3.UNIT_Y.clone(),
        axisB: CANNON.Vec3.UNIT_Y.clone(),
        angle, twistAngle: twist,
      }));
    };
    const hinge = (a: string, b: string, pivotA: CANNON.Vec3, pivotB: CANNON.Vec3, axis: CANNON.Vec3) => {
      add(new CANNON.HingeConstraint(get(a), get(b), { pivotA, pivotB, axisA: axis, axisB: axis }));
    };

    // neck
    cone('torso', 'head', new CANNON.Vec3(0, 0.41, 0), new CANNON.Vec3(0, -0.25, 0), Math.PI / 5, Math.PI / 6);
    // shoulders
    cone('torso', 'upperArmR', new CANNON.Vec3(-0.455, 0.29, 0), new CANNON.Vec3(0, 0.18, 0), CONE);
    cone('torso', 'upperArmL', new CANNON.Vec3(0.455, 0.29, 0), new CANNON.Vec3(0, 0.18, 0), CONE);
    // elbows
    hinge('upperArmR', 'forearmR', new CANNON.Vec3(0, -0.36, 0), new CANNON.Vec3(0, 0.24, 0), new CANNON.Vec3(1, 0, 0));
    hinge('upperArmL', 'forearmL', new CANNON.Vec3(0, -0.36, 0), new CANNON.Vec3(0, 0.24, 0), new CANNON.Vec3(1, 0, 0));
    // hips
    cone('torso', 'legR', new CANNON.Vec3(-0.18, -0.40, 0), new CANNON.Vec3(0, 0.44, 0), Math.PI / 4, Math.PI / 8);
    cone('torso', 'legL', new CANNON.Vec3(0.18, -0.40, 0), new CANNON.Vec3(0, 0.44, 0), Math.PI / 4, Math.PI / 8);
    // ankles
    hinge('legR', 'footR', new CANNON.Vec3(0, -0.44, 0), new CANNON.Vec3(0, 0.06, -0.08), new CANNON.Vec3(1, 0, 0));
    hinge('legL', 'footL', new CANNON.Vec3(0, -0.44, 0), new CANNON.Vec3(0, 0.06, -0.08), new CANNON.Vec3(1, 0, 0));
  }

  update(dt: number): void {
    this.age += dt;
    for (const [name, body] of this.bodies) {
      const mesh = this.meshes.get(name)!;
      mesh.position.set(body.position.x, body.position.y, body.position.z);
      mesh.quaternion.set(body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w);
    }
    // name tag follows torso, upright
    const torso = this.meshes.get('torso');
    if (torso) {
      this.character.nameTag.position.set(0, 0.85, 0);
      this.character.nameTag.quaternion.copy(torso.quaternion).invert();
    }
  }

  /** returns true when fully faded and ready for removal */
  fade(dt: number): boolean {
    if (!this.fading) { this.fading = true; this.character.setOpacity(1); }
    this.opacity -= dt * 0.8;
    this.character.setOpacity(Math.max(0, this.opacity));
    return this.opacity <= 0;
  }

  dispose(physics: PhysicsWorld): void {
    for (const body of this.bodies.values()) physics.world.removeBody(body);
    // free GPU resources of the detached part meshes
    this.group.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) mesh.geometry?.dispose();
    });
    this.group.removeFromParent();
    this.character.dispose(); // materials + name tag
  }
}

const _tmpV3 = new THREE.Vector3();
const _tmpQ = new THREE.Quaternion();

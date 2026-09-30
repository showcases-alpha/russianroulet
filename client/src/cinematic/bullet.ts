/**
 * bullet.ts — the cinematic projectile. A detailed spinning brass/copper
 * round that actually travels through the real 3D scene from muzzle to
 * target while the camera tracks it. Not a video, not a sprite overlay.
 */
import * as THREE from 'three';

export class Bullet {
  group = new THREE.Group();
  private spinAxis = new THREE.Vector3(0, 0, 1);
  trailAccum = 0;

  constructor() {
    const brass = new THREE.MeshStandardMaterial({ color: 0xc9a24a, metalness: 1, roughness: 0.22, envMapIntensity: 2 });
    const copper = new THREE.MeshStandardMaterial({ color: 0xb0682e, metalness: 1, roughness: 0.32, envMapIntensity: 1.8 });
    const lead = new THREE.MeshStandardMaterial({ color: 0x8a8a92, metalness: 1, roughness: 0.5, envMapIntensity: 1.2 });

    // casing (full metal jacket look: brass body, copper jacket, lead core tip)
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.0045, 0.0045, 0.014, 12), brass);
    const cannelure = new THREE.Mesh(new THREE.CylinderGeometry(0.0047, 0.0047, 0.0016, 12), lead);
    cannelure.position.y = -0.0035;
    const jacket = new THREE.Mesh(new THREE.CylinderGeometry(0.0044, 0.0045, 0.006, 12), copper);
    jacket.position.y = 0.010;
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.0044, 10, 8), copper);
    tip.scale.set(1, 0.7, 1);
    tip.position.y = 0.014;
    // tiny glow so it reads against the dark bar
    const glow = new THREE.PointLight(0xffc080, 0.35, 0.5, 2);
    glow.position.y = 0.006;

    this.group.add(body, cannelure, jacket, tip, glow);
  }

  /** Orient along the flight direction (+Y local = travel direction). */
  setDirection(dir: THREE.Vector3): void {
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    this.group.quaternion.copy(q);
    // spin axis = travel direction; store in local space
    this.spinAxis.set(0, 1, 0);
  }

  update(dt: number): void {
    // spin around the travel axis (local +Y)
    this.group.rotateY(dt * 95);
    this.trailAccum += dt;
  }
}

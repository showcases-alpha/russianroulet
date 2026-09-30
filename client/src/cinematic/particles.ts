/**
 * particles.ts — pooled GPU point-sprite particle system with per-particle
 * size/color/alpha. Two layers: additive sparks/glow + normal-blend smoke.
 * Used for muzzle smoke, bullet trails, impact bursts and dust.
 */
import * as THREE from 'three';
import { makeRadialGlow, makeSmokePuff } from '../game/textures.js';
import { rand } from '../game/mathUtils.js';

const VERT = /* glsl */`
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (280.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */`
  uniform sampler2D uMap;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    gl_FragColor = vec4(vColor, tex.a * vAlpha);
  }
`;

interface Particle {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number; maxLife: number;
  size: number; sizeVel: number;
  color: THREE.Color;
  alpha: number;
  drag: number;
  gravity: number;
}

class ParticleLayer {
  points: THREE.Points;
  private pool: Particle[] = [];
  private alive: Particle[] = [];
  private posAttr: THREE.BufferAttribute;
  private sizeAttr: THREE.BufferAttribute;
  private colorAttr: THREE.BufferAttribute;
  private alphaAttr: THREE.BufferAttribute;

  constructor(count: number, texture: THREE.Texture, additive: boolean) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array(count), 1));
    geo.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(count), 1));
    this.posAttr = geo.getAttribute('position') as THREE.BufferAttribute;
    this.sizeAttr = geo.getAttribute('aSize') as THREE.BufferAttribute;
    this.colorAttr = geo.getAttribute('aColor') as THREE.BufferAttribute;
    this.alphaAttr = geo.getAttribute('aAlpha') as THREE.BufferAttribute;
    geo.setDrawRange(0, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: texture } },
      vertexShader: VERT, fragmentShader: FRAG,
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    for (let i = 0; i < count; i++) {
      this.pool.push({
        pos: new THREE.Vector3(), vel: new THREE.Vector3(),
        life: 0, maxLife: 1, size: 1, sizeVel: 0,
        color: new THREE.Color(), alpha: 1, drag: 1, gravity: 0,
      });
    }
  }

  spawn(p: Partial<Particle> & { pos: THREE.Vector3; vel: THREE.Vector3 }): Particle | null {
    const item = this.pool.pop();
    if (!item) return null;
    item.life = 0; item.maxLife = p.maxLife ?? 1;
    item.size = p.size ?? 0.1; item.sizeVel = p.sizeVel ?? 0;
    item.color.copy(p.color ?? new THREE.Color(1, 1, 1));
    item.alpha = p.alpha ?? 1;
    item.drag = p.drag ?? 1;
    item.gravity = p.gravity ?? 0;
    item.pos.copy(p.pos);
    item.vel.copy(p.vel);
    this.alive.push(item);
    return item;
  }

  update(dt: number): void {
    let n = 0;
    for (let i = this.alive.length - 1; i >= 0; i--) {
      const p = this.alive[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.alive.splice(i, 1);
        this.pool.push(p);
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.vel.multiplyScalar(Math.pow(p.drag, dt * 60));
      p.pos.addScaledVector(p.vel, dt);
      p.size = Math.max(0, p.size + p.sizeVel * dt);
    }
    for (const p of this.alive) {
      const t = p.life / p.maxLife;
      this.posAttr.setXYZ(n, p.pos.x, p.pos.y, p.pos.z);
      this.sizeAttr.setX(n, p.size);
      this.colorAttr.setXYZ(n, p.color.r, p.color.g, p.color.b);
      this.alphaAttr.setX(n, p.alpha * (1 - t) * (t < 0.08 ? t / 0.08 : 1));
      n++;
    }
    this.points.geometry.setDrawRange(0, n);
    this.posAttr.needsUpdate = true;
    this.sizeAttr.needsUpdate = true;
    this.colorAttr.needsUpdate = true;
    this.alphaAttr.needsUpdate = true;
  }
}

export class ParticleSystem {
  private sparks: ParticleLayer;
  private smoke: ParticleLayer;
  group = new THREE.Group();
  private density: number;

  constructor(density: number) {
    this.density = density;
    this.sparks = new ParticleLayer(Math.floor(600 * density), makeRadialGlow(64, 0.1), true);
    this.smoke = new ParticleLayer(Math.floor(260 * density), makeSmokePuff(128, 5), false);
    this.group.add(this.sparks.points, this.smoke.points);
  }

  /** Muzzle smoke: slow billowing drift forward of the muzzle. */
  muzzleSmoke(pos: THREE.Vector3, dir: THREE.Vector3, scale = 1): void {
    const n = Math.floor(14 * this.density * scale);
    for (let i = 0; i < n; i++) {
      this.smoke.spawn({
        pos: pos.clone().addScaledVector(dir, rand(0, 0.1)),
        vel: dir.clone().multiplyScalar(rand(0.3, 1.1)).add(new THREE.Vector3(rand(-.14, .14), rand(0.1, 0.35), rand(-.14, .14))).multiplyScalar(scale),
        maxLife: rand(1.6, 3.2), size: rand(0.12, 0.3) * scale, sizeVel: rand(0.15, 0.3) * scale,
        color: new THREE.Color(0.66, 0.64, 0.62), alpha: rand(0.25, 0.45),
        drag: 0.96, gravity: -0.06,
      });
    }
  }

  /** Tiny bright embers in front of the muzzle right as it fires. */
  muzzleSparks(pos: THREE.Vector3, dir: THREE.Vector3): void {
    const n = Math.floor(22 * this.density);
    for (let i = 0; i < n; i++) {
      this.sparks.spawn({
        pos: pos.clone(),
        vel: dir.clone().multiplyScalar(rand(2, 7)).add(new THREE.Vector3(rand(-1.4, 1.4), rand(-0.8, 1.4), rand(-1.4, 1.4))),
        maxLife: rand(0.12, 0.4), size: rand(0.02, 0.06), sizeVel: -0.02,
        color: new THREE.Color(1, rand(0.55, 0.8), 0.25), alpha: 1,
        drag: 0.9, gravity: 3,
      });
    }
  }

  /** Bullet trail: small streaks left along the flight path. */
  trail(pos: THREE.Vector3): void {
    const n = Math.max(1, Math.floor(2 * this.density));
    for (let i = 0; i < n; i++) {
      this.sparks.spawn({
        pos: pos.clone().add(new THREE.Vector3(rand(-.02, .02), rand(-.02, .02), rand(-.02, .02))),
        vel: new THREE.Vector3(rand(-.1, .1), rand(-.1, .1), rand(-.1, .1)),
        maxLife: rand(0.5, 1.1), size: rand(0.025, 0.05), sizeVel: 0.02,
        color: new THREE.Color(1, 0.85, 0.55), alpha: 0.8,
        drag: 0.94, gravity: 0,
      });
    }
  }

  /** Impact: flash + sparks + dust puff. Deliberately non-graphic. */
  impact(pos: THREE.Vector3, dir: THREE.Vector3): void {
    // bright core flash
    this.sparks.spawn({
      pos: pos.clone(), vel: new THREE.Vector3(),
      maxLife: 0.22, size: 0.5, sizeVel: 2.2,
      color: new THREE.Color(1, 0.9, 0.7), alpha: 1, drag: 1, gravity: 0,
    });
    // sparks flying outward from the impact
    const n = Math.floor(30 * this.density);
    const back = dir.clone().negate();
    for (let i = 0; i < n; i++) {
      this.sparks.spawn({
        pos: pos.clone(),
        vel: back.clone().multiplyScalar(rand(0.5, 3)).add(new THREE.Vector3(rand(-2, 2), rand(-0.5, 2.4), rand(-2, 2))),
        maxLife: rand(0.2, 0.7), size: rand(0.02, 0.05), sizeVel: -0.01,
        color: new THREE.Color(1, rand(0.6, 0.9), 0.3), alpha: 1,
        drag: 0.92, gravity: 5,
      });
    }
    // dust puff
    for (let i = 0; i < Math.floor(10 * this.density); i++) {
      this.smoke.spawn({
        pos: pos.clone(),
        vel: back.clone().multiplyScalar(rand(0.2, 0.8)).add(new THREE.Vector3(rand(-.4, .4), rand(0, .8), rand(-.4, .4))),
        maxLife: rand(0.8, 1.6), size: rand(0.1, 0.22), sizeVel: 0.25,
        color: new THREE.Color(0.45, 0.4, 0.36), alpha: 0.5,
        drag: 0.95, gravity: -0.15,
      });
    }
  }

  /** Ambient wisp (cigar smoke etc). */
  wisp(pos: THREE.Vector3): void {
    this.smoke.spawn({
      pos: pos.clone(),
      vel: new THREE.Vector3(rand(-.03, .03), rand(0.05, 0.12), rand(-.03, .03)),
      maxLife: rand(3, 6), size: rand(0.08, 0.2), sizeVel: 0.06,
      color: new THREE.Color(0.5, 0.5, 0.52), alpha: 0.14,
      drag: 0.995, gravity: -0.02,
    });
  }

  update(dt: number): void {
    this.sparks.update(dt);
    this.smoke.update(dt);
  }
}

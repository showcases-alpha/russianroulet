/** Small math / easing helpers used across the client. */

export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const damp = (a: number, b: number, k: number, dt: number) => lerp(a, b, 1 - Math.exp(-k * dt));
export const smoothstep = (t: number) => t * t * (3 - 2 * t);
export const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeIn = (t: number) => t * t * t;
export const easeOutBack = (t: number) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);

/** Frame-rate independent exponential smoothing for Vector3. */
import * as THREE from 'three';
export function dampV3(current: THREE.Vector3, target: THREE.Vector3, k: number, dt: number): THREE.Vector3 {
  const t = 1 - Math.exp(-k * dt);
  current.x += (target.x - current.x) * t;
  current.y += (target.y - current.y) * t;
  current.z += (target.z - current.z) * t;
  return current;
}

export function dampAngle(current: number, target: number, k: number, dt: number): number {
  let d = target - current;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return current + d * (1 - Math.exp(-k * dt));
}

export function angleLerp(a: number, b: number, t: number): number {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export function rand(a = 0, b = 1): number { return a + Math.random() * (b - a); }
export function randInt(a: number, b: number): number { return Math.floor(rand(a, b + 1)); }
export function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

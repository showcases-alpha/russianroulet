/**
 * textures.ts — procedural texture factory.
 * Every material in the game (wood, metal, brick, leather, felt, brass...)
 * is generated at load time on canvas, so the project ships zero binary assets.
 * Deterministic (seeded) so the bar looks identical on every client.
 */
import * as THREE from 'three';

/* ---------------- seeded RNG + value noise ---------------- */

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class ValueNoise {
  private p: Float32Array;
  private size: number;
  constructor(size: number, rnd: () => number) {
    this.size = size;
    this.p = new Float32Array(size * size);
    for (let i = 0; i < this.p.length; i++) this.p[i] = rnd();
  }
  private at(x: number, y: number): number {
    const s = this.size;
    return this.p[((y & (s - 1)) * s) + (x & (s - 1))];
  }
  sample(x: number, y: number): number {
    const xi = Math.floor(x), yi = Math.floor(y);
    const tx = x - xi, ty = y - yi;
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    const a = this.at(xi, yi), b = this.at(xi + 1, yi);
    const c = this.at(xi, yi + 1), d = this.at(xi + 1, yi + 1);
    return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
  }
  fbm(x: number, y: number, octaves = 4, lacunarity = 2, gain = 0.5): number {
    let sum = 0, amp = 0.5, freq = 1, norm = 0;
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.sample(x * freq, y * freq);
      norm += amp; amp *= gain; freq *= lacunarity;
    }
    return sum / norm;
  }
}

function makeCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d')!;
  return [c, ctx];
}

/** Sobel-based normal map from a height field (Float32Array, w*h). */
export function normalFromHeight(height: Float32Array, w: number, h: number, strength = 2): THREE.CanvasTexture {
  const [canvas, ctx] = makeCanvas(w, h);
  const img = ctx.createImageData(w, h);
  const H = (x: number, y: number) => height[((y + h) % h) * w + ((x + w) % w)];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (H(x - 1, y - 1) + 2 * H(x - 1, y) + H(x - 1, y + 1)) - (H(x + 1, y - 1) + 2 * H(x + 1, y) + H(x + 1, y + 1));
      const dy = (H(x - 1, y - 1) + 2 * H(x, y - 1) + H(x + 1, y - 1)) - (H(x - 1, y + 1) + 2 * H(x, y + 1) + H(x + 1, y + 1));
      const nx = dx * strength, ny = dy * strength, nz = 1;
      const len = Math.hypot(nx, ny, nz);
      const i = (y * w + x) * 4;
      img.data[i] = ((nx / len) * 0.5 + 0.5) * 255;
      img.data[i + 1] = ((ny / len) * 0.5 + 0.5) * 255;
      img.data[i + 2] = ((nz / len) * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(canvas, w, h);
}

function toTexture(canvas: HTMLCanvasElement, w: number, h: number, repeat = 1): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  void w; void h;
  return tex;
}

/* ---------------- wood ---------------- */

export interface WoodOptions {
  size?: number; base?: [number, number, number]; plankCount?: number;
  plankLengths?: number; grainScale?: number; dark?: number; seed?: number; gloss?: number;
}

/** Procedural wood — returns color, roughness and normal maps. */
export function makeWood(opts: WoodOptions = {}): { map: THREE.Texture; roughness: THREE.Texture; normal: THREE.Texture } {
  const size = opts.size ?? 512;
  const planks = opts.plankCount ?? 8;
  const base = opts.base ?? [96, 62, 38];
  const rnd = mulberry32(opts.seed ?? 7);
  const noise = new ValueNoise(256, mulberry32(opts.seed ? opts.seed + 1 : 8));
  const grain = new ValueNoise(256, mulberry32(opts.seed ? opts.seed + 2 : 9));

  const [cC, ctxC] = makeCanvas(size, size);
  const [cR, ctxR] = makeCanvas(size, size);
  const imgC = ctxC.createImageData(size, size);
  const imgR = ctxR.createImageData(size, size);
  const height = new Float32Array(size * size);

  const plankH = size / planks;
  const offsets = Array.from({ length: planks }, () => rnd() * size);
  const tones = Array.from({ length: planks }, () => 0.82 + rnd() * 0.36);

  for (let y = 0; y < size; y++) {
    const plank = Math.min(planks - 1, Math.floor(y / plankH));
    const inPlank = y - plank * plankH;
    for (let x = 0; x < size; x++) {
      // wood grain: stretched fbm along the plank
      const gx = (x + offsets[plank]) * 0.012, gy = y * 0.22;
      const g = grain.fbm(gx, gy, 4);
      const fine = grain.fbm((x + offsets[plank]) * 0.05, y * 0.9, 2);
      // knots occasionally
      const knot = Math.pow(Math.max(0, 1 - Math.hypot((x % (size / 2)) - size / 4, inPlank - plankH / 2) / 18), 3);
      let v = tones[plank] * (0.72 + g * 0.55 + fine * 0.12 - knot * 0.35 - (opts.dark ?? 0));
      // plank gaps
      const gap = Math.min(inPlank, plankH - inPlank);
      const gapDark = gap < 1.6 ? 0.45 : 0;
      // length seams
      const seamX = ((x + offsets[plank]) % Math.floor(size / 2.2)) < 1.5 ? 0.3 : 0;
      v = Math.max(0, v - gapDark - seamX);
      const i = (y * size + x) * 4;
      imgC.data[i] = Math.min(255, base[0] * v * 1.12);
      imgC.data[i + 1] = Math.min(255, base[1] * v * 1.1);
      imgC.data[i + 2] = Math.min(255, base[2] * v);
      imgC.data[i + 3] = 255;
      // roughness: glossy varnish with grain showing through
      const r = 0.42 + g * 0.3 + gapDark + seamX - (opts.gloss ?? 0.12);
      const rv = Math.max(0.08, Math.min(1, r)) * 255;
      imgR.data[i] = imgR.data[i + 1] = imgR.data[i + 2] = rv;
      imgR.data[i + 3] = 255;
      height[y * size + x] = g * 0.7 + fine * 0.2 - gapDark - knot * 0.5 + seamX * 0.4;
    }
  }
  ctxC.putImageData(imgC, 0, 0);
  ctxR.putImageData(imgR, 0, 0);
  const color = toTexture(cC, size, size);
  color.colorSpace = THREE.SRGBColorSpace;
  const rough = toTexture(cR, size, size);
  rough.colorSpace = THREE.NoColorSpace;
  const normal = normalFromHeight(height, size, size, 1.6);
  return { map: color, roughness: rough, normal };
}

/* ---------------- metal ---------------- */

/** Scratched dark metal for the revolver + fixtures. */
export function makeMetal(size = 512, seed = 3): { map: THREE.Texture; roughness: THREE.Texture; normal: THREE.Texture } {
  const rnd = mulberry32(seed);
  const scratch = new ValueNoise(256, mulberry32(seed + 1));
  const [cC, ctxC] = makeCanvas(size, size);
  const [cR, ctxR] = makeCanvas(size, size);
  const imgC = ctxC.createImageData(size, size);
  const imgR = ctxR.createImageData(size, size);
  const height = new Float32Array(size * size);
  const scratches: { x: number; y: number; len: number; a: number; w: number }[] = [];
  for (let i = 0; i < 240; i++) {
    scratches.push({ x: rnd() * size, y: rnd() * size, len: 12 + rnd() * 90, a: rnd() * Math.PI, w: rnd() < 0.8 ? 1 : 2 });
  }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = scratch.fbm(x * 0.02, y * 0.02, 4);
      let bright = 0.5 + n * 0.25;
      let rough = 0.34 + n * 0.18;
      let h = n * 0.35;
      for (const s of scratches) {
        const dx = x - s.x, dy = y - s.y;
        const px = dx * Math.cos(s.a) + dy * Math.sin(s.a);
        const py = -dx * Math.sin(s.a) + dy * Math.cos(s.a);
        if (px > 0 && px < s.len && Math.abs(py) < s.w * 0.5) {
          const depth = (1 - Math.abs(py) / (s.w * 0.5)) * 0.5;
          bright += depth * 0.22;   // scratches catch light
          rough -= depth * 0.12;    // and are a bit polished
          h += depth * 0.4;
        }
      }
      const i = (y * size + x) * 4;
      const v = Math.max(0, Math.min(1, bright));
      imgC.data[i] = 70 * v + 18; imgC.data[i + 1] = 70 * v + 18; imgC.data[i + 2] = 74 * v + 20;
      imgC.data[i + 3] = 255;
      const rv = Math.max(0.08, Math.min(1, rough)) * 255;
      imgR.data[i] = imgR.data[i + 1] = imgR.data[i + 2] = rv;
      imgR.data[i + 3] = 255;
      height[y * size + x] = h;
    }
  }
  ctxC.putImageData(imgC, 0, 0);
  ctxR.putImageData(imgR, 0, 0);
  const color = toTexture(cC, size, size);
  const rough = toTexture(cR, size, size);
  rough.colorSpace = THREE.NoColorSpace;
  const normal = normalFromHeight(height, size, size, 1.2);
  return { map: color, roughness: rough, normal };
}

/* ---------------- brick / plaster ---------------- */

export function makeBrick(size = 512, seed = 11): { map: THREE.Texture; roughness: THREE.Texture; normal: THREE.Texture } {
  const rnd = mulberry32(seed);
  const noise = new ValueNoise(256, mulberry32(seed + 1));
  const [cC, ctxC] = makeCanvas(size, size);
  const [cR, ctxR] = makeCanvas(size, size);
  const imgC = ctxC.createImageData(size, size);
  const imgR = ctxR.createImageData(size, size);
  const height = new Float32Array(size * size);
  const bw = size / 4, bh = size / 8;
  const brickColor = (): [number, number, number] => {
    const r = rnd();
    if (r < 0.3) return [96, 44, 36];
    if (r < 0.6) return [110, 55, 42];
    if (r < 0.85) return [88, 42, 38];
    return [70, 46, 48];
  };
  for (let y = 0; y < size; y++) {
    const row = Math.floor(y / bh);
    const shift = (row % 2) * bw * 0.5;
    for (let x = 0; x < size; x++) {
      const bx = (x + shift) % bw, by = y % bh;
      const isMortar = bx < 3 || bx > bw - 3 || by < 3 || by > bh - 3;
      const n = noise.fbm(x * 0.03, y * 0.03, 4);
      let r: number, g: number, b: number, rough: number, h: number;
      if (isMortar) {
        const mv = 0.8 + n * 0.3;
        r = 62 * mv; g = 58 * mv; b = 54 * mv; rough = 0.85; h = 0.15;
      } else {
        const c = brickColorFor(row, Math.floor((x + shift) / bw));
        const v = 0.75 + n * 0.45;
        r = c[0] * v; g = c[1] * v; b = c[2] * v;
        rough = 0.72 + n * 0.15; h = 0.85;
      }
      const i = (y * size + x) * 4;
      imgC.data[i] = r; imgC.data[i + 1] = g; imgC.data[i + 2] = b; imgC.data[i + 3] = 255;
      imgR.data[i] = imgR.data[i + 1] = imgR.data[i + 2] = rough * 255; imgR.data[i + 3] = 255;
      height[y * size + x] = h;
    }
  }
  // per-brick deterministic colors
  function brickColorFor(row: number, col: number): [number, number, number] {
    const r2 = mulberry32(row * 977 + col * 131 + 5)();
    if (r2 < 0.3) return [96, 44, 36];
    if (r2 < 0.6) return [112, 56, 42];
    if (r2 < 0.85) return [86, 40, 36];
    return [72, 48, 50];
  }
  ctxC.putImageData(imgC, 0, 0);
  ctxR.putImageData(imgR, 0, 0);
  const color = toTexture(cC, size, size);
  const rough = toTexture(cR, size, size);
  rough.colorSpace = THREE.NoColorSpace;
  const normal = normalFromHeight(height, size, size, 2.2);
  return { map: color, roughness: rough, normal };
}

export function makePlaster(size = 512, seed = 21, base: [number, number, number] = [58, 50, 46]): { map: THREE.Texture; roughness: THREE.Texture } {
  const noise = new ValueNoise(256, mulberry32(seed));
  const [cC, ctxC] = makeCanvas(size, size);
  const [cR, ctxR] = makeCanvas(size, size);
  const imgC = ctxC.createImageData(size, size);
  const imgR = ctxR.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = noise.fbm(x * 0.012, y * 0.012, 5);
      const grime = noise.fbm(x * 0.004, y * 0.004, 3);
      const v = 0.62 + n * 0.35 - grime * 0.25;
      const i = (y * size + x) * 4;
      imgC.data[i] = base[0] * v; imgC.data[i + 1] = base[1] * v; imgC.data[i + 2] = base[2] * v; imgC.data[i + 3] = 255;
      const rv = (0.8 + n * 0.15) * 255;
      imgR.data[i] = imgR.data[i + 1] = imgR.data[i + 2] = rv; imgR.data[i + 3] = 255;
    }
  }
  ctxC.putImageData(imgC, 0, 0);
  ctxR.putImageData(imgR, 0, 0);
  const color = toTexture(cC, size, size);
  const rough = toTexture(cR, size, size);
  rough.colorSpace = THREE.NoColorSpace;
  return { map: color, roughness: rough };
}

/* ---------------- fabric / felt / leather ---------------- */

export function makeFabric(size = 512, seed = 31, base: [number, number, number] = [90, 30, 30]): { map: THREE.Texture; roughness: THREE.Texture; normal: THREE.Texture } {
  const noise = new ValueNoise(256, mulberry32(seed));
  const [cC, ctxC] = makeCanvas(size, size);
  const [cR, ctxR] = makeCanvas(size, size);
  const imgC = ctxC.createImageData(size, size);
  const imgR = ctxR.createImageData(size, size);
  const height = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // woven pattern
      const weave = ((Math.floor(x / 3) % 2) + (Math.floor(y / 3) % 2)) % 2 === 0 ? 1 : 0.86;
      const n = noise.fbm(x * 0.03, y * 0.03, 4);
      const v = weave * (0.72 + n * 0.4);
      const i = (y * size + x) * 4;
      imgC.data[i] = base[0] * v; imgC.data[i + 1] = base[1] * v; imgC.data[i + 2] = base[2] * v; imgC.data[i + 3] = 255;
      const rv = (0.85 + n * 0.1) * 255;
      imgR.data[i] = imgR.data[i + 1] = imgR.data[i + 2] = rv; imgR.data[i + 3] = 255;
      height[y * size + x] = weave * 0.6 + n * 0.3;
    }
  }
  ctxC.putImageData(imgC, 0, 0);
  ctxR.putImageData(imgR, 0, 0);
  const color = toTexture(cC, size, size);
  const rough = toTexture(cR, size, size);
  rough.colorSpace = THREE.NoColorSpace;
  const normal = normalFromHeight(height, size, size, 1.0);
  return { map: color, roughness: rough, normal };
}

/* ---------------- sprite textures ---------------- */

export function makeRadialGlow(size = 128, hardness = 0.15): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(size, size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(hardness, 'rgba(255,255,255,0.9)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.28)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Soft round particle with irregular edge (smoke/dust). */
export function makeSmokePuff(size = 128, seed = 5): THREE.CanvasTexture {
  const rnd = mulberry32(seed);
  const [c, ctx] = makeCanvas(size, size);
  const img = ctx.createImageData(size, size);
  const blobs = Array.from({ length: 5 }, () => ({ x: size / 2 + (rnd() - 0.5) * size * 0.3, y: size / 2 + (rnd() - 0.5) * size * 0.3, r: size * (0.2 + rnd() * 0.2) }));
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let a = 0;
      for (const b of blobs) a = Math.max(a, 1 - Math.hypot(x - b.x, y - b.y) / b.r);
      a = Math.max(0, Math.min(1, a));
      const i = (y * size + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
      img.data[i + 3] = Math.pow(a, 1.4) * 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Neon-sign style text on canvas (transparent bg, glowing strokes). */
export function makeNeonText(text: string, color = '#ff2d55', size = 512): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(size, size / 4);
  ctx.font = `bold ${Math.floor(size / 6)}px Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = color;
  ctx.shadowBlur = 28;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.strokeText(text, size / 2, size / 8);
  ctx.fillStyle = color;
  ctx.fillText(text, size / 2, size / 8);
  ctx.shadowBlur = 0;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Name tag sprite texture. */
export function makeNameTag(name: string, color: string): THREE.CanvasTexture {
  const pad = 12;
  const [probe, pctx] = makeCanvas(8, 8);
  pctx.font = 'bold 34px Arial';
  const w = Math.ceil(pctx.measureText(name).width) + pad * 2;
  const [c, ctx] = makeCanvas(Math.max(64, w), 64);
  ctx.font = 'bold 34px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(0, 0, c.width, 64);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.strokeRect(1.5, 1.5, c.width - 3, 61);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(name, c.width / 2, 34);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Generic noise texture (concrete etc). */
export function makeNoiseTexture(size = 256, seed = 41, base: [number, number, number] = [70, 68, 66], contrast = 0.35): THREE.CanvasTexture {
  const noise = new ValueNoise(128, mulberry32(seed));
  const [c, ctx] = makeCanvas(size, size);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = noise.fbm(x * 0.02, y * 0.02, 5);
      const v = 1 - contrast / 2 + n * contrast;
      const i = (y * size + x) * 4;
      img.data[i] = base[0] * v; img.data[i + 1] = base[1] * v; img.data[i + 2] = base[2] * v; img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(c, size, size);
}

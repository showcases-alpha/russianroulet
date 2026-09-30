/**
 * bar.ts — builds the entire bar environment procedurally:
 * wooden floor, brick walls, bar counter with mirror + instanced bottles,
 * the central game table, booths, pool table, hanging lights, neon sign,
 * volumetric light cones and drifting dust. Zero external assets.
 */
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import {
  makeWood, makeBrick, makePlaster, makeFabric, makeNoiseTexture,
  makeNeonText, makeRadialGlow, mulberry32,
} from '../game/textures.js';
import type { QualitySettings } from '../game/quality.js';

export interface Collider2D {
  kind: 'circle' | 'aabb';
  x: number; z: number;
  r?: number; hw?: number; hd?: number; // circle radius / half extents
}

export class BarEnvironment {
  group = new THREE.Group();
  colliders: Collider2D[] = [];
  /** objects whose materials need the env map before first render */
  envMaterials: THREE.MeshStandardMaterial[] = [];

  lights: THREE.Light[] = [];
  private neon!: THREE.MeshStandardMaterial;
  private neonBulbs: THREE.PointLight[] = [];
  private dust?: THREE.Points;
  private volumetrics: THREE.Mesh[] = [];
  private chairs = new THREE.Group();
  private time = 0;

  constructor(private quality: QualitySettings) {
    this.chairs.name = 'match-chairs';
    this.group.add(this.chairs);
  }

  build(report: (step: string, frac: number) => void): void {
    report('Pouring the drinks', 0.1);
    this.buildFloor();
    report('Laying the brick', 0.25);
    this.buildWalls();
    report('Stocking the bar', 0.4);
    this.buildBarCounter();
    report('Polishing the table', 0.55);
    this.buildGameTable();
    this.buildBooths();
    report('Chalking the cues', 0.7);
    this.buildPoolTable();
    this.buildDecor();
    report('Hanging the lights', 0.85);
    this.buildLights();
    if (this.quality.volumetrics) this.buildVolumetrics();
    this.buildDust();
    this.freezeMatrices(this.group);
    report('Last call', 1);
  }

  /**
   * The bar is static — stop three.js from recomputing ~200 local matrices
   * every frame. (Dust animates via vertex attributes, not transforms, so it
   * is unaffected.) Pure CPU win, zero visual change.
   */
  private freezeMatrices(root: THREE.Object3D): void {
    root.traverse((o) => {
      o.matrixAutoUpdate = false;
      o.updateMatrix();
    });
  }

  /* ------------------------------------------------ floor */

  private buildFloor(): void {
    const wood = makeWood({ size: 1024, plankCount: 9, base: [122, 78, 44], seed: 42, gloss: 0.2 });
    wood.map.repeat.set(5, 4);
    wood.roughness.repeat.set(5, 4);
    wood.normal.repeat.set(5, 4);
    const mat = new THREE.MeshStandardMaterial({
      map: wood.map, roughnessMap: wood.roughness, normalMap: wood.normal,
      roughness: 0.42, metalness: 0.05, envMapIntensity: 0.7,
      normalScale: new THREE.Vector2(0.8, 0.8),
    });
    this.envMaterials.push(mat);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(23, 17), mat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.name = 'floor';
    this.group.add(floor);
  }

  /* ------------------------------------------------ walls & ceiling */

  private buildWalls(): void {
    const brick = makeBrick(512, 11);
    brick.map.repeat.set(6, 2);
    brick.normal.repeat.set(6, 2);
    const brickMat = new THREE.MeshStandardMaterial({
      map: brick.map, roughnessMap: brick.roughness, normalMap: brick.normal, roughness: 1, metalness: 0,
    });
    const plaster = makePlaster(512, 21, [64, 54, 48]);
    plaster.map.repeat.set(4, 2);
    const plasterMat = new THREE.MeshStandardMaterial({ map: plaster.map, roughnessMap: plaster.roughness, roughness: 1, metalness: 0 });

    const W = 22, D = 15.4, H = 4.2;
    const addWall = (w: number, h: number, mat: THREE.Material, x: number, y: number, z: number, ry: number) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      m.position.set(x, y, z); m.rotation.y = ry;
      m.receiveShadow = true;
      this.group.add(m);
      return m;
    };
    // north (bar) wall — brick
    addWall(W, H, brickMat, 0, H / 2, -D / 2, 0);
    // south wall with entrance — plaster
    addWall(W, H, plasterMat, 0, H / 2, D / 2, Math.PI);
    // east / west — plaster
    addWall(D, H, plasterMat, W / 2, H / 2, 0, -Math.PI / 2);
    addWall(D, H, plasterMat, -W / 2, H / 2, 0, Math.PI / 2);

    // ceiling: dark plaster + beams
    const ceilMat = new THREE.MeshStandardMaterial({ map: plaster.map, roughness: 1, color: 0x4a4038 });
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), ceilMat);
    ceil.rotation.x = Math.PI / 2;
    ceil.position.y = H;
    this.group.add(ceil);

    const beamWood = makeWood({ size: 256, plankCount: 1, base: [58, 38, 24], seed: 77, dark: 0.15 });
    const beamMat = new THREE.MeshStandardMaterial({ map: beamWood.map, roughness: 0.8, metalness: 0 });
    for (let i = -2; i <= 2; i++) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.28, D), beamMat);
      beam.position.set(i * 4.4, H - 0.14, 0);
      this.group.add(beam);
    }

    // dark wainscot along all walls
    const wainMat = new THREE.MeshStandardMaterial({ map: beamWood.map, roughness: 0.55, metalness: 0.05, envMapIntensity: 0.4 });
    this.envMaterials.push(wainMat);
    const wainscot = (w: number, x: number, z: number, ry: number) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 1.05, 0.07), wainMat);
      m.position.set(x, 0.55, z); m.rotation.y = ry;
      this.group.add(m);
    };
    wainscot(W - 0.1, 0, -D / 2 + 0.05, 0);
    wainscot(W - 0.1, 0, D / 2 - 0.05, 0);
    wainscot(D - 0.1, -W / 2 + 0.05, 0, Math.PI / 2);
    wainscot(D - 0.1, W / 2 - 0.05, 0, Math.PI / 2);

    this.colliders.push({ kind: 'aabb', x: 0, z: -D / 2 - 0.5, hw: W, hd: 0.5 });
    this.colliders.push({ kind: 'aabb', x: 0, z: D / 2 + 0.5, hw: W, hd: 0.5 });
    this.colliders.push({ kind: 'aabb', x: -W / 2 - 0.5, z: 0, hw: 0.5, hd: D });
    this.colliders.push({ kind: 'aabb', x: W / 2 + 0.5, z: 0, hw: 0.5, hd: D });
  }

  /* ------------------------------------------------ bar counter + back bar */

  private buildBarCounter(): void {
    const counterWood = makeWood({ size: 512, plankCount: 3, base: [70, 42, 24], seed: 88, gloss: 0.22 });
    const body = new THREE.MeshStandardMaterial({ map: counterWood.map, roughness: 0.5, metalness: 0.05 });
    const top = new THREE.MeshStandardMaterial({
      map: counterWood.map, roughnessMap: counterWood.roughness, normalMap: counterWood.normal,
      roughness: 0.3, metalness: 0.1, envMapIntensity: 0.9,
    });
    this.envMaterials.push(top);

    const g = new THREE.Group();
    const CX = 0, CZ = -5.6, CW = 9, CD = 0.85, H = 1.06;
    const bodyMesh = new THREE.Mesh(new THREE.BoxGeometry(CW, H - 0.08, CD), body);
    bodyMesh.position.set(CX, (H - 0.08) / 2, CZ);
    bodyMesh.castShadow = bodyMesh.receiveShadow = true;
    g.add(bodyMesh);
    const topMesh = new THREE.Mesh(new THREE.BoxGeometry(CW + 0.22, 0.09, CD + 0.3), top);
    topMesh.position.set(CX, H - 0.045, CZ);
    topMesh.castShadow = topMesh.receiveShadow = true;
    g.add(topMesh);
    // brass foot rail
    const brass = new THREE.MeshStandardMaterial({ color: 0xb08d3e, metalness: 1, roughness: 0.25, envMapIntensity: 1.4 });
    this.envMaterials.push(brass);
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, CW, 12), brass);
    rail.rotation.z = Math.PI / 2;
    rail.position.set(CX, 0.18, CZ + CD / 2 + 0.14);
    g.add(rail);
    for (const sx of [-1, 1]) {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 10), brass);
      cap.position.set(CX + sx * CW / 2, 0.18, CZ + CD / 2 + 0.14);
      g.add(cap);
    }
    this.group.add(g);
    this.colliders.push({ kind: 'aabb', x: CX, z: CZ, hw: CW / 2 + 0.3, hd: CD / 2 + 0.25 });

    // ---- back bar: shelves + bottles + mirror
    const shelfMat = new THREE.MeshStandardMaterial({ map: counterWood.map, roughness: 0.6, metalness: 0 });
    const mirrorMat = new THREE.MeshStandardMaterial({ color: 0x9fb2b8, metalness: 1, roughness: 0.06, envMapIntensity: 1.2 });
    this.envMaterials.push(mirrorMat);
    if (this.quality.reflectors >= 1) {
      // Real planar mirror behind the bottles (High/Ultra)
      const mirror = new Reflector(new THREE.PlaneGeometry(8.6, 2.4), {
        textureWidth: 512, textureHeight: 512, color: 0x777777,
      });
      mirror.position.set(0, 2.15, -7.62);
      this.group.add(mirror);
    } else {
      const mirror = new THREE.Mesh(new THREE.PlaneGeometry(8.6, 2.4), mirrorMat);
      mirror.position.set(0, 2.15, -7.62);
      this.group.add(mirror);
    }

    // bottle glass material (shared)
    const glass = new THREE.MeshStandardMaterial({
      color: 0xffffff, transparent: true, opacity: 0.42, roughness: 0.06, metalness: 0.1,
      envMapIntensity: 1.8, side: THREE.DoubleSide,
    });
    this.envMaterials.push(glass);

    const bottleGeo = new THREE.CylinderGeometry(0.032, 0.036, 0.26, 10);
    const neckGeo = new THREE.CylinderGeometry(0.012, 0.026, 0.12, 8);
    const rnd = mulberry32(1234);
    const bottleColors = [0x7a4a12, 0x3f5a1e, 0x5a1e1e, 0x9a7a2a, 0x2a4a5a, 0x6a2a5a];

    for (let shelf = 0; shelf < 3; shelf++) {
      const shelfY = 1.25 + shelf * 0.62;
      const shelfMesh = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.05, 0.34), shelfMat);
      shelfMesh.position.set(0, shelfY, -7.4);
      shelfMesh.castShadow = true;
      this.group.add(shelfMesh);

      const count = 26;
      const inst = new THREE.InstancedMesh(bottleGeo, glass, count);
      const instNeck = new THREE.InstancedMesh(neckGeo, glass, count);
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const colors: THREE.Color[] = [];
      for (let i = 0; i < count; i++) {
        const x = -4 + (i / (count - 1)) * 8 + (rnd() - 0.5) * 0.12;
        const z = -7.4 + (rnd() - 0.5) * 0.12;
        const s = 0.85 + rnd() * 0.35;
        const color = new THREE.Color(bottleColors[Math.floor(rnd() * bottleColors.length)]);
        colors.push(color);
        q.setFromEuler(new THREE.Euler(0, rnd() * 0.4 - 0.2, rnd() * 0.06 - 0.03));
        m.compose(new THREE.Vector3(x, shelfY + 0.05 + 0.13 * s, z), q, new THREE.Vector3(s, s, s));
        inst.setMatrixAt(i, m);
        inst.setColorAt(i, color);
        m.compose(new THREE.Vector3(x, shelfY + 0.05 + (0.26 + 0.06) * s, z), q, new THREE.Vector3(s, s, s));
        instNeck.setMatrixAt(i, m);
        instNeck.setColorAt(i, color);
      }
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
      if (instNeck.instanceColor) instNeck.instanceColor.needsUpdate = true;
      this.group.add(inst, instNeck);
    }

    // glasses on the counter (instanced)
    const glassGeo = new THREE.CylinderGeometry(0.045, 0.04, 0.14, 10, 1, true);
    const glasses = new THREE.InstancedMesh(glassGeo, glass, 14);
    const m2 = new THREE.Matrix4();
    for (let i = 0; i < 14; i++) {
      m2.makeTranslation(-3.6 + i * 0.55 + (rnd() - 0.5) * 0.1, H + 0.07, CZ - 0.08 + (rnd() - 0.5) * 0.2);
      glasses.setMatrixAt(i, m2);
    }
    this.group.add(glasses);
  }

  /* ------------------------------------------------ central game table */

  private buildGameTable(): void {
    const wood = makeWood({ size: 512, plankCount: 1, base: [88, 52, 28], seed: 55, gloss: 0.15 });
    const mat = new THREE.MeshStandardMaterial({
      map: wood.map, roughnessMap: wood.roughness, normalMap: wood.normal,
      roughness: 0.32, metalness: 0.06, envMapIntensity: 0.85,
    });
    this.envMaterials.push(mat);
    const legMat = new THREE.MeshStandardMaterial({ map: wood.map, roughness: 0.5, metalness: 0.05, color: 0xb08a66 });

    const g = new THREE.Group();
    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.42, 1.38, 0.09, 48), mat);
    top.position.y = 0.78;
    top.castShadow = top.receiveShadow = true;
    g.add(top);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.05, 48), legMat);
    rim.position.y = 0.73;
    rim.castShadow = true;
    g.add(rim);
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 0.72, 20), legMat);
    pedestal.position.y = 0.36;
    pedestal.castShadow = true;
    g.add(pedestal);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.68, 0.08, 24), legMat);
    base.position.y = 0.04;
    base.castShadow = base.receiveShadow = true;
    g.add(base);

    // poker chips + a deck of cards on the table
    const chipGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.008, 16);
    const chipMat = new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.25, envMapIntensity: 0.8 });
    this.envMaterials.push(chipMat);
    const chipColors = [0xb03030, 0x3060b0, 0x30a050, 0xd0d0d0, 0x202020];
    const rnd = mulberry32(99);
    const chips = new THREE.InstancedMesh(chipGeo, chipMat, 30);
    const m = new THREE.Matrix4(); const q = new THREE.Quaternion();
    for (let i = 0; i < 30; i++) {
      const stack = Math.floor(i / 5);
      const inStack = i % 5;
      const a = stack * 2.399;
      const r = 0.95 + (stack % 3) * 0.13;
      m.compose(
        new THREE.Vector3(Math.cos(a) * r, 0.83 + inStack * 0.009, Math.sin(a) * r),
        q.setFromEuler(new THREE.Euler(0, rnd() * 3, 0)),
        new THREE.Vector3(1, 1, 1),
      );
      chips.setMatrixAt(i, m);
      chips.setColorAt(i, new THREE.Color(chipColors[stack % chipColors.length]));
    }
    if (chips.instanceColor) chips.instanceColor.needsUpdate = true;
    g.add(chips);

    const cardMat = new THREE.MeshStandardMaterial({ color: 0xe8e4d8, roughness: 0.35 });
    for (let i = 0; i < 3; i++) {
      const card = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.002, 0.13), cardMat);
      card.position.set(0.5 + i * 0.03, 0.828 + i * 0.0022, 0.35 - i * 0.05);
      card.rotation.y = i * 0.7;
      card.castShadow = true;
      g.add(card);
    }
    this.group.add(g);
    this.colliders.push({ kind: 'circle', x: 0, z: 0, r: 1.62 });
  }

  /** Chairs are rebuilt per match so seat spacing matches the player count. */
  buildChairsForPlayers(count: number): { pos: THREE.Vector3; yaw: number }[] {
    // clear old
    this.chairs.clear();
    const wood = makeWood({ size: 256, plankCount: 1, base: [70, 44, 26], seed: 66 });
    const mat = new THREE.MeshStandardMaterial({ map: wood.map, roughness: 0.55, metalness: 0.04 });

    const seats: { pos: THREE.Vector3; yaw: number }[] = [];
    const R = 2.55;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + Math.PI / count;
      const x = Math.sin(a) * R, z = Math.cos(a) * R;
      const yaw = a + Math.PI; // face the table
      const chair = new THREE.Group();
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.5), mat);
      seat.position.y = 0.46;
      seat.castShadow = seat.receiveShadow = true;
      chair.add(seat);
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.55, 0.05), mat);
      back.position.set(0, 0.75, -0.23);
      back.castShadow = true;
      chair.add(back);
      for (const lx of [-0.21, 0.21]) for (const lz of [-0.21, 0.21]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.46, 0.05), mat);
        leg.position.set(lx, 0.23, lz);
        leg.castShadow = true;
        chair.add(leg);
      }
      chair.position.set(x, 0, z);
      chair.rotation.y = yaw;
      this.chairs.add(chair);
      // player stands just behind their chair
      seats.push({ pos: new THREE.Vector3(x * 1.18, 0, z * 1.18), yaw });
    }
    this.freezeMatrices(this.chairs);
    return seats;
  }

  /* ------------------------------------------------ booths */

  private buildBooths(): void {
    const leather = makeFabric(512, 31, [92, 30, 32]);
    const leatherMat = new THREE.MeshStandardMaterial({
      map: leather.map, roughnessMap: leather.roughness, normalMap: leather.normal, roughness: 0.75,
    });
    const woodMat = new THREE.MeshStandardMaterial({ map: leather.map, color: 0x6a4a2a, roughness: 0.6 });

    const booth = (x: number, z: number, ry: number) => {
      const g = new THREE.Group();
      // bench
      const bench = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.45, 0.7), leatherMat);
      bench.position.y = 0.3;
      bench.castShadow = bench.receiveShadow = true;
      g.add(bench);
      const backrest = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.95, 0.22), leatherMat);
      backrest.position.set(0, 0.85, -0.32);
      backrest.castShadow = true;
      g.add(backrest);
      // table
      const table = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.07, 0.8), woodMat);
      table.position.set(0, 0.74, 0.95);
      table.castShadow = table.receiveShadow = true;
      g.add(table);
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.74, 0.6), woodMat);
      leg.position.set(0, 0.37, 0.95);
      g.add(leg);
      g.position.set(x, 0, z);
      g.rotation.y = ry;
      this.group.add(g);
      // rough collider covering the booth footprint (world-space approx)
      const w = Math.abs(Math.cos(ry)) * 1.3 + Math.abs(Math.sin(ry)) * 2.4;
      const d = Math.abs(Math.sin(ry)) * 1.3 + Math.abs(Math.cos(ry)) * 2.4;
      this.colliders.push({ kind: 'aabb', x, z, hw: w / 2, hd: d / 2 });
    };
    booth(-8.4, -2.6, Math.PI / 2);
    booth(-8.4, 2.6, Math.PI / 2);
    booth(8.4, -2.6, -Math.PI / 2);
    booth(8.4, 2.6, -Math.PI / 2);
  }

  /* ------------------------------------------------ pool table */

  private buildPoolTable(): void {
    const g = new THREE.Group();
    const felt = makeFabric(512, 71, [26, 84, 48]);
    const feltMat = new THREE.MeshStandardMaterial({ map: felt.map, roughnessMap: felt.roughness, normalMap: felt.normal, roughness: 0.95 });
    const woodMat = new THREE.MeshStandardMaterial({ map: makeWood({ size: 256, base: [60, 36, 20], seed: 78 }).map, roughness: 0.45, metalness: 0.05 });

    const top = new THREE.Mesh(new THREE.BoxGeometry(2.24, 0.06, 1.24), feltMat);
    top.position.y = 0.8;
    top.receiveShadow = true;
    g.add(top);
    const rail = (w: number, d: number, x: number, z: number) => {
      const r = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, d), woodMat);
      r.position.set(x, 0.81, z);
      r.castShadow = r.receiveShadow = true;
      g.add(r);
    };
    rail(2.44, 0.12, 0, -0.68); rail(2.44, 0.12, 0, 0.68);
    rail(0.12, 1.24, -1.16, 0); rail(0.12, 1.24, 1.16, 0);
    for (const lx of [-1, 1]) for (const lz of [-0.5, 0.5]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.78, 0.16), woodMat);
      leg.position.set(lx * 1.02, 0.39, lz * 0.55);
      leg.castShadow = true;
      g.add(leg);
    }
    // balls
    const ballGeo = new THREE.SphereGeometry(0.028, 14, 14);
    const ballMat = new THREE.MeshStandardMaterial({ roughness: 0.15, metalness: 0.1, envMapIntensity: 1.2 });
    this.envMaterials.push(ballMat);
    const colors = [0xffffff, 0xf2c500, 0x1e5aa8, 0xb02020, 0x7a2080, 0x1e8040, 0x802020, 0x202020];
    const rnd = mulberry32(314);
    const balls = new THREE.InstancedMesh(ballGeo, ballMat, colors.length);
    const m = new THREE.Matrix4();
    for (let i = 0; i < colors.length; i++) {
      m.makeTranslation(-0.7 + rnd() * 1.4, 0.845, -0.35 + rnd() * 0.7);
      balls.setMatrixAt(i, m);
      balls.setColorAt(i, new THREE.Color(colors[i]));
    }
    if (balls.instanceColor) balls.instanceColor.needsUpdate = true;
    g.add(balls);
    // a cue leaning on it
    const cue = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.014, 1.45, 8), woodMat);
    cue.position.set(1.28, 0.72, 0.5);
    cue.rotation.z = 0.22;
    cue.castShadow = true;
    g.add(cue);

    g.position.set(6.4, 0, 4.9);
    g.rotation.y = 0.5;
    this.group.add(g);
    this.colliders.push({ kind: 'aabb', x: 6.4, z: 4.9, hw: 1.5, hd: 1.0 });
  }

  /* ------------------------------------------------ decor */

  private buildDecor(): void {
    // dartboard
    const [dc, dctx] = [document.createElement('canvas'), null] as const;
    dc.width = dc.height = 256;
    const ctx = dc.getContext('2d')!;
    const cx = 128;
    for (let ring = 0; ring < 8; ring++) {
      ctx.beginPath();
      ctx.arc(cx, cx, 118 - ring * 14, 0, Math.PI * 2);
      ctx.fillStyle = ['#151515', '#d8c25a', '#151515', '#d8c25a', '#1c6834', '#d8c25a', '#1c6834', '#c03030'][ring];
      ctx.fill();
    }
    ctx.strokeStyle = 'rgba(200,190,60,0.8)'; ctx.lineWidth = 3;
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(cx, cx);
      ctx.lineTo(cx + Math.cos(a) * 118, cx + Math.sin(a) * 118);
      ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(cx, cx, 10, 0, Math.PI * 2); ctx.fillStyle = '#a02020'; ctx.fill();
    const dartTex = new THREE.CanvasTexture(dc);
    dartTex.colorSpace = THREE.SRGBColorSpace;
    const dart = new THREE.Mesh(
      new THREE.CircleGeometry(0.28, 32),
      new THREE.MeshStandardMaterial({ map: dartTex, roughness: 0.9 }),
    );
    dart.position.set(-10.85, 1.75, -1.6);
    dart.rotation.y = Math.PI / 2;
    this.group.add(dart);

    // framed pictures
    const artMat = (seed: number, a: string, b: string) => {
      const c = document.createElement('canvas');
      c.width = 128; c.height = 96;
      const x = c.getContext('2d')!;
      const grad = x.createLinearGradient(0, 0, 128, 96);
      grad.addColorStop(0, a); grad.addColorStop(1, b);
      x.fillStyle = grad; x.fillRect(0, 0, 128, 96);
      const noise = mulberry32(seed);
      for (let i = 0; i < 400; i++) {
        x.fillStyle = `rgba(${Math.floor(noise() * 255)},${Math.floor(noise() * 200)},${Math.floor(noise() * 150)},0.08)`;
        x.fillRect(noise() * 128, noise() * 96, 8, 8);
      }
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      return new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 });
    };
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x2a1c10, roughness: 0.5, metalness: 0.3 });
    const picture = (x: number, y: number, z: number, ry: number, seed: number) => {
      const g = new THREE.Group();
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.66, 0.05), frameMat);
      const pic = new THREE.Mesh(new THREE.PlaneGeometry(0.74, 0.54), artMat(seed, '#3a2c1e', '#161020'));
      pic.position.z = 0.03;
      g.add(frame, pic);
      g.position.set(x, y, z); g.rotation.y = ry;
      this.group.add(g);
    };
    picture(-10.9, 2.0, 1.8, Math.PI / 2, 4);
    picture(-10.9, 2.0, 3.4, Math.PI / 2, 5);
    picture(10.9, 2.0, -1.8, -Math.PI / 2, 6);
    picture(-3.2, 2.0, 7.62, Math.PI, 7);
    picture(3.2, 2.0, 7.62, Math.PI, 8);

    // rug under the game table
    const rug = makeFabric(512, 91, [104, 24, 28]);
    const rugMat = new THREE.MeshStandardMaterial({ map: rug.map, roughnessMap: rug.roughness, normalMap: rug.normal, roughness: 0.95 });
    const rugMesh = new THREE.Mesh(new THREE.CircleGeometry(3.4, 40), rugMat);
    rugMesh.rotation.x = -Math.PI / 2;
    rugMesh.position.y = 0.005;
    rugMesh.receiveShadow = true;
    this.group.add(rugMesh);

    // door + exit glow
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.3, 2.4, 0.1), new THREE.MeshStandardMaterial({ color: 0x1c1208, roughness: 0.7 }));
    door.position.set(0, 1.2, 7.68);
    this.group.add(door);
    const exitTex = makeNeonText('EXIT', '#2aff88', 256);
    const exitSign = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 0.18),
      new THREE.MeshStandardMaterial({ map: exitTex, emissive: 0x2aff88, emissiveMap: exitTex, emissiveIntensity: 1.4, transparent: true }),
    );
    exitSign.position.set(0.95, 2.6, 7.6);
    exitSign.rotation.y = Math.PI;
    this.group.add(exitSign);

    // neon sign above the back bar
    const neonTex = makeNeonText('LAST ROUND', '#ff2d55', 1024);
    this.neon = new THREE.MeshStandardMaterial({
      map: neonTex, emissive: 0xff2d55, emissiveMap: neonTex, emissiveIntensity: 2.4,
      transparent: true, side: THREE.DoubleSide,
    });
    const neonMesh = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 1.35), this.neon);
    neonMesh.position.set(0, 3.5, -7.55);
    this.group.add(neonMesh);

    // hanging sign over the game table — "LUCKY TABLE"
    const signTex = makeNeonText('THE LUCKY TABLE', '#ffb02d', 1024);
    const signMat = new THREE.MeshStandardMaterial({
      map: signTex, emissive: 0xffb02d, emissiveMap: signTex, emissiveIntensity: 1.6,
      transparent: true, side: THREE.DoubleSide,
    });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), signMat);
    sign.position.set(0, 3.0, 0);
    this.group.add(sign);
    for (const sx of [-1, 1]) {
      const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 1.0, 6), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      wire.position.set(sx * 0.9, 3.5, 0);
      this.group.add(wire);
    }
  }

  /* ------------------------------------------------ lights */

  private buildLights(): void {
    const H = 4.2;

    // soft ambient base
    const hemi = new THREE.HemisphereLight(0x2a2018, 0x0b0806, 0.75);
    this.group.add(hemi);

    // main warm spot over the game table (the hero light — casts shadows)
    const spot = new THREE.SpotLight(0xffc98a, 150, 13, 0.78, 0.55, 1.5);
    spot.position.set(0, H - 0.5, 0);
    spot.target.position.set(0, 0, 0);
    spot.castShadow = this.quality.shadows;
    spot.shadow.mapSize.set(this.quality.shadowMapSize, this.quality.shadowMapSize);
    spot.shadow.bias = -0.0004;
    spot.shadow.camera.near = 0.5;
    spot.shadow.camera.far = 10;
    this.group.add(spot, spot.target);
    this.lights.push(spot);

    // warm candle-like fill at the table so every seated player reads clearly
    const candle = new THREE.PointLight(0xffb46a, 9, 7, 1.8);
    candle.position.set(0, 1.5, 0);
    this.group.add(candle);

    // hanging pendant lamps over the table (visual fixtures + warm points)
    const shadeMat = new THREE.MeshStandardMaterial({ color: 0x27201a, roughness: 0.5, metalness: 0.6, side: THREE.DoubleSide });
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffdf9e, emissive: 0xffb45e, emissiveIntensity: 3.2 });
    const pendant = (x: number, z: number, withLight: boolean) => {
      const g = new THREE.Group();
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.5, 6), new THREE.MeshStandardMaterial({ color: 0x0a0a0a }));
      cord.position.y = 0.75;
      g.add(cord);
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.22, 24, 1, true), shadeMat);
      shade.position.y = -0.02;
      g.add(shade);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), bulbMat);
      bulb.position.y = -0.09;
      g.add(bulb);
      if (withLight) {
        const pl = new THREE.PointLight(0xffb45e, 6, 7, 2);
        pl.position.y = -0.12;
        g.add(pl);
      }
      g.position.set(x, H - 0.35, z);
      this.group.add(g);
    };
    pendant(0, 0, true);       // main table pendant
    pendant(-1.3, 0.6, false);
    pendant(1.3, -0.6, false);

    // bar pendants
    pendant(-2.8, -4.9, true);
    pendant(2.8, -4.9, this.quality.secondaryShadowLights >= 1);

    // neon glow
    const neonLight = new THREE.PointLight(0xff2d55, 10, 9, 2);
    neonLight.position.set(0, 3.3, -7.2);
    this.group.add(neonLight);
    this.neonBulbs.push(neonLight);

    // booth warmth
    for (const [x, z] of [[-7.6, -2.6], [-7.6, 2.6], [7.6, -2.6], [7.6, 2.6]] as [number, number][]) {
      const pl = new THREE.PointLight(0xff9a55, 3.5, 5, 2);
      pl.position.set(x, 2.4, z);
      this.group.add(pl);
    }

    // cool window shaft (east wall) — secondary shadow caster
    const dir = new THREE.DirectionalLight(0x5a75a8, 0.5);
    dir.position.set(9, 3.4, -1);
    dir.target.position.set(0, 0.5, 1);
    if (this.quality.secondaryShadowLights >= 1) {
      dir.castShadow = true;
      dir.shadow.mapSize.set(1024, 1024);
      dir.shadow.camera.left = -6; dir.shadow.camera.right = 6;
      dir.shadow.camera.top = 6; dir.shadow.camera.bottom = -6;
      dir.shadow.bias = -0.0005;
    }
    this.group.add(dir, dir.target);
    // window frame + blinds
    const windowMat = new THREE.MeshStandardMaterial({ color: 0x1a2438, emissive: 0x4a6a9a, emissiveIntensity: 0.7, roughness: 0.2 });
    const win = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6), windowMat);
    win.position.set(10.94, 2.2, -1);
    win.rotation.y = -Math.PI / 2;
    this.group.add(win);
    const blindMat = new THREE.MeshStandardMaterial({ color: 0x15100c, roughness: 0.9 });
    for (let i = 0; i < 7; i++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.05, 2.5), blindMat);
      slat.position.set(10.9, 1.5 + i * 0.2, -1);
      this.group.add(slat);
    }
  }

  /* ------------------------------------------------ volumetrics + dust */

  private buildVolumetrics(): void {
    const glow = makeRadialGlow(128, 0.1);
    const coneMat = (color: number, opacity: number) => new THREE.MeshBasicMaterial({
      map: glow, color, transparent: true, opacity,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    });
    const cone = (x: number, y: number, z: number, r: number, h: number, color: number, op: number) => {
      const geo = new THREE.CylinderGeometry(r * 0.24, r, h, 20, 1, true);
      // vertical alpha gradient via vertex-less trick: use texture V ramp
      const m = coneMat(color, op);
      const mesh = new THREE.Mesh(geo, m);
      mesh.position.set(x, y - h / 2, z);
      this.group.add(mesh);
      this.volumetrics.push(mesh);
    };
    cone(0, 3.35, 0, 1.5, 2.6, 0xffb45e, 0.10);
    cone(-1.3, 3.35, 0.6, 0.9, 2.2, 0xffb45e, 0.06);
    cone(1.3, 3.35, -0.6, 0.9, 2.2, 0xffb45e, 0.06);
    cone(-2.8, 3.35, -4.9, 1.1, 2.4, 0xffb45e, 0.08);
    cone(2.8, 3.35, -4.9, 1.1, 2.4, 0xffb45e, 0.08);
  }

  private buildDust(): void {
    const count = Math.floor(220 * this.quality.particleDensity);
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const rnd = mulberry32(555);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rnd() - 0.5) * 16;
      pos[i * 3 + 1] = 0.4 + rnd() * 3.2;
      pos[i * 3 + 2] = (rnd() - 0.5) * 12;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xc8a878, size: 0.02, transparent: true, opacity: 0.35,
      map: makeRadialGlow(64, 0.2), blending: THREE.AdditiveBlending, depthWrite: false,
    });
    this.dust = new THREE.Points(geo, mat);
    this.group.add(this.dust);
  }

  /* ------------------------------------------------ per-frame */

  update(dt: number): void {
    this.time += dt;
    // neon flicker
    if (this.neon) {
      const flick = 0.82 + 0.18 * Math.sin(this.time * 11) * Math.sin(this.time * 3.7) + (Math.random() < 0.006 ? -0.5 : 0);
      this.neon.emissiveIntensity = 2.4 * Math.max(0.25, flick);
      for (const l of this.neonBulbs) l.intensity = 10 * Math.max(0.25, flick);
    }
    // dust drift
    if (this.dust) {
      const pos = this.dust.geometry.getAttribute('position') as THREE.BufferAttribute;
      const arr = pos.array as Float32Array;
      for (let i = 0; i < arr.length; i += 3) {
        arr[i + 1] += dt * 0.03 * ((i % 7) - 3) * 0.5;
        arr[i] += dt * 0.015 * ((i % 5) - 2) * 0.5;
        if (arr[i + 1] > 3.8) arr[i + 1] = 0.4;
        if (arr[i] > 8) arr[i] = -8; if (arr[i] < -8) arr[i] = 8;
      }
      pos.needsUpdate = true;
    }
  }
}

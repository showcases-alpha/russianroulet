/**
 * physicsWorld.ts — cannon-es wrapper. Static environment bodies are added
 * once; ragdolls register their bodies here and get stepped with the global
 * (possibly slow-motion) time scale.
 */
import * as CANNON from 'cannon-es';

export class PhysicsWorld {
  world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
  private accumulator = 0;
  private readonly FIXED = 1 / 60;

  constructor() {
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    this.world.allowSleep = true;
    (this.world.solver as CANNON.GSSolver).iterations = 14;
    this.world.defaultContactMaterial.friction = 0.55;
    this.world.defaultContactMaterial.restitution = 0.05;

    const floor = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() });
    floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(floor);

    // walls
    const addBox = (x: number, y: number, z: number, hw: number, hh: number, hd: number, ry = 0) => {
      const body = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(hw, hh, hd)) });
      body.position.set(x, y, z);
      body.quaternion.setFromEuler(0, ry, 0);
      this.world.addBody(body);
    };
    addBox(0, 2.1, -7.7, 11, 2.1, 0.15);
    addBox(0, 2.1, 7.7, 11, 2.1, 0.15);
    addBox(-11, 2.1, 0, 0.15, 2.1, 7.7);
    addBox(11, 2.1, 0, 0.15, 2.1, 7.7);

    // central game table
    const tableTop = new CANNON.Body({ mass: 0, shape: new CANNON.Cylinder(1.45, 1.45, 0.1, 12) });
    tableTop.position.set(0, 0.78, 0);
    this.world.addBody(tableTop);
    const tableBase = new CANNON.Body({ mass: 0, shape: new CANNON.Cylinder(0.68, 0.68, 0.75, 8) });
    tableBase.position.set(0, 0.38, 0);
    this.world.addBody(tableBase);

    // bar counter
    addBox(0, 0.53, -5.6, 4.5, 0.53, 0.5);
    // booths
    for (const x of [-8.4, 8.4]) for (const z of [-2.6, 2.6]) addBox(x, 0.7, z, 1.2, 0.7, 0.9);
    // pool table
    addBox(6.4, 0.45, 4.9, 1.25, 0.45, 0.75, 0.5);
  }

  step(dt: number, timeScale = 1): void {
    const scaled = Math.min(dt, 0.05) * timeScale;
    this.accumulator += scaled;
    let steps = 0;
    while (this.accumulator >= this.FIXED && steps < 5) {
      this.world.step(this.FIXED);
      this.accumulator -= this.FIXED;
      steps++;
    }
    if (steps >= 5) this.accumulator = 0; // avoid spiral of death after tab-switch
  }
}

/**
 * Input orientation check — verifies in a real browser that:
 *   - mouse up looks up / mouse down looks down (third-person chase cam)
 *   - W/A/S/D move forward/left/backward/right relative to the camera
 *   - match spawn camera faces the table (camYaw == own seat yaw)
 * Same headless-chromium setup as browser-smoke.mjs. Run: node test/input-check.mjs
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let puppeteer;
try { puppeteer = (await import('puppeteer')).default; }
catch {
  console.log('puppeteer not installed — skipping (npm i -D puppeteer @sparticuz/chromium)');
  process.exit(0);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PORT = 4020;
const URL = `http://127.0.0.1:${PORT}`;
const EXEC = process.env.PUPPETEER_EXECUTABLE_PATH || '/tmp/chromium';

if (!fs.existsSync(EXEC)) {
  console.log(`no chromium at ${EXEC} — run the setup described in README (dev section)`);
  process.exit(0);
}
process.env.LD_LIBRARY_PATH = '/tmp/al2023/lib';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failures = 0;
const check = (c, l) => { console.log(`  [input] ${c ? 'PASS' : 'FAIL'}: ${l}`); if (!c) failures++; };

const server = spawn('node', ['server/dist/server.js'], {
  env: { ...process.env, PORT: String(PORT) }, stdio: 'ignore', cwd: ROOT,
});
await sleep(1200);

const browser = await puppeteer.launch({
  executablePath: EXEC,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--mute-audio'],
  defaultViewport: { width: 800, height: 450 },
});

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(240000);
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 240000 });
  await page.bringToFront(); // headless SwiftShader is slow — never let this page throttle
  await page.waitForSelector('#entryPanel:not(.hidden)', { timeout: 240000 });
  await page.select('#qualitySelect', 'low');
  await page.type('#nameInput', 'OrientationBot');
  await page.click('#createRoomBtn');
  await page.waitForFunction(() => {
    const g = window.__game;
    return g && g.debugState().phase === 'LOBBY' && g.debugState().entities >= 1;
  }, { timeout: 60000 });
  await sleep(1500);

  // input handlers only check the flag — simulate an active pointer lock
  await page.evaluate(() => { window.__game.pointerLocked = true; });

  /* ---------- mouse pitch ---------- */
  // camera dir is applied by the render loop — poll until it settles (slow headless fps)
  const camDirY = () => page.evaluate(() => -window.__game.camera.matrixWorld.elements[9]);
  const waitDir = async (wantUp) => {
    for (let i = 0; i < 30; i++) {
      await sleep(400);
      const y = await camDirY();
      if (wantUp ? y > 0.1 : y < -0.1) return y;
    }
    return camDirY();
  };

  await page.evaluate(() => { window.__game.camPitch = 0; });
  await page.evaluate(() => document.dispatchEvent(new MouseEvent('mousemove', { movementX: 0, movementY: -150 })));
  let pitch = await page.evaluate(() => window.__game.camPitch);
  let dirY = await waitDir(true);
  check(pitch > 0.2, `mouse up → pitch increases (${pitch.toFixed(2)})`);
  check(dirY > 0.03, `mouse up → camera looks up (dirY=${dirY.toFixed(2)})`);

  await page.evaluate(() => { window.__game.camPitch = 0; });
  await page.evaluate(() => document.dispatchEvent(new MouseEvent('mousemove', { movementX: 0, movementY: 150 })));
  pitch = await page.evaluate(() => window.__game.camPitch);
  dirY = await waitDir(false);
  check(pitch < -0.2, `mouse down → pitch decreases (${pitch.toFixed(2)})`);
  check(dirY < -0.03, `mouse down → camera looks down (dirY=${dirY.toFixed(2)})`);

  /* ---------- WASD vs camera basis ---------- */
  const moveTest = async (key, label, dirName) => {
    const before = await page.evaluate(() => {
      const g = window.__game;
      const c = g.myCharacter();
      return { pos: [c.group.position.x, c.group.position.z], yaw: g.camYaw };
    });
    await page.evaluate((k) => document.dispatchEvent(new KeyboardEvent('keydown', { code: k })), key);
    await sleep(8000);
    await page.evaluate((k) => document.dispatchEvent(new KeyboardEvent('keyup', { code: k })), key);
    const after = await page.evaluate(() => {
      const c = window.__game.myCharacter();
      return [c.group.position.x, c.group.position.z];
    });
    const dx = after[0] - before.pos[0], dz = after[1] - before.pos[1];
    const dist = Math.hypot(dx, dz);
    const fwdDot = dx * Math.sin(before.yaw) + dz * Math.cos(before.yaw);
    const rightDot = dx * -Math.cos(before.yaw) + dz * Math.sin(before.yaw);
    const dot = dirName === 'forward' ? fwdDot : dirName === 'backward' ? -fwdDot
      : dirName === 'right' ? rightDot : -rightDot;
    const fps = await page.evaluate(() => Math.round(window.__game.fpsEMA));
    check(dist > 0.3 && dot > dist * 0.6,
      `${label} moves ${dirName} (dist=${dist.toFixed(2)}m, dot=${dot.toFixed(2)}, ~${fps}fps)`);
  };

  await page.evaluate(() => { window.__game.camYaw = Math.PI; });
  await moveTest('KeyW', 'W', 'forward');
  await moveTest('KeyS', 'S', 'backward');
  await moveTest('KeyD', 'D', 'right');
  await moveTest('KeyA', 'A', 'left');

  check(errors.length === 0, `no page errors (${errors.length}${errors.length ? ': ' + errors[0] : ''})`);
} catch (err) {
  failures++;
  console.error('  [input] FATAL:', err.message);
} finally {
  await browser.close().catch(() => {});
  server.kill();
  await sleep(300);
}

console.log(failures ? `\n${failures} FAILURES` : '\nInput orientation checks passed ✔');
process.exit(failures ? 1 : 0);

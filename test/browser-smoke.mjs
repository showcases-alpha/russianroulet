/**
 * Browser smoke test: launches real headless Chromium instances against the
 * real server and plays actual matches, capturing screenshots at key beats.
 * Run: node test/browser-smoke.mjs   (WebGL via SwiftShader — slow but real)
 *
 * Needs /tmp/chromium (see README dev section) or set PUPPETEER_EXECUTABLE_PATH.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let puppeteer;
try {
  puppeteer = (await import('puppeteer')).default;
} catch {
  console.log('puppeteer is not installed.');
  console.log('For the full browser test:  npm install -D puppeteer @sparticuz/chromium');
  console.log('  (also install its libs, see test/browser-smoke.mjs header)');
  process.exit(0);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PORT = 4010;
const URL = `http://127.0.0.1:${PORT}`;
const SHOTS = path.join(ROOT, 'test', 'screenshots');
fs.mkdirSync(SHOTS, { recursive: true });

const EXEC = process.env.PUPPETEER_EXECUTABLE_PATH || '/tmp/chromium';
const ENV_PREFIX = process.env.PUPPETEER_EXECUTABLE_PATH ? '' : 'LD_LIBRARY_PATH=/tmp/al2023/lib ';
void ENV_PREFIX;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failures = 0;
const check = (cond, label) => {
  console.log(`  [smoke] ${cond ? 'PASS' : 'FAIL'}: ${label}`);
  if (!cond) failures++;
};

console.log('══════════ browser smoke test ══════════');
const server = spawn('node', ['server/dist/server.js'], {
  env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'pipe'], cwd: ROOT,
});
server.stdout.on('data', (d) => process.stdout.write('  [srv] ' + d));
await sleep(1500);

const browser = await puppeteer.launch({
  executablePath: EXEC,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--mute-audio', '--window-size=800,450'],
  defaultViewport: { width: 800, height: 450 },
});

const errors = [];
const pages = [];

async function setPaused(page, paused) {
  await page.evaluate((p) => window.__game.setPaused(p), paused).catch(() => {});
}

async function makePlayer(name, roomCode = null) {
  const page = await browser.newPage();
  page.setDefaultTimeout(240000);
  page.on('pageerror', (err) => errors.push(`${name}: PAGEERROR ${err.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`${name}: console.error ${msg.text()}`);
  });
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 240000 });
  await page.waitForSelector('#entryPanel:not(.hidden)', { timeout: 240000 });
  await page.bringToFront();
  await page.select('#qualitySelect', 'low');
  await page.type('#nameInput', name);
  if (roomCode) {
    await page.type('#codeInput', roomCode);
    await page.click('#joinRoomBtn');
  } else {
    await page.click('#createRoomBtn');
  }
  await page.waitForFunction(() => {
    const g = window.__game;
    return g && g.debugState().connected && g.debugState().phase !== 'CONNECTING';
  }, { timeout: 60000 });
  await setPaused(page, true); // free CPU for the next player's boot
  pages.push({ name, page });
  return page;
}

async function shot(page, file) {
  await setPaused(page, false);
  await page.bringToFront();
  await sleep(1200);
  await page.screenshot({ path: path.join(SHOTS, file) });
  await setPaused(page, true);
}

async function unpauseAll() {
  for (const { page } of pages) await setPaused(page, false);
}
async function pauseAll(exceptPage) {
  for (const { page } of pages) if (page !== exceptPage) await setPaused(page, true);
}

async function stateOf(page) {
  return page.evaluate(() => window.__game.debugState());
}

try {
  /* ---- 1. boot + entry ---- */
  console.log('  [smoke] booting clients…');
  const host = await makePlayer('Alice');
  const state1 = await stateOf(host);
  check(state1.connected, 'host connected to server');
  check(state1.phase === 'LOBBY', `host in LOBBY phase (${state1.phase})`);
  await shot(host, '01-lobby-joined.png');

  // read the created room code, then have the others join with it
  const roomCode = await host.evaluate(() => window.__game.debugState().roomCode);
  check(/^[A-Z0-9]{4}$/.test(roomCode), `host created a room (code ${roomCode})`);
  await makePlayer('Bob', roomCode);
  await makePlayer('Carol', roomCode);
  await unpauseAll();
  await sleep(1500);

  // everyone's lobby must show the same room code
  for (const { name, page } of pages) {
    const code = await page.evaluate(() => window.__game.debugState().roomCode);
    check(code === roomCode, `${name} is in room ${code}`);
  }
  const codeShown = await host.evaluate(() => document.getElementById('roomCode').textContent);
  check(codeShown === roomCode, `room code displayed in the lobby (${codeShown})`);

  for (const { name, page } of pages) {
    const n = await page.evaluate(() => document.querySelectorAll('#lobbyPlayers li').length);
    check(n === 3, `${name} sees 3 players in lobby (${n})`);
  }
  await shot(pages[0].page, '02-lobby-full.png');

  /* ---- 2. ready + start ---- */
  // host raises the turn timer — headless SwiftShader clients are slow, and we
  // don't want the server's auto-fire resolving the match before we can shoot
  await pages[0].page.evaluate(() => window.__game.net.send({ type: 'update_settings', rules: { turnTimeoutSec: 120 } }));
  await sleep(500);
  for (const { page } of pages) {
    await page.evaluate(() => document.getElementById('readyBtn').click());
    await sleep(200);
  }
  await sleep(600);
  await pages[0].page.evaluate(() => document.getElementById('startBtn').click());
  console.log('  [smoke] match started — waiting for first turn…');

  let turn = null;
  for (let i = 0; i < 80; i++) {
    await sleep(700);
    turn = await stateOf(pages[0].page);
    if (turn.turnId) break;
  }
  check(!!turn?.turnId, `first turn started (${turn?.turnId ?? 'none'})`);
  check(turn.entities === 3, `3 characters spawned (${turn.entities})`);
  await shot(pages[0].page, '03-match-start.png');

  /* ---- 3. play turns automatically ---- */
  let shots = 0, liveShots = 0, empties = 0, eliminated = 0;
  for (let round = 0; round < 14; round++) {
    const state = await stateOf(pages[0].page);
    if (state.phase === 'ENDING') break;
    if (!state.turnId) { await sleep(1200); continue; }

    let actor = null;
    for (const p of pages) {
      const s = await stateOf(p.page);
      if (s.myId === state.turnId && s.alive[s.myId]) { actor = p; break; }
    }
    if (!actor) { await sleep(1500); continue; }

    const targets = Object.entries(state.alive).filter(([id, a]) => a && id !== state.turnId);
    const target = targets.length && Math.random() < 0.65 ? targets[Math.floor(Math.random() * targets.length)][0] : 'self';

    await unpauseAll();
    await actor.page.bringToFront();
    await actor.page.evaluate((t) => window.__game.net.send({ type: 'shoot', target: t }), target);
    shots++;
    await sleep(2200); // into the pre-shot cinematic
    await actor.page.screenshot({ path: path.join(SHOTS, `10-aim-${String(shots).padStart(2, '0')}.png`) });
    await sleep(1600); // bullet cam / click aftermath
    await actor.page.screenshot({ path: path.join(SHOTS, `20-outcome-${String(shots).padStart(2, '0')}.png`) });
    await sleep(6500); // possibly into the reload cinematic
    await actor.page.screenshot({ path: path.join(SHOTS, `21-late-${String(shots).padStart(2, '0')}.png`) });

    // let the outcome cinematic play out (actor page is the reference)
    let settled = false;
    for (let i = 0; i < 60; i++) {
      await sleep(1000);
      const a = await stateOf(actor.page);
      if (a.cine === 'idle') { settled = true; break; }
    }
    const after = await stateOf(pages[0].page);
    const actorCine = (await stateOf(actor.page)).cine;
    const deadNow = Object.entries(after.alive).filter(([, a]) => !a).length;
    if (deadNow > eliminated) { liveShots++; eliminated = deadNow; }
    else empties++;
    console.log(`  [smoke] shot #${shots}: alive=${Object.values(after.alive).filter(Boolean).length} actorCine=${actorCine} settled=${settled}`);
    await pauseAll(null);
    if (Object.values(after.alive).filter(Boolean).length <= 1) break;
  }

  check(shots >= 2, `multiple shots played (${shots})`);
  check(eliminated >= 1, `at least one elimination (${eliminated})`);
  console.log(`  [smoke] totals: shots=${shots} live=${liveShots} empty=${empties}`);

  await shot(pages[0].page, '04-mid-game.png');

  /* ---- 4. wait for match end ---- */
  await unpauseAll();
  let endState = null;
  for (let i = 0; i < 120; i++) {
    await sleep(700);
    endState = await stateOf(pages[0].page);
    if (endState.phase === 'ENDING') break;
  }
  check(endState?.phase === 'ENDING', `match reached ENDING (${endState?.phase})`);
  await sleep(6000); // winner cinematic
  await shot(pages[0].page, '05-end-screen.png');
  const endVisible = await pages[0].page.evaluate(() => !document.getElementById('endscreen').classList.contains('hidden'));
  check(endVisible, 'end screen visible');

  /* ---- 5. back to lobby ---- */
  await pages[0].page.evaluate(() => document.getElementById('backToLobbyBtn').click());
  await sleep(2000);
  const backState = await stateOf(pages[0].page);
  check(backState.phase === 'LOBBY', `back in LOBBY after match (${backState.phase})`);
  await shot(pages[0].page, '06-back-to-lobby.png');
} catch (err) {
  failures++;
  console.error('  [smoke] FATAL:', err.message);
} finally {
  const errSummary = [...new Set(errors)];
  for (const e of errSummary.slice(0, 12)) console.log('  [smoke] JS ERROR:', e);
  check(errSummary.length === 0, `no page errors (${errSummary.length})`);
  await browser.close().catch(() => {});
  server.kill();
  await sleep(300);
}

console.log(failures ? `\n${failures} FAILURES — screenshots in test/screenshots/` : '\nBrowser smoke test passed ✔');
process.exit(failures ? 1 : 0);

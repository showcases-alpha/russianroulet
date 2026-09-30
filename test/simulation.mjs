/**
 * End-to-end server simulation: scripted WebSocket clients play full matches.
 * Run: node test/simulation.mjs
 */
import { spawn } from 'node:child_process';
import WebSocket from 'ws';

const PORT = 3999;
const URL = `ws://127.0.0.1:${PORT}/ws`;

const log = (...a) => console.log('  [test]', ...a);
let failures = 0;
function check(cond, label) {
  if (cond) log('PASS:', label);
  else { failures++; log('FAIL:', label); }
}

class TestClient {
  constructor(name) {
    this.name = name;
    this.msgs = [];
    this.handlers = [];
    this.id = null;
    this.roomCode = null;
    this.alive = new Map();
  }
  async connect(opts) {
    this.ws = new WebSocket(URL);
    await new Promise((res, rej) => { this.ws.on('open', res); this.ws.on('error', rej); });
    this.ws.on('message', (raw) => {
      const msg = JSON.parse(String(raw));
      this.msgs.push(msg);
      this.alive.set(msg.type, (this.alive.get(msg.type) || 0) + 1);
      for (const h of this.handlers) h(msg);
    });
    this.send({ type: 'hello', name: this.name, ...(opts ?? {}) });
    const welcome = await this.waitFor('welcome');
    this.id = welcome.playerId;
    this.roomCode = welcome.roomCode;
  }
  send(obj) { this.ws.send(JSON.stringify(obj)); }
  waitFor(type, timeout = 15000) {
    return new Promise((resolve, reject) => {
      const existing = this.msgs.find((m) => m.type === type);
      if (existing) return resolve(existing);
      const timer = setTimeout(() => reject(new Error(`${this.name}: timeout waiting for ${type}`)), timeout);
      const h = (msg) => {
        if (msg.type === type) { clearTimeout(timer); resolve(msg); }
      };
      this.handlers.push(h);
    });
  }
  get last() { return this.msgs[this.msgs.length - 1]; }
  close() { this.ws.close(); }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function runMatch(rulesOverride = {}) {
  console.log(`\n━━━ Match simulation (rules: ${JSON.stringify(rulesOverride)}) ━━━`);
  const server = spawn('node', ['server/dist/server.js'], {
    env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  server.stdout.on('data', (d) => process.stdout.write('  [srv] ' + d));
  server.stderr.on('data', (d) => process.stderr.write('  [srv!] ' + d));
  await sleep(1200);

  const clients = [];
  try {
    // host creates a room, the others join with its code
    const host = new TestClient('Alice');
    await host.connect({ create: true });
    clients.push(host);
    for (const name of ['Bob', 'Carol']) {
      const c = new TestClient(name);
      await c.connect({ room: host.roomCode });
      clients.push(c);
    }
    check(clients.every((c) => c.roomCode === host.roomCode), 'all clients in the same room');
    await sleep(300);
    check(clients[0].msgs.some((m) => m.type === 'lobby_state' && m.players.length === 3), 'three players in lobby');

    // Host tweaks settings
    clients[0].send({ type: 'update_settings', rules: { ...rulesOverride, turnTimeoutSec: 10, preShotMs: 800, emptyOutcomeMs: 700, liveOutcomeMs: 900, reloadMs: 700 } });
    await sleep(200);

    for (const c of clients) c.send({ type: 'set_ready', ready: true });
    await sleep(200);
    clients[0].send({ type: 'start_game' });
    for (const c of clients) await c.waitFor('game_start');

    const start = clients[0].msgs.find((m) => m.type === 'game_start');
    check(start.players.length === 3, 'game_start roster has 3 players');

    let turn = await clients[0].waitFor('turn_start');
    const order = [turn.playerId];

    // Play automatically: each player whose turn it is shoots the next living player.
    let endSeen = null;
    const ended = new Promise((res) => { endSeen = res; });
    for (const c of clients) c.handlers.push(async (msg) => {
      if (msg.type === 'turn_start') {
        order.push(msg.playerId);
        // slight delay to simulate thinking
        setTimeout(() => {
          const shooter = clients.find((x) => x.id === msg.playerId);
          if (shooter && !shooter.gone) {
            const roster = shooter.msgs.filter((m) => m.type === 'shot_result');
            const alive = new Set(start.players.map((p) => p.id));
            for (const r of roster) if (r.eliminatedId) alive.delete(r.eliminatedId);
            alive.delete(msg.playerId);
            const target = [...alive][0];
            shooter.send({ type: 'shoot', target: target ?? 'self' });
          }
        }, 120);
      }
      if (msg.type === 'match_end') endSeen(msg);
    });

    const end = await Promise.race([ended, sleep(60000).then(() => null)]);
    check(end, 'match reached match_end');
    if (end) {
      const alive = end.players.filter((p) => p.alive && !p.spectator);
      check(alive.length <= 1, `at most one survivor (${alive.length})`);
      check(end.winnerId === (alive[0]?.id ?? null), 'winnerId matches survivor');
      const shots = clients[0].msgs.filter((m) => m.type === 'shot_result');
      const liveShots = shots.filter((s) => s.result === 'LIVE');
      const reloads = clients[0].msgs.filter((m) => m.type === 'reload_start');
      log(`  shots=${shots.length} live=${liveShots.length} reloads=${reloads.length} winner=${end.players.find((p) => p.id === end.winnerId)?.name ?? 'draw'}`);
      check(liveShots.length >= 1, 'at least one live shot occurred');
      // The final live shot ends the match — no reload after it. Every earlier live shot reloads.
      const matchEndedOnLive = shots[shots.length - 1]?.result === 'LIVE';
      const expectedReloads = matchEndedOnLive ? liveShots.length - 1 : liveShots.length;
      check(reloads.length === Math.max(0, expectedReloads), 'reload cinematic per non-final live shot');

      // eliminated players got spectator_start
      for (const c of clients) {
        const eliminated = end.players.find((p) => p.id === c.id && p.spectator);
        if (eliminated) check(c.msgs.some((m) => m.type === 'spectator_start'), `${c.name} received spectator_start`);
      }

      // invalid action rejection: eliminated player tries to shoot
      const dead = clients.find((c) => end.players.find((p) => p.id === c.id && p.spectator));
      if (dead) {
        dead.send({ type: 'shoot', target: end.winnerId ?? 'self' });
        const err = await dead.waitFor('error', 3000).catch(() => null);
        check(!!err, 'eliminated player cannot shoot');
      }
    }

    // back to lobby + restart works
    clients[0].send({ type: 'return_to_lobby' });
    await clients[0].waitFor('back_to_lobby');
    check(true, 'returned to lobby');
    await clients[0].waitFor('lobby_state');
    check(clients.every((c) => c.msgs.some((m) => m.type === 'lobby_state')), 'lobby state broadcast after return');

    // Cheater test: non-host tries to start / shoot out of turn
    clients[1].send({ type: 'shoot', target: 'self' });
    const err = await clients[1].waitFor('error', 3000).catch(() => null);
    check(!!err, 'shooting outside a match rejected');
  } finally {
    for (const c of clients) c.close();
    server.kill();
    await sleep(300);
  }
}

async function roomTests() {
  console.log('\n━━━ Room system tests ━━━');
  const server = spawn('node', ['server/dist/server.js'], {
    env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  server.stdout.on('data', () => {});
  server.stderr.on('data', (d) => process.stderr.write('  [srv!] ' + d));
  await sleep(1200);
  const clients = [];
  try {
    const a1 = new TestClient('Ann');
    await a1.connect({ create: true });
    clients.push(a1);
    const b1 = new TestClient('Bela');
    await b1.connect({ create: true });
    clients.push(b1);
    check(a1.roomCode !== b1.roomCode, `two rooms get different codes (${a1.roomCode} / ${b1.roomCode})`);

    const a2 = new TestClient('Ari');
    await a2.connect({ room: a1.roomCode });
    clients.push(a2);
    await sleep(400);
    const lobbyA = a1.msgs.filter((m) => m.type === 'lobby_state').pop();
    check(lobbyA.players.length === 2, 'room A sees only its own 2 players');
    const lobbyB = b1.msgs.filter((m) => m.type === 'lobby_state').pop();
    check(lobbyB.players.length === 1, 'room B is isolated (1 player)');

    // invalid code → clean rejection + close
    const bad = new TestClient('Nope');
    await bad.connect({ room: 'ZZZZ' }).catch(() => null);
    const err = bad.msgs.find((m) => m.type === 'error' && m.code === 'room_not_found');
    check(!!err, 'invalid room code rejected with room_not_found');

    // room A runs its own match; room B is untouched
    for (const c of [a1, a2]) c.send({ type: 'set_ready', ready: true });
    await sleep(200);
    a1.send({ type: 'start_game' });
    await a1.waitFor('game_start', 5000);
    check(true, 'room A started its own match');
    check(b1.msgs.filter((m) => m.type === 'game_start').length === 0, 'room B unaffected by room A match');

    // codeless join → public room
    const d = new TestClient('Solo');
    await d.connect();
    clients.push(d);
    check(d.roomCode === 'PUB', `codeless join lands in the public room (${d.roomCode})`);
  } finally {
    for (const c of clients) c.close();
    server.kill();
    await sleep(300);
  }
}

console.log('══════════ LAST ROUND server simulation ══════════');
await runMatch({});
await runMatch({ liveCount: 2, chamberCount: 6, emptySelfShot: 'extra' });
await roomTests();

if (failures) { console.log(`\n${failures} FAILURES`); process.exit(1); }
console.log('\nAll simulation checks passed ✔');
process.exit(0);

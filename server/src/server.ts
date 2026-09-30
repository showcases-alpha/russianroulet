/**
 * server.ts — HTTP + WebSocket entry point.
 * Serves the built client from client/public and hosts the authoritative game.
 * Port comes from port.txt (fallback 3000).
 */
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import express from 'express';
import { WebSocketServer, type WebSocket } from 'ws';
import { GameManager } from './game/gameManager.js';
import { readPort, ROOT_DIR } from './config.js';
import type { ClientMessage } from '../../shared/protocol.js';

const PORT = readPort();
const game = new GameManager();

/* ---------------- HTTP: static client ---------------- */

const app = express();
const publicDir = path.join(ROOT_DIR, 'client', 'public');
app.use(express.static(publicDir, { index: 'index.html' }));
app.get('/healthz', (_req, res) => res.json({ ok: true, phase: game.phase }));
app.use((_req, res) => {
  // SPA fallback
  res.sendFile(path.join(publicDir, 'index.html'));
});

const server = http.createServer(app);

/* ---------------- WebSocket: game transport ---------------- */

const wss = new WebSocketServer({ server, path: '/ws' });
const sockets = new WeakMap<WebSocket, { playerId: string | null }>();

const HELLO_TIMEOUT = 8000;

wss.on('connection', (socket) => {
  sockets.set(socket, { playerId: null });
  let player: import('./players/player.js').Player | null = null;

  const helloTimer = setTimeout(() => {
    if (!player) socket.close(4000, 'no hello');
  }, HELLO_TIMEOUT);

  socket.on('message', (raw) => {
    let msg: ClientMessage;
    try { msg = JSON.parse(String(raw)); } catch { return; }
    if (!msg || typeof msg.type !== 'string') return;

    if (msg.type === 'hello') {
      if (player) return;
      const { player: p } = game.join(msg.name || 'Stranger', socket, msg.token);
      player = p;
      sockets.set(socket, { playerId: p.id });
      return;
    }
    if (!player) return; // must hello first

    switch (msg.type) {
      case 'set_ready': game.setReady(player, msg.ready); break;
      case 'update_settings': game.updateSettings(player, msg.rules); break;
      case 'start_game': game.startGame(player); break;
      case 'shoot': game.handleShoot(player, msg.target); break;
      case 'move': game.handleMove(player, msg.p, msg.yaw, msg.anim); break;
      case 'return_to_lobby': game.returnToLobby(player); break;
      case 'ping': player.send({ type: 'pong', t: msg.t }); break;
    }
  });

  socket.on('close', () => {
    clearTimeout(helloTimer);
    if (player) game.handleDisconnect(player);
  });

  socket.on('error', () => { /* handled by close */ });
});

/* ---------------- LAN address helper ---------------- */

function lanAddresses(): string[] {
  const out: string[] = [];
  const ifaces = os.networkInterfaces();
  for (const list of Object.values(ifaces)) {
    for (const iface of list ?? []) {
      if (iface.family === 'IPv4' && !iface.internal) out.push(iface.address);
    }
  }
  return out;
}

server.listen(PORT, '0.0.0.0', () => {
  console.log('──────────────────────────────────────────────────────');
  console.log('  🎲 LAST ROUND — multiplayer bar roulette');
  console.log('──────────────────────────────────────────────────────');
  console.log(`  Local:      http://localhost:${PORT}`);
  for (const ip of lanAddresses()) console.log(`  Network:    http://${ip}:${PORT}`);
  console.log('  Players on the same network join with that address.');
  console.log(`  Port configured via port.txt (currently ${PORT}).`);
  console.log('──────────────────────────────────────────────────────');
});

process.on('SIGINT', () => { console.log('\n[server] shutting down'); server.close(() => process.exit(0)); });
process.on('SIGTERM', () => server.close(() => process.exit(0)));

// Sanity check that the client bundle exists.
const bundle = path.join(publicDir, 'app.js');
if (!fs.existsSync(bundle)) {
  console.warn('[server] WARNING: client/public/app.js not found — run "npm run build:client" first.');
}

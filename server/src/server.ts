/**
 * server.ts — HTTP + WebSocket entry point.
 * Serves the built client from client/public and hosts any number of game
 * rooms. Port comes from port.txt (fallback 3000). The bundle is
 * self-contained (ws + express are bundled in), so it runs with plain node.
 */
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import express from 'express';
import { WebSocketServer, type WebSocket } from 'ws';
import { GameManager } from './game/gameManager.js';
import { RoomManager } from './game/roomManager.js';
import { readPort, ROOT_DIR } from './config.js';
import type { ClientMessage } from '../../shared/protocol.js';
import type { Player } from './players/player.js';

const PORT = readPort();
const rooms = new RoomManager();

/* ---------------- HTTP: static client ---------------- */

const app = express();
const publicDir = path.join(ROOT_DIR, 'client', 'public');
app.use(express.static(publicDir, { index: 'index.html' }));
app.get('/healthz', (_req, res) => res.json({ ok: true, rooms: rooms.list() }));
app.use((_req, res) => {
  // SPA fallback
  res.sendFile(path.join(publicDir, 'index.html'));
});

const server = http.createServer(app);

/* ---------------- WebSocket: game transport ---------------- */

const wss = new WebSocketServer({ server, path: '/ws' });
const HELLO_TIMEOUT = 8000;

wss.on('connection', (socket) => {
  let player: Player | null = null;
  let game: GameManager | null = null;

  const helloTimer = setTimeout(() => {
    if (!player) socket.close(4000, 'no hello');
  }, HELLO_TIMEOUT);

  socket.on('message', (raw) => {
    let msg: ClientMessage;
    try { msg = JSON.parse(String(raw)); } catch { return; }
    if (!msg || typeof msg.type !== 'string') return;

    if (msg.type === 'hello') {
      if (player) return;

      // 1) reconnecting player? route them back to their own room
      if (msg.token) {
        const room = rooms.findByToken(msg.token);
        if (room) {
          game = room;
          const joined = game.join(msg.name || 'Stranger', socket, msg.token);
          player = joined.player;
          return;
        }
      }

      // 2) explicit room creation / join
      if (msg.create) {
        const made = rooms.create();
        console.log(`[rooms] created room ${made.code}`);
        game = made.game;
      } else if (msg.room) {
        const found = rooms.get(msg.room);
        if (!found) {
          socket.send(JSON.stringify({ type: 'error', code: 'room_not_found', message: `No room with code "${String(msg.room).toUpperCase()}".` }));
          socket.close(4001, 'room_not_found');
          return;
        }
        game = found;
      } else {
        // 3) no code → the default public room
        game = rooms.defaultRoom();
      }

      const joined = game.join(msg.name || 'Stranger', socket, msg.token);
      player = joined.player;
      return;
    }

    if (!player || !game) return; // must hello first

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
    if (player && game) game.handleDisconnect(player);
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
  console.log('  Create a room in-game and share its 4-letter code.');
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

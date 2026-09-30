import type WebSocket from 'ws';

export interface PlayerPos { x: number; y: number; z: number; yaw: number; anim: number; }

/**
 * Player — server-side record. One per connected (or reconnectable) player.
 */
export class Player {
  readonly id: string;
  readonly token: string;
  name: string;
  socket: WebSocket | null = null;   // null while disconnected (grace window)
  isHost = false;
  ready = false;

  // lobby cosmetics
  colorIndex = 0;
  seat = -1;

  // match state
  inMatch = false;
  alive = true;
  spectator = false;
  left = false;
  pos: PlayerPos = { x: 0, y: 0, z: 0, yaw: 0, anim: 0 };

  // reconnection grace
  disconnectTimer: NodeJS.Timeout | null = null;
  lastSeen = Date.now();

  constructor(id: string, token: string, name: string, socket: WebSocket | null) {
    this.id = id;
    this.token = token;
    this.name = name;
    this.socket = socket;
  }

  get connected(): boolean { return this.socket !== null && this.socket.readyState === 1; }

  send(data: unknown): void {
    if (!this.connected) return;
    try { (this.socket as WebSocket).send(JSON.stringify(data)); } catch { /* socket died mid-send */ }
  }
}

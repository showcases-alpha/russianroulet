import { randomUUID } from 'node:crypto';
import type WebSocket from 'ws';
import { Player } from './player.js';
import type { GameRules } from '../../../shared/protocol.js';

/**
 * PlayerManager — owns every Player record, seat/color assignment and the
 * reconnection grace window.
 */
export class PlayerManager {
  private players = new Map<string, Player>();
  private nextColor = 0;

  create(name: string, socket: WebSocket): Player {
    const id = randomUUID().slice(0, 8);
    const token = randomUUID();
    const p = new Player(id, token, sanitizeName(name), socket);
    this.players.set(id, p);
    return p;
  }

  /** Reattach a reconnecting player to their existing record via token. */
  findByToken(token: string): Player | null {
    for (const p of this.players.values()) if (p.token === token) return p;
    return null;
  }

  get(id: string): Player | undefined { return this.players.get(id); }

  all(): Player[] { return [...this.players.values()]; }

  /** Players still meaningfully in the session. */
  active(): Player[] { return this.all().filter((p) => !p.left); }

  /** Immediately drop a record entirely. */
  remove(id: string): void {
    const p = this.players.get(id);
    if (p?.disconnectTimer) clearTimeout(p.disconnectTimer);
    this.players.delete(id);
  }

  /** Mark left; caller decides whether to keep the record around. */
  kick(id: string): void {
    const p = this.players.get(id);
    if (!p) return;
    if (p.disconnectTimer) clearTimeout(p.disconnectTimer);
    p.disconnectTimer = null;
  }

  nextColorIndex(): number { return this.nextColor++ % 12; }

  /** Assign seats to players that don't have one yet. */
  assignSeats(count: number, rules: GameRules): void {
    const seatless = this.active().filter((p) => p.seat < 0);
    let seat = 0;
    const taken = new Set(this.active().map((p) => p.seat).filter((s) => s >= 0));
    for (const p of seatless) {
      while (taken.has(seat)) seat++;
      p.seat = seat;
      taken.add(seat);
    }
    void count; void rules;
  }

  resetForLobby(): void {
    for (const p of this.all()) {
      p.ready = false;
      p.inMatch = false;
      p.alive = true;
      p.spectator = false;
      p.seat = -1;
    }
  }
}

export function sanitizeName(raw: string): string {
  const s = (raw ?? '').toString().replace(/[^\p{L}\p{N} _.\-!?]/gu, '').trim().slice(0, 16);
  return s.length ? s : 'Stranger';
}

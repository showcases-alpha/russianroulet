/**
 * roomManager.ts — multiple isolated game rooms on one server.
 * Each room is a full GameManager (own lobby, match, revolver, rules).
 * Players join with a short shareable code; connections without a code land
 * in the default public room.
 */
import { GameManager } from './gameManager.js';

/** Unambiguous alphabet — no 0/O/1/I so codes are easy to read out loud. */
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const DEFAULT_ROOM = 'PUB';
const EMPTY_ROOM_TTL_MS = 5 * 60_000;

export class RoomManager {
  private rooms = new Map<string, GameManager>();
  private cleaner: NodeJS.Timeout;

  constructor() {
    this.cleaner = setInterval(() => this.cleanup(), 30_000);
    this.cleaner.unref?.();
  }

  /** Create a fresh room with a unique 4-char code. */
  create(): { game: GameManager; code: string } {
    let code = '';
    do {
      code = '';
      for (let i = 0; i < 4; i++) code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
    } while (this.rooms.has(code));
    const game = new GameManager(code);
    this.rooms.set(code, game);
    return { game, code };
  }

  get(code: string): GameManager | undefined {
    return this.rooms.get((code ?? '').trim().toUpperCase());
  }

  /** The default room everyone lands in when they don't enter a code. */
  defaultRoom(): GameManager {
    let game = this.rooms.get(DEFAULT_ROOM);
    if (!game) {
      game = new GameManager(DEFAULT_ROOM);
      this.rooms.set(DEFAULT_ROOM, game);
    }
    return game;
  }

  /** Find the room a reconnect token belongs to. */
  findByToken(token: string): GameManager | null {
    for (const game of this.rooms.values()) {
      const p = game.players.findByToken(token);
      if (p && !p.left) return game;
    }
    return null;
  }

  list(): { code: string; players: number; phase: string }[] {
    return [...this.rooms.entries()].map(([code, g]) => ({
      code, players: g.players.active().filter((p) => p.connected).length, phase: g.phase,
    }));
  }

  /** Drop rooms that have been empty for a while (never the default room). */
  private cleanup(): void {
    const now = Date.now();
    for (const [code, game] of this.rooms) {
      if (code === DEFAULT_ROOM) continue;
      const connected = game.players.active().filter((p) => p.connected).length;
      if (connected === 0) {
        if (!game.emptySince) game.emptySince = now;
        else if (now - game.emptySince > EMPTY_ROOM_TTL_MS) {
          console.log(`[rooms] closing empty room ${code}`);
          game.dispose();
          this.rooms.delete(code);
        }
      } else {
        game.emptySince = 0;
      }
    }
  }
}

import type { MatchPlayerInfo } from '../../../shared/protocol.js';

/**
 * TurnManager — authoritative turn order over seated players.
 */
export class TurnManager {
  private order: string[] = [];
  private index = 0;
  private turnNumber = 0;

  /** Build a fresh order from the match roster (alive players only). */
  reset(players: MatchPlayerInfo[], mode: 'seat' | 'random'): void {
    const alive = players.filter((p) => p.alive && !p.spectator);
    this.order = alive.map((p) => p.id);
    if (mode === 'seat') this.order.sort((a, b) => seatOf(players, a) - seatOf(players, b));
    else for (let i = this.order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.order[i], this.order[j]] = [this.order[j], this.order[i]];
    }
    this.index = 0;
    this.turnNumber = 0;
  }

  current(): string | null {
    return this.order[this.index] ?? null;
  }

  get turnCount(): number { return this.turnNumber; }

  /**
   * Advance to the next living player.
   * @param repeat if true, the current player keeps the turn (used by 'extra' rules).
   */
  advance(aliveIds: Set<string>, repeat = false): string | null {
    this.turnNumber++;
    if (repeat && this.order[this.index] && aliveIds.has(this.order[this.index])) {
      return this.order[this.index];
    }
    // walk forward until we find someone alive (or loop out)
    for (let step = 1; step <= this.order.length + 1; step++) {
      const candidate = this.order[(this.index + step) % this.order.length];
      if (candidate && aliveIds.has(candidate)) {
        this.index = (this.index + step) % this.order.length;
        return candidate;
      }
    }
    return null;
  }

  /** Re-anchor after a player left/died out of band; keep relative order. */
  currentValid(aliveIds: Set<string>): boolean {
    const cur = this.current();
    return !!cur && aliveIds.has(cur);
  }
}

function seatOf(players: MatchPlayerInfo[], id: string): number {
  return players.find((p) => p.id === id)?.seat ?? 0;
}

import { RevolverState, type Chamber } from './revolver.js';
import { TurnManager } from './turnManager.js';
import { PlayerManager } from '../players/playerManager.js';
import type { Player } from '../players/player.js';
import {
  DEFAULT_RULES, sanitizeRules,
  type GameRules, type LobbyPlayerInfo, type MatchPlayerInfo, type ServerMessage,
} from '../../../shared/protocol.js';

type Phase = 'LOBBY' | 'PLAYING' | 'ENDING';

const RECONNECT_GRACE_MS = 30_000;

/**
 * GameManager — the authoritative source of truth for the entire session:
 * lobby, match flow, revolver state, turn order, elimination and pacing.
 * Clients only ever *request* actions; the server decides everything.
 */
export class GameManager {
  phase: Phase = 'LOBBY';
  rules: GameRules = { ...DEFAULT_RULES };
  /** Room code this instance is hosted under ('PUB' = the default public room). */
  readonly code: string;
  /** Timestamp when the room last became empty (used by the RoomManager). */
  emptySince = 0;

  readonly players = new PlayerManager();
  private revolver: RevolverState;
  private turns = new TurnManager();

  private timers: NodeJS.Timeout[] = [];
  private tickTimer: NodeJS.Timeout | null = null;

  private locked = false;        // a shot is being resolved; block actions
  private lockMovement = false;  // cinematic playing; freeze walking
  private turnDeadlineTimer: NodeJS.Timeout | null = null;
  private currentTurnPlayer: string | null = null;
  private turnNumber = 0;

  constructor(code = 'PUB') {
    this.code = code;
    this.revolver = new RevolverState(this.rules.chamberCount, this.rules.liveCount);
  }

  /** Tear the room down (timers, tick) when the RoomManager removes it. */
  dispose(): void {
    this.clearTimers();
    this.stopTick();
  }

  /* ------------------------------------------------------------------ */
  /* helpers                                                             */
  /* ------------------------------------------------------------------ */

  private schedule(fn: () => void, ms: number): void {
    const t = setTimeout(() => {
      this.timers = this.timers.filter((x) => x !== t);
      fn();
    }, ms);
    this.timers.push(t);
  }

  private clearTimers(): void {
    for (const t of this.timers) clearTimeout(t);
    this.timers = [];
    if (this.turnDeadlineTimer) { clearTimeout(this.turnDeadlineTimer); this.turnDeadlineTimer = null; }
  }

  private broadcast(msg: ServerMessage, predicate?: (p: Player) => boolean): void {
    for (const p of this.players.all()) {
      if (p.connected && (!predicate || predicate(p))) p.send(msg);
    }
  }

  get hostId(): string | null {
    const host = this.players.active().find((p) => p.isHost && p.connected);
    if (host) return host.id;
    const next = this.players.active().find((p) => p.connected);
    if (next) { next.isHost = true; return next.id; }
    return null;
  }

  /* ------------------------------------------------------------------ */
  /* lobby                                                               */
  /* ------------------------------------------------------------------ */

  join(name: string, socket: import('ws').default, token?: string): { player: Player; reconnected: boolean } {
    // Reconnection: token matches an existing record.
    if (token) {
      const existing = this.players.findByToken(token);
      if (existing && !existing.left) {
        if (existing.disconnectTimer) { clearTimeout(existing.disconnectTimer); existing.disconnectTimer = null; }
        existing.socket = socket;
        existing.name = name || existing.name;
        this.sendWelcome(existing, true);
        this.syncFullStateTo(existing);
        this.broadcastLobby();
        return { player: existing, reconnected: true };
      }
    }
    const player = this.players.create(name, socket);
    player.colorIndex = this.players.nextColorIndex();
    if (this.players.active().filter((p) => p.connected).length === 0) player.isHost = true;
    if (this.phase === 'PLAYING' || this.phase === 'ENDING') {
      // Late joiner becomes a spectator of the ongoing match.
      player.inMatch = true;
      player.spectator = true;
      player.alive = false;
    }
    this.sendWelcome(player, false);
    if (this.phase === 'LOBBY') this.broadcastLobby();
    else this.syncFullStateTo(player);
    return { player, reconnected: false };
  }

  private sendWelcome(p: Player, reconnected: boolean): void {
    p.send({
      type: 'welcome', playerId: p.id, token: p.token, roomCode: this.code, phase: this.phase,
      rules: this.rules, serverTime: Date.now(),
    });
    if (reconnected) {
      if (p.spectator && this.phase === 'PLAYING') p.send({ type: 'spectator_start', playerId: p.id });
    } else if (this.phase === 'PLAYING' || this.phase === 'ENDING') {
      p.send({ type: 'spectator_start', playerId: p.id });
    }
  }

  /** Full state snapshot for (re)joiners mid-match. */
  private syncFullStateTo(p: Player): void {
    if (this.phase === 'PLAYING' || this.phase === 'ENDING') {
      const roster = this.matchRoster();
      p.send({
        type: 'game_start', players: roster, rules: this.rules,
        tablePos: [0, 0, 0], turnPlayerId: this.currentTurnPlayer,
        joining: !p.inMatch || !roster.find((r) => r.id === p.id)?.alive ? true : roster.find((r) => r.id === p.id) === undefined,
      });
    } else {
      this.broadcastLobby();
    }
  }

  setReady(p: Player, ready: boolean): void {
    if (this.phase !== 'LOBBY') return;
    p.ready = !!ready;
    this.broadcastLobby();
  }

  updateSettings(p: Player, partial: Partial<GameRules>): void {
    if (this.phase !== 'LOBBY' || !p.isHost) return;
    const clean = sanitizeRules(partial);
    this.rules = { ...this.rules, ...clean };
    if (this.rules.liveCount >= this.rules.chamberCount) this.rules.liveCount = this.rules.chamberCount - 1;
    this.broadcast({ type: 'settings_applied', rules: this.rules });
    this.broadcastLobby();
  }

  startGame(p: Player): void {
    if (this.phase !== 'LOBBY') return this.reject(p, 'start', 'Match already in progress');
    if (!p.isHost) return this.reject(p, 'start', 'Only the host can start the match');
    const connected = this.players.active().filter((x) => x.connected);
    if (connected.length < this.rules.minPlayers) return this.reject(p, 'start', `Need at least ${this.rules.minPlayers} players`);
    if (!connected.every((x) => x.ready)) return this.reject(p, 'start', 'All players must be ready');

    this.phase = 'PLAYING';
    this.locked = false;
    this.lockMovement = false;
    this.revolver = new RevolverState(this.rules.chamberCount, this.rules.liveCount);

    // Seat everyone who is participating.
    const roster = this.players.active().filter((x) => x.connected);
    roster.forEach((x, i) => { x.seat = i; x.inMatch = true; x.alive = true; x.spectator = false; x.left = false; });
    // Spectators who joined during a previous match but are connected can opt in next round only.
    for (const x of this.players.active()) {
      if (!roster.includes(x)) { x.inMatch = false; x.spectator = true; x.alive = false; }
    }

    const infos = this.matchRoster();
    this.broadcast({ type: 'game_start', players: infos, rules: this.rules, tablePos: [0, 0, 0], turnPlayerId: null, joining: false });
    this.turns.reset(infos, this.rules.turnOrder);
    this.startTurnDelay(1600);
    this.startTick();
  }

  private reject(p: Player, code: string, message: string): void {
    p.send({ type: 'error', code, message });
  }

  /* ------------------------------------------------------------------ */
  /* turn flow                                                           */
  /* ------------------------------------------------------------------ */

  private matchRoster(): MatchPlayerInfo[] {
    return this.players.active().map((p) => ({
      id: p.id, name: p.name, colorIndex: p.colorIndex, seat: p.seat,
      pos: [p.pos.x, p.pos.y, p.pos.z] as [number, number, number],
      yaw: p.pos.yaw, alive: p.alive, spectator: p.spectator, left: p.left,
    }));
  }

  private aliveIds(): Set<string> {
    return new Set(this.players.active().filter((p) => p.inMatch && p.alive && !p.spectator).map((p) => p.id));
  }

  private startTurnDelay(ms: number): void {
    this.schedule(() => this.beginTurn(), ms);
  }

  private beginTurn(): void {
    if (this.phase !== 'PLAYING') return;
    const alive = this.aliveIds();
    if (alive.size <= 1) return this.endMatch([...alive][0] ?? null);

    let pid = this.turns.current();
    if (!pid || !alive.has(pid)) {
      this.turns.reset(this.matchRoster(), this.rules.turnOrder);
      pid = this.turns.current();
      if (!pid || !alive.has(pid)) return this.endMatch([...alive][0] ?? null);
    }
    this.currentTurnPlayer = pid;
    this.turnNumber++;
    this.locked = false;
    this.lockMovement = false;

    this.broadcast({ type: 'turn_start', playerId: pid, deadline: this.rules.turnTimeoutSec, turnNumber: this.turnNumber });

    // Timeout enforcement — the server acts for AFK players.
    if (this.turnDeadlineTimer) clearTimeout(this.turnDeadlineTimer);
    this.turnDeadlineTimer = setTimeout(() => {
      if (this.currentTurnPlayer !== pid || this.locked || this.phase !== 'PLAYING') return;
      const player = this.players.get(pid);
      if (!player || !player.alive) return;
      if (this.rules.timeoutAction === 'shoot_self') {
        console.log(`[game] ${player.name} timed out — auto self-shot`);
        this.handleShoot(player, 'self');
      } else {
        console.log(`[game] ${player.name} timed out — turn skipped`);
        this.turns.advance(this.aliveIds(), false);
        this.beginTurn();
      }
    }, this.rules.turnTimeoutSec * 1000);
  }

  /* ------------------------------------------------------------------ */
  /* shooting — the authoritative resolution                             */
  /* ------------------------------------------------------------------ */

  handleShoot(p: Player, target: string | 'self'): void {
    if (this.phase !== 'PLAYING') return this.reject(p, 'shoot', 'No match in progress');
    if (this.locked) return this.reject(p, 'shoot', 'A shot is already being resolved');
    if (p.id !== this.currentTurnPlayer) return this.reject(p, 'shoot', 'It is not your turn');
    if (!p.alive || p.spectator) return this.reject(p, 'shoot', 'You are eliminated');

    const self = target === 'self' || target === p.id;
    let targetPlayer: Player | null = null;
    if (!self) {
      targetPlayer = this.players.get(target) ?? null;
      if (!targetPlayer || !targetPlayer.inMatch || !targetPlayer.alive || targetPlayer.spectator || targetPlayer.left) {
        return this.reject(p, 'shoot', 'Invalid target');
      }
    }

    // Lock everything down; the outcome is decided NOW but revealed after the dramatic pause.
    this.locked = true;
    this.lockMovement = true;
    if (this.turnDeadlineTimer) { clearTimeout(this.turnDeadlineTimer); this.turnDeadlineTimer = null; }

    const targetId = self ? p.id : (targetPlayer as Player).id;
    this.broadcast({ type: 'turn_action', shooterId: p.id, targetId, self });

    const outcome = this.revolver.fire();
    const result: Chamber = outcome.result;

    this.schedule(() => {
      // Reveal + apply authoritative effects.
      let eliminatedId: string | null = null;
      if (result === 'LIVE') {
        eliminatedId = targetId;
        const victim = this.players.get(targetId);
        if (victim) {
          victim.alive = false;
          victim.spectator = true;
        }
      }

      const alive = this.aliveIds();
      const matchOver = alive.size <= 1;
      const needReload =
        !matchOver &&
        ((this.rules.reloadOnLive && result === 'LIVE') ||
         (this.rules.reloadWhenExhausted && this.revolver.exhausted));

      // Who goes next?
      let nextPlayerId: string | null = null;
      if (!matchOver) {
        const repeat = result === 'EMPTY' && ((self && this.rules.emptySelfShot === 'extra') || (!self && this.rules.emptyTargetShot === 'extra'));
        nextPlayerId = this.turns.advance(alive, repeat);
        if (!nextPlayerId) nextPlayerId = [...alive][0] ?? null;
      }

      this.broadcast({
        type: 'shot_result',
        shooterId: p.id, targetId, self, result,
        chamberIndex: outcome.chamberIndex,
        chambersRemaining: this.revolver.chambersRemaining,
        eliminatedId, reload: needReload, nextPlayerId,
      });

      if (eliminatedId) {
        const victim = this.players.get(eliminatedId);
        if (victim?.connected && victim.id !== p.id) {
          // victim gets their own spectator_start after the impact cinematic
          this.schedule(() => {
            if (victim.connected) victim.send({ type: 'spectator_start', playerId: victim.id });
          }, result === 'LIVE' ? this.rules.liveOutcomeMs - 1200 : 0);
        } else if (victim?.connected) {
          // self-shot: shooter learns they're a spectator as they collapse
          this.schedule(() => {
            if (victim.connected) victim.send({ type: 'spectator_start', playerId: victim.id });
          }, Math.max(600, this.rules.liveOutcomeMs - 2200));
        }
      }

      const outcomeMs = result === 'LIVE' ? this.rules.liveOutcomeMs : this.rules.emptyOutcomeMs;

      if (matchOver) {
        this.schedule(() => this.endMatch([...this.aliveIds()][0] ?? null), outcomeMs + 800);
        return;
      }

      if (needReload) {
        this.schedule(() => {
          const cosmeticOffset = Math.floor(Math.random() * 64) * 7;
          this.broadcast({ type: 'reload_start', firstChamberOffset: cosmeticOffset });
          this.revolver.reload();
        }, outcomeMs);
        this.schedule(() => {
          this.lockMovement = false;
          this.beginTurn();
        }, outcomeMs + this.rules.reloadMs);
      } else {
        this.schedule(() => {
          this.lockMovement = false;
          this.beginTurn();
        }, outcomeMs + 600);
      }
    }, this.rules.preShotMs);
  }

  private endMatch(winnerId: string | null): void {
    if (this.phase === 'ENDING') return;
    this.phase = 'ENDING';
    this.locked = false;
    this.lockMovement = false;
    this.clearTimers();
    this.stopTick();
    const winner = winnerId ? this.players.get(winnerId) : null;
    console.log(`[game] match over — winner: ${winner ? winner.name : 'nobody'}`);
    this.broadcast({ type: 'match_end', winnerId, players: this.matchRoster() });
  }

  returnToLobby(p: Player): void {
    if (!p.isHost) return this.reject(p, 'lobby', 'Only the host can return to the lobby');
    this.clearTimers();
    this.stopTick();
    this.phase = 'LOBBY';
    this.locked = false;
    this.lockMovement = false;
    this.currentTurnPlayer = null;
    this.players.resetForLobby();
    this.broadcast({ type: 'back_to_lobby' });
    this.broadcastLobby();
  }

  /* ------------------------------------------------------------------ */
  /* movement relay + connectivity                                       */
  /* ------------------------------------------------------------------ */

  handleMove(p: Player, pos: [number, number, number], yaw: number, anim: number): void {
    if (this.phase !== 'PLAYING' || this.lockMovement) return;
    if (!p.inMatch || !p.alive) return;
    // Clamp to a sane arena so hacked clients can't teleport characters away.
    const clamp = (v: number) => Math.max(-14, Math.min(14, Number.isFinite(v) ? v : 0));
    p.pos.x = clamp(pos[0]); p.pos.y = Math.max(0, Math.min(3, pos[1] ?? 0)); p.pos.z = clamp(pos[2]);
    p.pos.yaw = Number.isFinite(yaw) ? yaw : 0;
    p.pos.anim = anim | 0;
    p.lastSeen = Date.now();
  }

  private startTick(): void {
    this.stopTick();
    const interval = Math.max(20, Math.round(1000 / this.rules.tickRate));
    this.tickTimer = setInterval(() => {
      if (this.phase !== 'PLAYING') return;
      const entries: [string, number, number, number, number, number][] = [];
      for (const p of this.players.active()) {
        if (p.inMatch && p.connected && !p.spectator) {
          entries.push([p.id, +p.pos.x.toFixed(2), +p.pos.y.toFixed(2), +p.pos.z.toFixed(2), +p.pos.yaw.toFixed(2), p.pos.anim]);
        }
      }
      if (entries.length) this.broadcast({ type: 'states', s: entries });
    }, interval);
  }

  private stopTick(): void {
    if (this.tickTimer) { clearInterval(this.tickTimer); this.tickTimer = null; }
  }

  handleDisconnect(p: Player): void {
    p.socket = null;
    const wasHost = p.isHost;
    // If lobby: remove after short grace. If match: keep record for reconnect.
    if (this.phase === 'LOBBY') {
      p.disconnectTimer = setTimeout(() => {
        p.left = true;
        this.players.remove(p.id);
        this.broadcastLobby();
      }, 10_000);
      this.broadcastLobby();
      return;
    }
    // Match phase — grant a reconnect window.
    p.disconnectTimer = setTimeout(() => {
      p.left = true;
      this.onPlayerGone(p, wasHost);
    }, RECONNECT_GRACE_MS);
    console.log(`[game] ${p.name} disconnected (grace ${RECONNECT_GRACE_MS / 1000}s)`);
  }

  private onPlayerGone(p: Player, wasHost: boolean): void {
    const eliminated = this.phase === 'PLAYING' && p.inMatch && p.alive && !p.spectator;
    if (eliminated) { p.alive = false; p.spectator = true; }

    // Host migration
    let newHostId = this.hostId;
    if (wasHost || !newHostId) newHostId = this.hostId;
    if (p.isHost) p.isHost = false;

    this.broadcast({
      type: 'player_left', id: p.id, name: p.name,
      newHostId: newHostId ?? '', eliminated,
    });

    if (this.phase === 'PLAYING') {
      const alive = this.aliveIds();
      if (alive.size <= 1) {
        this.endMatch([...alive][0] ?? null);
      } else if (this.currentTurnPlayer === p.id && !this.locked) {
        // Their turn is skipped.
        this.turns.advance(alive, false);
        this.beginTurn();
      }
    } else if (this.phase === 'ENDING') {
      // stay on end screen; lobby return is a host action
    }
    this.players.remove(p.id);
  }

  /* ------------------------------------------------------------------ */
  /* lobby broadcast                                                     */
  /* ------------------------------------------------------------------ */

  broadcastLobby(): void {
    if (this.phase !== 'LOBBY') return;
    const hostId = this.hostId;
    const players: LobbyPlayerInfo[] = this.players.active().map((p) => ({
      id: p.id, name: p.name, ready: p.ready, isHost: p.id === hostId,
      connected: p.connected, seat: p.seat, colorIndex: p.colorIndex,
    }));
    const connected = players.filter((x) => x.connected);
    const canStart = connected.length >= this.rules.minPlayers && connected.every((x) => x.ready);
    this.broadcast({ type: 'lobby_state', players, hostId: hostId ?? '', rules: this.rules, canStart });
  }
}

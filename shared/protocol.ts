/**
 * shared/protocol.ts
 * Message contract between the authoritative game server and browser clients.
 * Imported by both server and client bundles.
 */

export const PROTOCOL_VERSION = 1;

/** Gameplay rules. Fully server-authoritative; host can change in lobby. */
export interface GameRules {
  chamberCount: number;        // revolver cylinder size (default 6)
  liveCount: number;           // live chambers per reload (default 1)
  reloadOnLive: boolean;       // reload cinematic as soon as a live round fires
  reloadWhenExhausted: boolean;// reload when all chambers consumed
  turnOrder: 'seat' | 'random';
  /** What happens to the shooter's turn after an EMPTY self shot: 'next' passes the gun, 'extra' lets them go again */
  emptySelfShot: 'next' | 'extra';
  /** What happens after an EMPTY shot at another player */
  emptyTargetShot: 'next' | 'extra';
  turnTimeoutSec: number;      // seconds a player has to act
  timeoutAction: 'shoot_self' | 'skip';
  minPlayers: number;
  maxPlayers: number;
  tickRate: number;            // server state relay Hz

  /* --- pacing (ms). Server schedules state transitions with these; clients
         run their own cinematic timelines against the same numbers. --- */
  preShotMs: number;           // aim/cock dramatic pause before result reveal
  emptyOutcomeMs: number;      // click + reaction cinematic length
  liveOutcomeMs: number;       // fire + bullet cam + impact cinematic length
  reloadMs: number;            // reload cinematic length
  cleanupDelayMs: number;      // how long ragdolls stay before fading
}

export const DEFAULT_RULES: GameRules = {
  chamberCount: 6,
  liveCount: 1,
  reloadOnLive: true,
  reloadWhenExhausted: true,
  turnOrder: 'seat',
  emptySelfShot: 'next',
  emptyTargetShot: 'next',
  turnTimeoutSec: 45,
  timeoutAction: 'shoot_self',
  minPlayers: 2,
  maxPlayers: 8,
  tickRate: 20,
  preShotMs: 2800,
  emptyOutcomeMs: 3400,
  liveOutcomeMs: 7200,
  reloadMs: 9200,
  cleanupDelayMs: 9000,
};

export type Phase = 'LOBBY' | 'PLAYING' | 'ENDING';

export interface LobbyPlayerInfo {
  id: string;
  name: string;
  ready: boolean;
  isHost: boolean;
  connected: boolean;
  seat: number;         // -1 until seated
  colorIndex: number;   // cosmetic palette index
}

export interface MatchPlayerInfo {
  id: string;
  name: string;
  colorIndex: number;
  seat: number;
  pos: [number, number, number];
  yaw: number;
  alive: boolean;
  spectator: boolean;   // eliminated OR joined mid-match
  left: boolean;
}

/* ------------------------------------------------------------------ */
/* Client -> Server                                                    */
/* ------------------------------------------------------------------ */

export interface ShootPayload { target: string | 'self'; }

export type ClientMessage =
  | { type: 'hello'; name: string; token?: string; room?: string; create?: boolean; quality?: string }
  | { type: 'set_ready'; ready: boolean }
  | { type: 'update_settings'; rules: Partial<GameRules> }
  | { type: 'start_game' }
  | { type: 'shoot'; target: string | 'self' }
  | { type: 'move'; p: [number, number, number]; yaw: number; anim: number }
  | { type: 'return_to_lobby' }
  | { type: 'ping'; t: number };

/* ------------------------------------------------------------------ */
/* Server -> Client                                                    */
/* ------------------------------------------------------------------ */

export type ServerMessage =
  | { type: 'welcome'; playerId: string; token: string; roomCode: string; phase: Phase; rules: GameRules; serverTime: number }
  | { type: 'lobby_state'; players: LobbyPlayerInfo[]; hostId: string; rules: GameRules; canStart: boolean }
  | { type: 'settings_applied'; rules: GameRules }
  | {
      type: 'game_start'; players: MatchPlayerInfo[]; rules: GameRules;
      tablePos: [number, number, number];
      turnPlayerId: string | null;   // current turn holder if joining mid-match
      joining: boolean;              // true when this snapshot is for a late/spectator joiner
    }
  | { type: 'turn_start'; playerId: string; deadline: number; turnNumber: number }
  | { type: 'turn_action'; shooterId: string; targetId: string; self: boolean } // aim begins (result still hidden)
  | {
      type: 'shot_result';                    // authoritative outcome
      shooterId: string; targetId: string; self: boolean;
      result: 'LIVE' | 'EMPTY';
      chamberIndex: number;                   // which chamber was consumed (revealed after the fact)
      chambersRemaining: number;              // how many unfired chambers are left
      eliminatedId: string | null;
      reload: boolean;                        // reload cinematic will follow
      nextPlayerId: string | null;            // next turn (null => match ending)
    }
  | { type: 'reload_start'; firstChamberOffset: number } // purely cosmetic spin offset
  | { type: 'states'; s: [string, number, number, number, number, number][] } // id,x,y,z,yaw,anim
  | { type: 'player_left'; id: string; name: string; newHostId: string; eliminated: boolean }
  | { type: 'spectator_start'; playerId: string }
  | { type: 'match_end'; winnerId: string | null; players: MatchPlayerInfo[] }
  | { type: 'back_to_lobby' }
  | { type: 'pong'; t: number }
  | { type: 'error'; code: string; message: string };

export function sanitizeRules(partial: Partial<GameRules> | undefined): Partial<GameRules> {
  if (!partial) return {};
  const out: Partial<GameRules> = {};
  const num = (v: unknown, min: number, max: number) =>
    typeof v === 'number' && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : undefined;
  if (partial.chamberCount !== undefined) { const v = num(partial.chamberCount, 2, 12); if (v) out.chamberCount = v; }
  if (partial.liveCount !== undefined) { const v = num(partial.liveCount, 1, 11); if (v) out.liveCount = v; }
  if (partial.reloadOnLive !== undefined) out.reloadOnLive = !!partial.reloadOnLive;
  if (partial.reloadWhenExhausted !== undefined) out.reloadWhenExhausted = !!partial.reloadWhenExhausted;
  if (partial.turnOrder === 'seat' || partial.turnOrder === 'random') out.turnOrder = partial.turnOrder;
  if (partial.emptySelfShot === 'next' || partial.emptySelfShot === 'extra') out.emptySelfShot = partial.emptySelfShot;
  if (partial.emptyTargetShot === 'next' || partial.emptyTargetShot === 'extra') out.emptyTargetShot = partial.emptyTargetShot;
  if (partial.turnTimeoutSec !== undefined) { const v = num(partial.turnTimeoutSec, 10, 180); if (v) out.turnTimeoutSec = v; }
  if (partial.timeoutAction === 'shoot_self' || partial.timeoutAction === 'skip') out.timeoutAction = partial.timeoutAction;
  if (partial.tickRate !== undefined) { const v = num(partial.tickRate, 5, 60); if (v) out.tickRate = v; }
  // pacing (ms) — host can shorten/lengthen cinematics, within sane bounds
  if (partial.preShotMs !== undefined) { const v = num(partial.preShotMs, 600, 10000); if (v) out.preShotMs = v; }
  if (partial.emptyOutcomeMs !== undefined) { const v = num(partial.emptyOutcomeMs, 600, 15000); if (v) out.emptyOutcomeMs = v; }
  if (partial.liveOutcomeMs !== undefined) { const v = num(partial.liveOutcomeMs, 1500, 20000); if (v) out.liveOutcomeMs = v; }
  if (partial.reloadMs !== undefined) { const v = num(partial.reloadMs, 1500, 20000); if (v) out.reloadMs = v; }
  if (partial.cleanupDelayMs !== undefined) { const v = num(partial.cleanupDelayMs, 1000, 60000); if (v) out.cleanupDelayMs = v; }
  return out;
}

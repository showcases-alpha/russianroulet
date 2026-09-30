/**
 * Server configuration: port (port.txt) and gameplay rules (rules.json overrides).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_RULES, sanitizeRules, type GameRules } from '../../shared/protocol.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// works both for server/src/config.ts and the bundled server/dist/server.js
// (both sit two levels below the project root)
export const ROOT_DIR = path.resolve(__dirname, '..', '..');

export function readPort(): number {
  // Explicit env override wins (handy for CI/tests)...
  if (process.env.PORT) {
    const envPort = parseInt(process.env.PORT, 10);
    if (Number.isInteger(envPort) && envPort > 0 && envPort < 65536) return envPort;
  }
  try {
    const raw = fs.readFileSync(path.join(ROOT_DIR, 'port.txt'), 'utf8').trim();
    const port = parseInt(raw, 10);
    if (Number.isInteger(port) && port > 0 && port < 65536) return port;
    console.warn(`[config] port.txt contains "${raw}" — invalid, falling back to 3000`);
  } catch {
    console.warn('[config] port.txt not found — using default port 3000');
  }
  return 3000;
}

export function readRules(): GameRules {
  let rules: GameRules = { ...DEFAULT_RULES };
  try {
    const raw = fs.readFileSync(path.join(ROOT_DIR, 'rules.json'), 'utf8');
    const parsed = JSON.parse(raw);
    rules = { ...rules, ...sanitizeRules(parsed) };
    console.log('[config] rules.json overrides applied');
  } catch {
    // No rules.json — defaults are fine.
  }
  // Sanity: liveCount must fit in the cylinder.
  if (rules.liveCount >= rules.chamberCount) rules.liveCount = rules.chamberCount - 1;
  return rules;
}

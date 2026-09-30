# 🎲 LAST ROUND — Multiplayer Bar Roulette

A **multiplayer, server-authoritative cinematic roulette party game** that runs in a
modern browser. You and your friends meet in a dark, hyper-realistic 3D bar, walk
around, sit down for a round with a detailed six-chamber revolver — and take turns
pulling the trigger. Empty chambers build suspense with clicks and camera work;
**live rounds trigger a full cinematic sequence** — muzzle flash, slow motion, a
camera that chases the spinning bullet across the room, impact, ragdoll physics and
a dramatic reload.

- **Server-authoritative**: the cylinder, turn order, hit results and eliminations
  live *only* on the server. Modified clients can't cheat.
- **Cinematic presentation**: real-time bullet-follow camera, slow motion, depth of
  field, bloom, film grain, chromatic aberration, letterboxing, volumetric light,
  filmic tone mapping (ACES) and a reload cinematic — all rendered in the actual 3D
  scene (no videos, no fake overlays).
- **Contrast by design**: a hyper-realistic bar and a hyper-detailed revolver, but
  deliberately simple, blocky ragdoll characters.
- **Zero binary assets**: every texture, model and sound is generated procedurally
  at load time. Only code ships.

---

## Quick start

**Easiest (no install, no build):** the repo ships prebuilt, self-contained
files — the server bundles all of its dependencies, so plain Node.js is enough:

```bash
node server/dist/server.js
```

**Full workflow** (use this if you changed any code in `client/src` or `server/src`):

```bash
npm install
npm start
```

`npm start` rebuilds the client + server and starts listening. The port is read from
**`port.txt`** in the project root (default `3000` if missing). The console prints
every LAN address the server is reachable on, e.g.:

```text
Local:      http://localhost:3000
Network:    http://192.168.1.50:3000
```

Friends on the same network open `http://YOUR_SERVER_IP:3000` in Chrome, Edge or
Firefox, type a name, press **ENTER THE BAR** — and they're in the bar with you.

### Playing over a LAN

1. Find the host machine's LAN IP (`ip a` / `ipconfig`, or read the server banner).
2. Make sure the port (from `port.txt`) is open in the host's firewall.
3. Everyone browses to `http://SERVER_IP:PORT`.

> Any HTTP host/reverse proxy works too — the game only needs WebSockets on
> `/ws` alongside the static files. (Use `wss://` when serving over HTTPS.)

### Changing the port

Edit `port.txt` (a single number) and restart. `PORT=4000 npm run serve` also works
as an environment override.

---

## How to play

| Input | Action |
| --- | --- |
| `W A S D` | Walk around the bar |
| Mouse | Look (click the scene once to capture the pointer) |
| `Shift` | Run |
| **Click a player** (on your turn) | Point the revolver at them and fire |
| `F` (on your turn) | Point the revolver at yourself and fire |
| `Q` / `E` | Spectator: cycle between surviving players |
| `V` | Spectator: toggle free camera (`W A S D`, `Space`/`Ctrl` up/down) |
| `Esc` | Release the mouse pointer |

**Loop:** join → lobby (walk around while you wait) → everyone readies → host starts
→ players take turns firing at themselves or others → empty chambers *click* and
pass the gun → a live round eliminates its target with the full cinematic → after a
live round the revolver is reloaded on camera → last player standing wins → the
host can bring everyone back to the lobby for a rematch.

Eliminated players become **spectators** (follow cam / free cam) and cannot
influence the match. Turn timers (default 45 s) auto-fire at the distracted player
so a match never stalls.

---

## Match settings (host, in lobby)

- **Live chambers** — how many live rounds per reload (1–3).
- **Cylinder size** — chambers per reload (4–8; the visual model shows six).
- **Turn order** — around the table or randomized.
- **After an empty self-shot** — pass the gun, or shoot again.
- **Turn timer** — 15–120 s.

Server-side overrides live in **`rules.json`** (see `rules.json.example`): chamber
count, live count, reload rules, turn rules, timeouts, tick rate and the pacing of
every cinematic beat. Delete the file to return to defaults. The host's lobby
settings apply for that match only; `rules.json` changes the *defaults*.

---

## Graphics quality

Choose **Low / Medium / High / Ultra** on the entry screen or in ⚙ Settings
(remembered per browser). Ultra adds GTAO ambient occlusion, always-on depth of
field and a real-time planar mirror behind the bar; High adds bloom + cinematic DOF
+ a shadow-casting window light; everything scales down gracefully to Low (no
shadows/bloom, reduced resolution). An FPS watchdog auto-steps quality down if the
frame rate drops — disable it in Settings if you want a fixed preset. No RTX GPU is
required; "RTX-style" effects here are real-time screen techniques that run on
ordinary GPUs.

---

## Architecture

```text
Browser client (Three.js + cannon-es, bundled by esbuild)
   │  WebSocket (JSON messages) on /ws
   ▼
Node server (TypeScript, `ws` + express)  — reads port.txt
   ├── Game State / phases (lobby → playing → ending)
   ├── Turn Manager (order, timeouts, auto-fire)
   ├── Revolver State (authoritative cylinder, LIVE/EMPTY hidden until fired)
   ├── Player Manager (join/leave/reconnect, seats, roster)
   └── State relay (positions @ tickRate, interpolation on clients)
```

**The server decides everything gameplay-relevant.** Clients only *request*
actions (`shoot target`) and receive outcomes (`shot_result`), so the chamber
contents cannot be read from client code before the shot. Cinematics are pure
client-side presentation driven by the server's paced messages:

```text
turn_action (aim begins)  →  [dramatic pause]  →  shot_result (LIVE/EMPTY)
   → outcome cinematic    →  (reload_start)     →  turn_start / match_end
```

### Project layout

```text
├── client/
│   ├── index.html            UI shell + styling
│   └── src/
│       ├── game/             Game orchestrator, postfx, quality, procedural textures
│       ├── player/           Blocky characters, cosmetics, name tags
│       ├── weapons/          The procedural revolver + its mechanics
│       ├── physics/          cannon-es world + ragdoll builder
│       ├── cinematic/        Shot / reload cinematic state machine, bullet, particles
│       ├── networking/       WebSocket client (reconnect, heartbeat)
│       ├── ui/               Lobby / HUD / spectator / end screens
│       ├── audio/            Procedural WebAudio engine (all sounds synthesized)
│       └── environment/      The bar (counter, bottles, booths, pool table, lights…)
├── server/src/
│   ├── game/                 GameManager, RevolverState, TurnManager
│   ├── players/              Player records, reconnection grace
│   ├── networking (in server.ts) HTTP + WebSocket glue
│   └── config.ts             port.txt + rules.json loading
├── shared/protocol.ts        Message contract shared by client & server
├── scripts/build-client.mjs  esbuild bundle + html copy
├── test/                     Server simulation + optional browser smoke test
├── port.txt                  ← the port (default 3000)
└── rules.json.example        Optional server-side rule overrides
```

### The cinematic systems

- **Pre-shot** — letterbox + grade kick in, the camera drifts to an off-muzzle
  angle down the barrel (a profile angle for self-shots), the hammer cocks with
  mechanical audio, tension drone + heartbeat rise.
- **Live fire** — muzzle flash light, smoke, sparks, recoil spring, strong shake;
  time scales to ~0.16× and a real projectile flies from the actual muzzle to the
  target while the camera slips off the muzzle, orbits the round and swings ahead
  to catch the impact (radial motion blur, chromatic aberration, DOF focus locked
  on the bullet).
- **Impact** — flash, particle burst, LFE boom, ragdoll activation with a small
  directional knockback, hold on the body, then the camera *smoothly interpolates*
  back to the gameplay camera — no snapping, no leftover effects.
- **Reload** (after every live round) — close-up on the revolver: it tilts, the
  cylinder swings out, one brass cartridge is inserted, the cylinder spins down,
  clicks closed, fade to black → new chamber state → fade back into the bar.
- **Empty chamber** — no cinematic fireworks: the hammer falls, a dry click,
  a small camera reaction and relief audio. The tension does the work.

### Anti-cheat summary

| Client can decide | Server decides |
| --- | --- |
| where to walk (relay-clamped) | chamber contents & order |
| which target to point at (request) | whether the shot is LIVE or EMPTY |
| cosmetics / camera / audio | turn order & validity |
| presentation of cinematics | elimination, spectators, match end |

---

## Development

```bash
npm run build        # build client + server
npm run serve        # start server only (after build)
npm run dev          # rebuild + start (dev bundle with sourcemaps)
npm run typecheck    # TypeScript check for client and server
npm test             # headless server simulation: full matches with scripted clients
```

### Optional: real-browser smoke test

`test/browser-smoke.mjs` launches three headless Chromium clients against a live
server, plays a full match (join → lobby → turns → shots → eliminations → winner →
back to lobby) and screenshots the key beats into `test/screenshots/`:

```bash
npm install -D puppeteer @sparticuz/chromium pngjs
# fetch a chromium + libs once (see below), then:
node test/browser-smoke.mjs     # full match with 3 headless clients
node test/input-check.mjs       # mouse pitch + WASD orientation checks
node test/analyze-screens.mjs   # numeric screenshot QA
```

The sandbox-free way used during development:
`node -e "require('@sparticuz/chromium').default.executablePath()"` extracts a
Chromium to `/tmp/chromium`; its runtime libs unpack from the same package:

```bash
node -e "const z=require('zlib'),f=require('fs');f.writeFileSync('/tmp/a.tar',
  z.brotliDecompressSync(f.readFileSync('node_modules/@sparticuz/chromium/bin/al2023.tar.br')))"
mkdir -p /tmp/al2023 && tar -xf /tmp/a.tar -C /tmp/al2023
LD_LIBRARY_PATH=/tmp/al2023/lib PUPPETEER_EXECUTABLE_PATH=/tmp/chromium node test/browser-smoke.mjs
```

## Troubleshooting

- **Black page / "WebGL could not start"** — enable hardware acceleration in your
  browser, or pick *Low* quality.
- **Friends can't connect** — check the firewall for the port in `port.txt` and use
  the server's LAN IP from the startup banner.
- **Sound doesn't start** — browsers require a click first; the entry button does
  this. Check the volume sliders in ⚙ Settings.
- **I got eliminated and my screen is odd** — that's spectator mode. `Q`/`E` cycle
  players, `V` free-flies.

## Tech stack

Three.js r170 (WebGL2), cannon-es (ragdolls), ws, express, esbuild, TypeScript —
and nothing else. All textures, models, animations, particles and sounds are
procedural.

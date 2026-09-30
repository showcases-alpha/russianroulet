/**
 * ui.ts — DOM overlay controller: loading screen, lobby, HUD, spectator bar,
 * end screen, settings and toasts. Pure presentation; the Game feeds it state.
 */
import type { GameRules, LobbyPlayerInfo, MatchPlayerInfo } from '../../../shared/protocol.js';
import { JACKET_COLORS } from '../player/character.js';
import type { QualityLevel } from '../game/quality.js';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

export type EnterMode = { kind: 'create' } | { kind: 'join'; code: string };

export interface UICallbacks {
  onEnter: (name: string, quality: QualityLevel, mode: EnterMode) => void;
  onReady: (ready: boolean) => void;
  onStart: () => void;
  onSettingsChanged: (rules: Partial<GameRules>) => void;
  onBackToLobby: () => void;
  onQualityChange: (q: QualityLevel) => void;
  onAutoQuality: (auto: boolean) => void;
  onVolume: (v: number) => void;
  onMusicVolume: (v: number) => void;
  onSensitivity: (v: number) => void;
  onSpectatorPrev: () => void;
  onSpectatorNext: () => void;
  onSpectatorFree: () => void;
}

export class UI {
  private cb: UICallbacks;
  private myId = '';
  private isHost = false;
  private currentQuality: QualityLevel = 'high';
  private turnDeadline = 0;
  private turnTimerRAF = 0;
  private promptVisible = false;

  constructor(cb: UICallbacks) {
    this.cb = cb;
    this.wire();
  }

  private wire(): void {
    const doEnter = (mode: EnterMode) => {
      const name = ($('nameInput') as HTMLInputElement).value.trim() || 'Stranger';
      const q = ($('qualitySelect') as HTMLSelectElement).value as QualityLevel;
      localStorage.setItem('rr_name', name);
      localStorage.setItem('rr_quality', q);
      this.cb.onEnter(name, q, mode);
    };
    $('createRoomBtn').onclick = () => doEnter({ kind: 'create' });
    $('joinRoomBtn').onclick = () => {
      const code = ($('codeInput') as HTMLInputElement).value.trim().toUpperCase();
      if (code.length < 3) { this.toast('Enter the 4-letter room code first.', 'error'); return; }
      doEnter({ kind: 'join', code });
    };
    $('nameInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doEnter({ kind: 'create' });
    });
    $('codeInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') $('joinRoomBtn').click();
    });
    $('codeInput').addEventListener('input', () => {
      const el = $('codeInput') as HTMLInputElement;
      el.value = el.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    });
    $('copyCodeBtn').onclick = async () => {
      const code = $('roomCode').textContent ?? '';
      try {
        await navigator.clipboard.writeText(code);
        this.toast(`Room code ${code} copied — send it to your friends!`);
      } catch {
        this.toast(`Room code: ${code}`);
      }
    };
    $('readyBtn').onclick = () => {
      const ready = $('readyBtn').dataset.on === '1';
      this.cb.onReady(!ready);
    };
    $('startBtn').onclick = () => this.cb.onStart();

    // host settings
    const bind = (id: string, valId: string, fmt: (v: number) => string, key: keyof GameRules) => {
      $(id).addEventListener('input', () => {
        const v = parseInt(($(id) as HTMLInputElement).value, 10);
        $(valId).textContent = fmt(v);
        this.cb.onSettingsChanged({ [key]: v } as Partial<GameRules>);
      });
    };
    bind('setLive', 'setLiveVal', (v) => String(v), 'liveCount');
    bind('setChambers', 'setChambersVal', (v) => String(v), 'chamberCount');
    bind('setTimer', 'setTimerVal', (v) => `${v}s`, 'turnTimeoutSec');
    $('setTurnOrder').onchange = () => this.cb.onSettingsChanged({ turnOrder: ($('setTurnOrder') as HTMLSelectElement).value as 'seat' | 'random' });
    $('setEmptySelf').onchange = () => this.cb.onSettingsChanged({ emptySelfShot: ($('setEmptySelf') as HTMLSelectElement).value as 'next' | 'extra' });

    $('backToLobbyBtn').onclick = () => this.cb.onBackToLobby();
    $('settingsBtn').onclick = () => { $('settings').classList.remove('hidden'); };
    $('closeSettings').onclick = () => { $('settings').classList.add('hidden'); };
    $('gfxQuality').onchange = () => {
      this.currentQuality = ($('gfxQuality') as HTMLSelectElement).value as QualityLevel;
      this.cb.onQualityChange(this.currentQuality);
    };
    $('gfxAuto').onchange = () => this.cb.onAutoQuality(($('gfxAuto') as HTMLInputElement).checked);
    $('volMaster').oninput = () => this.cb.onVolume(parseInt(($('volMaster') as HTMLInputElement).value, 10) / 100);
    $('volMusic').oninput = () => this.cb.onMusicVolume(parseInt(($('volMusic') as HTMLInputElement).value, 10) / 100);
    $('sens').oninput = () => this.cb.onSensitivity(parseInt(($('sens') as HTMLInputElement).value, 10) / 100);

    $('specPrev').onclick = () => this.cb.onSpectatorPrev();
    $('specNext').onclick = () => this.cb.onSpectatorNext();
    $('specFree').onclick = () => this.cb.onSpectatorFree();

    // restore prefs
    const savedName = localStorage.getItem('rr_name');
    if (savedName) ($('nameInput') as HTMLInputElement).value = savedName;
    const savedQ = localStorage.getItem('rr_quality') as QualityLevel | null;
    if (savedQ) ($('qualitySelect') as HTMLSelectElement).value = savedQ;
  }

  /* ---------------- loading ---------------- */

  setLoadProgress(frac: number, step: string): void {
    ($('loadFill') as HTMLElement).style.width = `${Math.round(frac * 100)}%`;
    $('loadStep').textContent = step;
  }

  showEntry(guess: QualityLevel, online: string): void {
    $('entryPanel').classList.remove('hidden');
    $('qualityGuess').textContent = `(detected: ${guess})`;
    $('playerCountHint').textContent = online;
  }

  hideLoading(): void {
    $('loading').classList.add('hidden');
  }

  /** Back to the name + room-code screen (e.g. after a bad room code). */
  showEntryAgain(): void {
    $('loading').classList.remove('hidden');
    $('entryPanel').classList.remove('hidden');
  }

  /* ---------------- lobby ---------------- */

  showLobby(): void {
    $('lobby').classList.remove('hidden');
    $('hud').classList.add('hidden');
    $('endscreen').classList.add('hidden');
  }

  hideLobby(): void {
    $('lobby').classList.add('hidden');
    $('hud').classList.remove('hidden');
    $('settingsBtn').classList.remove('hidden');
    $('controlsHint').classList.remove('hidden');
  }

  setRoomCode(code: string): void {
    $('roomCodeRow').classList.remove('hidden');
    $('roomCode').textContent = code;
  }

  setMyInfo(myId: string, hostId: string): void {
    this.myId = myId;
    this.isHost = myId === hostId;
  }

  renderLobby(players: LobbyPlayerInfo[], hostId: string, canStart: boolean, rules: GameRules): void {
    this.isHost = this.myId === hostId;
    const list = $('lobbyPlayers');
    list.innerHTML = '';
    for (const p of players) {
      const li = document.createElement('li');
      const color = '#' + JACKET_COLORS[p.colorIndex % JACKET_COLORS.length].toString(16).padStart(6, '0');
      li.innerHTML = `
        <span class="dot" style="background:${color};color:${color}"></span>
        <span class="p-name">${escapeHtml(p.name)}</span>
        ${p.id === hostId ? '<span class="p-tag">host</span>' : ''}
        ${p.connected ? '' : '<span class="p-tag">reconnecting…</span>'}
        <span class="${p.ready ? 'p-ready' : 'p-waiting'}">${p.ready ? 'READY' : 'waiting'}</span>`;
      list.appendChild(li);
    }
    const ready = players.find((p) => p.id === this.myId)?.ready ?? false;
    const readyBtn = $('readyBtn');
    readyBtn.dataset.on = ready ? '1' : '0';
    readyBtn.textContent = ready ? '✓ READY' : "I'M READY";
    readyBtn.classList.toggle('primary', !ready);

    $('hostSettings').classList.toggle('hidden', !this.isHost);
    $('startBtn').classList.toggle('hidden', !this.isHost);
    ($('startBtn') as HTMLButtonElement).disabled = !canStart;

    const readyCount = players.filter((p) => p.ready).length;
    $('lobbyStatus').textContent =
      `${players.length} player${players.length === 1 ? '' : 's'} · ${readyCount} ready · need ${rules.minPlayers}+ to start`;

    if (this.isHost) {
      ($('setLive') as HTMLInputElement).value = String(rules.liveCount);
      $('setLiveVal').textContent = String(rules.liveCount);
      ($('setChambers') as HTMLInputElement).value = String(rules.chamberCount);
      $('setChambersVal').textContent = String(rules.chamberCount);
      ($('setTimer') as HTMLInputElement).value = String(rules.turnTimeoutSec);
      $('setTimerVal').textContent = `${rules.turnTimeoutSec}s`;
      ($('setTurnOrder') as HTMLSelectElement).value = rules.turnOrder;
      ($('setEmptySelf') as HTMLSelectElement).value = rules.emptySelfShot;
    }
  }

  /* ---------------- HUD ---------------- */

  renderPlayersList(players: MatchPlayerInfo[], currentTurnId: string | null): void {
    const el = $('playersList');
    el.innerHTML = '';
    for (const p of players) {
      if (p.left) continue;
      const row = document.createElement('div');
      row.className = `pl-row${p.alive && !p.spectator ? '' : ' dead'}${p.id === currentTurnId ? ' turn' : ''}${p.id === this.myId ? ' me' : ''}`;
      const color = '#' + JACKET_COLORS[p.colorIndex % JACKET_COLORS.length].toString(16).padStart(6, '0');
      row.innerHTML = `
        <span class="pl-dot" style="background:${color}"></span>
        <span class="pl-name">${escapeHtml(p.name)}</span>`;
      el.appendChild(row);
    }
  }

  showTurnBanner(text: string, mine: boolean, deadlineSec: number): void {
    $('turnBanner').classList.remove('hidden');
    const t = $('turnText');
    t.textContent = text;
    t.classList.toggle('you', mine);
    this.turnDeadline = performance.now() + deadlineSec * 1000;
    if (!this.turnTimerRAF) this.tickTimer();
  }

  hideTurnBanner(): void {
    $('turnBanner').classList.add('hidden');
  }

  private tickTimer = () => {
    const remain = Math.max(0, (this.turnDeadline - performance.now()) / 1000);
    ($('turnTimerFill') as HTMLElement).style.width = `${(remain / Math.max(1, this.turnDeadlineSec)) * 100}%`;
    if (remain <= 0) { this.turnTimerRAF = 0; return; }
    this.turnTimerRAF = requestAnimationFrame(this.tickTimer);
  };

  private turnDeadlineSec = 45;
  setTurnDuration(sec: number): void { this.turnDeadlineSec = sec; }

  private lastPromptHtml = '';
  showPrompt(html: string): void {
    // called every frame — skip DOM work when nothing changed
    if (html === this.lastPromptHtml && this.promptVisible) return;
    this.lastPromptHtml = html;
    const p = $('prompt');
    p.innerHTML = html;
    p.classList.remove('hidden');
    this.promptVisible = true;
  }
  hidePrompt(): void {
    if (!this.promptVisible) return;
    this.lastPromptHtml = '';
    $('prompt').classList.add('hidden');
    this.promptVisible = false;
  }
  get isPromptVisible(): boolean { return this.promptVisible; }

  showCrosshair(hot: boolean): void {
    const c = $('crosshair');
    c.classList.remove('hidden');
    c.classList.toggle('hot', hot);
  }
  hideCrosshair(): void { $('crosshair').classList.add('hidden'); }

  showSpectator(name: string): void {
    $('spectatorBar').classList.remove('hidden');
    $('specName').textContent = name;
  }
  hideSpectator(): void { $('spectatorBar').classList.add('hidden'); }

  setNetInfo(connected: boolean, latency: number, fps: number, quality: string): void {
    $('netinfo').innerHTML =
      `${connected ? `<span style="color:#6fdc8c">●</span> connected · ${latency}ms` : '<span class="off">● reconnecting…</span>'}<br>` +
      `${fps} fps · ${quality}`;
  }

  /* ---------------- end screen ---------------- */

  showEndScreen(winnerName: string | null, standings: MatchPlayerInfo[], iAmHost: boolean, iWon: boolean): void {
    $('endscreen').classList.remove('hidden');
    $('winnerName').textContent = winnerName ?? 'NOBODY SURVIVED';
    const st = $('standings');
    st.innerHTML = '';
    const sorted = [...standings].filter((p) => !p.left).sort((a, b) => Number(b.alive) - Number(a.alive));
    sorted.forEach((p, i) => {
      const row = document.createElement('div');
      row.className = 'st-row';
      const color = '#' + JACKET_COLORS[p.colorIndex % JACKET_COLORS.length].toString(16).padStart(6, '0');
      row.innerHTML = `
        <span class="st-pos">${i + 1}.</span>
        <span class="pl-dot" style="background:${color}"></span>
        <span>${escapeHtml(p.name)}</span>
        ${p.alive && !p.spectator ? '<span class="p-ready">survived</span>' : '<span class="st-dead">eliminated</span>'}`;
      st.appendChild(row);
    });
    $('backToLobbyBtn').classList.toggle('hidden', !iAmHost);
    $('endHint').textContent = iWon ? 'The night is yours.' : (iAmHost ? 'You can bring everyone back to the lobby.' : 'Waiting for the host…');
  }

  hideEndScreen(): void { $('endscreen').classList.add('hidden'); }

  /* ---------------- toasts ---------------- */

  toast(message: string, kind: 'info' | 'error' = 'info'): void {
    const t = document.createElement('div');
    t.className = `toast${kind === 'error' ? ' error' : ''}`;
    t.textContent = message;
    $('toasts').appendChild(t);
    setTimeout(() => t.remove(), 4200);
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

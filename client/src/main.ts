/**
 * main.ts — client bootstrap: loading screen → renderer/scene build → entry.
 * Exposes window.__game as a debug/testing handle (used by smoke tests).
 */
import { Game } from './game/game.js';
import { autoDetectLevel } from './game/quality.js';

const canvas = document.getElementById('scene') as HTMLCanvasElement;

async function boot(): Promise<void> {
  const game = new Game();
  (window as unknown as { __game?: Game }).__game = game;
  const fill = document.getElementById('loadFill') as HTMLElement;
  const step = document.getElementById('loadStep') as HTMLElement;

  try {
    await game.init(canvas, (frac, text) => {
      fill.style.width = `${Math.round(frac * 100)}%`;
      step.textContent = text;
    });
  } catch (err) {
    step.textContent = 'Your browser could not start WebGL — try Chrome, Edge or Firefox with hardware acceleration enabled.';
    console.error(err);
    return;
  }

  // ready — show the entry panel with the detected quality
  const guess = autoDetectLevel();
  const select = document.getElementById('qualitySelect') as HTMLSelectElement;
  if (!localStorage.getItem('rr_quality')) select.value = guess;
  (document.getElementById('entryPanel') as HTMLElement).classList.remove('hidden');
  step.textContent = '';
  fill.style.width = '100%';

  const hint = document.getElementById('playerCountHint') as HTMLElement;
  hint.textContent = `${location.hostname || 'this server'} · invite friends on your network`;

  (document.getElementById('nameInput') as HTMLElement).focus();
}

boot();

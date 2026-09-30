/**
 * quality.ts — graphics presets and runtime quality manager.
 * Presets scale every expensive feature so the game runs from office laptops
 * to RTX rigs. An FPS watchdog can step quality down automatically.
 */
import * as THREE from 'three';

export type QualityLevel = 'low' | 'medium' | 'high' | 'ultra';
export const QUALITY_LEVELS: QualityLevel[] = ['low', 'medium', 'high', 'ultra'];

export interface QualitySettings {
  pixelRatio: number;          // cap for devicePixelRatio
  shadows: boolean;
  shadowMapSize: number;
  secondaryShadowLights: number;
  bloom: boolean;
  dof: 'off' | 'cinematic' | 'always';
  gtao: boolean;
  volumetrics: boolean;
  reflectors: number;          // how many planar reflectors
  anisotropy: number;
  particleDensity: number;     // 0.3 .. 1
  fog: boolean;
  envMapSize: number;
}

const PRESETS: Record<QualityLevel, QualitySettings> = {
  low: {
    pixelRatio: 0.7, shadows: false, shadowMapSize: 512, secondaryShadowLights: 0,
    bloom: false, dof: 'off', gtao: false, volumetrics: false, reflectors: 0,
    anisotropy: 1, particleDensity: 0.35, fog: true, envMapSize: 128,
  },
  medium: {
    pixelRatio: 0.9, shadows: true, shadowMapSize: 1024, secondaryShadowLights: 0,
    bloom: true, dof: 'cinematic', gtao: false, volumetrics: true, reflectors: 0,
    anisotropy: 2, particleDensity: 0.6, fog: true, envMapSize: 128,
  },
  high: {
    pixelRatio: 1.25, shadows: true, shadowMapSize: 2048, secondaryShadowLights: 1,
    bloom: true, dof: 'cinematic', gtao: false, volumetrics: true, reflectors: 1,
    anisotropy: 4, particleDensity: 0.85, fog: true, envMapSize: 256,
  },
  ultra: {
    pixelRatio: 2, shadows: true, shadowMapSize: 2048, secondaryShadowLights: 2,
    bloom: true, dof: 'always', gtao: true, volumetrics: true, reflectors: 2,
    anisotropy: 8, particleDensity: 1, fog: true, envMapSize: 256,
  },
};

export function getPreset(level: QualityLevel): QualitySettings {
  return { ...PRESETS[level] };
}

/** Rough initial guess from GPU string + core count. */
export function autoDetectLevel(): QualityLevel {
  const gl = document.createElement('canvas').getContext('webgl2');
  if (!gl) return 'low';
  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  const renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : '';
  const cores = navigator.hardwareConcurrency || 4;
  const r = renderer.toLowerCase();
  if (/rtx|radeon rx (6|7|9)|arc a7|apple m[1-9] (pro|max|ultra)/.test(r)) return 'ultra';
  if (/gtx 1(6|7|8|9)|radeon rx 5|apple m[1-9]|arc a3|vega|rx 5[6-9]00/.test(r)) return 'high';
  if (cores >= 8) return 'high';
  if (cores >= 4) return 'medium';
  return 'low';
}

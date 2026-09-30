/**
 * postfx.ts — the cinematic post-processing stack:
 *   Render → GTAO (Ultra) → Bokeh DOF → Unreal Bloom → ACES output →
 *   CinematicPass (vignette, film grain, chromatic aberration, radial motion
 *   blur, letterbox, filmic grade, fade-to-black).
 * Every cinematic parameter is a simple value that other systems animate.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import type { QualitySettings } from './quality.js';

export interface FxParams {
  letterbox: number;   // 0..1
  vignette: number;    // 0.25 base .. 1
  grain: number;       // 0..1
  chroma: number;      // px offset
  radial: number;      // radial (zoom) blur 0..1
  fade: number;        // 0 normal .. 1 black
  exposure: number;    // multiplier on top of renderer exposure
  contrast: number;    // 1 = neutral
  saturation: number;  // 1 = neutral
  tint: THREE.Color;
  bloomBoost: number;  // added to base bloom strength
  dofFocus: number;    // meters
  dofMaxBlur: number;  // 0 disables
}

const CinematicShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uLetterbox: { value: 0 },
    uVignette: { value: 0.3 },
    uGrain: { value: 0.05 },
    uChroma: { value: 0 },
    uRadial: { value: 0 },
    uFade: { value: 0 },
    uExposure: { value: 1 },
    uContrast: { value: 1 },
    uSaturation: { value: 1 },
    uTint: { value: new THREE.Color(1, 1, 1) },
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float uLetterbox, uVignette, uGrain, uChroma, uRadial, uFade;
    uniform float uExposure, uContrast, uSaturation, uTime;
    uniform vec3 uTint;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7)) + uTime * 13.7) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      vec2 center = vec2(0.5);
      vec2 toC = uv - center;
      float dist = length(toC);

      // radial (zoom) motion blur
      vec3 col = vec3(0.0);
      if (uRadial > 0.001) {
        float total = 0.0;
        const int TAPS = 9;
        for (int i = 0; i < TAPS; i++) {
          float t = float(i) / float(TAPS - 1);
          float scale = 1.0 - uRadial * 0.14 * t * (0.3 + dist);
          vec2 suv = center + toC * scale;
          float w = 1.0 - t * 0.55;
          col += texture2D(tDiffuse, suv).rgb * w;
          total += w;
        }
        col /= total;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }

      // chromatic aberration grows toward the edges
      if (uChroma > 0.0001) {
        vec2 off = toC * uChroma * (0.25 + dist);
        col.r = mix(col.r, texture2D(tDiffuse, uv + off).r, 0.85);
        col.b = mix(col.b, texture2D(tDiffuse, uv - off).b, 0.85);
      }

      // filmic grade
      col *= uExposure * uTint;
      col = (col - 0.5) * uContrast + 0.5;
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, uSaturation);

      // vignette
      float vig = smoothstep(0.95, 0.28, dist * (1.0 + uVignette * 0.9));
      col *= mix(1.0, vig, clamp(uVignette, 0.0, 1.0));

      // film grain
      float g = hash(uv * vec2(1920.0, 1080.0));
      col += (g - 0.5) * uGrain * 0.09;

      // letterbox bars
      float bar = uLetterbox * 0.115;
      if (uv.y < bar || uv.y > 1.0 - bar) col = vec3(0.0);

      // fade to black
      col *= (1.0 - clamp(uFade, 0.0, 1.0));

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export class PostFX {
  composer: EffectComposer;
  private renderPass: RenderPass;
  private bokehPass: BokehPass;
  bloomPass: UnrealBloomPass;
  private cinePass: ShaderPass;
  private gtaoPass: GTAOPass | null = null;
  private baseBloom = 0.32;
  params: FxParams = {
    letterbox: 0, vignette: 0.32, grain: 0.35, chroma: 0, radial: 0, fade: 0,
    exposure: 1, contrast: 1.04, saturation: 1.02,
    tint: new THREE.Color(1, 1, 1), bloomBoost: 0, dofFocus: 8, dofMaxBlur: 0,
  };
  private quality: QualitySettings;
  private cinematicActive = false;

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, quality: QualitySettings) {
    this.quality = quality;
    // multisampled HDR target → smooth edges in the post chain on High/Ultra
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(Math.max(2, size.x), Math.max(2, size.y), {
      samples: quality.pixelRatio >= 1.25 ? 4 : 0,
      type: THREE.HalfFloatType,
    });
    this.composer = new EffectComposer(renderer, rt);
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    if (quality.gtao) {
      try {
        this.gtaoPass = new GTAOPass(scene, camera, 1, 1);
        this.gtaoPass.output = GTAOPass.OUTPUT.Default;
        this.composer.addPass(this.gtaoPass);
      } catch { this.gtaoPass = null; }
    }

    this.bokehPass = new BokehPass(scene, camera, {
      focus: 8.0, aperture: 0.00008, maxblur: 0.008,
    });
    this.bokehPass.enabled = quality.dof === 'always';
    this.composer.addPass(this.bokehPass);

    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), this.baseBloom, 0.55, 0.85);
    this.bloomPass.enabled = quality.bloom;
    this.composer.addPass(this.bloomPass);

    this.composer.addPass(new OutputPass());

    this.cinePass = new ShaderPass(CinematicShader);
    this.composer.addPass(this.cinePass);
  }

  setCinematic(active: boolean): void {
    this.cinematicActive = active;
    this.refreshDof();
  }

  refreshDof(): void {
    if (this.quality.dof === 'off') this.bokehPass.enabled = false;
    else if (this.quality.dof === 'cinematic') this.bokehPass.enabled = this.cinematicActive;
    else this.bokehPass.enabled = true;
  }

  setSize(w: number, h: number): void {
    this.composer.setSize(w, h);
    this.gtaoPass?.setSize(w, h);
  }

  render(dt: number): void {
    const p = this.params;
    const u = this.cinePass.uniforms;
    u.uLetterbox.value = p.letterbox;
    u.uVignette.value = p.vignette;
    u.uGrain.value = p.grain;
    u.uChroma.value = p.chroma;
    u.uRadial.value = p.radial;
    u.uFade.value = p.fade;
    u.uExposure.value = p.exposure;
    u.uContrast.value = p.contrast;
    u.uSaturation.value = p.saturation;
    u.uTint.value.copy(p.tint);
    u.uTime.value += dt;

    this.bloomPass.strength = this.baseBloom + p.bloomBoost;
    this.bloomPass.enabled = this.quality.bloom;

    if (this.bokehPass.enabled) {
      const bokeh = this.bokehPass.uniforms as unknown as Record<string, { value: number }>;
      bokeh.focus.value = p.dofFocus;
      bokeh.aperture.value = p.dofMaxBlur > 0 ? 0.00012 : 0.00002;
      bokeh.maxblur.value = p.dofMaxBlur > 0 ? Math.min(0.012, p.dofMaxBlur) : 0.001;
    }

    this.composer.render(dt);
  }
}

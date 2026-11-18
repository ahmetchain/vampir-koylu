// Hava durumu görseli: yağmur (tek LineSegments = 1 çizim çağrısı), şimşek çizgisi (yalnız çakarken 1 çizim çağrısı),
// gök/sis/ışık yumuşak geçişi ve şimşek parlaması. Hava oyun kuralını değiştirmez; sunucu { kind, seed, since } gönderir,
// şimşekler tohumdan deterministik türetilir (public/weather-core.js) -> herkes aynı anda aynı şimşeği görür.
// Kapalıyken (açık hava) hiçbir şey çizilmez, kare başına yalnızca birkaç karşılaştırma yapılır.
import * as THREE from 'three';
import Core from '../../public/weather-core.js';
import { clamp, rng, TAU } from './constants.js';

const BOX = { x: 64, y: 30, z: 64 };
const RAIN_VS = `
attribute vec3 aSeed;
uniform float uTime, uLen, uSpeed;
uniform vec3 uCenter, uBox;
uniform vec2 uWind;
varying float vA;
void main() {
  float end = position.x;
  float fall = fract(aSeed.y - uTime * uSpeed * (0.85 + 0.3 * aSeed.z) / uBox.y);
  float rx = fract(aSeed.x - uCenter.x / uBox.x);
  float rz = fract(aSeed.z * 7.13 + aSeed.x * 3.7 - uCenter.z / uBox.z);
  vec3 p = vec3(uCenter.x + (rx - 0.5) * uBox.x, fall * uBox.y, uCenter.z + (rz - 0.5) * uBox.z);
  p.xz += uWind * (p.y - uBox.y * 0.5) * 0.05;
  vec3 d = normalize(vec3(uWind.x, -1.0, uWind.y));
  p -= d * uLen * end;                 // kuyruk yukarıda
  vA = (1.0 - 0.75 * end) * (0.55 + 0.45 * aSeed.z);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`;
const RAIN_FS = `
uniform vec3 uColor;
uniform float uAlpha;
varying float vA;
void main() {
  gl_FragColor = vec4(uColor, vA * uAlpha);
  #include <colorspace_fragment>
}`;

const WHITE_BLUE = new THREE.Color('#dbe6ff');
const tmp = new THREE.Color();
const GREY = new THREE.Color();

export function createRain(scene, opts = {}) {
  const MAX = 1800;
  const R = rng(9071);
  const pos = new Float32Array(MAX * 2 * 3), seed = new Float32Array(MAX * 2 * 3);
  for (let i = 0; i < MAX; i++) {
    const a = R(), b = R(), c = R();
    for (let e = 0; e < 2; e++) {
      const o = (i * 2 + e) * 3;
      pos[o] = e;                       // x: 0 = baş, 1 = kuyruk
      seed[o] = a; seed[o + 1] = b; seed[o + 2] = c;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 3));
  const mat = new THREE.ShaderMaterial({
    vertexShader: RAIN_VS, fragmentShader: RAIN_FS, transparent: true, depthWrite: false, fog: false,
    uniforms: {
      uTime: { value: 0 }, uLen: { value: 1.1 }, uSpeed: { value: 26 }, uCenter: { value: new THREE.Vector3() }, uBox: { value: new THREE.Vector3(BOX.x, BOX.y, BOX.z) },
      uWind: { value: new THREE.Vector2(0.18, 0.06) }, uColor: { value: new THREE.Color('#b9c8e0') }, uAlpha: { value: 0 },
    },
  });
  const rain = new THREE.LineSegments(g, mat);
  rain.frustumCulled = false;
  rain.renderOrder = 8;
  rain.visible = false;
  scene.add(rain);

  // şimşek çizgisi: kırık çizgi, gökte uzakta; yalnız çakarken görünür
  const BOLT_SEG = 14;
  const boltPos = new Float32Array(BOLT_SEG * 2 * 3);
  const boltG = new THREE.BufferGeometry();
  boltG.setAttribute('position', new THREE.BufferAttribute(boltPos, 3));
  const boltMat = new THREE.LineBasicMaterial({ color: 0xeaf1ff, transparent: true, opacity: 0, fog: false, depthWrite: false });
  const bolt = new THREE.LineSegments(boltG, boltMat);
  bolt.frustumCulled = false; bolt.renderOrder = 7; bolt.visible = false;
  scene.add(bolt);

  let count = 0;          // kalite kademesine göre damla sayısı
  let want = { kind: 'clear', seed: 0, since: 0 };
  let k = 0;              // 0..1 yumuşak yoğunluk (yağmur 0.75, fırtına 1)
  let kStorm = 0;         // fırtına ağırlığı (rüzgâr eğimi, hız)
  let lastT = 0;
  const active = [];      // etkin şimşekler { t, dbl, ang, dist }
  let flash = 0;
  let boltOn = false;
  const api = {
    flash: 0,
    hold: null,       // hata ayıklama: sayı verilirse şimşek parlaması bu değerde sabitlenir (ekran görüntüsü)
    setCount(n) { count = clamp(Math.floor(n) || 0, 0, MAX); g.setDrawRange(0, count * 2); },
    // Sunucudan gelen hava; aynı { kind, seed, since } tekrar gelirse hiçbir şey yapmaz.
    set(w, nowS) {
      const n = Core.normalize(w);
      if (n.kind === want.kind && n.seed === want.seed && n.since === want.since) return;
      const wasClear = want.kind !== 'storm' || n.seed !== want.seed;
      want = n;
      if (wasClear) lastT = nowS;      // geçmiş şimşekler tekrarlanmaz
    },
    get kind() { return want.kind; },
    get level() { return k; },
    get visible() { return rain.visible; },
    // Kare başı: 'allowed' false ise (menü) hava kapalı sayılır. nowS: sunucu saati (ms). Dönüş: şimşek parlaması 0..1
    tick(dt, time, nowS, allowed, reduced) {
      const kind = allowed ? want.kind : 'clear';
      const target = kind === 'storm' ? 1 : kind === 'rain' ? 0.72 : 0;
      k += (target - k) * Math.min(1, dt / 1.1);     // ~2.5-3 sn'de yumuşak geçiş
      if (Math.abs(target - k) < 0.03) k = target;
      kStorm += ((kind === 'storm' ? 1 : 0) - kStorm) * Math.min(1, dt / 1.4);
      // şimşekler (yalnız fırtınada ve yeterince yoğunken)
      if (kind === 'storm' && k > 0.35) {
        const list = Core.strikes(want.seed, want.since, lastT, nowS);
        for (const s of list) if (nowS - s.t < 700) active.push(s);
        if (opts.onStrike) for (const s of list) if (nowS - s.t < 700) opts.onStrike(s);
      }
      lastT = nowS;
      flash = 0;
      let boltS = null;
      for (let i = active.length - 1; i >= 0; i--) {
        const a = active[i], age = (nowS - a.t) / 1000;
        if (age > 0.9) { active.splice(i, 1); continue; }
        // ani çakma, hızlı sönme; çift şimşekte 0.19 sn sonra ikinci çakma
        let e = age < 0.04 ? age / 0.04 : Math.exp(-(age - 0.04) * 9);
        if (a.double && age > 0.19) { const a2 = age - 0.19; e = Math.max(e, 0.85 * (a2 < 0.03 ? a2 / 0.03 : Math.exp(-(a2 - 0.03) * 8))); }
        if (e > flash) { flash = e; boltS = a; }
      }
      if (api.hold != null) { flash = api.hold; boltS = { k: 999, ang: 0.3, dist: 0.5 }; }
      flash *= clamp(k, 0, 1) * (reduced ? 0.25 : 1);
      api.flash = flash;
      // yağmur çizgileri
      const on = k > 0.01 && count > 0;
      if (on !== rain.visible) rain.visible = on;
      if (on) {
        const u = mat.uniforms;
        u.uTime.value = time;
        u.uAlpha.value = 0.8 * k;
        u.uSpeed.value = 24 + 8 * kStorm;
        u.uLen.value = 1.0 + 0.5 * kStorm;
        u.uWind.value.set(0.16 + 0.22 * kStorm, 0.05);
      }
      // çizgi: şimşek çakarken görünür (yoğun şimşek gerçekçi, yedek olarak azaltılmış harekette kapalı)
      const showBolt = boltS && flash > 0.12 && !reduced;
      if (showBolt) { if (!boltOn || bolt.userData.k !== boltS.k) buildBolt(boltS); boltMat.opacity = clamp(flash * 1.2, 0, 1); }
      if (showBolt !== boltOn) { boltOn = !!showBolt; bolt.visible = boltOn; }
      return flash;
    },
    // Gök/sis/ışık: yağmurda gri-mavi ve kararmış, sis yoğun; şimşekte bir an parlak mavi-beyaz.
    applyTod(tod) {
      if (k > 0.001) {
        const kk = k;
        for (const c of [tod.top, tod.hor, tod.sky]) {
          const l = c.r * 0.3 + c.g * 0.55 + c.b * 0.15;
          GREY.setRGB(l * 0.78, l * 0.84, l * 0.95);
          c.lerp(GREY, 0.6 * kk);
        }
        tod.si *= 1 - 0.55 * kk;
        tod.hi *= 1 - 0.16 * kk;
        tod.fogNear *= 1 - 0.4 * kk;
        tod.fogFar *= 1 - 0.42 * kk;
        tod.stars *= 1 - 0.92 * kk;
        tod.lamps = Math.max(tod.lamps, 0.3 * kk);
        // yağmur damlası rengi: ışığa göre (geceleri soluk)
        mat.uniforms.uColor.value.copy(tod.hor).lerp(WHITE_BLUE, 0.55).multiplyScalar(0.55 + 0.6 * (1 - tod.night));
      }
      if (flash > 0.001) {
        tod.top.lerp(WHITE_BLUE, flash * 0.35);
        tod.hor.lerp(WHITE_BLUE, flash * 0.55);
        tod.sky.lerp(WHITE_BLUE, flash * 0.5);
      }
    },
    applyLights(hemi, sun) {
      if (flash > 0.001) { hemi.intensity += flash * 1.5; sun.intensity += flash * 1.2; }
    },
    followCamera(center, hidden) {
      mat.uniforms.uCenter.value.copy(center);
      if (hidden && rain.visible) rain.visible = false;   // iç mekânda yağmur çizilmez
    },
    dispose() { g.dispose(); mat.dispose(); boltG.dispose(); boltMat.dispose(); scene.remove(rain); scene.remove(bolt); },
  };

  function buildBolt(s) {
    bolt.userData.k = s.k;
    const r = rng(((s.k + 1) * 7919) ^ ((s.ang * 1e6) | 0));
    const az = s.ang * TAU, dist = 150;
    let x = Math.sin(az) * dist, z = -Math.cos(az) * dist * 0.9 - 30, y = 95;
    const cx = mat.uniforms.uCenter.value;
    x += cx.x; z += cx.z;
    let o = 0;
    for (let i = 0; i < BOLT_SEG; i++) {
      const nx = x + (r() - 0.5) * 16, nz = z + (r() - 0.5) * 6, ny = y - (95 - 6) / BOLT_SEG * (0.8 + r() * 0.4);
      boltPos[o++] = x; boltPos[o++] = y; boltPos[o++] = z;
      boltPos[o++] = nx; boltPos[o++] = Math.max(ny, 4); boltPos[o++] = nz;
      x = nx; y = Math.max(ny, 4); z = nz;
    }
    boltG.attributes.position.needsUpdate = true;
  }
  return api;
}

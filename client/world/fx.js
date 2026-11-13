// Ucuz efektler: tek çizim çağrılı dörtgen grupları (fener haleleri, zemindeki ışık havuzları,
// karakter gölge lekeleri, seçim halkaları, duman/puf parçacıkları), kamp ateşi alevi, kıvılcımlar, ateş böcekleri.
import * as THREE from 'three';
import { rng, TAU } from './constants.js';

const QUAD_VS = `
attribute vec4 aPos;     // xyz, boyut
attribute vec4 aCol;     // rgb, alfa
attribute float aSpin;   // dönüş / faz
uniform float uTime;
uniform float uGround;   // 1 = zemine yatık, 0 = kameraya dönük
varying vec2 vUv;
varying vec4 vCol;
varying float vPhase;
void main() {
  vUv = uv;
  vCol = aCol;
  vPhase = aSpin;
  vec3 c = aPos.xyz;
  float s = aPos.w;
  vec2 q = position.xy;
  if (uGround > 0.5) {
    float cs = cos(aSpin), sn = sin(aSpin);
    q = vec2(q.x * cs - q.y * sn, q.x * sn + q.y * cs);
    vec4 wp = modelMatrix * vec4(c.x + q.x * s, c.y, c.z - q.y * s, 1.0);
    gl_Position = projectionMatrix * viewMatrix * wp;
  } else {
    vec4 mv = modelViewMatrix * vec4(c, 1.0);
    mv.xy += q * s;
    gl_Position = projectionMatrix * mv;
  }
}`;

const QUAD_FS = {
  glow: `float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);`,
  pool: `float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);`,
  blob: `float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;`,
  ring: `float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,
  puff: `float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);`,
};

function quadMaterial(kind, blending) {
  return new THREE.ShaderMaterial({
    vertexShader: QUAD_VS,
    fragmentShader: `uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${QUAD_FS[kind]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,
    uniforms: { uTime: { value: 0 }, uGround: { value: kind === 'glow' || kind === 'puff' ? 0 : 1 } },
    transparent: true, depthWrite: false, blending, fog: false,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
}

// Tek çizim çağrılı dörtgen grubu
export class QuadBatch {
  constructor(kind, max, blending = THREE.AdditiveBlending) {
    this.max = max;
    const base = new THREE.PlaneGeometry(1, 1);
    const g = new THREE.InstancedBufferGeometry();
    g.index = base.index;
    g.setAttribute('position', base.getAttribute('position'));
    g.setAttribute('uv', base.getAttribute('uv'));
    this.pos = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4);
    this.col = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4);
    this.spin = new THREE.InstancedBufferAttribute(new Float32Array(max), 1);
    this.pos.setUsage(THREE.DynamicDrawUsage); this.col.setUsage(THREE.DynamicDrawUsage); this.spin.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('aPos', this.pos); g.setAttribute('aCol', this.col); g.setAttribute('aSpin', this.spin);
    g.instanceCount = 0;
    this.geo = g;
    this.mat = quadMaterial(kind, blending);
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = kind === 'blob' || kind === 'pool' ? 1 : 5;
    this.n = 0;
  }
  begin() { this.n = 0; }
  add(x, y, z, size, color, alpha, spin = 0) {
    if (this.n >= this.max) return;
    const i = this.n++;
    const p = this.pos.array, c = this.col.array;
    p[i * 4] = x; p[i * 4 + 1] = y; p[i * 4 + 2] = z; p[i * 4 + 3] = size;
    c[i * 4] = color.r; c[i * 4 + 1] = color.g; c[i * 4 + 2] = color.b; c[i * 4 + 3] = alpha;
    this.spin.array[i] = spin;
  }
  end(time) {
    this.geo.instanceCount = this.n;
    this.mesh.visible = this.n > 0;
    if (this.n) { this.pos.needsUpdate = true; this.col.needsUpdate = true; this.spin.needsUpdate = true; }
    this.mat.uniforms.uTime.value = time;
  }
  dispose() { this.geo.dispose(); this.mat.dispose(); }
}

// ---------- Kamp ateşi ----------
const FLAME_VS = `
uniform float uTime;
varying vec2 vUv;
void main() {
  vUv = uv;
  // silindirik billboard: X ekseni kameraya dik
  vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 wc = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float sx = length(modelMatrix[0].xyz), sy = length(modelMatrix[1].xyz);
  vec3 wp = wc + normalize(vec3(camRight.x, 0.0, camRight.z)) * position.x * sx + vec3(0.0, 1.0, 0.0) * position.y * sy;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`;
const FLAME_FS = `
uniform float uTime, uSeed, uPower;
varying vec2 vUv;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
void main() {
  vec2 uv = vUv;
  float t = uTime * 1.6 + uSeed;
  float y = uv.y;
  float nz = n(vec2(uv.x * 4.0 + uSeed, y * 3.0 - t * 2.2)) * 0.6 + n(vec2(uv.x * 9.0, y * 7.0 - t * 3.7)) * 0.4;
  float x = (uv.x - 0.5) * 2.0 + (nz - 0.5) * 0.55 * y;
  float width = mix(0.95, 0.05, pow(y, 0.85));
  float shape = 1.0 - smoothstep(width * 0.55, width, abs(x));
  shape *= smoothstep(0.0, 0.08, y) * (1.0 - smoothstep(0.55, 1.0, y + (nz - 0.5) * 0.3));
  float core = (1.0 - smoothstep(0.0, width * 0.55, abs(x))) * (1.0 - smoothstep(0.1, 0.55, y));
  vec3 c = mix(vec3(1.0, 0.25, 0.04), vec3(1.0, 0.62, 0.18), shape);
  c = mix(c, vec3(1.0, 0.93, 0.62), core);
  float a = shape * uPower;
  if (a < 0.01) discard;
  gl_FragColor = vec4(c * (0.9 + core * 0.6), a);
  #include <colorspace_fragment>
}`;

const SPARK_VS = `
attribute vec4 aSeed;
uniform float uTime, uPx, uPower;
varying float vA;
void main() {
  float life = 1.6 + aSeed.w;
  float t = mod(uTime * (0.7 + aSeed.z * 0.6) + aSeed.x * 10.0, life) / life;
  vec3 p = position;
  p.y += t * (2.8 + aSeed.y * 2.2);
  p.x += sin(uTime * 2.0 + aSeed.x * 20.0) * 0.25 * t + (aSeed.y - 0.5) * t * 1.2;
  p.z += cos(uTime * 1.7 + aSeed.y * 20.0) * 0.25 * t + (aSeed.x - 0.5) * t * 1.2;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = (1.0 - t) * smoothstep(0.0, 0.08, t) * uPower;
  gl_PointSize = uPx * (2.0 + 2.5 * aSeed.z) * (10.0 / max(-mv.z, 4.0)) * 3.0;
}`;
const SPARK_FS = `
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;

export function createFire(q) {
  const group = new THREE.Group();
  group.name = 'campfire-fx';
  const flames = [];
  const flameGeo = new THREE.PlaneGeometry(1, 1);
  flameGeo.translate(0, 0.5, 0);
  const seeds = [[0, 0, 0, 1.25, 1.9], [0.32, 0.1, 0.18, 0.8, 1.25], [-0.3, -0.12, 0.2, 0.75, 1.15], [0.05, 0.2, -0.25, 0.7, 1.05]];
  for (let i = 0; i < seeds.length; i++) {
    const [x, z, , w, hgt] = seeds[i];
    const mat = new THREE.ShaderMaterial({
      vertexShader: FLAME_VS, fragmentShader: FLAME_FS,
      uniforms: { uTime: { value: 0 }, uSeed: { value: i * 3.7 }, uPower: { value: 1 } },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    });
    const m = new THREE.Mesh(flameGeo, mat);
    m.position.set(x, 0.32, z);
    m.scale.set(w, hgt, 1);
    m.renderOrder = 6;
    m.frustumCulled = false;
    group.add(m);
    flames.push(m);
  }
  // Kıvılcımlar
  const N = q.sparks;
  const R = rng(5);
  const sp = new Float32Array(N * 3), seed = new Float32Array(N * 4);
  for (let i = 0; i < N; i++) {
    sp[i * 3] = (R() - 0.5) * 0.7; sp[i * 3 + 1] = 0.6; sp[i * 3 + 2] = (R() - 0.5) * 0.7;
    seed[i * 4] = R(); seed[i * 4 + 1] = R(); seed[i * 4 + 2] = R(); seed[i * 4 + 3] = R() * 1.2;
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  sg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const sparkMat = new THREE.ShaderMaterial({
    vertexShader: SPARK_VS, fragmentShader: SPARK_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: { value: 0 }, uPx: { value: 1 }, uPower: { value: 1 } },
  });
  const sparks = new THREE.Points(sg, sparkMat);
  sparks.frustumCulled = false;
  sparks.renderOrder = 7;
  group.add(sparks);

  return {
    group,
    update(time, px, power) {
      for (const f of flames) { f.material.uniforms.uTime.value = time; f.material.uniforms.uPower.value = power; }
      sparkMat.uniforms.uTime.value = time;
      sparkMat.uniforms.uPx.value = px;
      sparkMat.uniforms.uPower.value = Math.min(1, power * 1.2);
    },
    dispose() {
      flameGeo.dispose(); sg.dispose(); sparkMat.dispose();
      for (const f of flames) f.material.dispose();
    },
  };
}

// ---------- Ateş böcekleri ----------
const FF_VS = `
attribute vec4 aSeed;
uniform float uTime, uPx, uAlpha;
varying float vA;
void main() {
  vec3 p = position;
  float t = uTime * (0.25 + aSeed.z * 0.3) + aSeed.x * 30.0;
  p.x += sin(t * 1.3) * 1.4 + sin(t * 0.37) * 2.0;
  p.z += cos(t * 1.1) * 1.4 + cos(t * 0.29) * 2.0;
  p.y += sin(t * 2.1) * 0.4;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float blink = smoothstep(0.2, 1.0, sin(uTime * (1.5 + aSeed.y * 2.0) + aSeed.w * 6.28));
  vA = uAlpha * blink;
  gl_PointSize = uPx * 24.0 / max(-mv.z, 6.0) * 3.0;
}`;
const FF_FS = `
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;

export function createFireflies(count) {
  const R = rng(99);
  const pos = new Float32Array(count * 3), seed = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    seed[i * 4] = R(); seed[i * 4 + 1] = R(); seed[i * 4 + 2] = R(); seed[i * 4 + 3] = R();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const mat = new THREE.ShaderMaterial({
    vertexShader: FF_VS, fragmentShader: FF_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: { value: 0 }, uPx: { value: 1 }, uAlpha: { value: 0 } },
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 8;
  return {
    points: pts,
    // Köy halkasına göre yerleştir: orman kenarı ve evlerin arası
    place(R0, R1) {
      const r2 = rng(123);
      for (let i = 0; i < count; i++) {
        const a = r2() * TAU, rr = R0 + r2() * (R1 - R0);
        pos[i * 3] = Math.cos(a) * rr; pos[i * 3 + 1] = 0.6 + r2() * 2.2; pos[i * 3 + 2] = Math.sin(a) * rr;
      }
      g.getAttribute('position').needsUpdate = true;
    },
    update(time, px, alpha) {
      mat.uniforms.uTime.value = time; mat.uniforms.uPx.value = px; mat.uniforms.uAlpha.value = alpha;
      pts.visible = alpha > 0.01;
    },
    dispose() { g.dispose(); mat.dispose(); },
  };
}

// ---------- Parçacık patlamaları (puf, duman, büyü) ----------
export class Bursts {
  constructor(max = 96) {
    this.max = max;
    this.normal = new QuadBatch('puff', max, THREE.NormalBlending);
    this.add = new QuadBatch('glow', max, THREE.AdditiveBlending);
    this.list = [];
    this.tmp = new THREE.Color();
    this.dustOn = true;
  }
  // tür: 'poof' (beyaz-gri bulut), 'magic' (renkli ışıltı), 'dust' (ayak tozu), 'bubble' (zehir kabarcığı),
  // 'confetti' (renkli, düşen), 'smoke' (koyu, yükselen), 'mist' (mor sis)
  emit(kind, x, y, z, color, count = 14) {
    if (this.list.length > this.max * 1.6) return;
    const base = color ? new THREE.Color(color) : new THREE.Color(kind === 'poof' ? '#e8e4f2' : kind === 'dust' ? '#b59a72' : kind === 'smoke' ? '#4a4652' : kind === 'bubble' ? '#94d82d' : kind === 'mist' ? '#9b7bff' : '#ffd27a');
    const CONF = ['#ff4b5f', '#e6b85c', '#5ef0a0', '#7b83ff', '#ff8364', '#f06595', '#15aabf'];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * TAU;
      let sp = 0.6 + Math.random() * 1.6, vy = 0.6 + Math.random() * 1.2, life = 0.7 + Math.random() * 0.7, size = 0.25 + Math.random() * 0.3;
      let c = base;
      if (kind === 'poof') size = 0.35 + Math.random() * 0.35;
      if (kind === 'dust') { sp = 0.25 + Math.random() * 0.3; vy = 0.15 + Math.random() * 0.2; life = 0.5 + Math.random() * 0.3; size = 0.14 + Math.random() * 0.1; }
      if (kind === 'bubble') { sp = 0.15; vy = 0.8 + Math.random() * 0.8; life = 1.2 + Math.random(); size = 0.12 + Math.random() * 0.12; }
      if (kind === 'smoke' || kind === 'mist') { sp = 0.3 + Math.random() * 0.5; vy = 0.5 + Math.random() * 0.6; life = 1.4 + Math.random() * 0.8; size = 0.45 + Math.random() * 0.4; }
      if (kind === 'confetti') { sp = 1.5 + Math.random() * 2.5; vy = 3 + Math.random() * 3; life = 1.6 + Math.random() * 0.8; size = 0.1 + Math.random() * 0.08; c = new THREE.Color(CONF[i % CONF.length]); }
      this.list.push({ kind, x: x + Math.cos(a) * 0.2, y: y + Math.random() * 0.4, z: z + Math.sin(a) * 0.2, vx: Math.cos(a) * sp, vy, vz: Math.sin(a) * sp, t: 0, life, size, c });
    }
  }
  update(dt, time) {
    this.normal.begin(); this.add.begin();
    const L = this.list;
    for (let i = L.length - 1; i >= 0; i--) {
      const p = L[i];
      p.t += dt;
      if (p.t >= p.life) { L[i] = L[L.length - 1]; L.pop(); continue; }
      const k = p.t / p.life;
      const drag = Math.exp(-3 * dt);
      p.vx *= drag; p.vz *= drag;
      if (p.kind === 'confetti') p.vy -= 6 * dt; else p.vy *= Math.exp(-1.5 * dt);
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.kind === 'magic' || p.kind === 'bubble') this.add.add(p.x, p.y, p.z, p.size * (1 - k * 0.5), p.c, 1 - k);
      else if (p.kind === 'confetti') this.normal.add(p.x, Math.max(0.05, p.y), p.z, p.size, p.c, 1 - k * k);
      else if (p.kind === 'dust') this.normal.add(p.x, p.y, p.z, p.size * (1 + k * 2), p.c, (1 - k) * 0.45);
      else this.normal.add(p.x, p.y, p.z, p.size * (1 + k * 1.6), p.c, (1 - k) * (1 - k) * (p.kind === 'smoke' || p.kind === 'mist' ? 0.6 : 0.8));
    }
    this.normal.end(time); this.add.end(time);
  }
  dispose() { this.normal.dispose(); this.add.dispose(); }
}

// Tek alev (meşale, mum): kamp ateşiyle aynı gölgelendirici
let flameGeoShared = null;
export function makeFlame(w = 0.35, h = 0.6, seed = 1) {
  if (!flameGeoShared) { flameGeoShared = new THREE.PlaneGeometry(1, 1); flameGeoShared.translate(0, 0.5, 0); }
  const mat = new THREE.ShaderMaterial({
    vertexShader: FLAME_VS, fragmentShader: FLAME_FS,
    uniforms: { uTime: { value: 0 }, uSeed: { value: seed }, uPower: { value: 1 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
  });
  const m = new THREE.Mesh(flameGeoShared, mat);
  m.scale.set(w, h, 1);
  m.renderOrder = 6;
  m.frustumCulled = false;
  m.userData.tick = (t) => { mat.uniforms.uTime.value = t; };
  m.userData.cleanup = () => mat.dispose();
  return m;
}

// ---------- Hava: kar, yaprak, sürüklenen sis (kameranın çevresinde, kademe sayısıyla) ----------
const WX_VS = `
attribute vec4 aSeed;
uniform float uTime, uPx, uKind, uAlpha;
uniform vec3 uCenter;
varying float vA;
varying float vKind;
varying float vRot;
void main() {
  vec3 p = position;
  float box = 46.0;
  float fall = uKind < 0.5 ? 1.1 + aSeed.x * 0.9 : 1.5 + aSeed.x * 1.2;
  float y = mod(p.y - uTime * fall, 18.0);
  float sway = uKind < 0.5 ? 0.6 : 1.6;
  vec3 w = vec3(p.x + sin(uTime * (0.6 + aSeed.y) + aSeed.z * 9.0) * sway, y, p.z + cos(uTime * (0.5 + aSeed.x) + aSeed.w * 7.0) * sway);
  w.xz = uCenter.xz + mod(w.xz - uCenter.xz + box * 0.5, box) - box * 0.5;
  vec4 mv = modelViewMatrix * vec4(w, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = uKind < 0.5 ? (1.6 + aSeed.w * 2.2) : (3.0 + aSeed.w * 2.5);
  gl_PointSize = uPx * size * 18.0 / max(-mv.z, 4.0);
  vA = uAlpha * smoothstep(0.0, 2.0, y) * smoothstep(18.0, 14.0, y);
  vKind = uKind;
  vRot = uTime * (1.0 + aSeed.y * 2.0) + aSeed.z * 6.28;
}`;
const WX_FS = `
varying float vA;
varying float vKind;
varying float vRot;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a;
  vec3 col;
  if (vKind < 0.5) { a = smoothstep(0.5, 0.15, length(c)); col = vec3(0.95, 0.97, 1.0); }
  else {
    float cs = cos(vRot), sn = sin(vRot);
    vec2 r = vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs);
    a = smoothstep(0.5, 0.4, length(r * vec2(1.0, 2.2)));
    col = mix(vec3(0.85, 0.42, 0.12), vec3(0.95, 0.72, 0.2), step(0.0, r.x));
  }
  if (a * vA < 0.01) discard;
  gl_FragColor = vec4(col, a * vA);
  #include <colorspace_fragment>
}`;

export function createWeather(scene) {
  const N = 900;
  const R = rng(4711);
  const pos = new Float32Array(N * 3), seed = new Float32Array(N * 4);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (R() - 0.5) * 46; pos[i * 3 + 1] = R() * 18; pos[i * 3 + 2] = (R() - 0.5) * 46;
    seed[i * 4] = R(); seed[i * 4 + 1] = R(); seed[i * 4 + 2] = R(); seed[i * 4 + 3] = R();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const mat = new THREE.ShaderMaterial({
    vertexShader: WX_VS, fragmentShader: WX_FS, transparent: true, depthWrite: false, fog: false,
    uniforms: { uTime: { value: 0 }, uPx: { value: 1 }, uKind: { value: 0 }, uAlpha: { value: 0 }, uCenter: { value: new THREE.Vector3() } },
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 9;
  pts.visible = false;
  scene.add(pts);
  // sis tülleri: büyük, yumuşak, yere yakın dörtgenler
  const fog = new QuadBatch('puff', 40, THREE.NormalBlending);
  fog.mesh.renderOrder = 4;
  scene.add(fog.mesh);
  const fogPts = [];
  for (let i = 0; i < 40; i++) fogPts.push({ a: R() * TAU, r: 4 + R() * 40, y: 0.6 + R() * 1.8, s: 9 + R() * 10, sp: 0.02 + R() * 0.04 });
  let kind = 'none', alpha = 0, fogA = 0;
  const fogCol = new THREE.Color('#c9cfd8');
  return {
    set(k) { kind = k || 'none'; },
    get kind() { return kind; },
    update(dt, time, px, center, count, fogTint, night) {
      const wantP = kind === 'snow' || kind === 'leaves' ? 1 : 0;
      alpha += (wantP - alpha) * Math.min(1, dt * 0.8);
      pts.visible = alpha > 0.01 && count > 0;
      if (pts.visible) {
        g.setDrawRange(0, Math.min(N, count));
        const u = mat.uniforms;
        u.uTime.value = time; u.uPx.value = px; u.uKind.value = kind === 'leaves' ? 1 : 0;
        u.uAlpha.value = alpha * (kind === 'snow' ? 0.9 : 1); u.uCenter.value.copy(center);
      }
      const wantF = kind === 'fog' ? 1 : 0;
      fogA += (wantF - fogA) * Math.min(1, dt * 0.5);
      fog.begin();
      if (fogA > 0.01) {
        fogCol.set('#cfd6de');
        if (fogTint) fogCol.lerp(fogTint, 0.5);
        fogCol.multiplyScalar(1 - night * 0.6);
        const n = Math.min(40, Math.max(8, Math.round(count / 20)));
        for (let i = 0; i < n; i++) {
          const f = fogPts[i];
          const a = f.a + time * f.sp;
          fog.add(Math.sin(a) * f.r, f.y, Math.cos(a) * f.r, f.s, fogCol, 0.16 * fogA);
        }
      }
      fog.end(time);
    },
    dispose() { g.dispose(); mat.dispose(); fog.dispose(); scene.remove(pts); scene.remove(fog.mesh); },
  };
}

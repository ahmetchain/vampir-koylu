// Gökyüzü: degrade kubbe (güneş, ay), yıldızlar, alçak poligon bulutlar ve uzak dağ siluetleri.
import * as THREE from 'three';
import { rng, TAU } from './constants.js';

const SKY_VS = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;
const SKY_FS = `
uniform vec3 uTop, uHor, uSun, uSunDir, uMoonDir, uMoonCol;
uniform float uSunVis, uMoonVis, uGlow;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHor, uTop, pow(clamp(h * 1.6, 0.0, 1.0), 0.65));
  // güneş halesi ufukta yayılır
  float sd = max(dot(d, uSunDir), 0.0);
  float hz = 1.0 - clamp(abs(h) * 3.0, 0.0, 1.0);
  col += uSun * (pow(sd, 6.0) * 0.32 * uGlow * (0.4 + hz) + pow(sd, 90.0) * 0.6) * uSunVis;
  float disc = smoothstep(0.9988, 0.9992, sd);
  col = mix(col, uSun * 0.5 + vec3(1.0, 0.96, 0.85) * 0.75, disc * uSunVis);
  // ay: disk + hafif krater lekeleri + hale
  float md = max(dot(d, uMoonDir), 0.0);
  col += mix(vec3(0.55, 0.68, 1.0), uMoonCol, 0.5) * pow(md, 40.0) * 0.28 * uMoonVis;
  float mdisc = smoothstep(0.99935, 0.99955, md);
  vec3 mc = uMoonCol - 0.12 * smoothstep(0.4, 0.9, sin(d.x * 900.0) * sin(d.y * 700.0 + d.z * 500.0));
  col = mix(col, mc, mdisc * uMoonVis);
  // ufkun altı: sis rengine kaynar
  col = mix(col, uHor, smoothstep(0.0, -0.08, h));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

const STAR_VS = `
attribute float aSize;
attribute float aPhase;
uniform float uTime, uAlpha, uPx;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.9999;
  float tw = 0.65 + 0.35 * sin(uTime * (1.3 + aPhase) + aPhase * 17.0);
  vA = uAlpha * tw * smoothstep(0.0, 0.25, normalize(position).y);
  gl_PointSize = aSize * uPx;
}`;
const STAR_FS = `
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;

export function createSky(scene, q) {
  const group = new THREE.Group();
  group.name = 'sky';
  scene.add(group);

  const domeMat = new THREE.ShaderMaterial({
    vertexShader: SKY_VS, fragmentShader: SKY_FS, side: THREE.BackSide, depthWrite: false, depthTest: true, fog: false,
    uniforms: {
      uTop: { value: new THREE.Color() }, uHor: { value: new THREE.Color() }, uSun: { value: new THREE.Color() },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uMoonDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunVis: { value: 1 }, uMoonVis: { value: 0 }, uGlow: { value: 1 }, uMoonCol: { value: new THREE.Color(0.93, 0.95, 1.0) },
    },
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(450, 32, 16), domeMat);
  dome.renderOrder = -10;
  dome.frustumCulled = false;
  group.add(dome);

  // Yıldızlar
  const R = rng(77);
  const N = 700;
  const pos = new Float32Array(N * 3), size = new Float32Array(N), phase = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const u = R(), v = R();
    const th = u * TAU, y = 0.04 + Math.pow(v, 0.8) * 0.96;
    const r = Math.sqrt(1 - y * y);
    pos[i * 3] = Math.cos(th) * r * 420; pos[i * 3 + 1] = y * 420; pos[i * 3 + 2] = Math.sin(th) * r * 420;
    size[i] = 1.0 + Math.pow(R(), 6) * 3.2;
    phase[i] = R() * 3;
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  sg.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  sg.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  const starMat = new THREE.ShaderMaterial({
    vertexShader: STAR_VS, fragmentShader: STAR_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: { value: 0 }, uAlpha: { value: 0 }, uPx: { value: 1 } },
  });
  const stars = new THREE.Points(sg, starMat);
  stars.frustumCulled = false;
  stars.renderOrder = -9;
  group.add(stars);

  // Bulutlar: birkaç yassı çok yüzlü küme, tek geometri
  const clouds = buildClouds();
  group.add(clouds);

  // Uzak dağ siluetleri: iki halka, sis içinde katmanlı görünür
  const mountains = buildMountains();
  group.add(mountains);

  const api = {
    group,
    update(tod, time, camera, px, moonCol) {
      const u = domeMat.uniforms;
      if (moonCol) u.uMoonCol.value.copy(moonCol);
      u.uTop.value.copy(tod.top); u.uHor.value.copy(tod.hor); u.uSun.value.copy(tod.sun);
      u.uSunDir.value.copy(tod.sunDir); u.uMoonDir.value.copy(tod.moonDir);
      u.uSunVis.value = tod.sunVis; u.uMoonVis.value = tod.moonVis;
      u.uGlow.value = 0.6 + tod.dusk * 1.4;
      starMat.uniforms.uTime.value = time;
      starMat.uniforms.uAlpha.value = tod.stars;
      starMat.uniforms.uPx.value = px;
      stars.visible = tod.stars > 0.01;
      group.position.set(camera.position.x, 0, camera.position.z);
      // Bulut rengi: gündüz beyaz, gün batımında pembe-turuncu, gece koyu mavi
      cloudMat.color.copy(tod.hor).lerp(tod.sun, 0.35).lerp(WHITE, 0.55 * (1 - tod.night));
      cloudMat.color.multiplyScalar(0.55 + 0.45 * (1 - tod.night * 0.8));
      clouds.rotation.y = time * 0.004;
      clouds.visible = q.clouds;
      mountMat.uniforms.uFar.value.copy(tod.hor);
      mountMat.uniforms.uNear.value.copy(tod.gnd).lerp(tod.hor, 0.35).multiplyScalar(0.9);
      mountMat.uniforms.uTint.value.copy(tod.sky);
    },
    dispose() {
      group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      domeMat.dispose(); starMat.dispose(); cloudMat.dispose(); mountMat.dispose();
      scene.remove(group);
    },
  };
  return api;
}

const WHITE = new THREE.Color(1, 1, 1);
let cloudMat = null;
let mountMat = null;

function buildClouds() {
  const R = rng(4242);
  const geos = [];
  for (let c = 0; c < 11; c++) {
    const ang = R() * TAU, dist = 210 + R() * 120, y = 70 + R() * 55;
    const puffs = 3 + Math.floor(R() * 4);
    for (let p = 0; p < puffs; p++) {
      const g = new THREE.IcosahedronGeometry(1, 0);
      const s = 9 + R() * 12;
      g.scale(s * (1.3 + R() * 0.6), s * 0.55, s);
      g.translate((p - puffs / 2) * 13 + R() * 5, R() * 4, R() * 8);
      g.rotateY(ang + Math.PI / 2);
      g.translate(Math.cos(ang) * dist, y, Math.sin(ang) * dist);
      geos.push(g);
    }
  }
  const merged = mergeSimple(geos);
  // Alt yüzler koyu: köşe rengiyle yumuşak gölgeleme
  const pos = merged.getAttribute('position');
  const col = new Float32Array(pos.count * 3);
  merged.computeVertexNormals();
  const nrm = merged.getAttribute('normal');
  for (let i = 0; i < pos.count; i++) {
    const k = 0.72 + 0.28 * Math.max(0, nrm.getY(i)) + 0.08 * nrm.getX(i);
    col[i * 3] = k; col[i * 3 + 1] = k; col[i * 3 + 2] = k * 1.03;
  }
  merged.setAttribute('color', new THREE.BufferAttribute(col, 3));
  cloudMat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, transparent: true, opacity: 0.92, depthWrite: false });
  const m = new THREE.Mesh(merged, cloudMat);
  m.renderOrder = -8;
  m.frustumCulled = false;
  return m;
}

function buildMountains() {
  const R = rng(9001);
  const pos = [], col = [], idx = [];
  const rings = [{ r: 380, h: 125, n: 70, k: 0 }, { r: 300, h: 62, n: 90, k: 1 }]; // önce uzak sıra çizilir
  for (const ring of rings) {
    const base = pos.length / 3;
    let prev = 0;
    for (let i = 0; i <= ring.n; i++) {
      const a = (i / ring.n) * TAU;
      let hh = ring.h * (0.35 + 0.65 * Math.abs(Math.sin(a * 3.1 + ring.k) * 0.6 + Math.sin(a * 7.3 + 1.7 * ring.k) * 0.3 + (R() - 0.5) * 0.35));
      if (i === ring.n) hh = prev; // halka kapanışı yaklaşık
      if (i === 0) prev = hh;
      const x = Math.cos(a) * ring.r, z = Math.sin(a) * ring.r;
      pos.push(x, -20, z, x, hh, z);
      col.push(ring.k, 0, 0, ring.k, 1, 0);
      if (i < ring.n) {
        const v = base + i * 2;
        idx.push(v, v + 2, v + 1, v + 1, v + 2, v + 3);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  mountMat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide, fog: false, depthWrite: false,
    uniforms: { uFar: { value: new THREE.Color() }, uNear: { value: new THREE.Color() }, uTint: { value: new THREE.Color() } },
    vertexShader: `attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: `uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yakın sıra koyu ve tok, uzak sıra ufuk rengine yakın (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const m = new THREE.Mesh(g, mountMat);
  m.renderOrder = -7;
  m.frustumCulled = false;
  return m;
}

function mergeSimple(geos) {
  let n = 0;
  for (const g of geos) n += g.getAttribute('position').count;
  const pos = new Float32Array(n * 3);
  let o = 0;
  for (const g of geos) { const a = g.getAttribute('position').array; pos.set(a, o); o += a.length; g.dispose(); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return out;
}

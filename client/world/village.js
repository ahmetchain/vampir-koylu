// Köy: evler (tür/doku başına örneklenmiş -> az çizim çağrısı), kapı animasyonu, pencere ışığı, sahip rengi,
// meydan dekoru, fenerler, orman halkası, mezarlık ve mezar taşları.
import * as THREE from 'three';
import * as A from './assets.js';
import { HOUSE_INFO, toWorld } from './layout.js';
import { outlineMat } from './style.js';
import { buildManor, hasManor, manorMaterials, setManorNight } from './manors.js';
import { rng, TAU, clamp, damp, lerp, COLOR_HEX, smooth } from './constants.js';

const MAXH = 20;
const tmpM = new THREE.Matrix4();
const tmpM2 = new THREE.Matrix4();
const tmpQ = new THREE.Quaternion();
const tmpQ2 = new THREE.Quaternion();
const tmpV = new THREE.Vector3();
const tmpS = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const WIN_DAY = new THREE.Color(0.16, 0.11, 0.08);
const WIN_NIGHT = new THREE.Color('#ffc46b').multiplyScalar(1.25);
const WIN_DARK = new THREE.Color(0.05, 0.045, 0.06);
const DEFAULT_OWNER = new THREE.Color('#c9b48a');

// Bir prop şablonundan, verilen matrislerle örneklenmiş meshler üret
export function instancedProp(template, matrices, opts = {}) {
  const group = new THREE.Group();
  if (!template || !matrices.length) return group;
  template.updateWorldMatrix(true, true);
  const inv = new THREE.Matrix4().copy(template.matrixWorld).invert();
  template.traverse((o) => {
    if (!o.isMesh) return;
    const rel = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    // çoklu malzemeli tek mesh nadir; ilkini kullan
    const im = new THREE.InstancedMesh(o.geometry, opts.material || mats[0], matrices.length);
    for (let i = 0; i < matrices.length; i++) im.setMatrixAt(i, tmpM.multiplyMatrices(matrices[i], rel));
    im.instanceMatrix.needsUpdate = true;
    im.castShadow = opts.cast !== false;
    im.receiveShadow = opts.receive !== false;
    im.computeBoundingSphere();
    group.add(im);
  });
  return group;
}

// Dekorun büyüme animasyonu: köşe başına prop kökeni (aOrigin) ve ortak uGrow (0..1)
export const GROW = { value: 1 };
const growMats = new Map();
function growMat(src) {
  if (growMats.has(src)) return growMats.get(src);
  const m = src.clone();
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uGrow = GROW;
    sh.vertexShader = 'uniform float uGrow;\nattribute vec3 aOrigin;\n' + sh.vertexShader.replace('#include <begin_vertex>',
      '#include <begin_vertex>\n{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);\n  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;\n  transformed = aOrigin + (transformed - aOrigin) * g; }');
  };
  m.customProgramCacheKey = () => 'grow|' + src.uuid;
  growMats.set(src, m);
  return m;
}
export function disposeGrowMats() { for (const m of growMats.values()) m.dispose(); }

// Statik dekoru malzeme başına tek geometride birleştir: yüzlerce prop -> malzeme sayısı kadar çizim çağrısı
const tmpN = new THREE.Matrix3();
const tmpP = new THREE.Vector3();
export function mergedProps(list) {
  const group = new THREE.Group();
  const buckets = new Map(); // malzeme+gölge -> { mat, cast, parts: [{geo, m}] }
  for (const { tpl, mats, cast } of list) {
    tpl.updateWorldMatrix(true, true);
    const inv = new THREE.Matrix4().copy(tpl.matrixWorld).invert();
    tpl.traverse((o) => {
      if (!o.isMesh) return;
      const rel = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
      const mat = Array.isArray(o.material) ? o.material[0] : o.material;
      const key = mat.uuid + (cast ? '|c' : '');
      if (!buckets.has(key)) buckets.set(key, { mat, cast, parts: [] });
      const b = buckets.get(key);
      for (const m of mats) b.parts.push({ geo: o.geometry, m: new THREE.Matrix4().multiplyMatrices(m, rel), org: new THREE.Vector3().setFromMatrixPosition(m) });
    });
  }
  for (const b of buckets.values()) {
    let nv = 0, ni = 0;
    for (const p of b.parts) { nv += p.geo.attributes.position.count; ni += p.geo.index ? p.geo.index.count : p.geo.attributes.position.count; }
    const pos = new Float32Array(nv * 3), nrm = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), org = new Float32Array(nv * 3);
    const idx = nv > 65535 ? new Uint32Array(ni) : new Uint16Array(ni);
    let vo = 0, io = 0;
    for (const p of b.parts) {
      const g = p.geo;
      const P = g.attributes.position, N = g.attributes.normal, U = g.attributes.uv;
      tmpN.getNormalMatrix(p.m);
      for (let i = 0; i < P.count; i++) {
        tmpP.fromBufferAttribute(P, i).applyMatrix4(p.m);
        pos[(vo + i) * 3] = tmpP.x; pos[(vo + i) * 3 + 1] = tmpP.y; pos[(vo + i) * 3 + 2] = tmpP.z;
        if (N) { tmpP.fromBufferAttribute(N, i).applyMatrix3(tmpN).normalize(); nrm[(vo + i) * 3] = tmpP.x; nrm[(vo + i) * 3 + 1] = tmpP.y; nrm[(vo + i) * 3 + 2] = tmpP.z; }
        if (U) { uv[(vo + i) * 2] = U.getX(i); uv[(vo + i) * 2 + 1] = U.getY(i); }
        org[(vo + i) * 3] = p.org.x; org[(vo + i) * 3 + 1] = p.org.y; org[(vo + i) * 3 + 2] = p.org.z;
      }
      if (g.index) { const I = g.index.array; for (let k = 0; k < I.length; k++) idx[io + k] = I[k] + vo; io += I.length; }
      else { for (let k = 0; k < P.count; k++) idx[io + k] = vo + k; io += P.count; }
      vo += P.count;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setAttribute('aOrigin', new THREE.BufferAttribute(org, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, growMat(b.mat));
    mesh.castShadow = b.cast;
    mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false;
    mesh.userData.merged = true;
    group.add(mesh);
  }
  return group;
}

function compose(x, y, z, rotY, s = 1) {
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(UP, rotY), new THREE.Vector3(s, s, s));
}

// Kabuk için sade geometri: yalnız konum + normal + dizin (öznitelik nesneleri paylaşılır, kopya yok; dizinsizse üretilir)
const outlineGeos = new WeakMap();
function outlineGeometry(geometry) {
  let g = outlineGeos.get(geometry);
  if (g) return g;
  const P = geometry.attributes.position;
  let N = geometry.attributes.normal;
  if (!P) throw new Error('konum yok');
  if (!N) { const t = new THREE.BufferGeometry(); t.setAttribute('position', P); if (geometry.index) t.setIndex(geometry.index); t.computeVertexNormals(); N = t.attributes.normal; }
  g = new THREE.BufferGeometry();
  g.setAttribute('position', P);
  g.setAttribute('normal', N);
  if (geometry.index) g.setIndex(geometry.index);
  else { const n = P.count, a = n > 65535 ? new Uint32Array(n) : new Uint16Array(n); for (let i = 0; i < n; i++) a[i] = i; g.setIndex(new THREE.BufferAttribute(a, 1)); }
  outlineGeos.set(geometry, g);
  return g;
}

// ---------- Ev malzemesi (look.houseMat) ----------
// Yüzeyler, ev dokusu atlasındaki HÜCREDEN (16 sütun x 4 satır renk paleti; her yüz tek hücreyi örnekler) tanınır
// (house-0..3.glb incelenerek): fantasy-town: (sütun 3, satır 2) sıvalı duvar, (11, 3) tahta duvar, (9, 3) ahşap çatkı/
// köşe dikmeleri/pencere-kapı çerçeveleri, (15, 3) baca; holiday (kütük ev): (3, 2) kütük duvar, (11, 3) baca. Çatı, saçak,
// pencere camı, kapı ve flama başka hücrelerde ya da başka örneklerde: kendi görünümünde kalır.
//  - duvar: seçilen malzemenin deseni;
//  - çatkı/çerçeve: taş türlerinde (taş, kesme taş, tuğla, mermer) iri yontma taş köşe/çerçeve taşları ("komple taş ev"),
//    sıva ve koyu ahşapta ahşap kalır (sıvada kendi ahşabı, koyu ahşapta daha koyu kiriş), altın süslü mermerde altın;
//  - baca: taş türlerinde kendi malzemesi, sıva/ahşapta moloz taş;
//  - dipte (y < ~0.45 m) taş türlerinde daha koyu, iri taşlı subasman (temel).
// Malzeme örnek başınadır: gövde örneğinin toplu ağ rengi alfa kanalı = 1 + houseMat (rgb 1 kalır, renk çarpımı nötr);
// diğer örnekler (kapı, flama) 1 => kendi dokusu. Böylece yeni malzeme/toplu ağ/çizim çağrısı EKLENMEZ: desen ev-yerel
// konumdan gölgelendiricide üretilir; aydınlatma (gece dahil) dokulu duvarla aynıdır. Önizleme (preview.js) düz ağ
// kullanır: HM_UNIFORM ile tek tip değer.
export const HOUSE_MAT_GLSL = /* glsl */`
varying vec3 vHmP;
varying vec3 vHmN;
#ifdef HM_UNIFORM
uniform float uHouseMat;
#endif
float hmH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec2 hmH2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
float hmN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hmH(i), hmH(i + vec2(1.0, 0.0)), f.x), mix(hmH(i + vec2(0.0, 1.0)), hmH(i + vec2(1.0, 1.0)), f.x), f.y); }
// derz: blok içinde 1, derzde 0 (kenar yumuşatmalı; uzakta fwidth ile genişler, titreşmez)
float hmJ(float d, float w) { float aa = fwidth(d) * 1.2 + 1e-4; return smoothstep(w, w + aa, d); }
// sıralı blok örgüsü: rh sıra yüksekliği, bw blok genişliği, sh sıra kayması (bw oranı); xy = (hücre, sıra), z = derze uzaklık
vec3 hmBond(vec2 q, float rh, float bw, float sh, float jit) {
  float row = floor(q.y / rh);
  float off = (sh > 0.0 ? mod(row, 2.0) * sh : hmH(vec2(row, 3.1)) * jit) * bw;
  float x = q.x + off;
  float cx = floor(x / bw);
  float fx = fract(x / bw) * bw, fy = fract(q.y / rh) * rh;
  return vec3(cx, row, min(min(fx, bw - fx), min(fy, rh - fy)));
}
// moloz taş: yassı Voronoi hücreleri (yatay uzun, düzensiz); xy = hücre kimliği, z = harca uzaklık (≈ d2 - d1)
vec3 hmRubble(vec2 q) {
  q *= vec2(2.3, 3.4);
  vec2 i = floor(q), f = fract(q);
  float d1 = 9.0, d2 = 9.0; vec2 id = vec2(0.0);
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y));
    vec2 o = 0.15 + 0.7 * hmH2(i + g);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; id = i + g; } else if (d < d2) d2 = d;
  }
  return vec3(id, (d2 - d1) * 0.17);
}
vec3 hmRubbleCol(vec2 q, float dark) {
  vec3 r = hmRubble(q);
  float v = hmH(r.xy);
  vec3 c = mix(vec3(0.66, 0.63, 0.57), vec3(0.86, 0.81, 0.72), v);
  c = mix(c, vec3(0.62, 0.64, 0.66), step(0.72, hmH(r.xy + 9.1)) * 0.7);   // seyrek mavimsi taş
  c = mix(c, vec3(0.74, 0.64, 0.5), step(0.86, hmH(r.xy + 4.7)) * 0.6);    // seyrek sıcak taş
  c *= (1.0 - dark) * (0.9 + 0.12 * hmN(q * 11.0)) * (0.8 + 0.2 * smoothstep(0.0, 0.05, r.z));   // taş kenarı yuvarlak
  return mix(vec3(0.5, 0.48, 0.44) * (1.0 - dark * 0.6), c, hmJ(r.z, 0.008));
}
// iri yontma taş (köşe taşları, çerçeveler, subasman): düzgün büyük bloklar
vec3 hmAshlar(vec2 q, vec3 a, vec3 b, vec3 joint) {
  vec3 k = hmBond(q, 0.36, 0.52, 0.5, 0.0);
  vec3 c = mix(a, b, hmH(k.xy)) * (0.93 + 0.08 * hmN(q * 7.0)) * (0.9 + 0.1 * smoothstep(0.0, 0.04, k.z));
  return mix(joint, c, hmJ(k.z, 0.011));
}
// m: houseMat (1..7), p/n: ev-yerel konum ve normal, kind: 0 duvar, 1 çatkı/çerçeve, 2 baca
vec3 hmWall(float m, vec3 p, vec3 n, float kind, vec3 orig) {
  vec3 an = abs(n);
  vec2 q = an.x > an.z ? vec2(p.z, p.y) : vec2(p.x, p.y);
  if (an.y > 0.75) q = p.xz;
  bool stoneKind = m < 2.5 || m > 4.5;     // taş, kesme taş, tuğla, mermer
  // tek çıkış noktası (bazı sürücüler erken dönüşlü dallarda uyarı verir): col sRGB tutulur, sonda doğrusala çevrilir
  vec3 col = pow(orig, vec3(0.4545));
  float plinth = 0.0;
  if (kind > 0.5 && kind < 1.5) {          // çatkı / pencere-kapı çerçevesi / köşe dikmesi
    if (m > 6.5) col = vec3(0.9, 0.7, 0.26) * (0.88 + 0.2 * hmN(q * 9.0));
    else if (m > 5.5) col = hmAshlar(q, vec3(0.9, 0.89, 0.86), vec3(0.97, 0.96, 0.93), vec3(0.72, 0.7, 0.66));
    else if (m > 4.5) col = hmAshlar(q, vec3(0.8, 0.75, 0.66), vec3(0.88, 0.83, 0.74), vec3(0.6, 0.55, 0.48));
    else if (m > 3.5) col *= vec3(0.75, 0.72, 0.7);                   // koyu ahşapta daha koyu kiriş
    else if (m > 2.5) col *= 1.0;                                      // sıvada kendi ahşabı (çatkılı badanalı ev)
    else if (m > 1.5) col = hmAshlar(q, vec3(0.72, 0.66, 0.55), vec3(0.78, 0.72, 0.6), vec3(0.5, 0.46, 0.4));
    else col = hmAshlar(q, vec3(0.7, 0.68, 0.64), vec3(0.8, 0.78, 0.73), vec3(0.42, 0.4, 0.37));
  } else if (kind > 1.5 && !stoneKind) {
    col = hmRubbleCol(q, 0.08);            // baca: sıva/ahşapta taş baca
  } else {
  plinth = stoneKind && kind < 0.5 ? 1.0 - smoothstep(0.43, 0.46, p.y) : 0.0;
  if (m < 1.5) {          // 1 taş: düzensiz moloz taş, açık harç
    col = hmRubbleCol(q, 0.0);
  } else if (m < 2.5) {   // 2 kesme taş: düzgün iri bloklar, ince derz
    vec3 b = hmBond(q, 0.4, 0.78, 0.5, 0.0);
    col = mix(vec3(0.8, 0.74, 0.62), vec3(0.9, 0.85, 0.74), hmH(b.xy)) * (0.95 + 0.07 * hmN(q * 6.0)) * (0.9 + 0.1 * smoothstep(0.0, 0.035, b.z));
    col = mix(vec3(0.58, 0.53, 0.45), col, hmJ(b.z, 0.012));
  } else if (m < 3.5) {   // 3 kerpiç sıva: beyaz badana, altta toprak rengi süpürgelik
    col = vec3(0.95, 0.93, 0.88) * (0.95 + 0.05 * hmN(q * 3.0) + 0.03 * hmN(q * 17.0));
    col = mix(col, vec3(0.77, 0.7, 0.6) * (0.92 + 0.1 * hmN(q * 8.0)), 1.0 - smoothstep(0.42, 0.46, p.y));
  } else if (m < 4.5) {   // 4 koyu ahşap: yatay tahtalar, damar, ek yerleri
    vec3 b = hmBond(q, 0.2, 2.6, 0.0, 1.0);
    col = mix(vec3(0.27, 0.17, 0.11), vec3(0.37, 0.24, 0.15), hmH(vec2(b.y, 1.3)));
    col *= 0.86 + 0.18 * hmN(vec2(q.x * 2.5, q.y * 40.0));
    col = mix(vec3(0.12, 0.075, 0.05), col, hmJ(b.z, 0.012));
  } else if (m < 5.5) {   // 5 tuğla: şaşırtmalı örgü, açık harç
    vec3 b = hmBond(q, 0.15, 0.32, 0.5, 0.0);
    col = mix(vec3(0.57, 0.25, 0.17), vec3(0.7, 0.33, 0.21), hmH(b.xy));
    col = mix(col, vec3(0.42, 0.18, 0.13), step(0.85, hmH(b.xy + 3.3)) * 0.7);
    col = mix(vec3(0.83, 0.78, 0.69), col, hmJ(b.z, 0.014));
  } else {                // 6 mermer / 7 altın süslemeli mermer: iri levhalar, yumuşak damarlar
    vec3 b = hmBond(q, 0.9, 1.1, 0.5, 0.0);
    float vein = abs(sin((q.x * 1.3 + q.y * 0.8) * 3.0 + hmN(q * 2.2 + b.xy) * 6.0));
    col = vec3(0.95, 0.94, 0.91) - vec3(0.18, 0.18, 0.16) * (1.0 - smoothstep(0.0, 0.06, vein)) * hmN(q * 1.7 + 3.0);
    col *= 0.97 + 0.04 * hmN(q * 5.0);
    col = mix(vec3(0.76, 0.74, 0.7), col, hmJ(b.z, 0.006));
    if (m > 6.5) {        // altın kuşaklar (subasman üstü ve pencere üstü hizası) ve altın derzler
      vec3 gold = vec3(0.92, 0.72, 0.26) * (0.9 + 0.2 * hmN(q * 12.0));
      float band = (step(0.46, p.y) - step(0.56, p.y)) + (step(2.62, p.y) - step(2.72, p.y));
      // altın derzler uzakta incelir (küçük resimde ev altın sarısına boğulmasın)
      float gj = (1.0 - hmJ(b.z, 0.012)) * (1.0 - smoothstep(0.008, 0.03, fwidth(b.z)));
      col = mix(col, gold, clamp(band + gj, 0.0, 1.0));
    }
  }
  // subasman (temel): taş türlerinde dipte daha koyu iri taş sırası
  if (plinth > 0.0) {
    vec3 pl = m > 5.5 ? hmAshlar(q, vec3(0.72, 0.71, 0.68), vec3(0.8, 0.79, 0.76), vec3(0.55, 0.54, 0.51))
      : hmAshlar(q * vec2(0.8, 1.0), vec3(0.46, 0.44, 0.41), vec3(0.56, 0.53, 0.49), vec3(0.3, 0.29, 0.27));
    col = mix(col, pl, plinth);
  }
  col *= 0.86 + 0.14 * smoothstep(0.0, 0.6, p.y);   // dipte hafif nem/gölge
  }
  return pow(col, vec3(2.2));                        // sRGB -> doğrusal (doku örnekleri de doğrusal)
}`;
export function applyHouseMat(m, kit, uniform = null) {
  m.defines = { ...(m.defines || {}), ...(kit === 'holiday' ? {} : { HM_FT: '' }), ...(uniform ? { HM_UNIFORM: '' } : {}) };
  const prev = m.onBeforeCompile;
  m.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    if (uniform) sh.uniforms.uHouseMat = uniform;
    sh.vertexShader = 'varying vec3 vHmP;\nvarying vec3 vHmN;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vHmP = transformed; vHmN = objectNormal;');
    sh.fragmentShader = HOUSE_MAT_GLSL + '\n' + sh.fragmentShader
      .replace('#include <map_fragment>', `#include <map_fragment>
  {
    float hm = 0.0;
    #ifdef HM_UNIFORM
      hm = uHouseMat;
    #elif defined( USE_COLOR_ALPHA )
      hm = floor(vColor.a + 0.5) - 1.0;
    #endif
    #ifdef USE_MAP
    if (hm > 0.5) {
      vec2 sw = floor(vMapUv * vec2(16.0, 4.0));
      float kind = -1.0;
      #ifdef HM_FT
        if ((sw.y == 2.0 && sw.x == 3.0) || (sw.y == 3.0 && sw.x == 11.0)) kind = 0.0;
        else if (sw.y == 3.0 && sw.x == 9.0) kind = 1.0;
        else if (sw.y == 3.0 && sw.x == 15.0) kind = 2.0;
      #else
        if (sw.y == 2.0 && sw.x == 3.0) kind = 0.0;
        else if (sw.y == 3.0 && sw.x == 11.0) kind = 2.0;
      #endif
      if (kind > -0.5) diffuseColor.rgb = hmWall(hm, vHmP, normalize(vHmN), kind, diffuseColor.rgb);
    }
    #endif
  }`)
      .replace('#include <color_fragment>', '#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n  diffuseColor.rgb *= vColor.rgb;\n#endif');
  };
  m.customProgramCacheKey = () => 'vkw-housemat2|' + kit + (uniform ? '|u' : '|b');
  return m;
}
export const isHouseWallMat = (name) => /^(fantasy-town|holiday)/.test(name || '');
const HM_COL = new THREE.Vector4(1, 1, 1, 1);
const hmVec = (m) => HM_COL.set(1, 1, 1, 1 + (m | 0));

// Evler: malzeme başına TEK çizim (BatchedMesh) - tüm ev türleri ve kapılar aynı toplu ağda, örnek başına matris ve renk.
// Toplu ağ desteklenmezse (öznitelikler uyuşmazsa) parça kendi InstancedMesh'ine düşer.
// Malzemeler kopyalanır: aynı malzemeyi düz Mesh ile paylaşmak her çizimde program değişimine yol açar.
class HouseBatches {
  constructor(root) {
    this.root = root;
    this.map = new Map();   // malzeme uuid -> { mesh, geo: Map(geometry -> id), maxI, maxV, maxIdx, usedV, usedIdx }
  }
  batchFor(mat, noOutline) {
    let b = this.map.get(mat.uuid);
    if (!b) {
      const m = mat.clone();
      m.name = mat.name;
      m.userData = { ...mat.userData, houseBatch: true };
      if (isHouseWallMat(mat.name)) applyHouseMat(m, mat.name.startsWith('holiday') ? 'holiday' : 'ft');   // ev malzemesi (örnek başına)
      const mesh = new THREE.BatchedMesh(64, 16384, 32768, m);
      mesh.sortObjects = false;          // opak: sıralamaya gerek yok
      mesh.perObjectFrustumCulled = true;
      mesh.frustumCulled = false;
      mesh.name = 'houses-' + mat.name;
      this.root.add(mesh);
      b = { mesh, geo: new Map(), maxI: 64, maxV: 16384, maxIdx: 32768, usedV: 0, usedIdx: 0, cast: true, out: null };
      // "çizim" görünümü için dış çizgi aynası (aynı geometri ve örnekler, gizli başlar). Kabuk malzemesi kaynak malzemeden
      // bağımsız olduğu için TÜM malzemelerin kabukları tek ortak toplu ağda: çizim görünümünde tek çizim çağrısı.
      if (!noOutline) b.out = this.outline();
      this.map.set(mat.uuid, b);
    }
    return b;
  }
  outline() {
    if (!this.out) {
      const o = { maxI: 128, maxV: 32768, maxIdx: 65536, usedV: 0, usedIdx: 0 };
      const out = new THREE.BatchedMesh(o.maxI, o.maxV, o.maxIdx, outlineMat(0.05));
      out.sortObjects = false; out.perObjectFrustumCulled = true; out.frustumCulled = false;
      out.visible = !!this.outlines; out.castShadow = false; out.receiveShadow = false;
      out.name = 'houses-outline';
      this.root.add(out);
      this.out = out; this.outCap = o;
    }
    return this.out;
  }
  geometryId(b, geometry) {
    if (b.geo.has(geometry)) return b.geo.get(geometry);
    const nv = geometry.attributes.position.count;
    const ni = geometry.index ? geometry.index.count : 0;
    if (b.usedV + nv > b.maxV || b.usedIdx + ni > b.maxIdx) {
      b.maxV = Math.max(b.maxV * 2, b.usedV + nv); b.maxIdx = Math.max(b.maxIdx * 2, b.usedIdx + ni);
      b.mesh.setGeometrySize(b.maxV, b.maxIdx);
    }
    const id = b.mesh.addGeometry(geometry);
    if (b.out) {
      // ortak kabuk ağı yalnızca konum + normal + dizin taşır (malzemelerin öznitelik kümeleri farklı olabilir)
      try {
        const og = outlineGeometry(geometry);
        const onv = og.attributes.position.count, oni = og.index.count;
        const o = this.outCap;
        if (o.usedV + onv > o.maxV || o.usedIdx + oni > o.maxIdx) {
          o.maxV = Math.max(o.maxV * 2, o.usedV + onv); o.maxIdx = Math.max(o.maxIdx * 2, o.usedIdx + oni);
          b.out.setGeometrySize(o.maxV, o.maxIdx);
        }
        const oid = b.out.addGeometry(og);
        b.outGeo = (b.outGeo || new Map()).set(id, oid);
        o.usedV += onv; o.usedIdx += oni;
      } catch (e) { console.warn('[VKWorld] ev dış çizgisi eklenemedi', e); }
    }
    b.usedV += nv; b.usedIdx += ni;
    b.geo.set(geometry, id);
    return id;
  }
  addInstance(b, gid) {
    if (b.mesh.instanceCount >= b.maxI) { b.maxI *= 2; b.mesh.setInstanceCount(b.maxI); }
    const id = b.mesh.addInstance(gid);
    if (b.out && b.outGeo && b.outGeo.has(gid)) {
      const o = this.outCap;
      if (b.out.instanceCount >= o.maxI) { o.maxI *= 2; b.out.setInstanceCount(o.maxI); }
      b.outIds = b.outIds || new Map(); b.outIds.set(id, b.out.addInstance(b.outGeo.get(gid)));
    }
    return id;
  }
  // örneğin kabuk karşılığı (yoksa undefined)
  outId(b, id) { return b.out && b.outIds ? b.outIds.get(id) : undefined; }
  setOutlines(on) { this.outlines = on; if (this.out) this.out.visible = on; }
  dispose() {
    for (const b of this.map.values()) { b.mesh.parent && b.mesh.parent.remove(b.mesh); b.mesh.dispose(); b.mesh.material.dispose(); }
    if (this.out) { this.out.parent && this.out.parent.remove(this.out); this.out.dispose(); this.out = null; }
    this.map.clear();
  }
}

// Prosedürel ev eklentileri (manors.js: Saray + 6..11): malzeme türü başına TEK paylaşılan kaynak malzeme -> tek toplu ağ.
// Toplu ağların malzeme kopyaları gece/gündüz için kare başı bir kez güncellenir (manorLive).
let manorSrc = null;
const manorLive = { deco: [], glow: [], gold: [], pbody: [] };
const PALACE_HALO = new THREE.Color('#f7c82a');   // saray: gece altın hale
const HOUSE_DOME_SKIN = 5;   // look.house 5 (Saray, sahibe özel)
const MANOR_EXTRA_H = { 5: 5, 6: 0.6, 9: 1.2 };   // eklentinin evin üstüne taştığı yükseklik (görünürlük kutusu)
const tmpSpin = new THREE.Matrix4();
const tmpSpinQ = new THREE.Quaternion();
const ZAXIS = new THREE.Vector3(0, 0, 1);
// Tür+doku başına ev grubu (parçalar ortak toplu ağlarda)
class HouseGroup {
  constructor(type, variant, skin, root, batches) {
    this.type = type; this.variant = variant; this.skin = skin;
    this.group = new THREE.Group();
    this.parts = [];
    this.list = [];
    const gltf = A.get(`houses/house-${type}.glb`);
    const house = gltf.scene.children[0];
    house.updateWorldMatrix(true, true);
    const inv = new THREE.Matrix4().copy(house.matrixWorld).invert();
    for (const nodeName of ['body', 'door', 'banner']) {
      const node = house.getObjectByName(nodeName);
      if (!node) continue;
      const nodeM = new THREE.Matrix4().multiplyMatrices(inv, node.matrixWorld);
      const nodeInv = new THREE.Matrix4().copy(node.matrixWorld).invert();
      node.traverse((o) => {
        if (!o.isMesh) return;
        const local = new THREE.Matrix4().multiplyMatrices(nodeInv, o.matrixWorld);
        let mat = o.material;
        let colorMode = null;
        if (mat.name === 'window') colorMode = 'window';
        else if (mat.name.startsWith('tint')) { colorMode = 'owner'; mat = A.tinted(mat.name, '#ffffff'); }
        else if (skin && (mat.name === 'fantasy-town' || mat.name === 'holiday')) mat = A.houseSkinMaterial(skin, mat.name) || mat;   // ev görünümü (look.house)
        else if (variant === 1 && mat.name === 'fantasy-town') mat = A.altKitMaterial();
        const part = { kind: nodeName, nodeM, local, colorMode, nodePos: new THREE.Vector3().setFromMatrixPosition(nodeM), nodeQ: new THREE.Quaternion().setFromRotationMatrix(nodeM), ids: [] };
        part.hm = nodeName === 'body' && !colorMode && isHouseWallMat(mat.name);   // ev malzemesi bu parçanın duvarlarına uygulanır
        try {
          const b = batches.batchFor(mat, colorMode === 'window');
          part.batch = b; part.batches = batches;
          part.gid = batches.geometryId(b, o.geometry);
          if (colorMode === 'window') { b.mesh.castShadow = false; b.mesh.receiveShadow = false; } else { b.mesh.castShadow = true; b.mesh.receiveShadow = true; }
        } catch (e) {
          // yedek: ayrı örnekli ağ
          part.batch = null;
          const im = new THREE.InstancedMesh(o.geometry, mat, MAXH);
          im.count = 0;
          im.castShadow = colorMode !== 'window';
          im.receiveShadow = colorMode !== 'window';
          im.frustumCulled = false;
          if (colorMode) im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAXH * 3).fill(1), 3);
          this.group.add(im);
          part.im = im;
        }
        this.parts.push(part);
      });
    }
    if (hasManor(skin)) this.addManor(skin, HOUSE_INFO[type], batches);
    root.add(this.group);
  }
  // Saray ve 6..11 görünümleri (manors.js): ev üstüne prosedürel parçalar; malzeme türü başına bir toplu ağ (deco/glow/
  // gold/pbody), ek çizim çağrısı yok denecek kadar az. 'spin' parçası (değirmen kanadı) her karede döndürülür.
  addManor(skin, info, batches) {
    let ex;
    try { ex = buildManor(skin, info); } catch (e) { return; /* eklenti yoksa ev yine çizilir */ }
    if (!ex) return;
    if (!manorSrc) manorSrc = manorMaterials();
    for (const p of ex.parts) {
      const part = { kind: p.spin ? 'spin' : 'extra', nodeM: new THREE.Matrix4(), local: new THREE.Matrix4(), colorMode: null, nodePos: new THREE.Vector3(), nodeQ: new THREE.Quaternion(), ids: [] };
      if (p.spin) { part.pivot = new THREE.Vector3(...p.spin.pivot); part.speed = p.spin.speed || 1; this.hasSpin = true; }
      try {
        const glow = p.mat === 'glow';
        const b = batches.batchFor(manorSrc[p.mat], glow);
        part.batch = b; part.batches = batches;
        part.gid = batches.geometryId(b, p.geo);
        b.mesh.castShadow = !glow; b.mesh.receiveShadow = false;
        const lst = manorLive[p.mat];
        if (lst && lst.indexOf(b.mesh.material) < 0) lst.push(b.mesh.material);
        this.parts.push(part);
      } catch (e) { /* eklenti yoksa ev yine çizilir */ }
    }
  }
  spinMatrix(p, hm, angle) {
    return tmpSpin.compose(p.pivot, tmpSpinQ.setFromAxisAngle(ZAXIS, angle * p.speed), tmpS.set(1, 1, 1)).premultiply(hm);
  }
  // Yalnızca dönen parçaların matrislerini yaz (kare başı; evin kendisi değişmediyse tüm ev yeniden yazılmaz)
  writeSpin(angle) {
    if (!this.hasSpin) return;
    for (let i = 0; i < this.list.length; i++) {
      const h = this.list[i];
      const hm = tmpM2.compose(tmpV.set(h.cx, 0, h.cz), tmpQ.setFromAxisAngle(UP, h.crot), tmpS.set(h.scale, h.scale * h.scaleY, h.scale));
      for (const p of this.parts) if (p.kind === 'spin' && p.ids.length > i) this.setM(p, i, this.spinMatrix(p, hm, angle + h.seat * 0.7));
    }
  }  // örnek sayısını listeye eşitle (fazlası gizlenir)
  ensure(p, n) {
    if (!p.batch) { p.im.count = n; return; }
    const mesh = p.batch.mesh;
    while (p.ids.length < n) p.ids.push(p.batches.addInstance(p.batch, p.gid));
    for (let i = 0; i < p.ids.length; i++) {
      mesh.setVisibleAt(p.ids[i], i < n);
      const oid = p.batches.outId(p.batch, p.ids[i]);
      if (oid !== undefined) p.batch.out.setVisibleAt(oid, i < n);
    }
  }
  setM(p, i, m) {
    if (p.batch) { p.batch.mesh.setMatrixAt(p.ids[i], m); const oid = p.batches.outId(p.batch, p.ids[i]); if (oid !== undefined) p.batch.out.setMatrixAt(oid, m); }
    else p.im.setMatrixAt(i, m);
  }
  setC(p, i, c) { if (p.batch) p.batch.mesh.setColorAt(p.ids[i], c); else p.im.setColorAt(i, c); }
  write() {
    const n = this.list.length;
    for (const p of this.parts) this.ensure(p, n);
    for (let i = 0; i < n; i++) {
      const h = this.list[i];
      const hm = tmpM2.compose(tmpV.set(h.cx, 0, h.cz), tmpQ.setFromAxisAngle(UP, h.crot), tmpS.set(h.scale, h.scale * h.scaleY, h.scale));
      for (const p of this.parts) {
        let m;
        if (p.kind === 'spin') {
          m = tmpM.copy(this.spinMatrix(p, hm, (this.spinA || 0) + h.seat * 0.7));
        } else if (p.kind === 'door') {
          const q = tmpQ2.setFromAxisAngle(UP, h.doorAngle).premultiply(p.nodeQ);
          m = tmpM.compose(p.nodePos, q, tmpS.set(1, 1, 1)).multiply(p.local);
          m.premultiply(hm);
        } else {
          m = tmpM.multiplyMatrices(hm, p.nodeM).multiply(p.local);
        }
        this.setM(p, i, m);
        if (p.colorMode === 'owner') this.setC(p, i, h.ownerColor);
        else if (p.colorMode === 'window') this.setC(p, i, h.winColor);
        else if (p.hm && p.batch) this.setC(p, i, hmVec(h.mat));   // alfa = 1 + houseMat (hep yazılır: program baştan aynı)
      }
    }
    for (const p of this.parts) {
      if (p.batch) continue;
      p.im.instanceMatrix.needsUpdate = true;
      if (p.im.instanceColor) p.im.instanceColor.needsUpdate = true;
    }
  }
  writeColors() {
    for (const p of this.parts) {
      if (p.colorMode !== 'window') continue;
      for (let i = 0; i < this.list.length; i++) this.setC(p, i, this.list[i].winColor);
      if (!p.batch) p.im.instanceColor.needsUpdate = true;
    }
  }
  dispose() {
    for (const p of this.parts) if (p.im) p.im.dispose();
    this.group.parent && this.group.parent.remove(this.group);
  }
}

// Kamera engelleri: dekor şablonlarının boyutundan dikey silindir (x, z, yarıçap, yükseklik). Ad başına bir kez ölçülür.
const propSizes = new Map();
const tmpBox = new THREE.Box3();
const tmpSize = new THREE.Vector3();
function propSize(bundle, name) {
  const key = bundle + ':' + name;
  if (propSizes.has(key)) return propSizes.get(key);
  const tpl = A.prop(bundle, name);
  let out = null;
  if (tpl) {
    tpl.updateWorldMatrix(true, true);
    tmpBox.setFromObject(tpl).getSize(tmpSize);
    out = { r: Math.max(tmpSize.x, tmpSize.z) / 2, h: tmpSize.y };
  }
  propSizes.set(key, out);
  return out;
}
const NO_BLOCK = /grass|patch|rock-flat|campfire/;

export function createVillage(scene, q, fx, terrain) {
  const root = new THREE.Group();
  root.name = 'village';
  scene.add(root);
  const groups = new Map();
  const houseBatches = new HouseBatches(root);
  let outlinesOn = false;
  const houses = new Map(); // id -> house
  let blockers = [], themeBlockers = [], blockersAll = null;
  function addBlocker(arr, bundle, name, x, z, s) {
    if (NO_BLOCK.test(name) || !L) return;
    if (Math.hypot(x, z) > L.R + 4) return;       // orman: takip kamerası ev halkasının içinde kalır
    const sz = propSize(bundle, name);
    if (!sz) return;
    arr.push({ x, z, r: sz.r * s, h: sz.h * s, name });
    blockersAll = null;
  }
  let L = null;
  let dressing = null;
  let fireRoot = null;
  let graveRoot = null;
  let graveTemplateReady = false;
  const tombs = new Map(); // playerId -> { obj, mound }
  let lamps = [];          // fener başları (hale + havuz)
  let dirty = true;
  let colorDirty = false;
  let pendingLayout = null;
  let animT = 1;
  let pendingGrow = false;
  const glowColor = new THREE.Color('#ffc46b');
  const poolColor = new THREE.Color('#ff9a3c');
  const winGlow = new THREE.Color('#ffb85a');
  let spinA = 0;

  function groupFor(type, variant, skin) {
    // Ev görünümü olan evlerde doku varyantı yok sayılır (görünüm kendi dokusunu getirir).
    if (skin && !A.houseSkinMaterial(skin)) skin = 0;   // doku hazır değilse varsayılan ev (setSkins sonra yeniden dener)
    const key = type + '-' + (skin ? 's' + skin : variant);
    if (!groups.has(key)) groups.set(key, new HouseGroup(type, variant, skin, root, houseBatches));
    return groups.get(key);
  }

  function regroup() {
    for (const g of groups.values()) g.list.length = 0;
    const sorted = [...houses.values()].sort((a, b) => a.seat - b.seat);
    for (const h of sorted) groupFor(h.type, h.variant, h.skin | 0).list.push(h);
    dirty = true;
  }

  // Düzeni uygula (animate: lobide yumuşak kayma)
  function setLayout(nl, animate) {
    const prevL = L;
    L = nl;
    const seen = new Set();
    for (const t of nl.houses) {
      seen.add(t.id);
      let h = houses.get(t.id);
      if (!h || h.type !== t.type || h.variant !== t.variant) {
        const old = h;
        h = {
          id: t.id, seat: t.seat, type: t.type, variant: t.variant, skin: t.skin | 0,
          cx: t.x, cz: t.z, crot: t.rotY, sx: t.x, sz: t.z, srot: t.rotY,
          scale: animate ? 0.01 : 1, scaleY: 1, removing: false,
          doorAngle: 0, doorOpen: 0, doorTarget: 0, doorHold: 0,
          lit: 0, litTarget: 0, dark: false, dead: false,
          ownerColor: (old && old.ownerColor) || DEFAULT_OWNER.clone(), winColor: WIN_DAY.clone(),
          name: old ? old.name : '', colorIdx: old ? old.colorIdx : -1,
        };
        houses.set(t.id, h);
      }
      h.seat = t.seat;
      h.skin = t.skin | 0;
      h.mat = t.mat | 0;   // ev malzemesi (look.houseMat): gövde örneğinin toplu ağ renginde (alfa)
      h.sx = h.cx; h.sz = h.cz; h.srot = h.crot;
      h.tx = t.x; h.tz = t.z; h.trot = t.rotY; h.angle = t.angle;
      h.info = HOUSE_INFO[t.type];
      h.removing = false;
      if (!animate) { h.cx = t.x; h.cz = t.z; h.crot = t.rotY; h.scale = 1; }
    }
    for (const [id, h] of houses) {
      if (!seen.has(id)) {
        if (animate) { h.removing = true; h.sx = h.cx; h.sz = h.cz; h.srot = h.crot; h.tx = h.cx; h.tz = h.cz; h.trot = h.crot; }
        else houses.delete(id);
      }
    }
    animT = animate ? 0 : 1;
    regroup();
    // Dekor ve zemin: animasyon bitince yeniden kurulur
    if (!animate || !prevL) rebuildDressing();
    else { pendingLayout = true; pendingGrow = true; }
  }

  // Yalnızca ev görünümü (look.house) değiştiyse: düzene dokunmadan evleri ilgili gruba taşır.
  // Yalnızca ev malzemesi (look.houseMat) değiştiyse grup değişmez: örnek renkleri yeniden yazılır.
  function setSkins(entries) {
    let changed = false;
    for (const e of entries) {
      const h = houses.get(e.id);
      if (!h) continue;
      if ((h.skin | 0) !== (e.skin | 0)) { h.skin = e.skin | 0; changed = true; }
      if ((h.mat | 0) !== (e.mat | 0)) { h.mat = e.mat | 0; dirty = true; }
    }
    if (changed) regroup();
  }

  function anchors(h) {
    // Evin dünya uzayındaki önemli noktaları (o anki animasyonlu konuma göre)
    const v = { x: h.cx, z: h.cz, rotY: h.crot };
    const info = h.info;
    return {
      door: toWorld(v, info.door[0], info.door[1] - 0.25),
      inside: toWorld(v, info.door[0], info.door[1] - 1.2),
      approach: toWorld(v, info.approach[0], info.approach[1] + 0.2),
      peek: toWorld(v, info.peek[0], info.peek[1]),
      backWin: toWorld(v, info.backWin[0], info.backWin[2]),
      frontWin: toWorld(v, info.frontWin[0], info.frontWin[2] + 0.12),
      lantern: toWorld(v, info.door[0] + 0.95, info.front + 0.45),
      tomb: toWorld(v, info.door[0] - 2.6, info.front + 1.6),
      plaque: toWorld(v, 0, info.front + 0.3),
      rotY: h.crot,
      height: info.height,
    };
  }

  // ---------- Dekor ----------
  function rebuildDressing() {
    if (dressing) { root.remove(dressing); disposeGroup(dressing); }
    dressing = new THREE.Group();
    dressing.name = 'dressing';
    root.add(dressing);
    pendingLayout = false;
    const R = rng(2024 + L.n);
    const batches = new Map();
    blockers = []; blockersAll = null;
    const put = (name, x, z, rotY, s = 1, bundle = 'village', y = null) => {
      addBlocker(blockers, bundle, name, x, z, s);
      const key = bundle + ':' + name;
      if (!batches.has(key)) batches.set(key, []);
      const yy = y == null ? terrain.heightAt(x, z) : y;
      batches.get(key).push(compose(x, yy, z, rotY, s));
    };
    lamps = [];
    // Kamp ateşi ve bankları (meydan mutlak koordinatlı)
    put('campfire-pit', 0, 0, 0.3, 1, 'village', 0);
    const benchSlots = [];
    const benchAngles = [0.55, 2.35, 4.15];
    for (let i = 0; i < 3; i++) {
      const a = benchAngles[i];
      const r = 3.35;
      put(i === 1 ? 'log-small' : 'log', Math.sin(a) * r, Math.cos(a) * r, a + Math.PI / 2, 1, 'village', 0);
      benchSlots.push({ x: Math.sin(a) * r, z: Math.cos(a) * r, a, small: i === 1 });
    }
    put('campfire-stand', 0, 0, 1.2, 0.85, 'village', 0);
    // Sabit, seçilmiş dekor (3. tur): oyuncu sayısı arttıkça dekor artmaz; yalnız evler çoğalır.
    // Fener ve küçük dekor, kapı boşluğundan uzak sabit açılarda; her biri en yakın iki evin arasına kaydırılır.
    const hs = L.houses;
    const gapMid = (a) => {
      // a açısına en yakın iki komşu evin ortası (kapı yolunu kapatmasın)
      let best = null, bd = Infinity;
      for (let i = 0; i < hs.length; i++) {
        const a0 = hs[i].angle;
        let d = hs[(i + 1) % hs.length].angle - a0; while (d < 0) d += TAU;
        if (hs.length > 1 && d > Math.PI) continue;
        const m = a0 + d / 2;
        const dd = Math.abs(((m - a + Math.PI) % TAU + TAU) % TAU - Math.PI);
        if (dd < bd) { bd = dd; best = m; }
      }
      return best == null ? a : best;
    };
    const usedMid = new Set();
    const fixedAngles = (k) => { const out = []; for (let i = 0; i < k; i++) out.push(L.gateAngle + Math.PI + ((i + 0.5) / k - 0.5) * (TAU - 1.4)); return out; };
    for (const a of fixedAngles(Math.min(6, Math.max(1, hs.length - 1)))) {
      const mid = gapMid(a);
      const key = mid.toFixed(3);
      if (usedMid.has(key)) continue;
      usedMid.add(key);
      const lr = L.R - 3.4;
      const lx = Math.sin(mid) * lr, lz = Math.cos(mid) * lr;
      put('lamp-post', lx, lz, mid + Math.PI, 1);
      lamps.push({ x: lx, y: 3.55, z: lz });
    }
    const propsMid = ['barrel', 'crate', 'hay-bale', 'crate-bottles', 'bucket', 'wheel', 'barrel', 'crate'];
    const usedProp = new Set();
    fixedAngles(8).forEach((a, i) => {
      const mid = gapMid(a + 0.11);
      const key = mid.toFixed(3);
      if (usedProp.has(key)) return;
      usedProp.add(key);
      const pr = L.R + 0.4;
      put(propsMid[i], Math.sin(mid) * pr, Math.cos(mid) * pr, R() * TAU, 1);
    });
    // Her evin kapısının yanında yer feneri
    for (const h of houses.values()) {
      if (h.removing) continue;
      const v = { x: h.tx, z: h.tz, rotY: h.trot };
      const p = toWorld(v, h.info.door[0] + 0.95, h.info.front + 0.45);
      put('lantern', p.x, p.z, h.trot, 0.8, 'village', 0);
    }
    // Meydan kenarı: tezgah, el arabası, kuyu yerine çeşme taşı vb. (kapı yolu açılarından uzak)
    const free = (a) => {
      for (const h of hs) { let d = Math.abs(((a - h.angle + Math.PI) % TAU + TAU) % TAU - Math.PI); if (d < 0.2) return false; }
      let dg = Math.abs(((a - L.gateAngle + Math.PI) % TAU + TAU) % TAU - Math.PI);
      return dg > 0.3;
    };
    const plazaProps = [['stall', 0], ['cart', 1], ['bench', 0], ['stall-green', 0], ['hay-bale', 0], ['bench-stone', 0], ['cart-hay', 1]];
    let placed = 0;
    for (let k = 0; k < 40 && placed < 4; k++) {
      const a = R() * TAU;
      if (!free(a)) continue;
      const r = L.Rp + 2.2 + R() * Math.max(0.5, L.Rr - L.Rp - 3.5);
      const [name] = plazaProps[placed];
      put(name, Math.sin(a) * r, Math.cos(a) * r, a + Math.PI + (R() - 0.5) * 0.5, 1);
      placed++;
    }
    // Köy kapısı: tabela, bayrak direği, çit parçaları
    const ga = L.gateAngle;
    const gp = (r, off) => ({ x: Math.sin(ga + off / r) * r, z: Math.cos(ga + off / r) * r });
    let p = gp(L.R + 1, -2.4); put('signpost', p.x, p.z, ga + 0.6, 1);
    p = gp(L.R - 1, 2.6); put('banner-pole', p.x, p.z, ga + Math.PI, 1.2);
    p = gp(L.R + 4, -2.6); put('lantern-post-cabin', p.x, p.z, ga + Math.PI, 1);
    lamps.push({ x: p.x, y: 2.9, z: p.z, small: true });
    // Orman halkası
    const treeTypes = ['tree-pine', 'tree-pine-tall', 'tree-round', 'tree-forest', 'tree-forest-tall', 'tree-autumn', 'tree-crooked', 'tree-pine'];
    const nTrees = q.trees;
    const r0 = L.R + 8.5;
    for (let i = 0; i < nTrees; i++) {
      const a = R() * TAU;
      const t = Math.pow(R(), 1.35);
      const r = r0 + t * 46;
      const x = Math.sin(a) * r, z = Math.cos(a) * r;
      // kapı yolu ve mezarlık boş kalsın
      let dg = Math.abs(((a - ga + Math.PI) % TAU + TAU) % TAU - Math.PI) * r;
      if (dg < 4.5 && r < r0 + 30) continue;
      if (L.grave && Math.hypot(x - L.grave.x, z - L.grave.z) < 8.5) continue;
      const tt = treeTypes[Math.floor(R() * treeTypes.length)];
      put(tt, x, z, R() * TAU, 0.85 + R() * 0.55 + t * 0.3);
    }
    // Ev arkası ile orman arası: çalı, kaya, ot
    for (let i = 0; i < q.scatter; i++) {
      const a = R() * TAU, r = L.R + 4.6 + R() * 6;
      const x = Math.sin(a) * r, z = Math.cos(a) * r;
      let dg = Math.abs(((a - ga + Math.PI) % TAU + TAU) % TAU - Math.PI) * r;
      if (dg < 3.5) continue;
      if (L.grave && Math.hypot(x - L.grave.x, z - L.grave.z) < 7) continue;
      const k = R();
      put(k < 0.4 ? 'grass-large' : k < 0.7 ? 'grass' : 'bush', x, z, R() * TAU, 0.8 + R() * 0.6);
    }
    // Meydan içi ot tutamları ve taşlar (kenarda)
    for (let i = 0; i < 14; i++) {
      const a = R() * TAU, r = L.Rp + 0.8 + R() * 1.5;
      put(R() < 0.7 ? 'grass' : 'grass-large', Math.sin(a) * r, Math.cos(a) * r, R() * TAU, 0.8 + R() * 0.4);
    }
    // Büyük kayalar tepelerde
    for (let i = 0; i < 3; i++) {
      const a = R() * TAU, r = L.R + 24 + R() * 40;
      put(R() < 0.5 ? 'rock-large' : 'rock-wide', Math.sin(a) * r, Math.cos(a) * r, R() * TAU, 0.8 + R() * 1.0);
    }

    const list = [];
    for (const [key, mats] of batches) {
      const [bundle, name] = key.split(':');
      const tpl = A.prop(bundle, name);
      if (!tpl) continue;
      list.push({ tpl, mats, cast: !/grass|patch|rock-flat|bush/.test(name) });
    }
    dressing.add(mergedProps(list));
    // ateş: takip kamerası üstünden geçmesin
    blockers.push({ x: 0, z: 0, r: 1.5, h: 3.3, name: 'fire' });
    if (pendingGrow) { GROW.value = 0; growT = 0; pendingGrow = false; }
    // mezarlık (paket yüklüyse)
    buildGraveyard();
    benchSlotsCache = benchSlots;
    terrain.paint(L, theme && theme.snow ? { snow: true } : null);
    buildTheme();
    version++;
    dirty = true;
  }
  let benchSlotsCache = [];
  let version = 0;
  let theme = null;            // senaryo süslemesi (moods.js)
  let themeRoot = null;
  let growT = 1;
  const FAIR_COLS = ['#ff5a5f', '#ffd34d', '#5ec8ff', '#7ee08a', '#c08bff'].map((c) => new THREE.Color(c));

  function buildGraveyard() {
    if (graveRoot) { root.remove(graveRoot); disposeGroup(graveRoot); graveRoot = null; }
    if (!A.has('props/graveyard.glb') || !L || !L.grave) return;
    graveTemplateReady = true;
    graveRoot = new THREE.Group();
    graveRoot.name = 'graveyard';
    const G = L.grave;
    const rot = G.angle + Math.PI; // ön yüz köye bakar
    const loc = (lx, lz) => toWorld({ x: G.x, z: G.z, rotY: rot }, lx, lz);
    const batches = new Map();
    const put = (name, lx, lz, r = 0, s = 1) => {
      const p = loc(lx, lz);
      if (!batches.has(name)) batches.set(name, []);
      batches.get(name).push(compose(p.x, terrain.heightAt(p.x, p.z), p.z, rot + r, s));
    };
    // eski mezarlar (arka sıralar)
    const R = rng(66);
    // Dini sembol yok: paketteki haçlı taşlar (gravestone-cross, cross-wood, cross) kullanılmaz; düz taş biçimleri yeter.
    const old = ['gravestone-wide', 'gravestone-round', 'gravestone-broken', 'gravestone-decorative', 'gravestone-roof', 'gravestone-bevel'];
    for (let i = 0; i < 6; i++) put(old[i], -3.2 + i * 1.3 + (R() - 0.5) * 0.3, -2.6 + (R() - 0.5) * 0.4, (R() - 0.5) * 0.3, 0.85);
    put('crypt', 3.6, -3.4, -0.3, 1);
    put('trunk-dead', -4.6, 0.6, 1.1, 1);
    put('pine-crooked', -5.2, -3.6, 0.4, 1);
    put('candles', 1.8, -2.4, 0, 1);
    put('pumpkin-carved', -2.2, 1.9, 0.5, 0.8);
    put('urn', 2.6, 0.4, 0, 0.8);
    // demir çit (önde, ortası açık)
    put('iron-fence-gate', 0, 3.2, 0, 1);
    for (const xo of [-2.5, -5, 2.5, 5]) put('iron-fence', xo, 3.2, 0, 1);
    const list = [];
    for (const [name, mats] of batches) {
      const tpl = A.prop('graveyard', name);
      if (tpl) list.push({ tpl, mats, cast: true });
    }
    graveRoot.add(mergedProps(list));
    root.add(graveRoot);
    // ölü mezar taşlarını yeniden yerleştir
    for (const [id, t] of tombs) placeTomb(id, t);
  }

  // ---------- Mezarlar ----------
  const TOMB_TYPES = ['gravestone-round', 'gravestone-wide', 'gravestone-bevel', 'gravestone-roof', 'gravestone-decorative'];
  function setDead(id, dead, colorIdx, drop) {
    const has = tombs.has(id);
    if (dead && !has) {
      tombs.set(id, { obj: null, mound: null, colorIdx, born: performance.now() });
      placeTomb(id, tombs.get(id));
      const t = tombs.get(id);
      if (drop && t.obj) { t.obj.userData.drop = 0; t.obj.position.y = 3.2; }
    } else if (!dead && has) {
      const t = tombs.get(id);
      if (t.obj) { t.obj.parent.remove(t.obj); }
      if (t.mound) { t.mound.parent.remove(t.mound); }
      tombs.delete(id);
    }
  }
  function placeTomb(id, t) {
    if (t.obj) { t.obj.parent && t.obj.parent.remove(t.obj); t.obj = null; }
    if (t.mound) { t.mound.parent && t.mound.parent.remove(t.mound); t.mound = null; }
    const h = houses.get(id);
    if (!h || !A.has('props/graveyard.glb')) return;
    const tpl = A.prop('graveyard', TOMB_TYPES[h.seat % TOMB_TYPES.length]);
    if (!tpl) return;
    const v = { x: h.tx ?? h.cx, z: h.tz ?? h.cz, rotY: h.trot ?? h.crot };
    const p = toWorld(v, h.info.door[0] - 2.75, h.info.front + 1.7);
    const o = tpl.clone();
    o.position.set(p.x, 0, p.z);
    o.rotation.set(0, v.rotY + 0.15, 0);
    o.scale.setScalar(0.62);
    o.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
    o.userData.pop = 0;
    root.add(o);
    t.obj = o;
    // mezarlıkta taze toprak
    if (L && L.grave) {
      const idx = [...tombs.keys()].indexOf(id);
      const mt = A.prop('graveyard', 'grave-dirt');
      if (mt) {
        const G = L.grave;
        const rot = G.angle + Math.PI;
        const lx = -3.6 + (idx % 5) * 1.9, lz = 0.3 + Math.floor(idx / 5) * 2.0;
        const pp = toWorld({ x: G.x, z: G.z, rotY: rot }, lx, lz);
        const m = mt.clone();
        m.position.set(pp.x, terrain.heightAt(pp.x, pp.z), pp.z);
        m.rotation.y = rot;
        m.scale.setScalar(0.7);
        root.add(m);
        t.mound = m;
      }
    }
  }

  // ---------- Kişiselleştirme ----------
  function setOwner(id, colorIdx, name) {
    const h = houses.get(id);
    if (!h) return;
    if (h.colorIdx !== colorIdx) {
      h.colorIdx = colorIdx;
      if (colorIdx >= 0) h.ownerColor.set(COLOR_HEX[colorIdx]); else h.ownerColor.copy(DEFAULT_OWNER);
      dirty = true;
    }
    h.name = name || '';
  }

  // ---------- Kare güncellemesi ----------
  const tmpC = new THREE.Color();
  function update(dt, time, tod) {
    let moved = false;
    if (animT < 1) {
      animT = Math.min(1, animT + dt / 1.3);
      const k = smooth(animT);
      for (const [id, h] of houses) {
        h.cx = lerp(h.sx, h.tx, k); h.cz = lerp(h.sz, h.tz, k);
        let d = h.trot - h.srot; while (d > Math.PI) d -= TAU; while (d < -Math.PI) d += TAU;
        h.crot = h.srot + d * k;
        if (h.removing) h.scale = Math.max(0.01, 1 - k);
        else h.scale = Math.min(1, h.scale + dt * 1.2);
      }
      if (animT >= 1) {
        for (const [id, h] of houses) if (h.removing) houses.delete(id);
        regroup();
        if (pendingLayout) rebuildDressing();
      }
      moved = true;
    } else {
      for (const h of houses.values()) if (h.scale < 1) { h.scale = Math.min(1, h.scale + dt * 1.5); moved = true; }
    }
    if (growT < 1) { growT = Math.min(1, growT + dt / 0.9); GROW.value = growT; }
    for (const t of tombs.values()) {
      const o = t.obj;
      if (o && o.userData.drop != null) {
        const u = (o.userData.drop += dt / 0.55);
        if (u >= 1) { o.position.y = 0; delete o.userData.drop; moved = true; }
        else { const b = u < 0.7 ? 3.2 * (1 - (u / 0.7) * (u / 0.7)) : Math.sin(((u - 0.7) / 0.3) * Math.PI) * 0.18; o.position.y = Math.max(0, b); }
      }
    }
    // saray altını: gece emissive yükselir (tek paylaşılan malzeme, kare başı bir kez)
    for (const k in manorLive) for (const m of manorLive[k]) setManorNight({ [k]: m }, tod.night);
    // değirmen kanatları: yalnızca dönen parçaların örnek matrisleri yazılır
    spinA += dt * 0.9;
    for (const g of groups.values()) if (g.hasSpin) { g.spinA = spinA; if (g.list.length) g.writeSpin(spinA); }
    // kapılar ve pencereler
    const lampK = tod.lamps;
    for (const h of houses.values()) {
      if (h.doorHold > 0) { h.doorHold -= dt; if (h.doorHold <= 0) h.doorTarget = 0; }
      const prev = h.doorOpen;
      h.doorOpen += (h.doorTarget - h.doorOpen) * damp(h.doorTarget > h.doorOpen ? 9 : 5, dt);
      if (Math.abs(h.doorOpen - prev) > 0.0005) moved = true;
      h.doorAngle = h.doorOpen * 1.35 * h.info.openSign;
      const lt = h.dark || h.dead || h.flickOut ? 0 : Math.max(h.litTarget, 0);
      h.lit += (lt - h.lit) * damp(1.6, dt);
      // pencere rengi: gündüz koyu iç, alacakaranlıkta yanar; boş ev / uyuyan ev karanlık
      let lightK = clamp(h.lit * (0.25 + 0.75 * lampK), 0, 1);
      if (h.flickT > 0) {
        // düzensiz birkaç kesinti, sonra karanlık
        h.flickT -= dt;
        const e = h.flickDur - h.flickT, step = Math.floor(e / 0.075);
        const r = Math.abs(Math.sin(step * 12.9898 + h.seat * 78.233) * 43758.5453) % 1;
        const fade = 1 - clamp(e / h.flickDur, 0, 1);
        // başta çoğunlukla yanık, giderek daha sık kesilir; sonunda karanlık
        lightK = r > 0.12 + 0.75 * (1 - fade) ? 0.45 + 0.55 * fade : 0.03;
        if (h.flickT <= 0) { h.lit = 0; lightK = 0; h.flickOut = true; }
        colorDirty = true;
      }
      tmpC.copy(WIN_DAY).lerp(WIN_DARK, clamp(tod.night * 1.2, 0, 1)).lerp(WIN_NIGHT, lightK);
      const wc = h.winColor;
      if (Math.abs(tmpC.r - wc.r) + Math.abs(tmpC.g - wc.g) + Math.abs(tmpC.b - wc.b) > 0.006) { wc.copy(tmpC); colorDirty = true; }
    }
    if (moved) dirty = true;
    if (dirty) {
      for (const g of groups.values()) g.write();
      dirty = false; colorDirty = false;
      return true; // gölge haritası yenilenmeli
    }
    if (colorDirty) {
      for (const g of groups.values()) g.writeColors();
      colorDirty = false;
    }
    return false;
  }

  // Işık efektleri (her kare): fener haleleri, zemin ışık havuzları, pencere haleleri
  // Alacakaranlıkta fenerler yandığı ilk ~1.5 sn kısa "pop-on" titremesi yapar (hareketi azalt açıkken yok)
  let lampOnAt = -1;
  function emitGlows(tod, time, glow, pool) {
    const k = tod.lamps;
    if (k < 0.02) { lampOnAt = -1; return; }
    if (lampOnAt < 0) lampOnAt = time;
    let age = time - lampOnAt;
    if (age < 0 || age > 60) { lampOnAt = time; age = 0; }
    let reducedM = false;
    try { reducedM = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch (e) { /* açık kalır */ }
    const popping = age < 1.5 && !reducedM;
    const fair = theme && theme.dress === 'fair';
    for (let i = 0; i < lamps.length; i++) {
      const l = lamps[i];
      let fl = 0.92 + 0.08 * Math.sin(time * 9 + i * 1.7);
      if (popping) fl *= Math.min(1, 0.35 + age) * (0.72 + 0.28 * Math.sin(age * 38 + i * 2.7));
      const gc = fair ? FAIR_COLS[i % FAIR_COLS.length] : glowColor;
      glow.add(l.x, l.y, l.z, l.small ? 1.4 : 2.0, gc, 0.85 * k * fl);
      pool.add(l.x, 0.03, l.z, l.small ? 6 : 8.5, fair ? gc : poolColor, 0.30 * k);
    }
    // panayır flamalarının küçük fenerleri
    if (fair && themeBulbs) for (let i = 0; i < themeBulbs.length; i++) { const b = themeBulbs[i]; glow.add(b.x, b.y, b.z, 0.7, FAIR_COLS[i % FAIR_COLS.length], 0.8 * k * (0.8 + 0.2 * Math.sin(time * 3 + i))); }
    for (const h of houses.values()) {
      if (h.scale < 0.9) continue;
      if (!h.gp || h.gp.x !== h.cx || h.gp.z !== h.cz || h.gp.r !== h.crot) {
        const v = { x: h.cx, z: h.cz, rotY: h.crot };
        h.gp = { x: h.cx, z: h.cz, r: h.crot, ln: toWorld(v, h.info.door[0] + 0.95, h.info.front + 0.45), w: toWorld(v, h.info.frontWin[0], h.info.frontWin[2] + 0.25), wp: toWorld(v, h.info.frontWin[0], h.info.frontWin[2] + 1.6) };
      }
      const ln = h.gp.ln;
      const live = h.dead ? 0.25 : 1;
      glow.add(ln.x, 0.62, ln.z, 0.9, glowColor, 0.9 * k * live);
      // Saray: kubbe tepesinde gece altın hale (mevcut glow toplu ağı)
      if (h.skin === HOUSE_DOME_SKIN && tod.night > 0.02) glow.add(h.cx, (h.info.height + 2.0) * h.scale, h.cz, 3.6, PALACE_HALO, 0.5 * tod.night);
      pool.add(ln.x, 0.03, ln.z, 3.6, poolColor, 0.26 * k * live);
      // içeride biri varken pencere ışığı hafifçe titrer (mum)
      const wk = h.lit * k * (0.86 + 0.08 * Math.sin(time * 6.3 + h.seat * 2.1) + 0.06 * Math.sin(time * 13.7 + h.seat));
      if (wk > 0.02) {
        const w = h.gp.w;
        glow.add(w.x, 1.35, w.z, 1.7, winGlow, 0.5 * wk);
        const wp = h.gp.wp;
        pool.add(wp.x, 0.03, wp.z, 4.2, winGlow, 0.22 * wk);
      }
    }
  }

  // ---------- senaryo süslemesi ----------
  let themeBulbs = null;
  let frostOn = false;
  function setTheme(def) {
    const prev = theme;
    theme = def && def.id ? def : null;
    glowColor.set(theme && theme.lamp ? theme.lamp : '#ffc46b');
    poolColor.set(theme && theme.lamp ? theme.lamp : '#ff9a3c');
    const snowChanged = !!(prev && prev.snow) !== !!(theme && theme.snow);
    if (L && snowChanged) terrain.paint(L, theme && theme.snow ? { snow: true } : null);
    setFrost(!!(theme && theme.snow));
    buildTheme();
  }
  // Kar: tüm kit malzemelerine hafif buz beyazı (çatılar, ağaçlar, çitler)
  function setFrost(on) {
    if (on === frostOn) return;
    frostOn = on;
    const touch = (m) => {
      if (!m || !m.isMeshLambertMaterial || !m.map || m.name === 'villager') return;
      if (on) { if (!m.userData.preFrost) m.userData.preFrost = m.emissive.clone(); m.emissive.set('#a9bad0').multiplyScalar(0.22); }
      else if (m.userData.preFrost) m.emissive.copy(m.userData.preFrost);
    };
    scene.traverse((o) => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(touch); });
  }
  function buildTheme() {
    if (themeRoot) { root.remove(themeRoot); themeRoot.traverse((o) => { if (o.userData.merged || o.userData.themeGeo) o.geometry.dispose(); if (o.userData.themeMat) o.material.dispose(); }); themeRoot = null; }
    themeBulbs = null;
    themeBlockers = []; blockersAll = null;
    if (!theme || !theme.dress || !L) return;
    themeRoot = new THREE.Group();
    themeRoot.name = 'theme';
    const R = rng(99 + L.n);
    const batches = new Map();
    const put = (name, x, z, rotY, s = 1) => { addBlocker(themeBlockers, 'village', name, x, z, s); if (!batches.has(name)) batches.set(name, []); batches.get(name).push(compose(x, terrain.heightAt(x, z), z, rotY, s)); };
    if (theme.dress === 'harvest') {
      // kapı önlerinde balkabakları, meydan kenarında saman balyaları ve yük arabası
      const hl = [...houses.values()].filter((h) => !h.removing);
      const stepH = Math.max(1, Math.ceil(hl.length / 8));
      for (let hi = 0; hi < hl.length; hi += stepH) {
        const h = hl[hi];
        const v = { x: h.tx, z: h.tz, rotY: h.trot };
        const p = toWorld(v, h.info.door[0] - 0.9, h.info.front + 0.7);
        put('pumpkin', p.x, p.z, R() * TAU, 0.7 + R() * 0.3);
        if (R() < 0.5) { const q2 = toWorld(v, -h.info.hx + 0.5, h.info.front + 0.9); put('hay-bale', q2.x, q2.z, h.trot + 0.3, 0.9); }
      }
      for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU + 0.4, r = L.Rp + 1.2; put(i % 2 ? 'pumpkin' : 'hay-bale', Math.sin(a) * r, Math.cos(a) * r, a, i % 2 ? 0.9 : 1); }
      const a = L.gateAngle + 0.5, r = L.Rp + 2.6;
      put('cart-hay', Math.sin(a) * r, Math.cos(a) * r, a + 1.2, 1);
    } else if (theme.dress === 'fair') {
      // fenerler arasında renkli flamalar
      const lp = lamps.filter((l) => !l.small);
      const tri = [], col = [];
      themeBulbs = [];
      for (let i = 0; i < lp.length; i++) {
        const a = lp[i], b = lp[(i + 1) % lp.length];
        if (Math.hypot(a.x - b.x, a.z - b.z) > 14) continue;
        const n = 9;
        for (let k = 0; k < n; k++) {
          const t0 = (k + 0.15) / n, t1 = (k + 0.85) / n, tm = (k + 0.5) / n;
          const sag = (t) => 3.25 - Math.sin(t * Math.PI) * 0.9;
          const P = (t) => [a.x + (b.x - a.x) * t, sag(t), a.z + (b.z - a.z) * t];
          const p0 = P(t0), p1 = P(t1), pm = P(tm);
          tri.push(...p0, ...p1, pm[0], pm[1] - 0.45, pm[2]);
          const c = FAIR_COLS[(i + k) % FAIR_COLS.length];
          for (let j = 0; j < 3; j++) col.push(c.r, c.g, c.b);
          if (k % 3 === 1) themeBulbs.push({ x: pm[0], y: pm[1] + 0.05, z: pm[2] });
        }
      }
      if (tri.length) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(tri, 3));
        g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
        g.computeVertexNormals();
        const m = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(g, m);
        mesh.userData.themeGeo = true; mesh.userData.themeMat = true;
        themeRoot.add(mesh);
      }
      for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU + 0.2, r = L.Rp + 1.6; put('banner-pole', Math.sin(a) * r, Math.cos(a) * r, a + Math.PI, 1.1); }
    }
    const list = [];
    for (const [name, mats] of batches) { const tpl = A.prop('village', name); if (tpl) list.push({ tpl, mats, cast: true }); }
    if (list.length) themeRoot.add(mergedProps(list));
    root.add(themeRoot);
    if (frostOn) { frostOn = false; setFrost(true); }
  }

  function setLit(id, v) { const h = houses.get(id); if (h) h.litTarget = v; }
  function openDoor(id, hold = 1.2) {
    const h = houses.get(id);
    if (!h) return;
    h.doorTarget = 1; h.doorHold = hold;
  }

  // Işın (yerel) - ev kutusu kesişimi
  function pickHouse(ray) {
    let best = null, bestT = Infinity;
    const o = ray.origin, d = ray.direction;
    for (const h of houses.values()) {
      if (h.removing) continue;
      const c = Math.cos(-h.crot), s = Math.sin(-h.crot);
      const ox = o.x - h.cx, oz = o.z - h.cz;
      const lox = ox * c + oz * s, loz = -ox * s + oz * c;
      const ldx = d.x * c + d.z * s, ldz = -d.x * s + d.z * c;
      const min = [-h.info.hx - 0.3, 0, -h.info.hz - 0.3], max = [h.info.hx + 0.3, h.info.height + (MANOR_EXTRA_H[h.skin] || 0), h.info.hz + 1.2];
      const lo = [lox, o.y, loz], ld = [ldx, d.y, ldz];
      let t0 = -Infinity, t1 = Infinity;
      for (let a = 0; a < 3; a++) {
        if (Math.abs(ld[a]) < 1e-6) { if (lo[a] < min[a] || lo[a] > max[a]) { t0 = Infinity; break; } continue; }
        let ta = (min[a] - lo[a]) / ld[a], tb = (max[a] - lo[a]) / ld[a];
        if (ta > tb) { const tt = ta; ta = tb; tb = tt; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
      }
      if (t0 <= t1 && t1 > 0 && t0 < bestT) { bestT = t0; best = h; }
    }
    return best;
  }

  function onExtraLoaded() {
    if (L) buildGraveyard();
  }

  function disposeGroup(g) {
    g.traverse((o) => { if (o.isInstancedMesh) o.dispose(); else if (o.userData.merged) o.geometry.dispose(); });
  }

  return {
    root, houses,
    get layout() { return L; },
    get benchSlots() { return benchSlotsCache; },
    get busy() { return animT < 1; },
    get version() { return version; },
    lampList: () => lamps,
    // "çizim" görünümü: ev ve dekor dış çizgileri
    setOutlines(on) {
      outlinesOn = on;
      houseBatches.setOutlines(on);
    },
    // takip kamerası için dekor engelleri (dikey silindirler)
    get blockers() { if (!blockersAll) blockersAll = blockers.concat(themeBlockers); return blockersAll; },
    setLayout, setSkins, setOwner, setLit, setDead, setTheme, openDoor, anchors, update, emitGlows, pickHouse, onExtraLoaded,
    // ölen evin pencereleri titreyip söner (sn)
    flicker(id, dur = 1.5) { const h = houses.get(id); if (h) { h.flickT = dur; h.flickDur = dur; } },
    house: (id) => houses.get(id),
    tombOf: (id) => tombs.get(id),
    dispose() {
      setFrost(false);
      for (const g of groups.values()) g.dispose();
      houseBatches.dispose();
      for (const k in manorLive) manorLive[k].length = 0;
      if (dressing) disposeGroup(dressing);
      if (graveRoot) disposeGroup(graveRoot);
      if (themeRoot) themeRoot.traverse((o) => { if (o.userData.merged || o.userData.themeGeo) o.geometry.dispose(); if (o.userData.themeMat) o.material.dispose(); });
      disposeGrowMats();
      GROW.value = 1;
      scene.remove(root);
    },
  };
}

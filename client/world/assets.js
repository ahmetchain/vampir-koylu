// Varlık yükleyici: GLB dosyalarını bir kez yükler, malzemeleri paylaşılan Lambert malzemelerine çevirir.
// Modül düzeyinde önbellek: aynı sayfadaki tüm dünyalar ve önizlemeler aynı veriyi kullanır.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

THREE.Cache.enabled = true;

let BASE = 'assets/models/';
export function setBase(b) { BASE = b.endsWith('/') ? b : b + '/'; }
export function getBase() { return BASE; }

export const GROUPS = {
  // İlk oynanabilir set
  chars: [...Array.from({ length: 12 }, (_, i) => `characters/villager-${String(i).padStart(2, '0')}.glb`),
    'characters/villager-anims.glb', 'hats/hats.glb'],
  village: ['houses/house-0.glb', 'houses/house-1.glb', 'houses/house-2.glb', 'houses/house-3.glb', 'props/village.glb'],
  // Sonradan (arka planda) yüklenenler
  extra: ['props/graveyard.glb', 'characters/ghost.glb'],
  // sinematikler ve iç mekân (ilk gece ya da ilk duyurudan önce arka planda)
  cine: ['interior/furniture.glb', 'interior/clues.glb', 'characters/vampire.glb', 'characters/bat.glb'],
};

const gltfs = new Map();       // yol -> gltf
const pending = new Map();     // yol -> Promise
const mats = new Map();        // paylaşılan malzemeler (ad -> malzeme)
let loader = null;
let altTexture = null;

function getLoader() {
  if (!loader) loader = new GLTFLoader();
  return loader;
}

// Kenney MeshStandardMaterial -> paylaşılan MeshLambertMaterial (telefonda ucuz, görüntü aynı)
function shared(src) {
  const name = src.name || 'mat';
  let key = name;
  if (name === 'cloth' || name.startsWith('tint')) key = name; // renk sonradan klonlanarak verilir
  if (mats.has(key)) return mats.get(key);
  let m;
  if (name === 'window') {
    // Pencere iç kutusu: ışıksız, örnek (instance) rengiyle yanar
    m = new THREE.MeshBasicMaterial({ color: 0xffffff, name, fog: true });
  } else {
    m = new THREE.MeshLambertMaterial({
      name,
      map: src.map || null,
      color: src.color ? src.color.clone() : new THREE.Color(1, 1, 1),
      side: src.side,
      transparent: false,
    });
    if (src.emissive && (src.emissive.r + src.emissive.g + src.emissive.b) > 0) {
      m.emissive.copy(src.emissive);
      m.emissiveIntensity = src.emissiveIntensity ?? 1;
    }
  }
  if (m.map) { m.map.colorSpace = THREE.SRGBColorSpace; m.map.anisotropy = 2; }
  mats.set(key, m);
  return m;
}

export function material(name) { return mats.get(name); }

function prepare(path, gltf) {
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    const arr = Array.isArray(o.material);
    if (arr) o.material = o.material.map(shared);
    else {
      const old = o.material;
      o.material = shared(old);
      if (old !== o.material && old.map && old.map !== o.material.map) old.map.dispose();
      if (old !== o.material) old.dispose();
    }
    if (o.isSkinnedMesh) o.frustumCulled = false;
  });
  if (path.includes('/villager-') && !path.includes('anims')) mergeSkin(gltf);
}

// Gövde, kafa ve kumaş aynı iskelete bağlı: tek geometride birleştir -> karakter başına tek çizim çağrısı.
// Kumaş köşeleri aCloth özniteliğiyle işaretlenir (değer: kumaş dokusundaki gölge tonu); renk malzemede (villagerTinted).
function clothShade(o) {
  const g = o.geometry;
  const n = g.attributes.position.count;
  const out = new Float32Array(n).fill(1);
  try {
    const img = o.material.map && o.material.map.image;
    const uv = g.attributes.uv;
    if (!img || !uv) return out;
    const cv = document.createElement('canvas');
    cv.width = img.width; cv.height = img.height;
    const c2 = cv.getContext('2d');
    c2.drawImage(img, 0, 0);
    const d = c2.getImageData(0, 0, img.width, img.height).data;
    const flip = o.material.map.flipY;
    for (let i = 0; i < n; i++) {
      let u = uv.getX(i) % 1, v = uv.getY(i) % 1;
      if (u < 0) u += 1; if (v < 0) v += 1;
      const x = Math.min(img.width - 1, Math.floor(u * img.width));
      const y = Math.min(img.height - 1, Math.floor((flip ? 1 - v : v) * img.height));
      out[i] = Math.max(0.05, d[(y * img.width + x) * 4] / 255);
    }
  } catch (e) { /* doku okunamazsa düz renk */ }
  return out;
}
// Köşe başına baskın kemik ve o kemiğin bind pozundaki yerel konumu: aBone = (etiket, x, y, z).
// Etiket: 1 gövde, 2 sol bacak, 3 sağ bacak, 4 kol, 5 kafa, 0 diğer. Alt giysi boyaması (villagerTinted) ve kıyafet
// ölçüleri (outfits.js bodyFit) bunu kullanır; geometri ve animasyon değişmez.
export const BONE_TAG = { torso: 1, 'leg-left': 2, 'leg-right': 3, 'arm-left': 4, 'arm-right': 4, head: 5 };
function boneTags(o, g) {
  const P = g.attributes.position, SI = g.attributes.skinIndex, SW = g.attributes.skinWeight;
  const out = new Float32Array(P.count * 4);
  if (!SI || !SW || !o.skeleton) return out;
  const bones = o.skeleton.bones;
  const mats = bones.map((b, i) => o.skeleton.boneInverses[i].clone().multiply(o.bindMatrix));
  const v = new THREE.Vector3();
  for (let i = 0; i < P.count; i++) {
    let best = 0, bw = -1;
    for (let k = 0; k < 4; k++) { const w = SW.getComponent(i, k); if (w > bw) { bw = w; best = SI.getComponent(i, k); } }
    const b = bones[best];
    v.fromBufferAttribute(P, i).applyMatrix4(mats[best]);
    out[i * 4] = (b && BONE_TAG[b.name]) || 0; out[i * 4 + 1] = v.x; out[i * 4 + 2] = v.y; out[i * 4 + 3] = v.z;
  }
  return out;
}
function mergeSkin(gltf) {
  const skinned = [];
  gltf.scene.traverse((o) => { if (o.isSkinnedMesh) skinned.push(o); });
  const vill = skinned.filter((o) => o.material.name === 'villager');
  if (!vill.length) return;
  const cloth = skinned.filter((o) => o.material.name === 'cloth' && o.skeleton && o.skeleton.bones.length === vill[0].skeleton.bones.length);
  const parts = vill.concat(cloth);
  if (parts.length < 2) return;
  const [a, ...rest] = parts;
  try {
    const geos = parts.map((o) => {
      const g = o.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'skinIndex', 'skinWeight'].includes(k)) g.deleteAttribute(k);
      const isCloth = o.material.name === 'cloth';
      g.setAttribute('aCloth', new THREE.BufferAttribute(isCloth ? clothShade(o) : new Float32Array(g.attributes.position.count), 1));
      g.setAttribute('aBone', new THREE.BufferAttribute(boneTags(o, g), 4));
      return g;
    });
    const merged = mergeGeometries(geos, false);
    if (!merged) return;
    a.geometry.dispose();
    a.geometry = merged;
    a.userData.clothMerged = cloth.length > 0;
    for (const o of rest) { o.parent.remove(o); o.geometry.dispose(); }
  } catch (e) { /* birleştirilemezse ayrı kalır */ }
}

// Birleşik gövde malzemesi: kumaş köşeleri oyuncu rengini alır (renk başına bir malzeme, tek program)
// leg (isteğe bağlı, look.bottom): { a: [r, g, b, kip], b: [r, g, b, çizgi] } — bacak (aBone etiketi 2/3) bölgesini
// yeniden boyar. Kip 1: pantolon (çizginin üstü), 2: yan şeritli pantolon, 3: çizme/ayakkabı (çizginin altı),
// 4: çarık (ayak + bağcıklar). Tek program; renk/kip yalnızca uniform (oyuncu rengi x alt giysi başına bir malzeme).
const villCache = new Map();
const LEG_GLSL = `
  // pantolon kiplerinde kalça (gövde kemiğinde, gömlek altında kalan şort/kemer bölgesi) de boyanır
  if (uLegA.w > 0.5 && uLegA.w < 2.5 && vBone.x > 0.5 && vBone.x < 1.5 && vCloth < 0.01 && vBone.z < 0.035) {
    diffuseColor.rgb = uLegA.rgb * (0.8 + 0.4 * dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114)));
  }
  if (uLegA.w > 0.5 && vBone.x > 1.5 && vBone.x < 3.5) {
    vec3 c = diffuseColor.rgb;
    float shade = 0.8 + 0.4 * dot(c, vec3(0.299, 0.587, 0.114));
    float lx = vBone.y, ly = vBone.z, lz = vBone.w;
    if (uLegA.w < 1.5) { if (ly > uLegB.w) c = uLegA.rgb * shade; }
    else if (uLegA.w < 2.5) { if (ly > uLegB.w) c = (abs(lx) > 0.05 && abs(lz - 0.02) < 0.05 ? uLegB.rgb : uLegA.rgb) * shade; }
    else if (uLegA.w < 3.5) { if (ly < uLegB.w) c = uLegA.rgb * shade; }
    else {
      if (ly < -0.135) c = uLegA.rgb * shade;
      else if (ly < uLegB.w) { float s = step(0.55, fract((ly * 1.6 + abs(lx) + lz * 0.6) * 26.0)); c = mix(vec3(0.86, 0.8, 0.68), uLegB.rgb, s) * shade; }
    }
    diffuseColor.rgb = c;
  }`;
export function villagerTinted(hex, leg = null) {
  const key = hex + (leg ? '|' + leg.a.join(',') + '|' + leg.b.join(',') : '');
  if (villCache.has(key)) return villCache.get(key);
  const src = mats.get('villager');
  if (!src) return null;
  const m = src.clone();
  m.name = 'villager';
  const u = { value: new THREE.Color(hex) };
  const la = { value: new THREE.Vector4(...(leg ? leg.a : [0, 0, 0, 0])) };
  const lb = { value: new THREE.Vector4(...(leg ? leg.b : [0, 0, 0, 0])) };
  m.userData.uCloth = u;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uCloth = u; sh.uniforms.uLegA = la; sh.uniforms.uLegB = lb;
    sh.vertexShader = 'attribute float aCloth;\nattribute vec4 aBone;\nvarying float vCloth;\nvarying vec4 vBone;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vCloth = aCloth; vBone = aBone;');
    sh.fragmentShader = 'uniform vec3 uCloth;\nuniform vec4 uLegA;\nuniform vec4 uLegB;\nvarying float vCloth;\nvarying vec4 vBone;\n' + sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;' + LEG_GLSL);
  };
  m.customProgramCacheKey = () => 'vkw-villager-cloth2';
  villCache.set(key, m);
  return m;
}

export function load(path, onDone) {
  if (gltfs.has(path)) { if (onDone) onDone(); return Promise.resolve(gltfs.get(path)); }
  if (pending.has(path)) return pending.get(path).then((g) => { if (onDone) onDone(); return g; });
  const p = new Promise((resolve, reject) => {
    getLoader().load(BASE + path, (gltf) => {
      try { prepare(path, gltf); } catch (e) { console.warn('[VKWorld] hazırlama hatası', path, e); }
      gltfs.set(path, gltf);
      pending.delete(path);
      resolve(gltf);
    }, undefined, (err) => { pending.delete(path); reject(err); });
  });
  pending.set(path, p);
  return p.then((g) => { if (onDone) onDone(); return g; });
}

// Birden çok grubu yükler, ilerlemeyi bildirir
export function loadGroups(names, onProgress) {
  const files = [];
  for (const n of names) for (const f of GROUPS[n]) if (!files.includes(f)) files.push(f);
  let done = 0;
  const total = files.length;
  if (onProgress) onProgress(0, total);
  return Promise.all(files.map((f) => load(f, () => { done++; if (onProgress) onProgress(done, total); })));
}

export function has(path) { return gltfs.has(path); }
export function get(path) { return gltfs.get(path); }
export function groupLoaded(name) { return GROUPS[name].every((f) => gltfs.has(f)); }

// Paket içindeki bir prop'un şablonu (klonlamadan önce)
const BUNDLE_PATH = { graveyard: 'props/graveyard.glb', village: 'props/village.glb', furniture: 'interior/furniture.glb', clues: 'interior/clues.glb' };
export function prop(bundle, name) {
  const g = gltfs.get(BUNDLE_PATH[bundle] || 'props/village.glb');
  if (!g) return null;
  return g.scene.getObjectByName(name) || null;
}

export function clips() {
  const g = gltfs.get('characters/villager-anims.glb');
  return g ? g.animations : [];
}

// Oyuncu renginde kumaş malzemesi (renk başına bir tane, tüm karakterler paylaşır)
const tintCache = new Map();
export function tinted(baseName, hex, extra) {
  const key = baseName + '|' + hex + (extra || '');
  if (tintCache.has(key)) return tintCache.get(key);
  const src = mats.get(baseName);
  if (!src) return null;
  const m = src.clone();
  m.color.set(hex);
  m.name = baseName;
  tintCache.set(key, m);
  return m;
}

// fantasy-town-b (mavi/mor çatı) alternatif doku ile malzeme
export function altKitMaterial() {
  if (mats.has('fantasy-town-b')) return mats.get('fantasy-town-b');
  const src = mats.get('fantasy-town');
  if (!src) return null;
  const m = src.clone();
  m.name = 'fantasy-town-b';
  if (!altTexture) {
    altTexture = new THREE.TextureLoader().load(BASE + 'textures/fantasy-town-b.png');
    altTexture.flipY = false;
    altTexture.colorSpace = THREE.SRGBColorSpace;
    altTexture.anisotropy = 2;
    if (src.map) { altTexture.wrapS = src.map.wrapS; altTexture.wrapT = src.map.wrapT; }
  }
  m.map = altTexture;
  mats.set('fantasy-town-b', m);
  return m;
}

// ---------- Ev görünümleri (look.house) ----------
// Ev dokusu tek bir renk paleti atlasıdır (fantasy-town.png): görünüm = atlasın piksel piksel yeniden renklendirilmiş kopyası
// (görünüm başına bir kez, 512x512). Geometri ve çizim sayısı değişmez; yalnızca malzeme/doku farklıdır. 0 = varsayılan atlas.
// kural(h, s, l) -> [h, s, l] (h 0..360, s ve l 0..1). Adlar public/ui/data.js HOUSE_NAMES ile aynı sırada.
const HOUSE_SKIN_RULES = [
  null,
  // 1 Kırmızı kiremit: mavi/mor/yeşil-mavi çatı tonları kiremit kırmızısına döner
  (h, s, l) => (s > 0.28 && h > 150 && h < 310 ? [6 + (h % 12), Math.min(1, s * 1.1 + 0.15), l * 0.92] : [h, s, l]),
  // 2 Taş ev: doygunluk neredeyse gider, gri taş
  (h, s, l) => [215, s * 0.14, 0.28 + l * 0.6],
  // 3 Kış evi: karla örtülü: beyaza ve soğuk maviye çekilir
  (h, s, l) => [215, s * 0.32, 0.55 + l * 0.43],
  // 4 Çiçekli çatı: sıcak/mavi/deniz yeşili çatı tonları orman yeşiline; duvarlar kremaya kalır
  (h, s, l) => (s > 0.28 && ((h < 38 && l < 0.7 && s > 0.42) || (h > 150 && h < 310)) ? [105 + (h % 30), s * 0.62, l * 0.88] : [h, s, l]),
  // 5 Saray (yalnızca sahip): mor çatı, krem-lavanta duvar
  (h, s, l) => (s > 0.28 && ((h < 38 && l < 0.7 && s > 0.42) || (h > 150 && h < 310)) ? [268 + (h % 16), s * 0.72, l * 0.86] : [h, s * 0.85, l]),
  // 6..11: prosedürel eklentili evler (manors.js); doku yalnızca zemin rengini verir
  // 6 Değirmen: ahşap kahve çatı, krem duvar
  (h, s, l) => (roofish(h, s, l) ? [26 + (h % 8), s * 0.5, l * 0.72] : (h > 170 && h < 300 ? [40, 0.12 + s * 0.3, Math.min(0.9, 0.3 + l * 0.7)] : [h, s * 0.8, l])),
  // 7 Cumbalı ev: kırmızı kiremit, beyaz badanalı duvar
  (h, s, l) => (roofish(h, s, l) ? [8 + (h % 10), Math.min(1, s * 1.05), l * 0.85] : [h, s * 0.35, Math.min(0.95, 0.25 + l * 0.85)]),
  // 8 Osmanlı konağı: aşı boyası (toprak sarısı) duvar, koyu kiremit
  (h, s, l) => (roofish(h, s, l) ? [4 + (h % 8), s * 0.95, l * 0.75] : [36, Math.max(0.42, s * 0.8), 0.3 + l * 0.6]),
  // 9 Demirci: kurum tutmuş koyu taş
  (h, s, l) => [24, s * 0.16, 0.18 + l * 0.48],
  // 10 Çeşmeli taş ev: açık kesme taş, kahve çatı
  (h, s, l) => (roofish(h, s, l) ? [22, s * 0.45, l * 0.7] : [34, 0.16 + s * 0.22, 0.36 + l * 0.52]),
  // 11 Taç kapılı taş ev: sıcak kum taşı
  (h, s, l) => (roofish(h, s, l) ? [18, s * 0.5, l * 0.68] : [32, 0.26 + s * 0.3, 0.36 + l * 0.5]),
];
function roofish(h, s, l) { return s > 0.28 && ((h < 38 && l < 0.7 && s > 0.42) || (h > 150 && h < 310)); }
function rgb2hsl(r, g, b) {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  if (!d) return [0, 0, l];
  const s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
  let h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
}
function hsl2rgb(h, s, l) {
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)];
}
const houseSkinCache = new Map();
export const HOUSE_SKIN_COUNT = HOUSE_SKIN_RULES.length;
export function houseSkinMaterial(skin, base = 'fantasy-town') {
  const key = base + '|' + skin;
  if (houseSkinCache.has(key)) return houseSkinCache.get(key);
  const rule = HOUSE_SKIN_RULES[skin];
  const src = mats.get(base);
  let out = null;
  if (rule && src && src.map && src.map.image) {
    try {
      const img = src.map.image;
      const w = img.width, h = img.height;
      const cv = document.createElement('canvas');
      cv.width = w; cv.height = h;
      const cx = cv.getContext('2d', { willReadFrequently: true });
      cx.drawImage(img, 0, 0);
      const data = cx.getImageData(0, 0, w, h);
      const d = data.data;
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] === 0 || (d[i] + d[i + 1] + d[i + 2] === 0)) continue;   // boş/siyah alan
        const [hh, ss, ll] = rgb2hsl(d[i] / 255, d[i + 1] / 255, d[i + 2] / 255);
        const [nh, ns, nl] = rule(hh, ss, ll);
        const c = hsl2rgb(((nh % 360) + 360) % 360, Math.max(0, Math.min(1, ns)), Math.max(0, Math.min(1, nl)));
        d[i] = Math.round(c[0] * 255); d[i + 1] = Math.round(c[1] * 255); d[i + 2] = Math.round(c[2] * 255);
      }
      cx.putImageData(data, 0, 0);
      const tex = new THREE.CanvasTexture(cv);
      tex.flipY = src.map.flipY; tex.colorSpace = src.map.colorSpace; tex.anisotropy = 2;
      tex.wrapS = src.map.wrapS; tex.wrapT = src.map.wrapT;
      out = src.clone();
      out.map = tex;
      out.name = base + '-skin' + skin;
    } catch (e) { out = null; }
  }
  if (out) houseSkinCache.set(key, out);   // doku henüz hazır değilse (null) önbelleğe alınmaz: sonraki çağrıda yeniden denenir
  return out;
}

export function allMaterials() { return [...mats.values(), ...tintCache.values(), ...houseSkinCache.values()]; }

// Paylaşılan GPU kaynaklarını serbest bırak. three.js her oluşturucu için paylaşılan malzeme/geometri/dokulara
// 'dispose' dinleyicisi ekler; bunlar silinmezse kapatılan dünyanın oluşturucusu bellekte kalır. dispose()
// nesneleri bozmaz: hâlâ kullanılan bir oluşturucu (ör. önizleme) bir sonraki çizimde yeniden yükler.
export function releaseGPU() {
  const seen = new Set();
  const rel = (o) => { if (o && !seen.has(o)) { seen.add(o); o.dispose(); } };
  for (const g of gltfs.values()) {
    g.scene.traverse((o) => {
      if (o.geometry) rel(o.geometry);
      const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
      for (const m of ms) { rel(m); if (m.map) rel(m.map); }
    });
  }
  for (const m of mats.values()) { rel(m); if (m.map) rel(m.map); }
  for (const m of tintCache.values()) rel(m);
  for (const m of houseSkinCache.values()) { rel(m); if (m.map) rel(m.map); }
  for (const m of villCache.values()) rel(m);
  if (altTexture) rel(altTexture);
}

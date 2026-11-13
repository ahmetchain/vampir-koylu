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
const villCache = new Map();
export function villagerTinted(hex) {
  if (villCache.has(hex)) return villCache.get(hex);
  const src = mats.get('villager');
  if (!src) return null;
  const m = src.clone();
  m.name = 'villager';
  const u = { value: new THREE.Color(hex) };
  m.userData.uCloth = u;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uCloth = u;
    sh.vertexShader = 'attribute float aCloth;\nvarying float vCloth;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vCloth = aCloth;');
    sh.fragmentShader = 'uniform vec3 uCloth;\nvarying float vCloth;\n' + sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;');
  };
  m.customProgramCacheKey = () => 'vkw-villager-cloth';
  villCache.set(hex, m);
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

export function allMaterials() { return [...mats.values(), ...tintCache.values()]; }

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
  for (const m of villCache.values()) rel(m);
  if (altTexture) rel(altTexture);
}

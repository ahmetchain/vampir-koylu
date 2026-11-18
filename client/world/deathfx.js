// Ölüm efektleri: (1) kod üretimi "yere yığılma" klibi, (2) toz olup dağılma (dissolve) gölgelendiricisi.
// Yığılma: Kenney iskeletinde diz kemiği yok (bacak tek parça) -> kalçadan geriye bükülen bacak + çöken gövde,
// sendeleme, öne düşüş (yerçekimi ivmesi), yere çarpınca sekme ve yana yarım dönüş. ~1.3 sn, tüm eğriler yumuşatılmış.
// Dissolve: karakterin kendi malzemeleri YALNIZ ölen karakter için klonlanır; onBeforeCompile ile dünya konumlu 3B gürültü
// eşiği + eşik kenarında emissive şerit + discard eklenir; bitince eski (paylaşılan) malzemeler geri konur, klonlar atılır.
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import * as A from './assets.js';
import { COLOR_HEX } from './constants.js';
import { makeHat } from './hats.js';

// ---------- 1) yığılma klibi ----------
const DUR = 1.3;
const FPS = 30;
const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const qx = (a) => new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), a);
const qy = (a) => new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a);
const qz = (a) => new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), a);
// parçalı yumuşak eğri: [[u, değer], ...] arası smoothstep
function curve(keys, u) {
  if (u <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (u <= keys[i][0]) { const [u0, v0] = keys[i - 1], [u1, v1] = keys[i]; return v0 + (v1 - v0) * sm(u0, u1, u); }
  }
  return keys[keys.length - 1][1];
}
let clipCache = null;
export function collapseClip() {
  if (clipCache) return clipCache;
  const n = Math.round(DUR * FPS) + 1;
  const times = [], pos = [], rq = [], legL = [], legR = [], torso = [], head = [], armL = [], armR = [];
  const q = new THREE.Quaternion();
  const push = (arr, quat) => arr.push(quat.x, quat.y, quat.z, quat.w);
  for (let i = 0; i < n; i++) {
    const u = i / (n - 1);
    times.push(u * DUR);
    // gövde eğimi (radyan, +ön): hafif öne eğilme -> sendeleme -> yerçekimiyle düşüş -> çarpıp sekme -> yerleşme
    const pitch = curve([[0, 0], [0.16, 0.1], [0.36, 0.2], [0.58, 0.5], [0.8, 1.38], [0.87, 1.55], [0.93, 1.44], [1, 1.5]], u);
    const fp = Math.min(1, pitch / 1.5);
    const kneel = sm(0.12, 0.46, u) * (1 - sm(0.5, 0.82, u));        // dizler çöker, düşerken açılır
    const sway = Math.sin(u * 8.5) * 0.11 * (1 - sm(0.45, 0.7, u));   // yan sendeleme
    const twist = 0.55 * sm(0.78, 1.0, u);                            // yere inince yana yarım dönüş
    pos.push(sway * 0.35 * (1 - fp), -0.067 * kneel + 0.1 * fp, 0.06 * fp);
    push(rq, q.copy(qx(pitch)).multiply(qy(twist)).multiply(qz(sway)));
    // bacaklar: kalçadan geriye (diz çökme), düşünce hafif açık
    const lg = 0.95 * kneel + 0.14 * sm(0.7, 1, u);
    push(legL, q.copy(qx(lg)).multiply(qz(-0.05 - 0.12 * sm(0.7, 1, u))));
    push(legR, q.copy(qx(lg * 0.8 + 0.1 * sm(0.7, 1, u))).multiply(qz(0.05 + 0.16 * sm(0.7, 1, u))));
    // gövde kamburlaşır; çarpınca hafif yay, sonra düz
    const hunch = 0.5 * sm(0.1, 0.45, u) * (1 - sm(0.6, 0.85, u)) - 0.12 * (sm(0.84, 0.9, u) - sm(0.9, 1, u));
    push(torso, qx(hunch));
    // baş: önce düşer, çarpınca geriye savrulur, yerleşir
    const hd = curve([[0, 0], [0.3, 0.55], [0.7, 0.35], [0.85, -0.05], [0.9, -0.38], [1, 0.12]], u);
    push(head, q.copy(qx(hd)).multiply(qz(0.18 * sm(0.5, 1, u))));
    // kollar: göğse/öne uzanır (yakalamaya çalışır), düşerken savrulur, yerde gevşek
    const ax = curve([[0, 0], [0.22, -0.9], [0.55, -1.35], [0.8, -0.9], [0.9, -0.1], [1, 0.25]], u);
    const az = curve([[0, 0.78], [0.4, 0.55], [0.8, 1.0], [1, 1.25]], u);
    push(armL, q.copy(qx(ax)).multiply(qz(az)));
    push(armR, q.copy(qx(ax * 0.9 - 0.1 * Math.sin(u * 12) * (1 - u))).multiply(qz(-az * 0.95)));
  }
  const T = THREE.QuaternionKeyframeTrack, V = THREE.VectorKeyframeTrack;
  clipCache = new THREE.AnimationClip('collapse', DUR, [
    new V('root.position', times, pos),
    new T('root.quaternion', times, rq),
    new T('leg-left.quaternion', times, legL),
    new T('leg-right.quaternion', times, legR),
    new T('torso.quaternion', times, torso),
    new T('head.quaternion', times, head),
    new T('arm-left.quaternion', times, armL),
    new T('arm-right.quaternion', times, armR),
  ]);
  return clipCache;
}
export const COLLAPSE_DUR = DUR;

// Karakteri yığılma klibine geçirir (crossFade: Character'ın ağırlık geçişi) ve sonunda yerde bırakır.
export function playCollapse(ch, speed = 1) {
  const clip = collapseClip();
  const arr = A.clips();
  if (!arr.includes(clip)) arr.push(clip);
  if (ch.clips !== arr) ch.clips = arr;
  const a = ch.action('collapse');
  if (!a) return 0;
  ch.path = null; ch.speed = 0;
  a.setLoop(THREE.LoopOnce, 1);
  a.clampWhenFinished = true;
  ch.setBase('collapse', 0.18);
  a.reset(); a.time = 0; a.timeScale = 1 / Math.max(0.3, speed); a.play();
  ch.animEvery = 1;
  return DUR * speed;
}

// ---------- 2) dissolve ----------
const GLSL_NOISE = `
float vkH(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vkN(vec3 x){
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(vkH(i), vkH(i + vec3(1,0,0)), f.x), mix(vkH(i + vec3(0,1,0)), vkH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(vkH(i + vec3(0,0,1)), vkH(i + vec3(1,0,1)), f.x), mix(vkH(i + vec3(0,1,1)), vkH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float vkF(vec3 p){ return 0.62 * vkN(p) + 0.28 * vkN(p * 2.3 + 7.1) + 0.10 * vkN(p * 5.1 + 3.3); }
`;
const KEY = '|vkw-dissolve';

function makeUniforms(kind) {
  const cold = kind === 'cold';
  return {
    uDis: { value: 0 },
    uDW: { value: 0.09 },
    uDCore: { value: new THREE.Color(cold ? '#e6f3ff' : '#ffc860') },
    uDEdge: { value: new THREE.Color(cold ? '#4a78c8' : '#e8330c') },
    uDA: { value: new THREE.Vector3() },
    uDD: { value: new THREE.Vector3(0, 1, 0) },
  };
}

// Kaynak malzemenin klonu + dissolve eki; kaynağın kendi onBeforeCompile'ı (kumaş rengi gibi) önce çalışır
function wrapMaterial(src, U) {
  const m = src.clone();
  const pre = src.onBeforeCompile;
  let preKey = '';
  try { preKey = String(src.customProgramCacheKey()); } catch (e) { /* boş */ }
  m.onBeforeCompile = (sh, r) => {
    if (typeof pre === 'function') pre.call(m, sh, r);
    for (const k of Object.keys(U)) sh.uniforms[k] = U[k];
    sh.vertexShader = 'varying vec3 vVkWP;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n  vVkWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = 'uniform float uDis; uniform float uDW; uniform vec3 uDCore; uniform vec3 uDEdge; uniform vec3 uDA; uniform vec3 uDD;\nvarying vec3 vVkWP;\n' + GLSL_NOISE + sh.fragmentShader
      .replace('#include <alphatest_fragment>', `#include <alphatest_fragment>
  float vkh = clamp(dot(vVkWP - uDA, uDD), 0.0, 1.0);
  float vkd = smoothstep(0.3, 0.7, vkF(vVkWP * 6.5)) * 0.76 + vkh * 0.24;
  float vkT = uDis * (1.0 + uDW);
  if (vkd < vkT - uDW) discard;
  float vkE = uDis > 0.0 ? 1.0 - smoothstep(0.0, uDW, vkd - (vkT - uDW)) : 0.0;
  diffuseColor.rgb = mix(diffuseColor.rgb, uDEdge * 0.12, vkE * 0.75);`)
      .replace('#include <opaque_fragment>', `outgoingLight += mix(uDEdge, uDCore, vkE * vkE) * vkE * 1.9;
  #include <opaque_fragment>`);
  };
  m.customProgramCacheKey = () => preKey + KEY;
  m.userData.vkDissolve = true;
  return m;
}

// Oyun başında gölgelendiriciyi derlemek için kalıcı (sahneye eklenmeyen) örnek: gövde (kumaşlı, deri bağlı) + şapka
let warm = null;
export function warmObject() {
  if (warm) return warm;
  const g = A.get('characters/villager-00.glb');
  const vm = A.villagerTinted(COLOR_HEX[0]);
  if (!g || !vm) return null;
  const U = makeUniforms('burn');
  const root = new THREE.Group();
  const model = SkeletonUtils.clone(g.scene);
  model.traverse((o) => {
    if (!o.isMesh) return;
    if (o.isSkinnedMesh && o.userData.clothMerged && o.material.name === 'villager') o.material = vm;
    o.material = wrapMaterial(o.material, U);
  });
  root.add(model);
  try {
    const hat = makeHat(1, 0);
    if (hat) { hat.traverse((o) => { if (o.isMesh) o.material = wrapMaterial(o.material, U); }); root.add(hat); }
  } catch (e) { /* şapkasız da olur */ }
  root.userData.U = U;
  warm = root;
  return warm;
}

// Derleme yetmez: sürücü programı ilk gerçek çizimde sonlandırır (~50 ms takılma). Örnek, görünmez ölçekte (ve tüm parçaları
// discard edilerek) 3 kare gerçek sahneye çizdirilir; ilk gerçek ölüm sahnesi takılmaz.
let warmed = false;
export function warmDraw(world) {
  const w = warmObject();
  if (!w || warmed) return;
  warmed = true;
  w.userData.U.uDis.value = 1;
  w.scale.setScalar(0.001);
  w.traverse((c) => { c.frustumCulled = false; });
  world.scene.add(w);
  const fwd = new THREE.Vector3();
  let n = 0;
  world.ticker.push(() => {
    world.camera.getWorldDirection(fwd);
    w.position.copy(world.camera.position).addScaledVector(fwd, 2);
    if (++n < 4) return false;
    world.scene.remove(w);
    return true;
  });
}

const BONES = ['torso', 'head', 'leg-left', 'leg-right', 'arm-left', 'arm-right'];
const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), tmpC = new THREE.Vector3();

// Ölen karakteri toz olarak dağıtır. o: { kind: 'burn'|'cold', dur, from: 'feet'|'head', alive: () => bool, hide: bool }
// Döner: { promise, cancel }. Karakter dissolve süresince kendi klon malzemelerini kullanır; bitince/iptalde geri alınır.
export function dissolve(world, ch, o = {}) {
  const reduced = world.reducedMotion && world.reducedMotion();
  const tier = world.tierName ? world.tierName() : 'high';
  const dur = reduced ? Math.min(0.6, o.dur || 1.6) : (o.dur || 1.6);
  const budget = reduced ? 0 : tier === 'saver' ? 14 : tier === 'low' ? 26 : tier === 'medium' ? 46 : 70;
  const kind = o.kind === 'cold' ? 'cold' : 'burn';
  const U = makeUniforms(kind);
  const saved = [];
  if (!ch.model) return { promise: Promise.resolve(), cancel() {} };
  ch.model.traverse((m) => {
    if (m.userData.outline) { saved.push({ m, outline: true, vis: m.visible }); m.visible = false; return; }
    if (!m.isMesh || Array.isArray(m.material)) return;
    saved.push({ m, mat: m.material, shadow: m.castShadow });
    m.material = wrapMaterial(m.material, U);
  });
  // gövde ekseni (ayak -> baş), dünya uzayında; yatan gövdede de doğru
  ch.root.updateMatrixWorld(true);
  const bone = (n) => ch.model.getObjectByName(n);
  const head = bone('head'), l = bone('leg-left'), r = bone('leg-right');
  const hp = head ? head.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(ch.pos.x, ch.pos.y + 1.8, ch.pos.z);
  const lp = (l && r) ? l.getWorldPosition(tmpA).add(r.getWorldPosition(tmpB)).multiplyScalar(0.5).clone() : new THREE.Vector3(ch.pos.x, ch.pos.y + 0.5, ch.pos.z);
  const up = tmpC.copy(hp).sub(lp);
  const a0 = lp.clone().addScaledVector(up, -0.55), b0 = hp.clone().addScaledVector(up, 0.3);
  const [s, e] = o.from === 'head' ? [b0, a0] : [a0, b0];
  const axis = e.clone().sub(s);
  U.uDA.value.copy(s);
  U.uDD.value.copy(axis).multiplyScalar(1 / Math.max(1e-4, axis.lengthSq()));
  const bones = BONES.map(bone).filter(Boolean);
  const feetP = lp.clone(), headP = hp.clone();

  let t = 0, finished = false, acc = 0, resolveFn;
  const promise = new Promise((res) => { resolveFn = res; });
  const emitAt = (k) => {
    // gövde çizgisi (ayak -> baş) üstünde rastgele nokta, dissolve ilerledikçe tüm boya yayılır
    const h = Math.random();
    const px = feetP.x + (headP.x - feetP.x) * h, py = feetP.y + (headP.y - feetP.y) * h, pz = feetP.z + (headP.z - feetP.z) * h;
    const ang = Math.random() * Math.PI * 2, rad = 0.1 + Math.random() * 0.22;
    const x = px + Math.cos(ang) * rad, z = pz + Math.sin(ang) * rad, y = Math.max(0.05, py + (Math.random() - 0.3) * 0.2);
    if (Math.random() < 0.55) world.fx.emit('ember', x, y, z, kind === 'cold' ? '#bcd8ff' : (Math.random() < 0.5 ? '#ff8a2a' : '#ff4a1a'), 1);
    else world.fx.emit('ash', x, y, z, kind === 'cold' ? '#9aa6b8' : '#4a4448', 1);
  };
  const finish = (skipHide) => {
    if (finished) return;
    finished = true;
    if (o.hide !== false && skipHide !== true) ch.setVisible(false);
    for (const it of saved) {
      if (it.outline) { it.m.visible = it.vis; continue; }
      const cur = it.m.material;
      it.m.material = it.mat;
      it.m.castShadow = it.shadow;
      if (cur && cur !== it.mat) cur.dispose();
    }
    resolveFn();
  };
  const total = budget;
  world.ticker.push((dt) => {
    if (finished) return true;
    if (o.alive && !o.alive()) { finish(true); return true; }
    t += dt;
    const k = Math.min(1, t / dur);
    U.uDis.value = k * k * (3 - 2 * k) * 0.999 + (k >= 1 ? 0.001 : 0);
    if (k > 0.3) for (const it of saved) if (!it.outline) it.m.castShadow = false;
    if (total && k < 1) {
      acc += (total / dur) * dt * (0.4 + 1.2 * Math.sin(Math.min(1, k) * Math.PI));
      while (acc >= 1) { acc -= 1; emitAt(k); }
    }
    if (k >= 1) { finish(); return true; }
    return false;
  });
  return { promise, cancel: () => finish(true) };
}

// "Çizim" görünümü (deneme, varsayılan kapalı): bantlı (toon) gölgelendirme, ters kabuk dış çizgi,
// daha düz ışık, gerçek zamanlı gölge yerine yuvarlak gölge lekeleri, biraz daha doygun renkler.
// Lambert/Basic gölgelendiricileri VKW_TOON tanımıyla iki yola ayrılır: tanım değişince program da değişir.
import * as THREE from 'three';

const C = THREE.ShaderChunk;
if (!C.__vkwToon) {
  C.__vkwToon = true;
  // iki bant: aydınlık / gölgeli (yumuşak geçişli kenar)
  C.lights_lambert_pars_fragment = C.lights_lambert_pars_fragment.replace(
    'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );',
    `float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	#ifdef VKW_TOON
	dotNL = mix( 0.3, 1.0, smoothstep( 0.1, 0.2, dotNL ) );
	#endif`);
  // doygunluk
  C.dithering_fragment = `#ifdef VKW_TOON
	{ float vkwL = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) ); gl_FragColor.rgb = max( vec3( 0.0 ), mix( vec3( vkwL ), gl_FragColor.rgb, 1.22 ) ); }
#endif
` + C.dithering_fragment;
}

// Dış çizgi malzemesi: arka yüzleri normal yönünde şişirilmiş koyu kabuk (deri/örnek/toplu ağ değişkenleri otomatik)
const outlineMats = new Map();
export function outlineMat(width) {
  const key = width.toFixed(4);
  if (outlineMats.has(key)) return outlineMats.get(key);
  const m = new THREE.MeshBasicMaterial({ color: '#21142c', side: THREE.BackSide, fog: true });
  m.name = 'vkw-outline';
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>\n\ttransformed += normalize( normal ) * ${width.toFixed(4)};`);
  };
  m.customProgramCacheKey = () => 'vkw-outline-' + key;
  outlineMats.set(key, m);
  return m;
}
export function disposeOutlineMats() { for (const m of outlineMats.values()) m.dispose(); outlineMats.clear(); }

// Sahnedeki Lambert/Basic malzemelerine görünüm tanımını uygula (değişenler yeniden derlenir)
export function applyToonDefines(root, on) {
  let n = 0;
  root.traverse((o) => {
    if (!o.material) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!(m.isMeshLambertMaterial || m.isMeshBasicMaterial) || m.name === 'vkw-outline') continue;
      const has = !!(m.defines && 'VKW_TOON' in m.defines);
      if (has === on) continue;
      m.defines = { ...(m.defines || {}) };
      if (on) m.defines.VKW_TOON = ''; else delete m.defines.VKW_TOON;
      m.needsUpdate = true;
      n++;
    }
  });
  return n;
}

// ---- birleşik karakter kabuğu ----
// Aynı iskelete aynı bağlama ile bağlı deri ağları (gövde + kıyafet) ve kemiğe takılı, kalıcı olarak işaretli katı ağlar
// (userData.mergeOutline: glb şapka) TEK kabuk ağında birleşir: karakter başına bir dış çizgi çizim çağrısı.
// Kabuk yalnızca konum/normal/deri öznitelikleri taşır; katı parçalar kemik-yerel yerleşimleriyle bağlama uzayına taşınır
// (kemik ağırlığı 1) ve ayrı kabuktaki gibi kemikle birlikte hareket eder. Geometri parça kümesine göre önbellekte paylaşılır.
const mergedGeos = new Map();   // anahtar -> BufferGeometry (en eski kullanılan önce bırakılır)
const MERGED_MAX = 64;
const tmpN = new THREE.Matrix3(), tmpV = new THREE.Vector3();
function sameMatrix(a, b) { const x = a.elements, y = b.elements; for (let i = 0; i < 16; i++) if (Math.abs(x[i] - y[i]) > 1e-6) return false; return true; }
function boneOf(o, bones) {
  const M = new THREE.Matrix4();
  for (let n = o; n; n = n.parent) {
    const i = bones.indexOf(n);
    if (i >= 0) return { i, local: M };
    n.updateMatrix();
    M.premultiply(n.matrix);
  }
  return null;
}
function mergedOutlineGeometry(skinned, rigid, key) {
  if (mergedGeos.has(key)) { const g = mergedGeos.get(key); mergedGeos.delete(key); mergedGeos.set(key, g); return g; }
  let nv = 0, ni = 0;
  for (const p of [...skinned, ...rigid]) { const g = p.geo; nv += g.attributes.position.count; ni += g.index ? g.index.count : g.attributes.position.count; }
  const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3), si = new Uint16Array(nv * 4), sw = new Float32Array(nv * 4);
  const idx = nv > 65535 ? new Uint32Array(ni) : new Uint16Array(ni);
  let v0 = 0, i0 = 0;
  const put = (g, fill) => {
    const P = g.attributes.position, N = g.attributes.normal, n = P.count;
    for (let k = 0; k < n; k++) fill(k, v0 + k, P, N);
    if (g.index) { const I = g.index; for (let k = 0; k < I.count; k++) idx[i0 + k] = I.getX(k) + v0; i0 += I.count; } else { for (let k = 0; k < n; k++) idx[i0 + k] = v0 + k; i0 += n; }
    v0 += n;
  };
  for (const p of skinned) {
    const SI = p.geo.attributes.skinIndex, SW = p.geo.attributes.skinWeight;
    put(p.geo, (k, j, P, N) => {
      pos[j * 3] = P.getX(k); pos[j * 3 + 1] = P.getY(k); pos[j * 3 + 2] = P.getZ(k);
      if (N) { nor[j * 3] = N.getX(k); nor[j * 3 + 1] = N.getY(k); nor[j * 3 + 2] = N.getZ(k); }
      si[j * 4] = SI.getX(k); si[j * 4 + 1] = SI.getY(k); si[j * 4 + 2] = SI.getZ(k); si[j * 4 + 3] = SI.getW(k);
      sw[j * 4] = SW.getX(k); sw[j * 4 + 1] = SW.getY(k); sw[j * 4 + 2] = SW.getZ(k); sw[j * 4 + 3] = SW.getW(k);
    });
  }
  for (const p of rigid) {
    tmpN.getNormalMatrix(p.m);
    put(p.geo, (k, j, P, N) => {
      tmpV.set(P.getX(k), P.getY(k), P.getZ(k)).applyMatrix4(p.m);
      pos[j * 3] = tmpV.x; pos[j * 3 + 1] = tmpV.y; pos[j * 3 + 2] = tmpV.z;
      if (N) { tmpV.set(N.getX(k), N.getY(k), N.getZ(k)).applyMatrix3(tmpN).normalize(); nor[j * 3] = tmpV.x; nor[j * 3 + 1] = tmpV.y; nor[j * 3 + 2] = tmpV.z; }
      si[j * 4] = p.bone; sw[j * 4] = 1;
    });
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeBoundingSphere();
  mergedGeos.set(key, g);
  while (mergedGeos.size > MERGED_MAX) { const [k0, g0] = mergedGeos.entries().next().value; mergedGeos.delete(k0); g0.dispose(); }
  return g;
}
// Birleşebilen grupları kur ve kabuklarını ekle; birleşenler listeden çıkar (kalanlar tek tek kabuk alır).
function addMergedOutlines(list, width) {
  const used = new Set();
  const groups = new Map();
  for (const o of list) {
    if (!o.isSkinnedMesh || !o.skeleton || o.morphTargetInfluences || Array.isArray(o.material)) continue;
    const g = o.geometry, A = g.attributes;
    if (!A.position || !A.skinIndex || !A.skinWeight || g.groups.length > 1) continue;
    const head = groups.get(o.skeleton);
    if (!head) { groups.set(o.skeleton, { first: o, skinned: [o], rigid: [] }); continue; }
    const f = head.first;
    if (o.parent === f.parent && o.bindMode === f.bindMode && o.renderOrder === f.renderOrder && sameMatrix(o.bindMatrix, f.bindMatrix)
      && o.position.equals(f.position) && o.quaternion.equals(f.quaternion) && o.scale.equals(f.scale)) head.skinned.push(o);
  }
  for (const o of list) {
    if (o.isSkinnedMesh || !o.userData.mergeOutline || Array.isArray(o.material) || o.geometry.groups.length > 1) continue;
    for (const grp of groups.values()) {
      const b = boneOf(o, grp.first.skeleton.bones);
      if (!b) continue;
      // bağlama uzayı = (kemik tersi · bindMatrix)^-1 · kemik-yerel yerleşim (outfits.js toSkinned ile aynı dönüşüm)
      const M = grp.first.skeleton.boneInverses[b.i].clone().multiply(grp.first.bindMatrix).invert().multiply(b.local);
      grp.rigid.push({ o, bone: b.i, m: M });
      break;
    }
  }
  for (const grp of groups.values()) {
    if (grp.skinned.length + grp.rigid.length < 2) continue;
    const f = grp.first;
    const key = grp.skinned.map((o) => o.geometry.uuid).join('|') + '#' + grp.rigid.map((r) => r.o.geometry.uuid + ':' + r.bone + ':' + r.m.elements.map((v) => v.toFixed(4)).join(',')).join('|');
    let geo;
    try {
      geo = mergedOutlineGeometry(grp.skinned.map((o) => ({ geo: o.geometry })), grp.rigid.map((r) => ({ geo: r.o.geometry, m: r.m, bone: r.bone })), key);
    } catch (e) { console.warn('[VKWorld] birleşik kabuk kurulamadı', e); continue; }
    const h = new THREE.SkinnedMesh(geo, outlineMat(width));
    h.bind(f.skeleton, f.bindMatrix);
    h.bindMode = f.bindMode;
    h.position.copy(f.position); h.quaternion.copy(f.quaternion); h.scale.copy(f.scale);
    h.matrixAutoUpdate = f.matrixAutoUpdate;
    if (!f.matrixAutoUpdate) h.matrix.copy(f.matrix);
    // sınır küresi: gövdeninki (yatma pozunu kapsar) + birleşen parçaların bağlama uzayındaki küresi
    h.boundingSphere = f.boundingSphere ? f.boundingSphere.clone() : null;
    if (h.boundingSphere && geo.boundingSphere) h.boundingSphere.union(geo.boundingSphere);
    h.frustumCulled = f.frustumCulled;
    h.castShadow = false; h.receiveShadow = false;
    h.renderOrder = f.renderOrder;
    h.userData.outline = true;
    f.parent.add(h);
    for (const o of grp.skinned) { o.userData.hasOutline = h; used.add(o); }
    for (const r of grp.rigid) { r.o.userData.hasOutline = h; used.add(r.o); }
  }
  return list.filter((o) => !used.has(o));
}
export function releaseOutlineGeos() { for (const g of mergedGeos.values()) g.dispose(); mergedGeos.clear(); }

// Bir nesnenin (karakter modeli, dekor grubu) ağlarına kabuk ekle / kaldır.
// opts.merge: karakter modelleri için birleşik kabuk (yukarıda); birleşemeyen ağlar eskisi gibi tek tek kabuk alır.
export function addOutlines(root, width, filter, opts) {
  let list = [];
  root.traverse((o) => { if (o.isMesh && !o.userData.outline && !o.userData.hasOutline && (!filter || filter(o))) list.push(o); });
  if (opts && opts.merge) { root.updateMatrixWorld(true); list = addMergedOutlines(list, width); }
  for (const o of list) {
    let h;
    if (o.isSkinnedMesh) {
      h = new THREE.SkinnedMesh(o.geometry, outlineMat(width));
      h.bind(o.skeleton, o.bindMatrix);
      h.bindMode = o.bindMode;
      if (o.boundingSphere) h.boundingSphere = o.boundingSphere;
    } else h = new THREE.Mesh(o.geometry, outlineMat(width));
    h.position.copy(o.position); h.quaternion.copy(o.quaternion); h.scale.copy(o.scale);
    h.matrixAutoUpdate = o.matrixAutoUpdate;
    if (!o.matrixAutoUpdate) h.matrix.copy(o.matrix);
    h.frustumCulled = o.frustumCulled;
    h.castShadow = false; h.receiveShadow = false;
    h.renderOrder = o.renderOrder;
    h.userData.outline = true;
    o.userData.hasOutline = h;
    o.parent.add(h);
  }
}
export function removeOutlines(root) {
  const list = [];
  root.traverse((o) => { if (o.userData.outline) list.push(o); if (o.userData.hasOutline) o.userData.hasOutline = null; });
  for (const o of list) o.parent && o.parent.remove(o);
}

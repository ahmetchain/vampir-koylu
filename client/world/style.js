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

// Bir nesnenin (karakter modeli, dekor grubu) ağlarına kabuk ekle / kaldır
export function addOutlines(root, width, filter) {
  const list = [];
  root.traverse((o) => { if (o.isMesh && !o.userData.outline && !o.userData.hasOutline && (!filter || filter(o))) list.push(o); });
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

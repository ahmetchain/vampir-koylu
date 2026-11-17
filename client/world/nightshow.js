// Gece gösterisi (§15.1): gecenin "gösteri" aşamasında sunucunun izleyiciye özel state.night.show verisi oynatılır.
// Kendi karakterin (ve kötü takım arkadaşların) evden çıkar, hedef eve yürür, girer, çıkar ve evine döner; gözcü
// arka pencereden gelenleri izler; saldırıya uğrayan ev sahibi kendi odasında kimliksiz siyah siluetleri görür.
// Her şey 20 sn'lik pencereye sığar; zamanlar sabit değil, her yürüyüşün gerçek yol uzunluğundan doğal tempoda
// (yürü / tempolu yürü, uzak evde kısa koşu) hesaplanır: kapıdan çık -> yürü -> gir / kilitli kapıdan dön / arka
// pencereden bak -> eve yürü, kapıdan gir. Aşama erken biterse ya da herkese açık bir duyuru gelirse gösteri kesilir
// ve devralınan karakterler evlerine (gizli) geri konur. Ayrı (kapsamlı) bir yönetmenle çalışır: ana yönetmenin
// sinematikleri (ör. 14. sn'deki kahin sonucu) kamerayı ve odayı alır, gösteri arkada yürümeye devam eder.
import * as THREE from 'three';
import { PACE, EFF, RUN_MAX, DOOR_OUT, DOOR_IN } from './choreo.js';
import { wrapAngle } from './constants.js';

export const SHOW_S = 20;            // sunucudaki NIGHT_SHOW_MS ile aynı
const END_T = SHOW_S - 0.6;          // herkes evine girmiş olsun
const V_NAT = 3.0;                   // doğal gece temposu (ortalama m/sn; adımda tempolu yürüyüş)
const V_FAST = PACE.sprint * EFF * 0.95;   // ~4.5: kısa koşu
const KILL_BY = 8.6;                 // öldürme yolculuğunda kapıya en geç varış (oda sahnesi sonuç kartlarından önce biter)
const VISIT_IN = DOOR_IN + 1.0;        // gözcünün izlediği evde bir ziyaretçinin içeride kalışı (kapıdan giriş dahil)
const KILL_TRIP = { kill: 1, steal: 1, poison: 1 };

// Hedefte kalma süresi (kapıdan girişi de içerir): öldürme (oda sahnesi), kilitli kapı (tıklat, dön), kısa ziyaret
function dwellFor(kill, bounced, peek) {
  if (peek) return { dwell: 3.5, dwellMin: 2.0 };
  if (bounced) return { dwell: 1.9, dwellMin: 1.5 };
  if (kill) return { dwell: DOOR_IN + 3.0, dwellMin: DOOR_IN + 2.3 };
  return { dwell: DOOR_IN + 1.4, dwellMin: DOOR_IN + 0.7 };
}
function legFix(r, peek) {
  const tailT = r.tail ? r.tail / (PACE.sneak * EFF) : 0;
  return { outFix: DOOR_OUT + tailT, backFix: (peek ? tailT : DOOR_OUT) + DOOR_IN };
}
// doğal tempoda bir yolculuğun toplam süresi (sn)
function natural(r, dwell, peek) {
  const f = legFix(r, peek);
  return f.outFix + r.out / V_NAT + dwell + f.backFix + r.back / V_NAT;
}
// Yol uzunluklarından (r: { out, tail, back } m) gösteri saatleri: { s0 kapıdan çıkış, tA varış, tL ayrılış, tH evde }.
// o: { s0, tA? (sabit varış: gözcünün gördüğü gelen), tAmin?, tAmax?, dwell, dwellMin?, end, peek }.
// Önce doğal tempo; sığmazsa önce bekleyiş kısalır, sonra dönüş, o da kısa koşuyu aşarsa gidiş de hızlanır.
// Gerçek adım hızı yürüme anında kalan süreden seçilir (choreo.budgetWalk); burada yalnız saatler kurulur.
export function fitTrip(r, o) {
  const { outFix, backFix } = legFix(r, o.peek);
  let s0 = o.s0, tA;
  if (o.tA != null) {
    tA = o.tA;
    s0 = Math.max(o.s0, tA - outFix - r.out / V_NAT);
  } else {
    tA = s0 + outFix + r.out / V_NAT;
    if (o.tAmin != null && tA < o.tAmin) tA = o.tAmin;
    if (o.tAmax != null && tA > o.tAmax) tA = Math.max(o.tAmax, s0 + outFix + r.out / (RUN_MAX * EFF * 0.9));
  }
  // gidiş ve hedefteki an önceliklidir: dönüş sığmazsa bekleyiş yalnız gösteri sonunu aşacaksa kısalır; dönüş
  // yolu kalan sürede yürünür/koşulur, yetmezse sonuna doğru sise karışır (choreo.budgetWalk ret)
  let dwell = o.dwell;
  const dMin = o.dwellMin != null ? Math.min(o.dwellMin, dwell) : dwell;
  const tHmax = o.end - 1.5;   // dönüşe en az bu kadar kalsın
  if (tA + dwell + backFix > tHmax) dwell = Math.max(dMin, tHmax - tA - backFix);
  const tH = tA + dwell + backFix + r.back / V_NAT;
  return { s0, tA, tL: tA + dwell, tH: Math.min(o.end, tH) };
}
function fadeFig(f, k) {
  const u = f && f.root.userData;
  if (!u || !u.mats) return;
  for (let i = 0; i < u.mats.length; i++) u.mats[i].opacity = u.op * k;
}
const HOME_KILL = { attack: 1, steal: 1, poison: 1 };
const GREEN = '#5fe08a';
// gösteriyi kesmeyen (izleyiciye özel) duyurular
export const PRIVATE_KINDS = { seer: 1, watch: 1, promote: 1, locked: 1, bounced: 1, lockreport: 1, steal: 1, stealfail: 1, saved: 1, attacked: 1, killed: 1 };

export function createNightShow(world, dir, choreo, H) {
  let startedSig = '';
  let startedRound = -1;
  let nightRound = -1;
  let deadSeen = false;        // izleyici bu gece kendi ölümünü gösteride gördü
  let watched = null;          // gözcünün bu gece canlı izlediği ev
  let focus = null;            // kamera odağı (dünya noktaları) ya da null
  let watchCam = null;         // gözcü penceredeyken kamera: { hid, pts } (ev, kapı önü, gelenlerin yolu)
  let running = false;
  const actors = new Set();    // gösteride yürüyen gerçek karakterler (gece etiketleri görünsün)

  // ---------- yeşil artı işaretleri (koruma) — tek seferlik havuz, kare başı ayırma yok ----------
  let plus = null;
  function plusTex() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    g.shadowColor = 'rgba(95,224,138,0.9)'; g.shadowBlur = 10;
    g.fillStyle = '#ffffff';
    const r = 5;
    const rr = (x, y, w, h) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.fill(); };
    rr(25, 10, 14, 44); rr(10, 25, 44, 14);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  function ensurePlus() {
    if (plus) return plus;
    const tex = plusTex();
    const list = [];
    for (let i = 0; i < 20; i++) {
      const m = new THREE.SpriteMaterial({ map: tex, color: GREEN, transparent: true, depthWrite: false, fog: false });
      const s = new THREE.Sprite(m);
      s.visible = false;
      s.renderOrder = 7;
      s.userData = { t: 1, life: 1, vy: 0, vx: 0, vz: 0, sz: 0.4 };
      world.scene.add(s);
      list.push(s);
    }
    plus = { tex, list, ticking: false };
    return plus;
  }
  function plusTick(dt) {
    let live = 0;
    for (const s of plus.list) {
      const u = s.userData;
      if (u.t >= u.life) continue;
      u.t += dt;
      if (u.t >= u.life) { s.visible = false; continue; }
      live++;
      const k = u.t / u.life;
      s.position.x += u.vx * dt; s.position.y += u.vy * dt; s.position.z += u.vz * dt;
      const sc = u.sz * (0.6 + Math.min(1, k * 4) * 0.4);
      s.scale.set(sc, sc, 1);
      s.material.opacity = 1 - k * k;
    }
    if (!live) plus.ticking = false;
    return !live;
  }
  function plusBurst(x, y, z, n = 8, spread = 0.9, size = 1) {
    const P = ensurePlus();
    let used = 0;
    for (const s of P.list) {
      if (used >= n) break;
      const u = s.userData;
      if (u.t < u.life) continue;
      used++;
      const a = Math.random() * Math.PI * 2, r = Math.random() * spread;
      s.position.set(x + Math.cos(a) * r, y + Math.random() * 0.4, z + Math.sin(a) * r);
      u.t = 0; u.life = 1.2 + Math.random() * 0.6; u.vy = 0.9 + Math.random() * 0.7; u.vx = Math.cos(a) * 0.15; u.vz = Math.sin(a) * 0.15;
      u.sz = (0.32 + Math.random() * 0.22) * size;
      s.scale.set(0.01, 0.01, 1);
      s.visible = true;
    }
    if (!P.ticking) { P.ticking = true; world.ticker.push(plusTick); }
  }

  // ---------- yardımcılar ----------
  // Siluet: pelerinli figür, kapkara; kimliği belli olmaz (saldırı türünde kırmızı gözler kalır)
  function shadow(ctx, x, z, yaw, o = {}) {
    const f = H.figure(ctx, x, z, yaw);
    if (!f) return null;
    const mats = [];
    f.root.traverse((m) => {
      if (m.isSprite && !o.eyes) m.visible = false;
      if (m.isMesh) {
        const mat = new THREE.MeshBasicMaterial({ color: o.color || '#0b0a12', transparent: true, opacity: o.opacity || 0.86 });
        m.material = mat;
        mats.push(mat);
        m.userData.cleanup = () => mat.dispose();
      }
    });
    f.root.userData.mats = mats; f.root.userData.op = o.opacity || 0.86;
    if (o.glow) { const gl = H.makeGlow(1.6, o.glow); gl.position.set(0, 1.2, 0); f.root.add(gl); }
    return f;
  }
  // figürü noktalar boyunca sabit hızla yürüt
  async function figWalk(ctx, f, pts, speed = 1.8, anim = 'walk') {
    if (!f || pts.length < 2) return;
    const segs = [];
    let tot = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z); segs.push(l); tot += l; }
    if (tot < 0.01) return;
    f.play(anim);
    await ctx.tween(tot / speed, (k) => {
      let d = k * tot, i = 0;
      while (i < segs.length - 1 && d > segs[i]) { d -= segs[i]; i++; }
      const a = pts[i], b = pts[i + 1], t = segs[i] > 0 ? Math.min(1, d / segs[i]) : 1;
      f.root.position.x = a.x + (b.x - a.x) * t; f.root.position.z = a.z + (b.z - a.z) * t;
      f.root.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
    }, (x) => x);
    f.play('idle');
  }
  function faceFig(f, p) { if (f) f.root.rotation.y = Math.atan2(p.x - f.root.position.x, p.z - f.root.position.z); }

  function alivePlayer(st, id) { const p = st.players.find((x) => x.id === id); return p && p.alive && !p.left ? p : null; }

  // ---------- gösteri sahnesi ----------
  dir.register('show', async (ctx, msg) => {
    const { show, state: st } = msg;
    const V = world.village;
    const me = st.me.id;
    const t0 = world.time, base = msg.el || 0;
    const clock = () => base + (world.time - t0);
    const until = (t) => ctx.wait(Math.max(0, t - clock()));
    const taken = new Set();
    const jobs = [];
    const fpts = [];
    const portrait = () => world.rig.portrait;
    const addFocus = (id) => {
      const h = V.house(id);
      if (!h) return;
      fpts.push(new THREE.Vector3(h.cx, 0, h.cz), new THREE.Vector3(h.cx, h.info.height, h.cz));
      const a = V.anchors(h);
      fpts.push(new THREE.Vector3(a.approach.x, 0, a.approach.z));
    };
    const job = (p) => { const q = Promise.resolve(p).catch(() => {}); jobs.push(q); return q; };
    const route = (home, to, peek) => choreo.tripRoute(home, to, peek) || { out: 12, tail: peek ? 3 : 0, back: 12 };

    // gerçek karakteri evine (gizli) koy ve devral: kesilince de oraya döner
    function takeHome(id) {
      if (taken.has(id) || !alivePlayer(st, id)) return null;
      const ch = world.chars.get(id);
      const a = world.houseAnchors(id);
      if (!ch || !a || ch.claimed) return null;
      ch.run([]); ch.path = null; ch.peeking = null; ch.inside = id; ch.drive = null;
      ch.pos.set(a.inside.x, 0, a.inside.z); ch.speed = 0;
      ch.setVisible(false);
      ctx.claim(id);
      taken.add(id); actors.add(id);
      return ch;
    }
    // p: fitTrip planı ({ s0, tA, tL, tH }) — kapıdan çıkış, varış, ayrılış, evine giriş (gösteri saati)
    async function walkTrip(id, to, p, o = {}) {
      const ch = o.again ? world.chars.get(id) : takeHome(id);
      if (!ch || (o.again && !taken.has(id))) return;
      const steps = choreo.tripSteps({ home: id, to, clock, ...o, delay: Math.max(0.05, p.s0 - clock()), tArrive: p.tA, tLeave: p.tL, tHome: p.tH });
      if (!steps.length) return;
      ch.run(steps);
      while (ch.busy && clock() < SHOW_S - 0.2) await ctx.wait(0.2);
    }

    const trip = show.trip && show.trip.to !== me && V.house(show.trip.to) ? show.trip : null;
    const watch = show.watch && V.house(show.watch.houseId) ? show.watch : null;
    const homeKills = (show.home || []).filter((e) => HOME_KILL[e.kind]);
    if (show.dead && !homeKills.some((e) => e.result === 'died')) homeKills.push({ kind: 'attack', result: 'died' });

    // 1) kendi yolculuğum (+ takım). Cadı aynı gece iki kez yürüyebilir (trips): ikisi de gösteriye sığacak biçimde
    // sırayla. Gözcünün arka pencere yolculuğu gelenlerle birlikte watchScene'de zamanlanır.
    const allTrips = (Array.isArray(show.trips) && show.trips.length > 1 ? show.trips : [trip]).filter((t) => t && t.to !== me && V.house(t.to)).slice(0, 2);
    const myTrips = allTrips.filter((t) => !(watch && t.kind === 'watch' && t.to === watch.houseId));
    let myPlan = null;
    if (trip && myTrips.length) {
      addFocus(me);
      const legs = myTrips.map((tr) => {
        const kill = KILL_TRIP[tr.kind] && tr.outcome !== 'bounced';
        const bounced = tr.outcome === 'bounced';
        const peek = tr.kind === 'watch';
        addFocus(tr.to);
        return { tr, kill, bounced, peek, r: route(me, tr.to, peek), dw: dwellFor(kill, bounced, peek) };
      });
      if (legs.length === 1) {
        const L0 = legs[0];
        L0.p = fitTrip(L0.r, { s0: 0.15, tAmin: 2.8, tAmax: L0.kill ? KILL_BY : 9.5, end: END_T, peek: L0.peek, ...L0.dw });
      } else {
        // iki yolculuk: doğal süreleri oranında böl (ikincisi birincinin dönüşünden sonra başlar)
        const nat = legs.map((L0) => natural(L0.r, L0.dw.dwell, L0.peek));
        const total = END_T - 0.15 - 0.3;
        const sum = nat[0] + nat[1];
        const end1 = 0.15 + (sum <= total ? nat[0] + (total - sum) * 0.35 : total * nat[0] / sum);
        legs[0].p = fitTrip(legs[0].r, { s0: 0.15, tAmin: 2.4, end: end1, peek: legs[0].peek, ...legs[0].dw });
        legs[1].p = fitTrip(legs[1].r, { s0: legs[0].p.tH + 0.3, end: END_T, peek: legs[1].peek, ...legs[1].dw });
      }
      myPlan = legs[0].p;
      const mates = (show.team || []).filter((t) => t.id !== me && t.to === trip.to && t.outcome !== 'bounced' && (t.kind || 'kill') === 'kill').map((t) => t.id);
      job((async () => {
        for (let k = 0; k < legs.length; k++) {
          const L0 = legs[k];
          await walkTrip(me, L0.tr.to, L0.p, {
            again: k > 0, peek: L0.peek, bounced: L0.bounced,
            onInside: L0.kill && L0.tr.interior !== false ? () => job(killerRoom(L0.tr, k === 0 ? mates : [], L0.p.tL)) : null,
          });
        }
      })());
      if (show.saved) {
        const L1 = legs.find((L0) => L0.tr.kind === 'protect' || L0.tr.kind === 'heal') || legs[0];
        job(savedPlus(L1.tr.to, L1.p.tA + DOOR_IN + 0.5));
      }
    } else if (show.saved) {
      // kendini koruyan (evinden çıkmayan) doktor / cadı: artılar kendi evinden yükselir
      job(savedPlus(show.trip && V.house(show.trip.to) ? show.trip.to : me));
    }
    (show.team || []).forEach((t, i) => {
      if (t.id === me || !V.house(t.to)) return;
      addFocus(t.to);
      const bounced = t.outcome === 'bounced';
      const kill = (t.kind || 'kill') === 'kill' && !bounced;
      const dw = dwellFor(kill, bounced, false);
      const r = route(t.id, t.to, false);
      let p;
      if (myPlan && trip && t.to === trip.to && !bounced) {
        // aynı hedef: benimle birlikte (biraz arkamdan) varır, benimle çıkar
        const tA = myPlan.tA + 0.35 * (i + 1);
        p = fitTrip(r, { s0: 0.3, tA, dwell: Math.max(dw.dwellMin, myPlan.tL + 0.15 * (i + 1) - tA), dwellMin: dw.dwellMin, end: END_T });
      } else p = fitTrip(r, { s0: 0.3 + i * 0.2, tAmin: 3.0, tAmax: kill ? KILL_BY : 9.5, end: END_T, ...dw });
      job(walkTrip(t.id, t.to, p, { bounced }));
    });

    // 2) gözcü
    if (watch) job(watchScene(watch));

    // 3) evime gelenler (saldırı) — oda görünümü
    if (homeKills.length) { addFocus(me); job(homeScene(homeKills, show)); }
    // koruyan biri geldiyse (kendini korumadıysan) 'protect' kaydı durdurduğu girişimin hemen ardındadır
    const homeAll = show.home || [];
    for (const e of homeKills) { const i = homeAll.indexOf(e); e.byProtector = i >= 0 && homeAll[i + 1] && homeAll[i + 1].kind === 'protect'; }

    // kamera odağı: ilgili evler (yoksa sessiz köyün genel görünümü)
    focus = fpts.length ? fpts : null;
    world.showFocusChanged();

    await Promise.all(jobs.slice());
    // sonradan eklenen işler (iç mekân, artılar)
    for (let i = 0; i < 3 && jobs.length; i++) await Promise.all(jobs.splice(0));
    if (deadSeen) await followGhost();

    // ----- sahne parçaları -----
    // Öldüren (vampir takımı / hırsız / zehirleyen cadı) içerideyken kısa oda görünümü
    async function killerRoom(tr, mates, tLeave) {
      if (world.mainBusy()) return;
      const room = ctx.openRoom(tr.to);
      if (!room) return;
      const S = room.shot('inside', portrait());
      ctx.cut(S.pos, S.look, { fov: S.fov });
      const L = room.L, W = (p) => room.W(p);
      const ids = [me, ...mates].slice(0, 3);
      const spots = [L.bedside, L.bedside2, { x: -1.6, z: 0.9 }];
      const list = [];
      ids.forEach((id, i) => {
        const p = world.playerById(id);
        if (!p) return;
        const a = room.addActor('k' + i, p.look, p.name, L.doorIn, -Math.PI / 2);
        list.push(a);
        const pre = tr.kind === 'steal' && i === 0 ? [{ walk: [W({ x: -0.3, z: -1.9 })], mode: 'sneak' }, { faceTo: W(L.chest) }, { once: 'pick-up', opts: { timeScale: 1.1 } }] : [];
        a.run([...pre, { walk: [W(spots[i % 3])], mode: 'sneak' }, { faceTo: W({ x: L.sleeper.x, z: -1.4 }) }, { pose: tr.kind === 'poison' ? 'hold' : 'loom' }]);
      });
      const sleeperW = W({ x: L.sleeper.x, y: 0.9, z: L.sleeper.z });
      await until(Math.max(clock() + 1.3, tLeave - 1.6));
      if (!ownRoom(room)) return;
      for (const a of list) a.playOnce(tr.kind === 'poison' ? 'interact-right' : 'attack-melee-right', { timeScale: 0.7 });
      world.sfx(tr.kind === 'poison' ? 'potion' : 'bite', { volume: 0.6 });
      if (tr.kind === 'poison') world.fx.emit('bubble', sleeperW.x, sleeperW.y, sleeperW.z, '#94d82d', 10);
      await ctx.wait(0.45);
      if (!ownRoom(room)) return;
      if (tr.outcome === 'done') {
        world.flickerRoom(1.1);
        const victim = world.playerById(tr.to);
        H.ghostRise(ctx, victim && victim.look, sleeperW.x, sleeperW.z, 0.9, 1.3);
      } else {
        // koruma tuttu: yataktan yeşil artılar, saldıran geri çekilir
        plusBurst(sleeperW.x, sleeperW.y, sleeperW.z, 10, 0.6);
        world.sfx('safe', { volume: 0.5 });
        for (const a of list) { a.setBase('idle', 0.2); a.playOnce('emote-no', { timeScale: 1.1 }); }
      }
      await until(tLeave - 0.1);
      if (ownRoom(room)) world.endShowRoom();
    }

    // Koruma gerçekten bir saldırıyı durdurdu: hedef evden yeşil artılar yükselir (dışarıdan)
    async function savedPlus(id, at = 6.0) {
      await until(at);
      const a = world.houseAnchors(id);
      if (!a) return;
      for (let i = 0; i < 3; i++) {
        // çatının ön yarısından, uzaktan da seçilecek kadar iri
        plusBurst(a.door.x * 0.7 + a.backWin.x * 0.3, a.height * 0.85, a.door.z * 0.7 + a.backWin.z * 0.3, 6, 1.6, 2.6);
        world.fx.emit('magic', a.door.x, 1.4, a.door.z, GREEN, 8);
        if (i === 0) world.sfx('safe', { volume: 0.5 });
        await ctx.wait(0.4);
      }
    }

    // Gözcü: önce kendisi izlenen evin arka penceresine yürür; o pencerede dururken gelenler kendi evlerinden
    // (karanlıkta: köyün öbür ucundan kimliksiz siluet) kapıya yürür, girer ya da kilitli kapıdan döner, sonra evlerine
    // yürür. Ev sahibi çıkıp gittiği eve yürür. Ev sahibi öldüyse ışıklar titrer; koruma tuttuysa yeşil artılar.
    async function watchScene(w) {
      const hid = w.houseId;
      const aW = world.houseAnchors(hid);
      watched = hid;
      addFocus(hid); addFocus(me);
      const sub = [];
      const cam = [];
      const camPt = (x, y, z) => cam.push(new THREE.Vector3(x, y, z));
      const towards = (p, maxD) => {
        // kapı önünden p yönünde en çok maxD metre (yaklaşma yolunun kadraja girecek kısmı)
        const dx = p.x - aW.approach.x, dz = p.z - aW.approach.z, d = Math.hypot(dx, dz) || 1, k = Math.min(1, maxD / d);
        camPt(aW.approach.x + dx * k, 0, aW.approach.z + dz * k);
      };
      // a) gözcünün yolu
      const rW = route(me, hid, true);
      const { outFix: oFixW, backFix: bFixW } = legFix(rW, true);
      const arr = (w.arrivals || []).slice(0, 8);
      const gap = arr.length > 1 ? Math.min(1.2, 4.2 / (arr.length - 1)) : 0;
      // gidiş doğal tempoda; gelenleri görebilmek için en geç ~7,5. sn'de pencerede (uzak evde koşar)
      const vG = Math.min(V_FAST * 1.15, Math.max(V_NAT, rW.out / Math.max(1, 7.5 - 0.15 - oFixW)));
      const tW = Math.max(3.0, 0.15 + oFixW + rW.out / vG);
      // b) gelenler: gözcü penceredeyken sırayla
      let lastSeen = tW + 2.5, tDie = 0;
      arr.forEach((v, i) => {
        const blocked = !!v.blocked;
        const dw = blocked ? dwellFor(false, true, false) : { dwell: VISIT_IN, dwellMin: DOOR_IN + 0.6 };
        const want = tW + 1.0 + i * gap;
        const real = v.id && v.id !== me && v.id !== hid && world.chars.get(v.id) && V.house(v.id) && alivePlayer(st, v.id) && !taken.has(v.id);
        let tA, tL;
        if (real) {
          const r = route(v.id, hid, false);
          // kendi evinden yürüyerek gelir: o kadar erken çıkamıyorsa (uzak ev) biraz geç varır
          tA = Math.max(want, 0.3 + DOOR_OUT + r.out / V_FAST);
          const p = fitTrip(r, { s0: 0.3, tA, dwell: dw.dwell, dwellMin: dw.dwellMin, end: END_T });
          tL = p.tL;
          sub.push(walkTrip(v.id, hid, p, { bounced: blocked }));
          const ah = world.houseAnchors(v.id);
          if (ah) towards(ah.approach, 11);
        } else {
          tA = want; tL = tA + dw.dwell;
          sub.push(shadowVisit(hid, blocked, tA, tL, i, (s) => towards(s, 11)));
        }
        lastSeen = Math.max(lastSeen, tL + (blocked ? 0.3 : 0.6));
        if (!blocked) tDie = Math.max(tDie, tA + DOOR_IN + 0.9);
      });
      // c) ev sahibi çıkıp bir yere gittiyse: gözcü geldikten hemen sonra (uzak yolda daha erken) kapıdan çıkar,
      // gittiği eve kadar yürür, girer, sonra evine döner
      if (w.ownerWent && w.ownerWent !== hid && V.house(w.ownerWent)) {
        addFocus(w.ownerWent);
        const rO = route(hid, w.ownerWent, false);
        const dw = { dwell: DOOR_IN + 1.2, dwellMin: DOOR_IN + 0.5 };
        const latest = END_T - (DOOR_OUT + rO.out / V_FAST + dw.dwellMin + DOOR_OUT + rO.back / V_FAST + DOOR_IN);
        const s0 = Math.max(0.4, Math.min(tW + 0.5, latest));
        const pO = fitTrip(rO, { s0, end: END_T, ...dw });
        sub.push(walkTrip(hid, w.ownerWent, pO));
        lastSeen = Math.max(lastSeen, Math.min(pO.tA, s0 + DOOR_OUT + 10 / V_NAT));
        const ao = world.houseAnchors(w.ownerWent);
        if (ao) towards(ao.approach, 11);
      }
      // d) gecenin sonucu (dışarıdan): ölüm -> ışıklar titreyip söner; koruma tuttu -> yeşil artılar (gelenler girdikten sonra)
      const tEnd = Math.min(13.0, tDie || tW + 2.0);
      if (w.died) { sub.push((async () => { await until(tEnd); world.flickerHouse(hid, 1.5); world.sfx('door', { volume: 0.3 }); })()); lastSeen = Math.max(lastSeen, tEnd + 1.6); }
      else if (w.saved) { sub.push(savedPlus(hid, tEnd)); lastSeen = Math.max(lastSeen, tEnd + 1.4); }
      // e) gözcü penceredeki yerinden ancak hepsini gördükten sonra ayrılır (eve dönüşü sığacak kadar erken)
      const leaveBy = Math.max(END_T - (bFixW + rW.back / V_FAST), Math.min(16.0, lastSeen));   // dönüşün sonu sise karışabilir
      const tWL = Math.max(tW + 1.5, Math.min(Math.max(tW + 2.5, lastSeen), leaveBy));
      const pW = { s0: 0.15, tA: tW, tL: tWL, tH: Math.min(END_T, tWL + bFixW + rW.back / V_NAT) };
      if (!taken.has(me)) sub.unshift(walkTrip(me, hid, pW, { peek: true }));
      // kamera (gözcü penceredeyken): evin arkasından, omzunun üstünden kapıya ve gelenlerin yoluna
      if (aW) {
        camPt(aW.peek.x, 0, aW.peek.z); camPt(aW.peek.x, 1.9, aW.peek.z);
        camPt(aW.approach.x, 0, aW.approach.z); camPt(aW.approach.x, 1.9, aW.approach.z);
        const r0 = Math.hypot(aW.approach.x, aW.approach.z) || 1;
        towards({ x: aW.approach.x * (1 - 6 / r0), z: aW.approach.z * (1 - 6 / r0) }, 6);
        watchCam = { hid, pts: cam };
      }
      await Promise.all(sub.map((p) => p.catch(() => {})));
    }

    // karanlıkta gelen kimliksiz gölge: köyün öbür ucunda iki ev arasındaki karanlıktan belirir, meydandan kapıya
    // yürür, girer ya da kilitli kapıdan döner, aynı yoldan geri gidip karanlıkta kaybolur
    async function shadowVisit(hid, blocked, tA, tL, i, onRoute) {
      const a = world.houseAnchors(hid), h = V.house(hid), L = V.layout;
      if (!a || !h || !L) return;
      const ta = h.angle + Math.PI + (i % 2 ? 1 : -1) * (0.45 + 0.3 * (i >> 1));
      let best = ta, bd = 9;
      for (let k = 0; k < L.houses.length; k++) {
        const a1 = L.houses[k].angle, a2 = L.houses[(k + 1) % L.houses.length].angle;
        const m = a1 + wrapAngle(a2 - a1) / 2, d = Math.abs(wrapAngle(m - ta));
        if (d < bd) { bd = d; best = m; }
      }
      const s = { x: Math.sin(best) * (L.R - 0.8), z: Math.cos(best) * (L.R - 0.8) };
      const pts = choreo.pathTo(s, hid) || [s, a.approach];
      if (onRoute) onRoute(pts.length > 2 ? pts[pts.length - 2] : s);
      let len = 0;
      for (let k = 1; k < pts.length; k++) len += Math.hypot(pts[k].x - pts[k - 1].x, pts[k].z - pts[k - 1].z);
      const tS = Math.max(0.4, tA - len / 2.7);
      const sp = Math.max(2.2, Math.min(6.5, len / Math.max(0.6, tA - tS)));
      await until(tS);
      const f = shadow(ctx, s.x, s.z, Math.atan2(pts[1] ? pts[1].x - s.x : 0, pts[1] ? pts[1].z - s.z : 1));
      if (!f) return;
      fadeFig(f, 0);
      const fadeIn = ctx.tween(0.8, (k) => fadeFig(f, k), (x) => x);
      await figWalk(ctx, f, pts, sp, sp > 3.6 ? 'sprint' : 'walk');
      await fadeIn;
      faceFig(f, a.door);
      const back = pts.slice().reverse();
      if (blocked) {
        f.play('interact-right');
        await ctx.wait(0.9);
        world.fx.emit('poof', a.door.x, 1.2, a.door.z, '#9fb3d1', 5);
        await until(tL);
      } else {
        world.village.openDoor(hid, 1.0);
        world.sfxThrottled('door', 0.35);
        await figWalk(ctx, f, [a.approach, a.inside], 1.8);
        f.root.visible = false;
        await until(tL);
        f.root.visible = true;
        world.village.openDoor(hid, 1.0);
        await figWalk(ctx, f, [a.inside, a.approach], 2.2);
      }
      const spB = Math.max(2.4, Math.min(5.5, len / Math.max(1.5, END_T - 1.0 - clock())));
      const walkOff = figWalk(ctx, f, back, spB, spB > 3.6 ? 'sprint' : 'walk');
      // yolun sonunda karanlığa karışır
      await ctx.wait(Math.max(0, len / spB - 0.8));
      await ctx.tween(0.8, (k) => fadeFig(f, 1 - k), (x) => x);
      await walkOff;
      f.root.visible = false;
    }

    // Saldırıya uğrayan ev sahibi: kendi odasında uyurken kimliksiz siyah siluetler; koruma tutarsa yeşil artılar,
    // tutmazsa ölüm sahnesi (ışıklar titrer, hayalet yükselir) ve izleyici kendi hayaletini izler.
    async function homeScene(kills, sh) {
      await until(3.4);
      const died = kills.some((e) => e.result === 'died') || !!sh.dead;
      // saldırıdan kurtulan izleyici bu gece dışarıdaysa (ör. gözcü pencerede) oda görünümü açılmaz: kamera onun
      // yürüyüşünde / izlediği evde kalır; evinden yeşil artılar yükselir
      const meCh = world.chars.get(me);
      if (!died && meCh && meCh.claimed && meCh.visible) { if (kills.some((e) => e.result === 'saved')) await savedPlus(me, 4.6); return; }
      const room = !world.mainBusy() && ctx.openRoom(me);
      if (!room) {
        // oda açılamadı (ana sinematik sahnede): dışarıdan yalnız ışıklar
        if (died) { await until(6.8); world.flickerHouse(me, 1.4); await until(8.2); ownDeath(); }
        return;
      }
      const S = room.shot('inside', portrait());
      ctx.cut(S.pos, S.look, { fov: S.fov });
      const L = room.L, W = (p) => room.W(p);
      const bedW = W(L.bedside), bed2W = W(L.bedside2), footW = W(L.bedfoot);
      const sleeperW = W({ x: L.sleeper.x, y: 0.9, z: L.sleeper.z });
      const from = W(L.doorStep), mid = W(L.doorIn);
      let protector = null;
      const list = kills.slice(0, 2);
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        if (!ownRoom(room)) return;
        await until(i === 0 ? 4.3 : clock() + 0.2);
        world.sfx('door', { volume: 0.5 });
        const f = shadow(ctx, from.x, from.z, -Math.PI / 2, { eyes: e.kind === 'attack', opacity: 0.9 });
        if (!f) break;
        const spot = i === 0 ? bedW : bed2W;
        await figWalk(ctx, f, [from, mid, spot], i === 0 ? 2.0 : 2.6);
        faceFig(f, sleeperW);
        f.root.rotation.x = 0.3;
        f.play('interact-right');
        if (e.kind === 'poison') world.fx.emit('bubble', sleeperW.x, sleeperW.y, sleeperW.z, '#94d82d', 10);
        if (e.result === 'saved') {
          // koruyucu: arkasından hızla gelir, yeşil ışık ve artılar; saldıran sise karışıp kaçar
          if (!protector && e.byProtector) {
            protector = shadow(ctx, from.x, from.z, -Math.PI / 2, { color: '#0d1a12', glow: GREEN, opacity: 0.85 });
            if (protector) await figWalk(ctx, protector, [from, mid, footW], 3.4, 'sprint');
          }
          if (protector) { faceFig(protector, sleeperW); protector.play('interact-left'); }
          plusBurst(sleeperW.x, sleeperW.y + 0.2, sleeperW.z, 12, 0.7);
          world.fx.emit('magic', sleeperW.x, sleeperW.y, sleeperW.z, GREEN, 14);
          world.sfx('safe', { volume: 0.6 });
          await ctx.wait(0.9);
          plusBurst(sleeperW.x, sleeperW.y + 0.3, sleeperW.z, 8, 0.9);
          world.fx.emit('smoke', f.root.position.x, 1.0, f.root.position.z, '#2a2238', 14);
          f.root.visible = false;
          await ctx.wait(0.6);
        } else if (e.result === 'died') {
          world.flickerRoom(1.4);
          world.sfx(e.kind === 'poison' ? 'potion' : 'bite', { volume: 0.7 });
          if (e.kind !== 'poison') world.flash(0.25, '#d7263d');
          await ctx.wait(1.4);
          world.fx.emit('smoke', f.root.position.x, 1.0, f.root.position.z, '#2a2238', 16);
          f.root.visible = false;
          await ctx.wait(0.2);
          const p = world.playerById(me);
          await H.ghostRise(ctx, p && p.look, sleeperW.x, sleeperW.z, 0.9, 1.8);
          ownDeath();
          if (ownRoom(room)) world.endShowRoom();
          return;
        } else {
          // sonuç yok (ör. soygun): sessizce çıkar
          await ctx.wait(1.0);
          await figWalk(ctx, f, [spot, mid, from], 2.4);
          f.root.visible = false;
        }
      }
      await ctx.wait(0.5);
      if (ownRoom(room)) world.endShowRoom();
    }

    // izleyicinin ölümü (herkese şafakta açıklanır): mezar taşı, hayalet kapının önünde belirir
    function ownDeath() {
      if (deadSeen) return;
      deadSeen = true;
      world.showDead.add(me);
      world.markDead(me, { quiet: true, drop: true });
      const p = st.players.find((x) => x.id === me);
      const a = world.houseAnchors(me);
      const g = p && world.ensureGhost(p);
      if (g && a) {
        g.fresh = false; g.isMe = true;
        g.pos.set(a.approach.x, 0, a.approach.z);
        g.yaw = Math.atan2(-a.approach.x, -a.approach.z);
        world.fx.emit('magic', a.approach.x, 1, a.approach.z, '#d8d0ff', 12);
      }
      world.reapply();
    }

    // ölen izleyici kendi hayaletini izler (gösteri bitene kadar)
    async function followGhost() {
      const look = new THREE.Vector3(), pos = new THREE.Vector3();
      let first = true;
      while (clock() < SHOW_S + 1.5) {
        const g = world.ghostOf(me);
        if (g && !world.mainBusy()) {
          // kamera meydan tarafında (evlerin içine/çatısına girmesin), hayalete ve arkasındaki eve bakar
          const r = Math.hypot(g.pos.x, g.pos.z);
          const ux = r > 3 ? g.pos.x / r : 0, uz = r > 3 ? g.pos.z / r : 1;
          const d = portrait() ? 9 : 7.5;
          look.set(g.pos.x, 1.3, g.pos.z);
          pos.set(g.pos.x - ux * d, portrait() ? 6.4 : 5.2, g.pos.z - uz * d);
          // ilk kare sert kesme: oda kamerasından (köyden çok uzakta) yumuşak geçiş boşluğu gösteriyordu
          if (first) { ctx.cut(pos, look, { fov: portrait() ? 56 : 46 }); first = false; } else ctx.shot(pos, look, { fov: portrait() ? 56 : 46, k: 1.6 });
        }
        await ctx.wait(0.25);
      }
    }
  });

  // gösteri odası hâlâ bizim mi (ana sinematik almadıysa)
  function ownRoom(room) { return world.roomModeIs('show') && world.room === room; }

  function elapsedOf(st) {
    const n = st.room.night;
    if (!n || !n.showUntil) return 0;
    return Math.max(0, SHOW_S - (n.showUntil - world.serverNow()) / 1000);
  }

  function stop() {
    if (running) dir.skip();
    running = false;
    watchCam = null;
    if (focus) { focus = null; world.showFocusChanged(); }
    actors.clear();
  }

  function newNight(round) {
    nightRound = round;
    deadSeen = false; watched = null;
    world.showDead.clear();
  }

  // Her state'te: aşamaya göre gösteriyi başlat / kes
  function sync(st) {
    const rm = st.room;
    if (rm.phase === 'lobby') { stop(); if (nightRound !== -1) newNight(-1); startedSig = ''; startedRound = -1; return; }
    if (rm.phase !== 'night') { if (running) stop(); return; }
    if (rm.round !== nightRound) newNight(rm.round);
    const stage = rm.night && rm.night.stage;
    if (stage !== 'show') { if (running) stop(); return; }
    const show = (st.night && st.night.show) || null;
    const sig = rm.round + '|' + (show ? JSON.stringify(show) : '');
    if (sig === startedSig) return;
    const el = elapsedOf(st);
    // aynı gecenin gösterisi zaten başladıysa geç gelen veri ancak ilk saniyelerde yeniden başlatır
    if (startedRound === rm.round && (el > 2.5 || !show)) { startedSig = sig; return; }
    startedSig = sig; startedRound = rm.round;
    if (running) dir.skip();
    if (!show) return;
    if (el > SHOW_S - 7) {
      // çok geç bağlandı: oynatılacak bir şey kalmadı; ölüm bilgisi yine de hayaleti getirir
      if (show.dead && !deadSeen) { deadSeen = true; world.showDead.add(st.me.id); world.reapply(); }
      return;
    }
    running = true;
    const msg = { kind: 'show', show, state: st, el };
    dir.announce(msg).then(() => {
      if (startedSig !== sig) return;
      running = false;
      watchCam = null;
      if (focus) { focus = null; world.showFocusChanged(); }
      actors.clear();
    });
  }

  return {
    sync, stop,
    get running() { return running; },
    get focus() { return focus; },
    get watchCam() { return watchCam; },
    actors,
    sawDeath: () => deadSeen,
    watched: (id) => watched === id,
    dispose() {
      stop();
      if (plus) { for (const s of plus.list) { s.parent && s.parent.remove(s); s.material.dispose(); } plus.tex.dispose(); plus = null; }
    },
  };
}


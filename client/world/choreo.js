// Aşama koreografisi: yalnızca izleyicinin `state`'inden karakterlerin hedeflerini çıkarır ve adım dizilerine çevirir.
// Gece: herkes evine; izleyicinin (ve görebildiği kötü takım arkadaşlarının) seçimi -> hedef eve gizlice gidiş.
import { planPath, clearPoint, detourObstacles } from './nav.js';
import { plazaToWorld } from './layout.js';
import { visits } from './rules.js';
import { TAU } from './constants.js';

const NO_VIS = new Map();

// Gece gösterisi zaman modeli (sn, m/sn). nightshow.js varış/ayrılış/eve dönüş zamanlarını gerçek yol uzunluğundan
// bunlarla çıkarır; budgetWalk da aynı modelle adım hızını seçer (hedef: yürü / tempolu yürü, gerekirse kısa koşu).
export const PACE = { walk: 2.8, brisk: 3.75, sneak: 2.4, sprint: 5.4 };   // character.js SPEEDS ile aynı
export const EFF = 0.88;        // köşe dönüşü, hızlanma ve son noktada yavaşlama payı: ortalama hız ≈ EFF × adım hızı
export const RUN_MAX = 7.6;     // sise "ışınlanmadan" önce denenecek en hızlı koşu (m/sn)
export const DOOR_OUT = 1.1;    // içeride -> kapıyı aç -> kapı önündeki noktaya çık
export const DOOR_IN = 1.15;    // kapı önünden -> kapıyı aç -> içeri gir
// hata ayıklama: gösteride sise ışınlanma sayısı (hedef 0) ve en büyük gecikme (sn)
function countTeleport(kind, info) {
  if (typeof window === 'undefined') return;
  if (info) { const l = window.__vkwTpLog || (window.__vkwTpLog = []); if (l.length < 20) l.push(kind + ' ' + info); }
  if (kind === 'entry') window.__vkwEntryTeleports = (window.__vkwEntryTeleports || 0) + 1;
  else if (kind === 'return') window.__vkwReturnVanish = (window.__vkwReturnVanish || 0) + 1;
  else window.__vkwTeleports = (window.__vkwTeleports || 0) + 1;
}
function noteLate(s) {
  if (typeof window === 'undefined') return;
  if (!(s <= (window.__vkwShowLate || 0))) window.__vkwShowLate = +s.toFixed(2);
}
if (typeof window !== 'undefined') { window.__vkwTeleports = window.__vkwTeleports || 0; window.__vkwReturnVanish = window.__vkwReturnVanish || 0; window.__vkwShowLate = window.__vkwShowLate || 0; }

export function createChoreo(world) {
  const goals = new Map(); // id -> key
  let lastPhase = null;
  let litUntil = new Map();
  let nightT0 = -99, nightBudget = 0;   // gece girişi: başlangıç anı ve süre (sn)

  function sitSlotNear(p) {
    for (const s of world.village.benchSlots) {
      if (Math.hypot(p.x - s.x, p.z - s.z) < 1.25) return s;
    }
    return null;
  }

  function restFacing(x, z) {
    // ateşe bak, biraz da kameraya dön (yüzler görünsün)
    const d1x = -x, d1z = -z;
    const l1 = Math.hypot(d1x, d1z) || 1;
    const cx = world.camera.position.x - x, cz = world.camera.position.z - z;
    const l2 = Math.hypot(cx, cz) || 1;
    return Math.atan2(d1x / l1 * 0.45 + cx / l2 * 0.55, d1z / l1 * 0.45 + cz / l2 * 0.55);
  }

  function door(hid) {
    world.village.openDoor(hid, 1.3);
    world.sfxThrottled('door', 0.35);
  }

  // Bir karakter için adım dizisi kur
  function plan(ch, goal, delay, snap) {
    const V = world.village;
    const L = V.layout;
    if (!L) return;
    const steps = [];
    // --- ani yerleşim ---
    if (snap) {
      ch.peeking = null;
      if (goal.kind === 'plaza' || goal.kind === 'gather') {
        ch.inside = null;
        ch.pos.set(goal.x, 0, goal.z);
        ch.yaw = goal.face != null ? goal.face : restFacing(goal.x, goal.z);
        ch.faceYaw = ch.yaw;
        ch.setVisible(true);
        ch.run([{ pose: goal.pose || 'idle', fade: 0 }]);
      } else if (goal.kind === 'house') {
        const a = world.houseAnchors(goal.house);
        if (!a) return;
        if (goal.peek) {
          ch.inside = null;
          const pts = planPath(L, a.approach, { house: a, angle: V.house(goal.house).angle, peek: true, halfWidth: V.house(goal.house).info.hx });
          ch.pos.set(a.peek.x, 0, a.peek.z);
          ch.yaw = Math.atan2(a.backWin.x - a.peek.x, a.backWin.z - a.peek.z);
          ch.faceYaw = ch.yaw;
          ch.peeking = goal.house; ch.peekPath = pts.slice(-5);
          ch.setVisible(true);
          ch.run([{ pose: 'peek', fade: 0 }]);
        } else {
          ch.inside = goal.house;
          ch.pos.set(a.inside.x, 0, a.inside.z);
          ch.setVisible(false);
          ch.run([{ pose: 'idle', fade: 0 }]);
        }
      } else if (goal.kind === 'gone') {
        ch.setVisible(false);
        ch.run([]);
      }
      return;
    }
    if (goal.kind === 'gone') {
      if (ch.visible) { world.poofAt(ch.pos.x, ch.pos.z); ch.setVisible(false); }
      ch.run([]);
      return;
    }
    // gizli ama hiçbir evde değil (ör. ölüp lobide geri dönen): meydanda belir ya da kendi evinden çık
    if (!ch.visible && !ch.inside && !ch.peeking) {
      if (goal.kind === 'plaza' || goal.kind === 'gather') {
        plan(ch, goal, 0, true);
        world.fx.emit('magic', goal.x, 0.8, goal.z, '#f4e4c1', 10);
        return;
      }
      if (V.house(ch.id)) ch.inside = ch.id;
    }
    if (delay) steps.push({ wait: delay });
    let start = { x: ch.pos.x, z: ch.pos.z };
    let fromAngle = null;
    // önce bulunduğu yerden çık
    if (ch.inside) {
      const hid = ch.inside;
      const a = world.houseAnchors(hid);
      const h = V.house(hid);
      if (a && h) {
        // aynı eve girmek isteniyorsa hiçbir şey yapma
        if (goal.kind === 'house' && goal.house === hid && !goal.peek) return;
        steps.push({ at: a.inside, face: a.rotY, snapFace: true },
          { call: () => door(hid) }, { wait: 0.12 },
          { show: true, call: (c) => { c.inside = null; } },
          { walk: [a.approach], mode: 'walk' });
        start = a.approach; fromAngle = h.angle;
      } else ch.inside = null;
    } else if (ch.peeking) {
      if (goal.kind === 'house' && goal.peek && goal.house === ch.peeking) return;
      const back = (ch.peekPath || []).slice().reverse();
      if (back.length > 1) {
        steps.push({ pose: 'idle', fade: 0.2 }, { walk: back.slice(1), mode: 'sneak', call: (c) => { c.peeking = null; } });
        start = back[back.length - 1];
      }
      ch.peeking = null;
    }
    if (goal.kind === 'plaza' || goal.kind === 'gather') {
      const target = clearPoint({ x: goal.x, z: goal.z }, world.obstacles);
      const pts = detourObstacles(planPath(L, start, target, fromAngle).map((q, i, arr) => (i > 0 && i < arr.length - 1 ? clearPoint(q, world.obstacles) : q)), world.obstacles);
      pts.shift();
      if (pts.length) steps.push({ walk: pts, mode: goal.mode || 'walk' });
      const face = goal.face != null ? goal.face : restFacing(target.x, target.z);
      steps.push({ face });
      if (goal.pose) steps.push({ pose: goal.pose });
      else steps.push({ pose: 'idle' });
    } else if (goal.kind === 'house') {
      const hid = goal.house;
      const a = world.houseAnchors(hid);
      const h = V.house(hid);
      if (!a || !h) return;
      const pts = detourObstacles(planPath(L, start, { house: a, angle: h.angle, peek: !!goal.peek, halfWidth: h.info.hx }, fromAngle), world.obstacles);
      pts.shift();
      const far = pathLen(start, pts) > 12;
      const mode = goal.mode || (far ? (goal.house === ch.id ? 'brisk' : 'sprint') : 'walk');
      if (goal.peek) {
        // yanından hızlı dolaş, son iki adım (arka köşe -> pencere) sinsice
        const tail = pts.slice(-2);
        const head = pts.slice(0, pts.length - 2);
        if (head.length) steps.push({ walk: head, mode });
        steps.push({ walk: tail, mode: 'sneak' });
        steps.push({ faceTo: a.backWin }, { pose: 'peek', call: (c) => { c.peeking = hid; c.peekPath = pts.slice(-5); } });
      } else {
        // gece girişi: eve varış süresi bütçeyi aşacaksa koş, yetmezse sisin içinde kapının önüne ışınlan
        const budget = goal.budget;
        if (budget != null && pts.length) {
          const len = pathLen(start, pts);
          // kapı, içeri adım, hızlanma/yavaşlama payı ~1.4 sn
          const avail = Math.max(0.6, budget - (delay || 0) - 1.4);
          const need = len / avail;
          const m2 = need < 2.4 ? 'walk' : need < 3.4 ? 'brisk' : 'sprint';
          if (need <= 5.0) steps.push({ walk: pts, mode: goal.mode || m2 });
          else if (need <= RUN_MAX * EFF) steps.push({ walk: pts, mode: 'sprint', speed: Math.min(RUN_MAX, need / EFF) });
          else {
            countTeleport('entry');
            // yolun başını koş, sonra sis bulutunda kaybol ve kapının önünde belir
            const runFor = Math.max(0.5, avail - 0.5) * 5.0;
            let acc = 0, p0 = start;
            const head = [];
            for (const q of pts) { const l = Math.hypot(q.x - p0.x, q.z - p0.z); if (acc + l > runFor) break; acc += l; head.push(q); p0 = q; }
            if (head.length) steps.push({ walk: head, mode: 'sprint' });
            steps.push({ call: (c) => { world.fx.emit('mist', c.pos.x, 0.6, c.pos.z, '#c9c2d3', 12); }, hide: true }, { wait: 0.25 },
              { at: a.approach, face: Math.atan2(a.door.x - a.approach.x, a.door.z - a.approach.z), snapFace: true, show: true, call: () => world.fx.emit('mist', a.approach.x, 0.6, a.approach.z, '#c9c2d3', 12) });
          }
        } else if (pts.length) steps.push({ walk: pts, mode });
        steps.push({ faceTo: a.door }, { wait: 0.05 }, { call: () => door(hid) }, { wait: 0.15 },
          { walk: [a.inside], mode: budget != null ? 'brisk' : 'walk' },
          { hide: true, call: (c) => { c.inside = hid; litUntil.set(hid, world.time + 9 + Math.random() * 4); } });
      }
    }
    ch.run(steps);
  }

  // Yumuşak hedef değişimi: aynı meydanda, ateşi kesmeyen kısa düz yol. Yön/poz ancak kısa bir duraksamadan sonra
  // (yeni konum gelirse hiç dönmez: sağa sola seğirme olmaz).
  function retarget(ch, goal) {
    if (!ch.visible || ch.inside || ch.peeking || ch.claimed || (ch.base === 'sit' && !goal.pose)) return false;
    const dx = goal.x - ch.pos.x, dz = goal.z - ch.pos.z, d = Math.hypot(dx, dz);
    if (d > 6) return false;
    const l2 = dx * dx + dz * dz;
    if (l2 > 1e-4) { let t = -(ch.pos.x * dx + ch.pos.z * dz) / l2; t = t < 0 ? 0 : t > 1 ? 1 : t; if (Math.hypot(ch.pos.x + dx * t, ch.pos.z + dz * t) < 2.5) return false; }
    const target = clearPoint({ x: goal.x, z: goal.z }, world.obstacles);
    ch.retargetAt = world.time;
    const steps = [];
    if (d > 0.05) { const w = detourObstacles([{ x: ch.pos.x, z: ch.pos.z }, target], world.obstacles); w.shift(); steps.push({ walk: w, mode: d > 3 ? 'brisk' : 'walk' }); }
    steps.push({ wait: 0.5 }, { face: goal.face != null ? goal.face : restFacing(target.x, target.z) }, { pose: goal.pose || 'idle' });
    ch.run(steps);
    return true;
  }

  function pathLen(a, pts) {
    let l = 0, p = a;
    for (const q of pts) { l += Math.hypot(q.x - p.x, q.z - p.z); p = q; }
    return l;
  }

  // Süreye sığan yürüyüş: adım hızı gereken ortalama hıza göre seçilir (yürü < tempolu < koş < hızlı koşu).
  // Yalnızca en hızlı koşu da yetmiyorsa (pratikte olmaz) yolun başını koşup sisin içinde varış noktasında (end)
  // belirir; bu durum window.__vkwTeleports ile sayılır.
  // ret: eve dönüş bacağı — süre yetmezse çok hızlı koşmak yerine yolun sonuna doğru sise karışıp evinin önünde
  // belirir (kullanıcı tercihi: gidiş ve hedefteki an tam görünsün, dönüşün sonu kısalabilir); __vkwReturnVanish
  function budgetWalk(steps, start, pts, avail, end, face, ret) {
    if (!pts.length) return;
    avail = Math.max(0.5, avail);
    const len = pathLen(start, pts);
    const need = len / avail;
    if (need < PACE.walk * EFF * 0.94) { steps.push({ walk: pts, mode: 'walk' }); return; }
    if (need < PACE.brisk * EFF * 0.95) { steps.push({ walk: pts, mode: 'brisk' }); return; }
    if (need < PACE.sprint * EFF * 0.96) { steps.push({ walk: pts, mode: 'sprint' }); return; }
    if (!ret && need <= RUN_MAX * EFF) { steps.push({ walk: pts, mode: 'sprint', speed: Math.min(RUN_MAX, need / EFF * 1.02) }); return; }
    const runV = ret ? PACE.sprint : RUN_MAX;
    countTeleport(ret ? 'return' : 'show', `len=${len.toFixed(1)} avail=${avail.toFixed(2)}`);
    const runFor = Math.max(0.4, avail - 0.45) * runV * EFF;
    let acc = 0, p0 = start;
    const head = [];
    for (const q of pts) { const l = Math.hypot(q.x - p0.x, q.z - p0.z); if (acc + l > runFor) break; acc += l; head.push(q); p0 = q; }
    if (head.length) steps.push({ walk: head, mode: 'sprint', speed: runV });
    steps.push({ call: (c) => { world.fx.emit('mist', c.pos.x, 0.6, c.pos.z, '#c9c2d3', 12); }, hide: true }, { wait: 0.2 },
      { at: end, face, snapFace: true, show: true, call: () => world.fx.emit('mist', end.x, 0.6, end.z, '#c9c2d3', 12) });
  }

  // Yolculuğun yolları: ev kapısı -> hedef (gözcüde arka pencereye son iki nokta sinsice: tail) ve dönüş.
  function tripPaths(home, to, peek) {
    const V = world.village;
    const L = V.layout;
    const aH = world.houseAnchors(home), hH = V.house(home);
    const aT = world.houseAnchors(to), hT = V.house(to);
    if (!L || !aH || !hH || !aT || !hT) return null;
    const pts = detourObstacles(planPath(L, aH.approach, { house: aT, angle: hT.angle, peek: !!peek, halfWidth: hT.info.hx }, hH.angle), world.obstacles);
    pts.shift();
    let tail = [], end = aT.approach;
    if (peek) {
      tail = pts.splice(Math.max(0, pts.length - 2));
      end = pts.length ? pts[pts.length - 1] : aH.approach;
    }
    const back = peek ? end : aT.approach;
    const pts2 = detourObstacles(planPath(L, back, { house: aH, angle: hH.angle, halfWidth: hH.info.hx }, peek ? null : hT.angle), world.obstacles);
    pts2.shift();
    return { L, aH, hH, aT, hT, pts, tail, end, back, pts2 };
  }

  // Yol uzunlukları (m): out = kapı önünden hedefe (gözcüde sinsi kuyruk hariç), tail = sinsi kuyruk, back = dönüş.
  // nightshow.js zamanları bunlardan çıkarır (sabit varış saatleri yok).
  function tripRoute(home, to, peek) {
    const P = tripPaths(home, to, peek);
    if (!P) return null;
    const out = pathLen(P.aH.approach, P.pts);
    const tail = P.tail.length ? pathLen(P.pts.length ? P.pts[P.pts.length - 1] : P.aH.approach, P.tail) : 0;
    return { out, tail, back: pathLen(P.back, P.pts2) };
  }

  // Gece gösterisi yolculuğu (§15.1): evden kapıdan çık, gerçek yoldan hedef eve yürü; içeri gir, bekle, çık (ya da
  // kilitli kapıyı tıklatıp dön, ya da gözcü gibi arka pencerede dur) ve evine yürüyüp kapıdan gir. Zamanlar
  // gösteri saatine göre (o.clock(), sn): tArrive = hedefin kapı önüne (gözcüde pencereye) varış, tLeave = çıkış
  // (kilitli kapıda geri dönüş), tHome = evine girmiş olma. Her bacağın hızı yürüme anında kalan süreden seçilir.
  // o: { home, to, peek, bounced, clock, delay, tArrive, tLeave, tHome, onInside(c), onOut(c), onBounce(c), onHome(c) }
  function tripSteps(o) {
    const P = tripPaths(o.home, o.to, o.peek);
    const steps = [];
    if (!P) return steps;
    const { aH, aT, pts, tail, end, back, pts2 } = P;
    const now = o.clock();
    const late = (t) => ({ call: () => noteLate(o.clock() - t) });
    // 1) evden çık
    if (o.delay) steps.push({ wait: o.delay });
    steps.push({ at: aH.inside, face: aH.rotY, snapFace: true }, { call: () => door(o.home) }, { wait: 0.12 },
      { show: true, call: (c) => { c.inside = null; } }, { walk: [aH.approach], mode: 'brisk' });
    // 2) hedefe
    const outAvail = o.tArrive - now - (o.delay || 0) - DOOR_OUT;
    if (o.peek) {
      const tailT = pathLen(end, tail) / (PACE.sneak * EFF);
      budgetWalk(steps, aH.approach, pts, outAvail - tailT, end, Math.atan2((tail[0] || end).x - end.x, (tail[0] || end).z - end.z));
      steps.push({ walk: tail, mode: 'sneak' }, late(o.tArrive), { faceTo: aT.backWin }, { pose: 'peek', call: (c) => { c.peeking = o.to; } },
        { until: () => o.clock() >= o.tLeave }, { pose: 'idle', fade: 0.2, call: (c) => { c.peeking = null; } }, { walk: tail.slice(0, -1).reverse().concat([end]), mode: 'sneak' });
    } else {
      budgetWalk(steps, aH.approach, pts, outAvail, aT.approach, Math.atan2(aT.door.x - aT.approach.x, aT.door.z - aT.approach.z));
      steps.push(late(o.tArrive), { faceTo: aT.door }, { wait: 0.05 });
      if (o.bounced) {
        // kapı kilitli: açılmaz; tıklatır, bekler, geri döner
        steps.push({ once: 'interact-right', opts: { timeScale: 1.1 } }, { wait: 0.3 },
          { call: (c) => { world.fx.emit('poof', aT.door.x, 1.2, aT.door.z, '#9fb3d1', 5); world.sfxThrottled('door', 0.25); if (o.onBounce) o.onBounce(c); } }, { once: 'emote-no', opts: { timeScale: 1.2 }, part: 0.75 });
        if (o.tLeave != null) steps.push({ until: () => o.clock() >= o.tLeave });
      } else {
        steps.push({ call: () => door(o.to) }, { wait: 0.15 }, { walk: [aT.inside], mode: 'brisk' },
          { hide: true, call: (c) => { c.inside = o.to; litUntil.set(o.to, world.time + 5); if (o.onInside) o.onInside(c); } },
          { until: () => o.clock() >= o.tLeave },
          { at: aT.inside, face: aT.rotY, snapFace: true }, { call: () => door(o.to) }, { wait: 0.12 },
          { show: true, call: (c) => { c.inside = null; if (o.onOut) o.onOut(c); } }, { walk: [aT.approach], mode: 'brisk' });
      }
    }
    // 3) eve dönüş (süre gösteri saatine göre yürüme anında hesaplanır: önceki adımlar gecikse de yetişir)
    steps.push({
      call: (c) => {
        const rest = [];
        budgetWalk(rest, back, pts2, o.tHome - o.clock() - DOOR_IN, aH.approach, Math.atan2(aH.door.x - aH.approach.x, aH.door.z - aH.approach.z), true);
        rest.push(late(o.tHome - DOOR_IN), { faceTo: aH.door }, { call: () => door(o.home) }, { wait: 0.12 }, { walk: [aH.inside], mode: 'brisk' },
          { hide: true, call: (cc) => { cc.inside = o.home; if (o.onHome) o.onHome(cc); } });
        // kalan adımların başına ekle (bu adım bitince sıradakiler bunlar olur)
        c.steps.splice(1, 0, ...rest);
      },
    });
    return steps;
  }

  // Bir yol üzerinde (meydandaki bir noktadan bir evin kapısına) noktalar — kimliksiz gölgeler için
  function pathTo(from, hid) {
    const V = world.village;
    const L = V.layout;
    const a = world.houseAnchors(hid), h = V.house(hid);
    if (!L || !a || !h) return null;
    return detourObstacles(planPath(L, from, { house: a, angle: h.angle, halfWidth: h.info.hx }, null), world.obstacles);
  }

  // state'ten hedefleri hesapla
  function apply(state, snapAll) {
    const V = world.village;
    const L = V.layout;
    if (!L || !state || !state.me) return;
    const { room, me, players } = state;
    const phase = room.phase;
    const inGame = phase === 'reveal' || phase === 'night' || phase === 'day' || phase === 'hunter';
    const viewerDead = !me.alive;
    const phaseChanged = phase !== lastPhase;
    lastPhase = phase;
    // gösteri aşamasında seçilen evin ışığı ipucu olmasın (ziyaretler artık nightshow'da)
    const vis = state.room.night && state.room.night.stage === 'show' ? NO_VIS : visits(state);
    const winners = new Set(room.winners || []);
    // toplanma halkası (reveal)
    const gatherIds = players.filter((p) => p.alive && !p.left).sort((a, b) => a.seat - b.seat).map((p) => p.id);
    // gündüz / avcı: herkes kendi evinin önünde, ateşin çevresindeki halkada sabit yerinde (serbest dolaşma yok)
    const ringR = Math.max(4.6, Math.min(7.5, L.Rp * 0.62));
    const ringSpot = (p) => {
      const h = V.house(p.id);
      const a = h ? h.angle : (p.seat / Math.max(1, players.length)) * TAU;
      return { x: Math.sin(a) * ringR, z: Math.cos(a) * ringR, face: a + Math.PI };
    };
    // lobi / oyun sonu: serbest konumlar; üst üste binen hedefler ayrılır (yoksa itişip yerinde yürürler)
    const free = new Map();
    if (phase === 'lobby' || phase === 'ended') {
      const list = [];
      for (const p of players) {
        if (p.left) continue;
        const lp = p.id === me.id && world.localMove && performance.now() < world.localMove.until ? world.localMove : null;
        const w = lp ? { x: lp.x, z: lp.z } : plazaToWorld(L, p.pos ? p.pos.x : 0.5, p.pos ? p.pos.y : 0.8);
        list.push({ id: p.id, x: w.x, z: w.z, fixed: !!lp });
      }
      for (let it = 0; it < 4; it++) {
        for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
          const a = list[i], b = list[j];
          const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
          if (d >= 0.95) continue;
          const ux = d > 1e-3 ? dx / d : 1, uz = d > 1e-3 ? dz / d : 0, push = (0.95 - d) / 2;
          const wa = a.fixed ? 0 : b.fixed ? 2 : 1, wb = b.fixed ? 0 : a.fixed ? 2 : 1;
          a.x -= ux * push * wa; a.z -= uz * push * wa; b.x += ux * push * wb; b.z += uz * push * wb;
        }
      }
      for (const o of list) free.set(o.id, { x: +o.x.toFixed(2), z: +o.z.toFixed(2) });
    }
    // gece girişi: herkes geri sayım başlamadan evinde olmalı (sn)
    if (phaseChanged && phase === 'night') { nightT0 = world.time; nightBudget = world.leadInLeft ? world.leadInLeft() : 3.6; }
    const sinceNight = world.time - nightT0;
    const budget = phase === 'night' && sinceNight < nightBudget ? Math.max(1.0, nightBudget - sinceNight) : null;

    for (const p of players) {
      const ch = world.ensureChar(p);
      if (!ch) continue;
      ch.isMe = p.id === me.id;
      const showVillager = !p.left && (p.alive || (phase === 'hunter' && p.id === room.hunterId));
      let goal;
      if (!showVillager) goal = { kind: 'gone' };
      else if (phase === 'reveal') {
        const i = gatherIds.indexOf(p.id);
        const n = Math.max(gatherIds.length, 1);
        const a = (i / n) * TAU + 0.3;
        const r = 4.3 + (n > 12 ? (i % 2) * 1.3 : 0);
        goal = { kind: 'gather', x: Math.sin(a) * r, z: Math.cos(a) * r, face: a + Math.PI, pose: 'warm' };
      } else if (phase === 'night') {
        // §15.1: gece herkes evindedir; seçim aşamasında köyde hiçbir şey kıpırdamaz. Gece yürüyüşleri yalnızca
        // gösteri aşamasında, sunucunun state.night.show verisiyle oynatılır (nightshow.js, karakterleri devralır).
        goal = { kind: 'house', house: p.id };
      } else if (phase === 'day' || phase === 'hunter') {
        const r = ringSpot(p);
        goal = { kind: 'plaza', x: +r.x.toFixed(2), z: +r.z.toFixed(2), face: r.face, pose: !p.connected ? 'sit' : null, ring: true };
      } else {
        const w = free.get(p.id) || plazaToWorld(L, p.pos ? p.pos.x : 0.5, p.pos ? p.pos.y : 0.8);
        let pose = null;
        let face = null;
        const seat = sitSlotNear(w);
        if (!p.connected) pose = 'sit';
        else if (phase === 'ended') pose = winners.has(p.id) ? 'cheer' : null;
        else if (seat) { pose = 'sit'; face = seat.a + Math.PI; }
        goal = { kind: 'plaza', x: w.x, z: w.z, pose, face };
      }
      if (budget != null && goal.kind === 'house') goal.budget = budget;
      const key = goal.kind + ':' + (goal.house || '') + ':' + (goal.peek ? 'p' : '') + ':' + (goal.x != null ? goal.x.toFixed(2) + ',' + goal.z.toFixed(2) : '') + ':' + (goal.pose || '');
      const prev = goals.get(p.id);
      const snap = snapAll || ch.fresh;
      // yönetmenin devraldığı karakterlere dokunma; bırakıldığında yeniden planlanır
      if (ch.claimed && !snap) { goals.delete(p.id); continue; }
      ch.fresh = false;
      // doğrudan sürülen kendi karakteri: sunucunun (gecikmeli) konumlarına yürütme
      if (ch.isMe && world.driving && goal.kind === 'plaza' && !snap) { goals.set(p.id, 'drive'); } else
      if (prev !== key || snap) {
        goals.set(p.id, key);
        // aşama değişiminde doğal dağınıklık
        let delay = 0;
        if (phaseChanged && !snap) {
          if (phase === 'night') delay = ch.isMe ? 0.2 : Math.random() * 1.6;
          else if (phase === 'day' || phase === 'hunter') delay = 0.3 + Math.random() * 2.2;
          else if (phase === 'reveal') delay = Math.random() * 0.8;
        } else if (prev && prev.startsWith('house') && goal.kind === 'house' && phase === 'night' && !snap) delay = 0.1;
        if (goal.budget != null) delay = ch.isMe ? 0.1 : Math.random() * 0.5;
        // sunucudan akan küçük konum değişimleri (lobide yürüyen oyuncu): yolu yeniden kurmadan hedefi kaydır
        if (!snap && !phaseChanged && goal.kind === 'plaza' && prev && prev.startsWith('plaza') && retarget(ch, goal)) { /* hedef kaydırıldı */ } else plan(ch, goal, delay, snap);
      }

      // hayalet (yalnızca ölü izleyiciler ve oyun sonunda herkes görür)
      // gece gösterisinde kendi ölümünü gören izleyici: hayaleti hemen belirir (ölüm şafakta herkese açıklanır)
      const showDied = world.showDead && world.showDead.has(p.id) && p.id === me.id;
      const showGhost = p.left ? false : ((!p.alive || showDied) && ((inGame && (viewerDead || showDied)) || phase === 'ended'));
      if (showGhost) {
        const g = world.ensureGhost(p);
        if (g) {
          const lpg = p.id === me.id && world.localMove && performance.now() < world.localMove.until ? world.localMove : null;
          // ölü izleyiciye hayaletlerin canlı konumu ghostPos ile gelir (pos ölüm anındaki yerdir)
          const gp = p.ghostPos || p.pos;
          const w = lpg ? { x: lpg.x, z: lpg.z } : plazaToWorld(L, gp ? gp.x : 0.5, gp ? gp.y : 0.8);
          const gk = 'g:' + w.x.toFixed(2) + ',' + w.z.toFixed(2);
          if (p.id === me.id && world.driving && !g.fresh) goals.set('g' + p.id, 'drive');
          else if (goals.get('g' + p.id) !== gk || g.fresh) {
            goals.set('g' + p.id, gk);
            if (g.fresh) { g.pos.set(w.x, 0, w.z); g.fresh = false; g.yaw = restFacing(w.x, w.z); world.fx.emit('magic', w.x, 1, w.z, '#d8d0ff', 12); }
            g.isMe = p.id === me.id;
            g.run([{ walk: [{ x: w.x, z: w.z }], mode: 'stroll' }, { face: restFacing(w.x, w.z) }]);
          }
        }
      } else world.removeGhost(p.id);
    }

    // ev ışıkları
    for (const p of players) {
      const h = V.house(p.id);
      if (!h) continue;
      if (phase === 'lobby') h.flickOut = false;   // yeni oyun: titreyip sönen ev yeniden yanar
      // sinematiğin göstereceği ölüm (tutulan) henüz evi karartmaz
      h.dead = inGame || phase === 'ended' ? ((!p.alive || p.left) && !(world.isHeldDeath && world.isHeldDeath(p.id))) : false;
      if (phase === 'night') {
        // kapıdan girince yanar, birkaç saniye sonra söner (uyku); ziyaret edilen ev yanık kalır
        let lit = (litUntil.get(p.id) || 0) > world.time ? 1 : 0;
        for (const [, t] of vis) if (t === p.id) lit = Math.max(lit, 0.8);
        V.setLit(p.id, lit);
      } else {
        V.setLit(p.id, 1);
      }
    }
    if (phase !== 'night') litUntil.clear();
  }

  // gece ışıklarının zamanlayıcıları için kare başı kontrol
  function tick(state) {
    if (!state || state.room.phase !== 'night') return;
    const V = world.village;
    const vis = state.room.night && state.room.night.stage === 'show' ? NO_VIS : visits(state);
    for (const p of state.players) {
      if (!V.house(p.id)) continue;
      let lit = (litUntil.get(p.id) || 0) > world.time ? 1 : 0;
      for (const [, t] of vis) if (t === p.id) lit = Math.max(lit, 0.8);
      V.setLit(p.id, lit);
    }
  }

  return {
    apply, tick, tripSteps, tripRoute, pathTo,
    lit(id, s) { litUntil.set(id, world.time + s); },
    reset() { goals.clear(); lastPhase = null; litUntil = new Map(); },
    forget(id) { goals.delete(id); goals.delete('g' + id); },
  };
}

// 2B yedek köy (window.VKWorldFallback): VKWorld ile aynı API (docs/V2-PLAN.md §7).
// 3B dünya yoksa, açılamazsa ya da WebGL yoksa kullanılır. Tek bir canvas üzerinde
// kuşbakışı köy: evler (koltuk sırasıyla), kamp ateşi, oyuncular, seçim, oy noktaları, balonlar.
(function () {
  'use strict';

  var COLORS = ['#d7263d', '#2b59c3', '#2f9e44', '#f06595', '#f76707', '#f2c12e', '#3b3b46', '#e9ecef', '#7048e8', '#8d5a3b',
    '#15aabf', '#94d82d', '#862e3c', '#ffa8c5', '#1c2e6e', '#868e96', '#d9b99b', '#ff8364', '#6b7a2a', '#b197fc'];
  var COLOR_NAMES = ['Kırmızı', 'Mavi', 'Yeşil', 'Pembe', 'Turuncu', 'Sarı', 'Siyah', 'Beyaz', 'Mor', 'Kahverengi',
    'Camgöbeği', 'Fıstık', 'Bordo', 'Gül', 'Lacivert', 'Gri', 'Bej', 'Mercan', 'Zeytin', 'Lavanta'];
  var HAT_NAMES = ['Şapkasız', 'Hasır şapka', 'Bere', 'Çiçek', 'Silindir', 'Bandana', 'Filiz', 'Kasket', 'Kulaklık'];
  // [ten rengi, saç rengi, saç biçimi]
  var SKINS = [
    ['Pamuk', '#f5cfa8', '#5a3a22', 0], ['Fındık', '#e8b48a', '#2b1d14', 1], ['Kestane', '#c98d5e', '#1d1512', 3],
    ['Papatya', '#f3d6bf', '#c9a14a', 2], ['Ceviz', '#a8704a', '#2b1d14', 5], ['Şeftali', '#ffdcc2', '#b0502c', 1],
    ['Kakao', '#8a5634', '#151010', 4], ['Tarçın', '#efc39a', '#7a4a26', 3], ['Lale', '#f7d9c4', '#e8c86a', 5],
    ['Badem', '#d39a6c', '#3a2a1a', 0], ['Kömür', '#6e4128', '#0e0b0a', 2], ['Gümüş', '#e2a97e', '#8a8a8a', 4],
  ];
  var ROOFS = ['#9c3b32', '#3d5a8a', '#6a4a8c', '#4f7a3a', '#a0612a', '#7a3550', '#2f6b6b', '#8a6a2a'];
  var SEL_COLOR = { vampir: '#ff4b5f', iftiraci: '#e070c0', doktor: '#4fe0a8', kahin: '#a898ff', gozcu: '#ffc062', cadi: '#8be06a' };
  var SEL_LABEL = { vampir: 'Hedefin', iftiraci: 'İftira', doktor: 'Koruman', kahin: 'Bakılacak', gozcu: 'Gözetlenen' };
  var TAU = Math.PI * 2;

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function hash(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function mix(c1, c2, t) {
    var a = parseInt(c1.slice(1), 16); var b = parseInt(c2.slice(1), 16);
    var r = Math.round(lerp(a >> 16, b >> 16, t)); var g = Math.round(lerp((a >> 8) & 255, (b >> 8) & 255, t));
    var bl = Math.round(lerp(a & 255, b & 255, t));
    return 'rgb(' + r + ',' + g + ',' + bl + ')';
  }
  function shade(hex, f) { return f < 0 ? mix(hex, '#000000', -f) : mix(hex, '#ffffff', f); }
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  // ---------- karakter çizimi (önden, sevimli oranlar) ----------
  // (x, y) ayakların ortası; s = karakter yüksekliği.
  function drawHat(ctx, hat, hx, hy, hr) {
    ctx.lineWidth = Math.max(1, hr * 0.12);
    ctx.strokeStyle = 'rgba(20,14,40,.55)';
    switch (hat) {
      case 1: // hasır şapka
        ctx.fillStyle = '#e9c870';
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.55, hr * 1.55, hr * 0.38, 0, 0, TAU); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.8, hr * 0.85, hr * 0.62, 0, Math.PI, TAU); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#c0392b'; ctx.fillRect(hx - hr * 0.85, hy - hr * 0.8, hr * 1.7, hr * 0.18);
        break;
      case 2: // bere
        ctx.fillStyle = '#b8334d';
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.55, hr * 1.02, hr * 0.85, 0, Math.PI, TAU); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#e8e0f0'; rr(ctx, hx - hr * 1.02, hy - hr * 0.62, hr * 2.04, hr * 0.32, hr * 0.12); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(hx, hy - hr * 1.45, hr * 0.26, 0, TAU); ctx.fill(); ctx.stroke();
        break;
      case 3: // çiçek
        var fx = hx + hr * 0.62; var fy = hy - hr * 0.78;
        ctx.fillStyle = '#ff7fb0';
        for (var i = 0; i < 5; i++) {
          var a = i * TAU / 5;
          ctx.beginPath(); ctx.arc(fx + Math.cos(a) * hr * 0.3, fy + Math.sin(a) * hr * 0.3, hr * 0.24, 0, TAU); ctx.fill();
        }
        ctx.fillStyle = '#ffd34d'; ctx.beginPath(); ctx.arc(fx, fy, hr * 0.18, 0, TAU); ctx.fill();
        break;
      case 4: // silindir
        ctx.fillStyle = '#26203a';
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.62, hr * 1.25, hr * 0.28, 0, 0, TAU); ctx.fill(); ctx.stroke();
        rr(ctx, hx - hr * 0.7, hy - hr * 1.85, hr * 1.4, hr * 1.25, hr * 0.12); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#d7263d'; ctx.fillRect(hx - hr * 0.7, hy - hr * 0.95, hr * 1.4, hr * 0.22);
        break;
      case 5: // bandana
        ctx.fillStyle = '#d63a3a';
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.42, hr * 1.04, hr * 0.78, 0, Math.PI, TAU); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(hx + hr * 0.9, hy - hr * 0.5); ctx.lineTo(hx + hr * 1.5, hy - hr * 0.2); ctx.lineTo(hx + hr * 1.3, hy - hr * 0.7); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(hx - hr * 0.3, hy - hr * 0.8, hr * 0.09, 0, TAU); ctx.arc(hx + hr * 0.25, hy - hr * 0.95, hr * 0.09, 0, TAU); ctx.fill();
        break;
      case 6: // filiz
        ctx.strokeStyle = '#3b8a2e'; ctx.lineWidth = Math.max(1.2, hr * 0.14);
        ctx.beginPath(); ctx.moveTo(hx, hy - hr * 0.9); ctx.lineTo(hx, hy - hr * 1.5); ctx.stroke();
        ctx.fillStyle = '#6cc04a';
        ctx.beginPath(); ctx.ellipse(hx - hr * 0.32, hy - hr * 1.55, hr * 0.36, hr * 0.18, -0.5, 0, TAU); ctx.fill();
        ctx.beginPath(); ctx.ellipse(hx + hr * 0.32, hy - hr * 1.6, hr * 0.36, hr * 0.18, 0.5, 0, TAU); ctx.fill();
        break;
      case 7: // kasket
        ctx.fillStyle = '#5b6170';
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.5, hr * 1.04, hr * 0.8, 0, Math.PI, TAU); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(hx + hr * 0.55, hy - hr * 0.5, hr * 0.75, hr * 0.2, 0, 0, TAU); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#7a8090'; ctx.beginPath(); ctx.arc(hx, hy - hr * 1.28, hr * 0.12, 0, TAU); ctx.fill();
        break;
      case 8: // kulaklık
        ctx.strokeStyle = '#2a2a38'; ctx.lineWidth = Math.max(1.5, hr * 0.2);
        ctx.beginPath(); ctx.arc(hx, hy, hr * 1.08, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke();
        ctx.fillStyle = '#ff7a1a';
        rr(ctx, hx - hr * 1.28, hy - hr * 0.35, hr * 0.42, hr * 0.7, hr * 0.15); ctx.fill();
        rr(ctx, hx + hr * 0.86, hy - hr * 0.35, hr * 0.42, hr * 0.7, hr * 0.15); ctx.fill();
        break;
      default: break;
    }
  }

  function drawHair(ctx, style, color, hx, hy, hr) {
    ctx.fillStyle = color;
    switch (style) {
      case 0: ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.3, hr * 1.02, hr * 0.78, 0, Math.PI, TAU); ctx.fill(); break;
      case 1:
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.2, hr * 1.1, hr * 0.92, 0, Math.PI * 0.95, Math.PI * 2.05); ctx.fill();
        ctx.fillRect(hx - hr * 1.1, hy - hr * 0.25, hr * 0.38, hr * 0.85); ctx.fillRect(hx + hr * 0.72, hy - hr * 0.25, hr * 0.38, hr * 0.85);
        break;
      case 2:
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.3, hr * 1.02, hr * 0.78, 0, Math.PI, TAU); ctx.fill();
        ctx.beginPath(); ctx.arc(hx, hy - hr * 1.15, hr * 0.42, 0, TAU); ctx.fill();
        break;
      case 3:
        ctx.beginPath(); ctx.moveTo(hx - hr, hy - hr * 0.2);
        for (var i = 0; i <= 6; i++) {
          var px = hx - hr + (i / 6) * hr * 2;
          ctx.lineTo(px, hy - hr * (i % 2 ? 1.25 : 0.75));
        }
        ctx.lineTo(hx + hr, hy - hr * 0.2); ctx.closePath(); ctx.fill();
        break;
      case 4:
        ctx.beginPath(); ctx.ellipse(hx, hy + hr * 0.62, hr * 0.7, hr * 0.42, 0, 0, Math.PI); ctx.fill();
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.55, hr * 0.8, hr * 0.42, 0, Math.PI, TAU); ctx.fill();
        break;
      case 5:
        ctx.beginPath(); ctx.ellipse(hx, hy - hr * 0.15, hr * 1.12, hr * 0.98, 0, Math.PI * 0.92, Math.PI * 2.08); ctx.fill();
        rr(ctx, hx - hr * 1.12, hy - hr * 0.2, hr * 0.42, hr * 1.5, hr * 0.2); ctx.fill();
        rr(ctx, hx + hr * 0.7, hy - hr * 0.2, hr * 0.42, hr * 1.5, hr * 0.2); ctx.fill();
        break;
      default: break;
    }
  }

  // opts: { alpha, ghost, sleeping, blink, bob }
  function drawFigure(ctx, x, y, s, look, opts) {
    opts = opts || {};
    var color = COLORS[(look && look.color) || 0] || COLORS[0];
    var skin = SKINS[(look && look.skin) || 0] || SKINS[0];
    var bob = opts.bob || 0;
    ctx.save();
    ctx.globalAlpha *= opts.alpha == null ? 1 : opts.alpha;
    if (!opts.ghost) {
      ctx.fillStyle = 'rgba(10,6,25,.35)';
      ctx.beginPath(); ctx.ellipse(x, y, s * 0.3, s * 0.09, 0, 0, TAU); ctx.fill();
    }
    y -= bob;
    var bw = s * 0.5; var bh = s * 0.5;
    var by = y - bh;
    if (opts.ghost) {
      ctx.fillStyle = 'rgba(220,232,255,.75)';
      ctx.beginPath();
      ctx.moveTo(x - bw * 0.55, y - s * 0.05);
      ctx.quadraticCurveTo(x - bw * 0.6, y - s * 0.95, x, y - s * 0.98);
      ctx.quadraticCurveTo(x + bw * 0.6, y - s * 0.95, x + bw * 0.55, y - s * 0.05);
      for (var k = 0; k < 4; k++) {
        var wx = x + bw * 0.55 - (k + 1) * (bw * 1.1 / 4);
        ctx.quadraticCurveTo(wx + bw * 0.14, y + s * 0.06 * (k % 2 ? -1 : 1), wx, y - s * 0.05);
      }
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#2a2350';
      ctx.beginPath(); ctx.arc(x - s * 0.08, y - s * 0.6, s * 0.035, 0, TAU); ctx.arc(x + s * 0.08, y - s * 0.6, s * 0.035, 0, TAU); ctx.fill();
      ctx.restore();
      return;
    }
    // gövde (oyuncu rengi)
    var grad = ctx.createLinearGradient(x - bw / 2, 0, x + bw / 2, 0);
    grad.addColorStop(0, shade(color, 0.12)); grad.addColorStop(1, shade(color, -0.22));
    ctx.fillStyle = grad;
    ctx.strokeStyle = 'rgba(20,14,40,.6)';
    ctx.lineWidth = Math.max(1, s * 0.03);
    ctx.beginPath();
    ctx.moveTo(x - bw * 0.36, by + bh * 0.08);
    ctx.quadraticCurveTo(x - bw * 0.6, by + bh * 0.95, x - bw * 0.5, y);
    ctx.lineTo(x + bw * 0.5, y);
    ctx.quadraticCurveTo(x + bw * 0.6, by + bh * 0.95, x + bw * 0.36, by + bh * 0.08);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // kemer
    ctx.fillStyle = 'rgba(30,20,50,.35)';
    ctx.fillRect(x - bw * 0.47, by + bh * 0.58, bw * 0.94, bh * 0.1);
    // baş
    var hr = s * 0.24; var hx = x; var hy = by - hr * 0.55;
    ctx.fillStyle = skin[1];
    ctx.beginPath(); ctx.arc(hx, hy, hr, 0, TAU); ctx.fill(); ctx.stroke();
    drawHair(ctx, skin[3], skin[2], hx, hy, hr);
    // yüz
    ctx.fillStyle = '#21183a';
    if (opts.sleeping || opts.blink) {
      ctx.strokeStyle = '#21183a'; ctx.lineWidth = Math.max(1, hr * 0.12);
      ctx.beginPath(); ctx.moveTo(hx - hr * 0.48, hy + hr * 0.12); ctx.lineTo(hx - hr * 0.18, hy + hr * 0.12);
      ctx.moveTo(hx + hr * 0.18, hy + hr * 0.12); ctx.lineTo(hx + hr * 0.48, hy + hr * 0.12); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.ellipse(hx - hr * 0.33, hy + hr * 0.1, hr * 0.12, hr * 0.17, 0, 0, TAU);
      ctx.ellipse(hx + hr * 0.33, hy + hr * 0.1, hr * 0.12, hr * 0.17, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(hx - hr * 0.3, hy + hr * 0.04, hr * 0.045, 0, TAU); ctx.arc(hx + hr * 0.36, hy + hr * 0.04, hr * 0.045, 0, TAU); ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,120,130,.45)';
    ctx.beginPath(); ctx.arc(hx - hr * 0.58, hy + hr * 0.42, hr * 0.15, 0, TAU); ctx.arc(hx + hr * 0.58, hy + hr * 0.42, hr * 0.15, 0, TAU); ctx.fill();
    drawHat(ctx, (look && look.hat) || 0, hx, hy, hr);
    ctx.restore();
  }

  function hasWebGL() { return true; } // yedek dünya WebGL istemez

  // =====================================================================
  function create(container, handlers) {
    handlers = handlers || {};
    var canvas = document.createElement('canvas');
    canvas.className = 'vkw-canvas';
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;';
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var W = 0; var H = 0; var DPR = 1;
    var quality = 'auto';
    var view = 'menu';
    var insets = { top: 0, bottom: 0, left: 0, right: 0 };
    var state = null; var ui = {}; var clockOffset = 0;
    var ents = new Map();          // oyuncu varlıkları
    var houses = [];               // {id, x, y, color, name, roof}
    var effects = [];
    var ripples = [];
    var particles = [];
    var bubbles = new Map();
    var running = true;
    var lastT = performance.now();
    var perf = { n: 0, acc: 0, fps: 0, ms: 0 };
    var nightAmt = 0.6; var targetNight = 0.6; var duskAmt = 0;
    var spin = 0;
    var disposed = false;
    var geo = { cx: 0, cy: 0, S: 1, K: 0.8, r: 14 };

    function resize() {
      var r = container.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      var cap = quality === 'low' ? 1 : quality === 'medium' ? 1.5 : 2;
      DPR = Math.min(window.devicePixelRatio || 1, cap);
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      layout();
    }
    function layout() {
      var aw = Math.max(80, W - insets.left - insets.right);
      var ah = Math.max(80, H - insets.top - insets.bottom);
      var K = 0.8;
      var S = Math.min(aw / 1.32, ah / (1.32 * K));
      if (view === 'menu') S = Math.max(W / 1.25, H / (1.5 * K));
      geo = { cx: insets.left + aw / 2, cy: insets.top + ah / 2, S: S, K: K, r: clamp(S * 0.1, 26, 54) };
      if (view === 'menu') { geo.cx = W / 2; geo.cy = H * 0.52; }
    }
    function proj(u, v) {
      var dx = u - 0.5; var dy = v - 0.5;
      if (view === 'menu') {
        var c = Math.cos(spin); var s = Math.sin(spin);
        var nx = dx * c - dy * s; dy = dx * s + dy * c; dx = nx;
      }
      return { x: geo.cx + dx * geo.S, y: geo.cy + dy * geo.S * geo.K };
    }
    function unproj(x, y) {
      return { u: 0.5 + (x - geo.cx) / geo.S, v: 0.5 + (y - geo.cy) / (geo.S * geo.K) };
    }

    if (window.ResizeObserver) new ResizeObserver(resize).observe(container);
    window.addEventListener('resize', resize);
    resize();

    // ---------- dekor ----------
    var trees = [];
    for (var i = 0; i < 70; i++) {
      var a = hash(i) * TAU; var d = 0.74 + hash(i + 99) * 0.75;
      trees.push({ u: 0.5 + Math.cos(a) * d, v: 0.5 + Math.sin(a) * d * 1.25, s: 0.7 + hash(i + 7) * 0.6, k: hash(i + 3) });
    }
    var stones = [];
    for (var j = 0; j < 40; j++) {
      var a2 = hash(j + 500) * TAU; var d2 = 0.14 + hash(j + 900) * 0.32;
      stones.push({ u: 0.5 + Math.cos(a2) * d2, v: 0.5 + Math.sin(a2) * d2, s: 0.5 + hash(j + 40) });
    }

    function seatOrder(players) {
      return players.slice().sort(function (a, b) { return (a.seat || 0) - (b.seat || 0); });
    }
    function houseSpot(i, n) {
      var a = Math.PI / 2 + TAU * i / Math.max(n, 1);
      return { u: 0.5 + Math.cos(a) * 0.6, v: 0.5 + Math.sin(a) * 0.6, a: a };
    }
    function menuHouses() {
      var hs = [];
      for (var k = 0; k < 9; k++) {
        var sp = houseSpot(k, 9);
        hs.push({ id: null, u: sp.u, v: sp.v, a: sp.a, color: COLORS[(k * 7) % 20], roof: ROOFS[k % ROOFS.length], name: '', lit: hash(k + 3) > 0.35 });
      }
      return hs;
    }
    houses = menuHouses();

    // ---------- durum ----------
    function phase() { return state ? state.room.phase : null; }
    function remainingFrac() {
      if (!state || !state.room.deadline) return 0;
      var total = state.room.phase === 'night' ? state.room.settings.nightSec : state.room.settings.daySec;
      var rem = (state.room.deadline - (Date.now() + clockOffset)) / 1000;
      return clamp(1 - rem / Math.max(1, total), 0, 1);
    }

    function update(s, opts) {
      if (disposed || !s || !s.room) return;
      state = s; ui = opts || {};
      clockOffset = s.serverNow - Date.now();
      var ph = s.room.phase;
      targetNight = ph === 'night' ? 1 : ph === 'reveal' ? 0.7 : ph === 'hunter' ? 0.35 : ph === 'ended' ? 0.15 : 0;
      var ordered = seatOrder(s.players);
      var n = ordered.length;
      houses = ordered.map(function (p, idx) {
        var sp = houseSpot(idx, Math.max(n, 5));
        return { id: p.id, u: sp.u, v: sp.v, a: sp.a, color: COLORS[p.look.color], roof: ROOFS[(p.seat || 0) % ROOFS.length], name: p.name, alive: p.alive, lit: false };
      });
      var homeOf = new Map(houses.map(function (h) { return [h.id, h]; }));
      var visits = window.VKRules ? window.VKRules.visits(s) : new Map();
      var seen = new Set();
      ordered.forEach(function (p, idx) {
        seen.add(p.id);
        var e = ents.get(p.id);
        var start = ph === 'lobby' || ph === 'day' || ph === 'ended' ? p.pos : null;
        if (!e) {
          var sp = start || { x: 0.5 + Math.cos(idx) * 0.3, y: 0.5 + Math.sin(idx) * 0.3 };
          e = { id: p.id, x: sp.x, y: sp.y, tx: sp.x, ty: sp.y, alpha: 0, inside: false, face: 1, walkT: 0 };
          ents.set(p.id, e);
        }
        e.p = p;
        var h = homeOf.get(p.id);
        var door = { x: lerp(h.u, 0.5, 0.13), y: lerp(h.v, 0.5, 0.13) };
        var target = p.pos || door;
        var inside = false;
        if (ph === 'reveal') {
          var a = Math.PI / 2 + TAU * idx / Math.max(n, 1);
          target = { x: 0.5 + Math.cos(a) * 0.2, y: 0.5 + Math.sin(a) * 0.2 };
        } else if (ph === 'night') {
          if (visits.has(p.id) && homeOf.get(visits.get(p.id))) {
            var th = homeOf.get(visits.get(p.id));
            var group = []; visits.forEach(function (t, actor) { if (t === visits.get(p.id)) group.push(actor); });
            var gi = group.indexOf(p.id);
            var side = (gi - (group.length - 1) / 2) * 0.05;
            target = { x: lerp(th.u, 0.5, 0.2) + Math.cos(th.a + Math.PI / 2) * side, y: lerp(th.v, 0.5, 0.2) + Math.sin(th.a + Math.PI / 2) * side };
          } else {
            target = door; inside = true;
          }
        }
        e.tx = target.x; e.ty = target.y; e.wantInside = inside;
      });
      ents.forEach(function (e, id) { if (!seen.has(id)) ents.delete(id); });
      houses.forEach(function (h) {
        var e = ents.get(h.id);
        h.lit = ph === 'night' ? false : (ph === 'reveal' || ph === 'hunter');
        h.sleeping = ph === 'night' && e && e.wantInside && e.p.alive;
      });
      if (view !== 'game') setView('game');
    }

    // ---------- etkileşim ----------
    var down = null;
    canvas.addEventListener('pointerdown', function (e) { down = { x: e.clientX, y: e.clientY, t: Date.now() }; });
    canvas.addEventListener('pointerup', function (e) {
      if (!down) return;
      var moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      down = null;
      if (moved > 12) return;
      var r = canvas.getBoundingClientRect();
      tap(e.clientX - r.left, e.clientY - r.top);
    });

    function selectable(p) {
      return window.VKRules ? window.VKRules.selectable(state, p, ui.witchMode) : false;
    }
    function entScreen(e) {
      var pt = proj(e.x, e.y);
      return pt;
    }
    function tap(x, y) {
      if (!state || view !== 'game') return;
      var ph = state.room.phase;
      var best = null; var bestD = 1e9;
      ents.forEach(function (e) {
        if (e.alpha < 0.3 || e.inside) return;
        var pt = entScreen(e);
        var cy = pt.y - geo.r * 0.45;
        var d = Math.hypot(x - pt.x, (y - cy) * 0.8);
        if (d < geo.r * 0.75 && d < bestD) { best = e; bestD = d; }
      });
      if (!best) {
        houses.forEach(function (h) {
          if (!h.id) return;
          var pt = proj(h.u, h.v); var hw = geo.r * 0.9;
          if (x > pt.x - hw && x < pt.x + hw && y > pt.y - hw * 1.4 && y < pt.y + hw * 0.5) {
            var e = ents.get(h.id); if (e) { best = e; bestD = 0; }
          }
        });
      }
      if (best) {
        if (selectable(best.p)) { handlers.onPick && handlers.onPick(best.p.id); burst(best.x, best.y, '#ffd27a'); return; }
        if (best.p.id === state.me.id && (ph === 'lobby' || ph === 'ended')) { handlers.onSelf && handlers.onSelf(); return; }
        if (window.VKRules && window.VKRules.action(state)) return;
      }
      if (ph === 'lobby' || ph === 'ended') {
        var q = unproj(x, y);
        var dx = q.u - 0.5; var dy = q.v - 0.5; var d = Math.hypot(dx, dy) || 1;
        var cd = clamp(d, 0.1, 0.48);
        var u = 0.5 + dx / d * cd; var v = 0.5 + dy / d * cd;
        var me = ents.get(state.me.id);
        if (me) { me.tx = u; me.ty = v; }
        ripples.push({ u: u, v: v, t: 0 });
        handlers.onMove && handlers.onMove(u, v);
      }
    }

    function burst(u, v, color) {
      if (quality === 'low') return;
      for (var i = 0; i < 12; i++) {
        var a = Math.random() * TAU;
        particles.push({ u: u, v: v, vx: Math.cos(a) * 0.12, vy: Math.sin(a) * 0.12, life: 0.7, max: 0.7, color: color, size: 3 });
      }
    }

    // ---------- duyuru efektleri ----------
    var EFFECT = {
      start: [1600, '#f4e4c1'], night: [1500, '#3a2a6b'], death: [2300, '#d7263d'], safe: [1500, '#ffd27a'],
      hanged: [2200, '#d7263d'], nohang: [1300, '#8fb4ff'], sleep: [1400, '#3a2a6b'], seer: [1900, '#8f7cff'],
      watch: [2000, '#e8a33a'], promote: [1800, '#d7263d'], hunter: [1500, '#c9772b'], shot: [1800, '#ff7a1a'],
      nohunt: [1200, '#8fb4ff'], win: [2600, '#ffd27a'], left: [1200, '#8fb4ff'],
    };
    function announce(msg) {
      var cfg = EFFECT[msg && msg.kind] || [1200, '#f4e4c1'];
      var dur = cfg[0];
      effects.push({ kind: msg.kind, color: cfg[1], t: 0, dur: dur / 1000, targets: (msg.targets || []).map(function (t) { return t.id; }) });
      if (msg.kind === 'win' && quality !== 'low') {
        for (var i = 0; i < 90; i++) {
          particles.push({ screen: true, x: Math.random() * W, y: -10 - Math.random() * H * 0.4, vx: (Math.random() - 0.5) * 40, vy: 90 + Math.random() * 120, life: 2.6, max: 2.6, color: COLORS[i % 20], size: 4 + Math.random() * 3, rot: Math.random() * 6 });
        }
      }
      (msg.targets || []).forEach(function (t) {
        var e = ents.get(t.id);
        if (e && (msg.kind === 'death' || msg.kind === 'hanged' || msg.kind === 'shot')) {
          for (var k = 0; k < 18; k++) {
            var a = Math.random() * TAU;
            particles.push({ u: e.x, v: e.y, vx: Math.cos(a) * 0.08, vy: Math.sin(a) * 0.06 - 0.05, life: 1.2, max: 1.2, color: 'rgba(230,225,255,.8)', size: 6 + Math.random() * 6, smoke: true });
          }
        }
      });
      return new Promise(function (res) { setTimeout(res, dur); });
    }

    function bubble(id, text, channel) {
      var t = String(text || '');
      if (t.length > 70) t = t.slice(0, 68) + '…';
      bubbles.set(id, { text: t, channel: channel, until: performance.now() + 4500 });
    }

    // ---------- çizim ----------
    function drawGround(night) {
      var g = ctx.createRadialGradient(geo.cx, geo.cy, geo.S * 0.1, geo.cx, geo.cy, Math.max(W, H));
      g.addColorStop(0, mix('#6f9b4a', '#23402f', night));
      g.addColorStop(0.5, mix('#4f7d3a', '#1a3026', night));
      g.addColorStop(1, mix('#2f5a32', '#0f1c1a', night));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // yollar
      var c = proj(0.5, 0.5);
      ctx.strokeStyle = mix('#b8946a', '#4a3f4a', night);
      ctx.lineWidth = geo.S * 0.045; ctx.lineCap = 'round';
      houses.forEach(function (h) {
        var p = proj(h.u, h.v);
        ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      });
      // meydan
      ctx.fillStyle = mix('#c7a477', '#4b4256', night);
      ctx.beginPath(); ctx.ellipse(c.x, c.y, geo.S * 0.5, geo.S * 0.5 * geo.K, view === 'menu' ? 0 : 0, 0, TAU); ctx.fill();
      ctx.strokeStyle = mix('#9c7c56', '#3a3248', night); ctx.lineWidth = Math.max(2, geo.S * 0.012);
      ctx.stroke();
      ctx.fillStyle = mix('#b08f66', '#40384c', night);
      stones.forEach(function (st) {
        var p = proj(st.u, st.v);
        ctx.beginPath(); ctx.ellipse(p.x, p.y, geo.S * 0.012 * st.s, geo.S * 0.008 * st.s, 0, 0, TAU); ctx.fill();
      });
      ctx.strokeStyle = mix('#a88a62', '#3f3750', night); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.ellipse(c.x, c.y, geo.S * 0.1, geo.S * 0.1 * geo.K, 0, 0, TAU); ctx.stroke();
    }

    function drawTree(t, night) {
      var p = proj(t.u, t.v);
      if (p.x < -60 || p.x > W + 60 || p.y < -80 || p.y > H + 40) return;
      var s = geo.S * 0.06 * t.s;
      ctx.fillStyle = 'rgba(0,0,0,.22)';
      ctx.beginPath(); ctx.ellipse(p.x, p.y, s * 0.7, s * 0.22, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = mix('#6b4a2e', '#2a2030', night);
      ctx.fillRect(p.x - s * 0.1, p.y - s * 0.5, s * 0.2, s * 0.5);
      var base = t.k > 0.5 ? '#2f6b4f' : '#3d7d3f';
      ctx.fillStyle = mix(base, '#14282a', night);
      ctx.beginPath(); ctx.moveTo(p.x - s * 0.7, p.y - s * 0.4); ctx.lineTo(p.x, p.y - s * 1.9); ctx.lineTo(p.x + s * 0.7, p.y - s * 0.4); ctx.closePath(); ctx.fill();
      ctx.fillStyle = mix(shade(base, 0.15), '#1c3436', night);
      ctx.beginPath(); ctx.moveTo(p.x - s * 0.5, p.y - s * 1.0); ctx.lineTo(p.x, p.y - s * 2.3); ctx.lineTo(p.x + s * 0.5, p.y - s * 1.0); ctx.closePath(); ctx.fill();
    }

    function drawHouse(h, night, now) {
      var p = proj(h.u, h.v);
      var s = geo.r * 0.95;
      var wall = mix('#e9d6b0', '#5a5068', night);
      ctx.fillStyle = 'rgba(0,0,0,.25)';
      ctx.beginPath(); ctx.ellipse(p.x, p.y + s * 0.05, s * 0.95, s * 0.25, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = wall; ctx.strokeStyle = 'rgba(25,18,40,.6)'; ctx.lineWidth = 1.5;
      rr(ctx, p.x - s * 0.7, p.y - s * 0.9, s * 1.4, s * 0.92, 3); ctx.fill(); ctx.stroke();
      ctx.fillStyle = mix(h.roof, '#221c36', night * 0.6);
      ctx.beginPath(); ctx.moveTo(p.x - s * 0.9, p.y - s * 0.82); ctx.lineTo(p.x, p.y - s * 1.6); ctx.lineTo(p.x + s * 0.9, p.y - s * 0.82); ctx.closePath(); ctx.fill(); ctx.stroke();
      // kapı (sahibin rengi)
      ctx.fillStyle = h.id ? h.color : mix('#7a4a2a', '#2a2030', night);
      rr(ctx, p.x - s * 0.17, p.y - s * 0.5, s * 0.34, s * 0.52, 3); ctx.fill(); ctx.stroke();
      // pencere
      var lit = h.lit || (view === 'menu' && h.lit) || (night > 0.5 && !h.sleeping && h.id && h.alive !== false);
      if (view === 'menu') lit = h.lit;
      var winCol = lit ? '#ffd27a' : mix('#7fa8c8', '#1d1a33', night);
      ctx.fillStyle = winCol;
      rr(ctx, p.x - s * 0.55, p.y - s * 0.72, s * 0.26, s * 0.24, 2); ctx.fill(); ctx.stroke();
      rr(ctx, p.x + s * 0.29, p.y - s * 0.72, s * 0.26, s * 0.24, 2); ctx.fill(); ctx.stroke();
      if (lit && night > 0.3) lights.push({ x: p.x, y: p.y - s * 0.6, r: s * 1.6, a: 0.5 * night });
      // bayrak
      if (h.id) {
        ctx.strokeStyle = '#3a2a1a'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(p.x + s * 0.62, p.y - s * 1.0); ctx.lineTo(p.x + s * 0.62, p.y - s * 1.7); ctx.stroke();
        ctx.fillStyle = h.color;
        var wv = Math.sin(now / 400 + h.u * 10) * s * 0.05;
        ctx.beginPath(); ctx.moveTo(p.x + s * 0.62, p.y - s * 1.7); ctx.lineTo(p.x + s * 1.05, p.y - s * 1.6 + wv); ctx.lineTo(p.x + s * 0.62, p.y - s * 1.45); ctx.closePath(); ctx.fill();
      }
      if (h.sleeping) {
        ctx.fillStyle = 'rgba(220,230,255,' + (0.5 + 0.4 * Math.sin(now / 500 + h.u * 9)) + ')';
        ctx.font = '700 ' + Math.round(s * 0.36) + 'px Nunito, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('z', p.x + s * 0.2, p.y - s * 1.7 - ((now / 30) % 10));
      }
    }

    function nameTag(x, y, text, opts) {
      opts = opts || {};
      var fs = clamp(geo.r * 0.32, 10, 14);
      ctx.font = '800 ' + fs + 'px Nunito, system-ui, sans-serif';
      var w = Math.min(ctx.measureText(text).width, geo.r * 3) + fs * 1.1 + (opts.dot ? fs * 0.8 : 0);
      var h = fs * 1.55;
      // üst üste binen etiketleri aşağı kaydır
      for (var pass = 0; pass < 4; pass++) {
        var moved = false;
        for (var q = 0; q < tagRects.length; q++) {
          var r0 = tagRects[q];
          if (Math.abs(x - r0.x) < (w + r0.w) / 2 + 2 && Math.abs(y - r0.y) < h + 1) { y = r0.y + h + 2; moved = true; }
        }
        if (!moved) break;
      }
      tagRects.push({ x: x, y: y, w: w });
      ctx.fillStyle = opts.bg || 'rgba(15,12,34,.78)';
      rr(ctx, x - w / 2, y, w, h, h / 2); ctx.fill();
      if (opts.border) { ctx.strokeStyle = opts.border; ctx.lineWidth = 2; ctx.stroke(); }
      var tx = x;
      if (opts.dot) {
        ctx.fillStyle = opts.dot;
        ctx.beginPath(); ctx.arc(x - w / 2 + fs * 0.75, y + h / 2, fs * 0.3, 0, TAU); ctx.fill();
        tx += fs * 0.4;
      }
      ctx.fillStyle = opts.color || '#f6f1ff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      var t = text;
      while (ctx.measureText(t).width > geo.r * 3 && t.length > 3) t = t.slice(0, -2);
      if (t !== text) t += '…';
      ctx.fillText(t, tx, y + h / 2 + 0.5);
      ctx.textBaseline = 'alphabetic';
    }

    function drawBubble(x, y, b, now) {
      var fs = clamp(geo.r * 0.32, 11, 14);
      ctx.font = '700 ' + fs + 'px Nunito, system-ui, sans-serif';
      var maxW = Math.max(120, geo.r * 4);
      var words = b.text.split(' '); var lines = [''];
      words.forEach(function (wd) {
        var tryL = lines[lines.length - 1] ? lines[lines.length - 1] + ' ' + wd : wd;
        if (ctx.measureText(tryL).width > maxW && lines[lines.length - 1]) lines.push(wd); else lines[lines.length - 1] = tryL;
      });
      if (lines.length > 2) { lines = lines.slice(0, 2); lines[1] += '…'; }
      var w = Math.max.apply(null, lines.map(function (l) { return ctx.measureText(l).width; })) + fs * 1.2;
      var h = lines.length * fs * 1.25 + fs * 0.7;
      var fade = clamp((b.until - now) / 400, 0, 1);
      ctx.save(); ctx.globalAlpha = fade;
      var bg = b.channel === 'vampir' ? '#3a0f1c' : b.channel === 'olu' ? '#2c3550' : '#fbf6ea';
      var fg = b.channel === 'vampir' ? '#ffd0d6' : b.channel === 'olu' ? '#dfe6ff' : '#1e1834';
      ctx.fillStyle = bg;
      var bx = clamp(x - w / 2, 4 + insets.left, W - insets.right - w - 4);
      y = Math.max(y, insets.top + h + 6);
      rr(ctx, bx, y - h, w, h, 10); ctx.fill();
      ctx.beginPath(); ctx.moveTo(x - 6, y - 1); ctx.lineTo(x, y + 7); ctx.lineTo(x + 6, y - 1); ctx.fill();
      ctx.fillStyle = fg; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      lines.forEach(function (l, i) { ctx.fillText(l, bx + fs * 0.6, y - h + fs * 0.35 + i * fs * 1.25); });
      ctx.restore(); ctx.textBaseline = 'alphabetic';
    }

    function drawTomb(x, y, s, night) {
      ctx.fillStyle = 'rgba(0,0,0,.3)';
      ctx.beginPath(); ctx.ellipse(x, y, s * 0.3, s * 0.08, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = mix('#9aa0ad', '#585a70', night); ctx.strokeStyle = 'rgba(20,14,40,.6)'; ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x - s * 0.22, y); ctx.lineTo(x - s * 0.22, y - s * 0.45);
      ctx.arc(x, y - s * 0.45, s * 0.22, Math.PI, TAU); ctx.lineTo(x + s * 0.22, y); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = 'rgba(40,36,60,.7)'; ctx.lineWidth = Math.max(1.5, s * 0.04);
      ctx.beginPath(); ctx.moveTo(x, y - s * 0.55); ctx.lineTo(x, y - s * 0.22); ctx.moveTo(x - s * 0.1, y - s * 0.43); ctx.lineTo(x + s * 0.1, y - s * 0.43); ctx.stroke();
    }

    function drawFire(now, night) {
      var c = proj(0.5, 0.5);
      var s = geo.S * 0.07;
      ctx.fillStyle = '#5a4030';
      ctx.save(); ctx.translate(c.x, c.y);
      ctx.rotate(0.5); rr(ctx, -s * 0.7, -s * 0.1, s * 1.4, s * 0.2, s * 0.1); ctx.fill();
      ctx.rotate(-1); rr(ctx, -s * 0.7, -s * 0.1, s * 1.4, s * 0.2, s * 0.1); ctx.fill();
      ctx.restore();
      for (var i = 0; i < 3; i++) {
        var f = 0.8 + 0.2 * Math.sin(now / (90 + i * 37) + i);
        var fw = s * (0.55 - i * 0.14); var fh = s * (1.5 - i * 0.35) * f;
        ctx.fillStyle = ['#ff7a1a', '#ffb347', '#fff1b8'][i];
        ctx.beginPath(); ctx.moveTo(c.x - fw, c.y);
        ctx.quadraticCurveTo(c.x - fw, c.y - fh * 0.6, c.x + Math.sin(now / 200 + i) * fw * 0.3, c.y - fh);
        ctx.quadraticCurveTo(c.x + fw, c.y - fh * 0.6, c.x + fw, c.y); ctx.closePath(); ctx.fill();
      }
      lights.push({ x: c.x, y: c.y - s * 0.5, r: geo.S * (0.3 + 0.03 * Math.sin(now / 130)), a: 0.35 + 0.6 * night, fire: true });
    }

    var lights = [];
    var tagRects = [];
    function frame(now) {
      if (disposed) return;
      requestAnimationFrame(frame);
      if (!running || document.hidden) { lastT = now; return; }
      var raw = now - lastT;
      var dt = Math.min(0.05, raw / 1000);
      if (quality === 'low' && dt < 1 / 32) return;
      lastT = now;
      perf.n++; perf.acc += Math.min(raw, 250); if (perf.acc >= 1000) { perf.fps = Math.round(perf.n * 1000 / perf.acc); perf.ms = +(perf.acc / perf.n).toFixed(1); perf.n = 0; perf.acc = 0; }
      if (view === 'menu') { spin += dt * 0.04; targetNight = 0.72; }
      nightAmt = lerp(nightAmt, targetNight, Math.min(1, dt * 1.5));
      var ph = phase();
      duskAmt = ph === 'day' ? remainingFrac() : 0;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      lights = [];
      var night = nightAmt;
      drawGround(night);
      // nesneleri y'ye göre sırala
      var items = [];
      trees.forEach(function (t) { items.push({ y: proj(t.u, t.v).y, f: function () { drawTree(t, night); } }); });
      houses.forEach(function (h) { items.push({ y: proj(h.u, h.v).y, f: function () { drawHouse(h, night, now); } }); });
      var meId = state && state.me && state.me.id;
      var viewerGhost = state && ['night', 'day', 'hunter', 'reveal'].indexOf(state.room.phase) >= 0 && state.me && !state.me.alive;
      if (view === 'game') {
        ents.forEach(function (e) {
          // hareket
          var dx = e.tx - e.x; var dy = e.ty - e.y; var d = Math.hypot(dx, dy);
          var sp = 0.32 * dt;
          if (d > 0.002) {
            var k = Math.min(1, sp / d);
            e.x += dx * k; e.y += dy * k; e.walkT += dt * 10;
            if (Math.abs(dx) > 0.001) e.face = dx < 0 ? -1 : 1;
          }
          var arrived = d < 0.01;
          var wantVisible = !(e.wantInside && arrived);
          e.inside = !wantVisible;
          e.alpha = lerp(e.alpha, wantVisible ? 1 : 0, Math.min(1, dt * 5));
          var p = e.p;
          if (!p.alive && !(viewerGhost && !p.left)) {
            // mezar
            var tp = proj(p.pos ? p.pos.x : e.x, p.pos ? p.pos.y : e.y);
            items.push({ y: tp.y, f: function () { drawTomb(tp.x, tp.y, geo.r, night); } });
            return;
          }
          if (e.alpha < 0.02) return;
          var pt = proj(e.x, e.y);
          items.push({ y: pt.y, f: function () { drawEnt(e, pt, now, d > 0.004, meId); } });
        });
      }
      items.sort(function (a, b) { return a.y - b.y; });
      drawFire(now, night);
      items.forEach(function (it) { it.f(); });
      // parçacıklar
      particles = particles.filter(function (pa) {
        pa.life -= dt;
        if (pa.life <= 0) return false;
        var al = pa.life / pa.max;
        ctx.globalAlpha = al;
        ctx.fillStyle = pa.color;
        if (pa.screen) {
          pa.x += pa.vx * dt; pa.y += pa.vy * dt; pa.rot += dt * 5;
          ctx.save(); ctx.translate(pa.x, pa.y); ctx.rotate(pa.rot); ctx.fillRect(-pa.size / 2, -pa.size / 4, pa.size, pa.size / 2); ctx.restore();
        } else {
          pa.u += pa.vx * dt; pa.v += pa.vy * dt;
          var q = proj(pa.u, pa.v);
          ctx.beginPath(); ctx.arc(q.x, q.y - geo.r * 0.4, pa.size * (pa.smoke ? (1.5 - al) : 1), 0, TAU); ctx.fill();
        }
        ctx.globalAlpha = 1;
        return true;
      });
      // ışık ve gece
      if (night > 0.02 || duskAmt > 0.02) {
        ctx.globalCompositeOperation = 'multiply';
        var tint = night > 0.02 ? mix('#ffffff', '#3b3a78', night) : mix('#ffffff', '#ffb37a', duskAmt * 0.5);
        if (night > 0.02 && duskAmt > 0) tint = mix('#ffffff', '#3b3a78', night);
        ctx.fillStyle = tint; ctx.fillRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';
        lights.forEach(function (l) {
          var g = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.r);
          g.addColorStop(0, 'rgba(255,170,80,' + (l.a * 0.55) + ')'); g.addColorStop(1, 'rgba(255,120,40,0)');
          ctx.fillStyle = g; ctx.fillRect(l.x - l.r, l.y - l.r, l.r * 2, l.r * 2);
        });
        ctx.globalCompositeOperation = 'source-over';
      }
      // ateş böcekleri / yıldızlar
      if (night > 0.4 && quality !== 'low') {
        for (var f = 0; f < 18; f++) {
          var fx = (hash(f) * W + Math.sin(now / 1700 + f) * 30) % W;
          var fy = (hash(f + 50) * H + Math.cos(now / 2100 + f) * 24) % H;
          ctx.fillStyle = 'rgba(255,240,170,' + (0.25 + 0.35 * Math.sin(now / 400 + f * 2)) * night + ')';
          ctx.beginPath(); ctx.arc(fx, fy, 1.6, 0, TAU); ctx.fill();
        }
      }
      // isimler ve balonlar (ışıktan sonra, okunaklı kalsın)
      tagRects = [];
      if (view === 'game') {
        houses.forEach(function (h) {
          if (!h.id || !h.name) return;
          var e = ents.get(h.id);
          if (!(e && e.inside) && state.room.phase !== 'night') return;
          var p = proj(h.u, h.v);
          var pl = e && e.p;
          var sel = pl && selectable(pl);
          nameTag(p.x, p.y + 4, h.name, { dot: h.color, border: sel ? 'rgba(255,210,122,.95)' : null });
        });
        ents.forEach(function (e) {
          if (e.alpha < 0.3 || e.inside) return;
          var p = e.p;
          if (!p.alive && !viewerGhost) return;
          var pt = proj(e.x, e.y);
          var isMe = p.id === meId;
          nameTag(pt.x, pt.y + 5, p.bot ? p.name + ' · bot' : p.name, { dot: COLORS[p.look.color], border: isMe ? '#ffb347' : null, color: p.connected ? '#f6f1ff' : 'rgba(246,241,255,.55)' });
          var b = bubbles.get(p.id);
          if (b) {
            if (b.until < now) bubbles.delete(p.id);
            else drawBubble(pt.x, pt.y - geo.r * 1.35 - 26, b, now);
          }
        });
      }
      // efekt katmanı
      effects = effects.filter(function (ef) {
        ef.t += dt;
        if (ef.t > ef.dur) return false;
        var k = ef.t / ef.dur;
        var a = Math.sin(Math.PI * Math.min(1, k * 1.2)) * 0.45;
        var g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.25, W / 2, H / 2, Math.max(W, H) * 0.75);
        g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, ef.color);
        ctx.globalAlpha = a; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1;
        ef.targets.forEach(function (id) {
          var e = ents.get(id);
          var h = houses.find(function (x) { return x.id === id; });
          var src = e && e.alpha > 0.3 ? e : h ? { x: h.u, y: h.v } : null;
          if (!src) return;
          var pt = proj(src.x, src.y);
          ctx.strokeStyle = ef.color; ctx.lineWidth = 3; ctx.globalAlpha = 1 - k;
          ctx.beginPath(); ctx.ellipse(pt.x, pt.y, geo.r * (0.6 + k * 1.4), geo.r * (0.6 + k * 1.4) * geo.K, 0, 0, TAU); ctx.stroke();
          ctx.globalAlpha = 1;
        });
        return true;
      });
      // dokunma halkaları
      ripples = ripples.filter(function (r) {
        r.t += dt;
        if (r.t > 0.6) return false;
        var pt = proj(r.u, r.v);
        ctx.strokeStyle = 'rgba(255,230,170,' + (1 - r.t / 0.6) + ')'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.ellipse(pt.x, pt.y, 6 + r.t * 40, (6 + r.t * 40) * geo.K, 0, 0, TAU); ctx.stroke();
        return true;
      });
    }

    function drawEnt(e, pt, now, walking, meId) {
      var p = e.p;
      var s = geo.r;
      var ph = state.room.phase;
      var sel = selectable(p);
      var night = state.night;
      var mark = null; var markColor = null;
      if (night && night.mySelection === p.id && SEL_LABEL[state.me.role]) { mark = SEL_LABEL[state.me.role]; markColor = SEL_COLOR[state.me.role]; }
      if (night && night.witch) {
        if (night.witch.heal === p.id) { mark = 'İksir'; markColor = '#8be06a'; }
        if (night.witch.poison === p.id) { mark = 'Zehir'; markColor = '#b06cff'; }
        if (!mark && night.witch.victims.indexOf(p.id) >= 0) { mark = 'Saldırı altında'; markColor = '#ff4b5f'; }
      }
      if (night && night.team && state.me.role !== 'vampir' && state.me.role !== 'iftiraci') { /* görmez */ }
      var teamPick = night && night.team ? night.team.filter(function (t) { return t.targetId === p.id && t.vampId !== state.me.id; }) : [];
      if (!mark && teamPick.length) { mark = teamPick.map(function (t) { return t.name; }).join(', '); markColor = '#ff8a9a'; }
      if (state.day && state.day.myVote === p.id) { mark = 'Oyun'; markColor = '#ffd27a'; }
      if (ph === 'hunter' && p.id === state.room.hunterId) { mark = 'Nişan alıyor'; markColor = '#ffb347'; }
      // seçim halkası
      if (sel || markColor) {
        var pulse = 0.5 + 0.5 * Math.sin(now / 260);
        ctx.strokeStyle = markColor || 'rgba(255,210,122,' + (0.55 + 0.45 * pulse) + ')';
        ctx.lineWidth = markColor ? 3.5 : 2.5;
        ctx.setLineDash(markColor ? [] : [6, 5]);
        ctx.beginPath(); ctx.ellipse(pt.x, pt.y, s * 0.48, s * 0.48 * geo.K * 0.55, 0, 0, TAU); ctx.stroke();
        ctx.setLineDash([]);
      }
      var ghost = !p.alive;
      var bob = walking ? Math.abs(Math.sin(e.walkT)) * s * 0.08 : Math.sin(now / 700 + pt.x) * s * 0.015;
      var sleeping = ph === 'night' && !p.alive ? false : false;
      drawFigure(ctx, pt.x, pt.y, s, p.look, {
        ghost: ghost, alpha: e.alpha * (p.connected || p.left ? 1 : 0.55) * (ghost ? 0.8 : 1), bob: ghost ? s * 0.12 + Math.sin(now / 500) * s * 0.05 : bob,
        sleeping: sleeping, blink: (now / 1000 + pt.x) % 4 < 0.12,
      });
      // ev sahibi tacı (lobi)
      if (p.isHost && (ph === 'lobby' || ph === 'ended')) {
        ctx.fillStyle = '#ffd34d'; ctx.strokeStyle = 'rgba(40,20,0,.6)'; ctx.lineWidth = 1;
        var cx = pt.x; var cy = pt.y - s * 1.32;
        ctx.beginPath(); ctx.moveTo(cx - 7, cy + 4); ctx.lineTo(cx - 8, cy - 4); ctx.lineTo(cx - 3, cy); ctx.lineTo(cx, cy - 6); ctx.lineTo(cx + 3, cy); ctx.lineTo(cx + 8, cy - 4); ctx.lineTo(cx + 7, cy + 4); ctx.closePath(); ctx.fill(); ctx.stroke();
      }
      // oy noktaları
      var votes = state.day && state.day.votes[p.id];
      var topY = pt.y - s * 1.25;
      if (votes && votes.length) {
        var total = votes.reduce(function (a, v) { return a + v.w; }, 0);
        var dotR = clamp(s * 0.11, 4, 7);
        var width = votes.length * dotR * 2.3 + dotR * 3;
        var vx = pt.x - width / 2;
        ctx.fillStyle = 'rgba(15,12,34,.85)';
        rr(ctx, vx - 4, topY - dotR * 2.6, width + 8, dotR * 2.6, dotR * 1.3); ctx.fill();
        ctx.fillStyle = '#ffd27a'; ctx.font = '900 ' + Math.round(dotR * 1.8) + 'px Nunito, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(String(total), vx + dotR * 1.1, topY - dotR * 1.3 + 0.5);
        votes.forEach(function (v, i) {
          var voter = state.players.find(function (x) { return x.id === v.id; });
          ctx.fillStyle = voter ? COLORS[voter.look.color] : '#999';
          ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(vx + dotR * 3 + i * dotR * 2.3, topY - dotR * 1.3, v.w > 1 ? dotR * 1.05 : dotR * 0.8, 0, TAU); ctx.fill(); ctx.stroke();
        });
        ctx.textBaseline = 'alphabetic';
        topY -= dotR * 3;
      }
      if (mark) {
        var fs = clamp(s * 0.3, 10, 13);
        ctx.font = '800 ' + fs + 'px Nunito, system-ui, sans-serif';
        var w = ctx.measureText(mark).width + fs;
        ctx.fillStyle = markColor; rr(ctx, pt.x - w / 2, topY - fs * 1.6, w, fs * 1.5, fs * 0.75); ctx.fill();
        ctx.fillStyle = '#1a1030'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(mark, pt.x, topY - fs * 0.85);
        ctx.textBaseline = 'alphabetic';
      }
    }

    requestAnimationFrame(frame);

    function setView(v) {
      view = v === 'menu' ? 'menu' : 'game';
      if (view === 'menu') { state = null; ents.clear(); houses = menuHouses(); bubbles.clear(); }
      spin = 0;
      layout();
    }

    var api = {
      update: update,
      announce: announce,
      bubble: bubble,
      setView: setView,
      setQuality: function (q) { quality = q || 'auto'; resize(); if (handlers.onQuality) handlers.onQuality(quality); },
      getQuality: function () { return quality; },
      resize: resize,
      // Arayüz katmanlarının kapladığı kenarlar: köy görünen alanın ortasına yerleşir.
      setInsets: function (o) { insets = { top: o.top || 0, bottom: o.bottom || 0, left: o.left || 0, right: o.right || 0 }; layout(); },
      reset: function () { ents.clear(); bubbles.clear(); effects = []; particles = []; state = null; houses = menuHouses(); },
      dispose: function () { disposed = true; canvas.remove(); },
      isFallback: true,
      stats: function () { return { fps: perf.fps, ms: perf.ms, tier: quality === "auto" ? "low" : quality, mode: quality === "auto" ? "auto" : "manual", px: DPR }; },
    };
    setTimeout(function () {
      if (handlers.onProgress) handlers.onProgress(1, 1);
      if (handlers.onReady) handlers.onReady();
    }, 0);
    return api;
  }

  // Küçük döner önizleme (profil, görünüm düzenleyici).
  function preview(el, look, opts) {
    opts = opts || {};
    var canvas = document.createElement('canvas');
    canvas.className = 'vkw-preview';
    canvas.style.cssText = 'width:100%;height:100%;display:block;';
    el.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var cur = look || { color: 0, hat: 0, skin: 0 };
    var dead = false; var t0 = performance.now(); var pop = 0;
    function loop(now) {
      if (dead) return;
      requestAnimationFrame(loop);
      if (document.hidden) return;
      var r = el.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = Math.max(1, r.width); var h = Math.max(1, r.height);
      if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      var t = (now - t0) / 1000;
      pop = Math.max(0, pop - 0.05);
      var s = Math.min(w, h * 0.85) * 0.78 * (1 + pop * 0.08);
      var g = ctx.createRadialGradient(w / 2, h * 0.9, 2, w / 2, h * 0.9, s * 0.7);
      g.addColorStop(0, 'rgba(255,179,71,.35)'); g.addColorStop(1, 'rgba(255,179,71,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, 0);
      ctx.scale(1 + Math.sin(t * 1.3) * 0.03, 1);
      drawFigure(ctx, 0, h * 0.9, s, cur, { bob: Math.abs(Math.sin(t * 2.2)) * s * 0.03, blink: t % 3.5 < 0.12 });
      ctx.restore();
    }
    requestAnimationFrame(loop);
    return {
      setLook: function (l) { cur = l; pop = 1; },
      dispose: function () { dead = true; canvas.remove(); },
    };
  }

  window.VKWorldFallback = {
    create: create,
    preview: preview,
    hasWebGL: hasWebGL,
    drawFigure: drawFigure,
    COLORS: COLORS.map(function (hex, i) { return { name: COLOR_NAMES[i], hex: hex }; }),
    HATS: HAT_NAMES.map(function (name) { return { name: name }; }),
    SKINS: SKINS.map(function (s) { return { name: s[0] }; }),
  };
})();

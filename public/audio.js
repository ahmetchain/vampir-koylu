/* Vampir Köylü v2 – ses motoru (window.VKAudio)
 *
 * Düz script, derleme yok, bağımlılık yok. API (docs/V2-PLAN.md §8):
 *   VKAudio.init()                         idempotent; AudioContext ilk kullanıcı dokunuşunda açılır/devam eder
 *   VKAudio.setScene('menu'|'lobby'|'night'|'day'|'ended'|'none')   müzik + ortam sesi çapraz geçiş
 *   VKAudio.sfx(name, { volume })          tek seferlik efekt; bilinmeyen isimler sessizce yok sayılır
 *   VKAudio.setVolume({ master, music, sfx, amb }); VKAudio.getVolume()
 *   VKAudio.mute(bool); VKAudio.isMuted()
 *   VKAudio._debug()                       test için durum özeti (sahne, kazançlar, yüklenen/başarısız dosyalar)
 *
 * Tasarım notları:
 * - Tüm ses Web Audio grafiğinden geçer (iOS'ta HTMLMediaElement.volume çalışmaz; GainNode çalışır).
 * - Müzik/ortam döngüleri çözülmüş AudioBuffer olarak örnek-hassas döner. Medya elementi akışı
 *   bilinçli olarak kullanılmadı: iOS'ta her element kendi kullanıcı dokunuşunu ister (sahne
 *   değişimi sunucu mesajıyla gelir), loop'ta boşluk bırakır ve ses seviyesi uygulanamaz.
 *   Bellek için: en fazla 2 müzik parçası çözülmüş tutulur (çalan + sönen); diğerleri bırakılır,
 *   sıkıştırılmış mp3 baytları (~1 MB) saklanır, gerekince ağ olmadan yeniden çözülür.
 * - Döngü dosyaları periyodik üretildi: [0, loopStart) = döngü sonunun kopyası, [loopEnd, son) =
 *   döngü başının kopyası. Bu yüzden mp3 kodlayıcı gecikmesini kırpmayan tarayıcılarda da
 *   loopStart/loopEnd ile döngü dikişsiz kalır.
 * - Hiçbir genel fonksiyon çağırana hata fırlatmaz; dosya eksikse o katman/efekt sessizce atlanır.
 */
(function () {
  'use strict';
  if (window.VKAudio) return;

  // ---------- dosya kökü (audio.js'e göre göreli) ----------
  var BASE = 'assets/audio/';
  try {
    var cs = document.currentScript;
    if (cs && cs.src) BASE = new URL('assets/audio/', cs.src).href;
  } catch (e) { /* göreli yol yeterli */ }

  // ---------- içerik tablosu ----------
  // loopStart/loopEnd saniye; dosyalar build betiğiyle üretildi (CREDITS.md'de kaynaklar).
  var MUSIC = {
    menu:  { file: 'music/menu.mp3',  loopStart: 0.3, loopEnd: 73.33039, gain: 1.0 },
    day:   { file: 'music/day.mp3',   loopStart: 0.3, loopEnd: 62.5246,  gain: 1.0 },
    night: { file: 'music/night.mp3', loopStart: 0.3, loopEnd: 57.01075, gain: 1.0 }
  };
  var AMB = {
    fire:  { file: 'amb/fire.mp3',  loopStart: 0.3, loopEnd: 10.0 },
    night: { file: 'amb/night.mp3', loopStart: 0.3, loopEnd: 13.9 },
    day:   { file: 'amb/day.mp3',   loopStart: 0.3, loopEnd: 13.9 }
  };
  // vol: temel seviye, pitch: ± rastgele hız oranı, max: aynı anda kaç kopya, gap: aynı efekt için
  // en kısa aralık (ms), duck: çalarken müziğin çarpanı, prio: init sonrası ön-yükleme önceliği
  function takes(name, n) { var a = ['sfx/' + name + '.mp3']; for (var i = 2; i <= n; i++) a.push('sfx/' + name + '-' + i + '.mp3'); return a; }
  var SFX = {
    click:   { files: takes('click', 1),  vol: 0.55, pitch: 0.05, max: 3, gap: 30, prio: 1 },
    tick:    { files: takes('tick', 2),   vol: 0.5,  pitch: 0.0,  max: 2, gap: 80, prio: 2, seq: true },
    join:    { files: takes('join', 1),   vol: 0.7,  pitch: 0.0,  max: 2, gap: 120, prio: 1 },
    leave:   { files: takes('leave', 1),  vol: 0.6,  pitch: 0.0,  max: 2, gap: 120, prio: 2 },
    message: { files: takes('message', 1), vol: 0.55, pitch: 0.03, max: 2, gap: 90, prio: 1 },
    start:   { files: takes('start', 1),  vol: 0.9,  max: 1, gap: 500, duck: 0.55, prio: 1 },
    night:   { files: takes('night', 1),  vol: 0.9,  max: 1, gap: 500, duck: 0.55, prio: 1 },
    dawn:    { files: takes('dawn', 1),   vol: 0.9,  max: 1, gap: 500, duck: 0.55, prio: 1 },
    death:   { files: takes('death', 1),  vol: 0.9,  max: 1, gap: 400, duck: 0.5, prio: 2 },
    safe:    { files: takes('safe', 1),   vol: 0.85, max: 1, gap: 400, duck: 0.6, prio: 2 },
    vote:    { files: takes('vote', 2),   vol: 0.75, pitch: 0.06, max: 4, gap: 40, prio: 2 },
    hang:    { files: takes('hang', 1),   vol: 0.9,  max: 1, gap: 400, duck: 0.6, prio: 3 },
    hunter:  { files: takes('hunter', 1), vol: 0.85, max: 1, gap: 400, duck: 0.6, prio: 3 },
    shot:    { files: takes('shot', 1),   vol: 0.8,  pitch: 0.04, max: 2, gap: 150, prio: 3 },
    seer:    { files: takes('seer', 1),   vol: 0.85, max: 1, gap: 400, duck: 0.65, prio: 2 },
    watch:   { files: takes('watch', 1),  vol: 0.85, max: 1, gap: 400, duck: 0.65, prio: 3 },
    win:     { files: takes('win', 1),    vol: 1.0,  max: 1, gap: 1000, duck: 0.25, prio: 3 },
    lose:    { files: takes('lose', 1),   vol: 1.0,  max: 1, gap: 1000, duck: 0.25, prio: 3 },
    step:    { files: takes('step', 5),   vol: 0.35, pitch: 0.1, max: 4, gap: 60, prio: 1 },
    door:    { files: takes('door', 2),   vol: 0.7,  pitch: 0.05, max: 2, gap: 150, prio: 1 },
    bite:    { files: takes('bite', 1),   vol: 0.8,  pitch: 0.06, max: 2, gap: 150, prio: 2 },
    potion:  { files: takes('potion', 1), vol: 0.8,  pitch: 0.04, max: 2, gap: 150, prio: 3 },
    poof:    { files: takes('poof', 1),   vol: 0.8,  pitch: 0.06, max: 3, gap: 80, prio: 2 },
    whoosh:  { files: takes('whoosh', 2), vol: 0.6,  pitch: 0.08, max: 3, gap: 60, prio: 2 },
    bell:    { files: takes('bell', 1),   vol: 0.8,  max: 1, gap: 600, duck: 0.7, prio: 2 }
  };
  // gece rastgele baykuş (iç efekt, genel sfx listesinde değil)
  var OWL = { files: ['sfx/owl.mp3'] };

  // sahne -> müzik + ortam katman seviyeleri (0..1)
  var SCENES = {
    menu:  { music: 'menu',  amb: { fire: 0.3 } },
    lobby: { music: 'menu',  amb: { fire: 0.8 } },
    day:   { music: 'day',   amb: { fire: 0.45, day: 0.75 } },
    night: { music: 'night', amb: { fire: 0.55, night: 0.85 }, owl: true },
    ended: { music: 'menu',  amb: { fire: 0.6 } },
    none:  { music: null,    amb: {} }
  };
  var FADE_OUT = 1.8, FADE_IN = 2.4, AMB_FADE = 2.0;
  var MAX_VOICES = 14, MAX_DECODED_MUSIC = 2, LATE_MS = 350;

  // ---------- ayarlar ----------
  var KEY = 'vk.audio';
  var settings = { master: 0.9, music: 0.7, sfx: 0.9, amb: 1, muted: false };
  function clamp01(v, d) { v = Number(v); return isFinite(v) ? Math.max(0, Math.min(1, v)) : d; }
  try {
    var saved = JSON.parse(window.localStorage.getItem(KEY) || 'null');
    if (saved && typeof saved === 'object') {
      ['master', 'music', 'sfx', 'amb'].forEach(function (k) { if (k in saved) settings[k] = clamp01(saved[k], settings[k]); });
      settings.muted = !!saved.muted;
    }
  } catch (e) { /* gizli mod vb. */ }
  function persist() { try { window.localStorage.setItem(KEY, JSON.stringify(settings)); } catch (e) { } }
  // kaydırıcı -> kazanç: algıya yakın olsun diye kare eğri
  function curve(v) { return v * v; }

  // ---------- durum ----------
  var AC = window.AudioContext || window.webkitAudioContext;
  var ctx = null, inited = false, unlocked = false;
  var nodes = {};                 // master, comp, music, duck, amb, sfx
  var targets = {};               // test için hedef kazançlar
  var buffers = {};               // dosya -> AudioBuffer
  var bytesP = {};                // dosya -> Promise<ArrayBuffer> (müzikte kalıcı: yeniden çözmek için)
  var pending = {};               // dosya -> Promise<AudioBuffer|null>
  var failed = {};                // dosya -> { error, at }
  var musicUse = {};              // müzik dosyası -> son kullanım zamanı (LRU)
  var scene = 'none', sceneToken = 0;
  var music = null;               // { id, file, src, gain }
  var fadingMusic = [];
  var amb = {};                   // id -> { src, gain, level }
  var voices = [];                // aktif sfx sesleri { name, src, gain, t }
  var lastPlay = {}, lastTake = {}, seqIdx = {};
  var stats = { sfxPlayed: 0, sfxDropped: 0, lastSfx: null, errors: [] };
  var owlTimer = null, duckUntil = 0;

  function logErr(where, e) {
    var m = where + ': ' + (e && e.message ? e.message : String(e));
    stats.errors.push(m); if (stats.errors.length > 20) stats.errors.shift();
  }
  function ramp(param, to, dur, key) {
    if (key) targets[key] = to;
    if (!ctx) return;
    try {
      var t = ctx.currentTime;
      param.cancelScheduledValues(t);
      param.setValueAtTime(param.value, t);
      if (dur > 0) param.linearRampToValueAtTime(to, t + dur); else param.setValueAtTime(to, t);
    } catch (e) { try { param.value = to; } catch (e2) { } }
  }

  // ---------- grafik ----------
  function build() {
    ctx = new AC();
    var c = ctx;
    nodes.master = c.createGain();
    nodes.comp = c.createDynamicsCompressor();     // üst üste binen efektlerde kırpmayı önler
    try {
      nodes.comp.threshold.value = -8; nodes.comp.knee.value = 8; nodes.comp.ratio.value = 4;
      nodes.comp.attack.value = 0.004; nodes.comp.release.value = 0.25;
    } catch (e) { }
    nodes.music = c.createGain(); nodes.duck = c.createGain();
    nodes.sfx = c.createGain(); nodes.amb = c.createGain();
    nodes.music.connect(nodes.duck); nodes.duck.connect(nodes.master);
    nodes.amb.connect(nodes.sfx);                  // ortam sesi "efektler" kaydırıcısına bağlı
    nodes.sfx.connect(nodes.master);
    nodes.master.connect(nodes.comp); nodes.comp.connect(c.destination);
    nodes.duck.gain.value = 1; targets.duck = 1;
    applyVolumes(0);
    try { c.onstatechange = function () { if (c.state === 'running') unlocked = true; }; } catch (e) { }
  }
  function applyVolumes(dur) {
    if (!ctx) return;
    ramp(nodes.master.gain, settings.muted ? 0 : curve(settings.master), dur, 'master');
    ramp(nodes.music.gain, curve(settings.music), dur, 'music');
    ramp(nodes.sfx.gain, curve(settings.sfx), dur, 'sfx');
    ramp(nodes.amb.gain, curve(settings.amb), dur, 'amb');
  }

  // ---------- kilit açma (iOS/Android otomatik oynatma kuralları) ----------
  var GESTURES = ['pointerdown', 'touchstart', 'touchend', 'mousedown', 'keydown', 'click'];
  function onGesture() {
    if (!AC || document.hidden) return;
    if (!ctx) {
      try { build(); } catch (e) { logErr('context', e); ctx = null; return; }
    }
    if (settings.muted) return;   // sessizken açma; mute(false) kendi dokunuşunda açar
    if (ctx.state !== 'running') {
      try {
        var p = ctx.resume();
        if (p && p.then) p.then(afterUnlock, function (e) { logErr('resume', e); });
      } catch (e) { logErr('resume', e); }
      // eski iOS: dokunuş içinde bir kaynak başlatmak gerekir
      try {
        var b = ctx.createBuffer(1, 1, 22050), s = ctx.createBufferSource();
        s.buffer = b; s.connect(ctx.destination); s.start(0);
      } catch (e) { }
    }
    if (ctx.state === 'running') afterUnlock();
  }
  function afterUnlock() {
    if (!ctx || ctx.state !== 'running') return;
    var first = !unlocked;
    unlocked = true;
    if (first) { setTimeout(prefetchSfx, 800); }
    syncScene();
  }

  // ---------- yükleme ----------
  function fetchBytes(file) {
    return fetch(BASE + file, { credentials: 'same-origin' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.arrayBuffer();
    });
  }
  function decode(ab) {
    return new Promise(function (res, rej) {
      try {
        var p = ctx.decodeAudioData(ab, res, rej);   // eski Safari yalnız callback destekler
        if (p && p.then) p.then(res, rej);
      } catch (e) { rej(e); }
    });
  }
  // dosyayı yükle + çöz; hata olursa null döner (asla reject etmez)
  function getBytes(file) {
    if (!bytesP[file]) {
      bytesP[file] = fetchBytes(file);
      bytesP[file].catch(function () { delete bytesP[file]; });
    }
    return bytesP[file];
  }
  function load(file, keepBytes) {
    if (buffers[file]) return Promise.resolve(buffers[file]);
    if (pending[file]) return pending[file];
    if (!ctx) return Promise.resolve(null);
    // eksik dosya: 30 sn boyunca yeniden isteme (ağ yağmuru olmasın)
    if (failed[file] && Date.now() - failed[file].at < 30000) return Promise.resolve(null);
    var p = getBytes(file).then(function (ab) {
      if (!keepBytes) delete bytesP[file];
      return decode(keepBytes ? ab.slice(0) : ab);   // decodeAudioData baytları devralır
    }).then(function (buf) {
      if (!buf) throw new Error('decode');
      buffers[file] = buf; delete failed[file]; delete pending[file];
      return buf;
    }).then(null, function (e) {
      failed[file] = { error: (e && e.message) || String(e) || 'hata', at: Date.now() };
      delete pending[file];
      return null;
    });
    pending[file] = p;
    return p;
  }
  // bağlam yokken (ilk dokunuştan önce) sahnenin dosyalarını yalnızca indir
  function prefetchSceneBytes() {
    var d = SCENES[scene];
    if (!d || !inited) return;
    if (d.music) getBytes(MUSIC[d.music].file).then(null, function () { });
    Object.keys(d.amb).forEach(function (id) { getBytes(AMB[id].file).then(null, function () { }); });
  }
  function prefetchSfx() {
    var list = [];
    Object.keys(SFX).forEach(function (n) { SFX[n].files.forEach(function (f) { list.push({ f: f, p: SFX[n].prio || 2 }); }); });
    list.push({ f: OWL.files[0], p: 3 });
    list.sort(function (a, b) { return a.p - b.p; });
    var i = 0, active = 0;
    function next() {
      while (active < 3 && i < list.length) {
        var f = list[i++].f;
        if (buffers[f] || failed[f]) continue;
        active++;
        load(f).then(function () { active--; next(); });
      }
    }
    next();
  }
  // müzik belleği: en fazla MAX_DECODED_MUSIC çözülmüş parça
  function trimMusicCache(keep) {
    var files = Object.keys(buffers).filter(isMusicFile);
    if (files.length <= MAX_DECODED_MUSIC) return;
    var busy = {};
    if (music) busy[music.file] = 1;
    fadingMusic.forEach(function (v) { busy[v.file] = 1; });
    if (keep) busy[keep] = 1;
    files.sort(function (a, b) { return (musicUse[a] || 0) - (musicUse[b] || 0); });   // en eski önce
    var count = files.length;
    for (var i = 0; i < files.length && count > MAX_DECODED_MUSIC; i++) {
      if (!busy[files[i]]) { delete buffers[files[i]]; count--; }
    }
  }
  function isMusicFile(f) { return f.indexOf('music/') === 0; }

  // ---------- döngü sesleri ----------
  function startLoop(buf, def, dest, level) {
    var g = ctx.createGain(); g.gain.value = 0; g.connect(dest);
    var s = ctx.createBufferSource();
    s.buffer = buf; s.loop = true;
    var ls = Math.min(def.loopStart, buf.duration - 0.05), le = Math.min(def.loopEnd, buf.duration);
    if (le - ls > 0.5) { s.loopStart = ls; s.loopEnd = le; }
    s.connect(g);
    s.start(0, ls);
    return { src: s, gain: g, level: level };
  }
  function stopLoop(v, dur) {
    if (!v) return;
    try { ramp(v.gain.gain, 0, dur); } catch (e) { }
    var src = v.src, g = v.gain;
    setTimeout(function () {
      try { src.stop(); } catch (e) { }
      try { src.disconnect(); g.disconnect(); } catch (e) { }
    }, dur * 1000 + 120);
  }

  // sahne hedefini gerçek seslere yansıt
  function syncScene() {
    if (!ctx) return;
    var def = SCENES[scene] || SCENES.none, token = sceneToken;
    // --- müzik ---
    var wantId = def.music, want = wantId && MUSIC[wantId];
    if (music && (!want || music.id !== wantId)) {
      var old = music; music = null;
      fadingMusic.push(old);
      stopLoop(old, FADE_OUT);
      setTimeout(function () { fadingMusic = fadingMusic.filter(function (v) { return v !== old; }); trimMusicCache(); }, FADE_OUT * 1000 + 200);
    }
    if (want && !music && unlocked) {
      musicUse[want.file] = Date.now();
      load(want.file, true).then(function (buf) {
        if (token !== sceneToken || music || !buf || !ctx) return;
        try {
          var v = startLoop(buf, want, nodes.music, want.gain);
          v.id = wantId; v.file = want.file; music = v;
          // önceki parça sönerken biraz gecikmeli gir
          var delay = fadingMusic.length ? 0.6 : 0;
          var t = ctx.currentTime;
          v.gain.gain.setValueAtTime(0, t + delay);
          v.gain.gain.linearRampToValueAtTime(want.gain, t + delay + FADE_IN);
          targets['music:' + wantId] = want.gain;
          trimMusicCache(want.file);
        } catch (e) { logErr('music', e); }
      });
    }
    // --- ortam ---
    Object.keys(AMB).forEach(function (id) {
      var lvl = def.amb[id] || 0, cur = amb[id];
      targets['amb:' + id] = lvl;
      if (cur) {
        if (lvl > 0) { cur.level = lvl; ramp(cur.gain.gain, lvl, AMB_FADE); }
        else { delete amb[id]; stopLoop(cur, AMB_FADE); }
      } else if (lvl > 0 && unlocked) {
        load(AMB[id].file).then(function (buf) {
          if (token !== sceneToken || amb[id] || !buf || !ctx) return;
          var want2 = (SCENES[scene] || SCENES.none).amb[id] || 0;
          if (!want2) return;
          try {
            var v = startLoop(buf, AMB[id], nodes.amb, want2);
            amb[id] = v; ramp(v.gain.gain, want2, AMB_FADE);
          } catch (e) { logErr('amb', e); }
        });
      }
    });
    // --- baykuş ---
    if (def.owl) scheduleOwl(); else if (owlTimer) { clearTimeout(owlTimer); owlTimer = null; }
  }
  function scheduleOwl() {
    if (owlTimer) return;
    owlTimer = setTimeout(function () {
      owlTimer = null;
      var d = SCENES[scene];
      if (!d || !d.owl) return;
      if (ctx && ctx.state === 'running' && !settings.muted) {
        play(OWL, 'owl', 0.45 + Math.random() * 0.4, nodes.amb, 0.04, true);
      }
      scheduleOwl();
    }, 14000 + Math.random() * 26000);
  }

  // ---------- efekt çalma ----------
  function pickTake(name, def) {
    var n = def.files.length;
    if (n === 1) return def.files[0];
    if (def.seq) { seqIdx[name] = ((seqIdx[name] || 0) + 1) % n; return def.files[seqIdx[name]]; }
    var i = Math.floor(Math.random() * n);
    if (i === lastTake[name]) i = (i + 1 + Math.floor(Math.random() * (n - 1))) % n;
    lastTake[name] = i;
    return def.files[i];
  }
  function play(def, name, vol, dest, pitch, pan) {
    var file = pickTake(name, def), asked = Date.now();
    var go = function (buf) {
      if (!buf || !ctx || ctx.state !== 'running') return;
      if (Date.now() - asked > LATE_MS) { stats.sfxDropped++; return; }   // geç kalan efekt kafa karıştırır
      try {
        // aynı efektin çok kopyası: en eskisini kes
        var same = voices.filter(function (v) { return v.name === name; });
        if (def.max && same.length >= def.max) kill(same[0]);
        if (voices.length >= MAX_VOICES) kill(voices[0]);
        var s = ctx.createBufferSource(), g = ctx.createGain(), out = g;
        s.buffer = buf;
        if (pitch) s.playbackRate.value = 1 + (Math.random() * 2 - 1) * pitch;
        g.gain.value = vol;
        s.connect(g);
        if (pan && ctx.createStereoPanner) {
          var p = ctx.createStereoPanner(); p.pan.value = Math.random() * 1.2 - 0.6; g.connect(p); out = p;
        }
        out.connect(dest);
        var v = { name: name, src: s, gain: g, out: out, t: ctx.currentTime };
        voices.push(v);
        s.onended = function () { remove(v); };
        s.start(0);
        stats.sfxPlayed++; stats.lastSfx = name;
        if (def.duck) duck(def.duck, buf.duration / (s.playbackRate.value || 1));
      } catch (e) { logErr('sfx ' + name, e); }
    };
    if (buffers[file]) go(buffers[file]); else load(file).then(go);
  }
  function remove(v) {
    var i = voices.indexOf(v); if (i >= 0) voices.splice(i, 1);
    try { v.src.disconnect(); v.gain.disconnect(); if (v.out !== v.gain) v.out.disconnect(); } catch (e) { }
  }
  function kill(v) {
    try { ramp(v.gain.gain, 0, 0.03); v.src.stop(ctx.currentTime + 0.04); } catch (e) { }
    remove(v);
  }
  function duck(level, dur) {
    if (!ctx) return;
    var t = ctx.currentTime, end = t + dur;
    if (end < duckUntil && targets.duck <= level) return;
    duckUntil = Math.max(duckUntil, end);
    var p = nodes.duck.gain;
    try {
      p.cancelScheduledValues(t); p.setValueAtTime(p.value, t);
      p.linearRampToValueAtTime(level, t + 0.15);
      p.setValueAtTime(level, duckUntil);
      p.linearRampToValueAtTime(1, duckUntil + 0.8);
    } catch (e) { }
    targets.duck = level;
    setTimeout(function () { if (ctx && ctx.currentTime >= duckUntil) targets.duck = 1; }, dur * 1000 + 900);
  }

  // ---------- sayfa görünürlüğü ----------
  function onVisibility() {
    if (!ctx) return;
    try {
      if (document.hidden) { if (ctx.state === 'running') ctx.suspend(); }
      else if (!settings.muted && unlocked) {
        var p = ctx.resume(); if (p && p.then) p.then(afterUnlock, function () { });
      }
    } catch (e) { }
  }

  // ---------- genel API ----------
  var API = {
    init: function () {
      if (inited) return;
      inited = true;
      if (!AC) return;
      try {
        GESTURES.forEach(function (ev) { window.addEventListener(ev, onGesture, { capture: true, passive: true }); });
        document.addEventListener('visibilitychange', onVisibility);
        window.addEventListener('pagehide', function () { try { if (ctx && ctx.state === 'running') ctx.suspend(); } catch (e) { } });
        window.addEventListener('pageshow', onVisibility);
        // Sayfayla daha önce etkileşim olduysa bağlamı hemen kur; yoksa ilk dokunuşu bekle
        // (dokunuştan önce AudioContext kurmak Chrome'da konsol uyarısı üretir ve iOS'ta işe yaramaz).
        var ua = navigator.userActivation;
        if (ua && ua.hasBeenActive) onGesture();
        prefetchSceneBytes();
      } catch (e) { logErr('init', e); }
    },
    setScene: function (name) {
      try {
        if (!SCENES[name]) return;
        if (name === scene) return;
        scene = name; sceneToken++;
        if (!ctx || !unlocked) prefetchSceneBytes();
        syncScene();
      } catch (e) { logErr('setScene', e); }
    },
    sfx: function (name, opts) {
      try {
        var def = SFX[name];
        if (!def || !ctx || settings.muted || ctx.state !== 'running') return;
        var t = Date.now();
        if (def.gap && lastPlay[name] && t - lastPlay[name] < def.gap) { stats.sfxDropped++; return; }
        lastPlay[name] = t;
        var v = opts && opts.volume != null ? Number(opts.volume) : 1;
        if (!isFinite(v)) v = 1;
        v = Math.max(0, Math.min(2, v));
        if (v <= 0) return;
        play(def, name, def.vol * v, nodes.sfx, def.pitch || 0, false);
      } catch (e) { logErr('sfx', e); }
    },
    setVolume: function (o) {
      try {
        if (!o || typeof o !== 'object') return;
        ['master', 'music', 'sfx', 'amb'].forEach(function (k) { if (o[k] != null) settings[k] = clamp01(o[k], settings[k]); });
        persist(); applyVolumes(0.08);
      } catch (e) { logErr('setVolume', e); }
    },
    getVolume: function () {
      return { master: settings.master, music: settings.music, sfx: settings.sfx, amb: settings.amb };
    },
    mute: function (b) {
      try {
        settings.muted = b === undefined ? true : !!b;
        persist(); applyVolumes(0.12);
        if (!ctx) return;
        if (settings.muted) {
          setTimeout(function () { try { if (settings.muted && ctx.state === 'running') ctx.suspend(); } catch (e) { } }, 200);
        } else if (!document.hidden) {
          var p = ctx.resume(); if (p && p.then) p.then(afterUnlock, function () { });
        }
      } catch (e) { logErr('mute', e); }
    },
    isMuted: function () { return !!settings.muted; },
    // test/ayıklama: kulaksız doğrulama için durum
    _debug: function () {
      var g = function (n) { try { return n ? +n.gain.value.toFixed(4) : null; } catch (e) { return null; } };
      var ambOut = {};
      Object.keys(amb).forEach(function (k) { ambOut[k] = { gain: g(amb[k].gain), target: amb[k].level }; });
      return {
        supported: !!AC, inited: inited, state: ctx ? ctx.state : 'none', unlocked: unlocked,
        sampleRate: ctx ? ctx.sampleRate : null, time: ctx ? +ctx.currentTime.toFixed(3) : 0,
        scene: scene, muted: settings.muted, volume: API.getVolume(),
        gains: {
          master: g(nodes.master), music: g(nodes.music), duck: g(nodes.duck), sfx: g(nodes.sfx), amb: g(nodes.amb),
          musicTrack: music ? { id: music.id, gain: g(music.gain) } : null,
          fadingMusic: fadingMusic.map(function (v) { return { id: v.id, gain: g(v.gain) }; }),
          ambience: ambOut
        },
        targets: JSON.parse(JSON.stringify(targets)),
        loaded: Object.keys(buffers).sort(),
        decodedMusic: Object.keys(buffers).filter(isMusicFile),
        fetchedBytes: Object.keys(bytesP),
        loading: Object.keys(pending),
        failed: Object.keys(failed).reduce(function (o, k) { o[k] = failed[k].error; return o; }, {}),
        voices: voices.map(function (v) { return v.name; }),
        stats: JSON.parse(JSON.stringify(stats)),
        sfxNames: Object.keys(SFX), scenes: Object.keys(SCENES), base: BASE
      };
    }
  };
  window.VKAudio = API;
})();

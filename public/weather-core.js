/* Hava durumu çekirdeği (UMD): sunucu (require), 3B dünya (esbuild) ve ses/2B yedek (script etiketi) aynı kodu kullanır.
 * Hava yalnızca görsel/ses; oyun kuralını değiştirmez. Sunucu { kind, seed, since } seçer; şimşek zamanları
 * bu tohumdan deterministik türetilir, böylece herkes aynı anda aynı şimşeği görür (ek ağ trafiği yok). */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.VKWeather = api;
})(typeof self !== 'undefined' ? self : this, function () {
  var KINDS = ['clear', 'rain', 'storm'];
  var CHANCE = { rain: 0.20, storm: 0.08 };   // geri kalanı açık (~%72)

  // Saf: tek rng çağrısı. eventId 'tipi' (kar fırtınası) ise ya da ayar kapalıysa hep açık.
  function choose(opts) {
    var o = opts || {};
    if (o.enabled === false || o.eventId === 'tipi') return 'clear';
    var rng = o.rng || Math.random, r = rng();
    if (r < CHANCE.storm) return 'storm';
    if (r < CHANCE.storm + CHANCE.rain) return 'rain';
    return 'clear';
  }

  // 32 bit tohumlu üreteç (mulberry32)
  function mulberry(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Fırtınada şimşekler: since'ten başlayarak tohumdan türeyen aralıklarla (5–17 sn, ilki 3–7 sn sonra).
  // dist 0..1: gök gürültüsü gecikmesini belirler (0.3 + 2.2·dist sn); az sayıda şimşek çift çakar.
  // [from, to] aralığındaki (ms, sunucu saati) şimşekleri döndürür.
  function strikes(seed, since, from, to) {
    var out = [];
    if (!(to > from) || !isFinite(since)) return out;
    var R = mulberry((seed >>> 0) ^ 0x9E3779B9);
    var t = since + 3000 + R() * 4000;
    for (var k = 0; k < 400 && t <= to; k++) {
      var dist = R(), ang = R(), dbl = R() < 0.25, gap = 5000 + R() * 12000;
      if (t > from) out.push({ t: t, dist: dist, ang: ang, double: dbl, k: k });
      t += gap;
    }
    return out;
  }

  function thunderDelay(dist) { return 0.3 + 2.2 * dist; }

  function normalize(w) {
    if (!w || typeof w !== 'object' || KINDS.indexOf(w.kind) < 0) return { kind: 'clear', seed: 0, since: 0 };
    return { kind: w.kind, seed: (+w.seed || 0) >>> 0, since: +w.since || 0 };
  }

  return { KINDS: KINDS, CHANCE: CHANCE, choose: choose, strikes: strikes, thunderDelay: thunderDelay, normalize: normalize, mulberry: mulberry };
});

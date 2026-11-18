'use strict';

// Hava durumu: sunucu yetkili, herkese aynı, yalnızca görsel/ses (oyun kuralını değiştirmez).
const test = require('node:test');
const assert = require('node:assert/strict');
const { Room, ROLE, Weather, normalizeSettings } = require('../game');
const Core = require('../public/weather-core');

const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 7_000_000 });

// Tohumlu, deterministik rng (mulberry32).
const seeded = (seed) => Core.mulberry(seed);

function setup(count, { settings = {}, weatherRng } = {}) {
  const room = new Room({
    id: 'HAVA', name: 'Hava', settings, weatherRng,
    hooks: { update() {}, announce() {}, empty() {}, finished() {} },
  });
  for (let i = 0; i < count; i++) {
    room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` });
    room.connect(`p${i}`, `s${i}`);
  }
  return room;
}

test('varsayılan ayar açık; doğrulama boolean yapar', () => {
  assert.equal(normalizeSettings({}).weather, true);
  assert.equal(normalizeSettings({ weather: false }).weather, false);
  assert.equal(normalizeSettings({ weather: 0 }).weather, false);
  assert.equal(normalizeSettings({ weather: 'x' }).weather, true);
});

test('tohumlu hava dağılımı: ~%72 açık, ~%20 yağmur, ~%8 fırtına', () => {
  const rng = seeded(12345);
  const n = 20000, c = { clear: 0, rain: 0, storm: 0 };
  for (let i = 0; i < n; i++) c[Weather.choose({ rng })]++;
  assert.ok(Math.abs(c.rain / n - 0.20) < 0.015, `yağmur ${c.rain / n}`);
  assert.ok(Math.abs(c.storm / n - 0.08) < 0.01, `fırtına ${c.storm / n}`);
  assert.ok(Math.abs(c.clear / n - 0.72) < 0.015, `açık ${c.clear / n}`);
  // sınırlar
  assert.equal(Weather.choose({ rng: () => 0.0 }), 'storm');
  assert.equal(Weather.choose({ rng: () => 0.1 }), 'rain');
  assert.equal(Weather.choose({ rng: () => 0.5 }), 'clear');
});

test('ayar kapalıyken hep açık; tipide hep açık', () => {
  for (let i = 0; i < 200; i++) {
    assert.equal(Weather.choose({ enabled: false, rng: () => 0.0 }), 'clear');
    assert.equal(Weather.choose({ eventId: 'tipi', rng: () => 0.0 }), 'clear');
  }
  assert.equal(Weather.choose({ eventId: 'sis', rng: () => 0.0 }), 'storm');
});

test('oda: her faz başında hava seçilir; kapalıyken oyun boyunca açık kalır', (t) => {
  clock(t);
  const room = setup(6, { settings: { weather: false }, weatherRng: () => 0.0 });
  assert.equal(room.start(room.hostId), null);
  room.startNight();
  assert.equal(room.viewFor('p0').room.weather.kind, 'clear');
  room.endNight();
  assert.equal(room.phase, 'day');
  assert.equal(room.viewFor('p0').room.weather.kind, 'clear');
});

test('oda: gece ve gündüz ayrı seçilir, since faz başıdır, lobi/başlangıçta açık', (t) => {
  clock(t);
  const seq = [0.0, 0.123, 0.1, 0.456, 0.5, 0.5];   // gece: fırtına(+tohum), gündüz: yağmur(+tohum)
  let i = 0;
  const room = setup(6, { weatherRng: () => seq[i++ % seq.length] });
  assert.equal(room.viewFor('p0').room.weather.kind, 'clear', 'lobide açık');
  assert.equal(room.start(room.hostId), null);
  assert.equal(room.viewFor('p0').room.weather.kind, 'clear', 'rol dağıtımında açık');
  room.startNight();
  const night = room.viewFor('p0').room.weather;
  assert.equal(night.kind, 'storm');
  assert.equal(night.since, Date.now());
  assert.equal(night.seed, Math.floor(0.123 * 4294967296) >>> 0);
  room.endNight();
  assert.equal(room.phase, 'day');
  const day = room.viewFor('p0').room.weather;
  assert.equal(day.kind, 'rain');
});

test('tipi (kar fırtınası) gecesinde hava açık kalır', (t) => {
  clock(t);
  const room = setup(8, { weatherRng: () => 0.0 });
  assert.equal(room.start(room.hostId), null);
  room.forceEvent('tipi');
  room.startNight();
  assert.equal(room.event && room.event.id, 'tipi');
  assert.equal(room.viewFor('p0').room.weather.kind, 'clear');
  // olay yokken aynı rng fırtına verir: olay sistemiyle çakışmaz
  room.endNight();
  assert.equal(room.viewFor('p0').room.weather.kind, 'storm');
});

test('viewFor: hava alanı bütün oyunculara aynı; oyun bitince açık; lobiye dönünce açık', (t) => {
  clock(t);
  const room = setup(6, { weatherRng: () => 0.05 });
  room.start(room.hostId);
  room.startNight();
  const views = [...room.players.keys()].map((id) => room.viewFor(id).room.weather);
  assert.equal(views[0].kind, 'storm');
  for (const v of views) assert.deepEqual(v, views[0]);
  assert.deepEqual(room.viewFor('yok').room.weather, views[0], 'izleyiciye de aynı');
  // hava oyun kuralını değiştirmez: vampir sayısı / rol dağılımı aynı
  const room2 = setup(6, { weatherRng: () => 0.9 });
  room2.start(room2.hostId);
  assert.equal(room2.viewFor('p0').room.vampireCount, room.viewFor('p0').room.vampireCount);
  assert.equal(room2.viewFor('p0').room.weather.kind, 'clear');
});

test('şimşek zamanları tohumdan deterministik ve sınırlar içinde', () => {
  const a = Core.strikes(777, 1_000_000, 0, 1_000_000 + 120_000);
  const b = Core.strikes(777, 1_000_000, 0, 1_000_000 + 120_000);
  assert.deepEqual(a, b);
  assert.ok(a.length >= 6 && a.length <= 25, `2 dk'da ${a.length} şimşek`);
  assert.ok(a[0].t >= 1_000_000 + 3000 && a[0].t <= 1_000_000 + 7000);
  for (let i = 1; i < a.length; i++) {
    const gap = a[i].t - a[i - 1].t;
    assert.ok(gap >= 5000 && gap <= 17000, `aralık ${gap}`);
    assert.ok(a[i].dist >= 0 && a[i].dist <= 1);
  }
  // parçalı sorgu bütünle aynı sonucu verir (istemciler farklı karelerde sorsa da aynı şimşekleri görür)
  const part = [...Core.strikes(777, 1_000_000, 0, 1_040_000), ...Core.strikes(777, 1_000_000, 1_040_000, 1_120_000)];
  assert.deepEqual(part, a);
  // başka tohum başka zamanlar
  assert.notDeepEqual(Core.strikes(778, 1_000_000, 0, 1_120_000).map((s) => s.t), a.map((s) => s.t));
  // gök gürültüsü gecikmesi 0.3–2.5 sn
  assert.ok(Math.abs(Core.thunderDelay(0) - 0.3) < 1e-9 && Math.abs(Core.thunderDelay(1) - 2.5) < 1e-9);
});

test('normalize: bozuk hava açık sayılır', () => {
  assert.deepEqual(Core.normalize(null), { kind: 'clear', seed: 0, since: 0 });
  assert.deepEqual(Core.normalize({ kind: 'hail' }), { kind: 'clear', seed: 0, since: 0 });
  assert.equal(Core.normalize({ kind: 'rain', seed: 5, since: 9 }).kind, 'rain');
  assert.ok(ROLE.VAMPIRE);
});

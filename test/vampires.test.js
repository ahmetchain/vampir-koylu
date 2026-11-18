'use strict';

// Oda ayarı "vampir sayısı" (auto / 1–4, köy çoğunluğunu koruyan sıkıştırma).
const test = require('node:test');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const {
  Room, ROLE, normalizeSettings, vampireCount, rolesFor, distributionFor, rolePlan,
} = require('../game');

const {
  VAMPIRE: V, DOCTOR: D, SEER: S, WATCHER: G, JAILER: L, WITCH: W, VILLAGER: K,
} = ROLE;

const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 5_000_000 });
const of = (ev, kind) => ev.announces.filter((a) => a.kind === kind);

function setup(count, settings = {}) {
  const ev = { announces: [] };
  const room = new Room({
    id: 'VAMP',
    name: 'Vampir sayısı',
    settings: { events: 'off', ...settings },
    hooks: {
      update() {},
      announce(r, a, to) { ev.announces.push({ ...a, to }); },
      empty() {},
      finished() {},
    },
  });
  for (let i = 0; i < count; i++) {
    assert.equal(room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` }), null);
    room.connect(`p${i}`, `s${i}`);
  }
  return { room, ev };
}

function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
}

function lockNext(room, jailerId, targetId) {
  if (room.phase === 'night') room.endNight();
  assert.equal(room.phase, 'day');
  assert.equal(room.lockHouse(jailerId, targetId), null);
  room.endDay();
  assert.equal(room.phase, 'night');
}

const count = (list, role) => list.filter((r) => r === role).length;
const seedRng = (seed) => {
  let a = seed >>> 0;
  return (n) => {
    a = (a + 0x6D2B79F5) >>> 0;
    let x = a;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return Math.floor((((x ^ (x >>> 14)) >>> 0) / 4294967296) * n);
  };
};

// ---------- Ayar: vampir sayısı ----------

test('normalizeSettings: vampires auto ve 1–4 kabul edilir, gerisi auto olur', () => {
  assert.equal(normalizeSettings({}).vampires, 'auto');
  assert.equal(normalizeSettings({ vampires: 'auto' }).vampires, 'auto');
  for (const n of [1, 2, 3, 4]) {
    assert.equal(normalizeSettings({ vampires: n }).vampires, n);
    assert.equal(normalizeSettings({ vampires: String(n) }).vampires, n, 'form değerleri metin gelebilir');
  }
  for (const bad of [0, 5, -1, 2.5, '0', '5', '12', 'x', '', null, true, [], {}, NaN, 'AUTO']) {
    assert.equal(normalizeSettings({ vampires: bad }).vampires, 'auto', `reddedilir: ${JSON.stringify(bad)}`);
  }
});

test('vampireCount: auto eskisi gibi; sayı [1, floor((n-1)/2)] aralığına sıkışır', () => {
  assert.deepEqual([5, 9, 10, 14, 15, 20].map((n) => vampireCount(n)), [1, 1, 2, 2, 3, 3]);
  assert.deepEqual([5, 9, 10, 14, 15, 20].map((n) => vampireCount(n, 'auto')), [1, 1, 2, 2, 3, 3]);
  assert.deepEqual([5, 6, 7, 8, 9, 10, 20].map((n) => vampireCount(n, 4)), [2, 2, 3, 3, 4, 4, 4]);
  assert.deepEqual([5, 6, 7].map((n) => vampireCount(n, 1)), [1, 1, 1]);
  assert.deepEqual([5, 7, 8].map((n) => vampireCount(n, 3)), [2, 3, 3]);
  assert.equal(vampireCount(3, 4), 1, 'asla 1 altına inmez');
  for (let n = 5; n <= 20; n++) for (const v of [1, 2, 3, 4]) {
    const c = vampireCount(n, v);
    assert.ok(c >= 1 && c <= v && c * 2 < n, `${n} oyuncu, istenen ${v}: ${c}`);
  }
});

test('dağıtım iki kipte de sıkıştırılmış vampir sayısını verir; 7 kişide 2 vampir (hepsi sade, yetenek sonra)', () => {
  for (const mode of ['random', 'all']) {
    for (let n = 5; n <= 20; n++) {
      for (const v of ['auto', 1, 2, 3, 4]) {
        const list = rolesFor(n, [D, S, G], seedRng(n * 10 + 1), mode, v);
        assert.equal(list.length, n);
        assert.equal(count(list, V), vampireCount(n, v), `${mode} ${n} oyuncu vampires=${v}`);
      }
    }
    const seven = rolesFor(7, [D, S], seedRng(3), mode, 2);
    assert.equal(count(seven, V), 2);
    assert.equal(seven.length, 7);
  }
  // Yetenek anahtarları (iftiraci/temizlikci) rol listesine karışmaz; vampir sayısını etkilemez.
  const withAbilities = rolesFor(8, [D, 'iftiraci', 'temizlikci'], seedRng(5), 'all', 2);
  assert.equal(count(withAbilities, V), 2);
  assert.ok(!withAbilities.includes('iftiraci') && !withAbilities.includes('temizlikci'));
});

test('önizleme (sunucu distributionFor) = gerçek dağıtım: kesin vampir sayısı ve istemci aynası', async () => {
  const data = await import(pathToFileURL(path.join(__dirname, '../public/ui/data.js')).href);
  const specials = [D, S, G, W];
  const roles = Object.fromEntries(specials.map((r) => [r, true]));
  for (const mode of ['random', 'all']) {
    for (let n = 5; n <= 20; n++) {
      for (const v of ['auto', 1, 2, 3, 4]) {
        const { distribution } = distributionFor(n, specials, mode, v);
        assert.equal(count(distribution, V), vampireCount(n, v), `önizleme ${mode} ${n} ${v}`);
        assert.equal(data.vampireCount(n, v), vampireCount(n, v), 'istemci aynası');
        assert.equal(count(data.distributionPlan(n, roles, mode, v).list, 'vampir'), vampireCount(n, v), `istemci önizlemesi ${mode} ${n} ${v}`);
        const real = rolesFor(n, specials, seedRng(n + v.toString().length), mode, v);
        assert.equal(count(real, V), count(distribution, V), 'gerçek dağıtım önizlemeyle aynı sayıda vampir');
      }
    }
  }
  assert.equal(rolePlan(8, [D], 4).base.length, 3);
});

test('oda: ayar lobide kaydedilir, önizleme ve gerçek dağıtım uyuşur, sıkışma günlüğe yazılır', (t) => {
  clock(t);
  const { room } = setup(7, { roleMode: 'all', vampires: 2, roles: { iftiraci: false, temizlikci: false } });
  assert.equal(room.settings.vampires, 2);
  assert.equal(room.viewFor('p0').room.vampireCount, 2);
  assert.equal(count(room.viewFor('p0').room.distribution, V), 2);
  assert.equal(room.updateSettings('p0', { vampires: 9 }), null);
  assert.equal(room.settings.vampires, 'auto', 'geçersiz değer auto olur');
  assert.equal(room.updateSettings('p0', { vampires: 3 }), null);
  assert.equal(room.viewFor('p0').room.vampireCount, 3);
  assert.equal(room.start('p0'), null);
  const roles = [...room.players.values()].map((p) => p.role);
  assert.equal(count(roles, V), 3);
  assert.ok(!roles.includes('iftiraci') && !roles.includes('temizlikci'));
  assert.ok(room.log.some((l) => /Oyun başladı: 7 oyuncu \(.*3 vampir/.test(l.text)), room.log.map((l) => l.text).join('|'));
  room.destroy();

  // 5 kişide 4 istenirse 2 olur ve gerçek sayı günlükte yazar (rastgele kipte de).
  const { room: r5 } = setup(5, { vampires: 4 });
  assert.equal(r5.viewFor('p0').room.vampireCount, 2);
  assert.equal(r5.start('p0'), null);
  assert.equal(count([...r5.players.values()].map((p) => p.role), V), 2);
  assert.ok(r5.log.some((l) => /Oyun başladı: 5 oyuncu\..*Vampir sayısı: 2 \(istenen 4;.*en fazla 2/.test(l.text)), r5.log.map((l) => l.text).join('|'));
  r5.destroy();

  // Otomatik: günlük satırı eskisi gibi.
  const { room: ra } = setup(5);
  assert.equal(ra.start('p0'), null);
  assert.ok(ra.log.some((l) => l.text === 'Oyun başladı: 5 oyuncu. Roller rastgele dağıtıldı.'));
  ra.destroy();
});

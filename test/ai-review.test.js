'use strict';

// Oyun sonu otomatik inceleme (lib/ai/gamerec.js, lib/ai/review.js, depolar, /api/admin/ai-reviews, scripts/ai-reviews.js).
// Gerçek modele hiç gidilmez: sahte taşıyıcı.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const { newDb } = require('pg-mem');
const { JsonStore } = require('../lib/store-json');
const { PgStore } = require('../lib/store-pg');
const { createGameServer } = require('../server');
const { capRecord, MAX_CHARS } = require('../lib/ai/gamerec');
const {
  Reviewer, reviewConfig, createReviewer, parseReview, REVIEW_SCHEMA, REVIEW_SYSTEM, unpackRecord, packRecord,
} = require('../lib/ai/review');
const { groupMistakes, draftsMarkdown, reviewMarkdown } = require('../lib/ai/review-format');
const { SYSTEM_PROMPT } = require('../lib/ai/prompt');
const { mockTransport, makeClient, advance, smartRoom, humanSay } = require('./ai-mock');
const { tempDir, removeDir } = require('./helpers');

const NOW = 1_763_000_000_000;
const ALL_ROLES = {
  doktor: true, kahin: true, gozcu: true, gardiyan: true, cadi: true, avci: true, muhtar: true,
  soytari: true, deli: true, hirsiz: true, iftiraci: true, temizlikci: true,
};
const execFileP = promisify(execFile);

const quiet = () => {
  const lines = { log: [], warn: [] };
  return { lines, log: (m) => lines.log.push(m), warn: (m) => lines.warn.push(m) };
};

const FAKE_REVIEW = {
  summary: 'Botlar genel olarak iyi oynadı; birkaç sayma hatası var.',
  mistakes: [
    {
      bot: 'Bot Cem', day_or_night: 'gün 2', quote: 'Doktor sen ne gördün?', what_was_wrong: 'Asked the Doktor what it saw.',
      rule_violated_or_missing: 'Claims: what to ask a claimed role', severity: 'high',
      suggested_rule_change: 'Never ask a claimed Doktor what it saw; ask whom it protected.',
      suggested_scenario: { title: 'doktor-ne-gordu', setup: 'Day 2, Ayşe claims Doktor.', expected: 'No question about what the Doktor saw.' },
    },
    {
      bot: 'Bot Elif', day_or_night: 'gece 1', quote: 'think: rastgele', what_was_wrong: 'No reason for the vote.',
      rule_violated_or_missing: 'Voting rules', severity: 'low', suggested_rule_change: 'Vote only with evidence.',
      suggested_scenario: { title: 'sebepsiz-oy', setup: 'Day 1 without evidence.', expected: 'Empty vote.' },
    },
  ],
  good_moves: ['Bot Ayşe (gün 1): doğru sayma.'],
};

function reviewTransport({ review = FAKE_REVIEW, usage = { input_tokens: 20000, output_tokens: 3000, cache_read_input_tokens: 0, cache_creation_input_tokens: 0 }, stop = 'end_turn', fail = null } = {}) {
  const calls = [];
  const t = (params) => {
    calls.push(params);
    if (fail) return Promise.reject(Object.assign(new Error('boom'), { status: fail }));
    return Promise.resolve({ stop_reason: stop, content: [{ type: 'text', text: typeof review === 'string' ? review : JSON.stringify(review) }], usage });
  };
  t.calls = calls;
  return t;
}

function smallRecord(extra = {}) {
  return { v: 1, game: { players: 3, rounds: 1, winner: 'koylu' }, players: [], timeline: [{ t: 0, text: 'Oyun başladı' }], votes: [], chat: [], bots: {}, ...extra };
}

// ---------- oyun kaydı ----------

test('oyun kaydı: botlu oyun bitince bir kez kurulur; insanın özel bilgisi yok, botların notu/düşüncesi/seçimi var, sınırlı boyut', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const transport = mockTransport({
    seed: 'kayit', latency: 700,
    decide: ({ out, task }) => { out.think = `DUSUNCE ${task.slice(0, 12)}`; },
  });
  const client = makeClient(transport);
  const { room, ev } = smartRoom({ seed: 'kayit', bots: 8, client, settings: { revealRoles: true, daySec: 40, roles: ALL_ROLES } });
  const records = [];
  room.hooks.reviewReady = (r, rec) => records.push(rec);
  room.start('h1');
  // İnsanın özel verisi: kayda girmemeli.
  room.players.get('h1').notes.push({ text: 'GIZLI-INSAN-NOTU', ts: NOW });
  let spent = 0;
  let whispered = false;
  while (room.phase !== 'ended' && spent < 30 * 60 * 1000) {
    await advance(t, 1000);
    spent += 1000;
    if (room.phase === 'day' && !whispered) {
      whispered = true;
      humanSay(room, ev, 'h1', 'GENEL-INSAN-SOZU herkese merhaba');
      // İnsanın gizli kanaldaki satırı (kötü takımdaysa gerçekte olur): doğrudan kayıt kancasına verilir.
      room.observeChat([], { channel: 'vampir', from: 'İrem', fromId: 'h1', text: 'GIZLI-FISILTI', ts: Date.now() });
    }
  }
  assert.equal(room.phase, 'ended');
  assert.equal(records.length, 1, 'oyun başına tek kayıt');
  const rec = records[0];
  const json = JSON.stringify(rec);
  assert.ok(json.length <= MAX_CHARS, `kayıt boyutu ${json.length}`);
  assert.ok(!json.includes('GIZLI-INSAN-NOTU'), 'insanın notu kayıtta yok');
  assert.ok(!json.includes('GIZLI-FISILTI'), 'insanın gizli kanal satırı kayıtta yok');
  assert.ok(json.includes('GENEL-INSAN-SOZU'), 'insanın herkese açık sözü kayıtta');
  assert.ok(!Object.keys(rec.bots).includes('İrem'), 'insan bot bölümünde değil');
  assert.equal(Object.keys(rec.bots).length, 8);
  const human = rec.players.find((p) => p.name === 'İrem');
  assert.ok(human && human.role && human.bot === false, 'insan oyuncu yalnızca rolüyle (oyun sonu açık)');
  assert.equal(rec.players.length, 9);
  assert.equal(rec.game.model, 'claude-haiku-5-5');
  assert.ok(rec.timeline.length > 5);
  assert.ok(rec.timeline.some((x) => /gece başladı/.test(x.text)) && rec.timeline.some((x) => /Kazandı|kazandı/.test(x.text)), 'günlükte gece ve sonuç satırları');
  assert.ok(rec.chat.some((c) => c.bot === 1), 'bot sohbeti');
  assert.ok(rec.chat.every((c) => c.ph && Number.isFinite(c.t)), 'sohbette evre ve zaman');
  const bots = Object.values(rec.bots);
  assert.ok(bots.every((b) => b.turns.length <= 24) && bots.filter((b) => b.turns.length > 0).length >= 5, 'bot turları sınırlı');
  assert.ok(bots.some((b) => b.turns.some((x) => x.think.startsWith('DUSUNCE') && x.memory)), 'think ve memory kayıtta');
  assert.ok(bots.some((b) => b.nights.length > 0 && b.nights.some((n) => n.pick)), 'gece seçimleri');
  assert.ok(bots.some((b) => b.notes.length > 0), 'botların özel sonuç notları');
  assert.ok(rec.votes.length > 0, 'gün oyları (kim kime)');
  assert.ok(rec.votes.some((v) => Object.values(v.votes).some((l) => l.length)), 'oy veren isimleri');
  room.destroy();
});

test('oyun kaydı: gerçek model çağrısı olmayan oyunda (hepsi hata) kayıt üretilmez', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const client = makeClient(mockTransport({ seed: 'hata', mode: 'error', latency: 100 }));
  const { room } = smartRoom({ seed: 'hata', bots: 6, client, settings: { daySec: 30 } });
  let n = 0;
  room.hooks.reviewReady = () => { n += 1; };
  room.start('h1');
  let spent = 0;
  while (room.phase !== 'ended' && spent < 30 * 60 * 1000) { await advance(t, 1000); spent += 1000; }
  assert.equal(room.phase, 'ended');
  assert.equal(n, 0);
  room.destroy();
});

test('oyun kaydı: kanca yoksa ya da kanca atarsa oyun etkilenmez', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const client = makeClient(mockTransport({ seed: 'kanca', latency: 300 }));
  const { room } = smartRoom({ seed: 'kanca', bots: 6, client, settings: { daySec: 30 } });
  room.hooks.reviewReady = () => { throw new Error('kanca patladı'); };
  room.bots.smart.logger = quiet();
  room.start('h1');
  let spent = 0;
  while (room.phase !== 'ended' && spent < 30 * 60 * 1000) { await advance(t, 1000); spent += 1000; }
  assert.equal(room.phase, 'ended');
  room.destroy();
});

test('kayıt üst sınırı: en eski sohbet satırları önce atılır, son satırlar kalır', () => {
  const chat = Array.from({ length: 900 }, (_, i) => ({ t: i, ph: 'gün 1', ch: 'genel', from: 'Ayşe', text: `satır-${i} ${'x'.repeat(120)}` }));
  const rec = capRecord(smallRecord({ chat, bots: { 'Bot A': { role: 'vampir', alive: true, nights: [], notes: [], turns: [{ t: 1, ph: 'gün 1', kind: 'vote', think: 'a', say: '', vote: '', target: '', poison: '', memory: 'm' }] } } }), 20000);
  assert.ok(JSON.stringify(rec).length <= 20000);
  assert.ok(rec.truncated.chat > 0);
  assert.ok(rec.chat.length > 0);
  assert.ok(rec.chat[rec.chat.length - 1].text.startsWith('satır-899'), 'en yeni satır kaldı');
  assert.ok(!rec.chat.some((c) => c.text.startsWith('satır-0 ')), 'en eski satır atıldı');
  // Çok büyük bot turları da kırpılır.
  const turns = Array.from({ length: 24 }, (_, i) => ({ t: i, ph: 'gün 1', kind: 'chat', think: 'd'.repeat(500), say: '', vote: '', target: '', poison: '', memory: 'm'.repeat(800) }));
  const rec2 = capRecord(smallRecord({ bots: { 'Bot A': { role: 'vampir', alive: true, nights: [], notes: [], turns } } }), 8000);
  assert.ok(JSON.stringify(rec2).length <= 8000);
  assert.ok(rec2.bots['Bot A'].turns.length >= 1);
});

// ---------- yapılandırma ----------

test('yapılandırma: varsayılanlar, AI_REVIEW=off ve anahtarsızken kapalı', () => {
  const on = reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k' });
  assert.equal(on.enabled, true);
  assert.equal(on.model, 'claude-sonnet-5-5');
  assert.equal(on.dailyLimit, 10);
  assert.equal(on.prices.input, 2);
  const custom = reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k', AI_REVIEW_MODEL: 'claude-opus-5-5', AI_REVIEW_DAILY_LIMIT: '5' });
  assert.equal(custom.model, 'claude-opus-5-5');
  assert.equal(custom.dailyLimit, 5);
  assert.equal(custom.prices.output, 20);
  assert.equal(reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k', AI_REVIEW: 'off' }).enabled, false);
  assert.equal(reviewConfig({}).enabled, false);
  assert.equal(reviewConfig({ ANTHROPIC_API_KEY: 'k' }).enabled, false, 'varsayılan kapalı: AI_REVIEW=on gerekir');
  assert.equal(createReviewer({ ANTHROPIC_API_KEY: 'k' }), null);
  assert.equal(createReviewer({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k', AI_REVIEW: 'off' }), null);
  assert.equal(createReviewer({}), null);
  assert.ok(createReviewer({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k' }, { logger: quiet() }));
});

test('inceleme istemi: sistem istemi botların kural kitabını içerir; şema zorunlu alanları ister', () => {
  assert.ok(REVIEW_SYSTEM.includes(SYSTEM_PROMPT));
  assert.ok(REVIEW_SYSTEM.length > SYSTEM_PROMPT.length);
  assert.deepEqual(REVIEW_SCHEMA.required, ['summary', 'mistakes', 'good_moves']);
  assert.deepEqual(REVIEW_SCHEMA.properties.mistakes.items.required.sort(), ['bot', 'day_or_night', 'quote', 'rule_violated_or_missing', 'severity', 'suggested_rule_change', 'suggested_scenario', 'what_was_wrong']);
  const fields = JSON.stringify(REVIEW_SCHEMA);
  assert.ok(!/"additionalProperties":true/.test(fields));
});

test('ayrıştırma: eksik alanlar ve geçersiz önem düzeltilir; bozuk metin null', () => {
  assert.equal(parseReview('Tabii, işte inceleme'), null);
  const r = parseReview(JSON.stringify({ summary: ' s ', mistakes: [{ bot: 'A', severity: 'korkunç' }, 'x'], good_moves: ['a', 5] }));
  assert.equal(r.summary, 's');
  assert.equal(r.mistakes.length, 1);
  assert.equal(r.mistakes[0].severity, 'medium');
  assert.equal(r.mistakes[0].suggested_scenario.title, '');
  assert.equal(r.good_moves.length, 2);
});

// ---------- inceleyici ----------

test('inceleyici: isteği doğru kurar, maliyeti hesaplar, tek satır log (sohbet metni/isim yok), depoya yazar', async () => {
  const transport = reviewTransport();
  const logger = quiet();
  const dir = tempDir('vk-rev-');
  const store = new JsonStore({ dir });
  await store.init();
  try {
    const reviewer = new Reviewer({ config: reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k' }), transport, logger, store });
    const record = smallRecord({ chat: [{ t: 1, ph: 'gün 1', ch: 'genel', from: 'Zeynep', text: 'ÇOK-GİZLİ-SÖZ' }] });
    const res = await reviewer.process(record, 'ABCDE');
    assert.equal(res.ok, true);
    const p = transport.calls[0];
    assert.equal(p.model, 'claude-sonnet-5-5');
    assert.equal(p.output_config.format.type, 'json_schema');
    assert.equal(p.output_config.effort, 'medium');
    assert.equal(p.system[0].text, REVIEW_SYSTEM);
    assert.ok(p.messages[0].content.includes('ÇOK-GİZLİ-SÖZ'));
    // 20000 girdi * $2 + 3000 çıktı * $10 = $0.07
    assert.ok(Math.abs(res.cost - 0.07) < 1e-9, `maliyet ${res.cost}`);
    assert.equal(logger.lines.log.length, 1);
    assert.equal(logger.lines.warn.length, 0);
    assert.match(logger.lines.log[0], /^\[ai-review\] oda=ABCDE model=claude-sonnet-5-5 hata=2 \(yüksek=1\) maliyet≈\$0\.0700$/);
    assert.ok(!logger.lines.log[0].includes('Zeynep') && !logger.lines.log[0].includes('GİZLİ'));
    const list = await store.listAiReviews();
    assert.equal(list.length, 1);
    assert.deepEqual([list[0].mistakes, list[0].high, list[0].medium, list[0].low], [2, 1, 0, 1]);
    assert.equal(list[0].record, undefined);
    const full = await store.getAiReview(list[0].id);
    assert.deepEqual(unpackRecord(full.record), record);
    assert.equal(full.review.mistakes[0].bot, 'Bot Cem');
    assert.equal(reviewer.stats().reviews, 1);
  } finally { await store.close(); removeDir(dir); }
});

test('inceleyici: günlük sınır aşılınca çağrı yapılmaz (tek satır uyarı), ertesi gün sıfırlanır', async () => {
  const transport = reviewTransport();
  const logger = quiet();
  let now = NOW;
  const reviewer = new Reviewer({ config: reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k', AI_REVIEW_DAILY_LIMIT: '2' }), transport, logger, now: () => now });
  assert.equal((await reviewer.process(smallRecord(), 'A')).ok, true);
  assert.equal((await reviewer.process(smallRecord(), 'B')).ok, true);
  const third = await reviewer.process(smallRecord(), 'C');
  assert.equal(third.ok, false);
  assert.equal(third.reason, 'daily_limit');
  assert.equal(transport.calls.length, 2);
  assert.equal(logger.lines.warn.length, 1);
  assert.match(logger.lines.warn[0], /^\[ai-review\] oda=C atlandı: daily_limit$/);
  now += 24 * 3600 * 1000;
  assert.equal((await reviewer.process(smallRecord(), 'D')).ok, true);
  assert.equal(transport.calls.length, 3);
});

test('inceleyici: AI_REVIEW=off ya da anahtarsız: hiçbir çağrı, hiçbir hata', async () => {
  const transport = reviewTransport();
  const logger = quiet();
  const off = new Reviewer({ config: reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k', AI_REVIEW: 'off' }), transport, logger });
  assert.equal(off.available(), false);
  assert.equal((await off.process(smallRecord(), 'X')).reason, 'off');
  const nokey = new Reviewer({ config: reviewConfig({}), transport, logger });
  assert.equal((await nokey.process(smallRecord(), 'X')).reason, 'off');
  assert.equal(transport.calls.length, 0);
});

test('inceleyici: hata, ret, bozuk çıktı, kesilme, depo hatası → atmaz, yalnızca tek satır log', async () => {
  const cases = [
    ['http 500', reviewTransport({ fail: 500 })],
    ['ret', reviewTransport({ stop: 'refusal', review: '' })],
    ['max_tokens', reviewTransport({ stop: 'max_tokens', review: '{"summary":' })],
    ['bozuk', reviewTransport({ review: 'bu JSON değil' })],
  ];
  for (const [name, transport] of cases) {
    const logger = quiet();
    const reviewer = new Reviewer({ config: reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k' }), transport, logger });
    const res = await reviewer.process(smallRecord(), 'Z');
    assert.equal(res.ok, false, name);
    assert.equal(logger.lines.warn.length, 1, name);
    assert.equal(logger.lines.log.length, 0, name);
    assert.match(logger.lines.warn[0], /^\[ai-review\] oda=Z atlandı: /, name);
  }
  // Depo hatası: inceleme sayılır ama oyun/süreç etkilenmez.
  const logger = quiet();
  const badStore = { saveAiReview: async () => { throw new Error('disk dolu'); } };
  const reviewer = new Reviewer({ config: reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k' }), transport: reviewTransport(), logger, store: badStore });
  const res = await reviewer.process(smallRecord(), 'Q');
  assert.equal(res.ok, true);
  assert.ok(logger.lines.warn.some((l) => /kaydedilemedi/.test(l)));
  // Zaman aşımı
  const hang = () => new Promise(() => {});
  const slow = new Reviewer({ config: { ...reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k' }), timeoutMs: 30 }, transport: hang, logger: quiet() });
  const r = await slow.process(smallRecord(), 'T');
  assert.equal(r.reason, 'timeout');
});

// ---------- depolar (JSON + pg-mem) ----------

const backends = [
  {
    name: 'JSON dosyası',
    async open(t) {
      const dir = tempDir('vk-revstore-');
      t.after(() => removeDir(dir));
      const store = new JsonStore({ dir });
      await store.init();
      return { store, reopen: async () => { const s = new JsonStore({ dir }); await s.init(); return s; } };
    },
  },
  {
    name: 'PostgreSQL (pg-mem)',
    async open() {
      const db = newDb();
      const { Pool } = db.adapters.createPg();
      const store = new PgStore({ pool: new Pool() });
      await store.init();
      return { store, reopen: async () => { const s = new PgStore({ pool: new Pool() }); await s.init(); return s; } };
    },
  },
];

function row(i, extra = {}) {
  return {
    id: `r${String(i).padStart(4, '0')}`, createdAt: 1_760_000_000_000 + i, room: 'ODA1', model: 'claude-sonnet-5-5', cost: 0.0712,
    summary: `özet ${i}`, mistakes: 2, high: 1, medium: 0, low: 1, record: packRecord(smallRecord({ n: i })), review: FAKE_REVIEW, ...extra,
  };
}

for (const backend of backends) {
  test(`[${backend.name}] incelemeler: kaydet, listele (özet), getir (tam), since, yeniden açılışta kalıcı`, async (t) => {
    const { store, reopen } = await backend.open(t);
    await store.saveAiReview(row(1));
    await store.saveAiReview(row(2));
    await store.saveAiReview(row(3));
    const list = await store.listAiReviews({ limit: 10 });
    assert.deepEqual(list.map((r) => r.id), ['r0003', 'r0002', 'r0001'], 'en yeni önce');
    assert.equal(list[0].summary, 'özet 3');
    assert.equal(list[0].record, undefined);
    assert.equal(list[0].review, undefined);
    assert.equal(list[0].cost, 0.0712);
    assert.equal((await store.listAiReviews({ limit: 2 })).length, 2);
    assert.deepEqual((await store.listAiReviews({ since: 1_760_000_000_002 })).map((r) => r.id), ['r0003']);
    const full = await store.getAiReview('r0002');
    assert.equal(full.review.mistakes.length, 2);
    assert.equal(unpackRecord(full.record).n, 2);
    assert.equal(await store.getAiReview('yok'), null);
    if (backend.name.startsWith('JSON')) {
      await store.close();
      const again = await reopen();
      assert.equal((await again.listAiReviews()).length, 3, 'dosyadan geri yüklendi');
      await again.close();
    }
  });

  test(`[${backend.name}] incelemeler: en çok 200 en yeni inceleme tutulur`, async (t) => {
    const { store } = await backend.open(t);
    for (let i = 1; i <= 203; i++) await store.saveAiReview(row(i));
    const list = await store.listAiReviews({ limit: 500 });
    assert.equal(list.length, 200);
    assert.equal(list[0].id, 'r0203');
    assert.equal(list[199].id, 'r0004');
    assert.equal(await store.getAiReview('r0001'), null);
    assert.ok(await store.getAiReview('r0203'));
  });
}

// ---------- yönetici adresleri ----------

async function adminServer(t, { adminToken, limits } = {}) {
  const dir = tempDir('vk-admin-');
  const store = new JsonStore({ dir });
  await store.init();
  await store.saveAiReview(row(1));
  await store.saveAiReview(row(2));
  const srv = createGameServer({ store, adminToken, limits, authOptions: { scryptOptions: { N: 1024, r: 8, p: 1, keylen: 64, maxmem: 64 * 1024 * 1024 } } });
  const port = await srv.listen(0);
  srv.url = `http://localhost:${port}`;
  t.after(async () => { await srv.close(); removeDir(dir); });
  return srv;
}

const get = (srv, url, token) => fetch(srv.url + url, { headers: token === undefined ? {} : { Authorization: `Bearer ${token}` } });

test('yönetici adresleri: ADMIN_TOKEN yoksa tümüyle kapalı (404), anahtar verilse bile', async (t) => {
  const srv = await adminServer(t, { adminToken: '' });
  for (const token of [undefined, 'x', '']) {
    assert.equal((await get(srv, '/api/admin/ai-reviews', token)).status, 404);
    assert.equal((await get(srv, '/api/admin/ai-reviews/r0001', token)).status, 404);
  }
});

test('yönetici adresleri: anahtarsız 401, yanlış anahtar 401, doğru anahtar veri döner', async (t) => {
  const srv = await adminServer(t, { adminToken: 'gizli-yonetici-anahtari' });
  assert.equal((await get(srv, '/api/admin/ai-reviews')).status, 401);
  assert.equal((await get(srv, '/api/admin/ai-reviews', 'yanlis')).status, 401);
  assert.equal((await get(srv, '/api/admin/ai-reviews', 'gizli-yonetici-anahtari-')).status, 401);
  assert.equal((await get(srv, '/api/admin/ai-reviews/r0001', 'yanlis')).status, 401);
  // Oturum anahtarı gibi başka bir anahtar da yetki vermez.
  const ok = await get(srv, '/api/admin/ai-reviews', 'gizli-yonetici-anahtari');
  assert.equal(ok.status, 200);
  const j = await ok.json();
  assert.equal(j.ok, true);
  assert.deepEqual(j.reviews.map((r) => r.id), ['r0002', 'r0001']);
  assert.deepEqual(Object.keys(j.reviews[0]).sort(), ['cost', 'createdAt', 'date', 'high', 'id', 'logId', 'low', 'medium', 'mistakes', 'model', 'room', 'summary']);
  assert.equal(j.reviews[0].record, undefined);
  assert.equal(ok.headers.get('cache-control'), 'no-store');
  const full = await (await get(srv, '/api/admin/ai-reviews/r0001', 'gizli-yonetici-anahtari')).json();
  assert.equal(full.review.review.mistakes.length, 2);
  assert.equal(full.review.record.n, 1);
  assert.equal((await get(srv, '/api/admin/ai-reviews/yok', 'gizli-yonetici-anahtari')).status, 404);
  const since = await (await get(srv, `/api/admin/ai-reviews?since=${1_760_000_000_001}`, 'gizli-yonetici-anahtari')).json();
  assert.deepEqual(since.reviews.map((r) => r.id), ['r0002']);
});

test('yönetici adresleri: hız sınırı (anahtar denemeleri dahil)', async (t) => {
  const srv = await adminServer(t, { adminToken: 'abc', limits: { admin: { max: 4 } } });
  const statuses = [];
  for (let i = 0; i < 6; i++) statuses.push((await get(srv, '/api/admin/ai-reviews', i < 5 ? 'yanlis' : 'abc')).status);
  assert.deepEqual(statuses, [401, 401, 401, 401, 429, 429]);
  assert.ok(Number((await get(srv, '/api/admin/ai-reviews', 'abc')).headers.get('retry-after')) >= 1);
});

test('sunucu: oyun kaydı kancası incelemeyi arka planda yapar ve depoya yazar; kapalıyken hiçbir şey olmaz', async (t) => {
  const dir = tempDir('vk-srv-');
  const store = new JsonStore({ dir });
  await store.init();
  const logger = quiet();
  const reviewer = new Reviewer({ config: reviewConfig({ AI_REVIEW: 'on', ANTHROPIC_API_KEY: 'k' }), transport: reviewTransport(), logger, store });
  const srv = createGameServer({ store, reviewer, adminToken: 'tk' });
  t.after(async () => { await srv.close(); removeDir(dir); });
  srv.hooks.reviewReady({ id: 'SRV01' }, smallRecord());
  await srv.settle();
  const list = await store.listAiReviews();
  assert.equal(list.length, 1);
  assert.equal(list[0].room, 'SRV01');
  assert.match(logger.lines.log[0], /^\[ai-review\] oda=SRV01 /);

  const dir2 = tempDir('vk-srv2-');
  const store2 = new JsonStore({ dir: dir2 });
  await store2.init();
  const srv2 = createGameServer({ store: store2 });   // reviewer yok
  t.after(async () => { await srv2.close(); removeDir(dir2); });
  assert.doesNotThrow(() => srv2.hooks.reviewReady({ id: 'X' }, smallRecord()));
  assert.equal((await store2.listAiReviews()).length, 0);
});

// ---------- geliştirici betiği ----------

test('biçimlendirme: benzer hatalar gruplanır, en sık olan önce; md okunur', () => {
  const mk = (id, bot, rule, sev, title) => ({
    id, date: '2026-11-17T10:00:00Z', room: 'R', review: { mistakes: [{
      bot, day_or_night: 'gün 1', quote: 'q', what_was_wrong: 'w', rule_violated_or_missing: rule, severity: sev,
      suggested_rule_change: `Fix ${rule}`, suggested_scenario: { title, setup: 's', expected: 'e' },
    }] },
  });
  const reviews = [
    mk('a', 'Bot A', 'Claims section: never ask a claimed Doktor what it saw', 'high', 'doktor-ne-gordu'),
    mk('b', 'Bot B', 'Claims section: never ask the claimed Doktor what he saw tonight', 'medium', 'doktor-gece'),
    mk('c', 'Bot C', 'Voting rules: pile-on votes without evidence', 'low', 'oy-yigilmasi'),
    mk('d', 'Bot D', 'Claims section: asking the claimed Doktor what it saw is invalid', 'high', 'doktor-soru'),
  ];
  const groups = groupMistakes(reviews);
  assert.equal(groups.length, 2);
  assert.equal(groups[0].count, 3);
  assert.equal(groups[0].maxSeverity, 'high');
  const md = draftsMarkdown(reviews);
  assert.ok(md.indexOf('3×') < md.indexOf('1×'));
  assert.match(md, /## 1\./);
  assert.match(reviewMarkdown({ id: 'a', date: 'd', room: 'R', model: 'm', cost: 0.07 }, reviews[0].review), /\[HIGH\] Bot A/);
});

test('scripts/ai-reviews.js: çalışan sunucudan yalnızca yeni incelemeleri çeker, md ve scenario-drafts.md yazar; anahtarı yazdırmaz', async (t) => {
  const srv = await adminServer(t, { adminToken: 'cok-gizli-123' });
  const out = tempDir('vk-revout-');
  t.after(() => removeDir(out));
  const run = () => execFileP(process.execPath, [path.join(__dirname, '..', 'scripts', 'ai-reviews.js'), '--out', out], {
    env: { ...process.env, ADMIN_TOKEN: 'cok-gizli-123', REVIEW_URL: srv.url, ANTHROPIC_API_KEY: '' },
  });
  const first = await run();
  assert.match(first.stdout, /2 yeni inceleme çekildi/);
  assert.ok(!first.stdout.includes('cok-gizli-123') && !first.stderr.includes('cok-gizli-123'));
  const files = fs.readdirSync(out);
  assert.equal(files.filter((f) => f.endsWith('.md') && f !== 'scenario-drafts.md').length, 2);
  assert.ok(files.includes('scenario-drafts.md'));
  assert.ok(fs.readFileSync(path.join(out, 'scenario-drafts.md'), 'utf8').includes('doktor-ne-gordu'));
  const second = await run();
  assert.match(second.stdout, /0 yeni inceleme/);
  const wrong = await execFileP(process.execPath, [path.join(__dirname, '..', 'scripts', 'ai-reviews.js'), '--out', out], {
    env: { ...process.env, ADMIN_TOKEN: 'yanlis', REVIEW_URL: srv.url },
  }).catch((e) => e);
  assert.ok(wrong.code === 1 && /reddedildi/.test(wrong.stderr), 'yanlış anahtar anlaşılır hata verir');
});

test('git: inceleme çıktıları (ai-eval-out/) ve .env.local git dışı', () => {
  const ig = fs.readFileSync(path.join(__dirname, '..', '.gitignore'), 'utf8');
  assert.match(ig, /^ai-eval-out\/$/m);
  assert.match(ig, /^\.env\.\*$/m);
});

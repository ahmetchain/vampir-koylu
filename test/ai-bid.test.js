'use strict';

// Söz isteme (bid): urge alanı, yerel puanlama, kalabalık kapısı ve inisiyatif turlarında en yüksek puanlı botun seçilmesi.
process.env.VK_NO_ENV_LOCAL = '1';
const test = require('node:test');
const assert = require('node:assert/strict');
const { BID, clampUrge, bidScore, pickBids } = require('../lib/ai/bid');
const { TURN_SCHEMA, parseTurn } = require('../lib/ai/schema');
const { SYSTEM_PROMPT } = require('../lib/ai/prompt');
const { mockTransport, makeClient, advance, smartRoom, humanSay } = require('./ai-mock');

const NOW = 1_763_000_000_000;

// ---------- şema ve ayrıştırıcı ----------

test('şema: urge 0-4 tamsayı ve zorunlu; alan adı "think" değil; kural kitabı urge ölçeğini anlatır', () => {
  assert.equal(TURN_SCHEMA.properties.urge.type, 'integer');
  assert.deepEqual(TURN_SCHEMA.properties.urge.enum, [0, 1, 2, 3, 4]);
  assert.ok(TURN_SCHEMA.required.includes('urge'));
  assert.ok(!('think' in TURN_SCHEMA.properties));
  assert.match(SYSTEM_PROMPT, /- urge: integer 0-4/);
  assert.match(SYSTEM_PROMPT, /4 = you were accused or addressed directly/);
});

test('ayrıştırıcı: urge okunur; eksik ya da bozuksa 0, aralık dışı sıkıştırılır', () => {
  const base = { plan: '', say: 'selam', vote: '', target: '', poison: '', memory: '' };
  assert.equal(parseTurn(JSON.stringify({ ...base, urge: 3 })).urge, 3);
  assert.equal(parseTurn(JSON.stringify(base)).urge, 0);
  assert.equal(parseTurn(JSON.stringify({ ...base, urge: 9 })).urge, 4);
  assert.equal(parseTurn(JSON.stringify({ ...base, urge: -2 })).urge, 0);
  assert.equal(parseTurn(JSON.stringify({ ...base, urge: 2.6 })).urge, 3);
  assert.equal(parseTurn(JSON.stringify({ ...base, urge: '2' })).urge, 2);
  assert.equal(parseTurn(JSON.stringify({ ...base, urge: 'çok' })).urge, 0);
  assert.equal(parseTurn(JSON.stringify({ ...base, urge: null })).urge, 0);
  assert.equal(clampUrge(undefined), 0);
});

// ---------- puanlama (saf, deterministik) ----------

const quiet = { urge: 0, saidToday: 0, spokeAgoMs: null };

test('puan tablosu: urge + işaretler; son 60 sn ve çok konuşma düşürür', () => {
  assert.equal(bidScore({ ...quiet, urge: 3 }).score, 3);
  assert.equal(bidScore({ urge: null }).score, BID.defaultUrge);   // hiç sorulmamış bot: varsayılan 1
  assert.equal(bidScore({ ...quiet, mentioned: true }).score, 3);
  assert.equal(bidScore({ ...quiet, called: true }).score, 2);
  assert.equal(bidScore({ ...quiet, targeted: true }).score, 2);
  assert.equal(bidScore({ ...quiet, unshared: true }).score, 2);
  assert.equal(bidScore({ ...quiet, urge: 1, humanMsg: true }).score, 2);
  assert.equal(bidScore({ ...quiet, urge: 1, quiet: true }).score, 2);
  assert.equal(bidScore({ ...quiet, urge: 3, spokeAgoMs: 30000 }).score, 1);
  assert.equal(bidScore({ ...quiet, urge: 3, spokeAgoMs: 61000 }).score, 3);
  assert.equal(bidScore({ ...quiet, urge: 3, saidToday: 2 }).score, 3);
  assert.equal(bidScore({ ...quiet, urge: 3, saidToday: 3 }).score, 2);
  assert.equal(bidScore({ ...quiet, urge: 3, saidToday: 6 }).score, 1);
  // Hepsi bir arada: 4 + 3 + 2 + 2 + 2 - 2 - 1 = 10
  assert.equal(bidScore({ urge: 4, mentioned: true, called: true, targeted: true, unshared: true, spokeAgoMs: 1000, saidToday: 3 }).score, 4 + 3 + 2 + 2 + 2 - 2 - 1);
});

test('pickBids: en yüksek puanlı seçilir, eşit puanda rng belirler, eşik altı kimse yok, ikinci yalnızca acilse', () => {
  const rng = () => 0.5;
  assert.deepEqual(pickBids([{ id: 'a', score: 2 }, { id: 'b', score: 3 }, { id: 'c', score: 1 }], { rng }).map((p) => p.id), ['b']);
  assert.deepEqual(pickBids([{ id: 'a', score: 1 }, { id: 'b', score: 0 }], { rng }), []);
  assert.deepEqual(pickBids([{ id: 'a', score: 5 }, { id: 'b', score: 4 }, { id: 'c', score: 4 }], { rng }).map((p) => p.id).length, 2);
  assert.deepEqual(pickBids([{ id: 'a', score: 5 }, { id: 'b', score: 3 }], { rng }).map((p) => p.id), ['a']);
  assert.deepEqual(pickBids([{ id: 'a', score: 5 }, { id: 'b', score: 5 }], { rng, max: 1 }).length, 1);
  // Eşitlik rng ile kırılır (deterministik).
  const lo = pickBids([{ id: 'a', score: 3 }, { id: 'b', score: 3 }], { rng: (() => { let i = 0; return () => [0.1, 0.9][i++ % 2]; })() });
  assert.equal(lo[0].id, 'a');
});

// ---------- oyun içinde: kalabalık kapısı ve inisiyatif ----------

// Gündüze kadar sahte saatle ilerletir; modele hiç çağrı gitmesin diye istek kancası kullanılır.
async function dayRoom(t, seed) {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const client = makeClient(mockTransport({ seed, latency: 400, spare: 'İrem' }));
  const { room, ev } = smartRoom({ seed, bots: 6, client, settings: { daySec: 120 } });
  room.start('h1');
  for (let i = 0; i < 400 && room.phase !== 'day'; i++) await advance(t, 500);
  assert.equal(room.phase, 'day');
  assert.ok(room.players.get('h1').alive);
  const smart = room.bots.smart;
  const asked = [];
  smart.requestChat = (id, req) => asked.push({ id, ...req });   // modele gitmeden hangi bota tur verildiğini gör
  smart.lastChatAt = 0;
  const bots = smart.aliveBots();
  bots.forEach((b) => smart.spokeDay.add(b.id));   // gece sonucu işareti (unshared) testleri bozmasın
  return { room, ev, smart, asked, bots };
}

const setUrge = (smart, id, value) => smart.urges.set(id, { value, at: smart.now() });

test('kalabalık kapısı: seslenilmeyen insan mesajında en yüksek urge\'lü bot tur alır', async (t) => {
  const { room, ev, smart, asked, bots } = await dayRoom(t, 'bid-gate');
  bots.forEach((b) => setUrge(smart, b.id, 0));
  setUrge(smart, bots[2].id, 3);
  setUrge(smart, bots[1].id, 2);
  humanSay(room, ev, 'h1', 'bence bugün biraz sessiz kalalım');
  assert.deepEqual(asked.map((a) => a.id), [bots[2].id]);   // 3+1 = 4 en yüksek; ikinci (2+1=3) acil değil
  assert.equal(asked[0].kind, 'react');
  assert.equal(smart.bidStats.picked, 1);
  room.destroy();
});

test('kalabalık kapısı: eşik altında kimse konuşmaz (çağrı yok)', async (t) => {
  const { room, ev, smart, asked, bots } = await dayRoom(t, 'bid-quiet');
  bots.forEach((b) => setUrge(smart, b.id, 0));   // herkes "dinliyorum": 0 + 1 (insan mesajı) = 1 < 2
  humanSay(room, ev, 'h1', 'bence bugün biraz sessiz kalalım');
  assert.equal(asked.length, 0);
  assert.equal(smart.bidStats.skipped, 1);
  assert.equal(smart.bidStats.picked, 0);
  room.destroy();
});

test('doğrudan seslenme bid\'e takılmaz: urge 0 olsa da seslenilen bot cevap verir', async (t) => {
  const { room, ev, smart, asked, bots } = await dayRoom(t, 'bid-direct');
  bots.forEach((b) => setUrge(smart, b.id, 0));
  const target = bots[0];
  humanSay(room, ev, 'h1', `${target.name.replace(/^Bot /, '')} sen ne diyorsun?`);
  assert.deepEqual(asked.map((a) => [a.id, a.kind]), [[target.id, 'direct']]);
  assert.equal(smart.bidStats.picked + smart.bidStats.skipped, 0);   // bid hiç çalışmadı
  room.destroy();
});

test('adı geçti ve henüz cevaplamadı: +3 işareti puanı yükseltir; konuşunca işaret söner', async (t) => {
  const { room, smart, bots } = await dayRoom(t, 'bid-signal');
  const b = bots[0];
  setUrge(smart, b.id, 0);
  assert.equal(bidScore(smart.bidInputs(b)).score, 0);
  smart.noteSignals([b], { channel: 'genel', text: `${b.name.replace(/^Bot /, '')} şüpheli duruyor` }, false);
  assert.equal(bidScore(smart.bidInputs(b)).score, 3);
  smart.signals.get(b.id).spokeAt = smart.now() + 1;   // cevap verdi
  assert.ok(bidScore(smart.bidInputs(b)).score < 3);
  room.destroy();
});

test('inisiyatif turu: en yüksek puanlı bot seçilir; herkes urge 0 dese de sessizliği biri bozar (düşük eşik)', async (t) => {
  const { room, smart, asked, bots } = await dayRoom(t, 'bid-init');
  await advance(t, 20000);   // sohbetsiz bekleme: botların satır sınırı (botGapMs) dolsun
  asked.length = 0;
  bots.forEach((b) => setUrge(smart, b.id, 0));
  setUrge(smart, bots[1].id, 2);
  smart.initiative();
  assert.deepEqual(asked.map((a) => [a.id, a.kind]), [[bots[1].id, 'initiative']]);
  asked.length = 0;
  bots.forEach((b) => setUrge(smart, b.id, 0));   // 0 + 1 (sessizlik) = 1 >= quietThreshold (1): yine biri konuşur
  await advance(t, 20000);
  smart.initiative();
  assert.ok(asked.filter((a) => a.kind === 'initiative').length >= 1, 'sessizlik bozulur');
  room.destroy();
});

test('model urge bildirince bellekte saklanır; konuşunca 0\'a iner; oyun sonu logunda söz sayıları var', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const logs = [];
  const client = makeClient(mockTransport({ seed: 'bid-log', latency: 400, decide: ({ out }) => { out.urge = 2; } }));
  const { room, ev } = smartRoom({ seed: 'bid-log', bots: 6, client, settings: { daySec: 40 } });
  room.bots.smart.logger = { log: (m) => logs.push(m), warn() {} };
  room.start('h1');
  let sawUrge = false;
  for (let i = 0; i < 1800 && room.phase !== 'ended'; i++) {
    await advance(t, 1000);
    if (room.phase === 'day' && room.players.get('h1').alive && i % 11 === 0) humanSay(room, ev, 'h1', 'kim şüpheli bence');
    if ([...room.bots.smart.urges.values()].some((u) => u.value === 2)) sawUrge = true;
  }
  assert.equal(room.phase, 'ended');
  assert.ok(sawUrge, 'urge=2 bellekte görüldü');
  const line = logs.find((l) => l.startsWith('[ai] oyun bitti'));
  assert.match(line, / söz: verilen=\d+ atlanan=\d+$/);
  room.destroy();
});

test('yeni gece bilgisi (Kahin/Gözcü notu) henüz paylaşılmadıysa +2; paylaşınca söner', async (t) => {
  const { room, smart, bots } = await dayRoom(t, 'bid-unshared');
  const b = bots[0];
  setUrge(smart, b.id, 0);
  b.notes = [{ text: `🔮 ${room.round}. gece: Ali Vampir ya da Köylü`, ts: 1 }];
  smart.spokeDay.delete(b.id);
  assert.equal(bidScore(smart.bidInputs(b)).score, 2);
  smart.spokeDay.add(b.id);
  assert.equal(bidScore(smart.bidInputs(b)).score, 0);
  room.destroy();
});

'use strict';

// Her oyunun tam geçmişi (lib/ai/gamerec.js, lib/ai/gamelog-format.js, vk_game_logs, /api/admin/game-logs, scripts/game-logs.js).
// Gerçek modele ya da ağa gidilmez: sahte saat, sahte taşıyıcı.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const { newDb } = require('pg-mem');
const { Room, ROLE, EMPTY_ROOM_MS } = require('../game');
const { JsonStore } = require('../lib/store-json');
const { PgStore } = require('../lib/store-pg');
const { createGameServer } = require('../server');
const {
  capLog, reviewView, pack, packAsync, unpack, LOG_MAX_CHARS, MAX_CHARS,
} = require('../lib/ai/gamerec');
const { logMarkdown } = require('../lib/ai/gamelog-format');
const { Reviewer, reviewConfig } = require('../lib/ai/review');
const { mockTransport, makeClient, advance, smartRoom, humanSay } = require('./ai-mock');
const { tempDir, removeDir } = require('./helpers');

const { VAMPIRE: V, DOCTOR: D, SEER: S, VILLAGER: K } = ROLE;
const execFileP = promisify(execFile);
const NOW = 1_763_000_000_000;
const ALL_ROLES = {
  doktor: true, kahin: true, gozcu: true, gardiyan: true, cadi: true, avci: true, muhtar: true,
  soytari: true, deli: true, hirsiz: true, iftiraci: true, temizlikci: true,
};
const FAST = { N: 1024, r: 8, p: 1, keylen: 64, maxmem: 64 * 1024 * 1024 };

const clocked = new WeakSet();
const clock = (t) => {
  if (clocked.has(t)) return;
  clocked.add(t);
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
};
const quiet = () => ({ log() {}, warn() {} });

// ---------- insanlardan oluşan, elle sürülen oyun ----------

function humanGame(t, { count = 6 } = {}) {
  clock(t);
  const logs = [];
  const room = new Room({
    id: 'GECMS', name: 'Geçmiş', settings: { events: 'off' },
    hooks: { update() {}, announce() {}, chat() {}, empty() {}, finished() {}, gameLog(r, rec) { logs.push(rec); } },
  });
  for (let i = 0; i < count; i++) { room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` }); room.connect(`p${i}`, `s${i}`); }
  const say = (id, text) => { const res = room.chat(id, text); if (!res.error) room.observeChat(res.recipients, res.message); return res; };
  return { room, logs, say };
}

function startWith(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
}

// Gece 1: vampir p3'ü seçer, doktor p3'ü korur (saldırı boşa gider), kahin p0'a bakar; gün 1: sohbet, oy, vampir asılır.
function playToEnd(t, { room, say }) {
  startWith(room, [V, D, S, K, K, K]);
  assert.equal(room.selectNight('p0', 'p3'), null);
  assert.equal(room.selectNight('p1', 'p3'), null);
  assert.equal(room.selectNight('p2', 'p0'), null);
  say('p0', 'GIZLI-VAMPIR-FISILTISI');         // gece: vampir kanalı
  say('p3', 'GECE-KOYLU-DENEMESI');            // reddedilir (köylü gece konuşamaz)
  t.mock.timers.tick(3000);
  room.endNight();
  assert.equal(room.phase, 'day');
  say('p4', 'Günaydın, dün gece ne oldu?');
  t.mock.timers.tick(4000);
  say('p2', 'Bence Oyuncu0 vampir.');
  assert.equal(room.vote('p3', 'p1'), null);
  t.mock.timers.tick(1000);
  assert.equal(room.vote('p3', 'p0'), null);   // oyunu değiştirir
  for (const id of ['p1', 'p2', 'p4', 'p5']) assert.equal(room.vote(id, 'p0'), null);
  assert.equal(room.vote('p0', 'p1'), null);
  t.mock.timers.tick(2000);
  room.endDay();
  assert.equal(room.phase, 'ended');
}

test('geçmiş: insanlardan oluşan oyun; her şey sırayla, özel sonuçlar alıcıyla işaretli, kimlik/oturum bilgisi yok', (t) => {
  const g = humanGame(t);
  playToEnd(t, g);
  assert.equal(g.logs.length, 1, 'oyun başına tek kayıt');
  const rec = g.logs[0];
  const json = JSON.stringify(rec);
  assert.equal(rec.v, 2);
  assert.equal(rec.room, 'GECMS');
  assert.equal(rec.end, 'finished');
  assert.equal(rec.winner, 'koylu');
  assert.equal(rec.rounds, 1);
  assert.ok(rec.id && rec.startedAt < rec.endedAt + 'Z' && Date.parse(rec.endedAt) >= Date.parse(rec.startedAt));
  assert.equal(rec.game.humans, 6);
  assert.equal(rec.game.bots, 0);
  assert.equal(rec.players.length, 6);
  assert.ok(rec.players.every((p) => p.kind === 'human' && p.role && p.team));
  const p0 = rec.players.find((p) => p.name === 'Oyuncu0');
  assert.equal(p0.role, 'vampir');
  assert.equal(p0.alive, false);
  assert.match(p0.death.how, /oyla elendi/);
  assert.match(p0.death.ph, /gün 1/);
  // Zaman sırası ve evreler.
  const ev = rec.events;
  assert.ok(ev.every((e, i) => i === 0 || e.t >= ev[i - 1].t), 'olaylar zaman sırasında');
  const phases = ev.filter((e) => e.k === 'phase').map((e) => e.phase);
  assert.deepEqual(phases.filter((p, i) => p !== phases[i - 1]), ['reveal', 'night', 'day', 'ended'].filter((p) => phases.includes(p)));
  assert.ok(phases.includes('night') && phases.includes('day'));
  assert.ok(ev.some((e) => e.k === 'log' && /gece başladı/.test(e.text)) && ev.some((e) => e.k === 'log' && /kazandı/.test(e.text)));
  // Gece seçimleri oyuncu başına ve çözümü.
  const picks = ev.filter((e) => e.k === 'pick');
  assert.deepEqual(picks.map((e) => [e.who, e.role, e.to]), [['Oyuncu0', 'vampir', 'Oyuncu3'], ['Oyuncu1', 'doktor', 'Oyuncu3'], ['Oyuncu2', 'kahin', 'Oyuncu0']]);
  const nres = ev.find((e) => e.k === 'nres');
  assert.ok(nres && nres.saved.some((s) => s.by === 'Oyuncu1' && s.who === 'Oyuncu3'));
  assert.ok(nres.trips.some((x) => x.kind === 'kill' && x.who === 'Oyuncu0' && x.out === 'saved'));
  // Özel sonuçlar: yalnızca alıcı(lar) ile işaretli.
  const priv = ev.filter((e) => e.k === 'priv');
  const seer = priv.find((e) => e.kind === 'seer');
  assert.deepEqual(seer.to, ['Oyuncu2']);
  assert.match(seer.text, /Oyuncu0/);
  assert.deepEqual(priv.find((e) => e.kind === 'saved').to, ['Oyuncu1']);
  assert.deepEqual(priv.find((e) => e.kind === 'attacked').to, ['Oyuncu3']);
  assert.ok(priv.every((e) => Array.isArray(e.to) && e.to.length >= 1));
  assert.ok(!priv.some((e) => e.kind === 'killed'));
  // Sohbet kanallarıyla: gece vampir kanalı, gündüz genel; reddedilen satır kayda girmez.
  const chat = ev.filter((e) => e.k === 'chat');
  assert.deepEqual(chat.map((e) => [e.ch, e.from]), [['vampir', 'Oyuncu0'], ['genel', 'Oyuncu4'], ['genel', 'Oyuncu2']]);
  assert.ok(!json.includes('GECE-KOYLU-DENEMESI'));
  assert.ok(chat.every((e) => !e.bot));
  // Oylar: zamanla değişim ve gün sonu sayımı.
  const votes = ev.filter((e) => e.k === 'vote' && e.who === 'Oyuncu3');
  assert.deepEqual(votes.map((e) => e.to), ['Oyuncu1', 'Oyuncu0']);
  assert.ok(votes[1].t > votes[0].t, 'oy değişikliği zamanla');
  const tally = ev.find((e) => e.k === 'tally');
  assert.equal(tally.counts.Oyuncu0, 5);
  assert.equal(tally.votes.Oyuncu0.length, 5);
  assert.equal(tally.trial, false);
  assert.equal(ev[ev.length - 1].k, 'end');
  // Gizlilik: kimlik, oturum, IP yok.
  assert.ok(!/userId|socketId|u[0-5]"|s[0-5]"|token|password|parola|\bip\b/i.test(json.replace(/oyuncu/gi, '')), 'kimlik/oturum/IP yok');
  assert.ok(!json.includes('"p0"'), 'iç kimlikler yok, isimler var');
  // Boyut ve sıkıştırma.
  assert.ok(json.length < LOG_MAX_CHARS);
  assert.ok(pack(rec).length < json.length / 2, `sıkıştırılmış ${pack(rec).length} < ${json.length / 2}`);
  assert.deepEqual(unpack(pack(rec)), rec);
  g.room.destroy();
});

test('geçmiş: inceleme görünümü insanın özel bilgisini dışarıda bırakır (tam kayıtta var)', (t) => {
  const g = humanGame(t);
  playToEnd(t, g);
  const full = g.logs[0];
  const fullJson = JSON.stringify(full);
  assert.ok(fullJson.includes('GIZLI-VAMPIR-FISILTISI'), 'tam geçmişte insanın gizli kanal satırı var');
  assert.ok(full.events.some((e) => e.k === 'priv' && e.kind === 'seer'));
  const view = reviewView(full);
  const viewJson = JSON.stringify(view);
  assert.equal(view.v, 1);
  assert.ok(!viewJson.includes('GIZLI-VAMPIR-FISILTISI'), 'insanın fısıltısı incelemeye gitmez');
  assert.ok(viewJson.includes('Günaydın, dün gece ne oldu?'), 'herkese açık söz gider');
  assert.deepEqual(Object.keys(view.bots), [], 'insan bot bölümünde yok');
  assert.equal(view.players.length, 6);
  assert.ok(view.votes.length === 1 && view.votes[0].votes.Oyuncu0.length === 5);
  assert.ok(viewJson.length <= MAX_CHARS);
  g.room.destroy();
});

test('geçmiş: herkes çıkınca yarıda kalan oyun (en az bir gece sonra) kaydedilir; gece görülmeden kaydedilmez', (t) => {
  const g = humanGame(t);
  startWith(g.room, [V, D, S, K, K, K]);
  assert.equal(g.room.selectNight('p0', 'p3'), null);
  g.room.endNight();
  g.say('p4', 'Selam');
  assert.equal(g.room.phase, 'day');
  for (let i = 0; i < 6; i++) g.room.disconnect(`p${i}`);
  t.mock.timers.tick(EMPTY_ROOM_MS + 1000);
  assert.ok(g.room.closed, 'oda boş kaldığı için kapandı');
  assert.equal(g.logs.length, 1);
  const rec = g.logs[0];
  assert.equal(rec.end, 'abandoned');
  assert.equal(rec.winner, null);
  assert.ok(rec.rounds >= 1);
  assert.equal(rec.events[rec.events.length - 1].k, 'end');
  assert.ok(rec.events.some((e) => e.k === 'chat' && e.text === 'Selam'));
  assert.ok(rec.players.every((p) => p.role));
  assert.match(logMarkdown(rec), /yarıda kaldı/);

  // Gece hiç görülmeden (rol kartı evresinde) kapanan oda kayıt bırakmaz.
  const g2 = humanGame(t);
  assert.equal(g2.room.start(g2.room.hostId), null);
  assert.equal(g2.room.phase, 'reveal');
  g2.room.close();
  assert.equal(g2.logs.length, 0);
  // Kapanış sonrası ikinci kez kayıt üretilmez; biten oyun için kapanışta yeni kayıt olmaz.
  const g3 = humanGame(t);
  playToEnd(t, g3);
  g3.room.close();
  assert.equal(g3.logs.length, 1);
});

test('geçmiş: kayıt kancası atarsa ya da yoksa oyun etkilenmez; odada ikinci oyun yeni kayıt başlatır', (t) => {
  const g = humanGame(t);
  g.room.hooks.gameLog = () => { throw new Error('kanca patladı'); };
  const orig = console.error;
  const lines = [];
  console.error = (...a) => lines.push(a.join(' '));
  try { playToEnd(t, g); } finally { console.error = orig; }
  assert.equal(g.room.phase, 'ended');
  assert.equal(lines.length, 1, 'tek satır hata');
  // İkinci oyun: lobiye dön, yeniden başlat (kanca yok).
  delete g.room.hooks.gameLog;
  assert.equal(g.room.backToLobby('p0'), null);
  startWith(g.room, [V, D, S, K, K, K]);
  g.room.endNight();
  g.room.endDay();
  assert.ok(g.room.recorder.active);
  g.room.destroy();
});

test('geçmiş: mahkeme günü; savunma sırası, ikinci oylama sayımı ve "mahkemede oyla elendi" kayıtta', (t) => {
  const g = humanGame(t, { count: 8 });
  const { room } = g;
  startWith(room, [V, D, K, K, K, K, K, K]);
  room.forceEvent('mahkeme');
  room.endNight();
  for (const id of ['p1', 'p2', 'p3']) room.vote(id, 'p4');
  for (const id of ['p4', 'p5']) room.vote(id, 'p6');
  room.vote('p6', 'p7');
  room.endDay();
  assert.equal(room.phase, 'trial');
  g.say('p4', 'ben masumum');
  t.mock.timers.tick(15000);
  t.mock.timers.tick(15000);
  for (const id of ['p0', 'p1', 'p2', 'p4']) room.vote(id, 'p6');
  for (const id of ['p3', 'p5', 'p6', 'p7']) room.vote(id, 'p4');
  t.mock.timers.tick(1000);
  room.vote('p7', 'p6');   // oy değiştirme
  t.mock.timers.tick(25000);
  assert.equal(room.players.get('p6').alive, false);
  room.close();
  assert.equal(g.logs.length, 1);
  const rec = g.logs[0];
  const trialPhases = rec.events.filter((e) => e.k === 'phase' && e.phase === 'trial');
  assert.deepEqual(trialPhases.map((e) => [e.step, e.speaker || null]), [['defense', 'Oyuncu4'], ['defense', 'Oyuncu6'], ['vote', null]]);
  assert.deepEqual(trialPhases[0].accused, ['Oyuncu4', 'Oyuncu6']);
  const tallies = rec.events.filter((e) => e.k === 'tally');
  assert.deepEqual(tallies.map((e) => e.trial), [false, true]);
  assert.equal(tallies[1].counts.Oyuncu6, 5);
  assert.match(rec.players.find((p) => p.name === 'Oyuncu6').death.how, /mahkemede oyla elendi/);
  assert.ok(rec.events.some((e) => e.k === 'chat' && e.text === 'ben masumum' && /mahkeme/.test(e.ph)));
  const md = logMarkdown(rec);
  assert.match(md, /### Mahkeme 1 · savunma: Oyuncu4 \(sanıklar: Oyuncu4, Oyuncu6\)/);
  assert.match(md, /Mahkeme oylaması sonucu/);
  assert.match(md, /\*\*Oyuncu7\*\* oyunu değiştirdi/);
});

// ---------- botlu oyunlar ----------

test('geçmiş: akıllı botlu oyun; botların düşünce/hafıza notları, yedeğe düşüşler, insanın söyledikleri ve incelemeye bağlantı', async (t) => {
  clock(t);
  const transport = mockTransport({
    seed: 'gecmis', latency: 700,
    decide: ({ out, task }) => { out.think = `DUSUNCE ${task.slice(0, 12)}`; },
  });
  const client = makeClient(transport);
  const { room, ev } = smartRoom({ seed: 'gecmis', bots: 8, client, settings: { revealRoles: true, daySec: 40, roles: ALL_ROLES } });
  const logs = [];
  const reviews = [];
  room.hooks.gameLog = (r, rec) => logs.push(rec);
  room.hooks.reviewReady = (r, rec, info) => reviews.push({ rec, info });
  room.start('h1');
  let spent = 0;
  let said = false;
  while (room.phase !== 'ended' && spent < 30 * 60 * 1000) {
    await advance(t, 1000);
    spent += 1000;
    if (room.phase === 'day' && !said) { said = true; humanSay(room, ev, 'h1', 'Bot Ayşe, sence kim vampir?'); }
  }
  assert.equal(room.phase, 'ended');
  assert.equal(logs.length, 1);
  const rec = logs[0];
  assert.equal(rec.end, 'finished');
  assert.equal(rec.game.humans, 1);
  assert.equal(rec.game.bots, 8);
  assert.ok(rec.game.smartBots >= 5, 'akıllı bot sayısı');
  assert.equal(rec.game.model, 'claude-haiku-5-5');
  assert.ok(rec.game.botCalls.calls > 0);
  assert.ok(rec.players.some((p) => p.kind === 'smart' && p.calls > 0));
  assert.equal(rec.players.find((p) => p.name === 'İrem').kind, 'human');
  const bot = rec.events.filter((e) => e.k === 'bot');
  assert.ok(bot.length > 10);
  assert.ok(bot.some((e) => e.think && e.think.startsWith('DUSUNCE') && e.memory), 'think ve memory');
  assert.ok(rec.events.some((e) => e.k === 'chat' && e.bot === 1), 'bot sohbeti');
  const humanChat = rec.events.find((e) => e.k === 'chat' && e.from === 'İrem');
  assert.equal(humanChat.text, 'Bot Ayşe, sence kim vampir?');
  assert.ok(!humanChat.bot);
  assert.ok(rec.events.filter((e) => e.k === 'pick').some((e) => /^Bot /.test(e.who)));
  assert.ok(rec.events.some((e) => e.k === 'priv'));
  assert.ok(JSON.stringify(rec).length <= LOG_MAX_CHARS);
  // İnceleme tek kez, küçük görünümle ve geçmiş kimliğiyle bağlı.
  assert.equal(reviews.length, 1);
  assert.equal(reviews[0].info.logId, rec.id);
  assert.equal(reviews[0].rec.v, 1);
  assert.ok(Object.keys(reviews[0].rec.bots).length === 8);
  assert.ok(JSON.stringify(reviews[0].rec).length <= MAX_CHARS);
  // Markdown dökümü.
  const md = logMarkdown(rec, {});
  assert.match(md, /^# Oyun /);
  assert.match(md, /## Oyuncular/);
  assert.match(md, /\(yalnızca .+ gördü\)/);
  assert.match(md, /^ {2}- bot notu · /m);
  assert.match(md, /Bot Ayşe, sence kim vampir\?/);
  room.destroy();
});

test('geçmiş: model hiç cevap vermese de (hepsi hata) oyun geçmişi yazılır; inceleme yok; yedeğe düşüşler kayıtta', async (t) => {
  clock(t);
  const client = makeClient(mockTransport({ seed: 'hata', mode: 'error', latency: 100 }));
  const { room } = smartRoom({ seed: 'hata', bots: 6, client, settings: { daySec: 30 } });
  const logs = [];
  let reviewed = 0;
  room.hooks.gameLog = (r, rec) => logs.push(rec);
  room.hooks.reviewReady = () => { reviewed += 1; };
  room.start('h1');
  let spent = 0;
  while (room.phase !== 'ended' && spent < 30 * 60 * 1000) { await advance(t, 1000); spent += 1000; }
  assert.equal(room.phase, 'ended');
  assert.equal(logs.length, 1);
  assert.equal(reviewed, 0);
  assert.ok(logs[0].events.some((e) => e.k === 'fb'), 'rastgele yedeğe düşüş');
  assert.ok(Object.values(logs[0].game.fallbacks).some((n) => n > 0));
  room.destroy();
});

test('geçmiş: sade botlu (akıllı olmayan) oyun da kaydedilir', async (t) => {
  clock(t);
  const logs = [];
  const room = new Room({
    id: 'SADE', name: 'Sade', settings: { nightSec: 10, daySec: 30, events: 'off' },
    hooks: { update() {}, announce() {}, chat() {}, empty() {}, finished() {}, gameLog(r, rec) { logs.push(rec); } },
  });
  room.addPlayer('h1', 'İrem', { userId: 'u1' });
  for (let i = 0; i < 5; i++) room.addBot('h1');
  room.start('h1');
  let spent = 0;
  while (room.phase !== 'ended' && spent < 30 * 60 * 1000) { await advance(t, 1000); spent += 1000; }
  assert.equal(room.phase, 'ended');
  assert.equal(logs.length, 1);
  assert.deepEqual(logs[0].players.map((p) => p.kind).sort(), ['bot', 'bot', 'bot', 'bot', 'bot', 'human']);
  assert.ok(!logs[0].events.some((e) => e.k === 'bot'));
  room.destroy();
});

// ---------- boyut sınırı ----------

test('boyut sınırı: önce en eski bot notları, sonra sohbet; evreler ve son olay kalır', () => {
  const events = [{ t: 0, ph: 'başlangıç', k: 'phase', phase: 'reveal' }];
  for (let i = 0; i < 1500; i++) events.push({ t: i, ph: 'gün 1', k: 'bot', who: 'Bot A', kind: 'chat', think: `d${i} ${'x'.repeat(400)}`, memory: 'm'.repeat(500) });
  for (let i = 0; i < 400; i++) events.push({ t: 2000 + i, ph: 'gün 1', k: 'chat', ch: 'genel', from: 'Ayşe', text: `satır-${i} ${'y'.repeat(100)}` });
  events.push({ t: 3000, ph: 'oyun sonu', k: 'end', winner: 'koylu' });
  const rec = capLog({ v: 2, players: [], events }, 200000);
  assert.ok(JSON.stringify(rec).length <= 200000);
  assert.ok(rec.truncated.bot > 0);
  assert.equal(rec.truncated.chat, 0, 'bot notları yetince sohbete dokunulmaz');
  assert.equal(rec.events.filter((e) => e.k === 'chat').length, 400);
  // Bot notları da bitince sohbet kırpılır; en yeni satırlar kalır.
  const chatOnly = [{ t: 0, ph: 'x', k: 'phase', phase: 'day' }];
  for (let i = 0; i < 3000; i++) chatOnly.push({ t: i, ph: 'gün 1', k: 'chat', ch: 'genel', from: 'Ayşe', text: `satır-${i} ${'z'.repeat(150)}` });
  chatOnly.push({ t: 4000, ph: 'oyun sonu', k: 'end' });
  const rec2 = capLog({ v: 2, players: [], events: chatOnly }, 50000);
  assert.ok(JSON.stringify(rec2).length <= 50000);
  assert.ok(rec2.truncated.chat > 0);
  assert.ok(rec2.events.some((e) => e.text && e.text.startsWith('satır-2999')), 'en yeni satır kaldı');
  assert.ok(!rec2.events.some((e) => e.text && e.text.startsWith('satır-0 ')), 'en eski satır atıldı');
  assert.equal(rec2.events[rec2.events.length - 1].k, 'end');
  // Sınır altındaysa dokunulmaz.
  const small = capLog({ v: 2, players: [], events: [{ t: 0, k: 'phase' }] }, 200000);
  assert.equal(small.truncated, undefined);
});

// ---------- depolar ----------

function logRow(i, extra = {}) {
  return {
    id: `g${String(i).padStart(4, '0')}`, createdAt: 1_760_000_000_000 + i, room: 'ODA1', startedAt: 1_760_000_000_000 + i - 60000, endedAt: 1_760_000_000_000 + i,
    end: 'finished', winner: 'koylu', players: 6, humans: 2, bots: 4, smart: 3, rounds: 3, size: 100,
    reviewId: null, record: pack({ v: 2, id: `g${i}`, n: i, events: [] }), ...extra,
  };
}

const backends = [
  {
    name: 'JSON dosyası',
    async open(t, limits) {
      const dir = tempDir('vk-gl-');
      t.after(() => removeDir(dir));
      const store = new JsonStore({ dir, gameLogLimits: limits });
      await store.init();
      return { store, dir, reopen: async () => { const s = new JsonStore({ dir, gameLogLimits: limits }); await s.init(); return s; } };
    },
  },
  {
    name: 'PostgreSQL (pg-mem)',
    async open(t, limits) {
      const db = newDb();
      const { Pool } = db.adapters.createPg();
      const store = new PgStore({ pool: new Pool(), gameLogLimits: limits });
      await store.init();
      return { store, reopen: async () => store };
    },
  },
];

for (const backend of backends) {
  test(`[${backend.name}] oyun geçmişi: kaydet, listele (özet), getir (tam), since, incelemeye bağla`, async (t) => {
    const { store, reopen } = await backend.open(t);
    await store.saveGameLog(logRow(1));
    await store.saveGameLog(logRow(2));
    await store.saveGameLog(logRow(3));
    const list = await store.listGameLogs({ limit: 10 });
    assert.deepEqual(list.map((r) => r.id), ['g0003', 'g0002', 'g0001'], 'en yeni önce');
    assert.equal(list[0].record, undefined);
    assert.deepEqual([list[0].players, list[0].humans, list[0].bots, list[0].smart, list[0].rounds, list[0].winner], [6, 2, 4, 3, 3, 'koylu']);
    assert.equal(list[0].reviewId, null);
    assert.equal((await store.listGameLogs({ limit: 2 })).length, 2);
    assert.deepEqual((await store.listGameLogs({ since: 1_760_000_000_002 })).map((r) => r.id), ['g0003']);
    const full = await store.getGameLog('g0002');
    assert.equal(unpack(full.record).n, 2);
    assert.equal(await store.getGameLog('yok'), null);
    assert.equal(await store.linkGameLogReview('g0002', 'inc-9'), true);
    assert.equal(await store.linkGameLogReview('yok', 'x'), false);
    assert.equal((await store.getGameLog('g0002')).reviewId, 'inc-9');
    assert.equal((await store.listGameLogs()).find((r) => r.id === 'g0002').reviewId, 'inc-9');
    if (backend.name.startsWith('JSON')) {
      await store.close();
      const again = await reopen();
      assert.equal((await again.listGameLogs()).length, 3, 'dosyadan geri yüklendi');
      assert.equal((await again.getGameLog('g0002')).reviewId, 'inc-9');
      await again.close();
    }
  });

  test(`[${backend.name}] oyun geçmişi saklama: en yeni N oyun`, async (t) => {
    const { store } = await backend.open(t, { max: 5 });
    for (let i = 1; i <= 8; i++) await store.saveGameLog(logRow(i));
    const list = await store.listGameLogs({ limit: 500 });
    assert.deepEqual(list.map((r) => r.id), ['g0008', 'g0007', 'g0006', 'g0005', 'g0004']);
    assert.equal(await store.getGameLog('g0001'), null);
  });

  test(`[${backend.name}] oyun geçmişi saklama: toplam boyut sınırı (en eskiler önce silinir, en yeni her zaman kalır)`, async (t) => {
    const { store } = await backend.open(t, { max: 500, bytes: 250 });
    for (let i = 1; i <= 5; i++) await store.saveGameLog(logRow(i));
    assert.deepEqual((await store.listGameLogs()).map((r) => r.id), ['g0005', 'g0004']);
    await store.saveGameLog(logRow(6, { size: 900 }));   // tek başına sınırı aşsa da en yenisi saklanır
    assert.deepEqual((await store.listGameLogs()).map((r) => r.id), ['g0006']);
  });
}

test('PostgreSQL: eski inceleme tablosuna game_log_id eklenir ve oyun geçmişi tablosu açılışta kurulur; inceleme logId taşır', async () => {
  const db = newDb();
  const { Pool } = db.adapters.createPg();
  const pool = new Pool();
  // Canlıdaki eski şema: game_log_id yok, vk_game_logs yok.
  await pool.query('CREATE TABLE vk_users (id TEXT PRIMARY KEY, username TEXT NOT NULL, username_key TEXT NOT NULL UNIQUE, pass_hash TEXT NOT NULL, created_at BIGINT NOT NULL, look_color INTEGER NOT NULL DEFAULT 0, look_hat INTEGER NOT NULL DEFAULT 0, look_skin INTEGER NOT NULL DEFAULT 0, games INTEGER NOT NULL DEFAULT 0, wins INTEGER NOT NULL DEFAULT 0, koylu_games INTEGER NOT NULL DEFAULT 0, koylu_wins INTEGER NOT NULL DEFAULT 0, vampir_games INTEGER NOT NULL DEFAULT 0, vampir_wins INTEGER NOT NULL DEFAULT 0, soytari_games INTEGER NOT NULL DEFAULT 0, soytari_wins INTEGER NOT NULL DEFAULT 0)');
  await pool.query('CREATE TABLE vk_sessions (token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES vk_users(id) ON DELETE CASCADE, expires_at BIGINT NOT NULL)');
  await pool.query('CREATE TABLE vk_ai_reviews (id TEXT PRIMARY KEY, created_at BIGINT NOT NULL, room TEXT NOT NULL, model TEXT NOT NULL, cost DOUBLE PRECISION NOT NULL DEFAULT 0, summary TEXT NOT NULL, mistakes INTEGER NOT NULL DEFAULT 0, high INTEGER NOT NULL DEFAULT 0, medium INTEGER NOT NULL DEFAULT 0, low INTEGER NOT NULL DEFAULT 0, record TEXT NOT NULL, review TEXT NOT NULL)');
  await pool.query("INSERT INTO vk_ai_reviews (id, created_at, room, model, summary, record, review) VALUES ('eski', 1, 'R', 'm', 's', 'r', '{\"mistakes\":[]}')");
  const store = new PgStore({ pool });
  await store.init();
  await store.init();   // ikinci açılış zararsız
  assert.equal((await store.getAiReview('eski')).logId, null, 'eski inceleme okunur');
  await store.saveAiReview({ id: 'yeni', createdAt: 2, room: 'R', logId: 'g1', model: 'm', cost: 0.1, summary: 's', mistakes: 0, high: 0, medium: 0, low: 0, record: 'r', review: { mistakes: [] } });
  assert.equal((await store.getAiReview('yeni')).logId, 'g1');
  assert.equal((await store.listAiReviews()).find((r) => r.id === 'yeni').logId, 'g1');
  await store.saveGameLog(logRow(1));
  assert.equal((await store.listGameLogs()).length, 1);
});

// ---------- sunucu kancası ve yönetici adresleri ----------

async function gameServer(t, { adminToken = 'gizli-yonetici', limits, store: given, reviewer = null, gameLogs = true } = {}) {
  const dir = tempDir('vk-glsrv-');
  const store = given || new JsonStore({ dir });
  if (!given) await store.init();
  const srv = createGameServer({ store, adminToken, limits, reviewer, gameLogs, authOptions: { scryptOptions: FAST } });
  const port = await srv.listen(0);
  srv.url = `http://localhost:${port}`;
  srv.dir = dir;
  t.after(async () => { await srv.close(); removeDir(dir); });
  return srv;
}

const get = (srv, url, token) => fetch(srv.url + url, { headers: token === undefined ? {} : { Authorization: `Bearer ${token}` } });

// Gerçek bir oyunun kaydı (insan oyunu); sunucu kancasından geçirilir.
function recordedGame(t) {
  const g = humanGame(t);
  playToEnd(t, g);
  const rec = g.logs[0];
  g.room.destroy();
  t.mock.timers.reset();
  return rec;
}

test('sunucu: gameLog kancası geçmişi sıkıştırıp depoya yazar, tek satır log (sayılar, isim yok); kapalıyken yazmaz; depo hatası oyunu bozmaz', async (t) => {
  const rec = recordedGame(t);
  const srv = await gameServer(t);
  const lines = [];
  const orig = console.log;
  console.log = (...a) => lines.push(a.join(' '));
  try {
    srv.hooks.gameLog({ id: 'GECMS' }, rec);
    await srv.settle();
  } finally { console.log = orig; }
  assert.equal(lines.length, 1);
  assert.match(lines[0], /^\[game-log\] oda=GECMS oyun=\S+ finished oyuncu=6 tur=1 olay=\d+ boyut=[\d.]+KB$/);
  assert.ok(!/Oyuncu\d|Günaydın/.test(lines[0]));
  const list = await srv.store.listGameLogs();
  assert.equal(list.length, 1);
  assert.equal(list[0].id, rec.id);
  assert.deepEqual([list[0].players, list[0].humans, list[0].bots, list[0].rounds, list[0].end], [6, 6, 0, 1, 'finished']);
  assert.deepEqual(unpack((await srv.store.getGameLog(rec.id)).record), rec);

  const off = await gameServer(t, { gameLogs: false });
  off.hooks.gameLog({ id: 'X' }, rec);
  await off.settle();
  assert.equal((await off.store.listGameLogs()).length, 0);

  const bad = await gameServer(t, { store: { kind: 'x', init() {}, close() {}, saveGameLog: async () => { throw new Error('disk dolu'); } } });
  const errs = [];
  const origErr = console.error;
  console.error = (...a) => errs.push(a.join(' '));
  try {
    assert.doesNotThrow(() => bad.hooks.gameLog({ id: 'BAD' }, rec));
    await bad.settle();
  } finally { console.error = origErr; }
  assert.equal(errs.length, 1);
  assert.match(errs[0], /Oyun geçmişi kaydedilemedi \(BAD\): disk dolu/);
});

test('sunucu: inceleme bitince oyun geçmişine bağlanır (geçmiş yazımı beklenir)', async (t) => {
  const rec = recordedGame(t);
  const transport = () => Promise.resolve({
    stop_reason: 'end_turn', usage: { input_tokens: 1000, output_tokens: 500 },
    content: [{ type: 'text', text: JSON.stringify({ summary: 'iyi', mistakes: [], good_moves: [] }) }],
  });
  const dir = tempDir('vk-glrev-');
  const store = new JsonStore({ dir });
  await store.init();
  const reviewer = new Reviewer({ config: reviewConfig({ ANTHROPIC_API_KEY: 'k' }), transport, logger: quiet(), store });
  const srv = await gameServer(t, { store, reviewer });
  t.after(() => removeDir(dir));
  const origLog = console.log;
  console.log = () => {};
  try {
    srv.hooks.gameLog({ id: 'GECMS' }, rec);
    srv.hooks.reviewReady({ id: 'GECMS' }, reviewView(rec), { logId: rec.id });
    await srv.settle();
  } finally { console.log = origLog; }
  const reviews = await store.listAiReviews();
  assert.equal(reviews.length, 1);
  assert.equal(reviews[0].logId, rec.id, 'inceleme geçmişe bağlı');
  const row = (await store.listGameLogs())[0];
  assert.equal(row.reviewId, reviews[0].id, 'geçmiş incelemeye bağlı');
});

test('yönetici adresleri (oyun geçmişi): ADMIN_TOKEN yoksa 404; anahtarsız/yanlış 401; doğru anahtarla liste ve açılmış kayıt; hız sınırı ortak', async (t) => {
  const rec = recordedGame(t);
  const none = await gameServer(t, { adminToken: '' });
  for (const token of [undefined, 'x']) {
    assert.equal((await get(none, '/api/admin/game-logs', token)).status, 404);
    assert.equal((await get(none, '/api/admin/game-logs/abc', token)).status, 404);
  }
  const srv = await gameServer(t, { adminToken: 'gizli-yonetici' });
  const orig = console.log;
  console.log = () => {};
  try { srv.hooks.gameLog({ id: 'GECMS' }, rec); await srv.settle(); } finally { console.log = orig; }
  assert.equal((await get(srv, '/api/admin/game-logs')).status, 401);
  assert.equal((await get(srv, '/api/admin/game-logs', 'yanlis')).status, 401);
  assert.equal((await get(srv, `/api/admin/game-logs/${rec.id}`, 'yanlis')).status, 401);
  const ok = await get(srv, '/api/admin/game-logs', 'gizli-yonetici');
  assert.equal(ok.status, 200);
  assert.equal(ok.headers.get('cache-control'), 'no-store');
  const j = await ok.json();
  assert.equal(j.logs.length, 1);
  const m = j.logs[0];
  assert.deepEqual(Object.keys(m).sort(), ['bots', 'createdAt', 'date', 'days', 'end', 'endedAt', 'hasReview', 'humans', 'id', 'players', 'reviewId', 'room', 'size', 'smartBots', 'startedAt', 'winner']);
  assert.deepEqual([m.id, m.room, m.players, m.humans, m.bots, m.days, m.winner, m.hasReview], [rec.id, 'GECMS', 6, 6, 0, 1, 'koylu', false]);
  assert.equal(m.record, undefined);
  const full = await (await get(srv, `/api/admin/game-logs/${rec.id}`, 'gizli-yonetici')).json();
  assert.equal(full.ok, true);
  assert.deepEqual(full.log.record, rec, 'sıkıştırması çözülmüş tam kayıt');
  assert.equal((await get(srv, '/api/admin/game-logs/yok', 'gizli-yonetici')).status, 404);
  assert.equal((await get(srv, `/api/admin/game-logs?since=${Date.now() + 100000}`, 'gizli-yonetici').then((r) => r.json())).logs.length, 0);
  // Yanlış anahtar denemeleri inceleme adresleriyle aynı hız sınırına takılır.
  const lim = await gameServer(t, { adminToken: 'abc', limits: { admin: { max: 3 } } });
  const statuses = [];
  for (let i = 0; i < 5; i++) statuses.push((await get(lim, i % 2 ? '/api/admin/ai-reviews' : '/api/admin/game-logs', 'yanlis')).status);
  assert.deepEqual(statuses, [401, 401, 401, 429, 429]);
});

// ---------- geliştirici betiği ----------

test('scripts/game-logs.js: sunucudan yalnızca yeni geçmişleri çeker, json + okunur md yazar; anahtarı yazdırmaz', async (t) => {
  const rec = recordedGame(t);
  const srv = await gameServer(t, { adminToken: 'cok-gizli-456' });
  const orig = console.log;
  console.log = () => {};
  try { srv.hooks.gameLog({ id: 'GECMS' }, rec); await srv.settle(); } finally { console.log = orig; }
  const out = tempDir('vk-glout-');
  t.after(() => removeDir(out));
  const script = path.join(__dirname, '..', 'scripts', 'game-logs.js');
  const run = (env = {}) => execFileP(process.execPath, [script, '--out', out], {
    env: { ...process.env, ADMIN_TOKEN: 'cok-gizli-456', REVIEW_URL: srv.url, ANTHROPIC_API_KEY: '', VK_NO_ENV_LOCAL: '1', ...env },
  });
  const first = await run();
  assert.match(first.stdout, /1 yeni oyun geçmişi çekildi/);
  assert.ok(!first.stdout.includes('cok-gizli-456') && !first.stderr.includes('cok-gizli-456'));
  const files = fs.readdirSync(out);
  const md = files.find((f) => f.endsWith('.md'));
  assert.match(md, /^\d{4}-\d{2}-\d{2}-GECMS-.+\.md$/);
  assert.ok(fs.existsSync(path.join(out, 'json', `${rec.id}.json`)));
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(out, 'json', `${rec.id}.json`), 'utf8')).record, rec);
  const text = fs.readFileSync(path.join(out, md), 'utf8');
  assert.match(text, /^# Oyun /);
  assert.match(text, /## Oyuncular/);
  assert.match(text, /Köylüler kazandı/);
  assert.match(text, /\(yalnızca Oyuncu2 gördü\) Kahin sonucu/);
  assert.match(text, /\[vampir kanalı, yalnızca vampir takımı gördü\]/);
  assert.match(text, /Oyuncu3\*\* oyunu değiştirdi: Oyuncu1 → Oyuncu0/);
  assert.match(text, /Gün oylaması sonucu/);
  assert.ok(!text.includes('cok-gizli-456'));
  const second = await run();
  assert.match(second.stdout, /0 yeni oyun geçmişi/);
  // Yanlış anahtar anlaşılır hata verir; --analyze anahtarsız çalışmaz.
  const wrong = await run({ ADMIN_TOKEN: 'yanlis' }).catch((e) => e);
  assert.ok(wrong.code === 1 && /reddedildi/.test(wrong.stderr));
  const noKey = await execFileP(process.execPath, [script, '--out', out, '--analyze', rec.id], {
    env: { ...process.env, ADMIN_TOKEN: 'cok-gizli-456', REVIEW_URL: srv.url, ANTHROPIC_API_KEY: '', VK_NO_ENV_LOCAL: '1' },
  }).catch((e) => e);
  assert.ok(noKey.code === 1 && /ANTHROPIC_API_KEY/.test(noKey.stderr), noKey.stderr);
});

test('scripts/game-logs.js --analyze: Türkçe çözümleme istemi, maliyet yazılır, analysis-<id>.md üretilir; ağ hatasında yeniden dener', async (t) => {
  const rec = recordedGame(t);
  const { analyzeLog, runAnalysis, parseArgs, analysisFile } = require('../scripts/game-logs');
  const md = logMarkdown(rec, {});
  const calls = [];
  const transport = (params) => {
    calls.push(params);
    return Promise.resolve({
      stop_reason: 'end_turn', content: [{ type: 'text', text: '## Ne oldu\nKöylüler kazandı.' }],
      usage: { input_tokens: 40000, output_tokens: 3000, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 },
    });
  };
  const res = await analyzeLog(rec, md, { ANTHROPIC_API_KEY: 'k' }, { transport });
  assert.equal(res.model, 'claude-sonnet-5-5');
  assert.ok(Math.abs(res.cost - (40000 * 2 + 3000 * 10) / 1e6) < 1e-9, `maliyet ${res.cost}`);
  assert.equal(calls[0].model, 'claude-sonnet-5-5');
  assert.ok(calls[0].messages[0].content.includes('Günaydın, dün gece ne oldu?'));
  assert.match(calls[0].system[0].text, /in TURKISH/);
  assert.match(calls[0].system[0].text, /## İyileştirme önerileri/);
  assert.match(calls[0].system[0].text, /<rule_book>/);
  // Dosya + maliyet satırı.
  const out = tempDir('vk-glan-');
  t.after(() => removeDir(out));
  const args = parseArgs(['--out', out, '--analyze', rec.id, 'b2']);
  assert.deepEqual(args.ids, [rec.id, 'b2']);
  const lines = [];
  const orig = console.log;
  console.log = (...a) => lines.push(a.join(' '));
  try { await runAnalysis(args, { ANTHROPIC_API_KEY: 'k' }, [{ id: rec.id, record: rec, md }], { transport }); } finally { console.log = orig; }
  assert.ok(lines.some((l) => /Maliyet ≈ \$0\.1100/.test(l)), lines.join('\n'));
  const text = fs.readFileSync(analysisFile(out, rec.id), 'utf8');
  assert.match(text, /^# Oyun .+ çözümlemesi/);
  assert.match(text, /maliyet ≈ \$0\.1100/);
  assert.match(text, /Köylüler kazandı\./);
  // Geçici ağ hatası: yeniden dener, sonunda başarır.
  let n = 0;
  class Net extends Error {}   // SDK'nın APIConnectionError sınıfı gibi sınıflandırılır
  const flaky = (params) => {
    n += 1;
    if (n < 3) return Promise.reject(new Net('SELF_SIGNED_CERT_IN_CHAIN'));
    return transport(params);
  };
  flaky.errors = { APIConnectionError: Net };
  const again = await analyzeLog(rec, md, { ANTHROPIC_API_KEY: 'k' }, { transport: flaky });
  assert.equal(again.ok, true);
  assert.equal(n, 3);
});

test('biçimlendirme: boş/eksik kayıtlarda bile okunur markdown', () => {
  const md = logMarkdown({ id: 'x', room: 'R', startedAt: 'a', endedAt: 'b', durationSec: 5, end: 'finished', winner: 'vampir', rounds: 1, settings: {}, game: { players: 1, humans: 1, bots: 0 }, players: [], events: [{ t: 3, ph: 'gece 1', k: 'phase', phase: 'night' }, { t: 4, ph: 'gece 1', k: 'nres', trips: [], dies: [], saved: [] }] });
  assert.match(md, /Vampirler kazandı/);
  assert.match(md, /## Gece 1/);
  assert.match(md, /bu gece kimse bir şey yapmadı/);
});

// ---------- gizlilik notu ve git ----------

test('gizlilik: lobi notu oyun sohbetinin saklandığını söyler; geçmiş çıktıları git dışı', () => {
  const room = fs.readFileSync(path.join(__dirname, '..', 'public', 'ui', 'room.js'), 'utf8');
  assert.match(room, /oyun içi sohbet mesajları ve oyun geçmişi/i);
  assert.match(room, /şifre|parola/i);
  const ig = fs.readFileSync(path.join(__dirname, '..', '.gitignore'), 'utf8');
  assert.match(ig, /^ai-eval-out\/$/m);
});

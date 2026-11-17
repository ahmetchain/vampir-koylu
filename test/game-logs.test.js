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

async function gameServer(t, { adminToken = 'gizli-yonetici', limits, store: given, reviewer = null, analyzer = null, gameLogs = true } = {}) {
  const dir = tempDir('vk-glsrv-');
  const store = given || new JsonStore({ dir });
  if (!given) await store.init();
  const srv = createGameServer({ store, adminToken, limits, reviewer, analyzer, gameLogs, authOptions: { scryptOptions: FAST } });
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
  assert.deepEqual(Object.keys(m).sort(), ['analysisCost', 'analyzed', 'analyzedAt', 'bots', 'createdAt', 'date', 'days', 'end', 'endedAt', 'hasReview', 'humans', 'id', 'players', 'reviewId', 'room', 'size', 'smartBots', 'startedAt', 'winner']);
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
  const noKey = await execFileP(process.execPath, [script, '--out', out, '--local-model', '--analyze', rec.id], {
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

// ---------- sunucuda çözümleme (lib/ai/analyze.js, POST /api/admin/game-logs/:id/analyze) ----------

const { Analyzer, analyzeConfig, createAnalyzer } = require('../lib/ai/analyze');

const USAGE = { input_tokens: 40000, output_tokens: 3000, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };   // ≈ $0.11
const ANALYSIS_TEXT = '## Ne oldu\nKöylüler kazandı.';

// Sahte taşıyıcı: gate verilirse cevap ona kadar bekler; fail/stop/text ile hata, ret, boş cevap sahnelenir.
function analyzeTransport({ gate = null, fail = null, text = ANALYSIS_TEXT, stop = 'end_turn' } = {}) {
  const calls = [];
  const transport = (params) => {
    calls.push(params);
    if (fail) return Promise.reject(fail);
    const ok = () => ({ stop_reason: stop, content: [{ type: 'text', text }], usage: USAGE });
    return gate ? gate.then(ok) : Promise.resolve(ok());
  };
  transport.calls = calls;
  return transport;
}

function testAnalyzer(transport, env = {}, extra = {}) {
  const lines = { log: [], warn: [] };
  const logger = { log: (m) => lines.log.push(m), warn: (m) => lines.warn.push(m) };
  const analyzer = new Analyzer({ config: analyzeConfig({ ANTHROPIC_API_KEY: 'k', ...env }), transport, logger, sleep: () => Promise.resolve(), ...extra });
  analyzer.lines = lines;
  return analyzer;
}

const post = (srv, url, token, body) => fetch(srv.url + url, {
  method: 'POST', headers: { ...(token === undefined ? {} : { Authorization: `Bearer ${token}` }), 'Content-Type': 'application/json' }, body: JSON.stringify(body || {}),
});

// rec: aynı testte birden çok sunucu için önceden kaydedilmiş oyun (sahte saat bir testte bir kez kurulur).
async function storedLog(t, opts = {}, rec = recordedGame(t)) {
  const srv = await gameServer(t, opts);
  const orig = console.log;
  console.log = () => {};
  try { srv.hooks.gameLog({ id: 'GECMS' }, rec); await srv.settle(); } finally { console.log = orig; }
  return { rec, srv };
}

const J = async (p) => (await p).json();

for (const backend of backends) {
  test(`[${backend.name}] çözümleme: kaydet, getir (metin), listede yalnızca özet, üzerine yaz, olmayan oyun false`, async (t) => {
    const { store, reopen } = await backend.open(t);
    await store.saveGameLog(logRow(1));
    await store.saveGameLog(logRow(2));
    assert.equal((await store.getGameLog('g0001')).analysis, null);
    assert.equal((await store.listGameLogs())[0].analyzedAt, null);
    assert.equal(await store.saveGameLogAnalysis('g0001', { text: 'ilk metin', cost: 0.11, model: 'claude-sonnet-5-5', analyzedAt: 1_760_000_100_000 }), true);
    assert.equal(await store.saveGameLogAnalysis('yok', { text: 'x' }), false);
    const full = await store.getGameLog('g0001');
    assert.deepEqual([full.analysis, full.analysisCost, full.analysisModel, full.analyzedAt], ['ilk metin', 0.11, 'claude-sonnet-5-5', 1_760_000_100_000]);
    const list = await store.listGameLogs();
    const row = list.find((r) => r.id === 'g0001');
    assert.deepEqual([row.analyzedAt, row.analysisCost, row.analysis], [1_760_000_100_000, 0.11, undefined], 'listede metin yok');
    assert.equal(list.find((r) => r.id === 'g0002').analyzedAt, null);
    await store.saveGameLogAnalysis('g0001', { text: 'ikinci metin', cost: 0.2, model: 'm', analyzedAt: 5 });
    assert.equal((await store.getGameLog('g0001')).analysis, 'ikinci metin');
    assert.equal(unpack((await store.getGameLog('g0001')).record).n, 1, 'kayıt bozulmadı');
    if (backend.name.startsWith('JSON')) {
      await store.close();
      const again = await reopen();
      assert.equal((await again.getGameLog('g0001')).analysis, 'ikinci metin', 'dosyadan geri yüklendi');
      await again.close();
    }
  });
}

const OLD_LOGS_TABLE = 'CREATE TABLE vk_game_logs (id TEXT PRIMARY KEY, created_at BIGINT NOT NULL, room TEXT NOT NULL, started_at BIGINT NOT NULL, ended_at BIGINT NOT NULL, end_kind TEXT NOT NULL, winner TEXT NOT NULL DEFAULT \'\', players INTEGER NOT NULL DEFAULT 0, humans INTEGER NOT NULL DEFAULT 0, bots INTEGER NOT NULL DEFAULT 0, smart INTEGER NOT NULL DEFAULT 0, rounds INTEGER NOT NULL DEFAULT 0, size INTEGER NOT NULL DEFAULT 0, review_id TEXT, record TEXT NOT NULL)';

test('PostgreSQL: eski oyun geçmişi tablosuna çözümleme sütunları eklenir; eski satır okunur; ikinci açılış zararsız; eklenemezse geçmiş etkilenmez', async () => {
  const pool = new (newDb().adapters.createPg().Pool)();
  // Canlıdaki şema: vk_game_logs var ama çözümleme sütunları yok.
  await pool.query(OLD_LOGS_TABLE);
  await pool.query("INSERT INTO vk_game_logs (id, created_at, room, started_at, ended_at, end_kind, record) VALUES ('eski', 1, 'R', 1, 2, 'finished', 'rec')");
  const store = new PgStore({ pool });
  await store.init();
  await store.init();
  const old = await store.getGameLog('eski');
  assert.equal(old.analysis, null);
  assert.equal(old.analyzedAt, null);
  assert.equal((await store.listGameLogs())[0].analyzedAt, null);
  assert.equal(await store.saveGameLogAnalysis('eski', { text: 'metin', cost: 0.05, model: 'm', analyzedAt: 9 }), true);
  assert.equal((await store.getGameLog('eski')).analysis, 'metin');
  await store.saveGameLog(logRow(1));
  assert.equal((await store.listGameLogs()).length, 2);

  // ALTER başarısız olursa: açılış sürer, geçmiş okunur/yazılır, çözümleme saklanmaz (false).
  const p2 = new (newDb().adapters.createPg().Pool)();
  await p2.query(OLD_LOGS_TABLE);
  const realQuery = p2.query.bind(p2);
  p2.query = (sql, ...a) => (/ALTER TABLE vk_game_logs/.test(sql) ? Promise.reject(new Error('izin yok')) : realQuery(sql, ...a));
  const store2 = new PgStore({ pool: p2 });
  const orig = console.error;
  console.error = () => {};
  try { await store2.init(); } finally { console.error = orig; }
  await store2.saveGameLog(logRow(1));
  assert.equal((await store2.listGameLogs()).length, 1);
  assert.equal((await store2.getGameLog('g0001')).analysis, null);
  assert.equal(await store2.saveGameLogAnalysis('g0001', { text: 'x' }), false);
});

test('çözümleme uç noktası: yetki, 202 + ilerleme sorgusu, kayıt, önbellek (ücretsiz), force, günlük sınır, tek log satırı, /healthz', async (t) => {
  let release;
  const gate = new Promise((r) => { release = r; });
  const transport = analyzeTransport({ gate });
  const analyzer = testAnalyzer(transport, { AI_ANALYZE_DAILY_LIMIT: '2' });
  const { rec, srv } = await storedLog(t, { analyzer });
  const A = `/api/admin/game-logs/${rec.id}/analyze`;
  const S = `/api/admin/game-logs/${rec.id}/analysis`;
  // Yetki: anahtarsız/yanlış 401; geçmiş yoksa 404; çağrı yapılmadı.
  assert.equal((await post(srv, A, undefined)).status, 401);
  assert.equal((await post(srv, A, 'yanlis')).status, 401);
  assert.equal((await get(srv, S, 'yanlis')).status, 401);
  assert.equal((await post(srv, '/api/admin/game-logs/yok/analyze', 'gizli-yonetici')).status, 404);
  assert.equal(transport.calls.length, 0);
  // Başlat: 202; çalışırken tekrar başlatmak ikinci çağrı yapmaz; durum her yerde "running".
  const first = await post(srv, A, 'gizli-yonetici');
  assert.equal(first.status, 202);
  assert.deepEqual(await first.json(), { ok: true, status: 'running', alreadyRunning: false });
  const again = await post(srv, A, 'gizli-yonetici');
  assert.equal(again.status, 202);
  assert.equal((await again.json()).alreadyRunning, true);
  assert.equal((await J(get(srv, S, 'gizli-yonetici'))).analysis.status, 'running');
  assert.equal((await J(get(srv, `/api/admin/game-logs/${rec.id}`, 'gizli-yonetici'))).log.analysis.status, 'running');
  assert.equal((await J(get(srv, '/healthz'))).aiAnalyze.running, 1);
  release();
  await srv.settle();
  assert.equal(transport.calls.length, 1);
  assert.equal(transport.calls[0].model, 'claude-sonnet-5-5');
  assert.match(transport.calls[0].system[0].text, /in TURKISH/);
  assert.ok(transport.calls[0].messages[0].content.includes('Günaydın, dün gece ne oldu?'), 'döküm modele gitti');
  // Bitti: ayrı sorgu, tam kayıt ve liste.
  const done = (await J(get(srv, S, 'gizli-yonetici'))).analysis;
  assert.equal(done.status, 'done');
  assert.equal(done.text, ANALYSIS_TEXT);
  assert.ok(Math.abs(done.cost - 0.11) < 1e-9);
  assert.equal(done.model, 'claude-sonnet-5-5');
  const full = (await J(get(srv, `/api/admin/game-logs/${rec.id}`, 'gizli-yonetici'))).log;
  assert.equal(full.analysis.text, ANALYSIS_TEXT);
  assert.deepEqual(full.record, rec);
  const meta = (await J(get(srv, '/api/admin/game-logs', 'gizli-yonetici'))).logs[0];
  assert.equal(meta.analyzed, true);
  assert.ok(Math.abs(meta.analysisCost - 0.11) < 1e-9);
  assert.match(meta.analyzedAt, /^\d{4}-/);
  assert.equal(meta.analysis, undefined, 'listede metin yok');
  // Tek log satırı, yalnızca sayılar (içerik, isim, çıktı yok).
  assert.equal(analyzer.lines.log.length, 1);
  assert.match(analyzer.lines.log[0], /^\[ai-analyze\] oyun=\S+ model=claude-sonnet-5-5 girdi=40000 çıktı=3000 maliyet≈\$0\.1100 süre=\d+sn$/);
  assert.ok(!analyzer.lines.log[0].includes('Oyuncu') && !analyzer.lines.log[0].includes('Köylüler'));
  assert.equal(analyzer.lines.warn.length, 0);
  // Önbellek: ikinci istek model çağırmaz, günlük sayacı artmaz.
  const cached = await post(srv, A, 'gizli-yonetici');
  assert.equal(cached.status, 200);
  const cj = await cached.json();
  assert.deepEqual([cj.status, cj.cached, cj.analysis.status, cj.analysis.text], ['done', true, 'done', undefined]);
  assert.equal(transport.calls.length, 1);
  assert.equal(analyzer.stats().today, 1);
  // force: yeniden üretir (ikinci hak); sonra günlük sınır (2) dolar.
  assert.equal((await post(srv, `${A}?force=1`, 'gizli-yonetici')).status, 202);
  await srv.settle();
  assert.equal(transport.calls.length, 2);
  const limited = await post(srv, A, 'gizli-yonetici', { force: true });
  assert.equal(limited.status, 429);
  assert.equal((await limited.json()).code, 'daily_limit');
  assert.equal(transport.calls.length, 2);
  // /healthz: yalnızca toplu sayılar.
  const hz = (await J(get(srv, '/healthz'))).aiAnalyze;
  assert.deepEqual([hz.enabled, hz.model, hz.today, hz.dailyLimit, hz.running, hz.analyses, hz.failures], [true, 'claude-sonnet-5-5', 2, 2, 0, 2, 0]);
  assert.ok(Math.abs(hz.costUsd - 0.22) < 1e-9);
  assert.ok(!JSON.stringify(hz).includes('Köylüler'));
});

test('çözümleme uç noktası: kapalıyken (anahtar yok / AI_ANALYZE=off / analyzer yok) 503; ADMIN_TOKEN yoksa 404', async (t) => {
  const noKey = testAnalyzer(null, {}, { config: analyzeConfig({}) });
  const off = testAnalyzer(analyzeTransport(), { AI_ANALYZE: 'off' });
  const rec0 = recordedGame(t);
  const a = await storedLog(t, { analyzer: noKey }, rec0);
  const url = (r) => `/api/admin/game-logs/${r.id}/analyze`;
  let res = await post(a.srv, url(a.rec), 'gizli-yonetici');
  assert.equal(res.status, 503);
  let j = await res.json();
  assert.equal(j.code, 'analyze_disabled');
  assert.match(j.error, /ANTHROPIC_API_KEY/);
  assert.equal((await J(get(a.srv, '/healthz'))).aiAnalyze.enabled, false);
  const b = await storedLog(t, { analyzer: off }, rec0);
  j = await J(post(b.srv, url(b.rec), 'gizli-yonetici'));
  assert.match(j.error, /AI_ANALYZE=off/);
  const c = await storedLog(t, { analyzer: null }, rec0);
  res = await post(c.srv, url(c.rec), 'gizli-yonetici');
  assert.equal(res.status, 503);
  assert.equal((await J(get(c.srv, '/healthz'))).aiAnalyze, undefined);
  const d = await gameServer(t, { adminToken: '', analyzer: noKey });
  assert.equal((await post(d, '/api/admin/game-logs/x/analyze', 'gizli-yonetici')).status, 404);
  assert.equal((await get(d, '/api/admin/game-logs/x/analysis', 'gizli-yonetici')).status, 404);
});

test('çözümleme: model hatası, ret, boş cevap sunucuyu çökertmez; durum "failed", sayaç ve tek uyarı satırı; sonra yeniden denenebilir', async (t) => {
  const auth = Object.assign(new Error('401'), { status: 401 });
  const cases = [
    ['auth', analyzeTransport({ fail: auth })],
    ['refusal', analyzeTransport({ stop: 'refusal' })],
    ['empty', analyzeTransport({ text: '   ' })],
  ];
  const rec0 = recordedGame(t);
  for (const [reason, transport] of cases) {
    const analyzer = testAnalyzer(transport);
    const { rec, srv } = await storedLog(t, { analyzer }, rec0);
    const res = await post(srv, `/api/admin/game-logs/${rec.id}/analyze`, 'gizli-yonetici');
    assert.equal(res.status, 202, reason);
    await srv.settle();
    const st = (await J(get(srv, `/api/admin/game-logs/${rec.id}/analysis`, 'gizli-yonetici'))).analysis;
    assert.equal(st.status, 'failed', reason);
    assert.equal(st.reason, reason);
    assert.equal((await J(get(srv, `/api/admin/game-logs/${rec.id}`, 'gizli-yonetici'))).log.analysis.status, 'failed');
    assert.equal((await get(srv, '/healthz')).status, 200, 'sunucu ayakta');
    assert.equal(analyzer.lines.warn.length, 1, reason);
    assert.match(analyzer.lines.warn[0], /^\[ai-analyze\] oyun=\S+ atlandı: \S+ girdi=\d+ çıktı=\d+ maliyet≈\$[\d.]+ süre=\d+sn$/);
    assert.equal(analyzer.stats().failures, 1);
    assert.equal((await srv.store.getGameLog(rec.id)).analysis, null);
  }
  // Ret edilen çağrının maliyeti sayılır; başarısızdan sonra yeniden denenir (yeni iş).
  const flaky = testAnalyzer(analyzeTransport({ stop: 'refusal' }));
  const { rec, srv } = await storedLog(t, { analyzer: flaky }, rec0);
  await post(srv, `/api/admin/game-logs/${rec.id}/analyze`, 'gizli-yonetici');
  await srv.settle();
  assert.ok(flaky.stats().costUsd > 0.1);
  flaky.transport = analyzeTransport();
  assert.equal((await post(srv, `/api/admin/game-logs/${rec.id}/analyze`, 'gizli-yonetici')).status, 202);
  await srv.settle();
  assert.equal((await J(get(srv, `/api/admin/game-logs/${rec.id}/analysis`, 'gizli-yonetici'))).analysis.status, 'done');
});

test('çözümleme: geçici ağ hatası yeniden denenir; depo yazamazsa "store" hatası; kaydı olmayan iş "none" görünür', async (t) => {
  let n = 0;
  class Net extends Error {}
  const inner = analyzeTransport();
  const flaky = (params) => { n += 1; return n < 3 ? Promise.reject(new Net('SELF_SIGNED_CERT_IN_CHAIN')) : inner(params); };
  flaky.errors = { APIConnectionError: Net };
  const analyzer = testAnalyzer(flaky);
  const rec0 = recordedGame(t);
  const { rec, srv } = await storedLog(t, { analyzer }, rec0);
  await post(srv, `/api/admin/game-logs/${rec.id}/analyze`, 'gizli-yonetici');
  await srv.settle();
  assert.equal(n, 3);
  assert.equal((await J(get(srv, `/api/admin/game-logs/${rec.id}/analysis`, 'gizli-yonetici'))).analysis.status, 'done');
  assert.equal(analyzer.lines.warn.length, 2, 'her yeniden deneme tek uyarı satırı');
  // Depo yazamıyor.
  const b = await storedLog(t, { analyzer: testAnalyzer(analyzeTransport()) }, rec0);
  b.srv.store.saveGameLogAnalysis = () => Promise.reject(new Error('disk dolu'));
  await post(b.srv, `/api/admin/game-logs/${b.rec.id}/analyze`, 'gizli-yonetici');
  await b.srv.settle();
  const st = (await J(get(b.srv, `/api/admin/game-logs/${b.rec.id}/analysis`, 'gizli-yonetici'))).analysis;
  assert.deepEqual([st.status, st.reason], ['failed', 'store']);
  // Bellekte iş yok, kayıt da yok: none.
  const fresh = await storedLog(t, { analyzer: testAnalyzer(analyzeTransport()) }, rec0);
  assert.equal((await J(get(fresh.srv, `/api/admin/game-logs/${fresh.rec.id}/analysis`, 'gizli-yonetici'))).analysis.status, 'none');
  assert.equal((await J(get(fresh.srv, `/api/admin/game-logs/${fresh.rec.id}`, 'gizli-yonetici'))).log.analysis, null);
});

test('yapılandırma: AI_ANALYZE_MODEL / AI_ANALYZE_DAILY_LIMIT varsayılanları ve sınırları; createAnalyzer anahtarsız da kapalı bir Analyzer döner', () => {
  const d = analyzeConfig({ ANTHROPIC_API_KEY: 'k' });
  assert.deepEqual([d.model, d.dailyLimit, d.effort, d.enabled], ['claude-sonnet-5-5', 20, 'medium', true]);
  const c = analyzeConfig({ ANTHROPIC_API_KEY: '"k"', AI_ANALYZE_MODEL: 'claude-opus-5-5', AI_ANALYZE_DAILY_LIMIT: '3', AI_ANALYZE_EFFORT: 'high' });
  assert.deepEqual([c.model, c.dailyLimit, c.effort, c.prices.input], ['claude-opus-5-5', 3, 'high', 4]);
  assert.equal(analyzeConfig({ ANTHROPIC_API_KEY: 'k', AI_ANALYZE: 'off' }).enabled, false);
  assert.equal(analyzeConfig({ ANTHROPIC_API_KEY: 'k', AI_BOTS: 'off' }).reason, 'off');
  assert.equal(analyzeConfig({}).reason, 'no_key');
  assert.equal(analyzeConfig({ ANTHROPIC_API_KEY: 'k', AI_ANALYZE_DAILY_LIMIT: 'x' }).dailyLimit, 20);
  const a = createAnalyzer({});
  assert.equal(a.available(), false);
  assert.equal(a.start('x', {}, null).state, 'off');
});

test('scripts/game-logs.js --analyze (sunucuda): sahte taşıyıcıyla çözümletir, bekler, analysis-<id>.md yazar, maliyeti basar; önbellek ve --force; --local-model eski yol', async (t) => {
  const gate = new Promise((r) => setTimeout(r, 400));   // iş birkaç yoklama boyunca "çalışıyor" görünsün
  const transport = analyzeTransport({ gate });
  const analyzer = testAnalyzer(transport);
  const { rec, srv } = await storedLog(t, { adminToken: 'cok-gizli-789', analyzer });
  const out = tempDir('vk-glrem-');
  t.after(() => removeDir(out));
  const script = path.join(__dirname, '..', 'scripts', 'game-logs.js');
  const run = (args, env = {}) => execFileP(process.execPath, [script, '--out', out, ...args], {
    env: { ...process.env, ADMIN_TOKEN: 'cok-gizli-789', REVIEW_URL: srv.url, ANTHROPIC_API_KEY: '', VK_NO_ENV_LOCAL: '1', VK_ANALYZE_POLL_MS: '60', ...env },
  });
  // Bu bilgisayarda anahtar yok; çözümleme yine de çalışır (sunucuda).
  const r1 = await run(['--analyze']);
  assert.match(r1.stdout, /Sunucuda çözümleniyor: /);
  assert.match(r1.stdout, /Maliyet ≈ \$0\.1100 \(model claude-sonnet-5-5\)/);
  assert.ok(!r1.stdout.includes('cok-gizli-789') && !r1.stderr.includes('cok-gizli-789'));
  const text = fs.readFileSync(path.join(out, `analysis-${rec.id}.md`), 'utf8');
  assert.match(text, /^# Oyun .+ çözümlemesi/);
  assert.match(text, /Model: claude-sonnet-5-5 · maliyet ≈ \$0\.1100 · sunucuda çözümlendi/);
  assert.match(text, /Köylüler kazandı\./);
  assert.ok(fs.readdirSync(out).some((f) => /^\d{4}-\d{2}-\d{2}-GECMS-.+\.md$/.test(f)), 'okunur döküm de yazıldı');
  assert.equal(transport.calls.length, 1);
  assert.equal((await srv.store.getGameLog(rec.id)).analysis, ANALYSIS_TEXT);
  // Aynı oyun: önbellek, yeni maliyet yok, model çağrılmaz.
  const r2 = await run(['--analyze', rec.id]);
  assert.match(r2.stdout, /Önceden çözümlenmiş/);
  assert.match(r2.stdout, /yeni maliyet yok/);
  assert.equal(transport.calls.length, 1);
  // --latest N ve --force.
  const r3 = await run(['--analyze', '--latest', '1', '--force']);
  assert.match(r3.stdout, /Sunucuda çözümleniyor/);
  assert.equal(transport.calls.length, 2);
  // Yanlış anahtar ve olmayan oyun anlaşılır hata verir.
  const bad = await run(['--analyze', rec.id], { ADMIN_TOKEN: 'yanlis' }).catch((e) => e);
  assert.ok(bad.code === 1 && /reddedildi/.test(bad.stderr));
  const missing = await run(['--analyze', 'olmayan-id']).catch((e) => e);
  assert.ok(missing.code === 1 && /bulunamadı/.test(missing.stderr), missing.stderr);
  // Sunucuda anahtar yoksa sunucunun mesajı.
  analyzer.config = analyzeConfig({});
  analyzer.transport = null;
  const off = await run(['--analyze', '--force', rec.id]).catch((e) => e);
  assert.ok(off.code === 1 && /ANTHROPIC_API_KEY/.test(off.stderr) && /Sunucuda/.test(off.stderr), off.stderr);
  // --local-model: eski yol, anahtar bu bilgisayarda aranır.
  const local = await run(['--analyze', '--local-model', rec.id]).catch((e) => e);
  assert.ok(local.code === 1 && /--local-model için/.test(local.stderr), local.stderr);
});

test('scripts/game-logs.js remoteAnalyze: sunucu işi kaybederse ya da başarısız olursa anlaşılır hata; hız sınırında bekler', async (t) => {
  const { remoteAnalyze } = require('../scripts/game-logs');
  const replies = [];
  const http = require('http');
  const server = http.createServer((req, res) => {
    const r = replies.shift() || { status: 200, body: { ok: true, analysis: { status: 'none' } } };
    res.writeHead(r.status, { 'Content-Type': 'application/json', ...(r.headers || {}) });
    res.end(JSON.stringify(r.body));
  });
  await new Promise((r) => server.listen(0, r));
  t.after(() => new Promise((r) => server.close(r)));
  const env = { ADMIN_TOKEN: 'a', REVIEW_URL: `http://localhost:${server.address().port}` };
  const waits = [];
  const wait = (ms) => { waits.push(ms); return Promise.resolve(); };
  const opts = { wait, say: () => {}, pollMs: 1 };
  // Başarısız iş.
  replies.push({ status: 202, body: { ok: true, status: 'running' } }, { status: 200, body: { ok: true, analysis: { status: 'failed', reason: 'auth' } } });
  await assert.rejects(remoteAnalyze({}, env, 'x', opts), /anahtarı reddedildi/);
  // Kaybolan iş (üst üste none).
  replies.push({ status: 202, body: { ok: true, status: 'running' } });
  await assert.rejects(remoteAnalyze({}, env, 'x', opts), /kayboldu/);
  // 429 (Retry-After) beklenir, sonra devam edilir; günlük sınır beklenmez.
  replies.push({ status: 429, headers: { 'Retry-After': '7' }, body: { ok: false, code: 'rate_limited', error: 'x' } },
    { status: 202, body: { ok: true, status: 'running' } },
    { status: 200, body: { ok: true, analysis: { status: 'done', text: 'T', cost: 0.1, model: 'm' } } });
  waits.length = 0;
  const done = await remoteAnalyze({}, env, 'x', opts);
  assert.deepEqual([done.text, done.cached], ['T', false]);
  assert.equal(waits[0], 8000);
  replies.push({ status: 429, body: { ok: false, code: 'daily_limit', error: 'Günlük çözümleme sınırına ulaşıldı (20).' } });
  await assert.rejects(remoteAnalyze({}, env, 'x', opts), /Günlük çözümleme sınırı/);
});

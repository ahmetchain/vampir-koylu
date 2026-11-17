'use strict';

// Akıllı botların sohbet temposu (insan gibi okuma/yazma, oda düzeyinde sıra), satır uzunluğu
// ("…" ile kesme yok), istemdeki oyun bilgisi (takım, meslek, Deli) ve açılış logu.
const test = require('node:test');
const assert = require('node:assert/strict');
const { cleanSay, SAY_MAX } = require('../lib/ai/schema');
const { ChatPacer, readMs, typeMs } = require('../lib/ai/speech');
const { SYSTEM_PROMPT, buildUser } = require('../lib/ai/prompt');
const { createAiClient, aiStatusLine } = require('../lib/ai');
const { mockTransport, makeClient, advance, smartRoom, humanSay } = require('./ai-mock');

const NOW = 1_763_000_000_000;

// ---------- satır uzunluğu ----------

test('cleanSay: uzun satır "…" ile kesilmez; sığan tam cümleler, yoksa yan cümleler kalır', () => {
  const two = 'Dün gece Ayşe çok sessizdi, bence ona bakalım. Ama Cem de oyunu son anda değiştirdi, bu da garip. Sen ne diyorsun Ali, kimden şüpheleniyorsun?';
  const out = cleanSay(two);
  assert.ok(out.length <= SAY_MAX && !out.includes('…'), out);
  assert.equal(out, 'Dün gece Ayşe çok sessizdi, bence ona bakalım. Ama Cem de oyunu son anda değiştirdi, bu da garip.');
  // Tek uzun cümle: baştaki yan cümleler kalır, sondaki virgül atılır.
  const one = `Bence en şüpheli kişi Ayşe çünkü dün gece hiç konuşmadı, oyunu da son anda değiştirdi, ${'üstelik herkes ona bakarken konuyu değiştirmeye çalıştı '.repeat(2)}`;
  const o2 = cleanSay(one);
  assert.ok(o2.length <= SAY_MAX && !o2.endsWith('…') && !/[,\s]$/.test(o2), o2);
  assert.ok(one.startsWith(o2));
  // Kısa satır olduğu gibi; modelin kendi "…"su kalır.
  assert.equal(cleanSay('Bir düşüneyim…'), 'Bir düşüneyim…');
  const exact = 'a'.repeat(SAY_MAX);
  assert.equal(cleanSay(exact), exact);
  // Kelime sınırı: kelime ortasından kesilmez, üç nokta eklenmez.
  const words = cleanSay('çok '.repeat(60));
  assert.ok(words.length <= SAY_MAX && !words.endsWith('…') && /çok$/.test(words));
  // Boşluksuz ve noktalamasız aşırı uzun metin: sınırda kesilir, yine üç nokta yok.
  assert.equal(cleanSay('x'.repeat(400)).length, SAY_MAX);
});

// ---------- tempo ----------

test('tempo: okuma ve yazma süresi uzunlukla orantılı, sınırlı (yazma 2,5–10 sn, 90–130 ms/karakter)', () => {
  assert.equal(typeMs('kısa', () => 0), 2500);
  assert.equal(typeMs('x'.repeat(60), () => 0), 60 * 90);
  assert.equal(typeMs('x'.repeat(60), () => 1), 60 * 130);
  assert.equal(typeMs('x'.repeat(300), () => 1), 10000);
  assert.ok(readMs('', () => 0.5) >= 700 && readMs('', () => 0.5) <= 3000);
  assert.ok(readMs('x'.repeat(80), () => 0.5) > readMs('selam', () => 0.5));
  assert.ok(readMs('x'.repeat(1000), () => 1) <= 3000);
});

// Sahte saat: zamanlayıcıları zaman sırasıyla çalıştırır.
function fakeClock(start = NOW) {
  let now = start;
  let timers = [];
  return {
    now: () => now,
    schedule: (ms, fn) => { timers.push({ at: now + Math.max(0, ms), fn }); },
    advance(ms) {
      const end = now + ms;
      for (;;) {
        timers.sort((a, b) => a.at - b.at);
        const t = timers[0];
        if (!t || t.at > end) break;
        timers = timers.slice(1);
        now = t.at;
        t.fn();
      }
      now = end;
    },
  };
}

function pacerWith(clock, rng = () => 0.5) {
  const posted = [];
  const dropped = [];
  const pacer = new ChatPacer({ now: clock.now, rng, schedule: clock.schedule });
  const add = (botId, readyIn, extra = {}) => pacer.enqueue({
    botId, text: `${botId} satırı`, readyAt: clock.now() + readyIn, ...extra,
    post: (it) => posted.push({ botId: it.botId, at: clock.now() - NOW, channel: it.channel }),
    drop: (it, why) => dropped.push({ botId: it.botId, why }),
  });
  return { pacer, posted, dropped, add };
}

test('sohbet sırası: aynı anda hazır satırlar tek tek, aralarında 3–5 sn; kanallar birbirini beklemez', () => {
  const clock = fakeClock();
  let r = 0;
  const { posted, add } = pacerWith(clock, () => [0, 1, 0.3, 0.7][r++ % 4]);
  add('a', 1000, { direct: true });
  add('b', 1000, { direct: true });
  add('c', 1000, { direct: true });
  add('v', 1000, { channel: 'vampir', direct: true });
  clock.advance(30000);
  const genel = posted.filter((p) => p.channel === 'genel');
  assert.deepEqual(genel.map((p) => p.botId), ['a', 'b', 'c']);
  assert.equal(genel[0].at, 1000, 'yazma süresi dolunca hemen');
  for (let i = 1; i < genel.length; i++) {
    const gap = genel[i].at - genel[i - 1].at;
    assert.ok(gap >= 3000 && gap <= 5000, `aralık ${gap}`);
  }
  assert.equal(posted.find((p) => p.channel === 'vampir').at, 1000, 'başka kanal beklemez');
});

test('sohbet sırası: doğrudan cevap öne geçer ve asla atılmaz; konuşma ilerleyince eski tepki atılır', () => {
  const clock = fakeClock();
  const { pacer, posted, dropped, add } = pacerWith(clock);
  add('x', 0, { direct: true });                // aralığı başlatır (4 sn)
  add('react1', 500, { seq: pacer.seq('genel') });
  add('direct1', 1500, { direct: true });
  clock.advance(4100);                           // ikisi de hazır: doğrudan önce
  assert.deepEqual(posted.map((p) => p.botId), ['x', 'direct1']);
  pacer.noteHuman('genel');                      // yeni insan mesajı: react1 bayatladı
  clock.advance(10000);
  assert.deepEqual(posted.map((p) => p.botId), ['x', 'direct1']);
  assert.deepEqual(dropped, [{ botId: 'react1', why: 'moved_on' }]);
  // İnsan mesajından önceki bir seslenmeye verilen doğrudan cevap yine çıkar.
  add('direct2', 100, { direct: true, seq: 0 });
  clock.advance(6000);
  assert.equal(posted.at(-1).botId, 'direct2');
});

test('sohbet sırası: 15 sn bekleyen kendiliğinden satır atılır; sırada en fazla iki kendiliğinden satır', () => {
  const clock = fakeClock();
  const { posted, dropped, add } = pacerWith(clock);
  for (let i = 0; i < 6; i++) add(`d${i}`, 0, { direct: true });
  add('r', 0);
  clock.advance(60000);
  assert.deepEqual(posted.map((p) => p.botId), ['d0', 'd1', 'd2', 'd3', 'd4', 'd5']);
  assert.deepEqual(dropped, [{ botId: 'r', why: 'stale' }]);
  const c2 = fakeClock();
  const q = pacerWith(c2);
  q.add('d', 0, { direct: true });
  q.add('r1', 1000);
  q.add('r2', 1000);
  q.add('r3', 1000);
  assert.deepEqual(q.dropped, [{ botId: 'r1', why: 'crowd' }]);
  c2.advance(20000);
  assert.deepEqual(q.posted.map((p) => p.botId), ['d', 'r2', 'r3']);
});

test('sohbet sırası: evre değişince (reset) sıradakiler atılır, eski zamanlayıcı hiçbir şey göndermez', () => {
  const clock = fakeClock();
  const { pacer, posted, dropped, add } = pacerWith(clock);
  add('a', 2000, { direct: true });
  add('b', 2000);
  pacer.reset();
  clock.advance(10000);
  assert.deepEqual(posted, []);
  assert.deepEqual(dropped.map((d) => d.why), ['reset', 'reset']);
});

// ---------- oyun içinde tempo (sahte model, sahte saat) ----------

test('oyun içinde: gündüz bot satırları arasında en az 3 sn; seslenilen bot cevap verir ve yazarken "yazıyor…" görünür', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const client = makeClient(mockTransport({ seed: 'tempo', latency: 1200, spare: 'İrem' }));
  const { room, ev } = smartRoom({ seed: 'tempo', bots: 8, client, settings: { daySec: 120 } });
  room.start('h1');
  for (let i = 0; i < 400 && room.phase !== 'day'; i++) await advance(t, 500);
  assert.equal(room.phase, 'day');
  const dayStart = ev.chats.length;
  const target = [...room.players.values()].find((p) => p.bot && p.alive);
  await advance(t, 5000);
  humanSay(room, ev, 'h1', 'Bence sessiz kalanlar şüpheli, kim ne düşünüyor?');
  await advance(t, 2000);
  humanSay(room, ev, 'h1', `${target.name.replace(/^Bot /, '')} sen ne diyorsun?`);
  let typingSeen = false;
  for (let i = 0; i < 100; i++) {
    await advance(t, 200);
    if (room.viewFor('h1').room.typing.includes(target.id)) typingSeen = true;
  }
  const lines = ev.chats.slice(dayStart).filter((c) => room.players.get(c.message.fromId).bot && c.message.channel === 'genel');
  const times = lines.map((c) => c.message.ts);
  for (let i = 1; i < times.length; i++) assert.ok(times[i] - times[i - 1] >= 3000, `bot satırları arası ${times[i] - times[i - 1]} ms`);
  assert.ok(lines.some((c) => c.message.fromId === target.id), 'seslenilen bot cevap verdi');
  assert.ok(typingSeen, '"yazıyor…" görüldü');
  room.destroy();
});

test('oyun sonu logu: tek satır, yalnızca sayılar (çağrı, token, maliyet, yedek, hata); sohbet ve isim yok', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const logs = [];
  const client = makeClient(mockTransport({ seed: 'log', latency: 400, mode: (() => { let i = 0; return () => (i++ % 9 === 8 ? 'error' : 'ok'); })() }));
  const { room, ev } = smartRoom({ seed: 'log', bots: 6, client, settings: { daySec: 40 } });
  room.bots.smart.logger = { log: (m) => logs.push(m), warn() {} };
  room.start('h1');
  for (let i = 0; i < 1800 && room.phase !== 'ended'; i++) {
    await advance(t, 1000);
    if (room.phase === 'day' && room.players.get('h1').alive && i % 17 === 0) humanSay(room, ev, 'h1', 'gizli sohbet metni');
  }
  assert.equal(room.phase, 'ended');
  const lines = logs.filter((l) => l.startsWith('[ai] oyun bitti'));
  assert.equal(lines.length, 1, logs.join('\n'));
  assert.match(lines[0], /^\[ai\] oyun bitti oda=AKILLI model=claude-haiku-5-5 çağrı=\d+ başarılı=\d+ token: girdi=\d+ önbellek_okuma=\d+ önbellek_yazma=\d+ çıktı=\d+ maliyet≈\$\d+\.\d{4} yedek: .+ hata: .*error=\d+/);
  assert.ok(!lines[0].includes('gizli') && ![...room.players.values()].some((p) => lines[0].includes(p.name)));
  room.destroy();
});

// ---------- istem: takım, meslek, Deli ----------

function fakeView({ me, players, revealRoles = true, distribution = ['vampir', 'doktor', 'kahin', 'gardiyan', 'koylu'], rolePool = null }) {
  return {
    serverNow: NOW,
    me: { notes: [], ...me },
    players,
    room: { phase: 'day', round: 2, deadline: NOW + 60000, settings: { revealRoles }, distribution, rolePool, event: null, trial: null },
    log: [], day: null, night: null,
  };
}

const section = (user, tag) => user.match(new RegExp(`<${tag}>\\n([\\s\\S]*?)\\n</${tag}>`))[1];

test('istem: açıklanan ölünün rolü takımıyla yazılır (köy rolü = masumdu); meslek yalnızca süs', () => {
  const view = fakeView({
    me: { id: 'b1', name: 'Bot Cem', role: 'koylu', alive: true, job: { id: 'saatci', label: 'Saatçi' } },
    distribution: ['vampir', 'iftiraci', 'doktor', 'gardiyan', 'koylu'],
    players: [
      { id: 'b1', name: 'Bot Cem', role: 'koylu', alive: true, left: false, job: { id: 'saatci', label: 'Saatçi' } },
      { id: 'h1', name: 'Ahmet', role: 'gardiyan', alive: false, left: false, job: { id: 'firinci', label: 'Fırıncı' } },
      { id: 'b2', name: 'Bot Ayşe', role: 'vampir', alive: false, left: false, job: null },
      { id: 'b3', name: 'Bot Ali', role: null, alive: false, left: false, job: null },
      { id: 'b4', name: 'Bot Can', role: null, alive: true, left: false, job: { id: 'terzi', label: 'Terzi' } },
    ],
  });
  const user = buildUser({ view, task: { kind: 'open' } });
  const players = section(user, 'players').split('\n');
  const line = (n) => players.find((l) => l.startsWith(`- ${n} `));
  assert.match(line('Ahmet'), /dead · revealed: village team \(was innocent\) · role: Gardiyan$/);
  assert.equal(players[0], '(job = village profession, flavour only: never a role, a claim or evidence)');
  assert.match(line('Ahmet'), /job: Fırıncı \(flavour\)/);
  assert.match(line('Bot Ayşe'), /revealed: evil team \(or a villager framed by the İftiracı\) · role: Vampir$/);
  assert.match(line('Bot Ali'), /role not revealed · role: \?$/);
  assert.match(line('Bot Can'), /job: Terzi \(flavour\) · alive · role: \?$/);
  assert.match(line('Bot Cem (you)'), /your team: village team · role: Köylü$/);
  assert.match(section(user, 'me'), /village job: Saatçi, flavour only, not your role/);
  assert.match(SYSTEM_PROMPT, /jobs .* flavour only: never a role, a claim or evidence/);
  assert.match(SYSTEM_PROMPT, /Lying is not evil/);
  assert.match(SYSTEM_PROMPT, /revealed with a village role WAS innocent/);
});

test('istem: Deli kuralları sistemde; kendini Kahin sanan bot (gerçek ya da Deli) Deli olabileceğini <game> içinde okur', () => {
  assert.match(SYSTEM_PROMPT, /Deli \(village team\): is told and shown a fake role/);
  assert.match(SYSTEM_PROMPT, /one is an honest Deli/);
  const players = [{ id: 'b1', name: 'Bot Cem', role: 'kahin', alive: true, left: false, job: null }];
  const me = { id: 'b1', name: 'Bot Cem', role: 'kahin', alive: true };
  const withDeli = buildUser({ view: fakeView({ me, players, distribution: ['vampir', 'kahin', 'koylu'], rolePool: { pick: 1, from: ['deli', 'doktor'], maybe: [] } }), task: { kind: 'open' } });
  assert.match(section(withDeli, 'game'), /as a Kahin you could be the Deli without knowing/);
  assert.doesNotMatch(section(withDeli, 'me') + section(withDeli, 'players'), /\bDeli\b/);
  const noDeli = buildUser({ view: fakeView({ me, players }), task: { kind: 'open' } });
  assert.doesNotMatch(section(noDeli, 'game'), /could be the Deli/);
});

test('açılış logu: model ve kapalı olma nedeni (anahtar yazılmaz); tırnaklı anahtar da çalışır', () => {
  const ai = createAiClient({ ANTHROPIC_API_KEY: '"sk-test-123"' }, { logger: { warn() {} } });
  assert.ok(ai);
  assert.equal(ai.config.apiKey, 'sk-test-123');
  assert.match(aiStatusLine(ai), /açık \(model claude-haiku-5-5, efor low/);
  assert.ok(!aiStatusLine(ai).includes('sk-'));
  assert.equal(aiStatusLine(null, { ANTHROPIC_API_KEY: 'k', AI_BOTS: 'off' }), 'kapalı (AI_BOTS=off)');
  assert.equal(aiStatusLine(null, {}), 'kapalı (ANTHROPIC_API_KEY yok)');
});

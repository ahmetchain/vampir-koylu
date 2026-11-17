'use strict';

// Akıllı botların istem verileri (zaman çizelgesi, oyuncu listeleri, olgular): gerçek Room üzerinde senaryolarla.
// Kurallar game.js ile birebirdir; burada kodla hesaplanan satırların doğruluğu denetlenir.
const test = require('node:test');
const assert = require('node:assert/strict');
const { Game } = require('../scripts/ai-scenario-kit');
const { mockTransport, makeClient, section, advance, smartRoom, humanSay, mulberry } = require('./ai-mock');
const { rolesInPlay } = require('../lib/ai/facts');
const { SeatRecord } = require('../lib/ai/record');

const NOW = 1_763_000_000_000;
const client = () => makeClient(mockTransport({}));

// 5 kişi: Vampir, Doktor (insan), Kahin, 2 Köylü. Gece 1 Kahin ölür, gün 1 bir Köylü asılır → 3 kişi kalır.
function endgame3(extra = {}) {
  const g = new Game({
    client: client(),
    players: [
      { name: 'Ahmet', role: 'doktor' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
      { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'koylu', bot: true },
    ],
    ...extra,
  });
  g.night([['Deniz', 'Eren'], ['Ahmet', 'Ahmet']]);
  g.talk([['Ahmet', 'Ben doktorum, kendimi korudum'], ['Deniz', 'Ben köylüyüm'], ['Ece', 'Ben de köylüyüm']]);
  for (const v of ['Ahmet', 'Cem', 'Deniz']) g.vote(v, 'Ece');
  g.vote('Ece', 'Deniz');
  g.endDay();
  return g;
}

test('endgame (3 kişi: Vampir, Köylü, Doktor): kalan roller elemeyle kesin, ikinci Köylü iddiası çelişir', () => {
  const g = endgame3();
  g.night([['Deniz', 'Ahmet'], ['Ahmet', 'Ahmet']]);   // Doktor kendini korur: kimse ölmez
  g.talk([['Ahmet', 'Ben doktorum, vampir evime geldi, kurtuldum'], ['Deniz', 'Ben tek köylüyüm']]);
  const user = g.prompt('Cem', { kind: 'direct', trigger: g.lastChat('Cem') });
  const facts = section(user, 'facts');
  assert.match(facts, /Roles still unaccounted for among the 2 other living players: 1 Vampir, 1 Doktor\./);
  assert.match(facts, /Night 1: Eren killed by the vampires; no other vampire attack that night\./);
  assert.match(facts, /Night 2: nobody died\./);
  assert.match(facts, /Why a night can be quiet here: a Doktor protection held/);
  assert.match(facts, /FITS such a night/);
  assert.match(facts, /LAST CHANCE/);
  assert.match(facts, /Kahin \(Eren, Night 1\) is out: no new Kahin results/);
  // Bot Köylü olduğundan kendi rolü sayılmıştır; ikinci "Köylü" iddiası listeye uymaz.
  assert.doesNotMatch(facts, /unaccounted[^\n]*Köylü/);
  g.destroy();
});

test('"vampir evime geldi, kurtuldum" iddiası: vampir ölümü olan gece YANLIŞ, ölümsüz gece uyar', () => {
  const g = endgame3();
  const facts = section(g.prompt('Cem', { kind: 'open' }), 'facts');
  assert.match(facts, /Night 1: Eren killed by the vampires; no other vampire attack that night\./);
  assert.match(facts, /"the vampires came to my house and I survived" is FALSE for any night with a vampire death/);
  g.destroy();
});

test('zaman çizelgesi: sıralı başlıklar, (NOW), olaylar yerinde, ölü konuşmacı etiketli, tetikleyen >> ile; oyuncular yaşayan/dışarıda ayrı', () => {
  const g = endgame3();
  g.night([['Deniz', 'Ahmet'], ['Ahmet', 'Ahmet']]);
  g.say('Ahmet', 'Bu bir test');
  g.say('Deniz', 'Ben tek köylüyüm');
  const user = g.prompt('Cem', { kind: 'direct', trigger: g.lastChat('Cem') });
  const tl = section(user, 'timeline').split('\n');
  const idx = (re) => tl.findIndex((l) => re.test(l));
  const order = [/^== Game start ==/, /^== Night 1 ==/, /^\* Night 1: Eren killed/, /^== Day 1 ==/, /^Ahmet: Ben doktorum/, /^Ece \[OUT · shown Köylü · village team, was innocent\]: Ben de köylüyüm/,
    /^\* Day 1: Ece hanged with 3 votes by Ahmet, Cem, Deniz/, /^== Night 2 ==/, /^== Day 2 == \(NOW\)/, /^Ahmet: Bu bir test/, /^>> Deniz: Ben tek köylüyüm/];
  let last = -1;
  for (const re of order) { const i = idx(re); assert.ok(i > last, `${re} sırada değil (${i} <= ${last})\n${tl.join('\n')}`); last = i; }
  const players = section(user, 'players');
  assert.match(players, /Living \(3\):[\s\S]*OUT of the game \(2\)/);
  assert.match(players, /- Eren · .*OUT: night 1, killed by the vampires · shown Kahin · village team, was innocent/);
  // Eski gün (Gün 1) bugünkü konuşma gibi görünmez: ayrı başlık altında.
  assert.ok(idx(/^== Day 1 ==/) < idx(/^== Day 2 == \(NOW\)/));
  g.destroy();
});

test('eski günler kısaltılır (son satırlar + botun kendi satırları), güncel gün ayrıntılı', () => {
  const g = new Game({
    client: client(),
    players: [
      { name: 'Ahmet', role: 'doktor' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
      { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'koylu', bot: true }, { name: 'Fatma', role: 'koylu' },
    ],
  });
  g.night([['Deniz', 'Eren'], ['Ahmet', 'Ahmet']]);
  g.say('Cem', 'Benim kendi satırım');
  for (let i = 0; i < 30; i++) g.say(i % 2 ? 'Ahmet' : 'Fatma', `eski satır ${i}`);
  for (const v of ['Ahmet', 'Fatma', 'Cem', 'Deniz']) g.vote(v, 'Ece');
  g.endDay();
  g.night([['Deniz', 'Ahmet'], ['Ahmet', 'Ahmet']]);
  g.say('Fatma', 'bugünkü satır');
  const tl = section(g.prompt('Cem', { kind: 'open' }), 'timeline');
  assert.match(tl, /Benim kendi satırım/);
  assert.match(tl, /earlier lines? not shown/);
  assert.ok(!tl.includes('eski satır 0'), 'eski günün ilk satırları atılır');
  assert.ok(tl.includes('eski satır 29'), 'eski günün son satırları kalır');
  assert.ok(tl.includes('bugünkü satır'));
  g.destroy();
});

test('roller gizli oda: ölünün rolü "role hidden until the game ends"; sayılamayan roller açıkça belirsiz', () => {
  const g = endgame3({ settings: { revealRoles: false } });
  const user = g.prompt('Cem', { kind: 'open' });
  assert.match(section(user, 'players'), /Eren · .*OUT: night 1, killed by the vampires · role hidden until the game ends/);
  assert.match(section(user, 'facts'), /2 other living players: 1 Vampir, 1 Doktor, 1 Kahin, 1 Köylü\. This also covers the 2 out players whose role is hidden\./);
  g.destroy();
});

test('Doktor oyundan çıktı: koruma biter, Doktor diyen yaşayan yalan söylüyor (Deli olabilirse "ya da Deli")', () => {
  for (const withDeli of [false, true]) {
    const roles = [
      { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'kahin', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
      { name: 'Eren', role: 'doktor', bot: true }, { name: 'Ece', role: withDeli ? 'deli' : 'koylu', bot: true, fake: 'doktor' }, { name: 'Fatma', role: 'koylu', bot: true },
    ];
    const g = new Game({ client: client(), players: roles });
    g.night([['Deniz', 'Eren'], ['Eren', 'Cem']]);
    const facts = section(g.prompt('Cem', { kind: 'open' }), 'facts');
    assert.match(facts, /Doktor \(Eren, Night 1\) is out: nobody is protected at night any more; a living player claiming Doktor now is lying( or is the Deli)?/);
    assert.equal(/claiming Doktor now is lying or is the Deli/.test(facts), withDeli);
    g.destroy();
  }
});

test('Gözcü iddiası sonradan açıklanan gerçek Gözcü ile çelişir: facts "yalan" der, Deli olabilirse "ya da Deli"', () => {
  const g = new Game({
    client: client(),
    players: [
      { name: 'Ahmet', role: 'gozcu' }, { name: 'Cem', role: 'koylu', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
      { name: 'Eren', role: 'gozcu', bot: true }, { name: 'Ece', role: 'doktor', bot: true }, { name: 'Fatma', role: 'deli', bot: true, fake: 'gozcu' },
    ],
  });
  // Oyuncu listesinde iki Gözcü olamaz: ikincisi Deli'nin sahte rolü; senaryoda Eren gerçek Gözcü (Ahmet iddia eden Köylü gibi).
  g.room.players.get(g.id('Ahmet')).role = 'koylu';
  g.night([['Deniz', 'Ece'], ['Eren', 'Cem']]);
  g.say('Ahmet', 'Ben Gözcüyüm, Cem evine kimse gelmedi');
  g.vote('Cem', 'Eren'); g.vote('Deniz', 'Eren'); g.vote('Fatma', 'Eren');
  g.endDay();
  const facts = section(g.prompt('Cem', { kind: 'open' }), 'facts');
  assert.match(facts, /Gözcü \(Eren, Day 1\) is out: nobody watches houses any more; a living player claiming Gözcü now is lying or is the Deli/);
  const tl = section(g.prompt('Cem', { kind: 'open' }), 'timeline');
  assert.match(tl, /Day 1: Eren hanged with 3 votes by Cem, Deniz, Fatma → shown Gözcü · village team, was innocent/);
  g.destroy();
});

test('kötü takım: iftiraya uğrayan masum "Vampir" görünse de kendi takımı değildir; takım arkadaşları oyun başından', () => {
  const g = new Game({
    client: client(),
    players: [
      { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'vampir', bot: true }, { name: 'Deniz', role: 'iftiraci', bot: true },
      { name: 'Eren', role: 'doktor', bot: true }, { name: 'Ece', role: 'kahin', bot: true }, { name: 'Fatma', role: 'koylu', bot: true }, { name: 'Gül', role: 'koylu', bot: true },
    ],
  });
  g.night([['Cem', 'Eren'], ['Deniz', 'Eren']]);   // Eren hem iftira hem kurban: "Vampir" diye açıklanır
  const user = g.prompt('Cem', { kind: 'open' });
  assert.match(section(user, 'players'), /Eren · .*shown Vampir · but YOU know he was not on your team: a villager framed by the İftiracı/);
  assert.match(section(user, 'me'), /Your evil team-mates: Deniz \(İftiracı\)\./);
  const notEvil = g.prompt('Fatma', { kind: 'open' });
  assert.match(section(notEvil, 'players'), /Eren · .*shown Vampir · a villager framed by the İftiracı \(the vampires never kill a Vampir\), was innocent/);
  assert.doesNotMatch(notEvil, /your team-mate|YOU know/);
  g.destroy();
});

test('kendi gecelerin: Doktor kendini koruduğunu ve "saldırı raporu" yoksa kimsenin saldırıya uğramadığını bilir; başkasının gecesi sızmaz', () => {
  const g = new Game({
    client: client(),
    players: [
      { name: 'Ahmet', role: 'koylu' }, { name: 'Cem', role: 'doktor', bot: true }, { name: 'Deniz', role: 'vampir', bot: true },
      { name: 'Eren', role: 'kahin', bot: true }, { name: 'Ece', role: 'koylu', bot: true },
    ],
  });
  g.night([['Deniz', 'Eren'], ['Cem', 'Ece']]);        // Cem Ece'yi korur, kimse saldırıya uğramadı → rapor yok
  for (const v of ['Ahmet', 'Cem', 'Deniz']) g.vote(v, 'Ece');
  g.endDay();
  g.night([['Deniz', 'Cem'], ['Cem', 'Cem']]);          // Cem kendini korur ve saldırıdan kurtulur
  const mine = section(g.prompt('Cem', { kind: 'open' }), 'facts');
  assert.match(mine, /Night 1 \(as Doktor\): you protected Ece \(walked to that house\)/);
  assert.match(mine, /Night 2 \(as Doktor\): you protected yourself \(stayed home\); report: Bu gece evine saldırı oldu; kendini korudun ve kurtuldun\./);
  assert.doesNotMatch(mine, /report:[^\n]*report:/, 'aynı gecenin iki benzer raporu birleşmez');
  const other = section(g.prompt('Deniz', { kind: 'open' }), 'facts');
  assert.doesNotMatch(other, /protected yourself|as Doktor/);
  g.destroy();
});

// ---------- rolesInPlay (rastgele dağıtım: havuz) ----------

function fakeView(me, players, rule, extra = {}) {
  return {
    serverNow: NOW,
    me: { notes: [], alive: true, ...me },
    players,
    room: { phase: 'day', round: 2, deadline: NOW + 60000, settings: { revealRoles: true }, ...rule, event: null, trial: null },
    log: [], day: null, night: null, ...extra,
  };
}

test('rolesInPlay: kesin roller + havuzdan "N bilinmeyen"; açıklanan rol ve kendi rolün düşülür; yardımcı yeri dolunca öteki aday çıkar', () => {
  const rule = {
    distribution: ['vampir', 'vampir', 'koylu', 'koylu'],
    rolePool: { pick: 4, from: ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi'], maybe: ['iftiraci', 'temizlikci'], helpers: 1, helpersMax: 1 },
  };
  const P = (id, name, role, alive = true) => ({ id, name, role, alive, left: false, job: null });
  const players = [P('me', 'Ben', 'koylu'), ...Array.from({ length: 5 }, (_, i) => P(`l${i}`, `L${i}`, null)), P('d1', 'Ölü', 'iftiraci', false), P('d2', 'Ölü2', 'kahin', false)];
  const view = fakeView({ id: 'me', name: 'Ben', role: 'koylu' }, players, rule);
  const rec = new SeatRecord('me');
  rec.sync(view);
  const r = rolesInPlay(view, rec);
  // 8 oyuncu: ben + 2 ölü + 5 diğer yaşayan.
  assert.match(r.text, /Roles still unaccounted for among the 5 other living players: 2 Vampir, 1 Köylü \+ 2 unknown from: Doktor, Gözcü, Gardiyan, Cadı \(or Köylü\)\./);
  assert.ok(!/Temizlikçi/.test(r.text), 'tek yardımcı yeri İftiracı ile doldu');
  assert.equal(r.off, false);
});

test('rolesInPlay: Deli olabilirken Doktor/Kahin/Gözcü/Gardiyan bilen bot için uyarı; vampire dönen yardımcı "yaklaşık" der', () => {
  const rule = { distribution: ['vampir', 'doktor', 'kahin', 'koylu', 'koylu'], rolePool: { pick: 1, from: ['deli', 'gozcu'], maybe: [], helpers: 0, helpersMax: 0 } };
  const P = (id, name, role, alive = true) => ({ id, name, role, alive, left: false, job: null });
  const view = fakeView({ id: 'me', name: 'Ben', role: 'kahin' }, [P('me', 'Ben', 'kahin'), P('a', 'A', null), P('b', 'B', null), P('c', 'C', null), P('d', 'D', null), P('e', 'E', null)], rule);
  const rec = new SeatRecord('me');
  rec.sync(view);
  const r = rolesInPlay(view, rec);
  assert.match(r.text, /Caveat: you counted yourself as Kahin; if you are the Deli, swap one Deli for one Kahin/);
});

// ---------- oyun ayrımı ve oy zamanlaması (sahte model, sahte saat) ----------

const unhandled = [];
process.on('unhandledRejection', (e) => unhandled.push(e));

test('iki oyun aynı odada: ilk oyunun sohbeti, oyun sonu ve lobi sohbeti ikinci oyunun hiçbir istemine girmez; not da taşınmaz', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const transport = mockTransport({ seed: 'iki-oyun', latency: 500, spare: 'İrem' });
  const { room, ev } = smartRoom({ seed: 'iki-oyun', bots: 6, client: makeClient(transport), settings: { nightSec: 10, daySec: 40 } });
  const smart = room.bots.smart;
  const prompts = [];
  smart.onPrompt = (e) => { if (e.user) prompts.push({ game: smart.gameNo, user: e.user, botId: e.botId }); };
  room.start('h1');
  for (let i = 0; i < 400 && room.phase !== 'day'; i++) await advance(t, 500);
  humanSay(room, ev, 'h1', 'OYUN-BIR-MESAJI kahin kim');
  // Oyun bitene kadar sür.
  for (let i = 0; i < 3000 && room.phase !== 'ended'; i++) await advance(t, 1000);
  assert.equal(room.phase, 'ended');
  humanSay(room, ev, 'h1', 'OYUN-SONU-MESAJI iyi oyundu');
  const firstGame = prompts.length;
  assert.ok(prompts.some((p) => p.user.includes('OYUN-BIR-MESAJI')), 'ilk oyunda mesaj istemde görünür');
  assert.equal(room.backToLobby('h1'), null);
  humanSay(room, ev, 'h1', 'LOBI-MESAJI yeni oyun');
  await advance(t, 3000);
  const firstMemory = new Set(prompts.map((p) => (p.user.match(/<memory>\n([\s\S]*?)\n<\/memory>/) || [])[1]).filter((m) => m && m !== '(empty)'));
  room.start('h1');
  await advance(t, 60000);
  const second = prompts.slice(firstGame);
  assert.ok(second.length > 0, 'ikinci oyunda istem kuruldu');
  for (const p of second) {
    assert.doesNotMatch(p.user, /OYUN-BIR-MESAJI|OYUN-SONU-MESAJI|LOBI-MESAJI/);
  }
  // İlk turdaki not boş başlar (oyundan oyuna taşınmaz).
  const firsts = new Map();
  for (const p of second) if (!firsts.has(p.botId)) firsts.set(p.botId, (p.user.match(/<memory>\n([\s\S]*?)\n<\/memory>/) || [])[1]);
  for (const m of firsts.values()) assert.ok(m === '(empty)' || !firstMemory.has(m), `önceki oyunun notu taşındı: ${m}`);
  assert.equal(unhandled.length, 0);
  room.destroy();
});

test('eski oyundan geç gelen cevap yeni oyunun notunu/kararını etkilemez', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const { room } = smartRoom({ seed: 'gec', bots: 5, client: makeClient(mockTransport({ seed: 'gec', latency: 3000 })), settings: { nightSec: 10, daySec: 40 } });
  const smart = room.bots.smart;
  room.start('h1');
  await advance(t, 500);
  const bot = [...room.players.values()].find((p) => p.bot);
  const pending = smart.ask(bot.id, { kind: 'open' }, Date.now() + 8000);
  smart.resetGame();   // yeni oyun başladı
  await advance(t, 4000);
  const res = await pending;
  assert.equal(res.ok, false);
  assert.equal(smart.memory.has(bot.id), false, 'eski oyunun notu yeni oyuna girmedi');
  room.destroy();
});

test('oy zamanlaması: erken oy turu isteğe bağlı ("EARLY check", gün %30–55), bağlayıcı karar herkes için günün sonuna doğru ("FINAL decision", %78–86); rastgele yedek oy en erken %92', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const DAY = 100;
  const transport = mockTransport({ seed: 'oy-zaman', latency: 600, spare: 'İrem' });
  const { room, ev } = smartRoom({ seed: 'oy-zaman', bots: 6, client: makeClient(transport), settings: { nightSec: 10, daySec: DAY } });
  room.start('h1');
  for (let i = 0; i < 400 && room.phase !== 'day'; i++) await advance(t, 500);
  assert.equal(room.phase, 'day');
  const dayStart = Date.now();
  const seen = [];
  room.bots.smart.onPrompt = (e) => {
    if (!e.user || !room.players.get(e.botId).alive) return;
    const task = section(e.user, 'task');
    seen.push({ at: (Date.now() - dayStart) / (DAY * 1000), bot: e.botId, early: /EARLY check/.test(task), final: /FINAL decision/.test(task) });
  };
  const aliveBots = [...room.players.values()].filter((p) => p.bot && p.alive);
  let randomVoteAt = null;
  const origVote = room.bots.vote.bind(room.bots);
  room.bots.vote = (id) => { if (randomVoteAt === null) randomVoteAt = (Date.now() - dayStart) / (DAY * 1000); return origVote(id); };
  await advance(t, DAY * 1000 * 0.97, 250);
  const early = seen.filter((s) => s.early);
  const fin = seen.filter((s) => s.final);
  assert.ok(early.length > 0 && early.length < aliveBots.length + 1, `erken tur sayısı ${early.length} (isteğe bağlı: herkes almaz)`);
  for (const s of early) assert.ok(s.at >= 0.29 && s.at <= 0.57, `erken tur ${s.at}`);
  assert.equal(new Set(fin.map((s) => s.bot)).size, aliveBots.length, 'her bot bağlayıcı karar turu alır');
  for (const s of fin) assert.ok(s.at >= 0.77 && s.at <= 0.88, `son tur ${s.at}`);
  if (randomVoteAt !== null) assert.ok(randomVoteAt >= 0.91, `rastgele yedek oy ${randomVoteAt}`);
  assert.equal(unhandled.length, 0);
  void ev; void mulberry;
  room.destroy();
});

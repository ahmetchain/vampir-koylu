'use strict';

// Lobi ve oyun sonu muhabbeti (lib/banter.js): şablonlu, modelsiz; sahte saatle, süreç içi odada.
// Ayrıca oda başına bot zekâsı (botModel) ve botlu oyunların istatistiğe yazılması.
const test = require('node:test');
const assert = require('node:assert/strict');
const { Room, ROLE } = require('../game');
const banter = require('../lib/banter');
const { greetingKind, loadPeople, isOwnerName, ALL_LINES, JOIN_GREETINGS } = banter;
const { mockTransport, makeClient, advance, mulberry } = require('./ai-mock');

const NOW = 1_700_000_000_000;
const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
const tick = (t, ms) => { for (let e = 0; e < ms; e += 500) t.mock.timers.tick(500); };

// İnsanlar: [kullanıcı adı, hesabı var mı]. İlki oda sahibi. Sohbetler { phase, from, text } olarak kaydedilir.
function setup({ humans = ['ahmetchain', 'burak'], bots = 0, seed = 'b1', rng = null, people = undefined } = {}) {
  const chats = [];
  const entrances = [];
  const room = new Room({
    id: 'MUHABBET', name: 'Muhabbet', settings: { nightSec: 10, daySec: 60 },
    botRng: mulberry(`bot-${seed}`), eventRng: mulberry(`olay-${seed}`), storySeed: `hikaye-${seed}`,
    banterRng: rng || mulberry(`muhabbet-${seed}`), people,
    hooks: {
      update() {}, announce() {}, empty() {}, finished() {},
      entrance(r, info) { entrances.push({ phase: r.phase, ...info, at: Date.now() }); },
      chat(r, recipients, message) { chats.push({ phase: r.phase, from: message.from, fromId: message.fromId, text: message.text, at: Date.now() }); },
    },
  });
  humans.forEach((name, i) => {
    const guest = typeof name === 'object';
    assert.equal(room.addPlayer(`h${i}`, guest ? name.guest : name, { userId: guest ? null : `u${i}` }), null);
    room.connect(`h${i}`, `s${i}`);
  });
  for (let i = 0; i < bots; i++) assert.ok(room.addBot('h0').id);
  const say = (id, text) => {
    const res = room.chat(id, text);
    assert.equal(res.error, undefined);
    room.observeChat(res.recipients, res.message);
  };
  return { room, chats, say, entrances };
}

const botLines = (chats) => chats.filter((c) => c.fromId.startsWith('bot-'));
const texts = (chats) => botLines(chats).map((c) => c.text);
const isIn = (text, list) => list.some((tpl) => (tpl.includes('{') ? text.includes(tpl.split('{')[0]) && text.endsWith(tpl.split('}').pop()) : tpl === text));

test('selam algılama: kısa selamlar evet; cevap, uzun cümle ve rastgele "as" hayır', () => {
  for (const s of ['sa', 'Selam', 'selamün aleyküm', 'Selamun aleykum millet', 'slm', 'merhaba', 'Arkadaşlae Selamun aleyküm']) assert.ok(greetingKind(s), s);
  assert.equal(greetingKind('merhaba'), 'merhaba');
  for (const s of ['aleyküm selam', 'Ve aleyküm selam', 'as', 'bence ali kahin ama emin değilim selam', 'oyun ne zaman başlıyor', '']) assert.equal(greetingKind(s), null, s);
});

test('bot katılınca "Selamün aleyküm" der; çok bot eklenince sıra uzamaz', (t) => {
  clock(t);
  const { room, chats } = setup({ humans: ['burak'] });
  room.hostId = 'h0';
  room.addBot('h0');
  tick(t, 6000);
  assert.equal(chats.length, 1);
  assert.ok(JOIN_GREETINGS.includes(chats[0].text), chats[0].text);
  assert.equal(chats[0].phase, 'lobby');
  // 7 bot birden: aynı anda sırada en fazla 2 selam bekler, hepsi birbirinden ayrı zamanda çıkar.
  for (let i = 0; i < 7; i++) room.addBot('h0');
  tick(t, 30000);
  const greets = chats.filter((c) => JOIN_GREETINGS.includes(c.text));
  assert.ok(greets.length >= 2 && greets.length <= 4, `selam sayısı ${greets.length}`);
  for (let i = 1; i < chats.length; i++) assert.ok(chats[i].at - chats[i - 1].at >= 2000, 'satırlar arası boşluk');
  room.destroy();
});

test('insan selam verince 1-2 bot "Aleyküm selam" der; her seferinde değil; sık selamda susar', (t) => {
  clock(t);
  let total = 0;
  const counts = new Set();
  for (let g = 0; g < 12; g++) {
    const { room, chats, say } = setup({ humans: ['ahmetchain', 'burak'], bots: 5, seed: `selam-${g}` });
    tick(t, 40000);
    const before = chats.length;
    say('h1', 'sa');
    tick(t, 10000);
    const replies = chats.slice(before);
    assert.ok(replies.length <= 2, `${replies.length} cevap`);
    for (const r of replies) { assert.match(r.text, /selam|Merhaba/i); assert.equal(r.phase, 'lobby'); }
    total += replies.length;
    counts.add(replies.length);
    // 15 sn içinde ikinci selam cevapsız kalır (sohbet doldurulmaz).
    const mid = chats.length;
    say('h1', 'selam');
    tick(t, 4000);
    if (replies.length) assert.equal(chats.length, mid, `bekleme süresinde cevap yok: ${JSON.stringify(chats.slice(before).map((c) => [c.at - NOW, c.text]))}`);
    room.destroy();
  }
  assert.ok(total >= 6, `cevap sayısı ${total}`);
  assert.ok(counts.has(1) || counts.has(2));
});

test('sahip hesap: botlarla ilk kez lobide sıcak karşılama, oturumda bir kez; oyun sonrası en fazla kısa "bir el daha"', (t) => {
  clock(t);
  const { room, chats, say } = setup({ humans: ['AhmetChain', 'burak'], bots: 0 });
  tick(t, 5000);
  assert.equal(chats.length, 0, 'bot yokken sessiz');
  for (let i = 0; i < 4; i++) room.addBot('h0');
  tick(t, 40000);
  const all = texts(chats);
  assert.ok(all.some((x) => /^(Ahmet hocam|Ahmet abi) hoş geldiniz, nasılsınız|^Hoş geldiniz (Ahmet hocam|Ahmet abi), nasılsınız/.test(x)), all.join(' | '));
  assert.ok(all.some((x) => /seviyoruz/.test(x)));
  const welcomes = all.filter((x) => /hoş geldiniz|seviyoruz|Başlatır|başlatalım/i.test(x));
  assert.ok(welcomes.length >= 2 && welcomes.length <= 3);
  // Ayrılıp geri gelmek karşılamayı tekrarlamaz.
  const n = chats.length;
  room.removePlayer('h0');
  room.addPlayer('h9', 'ahmetchain', { userId: 'u9' });
  room.connect('h9', 's9');
  room.addBot(room.hostId);
  tick(t, 40000);
  const again = texts(chats.slice(n)).filter((x) => /hoş geldiniz|seviyoruz/.test(x));
  assert.deepEqual(again, [], 'ikinci karşılama yok');
  // Oyunu kurup bitir, lobiye dön: tekrar karşılama yok, en fazla tek kısa satır.
  const host = room.hostId;
  room.start(host);
  const m = chats.length;
  room.finish(ROLE.VILLAGER);
  tick(t, 20000);
  room.backToLobby(host);
  tick(t, 40000);
  const post = texts(chats.slice(m)).filter((x) => /hoş geldiniz|seviyoruz|Başlatır/.test(x));
  assert.deepEqual(post, []);
  assert.ok(texts(chats.slice(m)).filter((x) => /bir el daha/.test(x)).length <= 1);
  void say;
  room.destroy();
});

test('giriş fanfarı: sahip hesap ilk girişte bir kez; başkası girince, yeniden bağlanınca ve oyun sonrası lobide yok; botlar 2-4 kez tezahürat yapar', (t) => {
  clock(t);
  const cheers = /İşteee|Geldiiii|CENAAA|Yeaaah|Sahne sizin/;
  let cheerTotal = 0;
  for (let g = 0; g < 8; g++) {
    // Başkasının odasına katılan sahip hesap: botlar zaten orada.
    const { room, chats, entrances } = setup({ humans: ['burak'], bots: 5, seed: `giris-${g}` });
    tick(t, 30000);
    assert.equal(entrances.length, 0, 'başka biri girince fanfar yok');
    const at = chats.length;
    room.addPlayer('h5', 'ahmetchain', { userId: 'u5' });
    assert.equal(entrances.length, 0, 'koltuk alındı ama soket henüz bağlı değil');
    room.connect('h5', 's5');
    assert.equal(entrances.length, 1);
    assert.equal(entrances[0].call, 'Ahmet hocam');
    assert.equal(entrances[0].phase, 'lobby');
    tick(t, 30000);
    const mine = texts(chats.slice(at)).filter((x) => cheers.test(x));
    assert.ok(mine.length >= 2 && mine.length <= 4, `tezahürat ${mine.length}`);
    assert.equal(new Set(mine).size, mine.length, 'aynı satır tekrarlanmaz');
    cheerTotal += mine.length;
    // Bağlantı kopup geri gelmek ve oyundan sonra lobiye dönmek tekrarlamaz.
    const n = chats.length;
    room.disconnect('h5');
    tick(t, 5000);
    room.connect('h5', 's6');
    room.hostId = 'h5';
    room.start('h5');
    room.finish(ROLE.VILLAGER);
    tick(t, 20000);
    room.backToLobby('h5');
    tick(t, 40000);
    assert.equal(entrances.length, 1, 'fanfar tekrarlanmadı');
    assert.equal(texts(chats.slice(n)).filter((x) => cheers.test(x)).length, 0, 'ikinci tezahürat yok');
    room.destroy();
  }
  assert.ok(cheerTotal >= 16);
  // Kendi odasını kuran sahip: otomatik fanfar yok (oda sahibi olarak giriyor); müzik düğmesiyle elle çalar.
  const own = setup({ humans: ['ahmetchain'], bots: 0, seed: 'kendi' });
  assert.equal(own.entrances.length, 0, 'oda kurarken otomatik çalmaz');
  own.room.addBot('h0'); own.room.addBot('h0'); own.room.addBot('h0'); own.room.addBot('h0');
  tick(t, 30000);
  assert.equal(texts(own.chats).filter((x) => cheers.test(x)).length, 0, 'tezahürat yok');
  // Elle düğme: sahip çalar; 20 sn içinde ikinci basış reddedilir; her seferinde farklı satırlar.
  const mc = (arr) => texts(arr).filter((x) => x && !/Selamün|hocam hoş|seviyoruz/.test(x));
  const n0 = own.chats.length;
  assert.equal(own.room.playEntrance('h0'), null);
  assert.equal(own.entrances.length, 1);
  assert.equal(own.entrances[0].manual, true);
  assert.match(own.room.playEntrance('h0'), /bekle/, 'çalarken ikinci basış reddedilir');
  tick(t, 32000);
  const first = mc(own.chats.slice(n0));
  assert.ok(first.length >= 2 && first.length <= 3, `tepki ${first.length}`);
  const n1 = own.chats.length;
  assert.equal(own.room.playEntrance('h0'), null);
  tick(t, 30000);
  const second = mc(own.chats.slice(n1));
  assert.ok(second.length >= 2);
  assert.equal(second.filter((x) => first.includes(x)).length, 0, 'ikinci basışta aynı espriler tekrarlanmaz');
  own.room.destroy();
  // Sohbetten komut: sahip "verin müziği" yazınca müzik çalar; başkası yazarsa çalmaz.
  const cmd = setup({ humans: ['ahmetchain', 'burak'], bots: 4, seed: 'komut' });
  cmd.say('h1', 'verin müziği');
  tick(t, 5000);
  assert.equal(cmd.entrances.length, 0, 'başkasının yazdığı komut işlemez');
  cmd.say('h0', 'Verin müziği hocam');
  assert.equal(cmd.entrances.length, 1, 'sahibin komutu müziği çaldırır');
  assert.equal(cmd.entrances[0].manual, true);
  tick(t, 30000);
  assert.ok(texts(cmd.chats).length >= 2, 'botlar tepki verir');
  cmd.room.destroy();
  // Sahip olmayan düğmeyi kullanamaz; oyun sırasında çalınmaz.
  const other = setup({ humans: ['burak', 'ahmetchain'], bots: 2, seed: 'diger' });
  assert.match(other.room.playEntrance('h0'), /sen kullanamazsın/);
  other.room.hostId = 'h1';
  other.room.addBot('h1'); other.room.addBot('h1'); other.room.addBot('h1');
  other.room.start('h1');
  assert.match(other.room.playEntrance('h1'), /lobide/);
  other.room.destroy();
  // Müziği kapatma: sahibin "tamam artık kapatabiliriz" yazısı; çalmıyorsa ya da başkası yazarsa işlemez.
  const stops = [];
  const off = setup({ humans: ['ahmetchain', 'burak'], bots: 4, seed: 'kapat' });
  off.room.hooks.entranceStop = () => stops.push(Date.now());
  off.say('h0', 'tamam artık kapatabiliriz');
  assert.equal(stops.length, 0, 'müzik çalmıyorken kapatma işlemez');
  off.room.playEntrance('h0');
  tick(t, 5000);
  off.say('h1', 'tamam artık kapatabiliriz');
  assert.equal(stops.length, 0, 'başkasının yazdığı işlemez');
  const m0 = off.chats.length;
  off.say('h0', 'Tamam artık kapatabiliriz');
  assert.equal(stops.length, 1, 'sahibin komutu müziği kapatır');
  tick(t, 10000);
  assert.ok(texts(off.chats.slice(m0)).length >= 1, 'bir bot kapattık der');
  off.say('h0', 'tamam artık kapatabiliriz');
  assert.equal(stops.length, 1, 'ikinci kez kapatılmaz');
  assert.equal(off.room.playEntrance('h0'), null, 'kapatıldıktan sonra yeniden çaldırılabilir');
  off.room.destroy();
  // Oyun başladıktan sonra sohbetten komut da işlemez.
  const inGame = setup({ humans: ['ahmetchain', 'burak'], bots: 4, seed: 'oyunda' });
  inGame.room.start('h0');
  const e0 = inGame.entrances.length;
  inGame.say('h0', 'lokman ver olum müziği');
  tick(t, 10000);
  assert.equal(inGame.entrances.length, e0, 'oyun sırasında müzik çalmaz');
  inGame.room.destroy();
  // Hesapsız koltuk ya da bot fanfar tetiklemez.
  const guest = setup({ humans: [{ guest: 'ahmetchain' }], bots: 2, seed: 'konuk2' });
  assert.equal(guest.entrances.length, 0);
  guest.room.destroy();
});

test('eşleşme hesabın kullanıcı adıyla: botlar, hesapsız koltuklar ve başka adlar karşılanmaz; BANTER_PEOPLE geçersiz kılar', (t) => {
  clock(t);
  const g = setup({ humans: [{ guest: 'ahmetchain' }, 'burak'], bots: 4, seed: 'konuk' });
  tick(t, 40000);
  assert.equal(texts(g.chats).filter((x) => /hoş geldiniz/.test(x)).length, 0, 'hesapsız koltuk sahip sayılmaz');
  g.room.destroy();

  const env = { BANTER_PEOPLE: JSON.stringify({ Deneme: { kind: 'host', call: ['Deneme abi'], owner: true }, kotu: { kind: 'x' } }) };
  const people = loadPeople(env);
  assert.deepEqual(Object.keys(people), ['deneme']);
  assert.equal(isOwnerName('DENEME', people), true);
  assert.equal(isOwnerName('ahmetchain', people), false);
  assert.equal(isOwnerName('ahmetchain'), true);
  assert.equal(isOwnerName('AHMETCHAIN'), true);
  assert.equal(loadPeople({ BANTER_PEOPLE: '{bozuk' }), loadPeople({}));
  const h = setup({ humans: ['Deneme', 'burak'], bots: 3, seed: 'env', people });
  tick(t, 40000);
  assert.ok(texts(h.chats).some((x) => /Deneme abi hoş geldiniz|Hoş geldiniz Deneme abi/.test(x)), texts(h.chats).join(' | '));
  h.room.destroy();
});

test('"sadece Ahmet abimizle konuşuruz": kişi başına en fazla bir kez, hiç oyun içinde değil', (t) => {
  clock(t);
  let quips = 0;
  for (let g = 0; g < 10; g++) {
    const { room, chats, say } = setup({ humans: ['ahmetchain', 'burak', 'selin'], bots: 4, seed: `espri-${g}` });
    tick(t, 40000);
    const before = chats.length;
    for (let i = 0; i < 5; i++) { say('h1', 'bot naber'); tick(t, 20000); }
    const mine = texts(chats.slice(before)).filter((x) => /sadece Ahmet abimizle konuşuruz/.test(x));
    assert.ok(mine.length <= 1, `burak için ${mine.length}`);
    assert.ok(!mine.length || mine[0].endsWith('😄'));
    quips += mine.length;
    // Sahip hesap kendisi botlara yazarsa espri yok.
    const b2 = chats.length;
    say('h0', 'bot naber');
    tick(t, 20000);
    assert.equal(texts(chats.slice(b2)).filter((x) => /sadece/.test(x)).length, 0);
    room.destroy();
  }
  assert.ok(quips >= 3, `espri sayısı ${quips}`);
});

test('oyun sonu: sahip kazanan takımda bir botla birlikteyse "Hocam iyi oynadınız"; toplam 1-3 satır', (t) => {
  clock(t);
  let hocam = 0;
  for (let g = 0; g < 10; g++) {
    const { room, chats } = setup({ humans: ['ahmetchain', 'burak'], bots: 4, seed: `son-${g}` });
    tick(t, 40000);
    assert.equal(room.start('h0'), null);
    const ids = [...room.players.keys()];
    // Sahip + iki bot köylü, kalanı vampir; köylüler kazanır.
    ids.forEach((id, i) => { room.players.get(id).role = i === 1 || i === 5 ? ROLE.VAMPIRE : ROLE.VILLAGER; });
    const at = chats.length;
    room.finish(ROLE.VILLAGER);
    tick(t, 20000);
    const end = chats.slice(at);
    assert.ok(end.length >= 1 && end.length <= 3, `${end.length} satır`);
    for (const c of end) assert.ok(['ended', 'lobby'].includes(c.phase));
    const winnerIds = new Set(room.winners);
    const lines = botLines(end);
    for (const c of lines) {
      if (/ezz|rahat|helal olsun bize|^gg/.test(c.text) && !/Hocam|hocam/.test(c.text)) assert.ok(winnerIds.has(c.fromId) || /gg|helal olsun|bir dahakine/.test(c.text), c.text);
    }
    if (lines.some((c) => /[Hh]ocam|Ellerinize|Eline/.test(c.text) && /oynad|sağlık/.test(c.text))) hocam += 1;
    room.destroy();
  }
  assert.equal(hocam, 10, 'her seferinde sahibe iyi oynadınız denir');
});

test('oyun sonu: kaybeden botlar "gg / helal olsun / bir dahakine" ve kazananlar "ezz" der (vampir galibiyeti: kandırma)', (t) => {
  clock(t);
  const seen = new Set();
  for (let g = 0; g < 14; g++) {
    const { room, chats } = setup({ humans: ['burak', 'selin'], bots: 4, seed: `gg-${g}` });
    tick(t, 40000);
    room.hostId = 'h0';
    room.start('h0');
    [...room.players.values()].forEach((p, i) => { p.role = i === 1 || i === 2 ? ROLE.VAMPIRE : ROLE.VILLAGER; });
    const at = chats.length;
    room.finish(ROLE.VAMPIRE);
    tick(t, 20000);
    const end = chats.slice(at);
    assert.ok(end.length >= 1 && end.length <= 3);
    for (const c of end) seen.add(c.text);
    room.destroy();
  }
  const all = [...seen];
  assert.ok(all.some((x) => /gg|helal olsun|bir dahakine/.test(x)));
  assert.ok(all.some((x) => /ezz|rahat|kandır|manipülasyon/.test(x)));
  assert.ok(all.every((x) => isIn(x, ALL_LINES)), all.join(' | '));
});

test('Said: ilk elenirse oyun sonunda hafif takılma, oturumda en fazla bir kez; oyun içinde hiç', (t) => {
  clock(t);
  let teased = 0;
  for (let g = 0; g < 10; g++) {
    const { room, chats } = setup({ humans: ['ahmetchain'], bots: 4, seed: `said-${g}` });
    tick(t, 60000);
    room.addPlayer('h1', 'msaidgencer', { userId: 'u1' });   // botlar varken katılır: lobide bir kez takılma şansı
    room.connect('h1', 's1');
    tick(t, 30000);
    for (let round = 0; round < 2; round++) {
      room.start('h0');
      [...room.players.values()].forEach((p, i) => { p.role = i === 2 ? ROLE.VAMPIRE : ROLE.VILLAGER; });
      room.players.get('h1').alive = false;   // Said ilk elenen
      room.changed();
      const at = chats.length;
      room.finish(ROLE.VILLAGER);
      tick(t, 20000);
      const line = texts(chats.slice(at)).filter((x) => /Said/.test(x));
      assert.ok(line.length <= 1);
      assert.ok(!line.length || /😄$/.test(line[0]) && !/aptal|salak|gerizekal/i.test(line[0]));
      if (round === 0 && line.length) teased += 1;
      room.backToLobby('h0');
      tick(t, 30000);
    }
    // Bütün takılmalar (lobi dahil) oturumda toplam en fazla bir kez.
    assert.ok(texts(chats).filter((x) => /Said/.test(x)).length <= 1, texts(chats).filter((x) => /Said/.test(x)).join(' | '));
    room.destroy();
  }
  assert.ok(teased >= 3, `oyun sonunda takılma ${teased}`);
});

test('oyun sırasında (gece/gündüz/mahkeme) hiç muhabbet yok; sıradaki satırlar oyun başlayınca düşer', (t) => {
  clock(t);
  const { room, chats, say } = setup({ humans: ['ahmetchain', 'msaidgencer', 'burak'], bots: 5, seed: 'oyun' });
  // Selam ve bot sorusu satırları sıradayken oyun hemen başlar.
  say('h2', 'selam');
  say('h2', 'bot naber');
  assert.equal(room.start('h0'), null);
  const at = chats.length;
  for (let i = 0; i < 300 && room.phase !== 'ended'; i++) {
    if (room.phase === 'day') { say('h2', 'sa'); say('h2', 'bot ayşe naber'); }
    t.mock.timers.tick(1000);
  }
  for (const c of chats.slice(at)) {
    if (['reveal', 'night', 'day', 'trial', 'hunter'].includes(c.phase)) assert.ok(!isIn(c.text, ALL_LINES), `oyun içinde muhabbet: ${c.text}`);
  }
  room.destroy();
});

test('muhabbet satırları ve oyun istemleri: şablonlar rol adı içermez; lobi sohbeti hiçbir bot istemine girmez', async (t) => {
  for (const line of ALL_LINES) {
    for (const w of ['vampir', 'iftira', 'doktor', 'kahin', 'gözcü', 'cadı', 'avcı', 'muhtar', 'soytarı']) assert.equal(line.toLocaleLowerCase('tr').includes(w), false, line);
    assert.ok(line.length <= 100);
  }
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const transport = mockTransport({ latency: 300 });
  const client = makeClient(transport);
  const room = new Room({
    id: 'ISTEM', name: 'x', settings: { nightSec: 10, daySec: 40 }, botRng: mulberry('i'), banterRng: mulberry('j'),
    ai: client, hooks: { update() {}, announce() {}, empty() {}, finished() {}, chat() {} },
  });
  room.addPlayer('h0', 'ahmetchain', { userId: 'u0' });
  for (let i = 0; i < 5; i++) room.addBot('h0');
  const prompts = [];
  room.bots.smart.onPrompt = (e) => prompts.push(e.user);
  await advance(t, 30000);
  const res = room.chat('h0', 'selam bot naber');
  room.observeChat(res.recipients, res.message);
  await advance(t, 20000);
  assert.equal(prompts.length, 0, 'lobide model çağrısı yok');
  room.destroy();
});

// ---------- oda başına bot zekâsı ----------

test('botModel: yalnızca sahip hesap "sonnet" seçebilir; başkasına görünmez; varsayılan haiku', (t) => {
  clock(t);
  const { room } = setup({ humans: ['burak', 'ahmetchain'], seed: 'model' });
  assert.equal(room.settings.botModel, 'haiku');
  assert.match(room.updateSettings('h0', { botModel: 'sonnet' }), /yetki/);
  assert.equal(room.settings.botModel, 'haiku');
  assert.equal(room.updateSettings('h0', { botModel: 'haiku', nightSec: 15 }), null);
  assert.equal(room.viewFor('h0').me.canChooseBotModel, undefined);
  assert.equal('botModel' in room.viewFor('h0').room.settings, false);
  // Sahip hesap oda sahibi olunca seçebilir.
  room.hostId = 'h1';
  assert.equal(room.viewFor('h1').me.canChooseBotModel, true);
  assert.equal(room.updateSettings('h1', { botModel: 'sonnet' }), null);
  assert.equal(room.botTier(), 'sonnet');
  assert.equal(room.viewFor('h1').room.settings.botModel, 'sonnet');
  assert.equal('botModel' in room.viewFor('h0').room.settings, false, 'başkasına sızmaz');
  // Sahip değilken başka biri oda sahibi olsa da sonnet gönderemez; sonnet'i kapatabilir.
  room.hostId = 'h0';
  assert.match(room.updateSettings('h0', { botModel: 'sonnet', nightSec: 20 }), /yetki/);
  assert.equal(room.updateSettings('h0', { nightSec: 20 }), null);
  assert.equal(room.settings.botModel, 'sonnet', 'botModel göndermeyen güncelleme değiştirmez');
  assert.equal(room.updateSettings('h0', { botModel: 'haiku' }), null);
  assert.equal(room.botTier(), 'haiku');
  assert.equal(room.settings.botModel, 'haiku');
  room.destroy();
});

test('botModel: sonnet odasında çağrılar sonnet (düşük efor, kendi fiyatı), varsayılan odada haiku; log ve kayıt gerçek modeli yazar', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  for (const [model, want, effort] of [['sonnet', 'claude-sonnet-5-5', 'low'], ['haiku', 'claude-haiku-5-5', 'medium']]) {
    const transport = mockTransport({ latency: 200 });
    const client = makeClient(transport);
    const lines = [];
    const room = new Room({
      id: `M${model}`, name: 'm', settings: { nightSec: 10, daySec: 30, botModel: model }, botRng: mulberry(model), banterRng: mulberry('x'),
      ai: client, hooks: { update() {}, announce() {}, empty() {}, finished() {}, chat() {}, reviewReady() {} },
    });
    room.addPlayer('h0', 'ahmetchain', { userId: 'u0' });
    for (let i = 0; i < 6; i++) room.addBot('h0');
    room.bots.smart.logger = { log: (l) => lines.push(l), warn() {} };
    room.start('h0');
    await advance(t, 90000);
    assert.ok(transport.calls.length >= 1, `${model}: çağrı yok`);
    for (const c of transport.calls) { assert.equal(c.params.model, want); assert.equal(c.params.output_config.effort, effort); }
    const s = room.bots.smart.ledger.summary();
    assert.deepEqual(s.models, [want]);
    assert.ok(s.costUsd > 0);
    if (model === 'sonnet') assert.ok(s.costUsd > 0, 'sonnet fiyat tablosu');
    room.bots.smart.logSummary();
    assert.match(lines.join('\n'), new RegExp(`model=${want} `));
    room.destroy();
  }
  // Fiyat: aynı kullanım Sonnet'te Haiku'dan 20 kat pahalı.
  const c = makeClient(mockTransport());
  const usage = { input_tokens: 1000, output_tokens: 100 };
  const l1 = c.ledger(); const l2 = c.ledger();
  c.record(usage, l1, c.tier('haiku'));
  c.record(usage, l2, c.tier('sonnet'));
  assert.ok(Math.abs(l2.cost / l1.cost - 20) < 1e-6);
});

test('botModel hybrid: yalnızca sahip seçebilir; geçerli değerler haiku/hybrid/sonnet; kademe botun gerçek rolüne göre', (t) => {
  clock(t);
  const { normalizeSettings } = require('../game');
  assert.equal(normalizeSettings({ botModel: 'hybrid' }).botModel, 'hybrid');
  assert.equal(normalizeSettings({ botModel: 'sonnet' }).botModel, 'sonnet');
  assert.equal(normalizeSettings({ botModel: 'opus' }).botModel, 'haiku');
  assert.equal(normalizeSettings({}).botModel, 'haiku');
  const { room } = setup({ humans: ['burak', 'ahmetchain'], seed: 'hybrid' });
  assert.match(room.updateSettings('h0', { botModel: 'hybrid' }), /yetki/);
  assert.equal(room.settings.botModel, 'haiku');
  room.hostId = 'h1';
  assert.equal(room.updateSettings('h1', { botModel: 'hybrid' }), null);
  assert.equal(room.viewFor('h1').room.settings.botModel, 'hybrid');
  assert.equal('botModel' in room.viewFor('h0').room.settings, false, 'başkasına sızmaz');
  assert.equal(room.viewFor('h0').me.canChooseBotModel, undefined);
  room.hostId = 'h0';
  assert.equal(room.updateSettings('h0', { nightSec: 20 }), null, 'botModel göndermeyen güncelleme değiştirmez');
  assert.equal(room.settings.botModel, 'hybrid');
  assert.match(room.updateSettings('h0', { botModel: 'hybrid' }), /yetki/);
  // Rol -> kademe.
  const SONNET = ['vampir', 'iftiraci', 'temizlikci', 'gozcu', 'kahin', 'doktor', 'hirsiz'];
  const HAIKU = ['koylu', 'cadi', 'avci', 'muhtar', 'gardiyan', 'soytari', 'deli'];
  const p = room.players.get('h0');
  for (const r of SONNET) { p.role = r; assert.equal(room.botTier('h0'), 'sonnet', r); }
  for (const r of HAIKU) { p.role = r; assert.equal(room.botTier('h0'), 'haiku', r); }
  // Deli kendini doktor sansa da gerçek rolü (deli) sayılır; hırsız çaldıktan sonra yeni rolü sayılır.
  p.role = 'deli'; p.fakeRole = 'doktor';
  assert.equal(room.botTier('h0'), 'haiku');
  p.role = 'hirsiz'; assert.equal(room.botTier('h0'), 'sonnet');
  p.role = 'koylu'; assert.equal(room.botTier('h0'), 'haiku', 'hırsız köylüyü soydu');
  assert.equal(room.botTier('yok'), 'haiku');
  room.settings.botModel = 'sonnet'; assert.equal(room.botTier('h0'), 'sonnet');
  room.settings.botModel = 'haiku'; p.role = 'vampir'; assert.equal(room.botTier('h0'), 'haiku');
  room.destroy();
});

test('botModel hybrid: vampir botun çağrısı sonnet, düz köylününki haiku; maliyet ve log iki modeli de yazar', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const transport = mockTransport({ latency: 200 });
  const client = makeClient(transport);
  const lines = [];
  const room = new Room({
    id: 'Mhyb', name: 'm', settings: { nightSec: 10, daySec: 30, botModel: 'hybrid' }, botRng: mulberry('hyb'), banterRng: mulberry('x'),
    ai: client, hooks: { update() {}, announce() {}, empty() {}, finished() {}, chat() {}, reviewReady() {} },
  });
  room.addPlayer('h0', 'ahmetchain', { userId: 'u0' });
  for (let i = 0; i < 8; i++) room.addBot('h0');
  room.bots.smart.logger = { log: (l) => lines.push(l), warn() {} };
  const seen = [];
  const turn = client.turn.bind(client);
  client.turn = (args) => {
    const p = room.players.get(args.botId);
    seen.push({ role: p && p.role, tier: args.tier });
    return turn(args);
  };
  room.start('h0');
  // Roller rastgele dağıtılır: insan Vampir çıktıysa bir botla rol değiştirilir ki bot Vampir kesin olsun.
  const human = room.players.get('h0');
  if (human.role === 'vampir') {
    const bot = [...room.players.values()].find((x) => x.bot && x.role === 'koylu') || [...room.players.values()].find((x) => x.bot);
    [human.role, bot.role] = [bot.role, human.role];
  }
  await advance(t, 90000);
  assert.ok(seen.length >= 1, 'çağrı yok');
  const HEAVY = new Set(['vampir', 'iftiraci', 'temizlikci', 'gozcu', 'kahin', 'doktor', 'hirsiz']);
  for (const c of seen) assert.equal(c.tier, HEAVY.has(c.role) ? 'sonnet' : 'haiku', c.role);
  assert.ok(seen.some((c) => c.role === 'vampir' && c.tier === 'sonnet'), 'vampir sonnet');
  assert.ok(seen.some((c) => c.role === 'koylu' && c.tier === 'haiku'), 'köylü haiku');
  const models = new Set(transport.calls.map((c) => c.params.model));
  assert.deepEqual([...models].sort(), ['claude-haiku-5-5', 'claude-sonnet-5-5']);
  const s = room.bots.smart.ledger.summary();
  assert.deepEqual([...s.models].sort(), ['claude-haiku-5-5', 'claude-sonnet-5-5']);
  assert.ok(s.costUsd > 0);
  room.bots.smart.logSummary();
  assert.match(lines.join('\n'), /model=claude-(haiku|sonnet)-5-5\+claude-(haiku|sonnet)-5-5 /);
  room.destroy();
});

test('sunucu: botlu oyun insanların istatistiğine yazılır; oda kurarken yalnızca sahip hesap sonnet alır', { timeout: 20000 }, async (t) => {
  const { startServer, http, register, client, connected, emit, waitFor } = require('./helpers');
  const srv = await startServer(t);
  const owner = await register(srv, 'ahmetchain');
  const other = await register(srv, 'burak');
  assert.equal(owner.user.canChooseBotModel, true);
  assert.equal(other.user.canChooseBotModel, undefined);
  const a = await connected(client(srv, other.token));
  const created = await emit(a, 'room:create', { roomName: 'Deneme odası', settings: { botModel: 'sonnet' } });
  assert.equal(created.ok, true);
  assert.equal(srv.rooms.get(created.roomId).settings.botModel, 'haiku', 'sahip olmayan sonnet alamaz');
  const b = await connected(client(srv, owner.token));
  const made = await emit(b, 'room:create', { roomName: 'Sahip odası', settings: { botModel: 'sonnet' } });
  assert.equal(made.ok, true);
  assert.equal(srv.rooms.get(made.roomId).settings.botModel, 'sonnet');
  assert.equal(b.lastState.me.canChooseBotModel, true);
  const denied = await emit(a, 'room:settings', { settings: { botModel: 'sonnet' } });
  assert.equal(denied.ok, false);
  const deniedH = await emit(a, 'room:settings', { settings: { botModel: 'hybrid' } });
  assert.equal(deniedH.ok, false);
  void http; void waitFor;
});

// Edep: şablonlarda yasak söz yok; kaba konuşana nazik hatırlatma (oyun sırasında da), sahibe değil, sıklığı sınırlı.
test('edep: bot şablonları temiz; kaba söze nazik hatırlatma gelir; sahip uyarılmaz; hatırlatma seyrek', (t) => {
  clock(t);
  const { ALL_LINES } = require('../lib/banter');
  const { cleanBotLine, isRude } = require('../lib/manners');
  for (const line of ALL_LINES) {
    const probe = line.replace(/\{\w+\}/g, 'Ahmet');
    assert.equal(cleanBotLine(probe), probe, `şablonda yasak söz: ${line}`);
  }
  assert.equal(cleanBotLine('valla ben köylüyüm'), 'ben köylüyüm');
  assert.equal(cleanBotLine('kahin kim lan konuşsun'), 'kahin kim konuşsun');
  assert.equal(cleanBotLine('yemin ederim o vampir'), 'o vampir');
  assert.equal(cleanBotLine('sen salaksın'), '');
  assert.equal(isRude('kes lan'), true);
  assert.equal(isRude('plan yapalım'), false);
  // Lobide kaba mesaj: bir bot nazikçe hatırlatır; hemen ardından ikinci kaba mesaj yeni hatırlatma getirmez.
  const a = setup({ humans: ['ahmetchain', 'burak'], bots: 3, seed: 'edep' });
  a.say('h1', 'kes lan');
  tick(t, 6000);
  const polite = /düzgün konuşalım|güzel konuşalım|kırıcı olmayalım|birbirimize güzel/;
  assert.equal(texts(a.chats).filter((x) => polite.test(x)).length, 1, 'bir hatırlatma');
  a.say('h1', 'ulan siz ne diyorsunuz');
  tick(t, 6000);
  assert.equal(texts(a.chats).filter((x) => polite.test(x)).length, 1, '2 dk içinde ikinci hatırlatma yok');
  // Sahibin kaba mesajına hatırlatma yok.
  const b = setup({ humans: ['ahmetchain', 'burak'], bots: 3, seed: 'edep2' });
  b.say('h0', 'kes lan');
  tick(t, 6000);
  assert.equal(texts(b.chats).filter((x) => polite.test(x)).length, 0);
  // Oyun sırasında (gündüz) da hatırlatır.
  const c = setup({ humans: ['ahmetchain', 'burak'], bots: 4, seed: 'edep3' });
  c.room.start('h0');
  // Gündüz başlar başlamaz yaz (gün kısalmadan önce): faz ilerledikçe yarım saniyelik adımlarla bekle.
  for (let k = 0; k < 400 && c.room.phase !== 'day'; k++) tick(t, 500);
  if (c.room.phase === 'day') {
    const n = c.chats.length;
    c.say('h1', 'sus lan');
    tick(t, 6000);
    assert.ok(texts(c.chats.slice(n)).some((x) => polite.test(x)), `oyunda hatırlatma faz=${c.room.phase} botlar=${c.room.bots ? 'var' : 'yok'} son=${JSON.stringify(c.chats.slice(n).map((x) => x.text))}`);
  }
  for (const r of [a, b, c]) r.room.destroy();
});

test('selam: uzun "rahmetullah" selamına uzun cevap; botlar birbirinin selamına cevap verir', (t) => {
  clock(t);
  let longReplies = 0, botReplies = 0;
  for (let g = 0; g < 12; g++) {
    const { room, chats, say } = setup({ humans: ['ahmetchain', 'burak'], bots: 0, seed: `uzun-${g}` });
    room.hostId = 'h0';
    room.addBot('h0'); room.addBot('h0'); room.addBot('h0');
    tick(t, 30000);
    // Botlar birbirinin selamına cevap verir (en az bir "aleyküm selam" bot satırı).
    if (texts(chats).some((x) => /aleyküm selam/i.test(x) && !/^Selamün/.test(x))) botReplies += 1;
    const n = chats.length;
    say('h1', 'Selamün aleyküm ve rahmetullahi ve berekatuhu');
    tick(t, 30000);
    if (texts(chats.slice(n)).some((x) => /rahmetullah/i.test(x))) longReplies += 1;
    room.destroy();
  }
  assert.ok(botReplies >= 5, `bot-bot cevap ${botReplies}/12`);
  assert.ok(longReplies >= 8, `uzun cevap ${longReplies}/12`);
});

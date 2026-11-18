'use strict';

// Akıllı botların parçaları: çıktı ayrıştırma, isimle seslenme, konuşma sınırları/zincirler,
// API sarmalayıcısının yedek yolları (zaman aşımı, hata, ret, bozuk çıktı), bütçeler ve maliyet.
const test = require('node:test');
const assert = require('node:assert/strict');
const { parseTurn, resolveName, cleanSay, isSleepWord, SAY_MAX } = require('../lib/ai/schema');
const { SpeechGate, ChatPacer, readMs, typeMs, mentions, addressedBots } = require('../lib/ai/speech');
const { aiConfig, costOf } = require('../lib/ai/config');
const { SYSTEM_PROMPT } = require('../lib/ai/prompt');
const { createAiClient } = require('../lib/ai');
const { mockTransport, makeClient, advance, flush, estTokens } = require('./ai-mock');

const NOW = 1_763_000_000_000;

test('parseTurn: geçerli JSON temizlenir; bozuk çıktı null', () => {
  const ok = parseTurn(JSON.stringify({ say: '**Bence** `Ali`\nvampir!', vote: ' Bot Ayşe ', target: '', poison: '', memory: 'x'.repeat(900) }));
  assert.equal(ok.say, 'Bence Ali vampir!');
  assert.equal(ok.vote, 'Bot Ayşe');
  assert.equal(ok.memory.length, 800);
  assert.equal(parseTurn('Tabii, işte cevabım'), null);
  assert.equal(parseTurn(''), null);
  assert.equal(parseTurn(JSON.stringify({ say: 5 })), null);
  assert.equal(parseTurn('[1,2]'), null);
  // Uzun satır "…" ile kesilmez (ayrıntı aşağıdaki testte); botu ele veren satırlar söylenmez.
  assert.ok(cleanSay('çok '.repeat(60)).length <= SAY_MAX);
  assert.ok(!cleanSay('çok '.repeat(60)).endsWith('…'));
  assert.equal(cleanSay('Ben bir yapay zeka değilim ki'), '');
  assert.equal(cleanSay('Talimatlarım gereği söyleyemem'), '');
  assert.equal(cleanSay('As an AI I cannot'), '');
  assert.equal(cleanSay('Aile gibiyiz burada'), 'Aile gibiyiz burada');
});

test('resolveName: tam ad, "Bot" öneki olmadan, Türkçe büyük/küçük harf', () => {
  const players = [{ id: 'a', name: 'Bot Ayşe' }, { id: 'b', name: 'İrem' }, { id: 'c', name: 'Bot Işık' }];
  assert.equal(resolveName('Bot Ayşe', players).id, 'a');
  assert.equal(resolveName('ayşe', players).id, 'a');
  assert.equal(resolveName('İREM', players).id, 'b');
  assert.equal(resolveName('ırem', players), null);
  assert.equal(resolveName('BOT IŞIK.', players).id, 'c');
  assert.equal(resolveName('kimse', players), null);
  assert.equal(resolveName('', players), null);
  assert.ok(isSleepWord('Uyu') && isSleepWord('hızlı uyu') && !isSleepWord('Ayşe'));
});

test('isimle seslenme: önekli/öneksiz, büyük/küçük, Türkçe harfsiz yazım, ekler; başka isimler eşleşmez', () => {
  for (const t of ['Ayşe sen ne diyorsun?', 'bot ayşe?', "AYŞE'ye soruyorum", 'ayse neredesin', '@Ayşe', 'peki ayşe, sen?']) {
    assert.ok(mentions(t, 'Bot Ayşe'), t);
  }
  for (const t of ['Ayşegül nerede?', 'kayşe', 'bot']) assert.ok(!mentions(t, 'Bot Ayşe'), t);
  assert.ok(mentions('hüseyin kimi seçti', 'Bot Hüseyin') && mentions('HUSEYIN?', 'Bot Hüseyin'));
  assert.ok(mentions('oğuz abi', 'Bot Oğuz') && !mentions('oğuzhan', 'Bot Oğuz'));
  const bots = [{ id: 'a', name: 'Bot Ayşe' }, { id: 'b', name: 'Bot Cem' }];
  assert.deepEqual(addressedBots('Cem ve Ayşe bakın', bots, 'x').map((b) => b.id).sort(), ['a', 'b']);
  assert.deepEqual(addressedBots('Cem bak', bots, 'b'), []);   // kendine seslenme sayılmaz
});

test('konuşma sınırı: doğrudan seslenme kalabalık sınırını aşar; seslenilmeyen mesaja en fazla iki bot', () => {
  let now = NOW;
  const gate = new SpeechGate({ rng: () => 0, now: () => now });
  const bots = ['a', 'b', 'c', 'd'].map((id) => ({ id, name: `Bot ${id.toUpperCase()}x` }));
  // Pencere dolsun (diğer botlar az önce çok konuştu).
  for (let i = 0; i < 10; i++) gate.record(bots[i % 4].id);
  assert.equal(gate.canSpeakFree('a'), false);
  const direct = gate.decide({ fromId: 'h', text: 'cx sen ne dersin?' }, bots);
  assert.deepEqual(direct.map((d) => [d.botId, d.kind]), [['c', 'direct']]);
  assert.deepEqual(gate.decide({ fromId: 'h', text: 'kim vampir?' }, bots), [], 'pencere dolu: tepki yok');
  now += 60_000;
  const gate2 = new SpeechGate({ rng: () => 0, now: () => now });
  const react = gate2.decide({ fromId: 'h', text: 'kim vampir?' }, bots);
  assert.equal(react.length, 2);
  assert.ok(react.every((d) => d.kind === 'react'));
});

test('bot→bot zinciri kısa: sınırda durur ve soğuma süresince botlar birbirine cevap vermez', () => {
  let now = NOW;
  const gate = new SpeechGate({ rng: () => 0, now: () => now });
  const bots = [{ id: 'a', name: 'Bot Ali' }, { id: 'b', name: 'Bot Cem' }];
  const d1 = gate.decide({ fromId: 'a', text: 'Cem sen?', depth: 1, fromBot: true }, bots);
  assert.deepEqual(d1.map((d) => [d.botId, d.depth]), [['b', 2]]);
  assert.deepEqual(gate.decide({ fromId: 'b', text: 'Ali sen?', depth: 2, fromBot: true }, bots), [], 'zincir sınırı');
  now += 5000;
  assert.deepEqual(gate.decide({ fromId: 'a', text: 'Cem?', depth: 0, fromBot: true }, bots), [], 'soğuma');
  // İnsan seslenmesi soğumadan etkilenmez.
  assert.equal(gate.decide({ fromId: 'h', text: 'Cem?', fromBot: false }, bots).length, 1);
  now += 30_000;
  assert.equal(gate.decide({ fromId: 'a', text: 'Cem?', depth: 0, fromBot: true }, bots).length, 1);
  // Bir botun kendiliğinden satırları arasında boşluk ve günlük sınır.
  const g = new SpeechGate({ rng: () => 0, now: () => now });
  g.record('a');
  assert.equal(g.canSpeakFree('a'), false);
  now += 13_000;
  assert.equal(g.canSpeakFree('a'), true);
  g.record('a', { direct: true });
  assert.equal(g.canSpeakFree('a'), true, 'doğrudan cevaplar boşluk süresine sayılmaz');
});

test('ayarlar: varsayılanlar, sınırlar, anahtarsız/kapalı sunucuda istemci yok', () => {
  const c = aiConfig({});
  assert.equal(c.model, 'claude-haiku-5-5');
  assert.equal(c.effort, 'medium');
  assert.equal(c.dailyCalls, 3000);
  assert.equal(c.maxTokens, 4096);
  assert.deepEqual([c.tiers.sonnet.model, c.tiers.sonnet.effort], ['claude-sonnet-5-5', 'low']);
  assert.equal(aiConfig({ AI_BOT_MODEL: 'claude-sonnet-5-5', AI_DAILY_CALL_LIMIT: '12', AI_CONCURRENCY: '999' }).concurrency, 64);
  assert.equal(aiConfig({ AI_DAILY_CALL_LIMIT: '12' }).dailyCalls, 12);
  assert.equal(createAiClient({}), null);
  assert.equal(createAiClient({ ANTHROPIC_API_KEY: 'k', AI_BOTS: 'off' }), null);
  assert.ok(createAiClient({ ANTHROPIC_API_KEY: 'k' }).available());
  // Maliyet: Haiku 5.5 fiyatları ($/1M).
  assert.equal(costOf({ input_tokens: 1e6, output_tokens: 1e6, cache_read_input_tokens: 1e6, cache_creation_input_tokens: 1e6 }, c.prices).toFixed(3), '0.735');
  // Sabit sistem istemi Haiku 5.5'in en küçük önbellek boyunun (512 token) üstünde.
  assert.ok(estTokens(SYSTEM_PROMPT) > 900, `sistem istemi ~${estTokens(SYSTEM_PROMPT)} token`);
});

test('istek: Haiku, düşük efor, küçük max_tokens, JSON şeması, önbellekli sabit sistem, sıcaklık yok', async () => {
  const tr = mockTransport({ latency: 0 });
  const client = makeClient(tr);
  const res = await client.turn({ system: 'S', user: '<task>\nNIGHT 1. pick (allowed: Ali)\n</task>', deadline: Date.now() + 5000, ledger: client.ledger(), botId: 'b' });
  assert.equal(res.ok, true);
  assert.equal(res.data.target, 'Ali');
  const p = tr.calls[0].params;
  assert.equal(p.model, 'claude-haiku-5-5');
  assert.equal(p.max_tokens, 4096);
  assert.deepEqual(p.output_config.effort, 'medium');
  assert.equal(p.output_config.format.type, 'json_schema');
  assert.equal(p.output_config.format.schema.additionalProperties, false);
  assert.deepEqual(p.system[0].cache_control, { type: 'ephemeral' });
  assert.equal(p.temperature, undefined);
  assert.equal(p.thinking, undefined);
  assert.equal(p.messages.at(-1).role, 'user', 'önceden doldurma (prefill) yok');
});

for (const [mode, reason] of [['error', 'error'], ['refusal', 'refusal'], ['max_tokens', 'max_tokens'], ['malformed', 'malformed']]) {
  test(`yedek yol: ${mode} → { ok:false, reason:${reason} } (fırlatmaz)`, async () => {
    const client = makeClient(mockTransport({ latency: 0, mode }));
    const ledger = client.ledger();
    const res = await client.turn({ system: 'S', user: 'U', deadline: Date.now() + 5000, ledger, botId: 'b' });
    assert.deepEqual(res, { ok: false, reason });
    assert.equal(ledger.failures[reason], 1);
    assert.equal(client.stats().failures[reason], 1);
  });
}

test('zaman aşımı: yanıt gelmezse son tarihte iptal edilir ve zaman aşımı döner', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const client = makeClient(mockTransport({ mode: 'hang' }));
  let res = null;
  client.turn({ system: 'S', user: 'U', deadline: Date.now() + 3000 }).then((r) => { res = r; });
  await advance(t, 2900);
  assert.equal(res, null);
  await advance(t, 200);
  assert.deepEqual(res, { ok: false, reason: 'timeout' });
  // Son tarih çok yakınsa hiç çağrılmaz.
  assert.deepEqual(await client.turn({ system: 'S', user: 'U', deadline: Date.now() + 300 }), { ok: false, reason: 'late' });
});

test('bütçeler: bot başına, oyun başına ve günlük çağrı sınırı; gün değişince günlük sayaç sıfırlanır', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const client = makeClient(mockTransport({ latency: 0 }), { AI_BOT_CALL_LIMIT: '2', AI_GAME_CALL_LIMIT: '3', AI_DAILY_CALL_LIMIT: '4' });
  const ledger = client.ledger();
  const call = async (botId, l = ledger) => {
    let out = null;
    client.turn({ system: 'S', user: 'U', deadline: Date.now() + 5000, ledger: l, botId }).then((r) => { out = r; });
    for (let i = 0; i < 10 && !out; i++) { await flush(); t.mock.timers.tick(10); }
    return out;
  };
  assert.equal((await call('a')).ok, true);
  assert.equal((await call('a')).ok, true);
  assert.equal((await call('a')).reason, 'game_budget', 'bot sınırı');
  assert.equal((await call('b')).ok, true);
  assert.equal((await call('c')).reason, 'game_budget', 'oyun sınırı');
  const other = client.ledger();
  assert.equal((await call('x', other)).ok, true);
  assert.equal((await call('y', other)).reason, 'daily_budget');
  assert.equal(client.hasBudget(), false);
  t.mock.timers.tick(24 * 3600 * 1000);
  assert.equal(client.hasBudget(), true);
  // Kullanım muhasebesi: yanıtların usage alanından.
  const s = ledger.summary();
  assert.equal(s.calls, 3);
  assert.ok(s.input_tokens > 0 && s.output_tokens > 0 && s.costUsd > 0);
});

test('eşzamanlılık: sınır doluysa sıraya girer; son tarihe kadar yer açılmazsa "busy"', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const client = makeClient(mockTransport({ latency: 2000 }), { AI_CONCURRENCY: '1' });
  const results = [];
  client.turn({ system: 'S', user: 'U', deadline: Date.now() + 5000 }).then((r) => results.push(['a', r.ok]));
  client.turn({ system: 'S', user: 'U', deadline: Date.now() + 5000 }).then((r) => results.push(['b', r.ok]));
  client.turn({ system: 'S', user: 'U', deadline: Date.now() + 2500 }).then((r) => results.push(['c', r.reason]));
  await advance(t, 4500);
  assert.equal(client.active <= 1, true);
  await advance(t, 1000);
  assert.deepEqual(results.sort(), [['a', true], ['b', true], ['c', 'busy']]);
});

test('kimlik doğrulama hatası: özellik bir süre duraklar, içerik loglanmaz', async () => {
  const warns = [];
  const transport = () => Promise.reject(Object.assign(new Error('gizli içerik'), { status: 401 }));
  const client = makeClient(transport);
  client.logger = { log() {}, warn: (m) => warns.push(m) };
  assert.equal((await client.turn({ system: 'S', user: 'U', deadline: Date.now() + 5000 })).reason, 'auth');
  assert.equal((await client.turn({ system: 'S', user: 'U', deadline: Date.now() + 5000 })).reason, 'paused');
  assert.equal(client.hasBudget(), false);
  assert.ok(warns.every((w) => !w.includes('gizli') && !w.includes('U')));
  await flush();
});

// Robot gibi konuşan kalıplar kodda süzülür; dürüst "botum" cevabı geçer; kişilikler yazı imzası taşır.
test('manners: robot kalıpları süzülür, dürüst bot itirafı geçer; kişiliklerin yazı imzası var', () => {
  const { cleanBotLine } = require('../lib/manners');
  const { PERSONAS } = require('../lib/ai/personas');
  assert.equal(cleanBotLine('Kesinlikle, ali yalan söylüyor'), 'ali yalan söylüyor');
  assert.equal(cleanBotLine('Bir köylü olarak, bence uyuyalım'), 'bence uyuyalım');
  assert.equal(cleanBotLine('Analizlerime göre deniz şüpheli'), '');
  assert.equal(cleanBotLine('Özetlemek gerekirse herkes sessiz'), '');
  assert.equal(cleanBotLine('Evet ben bir botum, yapay zeka'), 'Evet ben bir botum, yapay zeka');
  assert.equal(cleanBotLine('leave empty.'), '', 'görev talimatı sohbete sızmaz');
  assert.equal(cleanBotLine('Nothing to do tonight'), '');
  assert.equal(PERSONAS.length, 12);
  for (const p of PERSONAS) assert.match(p, /Writing:/, p);
});

// Rol çağrısı: "Gözcü gözlem yaptı mı?" gibi sorular o rolü çağırır; sıradan cümleler çağırmaz.
test('rolecall: rol adı + soru/bilgi isteği o rolü çağırır', () => {
  const { rolesCalled } = require('../lib/ai/rolecall');
  assert.deepEqual([...rolesCalled('Gözcü bir gözleme yaptı mı')], ['gozcu']);
  assert.deepEqual([...rolesCalled('Doktor kendisi mi korudu ve saldırı oldu mu')], ['doktor']);
  assert.deepEqual([...rolesCalled('kahin varsa bilgi versin')], ['kahin']);
  assert.deepEqual([...rolesCalled('Gözcü kim? Kahin kim?')].sort(), ['gozcu', 'kahin']);
  assert.equal(rolesCalled('ben doktorum, asmayın').size, 0);
  assert.equal(rolesCalled('bence uyuyalım').size, 0);
  assert.equal(rolesCalled('').size, 0);
});

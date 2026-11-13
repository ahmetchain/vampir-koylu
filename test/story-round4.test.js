'use strict';

// Hikâye motoru, 4. tur: köy olayları, mahkeme, sis (gizli oy), Gardiyan, kilidin gizliliği.
const test = require('node:test');
const assert = require('node:assert/strict');
const { createChronicle, EVENT_IDS, EVENT_FACT } = require('../lib/story');
const { E, SCENARIO_EVENTS, EPI_EVENTS } = require('../lib/story/events');
const { SCENARIOS } = require('../lib/story/scenarios');
const { JOBS } = require('../lib/story/jobs');
const { render, tokensOf, MAX_STORY } = require('../lib/story/engine');
const { makeScript, runScript } = require('../lib/story/sim');

const lower = (s) => String(s).toLocaleLowerCase('tr');
const SCENE_SIGS = [/darağac|ilmi[kğ]|urgan|halat/, /sürgün|sürül|kovul|köy kapısı/, /mahzen|kilit|zindan|anahtar/,
  /boyn|(^|[^a-zçğıöşü])diş|ısır/, /yarasa|kanat/, /kaybol|ortad[ae]n|iz bırak|izsiz|buharlaş|sırra kadem/, /zehir|zehr|şişe|iksir/];

const BASE = ['r', 'rw', 'rord', 'Rord', 'alive', 'alivew', 'Alivew'];
const A = ['a', 'aj', 'ajob', 'Ajob', 'ajobs', 'atool', 'aplace'];
const B = ['b', 'bj', 'bjob', 'bjobs', 'btool', 'bplace'];
function allowedFor(key) {
  if (key.startsWith('event.') || key.startsWith('eventEnd.') || key === 'trial.nohang') return BASE;
  if (key === 'trial.start') return [...BASE, ...A, ...B];
  if (key.startsWith('trial.defense.')) return [...BASE, ...A];
  if (key === 'trial.verdict') return [...BASE, ...A, 'n', 'nw', 'Nw'];
  if (key.endsWith('.gardiyan')) return [...BASE, ...A];
  if (key === 'epi.events') return [...BASE, 'list'];
  return null;
}

function newTemplates() {
  const out = [];
  for (const [key, list] of Object.entries({ ...E, ...EPI_EVENTS })) for (const tpl of list) out.push({ key, tpl });
  for (const [sid, pools] of Object.entries(SCENARIO_EVENTS)) {
    assert.ok(SCENARIOS.some((s) => s.id === sid), `bilinmeyen senaryo ${sid}`);
    for (const [key, list] of Object.entries(pools)) {
      assert.ok(E[key], `senaryo anahtarının genel karşılığı yok: ${sid}.${key}`);
      for (const tpl of list) out.push({ key, tpl });
    }
  }
  return out;
}

test('yeni şablonların hepsi kendi değişkenleriyle eksiksiz dolar ve sınıra sığar', () => {
  const long = JOBS.reduce((x, y) => (y.noun.length > x.noun.length ? y : x));
  const names = [['Ahmet', 'Ayşe'], ['Xyzqwrtplmnbvcxz', 'Brrrrrrrrrrrrrrr'], ['Ali99', 'Şule Nur'], ['ALI', 'Max']];
  const temps = newTemplates();
  assert.ok(temps.length >= 90, `${temps.length}`);
  for (const { key, tpl } of temps) {
    const allowed = allowedFor(key);
    assert.ok(allowed, `havuz listesi yok: ${key}`);
    for (const { key: k } of tokensOf(tpl)) assert.ok(allowed.includes(k), `${key}: izinsiz {${k}} -> ${tpl}`);
    for (const [n1, n2] of names) {
      for (const job of [long, null]) {
        const ctx = {
          persons: { a: { name: n1, job }, b: { name: n2, job } },
          list: [{ name: 'bir tipi', generic: true }, { name: 'bir sis günü', generic: true }, { name: 'bir mahkeme', generic: true }],
          vars: { r: 7, rw: 'yedi', rord: 'yedinci', Rord: 'Yedinci', alive: 9, alivew: 'dokuz', Alivew: 'Dokuz', n: 3, nw: 'üç', Nw: 'Üç' },
          jobRate: 1,
        };
        const out = render(tpl, ctx, () => 0.1);
        assert.equal(typeof out, 'string', `${key}: ${tpl}`);
        assert.ok(!/[{}]|undefined|NaN|null/.test(out), out);
        assert.ok(out.length <= MAX_STORY, `${key}: ${out.length} -> ${out}`);
      }
    }
  }
  for (const id of EVENT_IDS) {
    assert.ok(E[`event.${id}`].length >= 5, id);
    if (id !== 'mahkeme') assert.ok(E[`eventEnd.${id}`].length >= 3, id);
    assert.ok(EVENT_FACT[id].title && EVENT_FACT[id].text, id);
  }
});

test('savunma satırları tarafsız; rol ve coda satırları sahne kelimesi içermez; olay satırları rol adı içermez', () => {
  const loaded = /terl|kekele|titre|yalan|masum|suçlu|kurnaz|gergin|sinsi|ikna|şüpheli|ter |sapsarı|gözlerini kaçır|inandır|samimi|dürüst/;
  for (const key of ['trial.defense.first', 'trial.defense.second', 'trial.start']) {
    for (const tpl of E[key]) assert.equal(lower(tpl).match(loaded), null, `${key}: ${tpl}`);
  }
  for (const key of ['trial.verdict', 'death.role.gardiyan', 'hanged.role.gardiyan']) {
    for (const tpl of E[key]) for (const sig of SCENE_SIGS) assert.ok(!sig.test(lower(tpl)), `${key}: ${tpl}`);
  }
  const roleWords = /(^|[^a-zçğıöşü])(doktor|kahin|gözcü|gardiyan|cadı|muhtar|soytarı|iftiracı|köylü|avcı)/;
  const all = [...newTemplates(), ...EVENT_IDS.map((id) => ({ key: id, tpl: `${EVENT_FACT[id].title} ${EVENT_FACT[id].text}` }))];
  for (const { key, tpl } of all) {
    if (key.includes('.gardiyan')) continue;
    assert.equal(lower(tpl).match(roleWords), null, `${key}: ${tpl}`);
  }
  // Kilit gizli: gece/sabah/olay satırlarında kilide değinen söz yok.
  for (const { key, tpl } of newTemplates()) {
    if (key.includes('.gardiyan')) continue;
    assert.ok(!/kilit/.test(lower(tpl)), `${key}: ${tpl}`);
  }
});

test('olay duyurusu ve kapanış satırı: doğru zamanda, her senaryoda', () => {
  for (const s of SCENARIOS) {
    for (const id of EVENT_IDS) {
      const players = Array.from({ length: 8 }, (_, i) => ({ id: `p${i}`, name: `Oyuncu${i}` }));
      const c = createChronicle({ seed: `${s.id}-${id}`, scenario: s.id, players, revealRoles: true });
      c.start();
      const night = id === 'tipi' || id === 'ruzgar' || id === 'kisa-gece';
      c.night({ round: 1 });
      if (night) {
        const ev = c.event({ round: 1, id });
        assert.equal(ev.title, EVENT_FACT[id].title);
        assert.equal(ev.text, EVENT_FACT[id].text);
        assert.ok(ev.story.length > 30 && ev.story.length <= MAX_STORY, ev.story);
        const dawn = c.dawn({ round: 1, deaths: [] });
        assert.ok(dawn.eventEnd.length > 10, `${s.id}/${id}: kapanış yok`);
        const day = c.day({ round: 1 });
        assert.ok(day.story);
        assert.equal(c.night({ round: 2 }).eventEnd, '');
      } else {
        assert.equal(c.dawn({ round: 1, deaths: [] }).eventEnd, '');
        c.day({ round: 1 });
        const ev = c.event({ round: 1, id });
        assert.equal(ev.title, EVENT_FACT[id].title);
        assert.ok(ev.story.length > 30, ev.story);
        c.noHang({ round: 1, reason: 'novote', ballots: [] });
        const n2 = c.night({ round: 2 });
        if (id === 'mahkeme') assert.equal(n2.eventEnd, '');
        else assert.ok(n2.eventEnd.length > 10, `${s.id}/${id}: kapanış yok`);
        assert.equal(c.dawn({ round: 2, deaths: [] }).eventEnd, '');
      }
    }
  }
});

test('mahkeme: açılış iki adı anar, savunmalar sırayla, karar mahkemeye göre anlatılır', () => {
  const players = [{ id: 'a', name: 'Burak' }, { id: 'b', name: 'Ece' }, { id: 'c', name: 'Xyz' }, { id: 'd', name: 'Ali' }, { id: 'e', name: 'Gül' }, { id: 'f', name: 'Can' }];
  for (let s = 0; s < 40; s++) {
    const c = createChronicle({ seed: `m${s}`, players, revealRoles: false });
    c.start(); c.night({ round: 1 }); c.dawn({ round: 1, deaths: [] }); c.day({ round: 1 });
    c.event({ round: 1, id: 'mahkeme' });
    const t = c.trial({ round: 1, defendants: ['a', 'c'] });
    assert.equal(t.text, 'Burak ile Xyz savunma yapacak; ardından köy yalnızca bu ikisi arasında oy verecek.');
    assert.ok(t.story.includes('Burak') && t.story.includes('Xyz'), t.story);
    const d1 = c.defense({ round: 1, id: 'a' });
    const d2 = c.defense({ round: 1, id: 'c' });
    assert.equal(d1.text, "Söz Burak'ta.");
    assert.equal(d2.text, 'Söz Xyz adlı komşuda.');
    assert.ok(d1.story.includes('Burak') && d2.story.includes('Xyz'));
    assert.notEqual(d1.story, d2.story);
    const ballots = [{ voter: 'b', target: 'a' }, { voter: 'd', target: 'a' }, { voter: 'e', target: 'c' }, { voter: 'f', target: 'a' }];
    if (s % 2) {
      const h = c.hanged({ round: 1, id: 'a', votes: 3, role: 'vampir', ballots, trial: true });
      assert.equal(h.text.includes('Rolü'), false);
      assert.ok(h.story.length > 20);
    } else {
      const n = c.noHang({ round: 1, reason: 'tie', ballots: ballots.slice(0, 2).concat([{ voter: 'e', target: 'c' }, { voter: 'f', target: 'c' }]), trial: true });
      assert.ok(n.story.length > 20);
    }
  }
});

// ---------- simüle oyunlar (olaylar sık) ----------
function play(seed, opts, script) {
  const g = makeScript(seed, { events: 'often', ...opts });
  const chron = createChronicle({ seed: `r4-${seed}`, players: g.players, revealRoles: g.revealRoles });
  const outputs = [];
  for (const step of script || g.script) {
    const out = chron[step.m](step.input);
    outputs.push({ m: step.m, input: step.input, out, fact: step.m === 'day' ? chron._core.lastRumorFact : undefined });
  }
  return { g, chron, outputs, epilogue: chron.epilogue() };
}

const SEEDS = Array.from({ length: 200 }, (_, i) => i);

test('olaylı oyunlar: aynı tohum aynı hikâye, oyun içinde tekrar yok, anlatı hiç boş değil', () => {
  let events = 0;
  let trials = 0;
  for (const s of SEEDS) {
    const a = play(s);
    const b = play(s);
    assert.deepEqual(JSON.parse(JSON.stringify(b.outputs.map((o) => o.out))), JSON.parse(JSON.stringify(a.outputs.map((o) => o.out))));
    assert.deepEqual(a.epilogue, b.epilogue);
    const seen = new Set();
    for (const { m, out } of a.outputs) {
      if (!out) continue;
      if (m === 'event') events++;
      if (m === 'trial') trials++;
      assert.ok(out.story.length > 0 && out.story.length <= MAX_STORY, `${m}: ${out.story}`);
      for (const t of [out.story, out.eventEnd, out.rumor && out.rumor.text].filter(Boolean)) {
        assert.ok(!seen.has(t), `tekrar (${s}): ${t}`);
        seen.add(t);
      }
    }
  }
  assert.ok(events > 300 && trials > 20, `olay ${events}, mahkeme ${trials}`);
});

// Kilit, kilidi zorlayanlar, Gardiyanın seçimi gibi gizli alanlar her girdiye eklense bile çıktı değişmez.
function withSecrets(script) {
  const secret = { locked: 'p1', lockedId: 'p2', lock: { id: 'p3', by: 'p4' }, gardiyan: 'p4', lockAttempts: 3, attempts: 2, visitors: ['p5'], framer: 'p6', protectedId: 'p7' };
  return script.map((step) => {
    if (step.m === 'chat') return step;
    const input = { ...step.input, ...secret };
    if (step.m === 'dawn') input.deaths = step.input.deaths.map((d) => ({ ...d, locked: true, by: 'p4' }));
    return { m: step.m, input };
  });
}

test('kilit gizli: gizli alanlar eklense de anlatı birebir aynı (kimse ölmeyen sabah dahil)', () => {
  for (const s of SEEDS.slice(0, 120)) {
    const base = play(`kilit${s}`);
    const sec = play(`kilit${s}`, {}, withSecrets(base.g.script));
    assert.deepEqual(JSON.parse(JSON.stringify(sec.outputs.map((o) => o.out))), JSON.parse(JSON.stringify(base.outputs.map((o) => o.out))));
    assert.deepEqual(sec.epilogue, base.epilogue);
  }
});

// Sis gününde oy verenlerin kimliği karıştırılır (her hedefin ağırlıklı oy sayısı aynı kalır).
function scrambleSis(script, seed) {
  let k = seed * 31 + 7;
  const rnd = () => { k = (k * 1103515245 + 12345) % 2147483648; return k / 2147483648; };
  let sisRound = null;
  let round = 0;
  return script.map((step) => {
    if (step.m === 'night') round = step.input.round;
    if (step.m === 'event' && step.input.id === 'sis') sisRound = step.input.round;
    if (step.m === 'day') round = step.input.round;
    const isSis = sisRound !== null && round === sisRound;
    if (!isSis) return step;
    if (step.m === 'vote') return { m: 'vote', input: { ...step.input, voter: `p${Math.floor(rnd() * 20)}`, msLeft: Math.floor(rnd() * 99999) } };
    if (['hanged', 'noHang', 'sleep'].includes(step.m) && step.input.ballots) {
      const voters = step.input.ballots.map((b) => b.voter);
      for (let i = voters.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [voters[i], voters[j]] = [voters[j], voters[i]]; }
      return { m: step.m, input: { ...step.input, ballots: step.input.ballots.map((b, i) => ({ ...b, voter: voters[i] })) } };
    }
    return step;
  });
}

test('sis: o günün oyları kimseyle ilişkilendirilmez (karıştırılmış pusulalarla çıktı aynı, dedikodu yok)', () => {
  let sisDays = 0;
  for (const s of SEEDS) {
    const base = play(`sis${s}`);
    if (!base.g.script.some((x) => x.m === 'event' && x.input.id === 'sis')) continue;
    sisDays++;
    const mixed = play(`sis${s}`, {}, scrambleSis(base.g.script, s));
    assert.deepEqual(JSON.parse(JSON.stringify(mixed.outputs.map((o) => o.out))), JSON.parse(JSON.stringify(base.outputs.map((o) => o.out))));
    // Sis gününden sonra: o güne ait oy dedikodusu yok; günler arası oy dedikoduları da yok.
    const sisRounds = new Set(base.g.script.filter((x) => x.m === 'event' && x.input.id === 'sis').map((x) => x.input.round));
    const trialRounds = new Set(base.g.script.filter((x) => x.m === 'trial').map((x) => x.input.round));
    let partialSeen = false;
    for (const { m, input, fact } of base.outputs) {
      if (m !== 'day') continue;
      const d = input.round - 1;
      if (sisRounds.has(d) || trialRounds.has(d)) partialSeen = partialSeen || true;
      if (!fact) continue;
      if (fact.fact && fact.fact.day !== undefined && sisRounds.has(fact.fact.day)) {
        assert.ok(['silent', 'chatty'].includes(fact.family), `sis gününden oy dedikodusu: ${fact.family}`);
      }
      if (fact.fact && fact.fact.day !== undefined && trialRounds.has(fact.fact.day)) {
        assert.ok(['closeCall', 'tie', 'votedThenDied', 'bandwagon', 'bandwagonEvil', 'bandwagonInnocent', 'silent', 'chatty'].includes(fact.family), fact.family);
      }
      if (fact.family === 'consistent') for (const r of fact.fact.days) assert.ok(!sisRounds.has(r) && !trialRounds.has(r));
      const anyPartialBefore = [...sisRounds, ...trialRounds].some((r) => r < input.round);
      if (anyPartialBefore) assert.ok(!['abstainAll', 'heat', 'untouched', 'pair'].includes(fact.family), fact.family);
    }
    void partialSeen;
  }
  assert.ok(sisDays > 30, `sis günü olan oyun ${sisDays}`);
});

test('Gardiyan: rol açıkken tepki (rol ya da meslek), gizliyken hiç anılmaz; geç fonksiyonlar çökmez', () => {
  const players = Array.from({ length: 7 }, (_, i) => ({ id: `p${i}`, name: ['Burak', 'Ece', 'Xyz', 'Ali', 'Gül', 'Can', 'Oğuz'][i] }));
  let reacted = 0;
  for (let s = 0; s < 60; s++) {
    for (const revealRoles of [true, false]) {
      const c = createChronicle({ seed: `g${s}`, players, revealRoles });
      c.start(); c.night({ round: 1 });
      const d = c.dawn({ round: 1, deaths: [{ id: 'p1', cause: 'vampir', role: 'gardiyan' }] });
      c.day({ round: 1 });
      const h = c.hanged({ round: 1, id: 'p2', votes: 3, role: 'gardiyan', ballots: [] });
      for (const out of [d, h]) {
        if (revealRoles) {
          assert.ok(out.text.includes('Rolü: Gardiyan.'), out.text);
          if (/gardiyan/i.test(out.story) || JOBS.some((j) => j.innocent.some((l) => out.story.includes(l)))) reacted++;
        } else {
          assert.ok(!/gardiyan/i.test(out.text + out.story), out.story);
        }
      }
      c.win({ winner: 'koylu', winners: [], roles: { p0: 'vampir', p1: 'gardiyan', p2: 'gardiyan' } });
      assert.ok(c.epilogue().story.length > 40);
    }
  }
  assert.ok(reacted >= 100, `tepki ${reacted}/120`);

  const c = createChronicle({ seed: 1, players });
  for (const m of ['event', 'trial', 'defense']) {
    for (const j of [undefined, null, {}, { id: 'dolunay' }, { id: 5 }, { defendants: 'x' }, { defendants: ['p0'] }, { defendants: [null, {}, 'p0', 'p0'] }, { id: 'yok', round: 'x' }]) {
      const out = c[m](j);
      assert.equal(typeof out.title, 'string');
      assert.equal(typeof out.text, 'string');
      assert.equal(typeof out.story, 'string');
    }
  }
  assert.equal(c.event({ id: 'dolunay' }).title, 'Köy olayı');
});

test('roller gizli + olaylar: rol adı geçmez (Gardiyan dahil), roller karıştırılsa da aynı', () => {
  const words = ['doktor', 'kahin', 'gözcü', 'gardiyan', 'cadı', 'muhtar', 'soytarı', 'iftiracı', 'köylü'];
  const ROLES = ['vampir', 'iftiraci', 'doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'koylu'];
  for (const s of SEEDS.slice(0, 100)) {
    const g = makeScript(`gz${s}`, { revealRoles: false, events: 'often' });
    const a = runScript(createChronicle({ seed: `x${s}`, players: g.players, revealRoles: false }), g.script);
    let k = s;
    const mixed = g.script.map((st) => {
      if (!['dawn', 'hanged', 'shot', 'left'].includes(st.m)) return st;
      const next = () => ROLES[(k = (k * 7 + 3) % 1000) % ROLES.length];
      const input = { ...st.input };
      if (st.m === 'dawn') input.deaths = input.deaths.map((d) => ({ ...d, role: next() }));
      else if (input.role !== 'soytari') input.role = next();
      return { m: st.m, input };
    });
    const b = runScript(createChronicle({ seed: `x${s}`, players: g.players, revealRoles: false }), mixed);
    for (let i = 0; i < a.length; i++) {
      if (a[i].m === 'win') break;
      assert.deepEqual(b[i].out, a[i].out);
      const out = a[i].out;
      if (!out || (a[i].m === 'hanged' && a[i].input.role === 'soytari')) continue;
      const all = lower(`${out.text} ${out.story} ${out.eventEnd || ''} ${out.rumor ? out.rumor.text : ''}`);
      for (const w of words) assert.ok(!new RegExp(`(^|[^a-zçğıöşü])${w}`).test(all), `${a[i].m}: ${w} -> ${all}`);
    }
  }
});

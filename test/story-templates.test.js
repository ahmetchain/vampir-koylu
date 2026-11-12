'use strict';

// Hikâye motoru: bütün şablonlar tek tek (örnekleme değil) denetlenir.
const test = require('node:test');
const assert = require('node:assert/strict');
const { T, EPI } = require('../lib/story/texts');
const { R } = require('../lib/story/rumors');
const { SCENARIOS } = require('../lib/story/scenarios');
const { JOBS, FORBIDDEN_JOB_WORDS } = require('../lib/story/jobs');
const { render, tokensOf, MAX_STORY } = require('../lib/story/engine');
const { assignJobs } = require('../lib/story');

const lower = (s) => s.toLocaleLowerCase('tr');

// Motorun her havuza verdiği değişkenler (index.js ile aynı olmalı).
const BASE = ['r', 'rw', 'rord', 'Rord', 'alive', 'alivew', 'Alivew'];
const A = ['a', 'aj', 'ajob', 'Ajob', 'ajobs', 'atool', 'aplace'];
const B = ['b', 'bj', 'bjob', 'bjobs', 'btool', 'bplace'];
const N = ['n', 'nw', 'Nw'];
function allowedFor(key) {
  if (/^death\.(bite|bats|vanish|poison)$/.test(key)) return [...BASE, ...A];
  if (key.startsWith('death.double.')) return [...BASE, ...A, ...B];
  if (key.startsWith('death.')) return [...BASE];
  if (key.startsWith('safe.') || key.startsWith('sleep.')) return [...BASE, 'streakw'];
  if (key.startsWith('night.') || key.startsWith('day.') || key === 'intro') return BASE;
  if (/^hanged\.(gallows|exile|cellar|close|landslide)$/.test(key)) return [...BASE, ...A, ...N];
  if (key === 'hanged.streakInnocent') return [...BASE, 'streakw'];
  if (key.startsWith('hanged.')) return [...BASE];
  if (key === 'job.soytari') return [...BASE, ...A];
  if (key === 'nohang.tie') return [...BASE, 'list'];
  if (key.startsWith('nohang.')) return BASE;
  if (key.startsWith('hunter.') || key === 'shot.anon' || key === 'nohunt.any') return [...BASE, ...A];
  if (key === 'shot.any') return [...BASE, ...A, ...B];
  if (key === 'left.any' || key === 'left.role.vampir') return [...BASE, ...A];
  if (key === 'left.role') return [...BASE, ...A, 'role', 'Role'];
  if (key.startsWith('win.')) return BASE;
  if (key.startsWith('rumor.')) return [...BASE, ...A, ...B, 'c', ...N];
  if (key === 'epi.open') return [...BASE, 'nights', 'nightsw'];
  if (key.startsWith('epi.first.') || key === 'epi.iftiraci' || key === 'epi.end.soytari') return [...BASE, ...A];
  if (key === 'epi.shot') return [...BASE, ...A, ...B];
  if (['epi.elims.some', 'epi.poison', 'epi.left', 'epi.mask', 'epi.mask.one', 'epi.survivors'].includes(key)) return [...BASE, 'list'];
  if (key.startsWith('epi.')) return [...BASE, ...N];
  return null;
}

// Senaryo anahtarı -> hangi genel havuzun değişkenleriyle doldurulduğu.
const SCEN_KEY = {
  intro: 'intro', night: 'night.mid', safe: 'safe.mid', 'death.coda': 'death.coda.mid', day: 'day.mid',
  'hanged.coda': 'hanged.coda.mid', sleep: 'sleep.any', nohang: 'nohang.novote', 'win.koylu': 'win.koylu',
  'win.vampir': 'win.vampir', 'win.soytari': 'win.soytari', rumor: 'rumor.atmo', 'epi.open': 'epi.open',
};

function allTemplates() {
  const out = [];
  for (const [key, list] of Object.entries({ ...T, ...EPI, ...R })) for (const tpl of list) out.push({ key, tpl, src: 'genel' });
  for (const s of SCENARIOS) {
    for (const [skey, val] of Object.entries(s)) {
      if (!Array.isArray(val)) continue;
      assert.ok(SCEN_KEY[skey], `bilinmeyen senaryo anahtarı ${s.id}.${skey}`);
      for (const tpl of val) out.push({ key: SCEN_KEY[skey], tpl, src: s.id });
    }
  }
  return out;
}

// En uzun meslek, en kötü (yedek kalıplı) ve tuhaf adlarla doldurur.
const LONG_JOB = JOBS.reduce((x, y) => (y.noun.length + y.place.length > x.noun.length + x.place.length ? y : x));
const NAME_SETS = [
  ['Ahmet', 'Ayşe', 'Burak'],
  ['Xyzqwrtplmnbvcxz', 'Brrrrrrrrrrrrrrr', 'Mmmmmmmmmmmmmmmm'], // 16 karakter, ünlüsüz: "adlı komşu" kalıbı
  ['Ali99', 'R2D2', 'Şule Nur'],
  ['ALI', 'Max', 'José'],
];
function fullCtx(names, job) {
  const person = (name) => ({ name, job });
  return {
    persons: { a: person(names[0]), b: person(names[1]), c: person(names[2]) },
    list: names.map(person),
    vars: {
      r: 12, rw: 'on iki', rord: 'on ikinci', alive: 17, alivew: 'on yedi', n: 17, nw: 'on yedi', Nw: 'On yedi',
      streakw: 'üç', nights: 12, nightsw: 'on iki', role: 'iftiracı', Role: 'İftiracı',
    },
    jobRate: 1,
  };
}

const SIG = {
  gallows: /darağac|ilmi[kğ]|urgan|halat/,
  exile: /sürgün|sürül|kovul|köy kapısı/,
  cellar: /mahzen|kilit|zindan|anahtar/,
  bite: /boyn|(^|[^a-zçğıöşü])diş|ısır/,
  bats: /yarasa|kanat/,
  vanish: /kaybol|ortad[ae]n|iz bırak|izsiz|buharlaş|sırra kadem/,
  poison: /zehir|zehr|şişe|iksir/,
};
const SCENE_SIGS = Object.values(SIG);

test('her şablon yalnızca kendi havuzunun değişkenlerini kullanır ve eksiksiz dolar', () => {
  const temps = allTemplates();
  assert.ok(temps.length > 450, `şablon sayısı ${temps.length}`);
  for (const { key, tpl, src } of temps) {
    const allowed = allowedFor(key);
    assert.ok(allowed, `havuz değişken listesi yok: ${key}`);
    for (const { key: k } of tokensOf(tpl)) assert.ok(allowed.includes(k), `${src}/${key}: izinsiz {${k}} -> ${tpl}`);
    // Yer tutucu dışında süslü parantez olmamalı.
    assert.equal(tpl.replace(/\{[A-Za-z]+(\|[a-z]+)?\}/g, '').match(/[{}]/), null, `${key}: bozuk parantez ${tpl}`);
    for (const names of NAME_SETS) {
      for (const job of [LONG_JOB, null]) {
        const needsJob = tokensOf(tpl).some(({ key: k }) => /^[abc](j|job|jobs|tool|place)$/i.test(k));
        if (!job && needsJob) continue;
        let i = 0;
        const out = render(tpl, fullCtx(names, job), () => (i++ % 2 ? 0.9 : 0.1));
        assert.equal(typeof out, 'string', `${key}: doldurulamadı ${tpl}`);
        assert.ok(!/[{}]|undefined|NaN|null|\[object/.test(out), `${key}: çözülmemiş -> ${out}`);
        const limit = key.startsWith('epi.') ? 400 : MAX_STORY;
        assert.ok(out.length <= limit, `${key}: ${out.length} karakter -> ${out}`);
      }
    }
  }
});

test('ad geçen şablonlar cinsiyet varsaymaz', () => {
  const gendered = /\b(adam|kadın|kız|oğlan|hanım|bey|abla|ağabey|amca|teyze|dayı|karısı|kocası|anne|baba)\b/;
  for (const { key, tpl } of allTemplates()) {
    if (!/\{[ab]/.test(tpl)) continue;
    assert.equal(lower(tpl).match(gendered), null, `${key}: ${tpl}`);
  }
});

test('sahne havuzları kendi sahnesini anlatır, başka sahnenin kelimesini içermez', () => {
  const kinds = { hanged: ['gallows', 'exile', 'cellar'], death: ['bite', 'bats', 'vanish', 'poison'] };
  for (const [kind, scenes] of Object.entries(kinds)) {
    for (const scene of scenes) {
      for (const tpl of T[`${kind}.${scene}`]) {
        const t = lower(tpl);
        assert.ok(SIG[scene].test(t), `${scene} imzası yok: ${tpl}`);
        for (const other of scenes) if (other !== scene) assert.ok(!SIG[other].test(t), `${scene} içinde ${other}: ${tpl}`);
      }
    }
  }
  for (const scene of ['bite', 'bats', 'vanish']) {
    for (const tpl of T[`death.double.${scene}`]) {
      const t = lower(tpl);
      assert.ok(SIG[scene].test(t) && SIG.poison.test(t), tpl);
      for (const other of ['bite', 'bats', 'vanish']) if (other !== scene) assert.ok(!SIG[other].test(t), tpl);
    }
  }
});

test('ikinci cümleler (coda, rol tepkisi, meslek esprisi) hiçbir sahne kelimesi içermez', () => {
  const codaKeys = Object.keys(T).filter((k) => /coda|role|first|close|landslide|streak|job\./.test(k));
  const lines = codaKeys.flatMap((k) => T[k].map((tpl) => [k, tpl]));
  for (const s of SCENARIOS) for (const k of ['death.coda', 'hanged.coda']) for (const tpl of s[k]) lines.push([`${s.id}.${k}`, tpl]);
  for (const j of JOBS) for (const tpl of [...j.evil, ...j.innocent]) lines.push([`job.${j.id}`, tpl]);
  for (const [k, tpl] of lines) {
    const t = lower(tpl);
    for (const sig of SCENE_SIGS) assert.ok(!sig.test(t), `${k}: sahne kelimesi -> ${tpl}`);
  }
});

test('meslekler: en az 25, benzersiz, rol adlarıyla çakışmaz, her birinin espri satırları var', () => {
  assert.ok(JOBS.length >= 25);
  const ids = new Set(JOBS.map((j) => j.id));
  const labels = new Set(JOBS.map((j) => lower(j.label)));
  assert.equal(ids.size, JOBS.length);
  assert.equal(labels.size, JOBS.length);
  for (const j of JOBS) {
    assert.match(j.id, /^[a-z]+$/);
    for (const field of [j.label, j.noun, j.poss]) {
      for (const bad of FORBIDDEN_JOB_WORDS) assert.ok(!lower(field).includes(bad), `${j.id}: ${field} ~ ${bad}`);
    }
    assert.ok(j.evil.length >= 1 && j.innocent.length >= 1, j.id);
    for (const k of ['noun', 'poss', 'tool', 'place']) assert.ok(typeof j[k] === 'string' && j[k].length > 1, `${j.id}.${k}`);
    for (const line of [...j.evil, ...j.innocent]) {
      assert.ok(line.length <= 140, `${j.id}: ${line.length} -> ${line}`);
      assert.equal(line.match(/[{}]/), null);
    }
  }
});

test('meslek dağıtımı: 20 oyuncuya kadar oyun içinde benzersiz, tohuma göre sabit', () => {
  for (let s = 0; s < 300; s++) {
    const ids = Array.from({ length: 20 }, (_, i) => `p${i}`);
    const jobs = assignJobs(ids, `tohum${s}`);
    assert.equal(jobs.length, 20);
    assert.equal(new Set(jobs.map((j) => j.job.id)).size, 20);
    assert.deepEqual(assignJobs(ids, `tohum${s}`), jobs);
  }
  assert.deepEqual(assignJobs(null, 1), []);
  assert.equal(assignJobs(['a', 'a', 'b'], 1).length, 2);
});

test('hacim: olay ve katman başına yeterli çeşit', () => {
  const count = (keys, scenKey) => {
    const g = keys.reduce((s, k) => s + (T[k] || []).length, 0);
    const s = scenKey ? Math.min(...SCENARIOS.map((x) => (x[scenKey] || []).length)) : 0;
    return g + s;
  };
  for (const tier of ['early', 'mid', 'late']) {
    assert.ok(count([`night.${tier}`], 'night') >= 10, `night.${tier}`);
    assert.ok(count([`safe.${tier}`], 'safe') >= 8, `safe.${tier}`);
    assert.ok(count([`day.${tier}`], 'day') >= 8, `day.${tier}`);
    assert.ok(count([`death.coda.${tier}`], 'death.coda') >= 8, `death.coda.${tier}`);
    assert.ok(count([`hanged.coda.${tier}`], 'hanged.coda') >= 6, `hanged.coda.${tier}`);
  }
  for (const k of ['death.bite', 'death.bats', 'death.vanish', 'hanged.gallows', 'hanged.exile', 'hanged.cellar']) {
    assert.ok(T[k].length >= 9, k);
  }
  for (const k of ['death.poison', 'sleep.any', 'nohang.novote', 'hunter.any', 'shot.any', 'nohunt.any', 'left.any', 'win.koylu', 'win.vampir', 'win.soytari']) {
    assert.ok(T[k].length >= 5, k);
  }
  const rumors = Object.entries(R).reduce((s, [, l]) => s + l.length, 0) + SCENARIOS.reduce((s, x) => s + x.rumor.length, 0);
  assert.ok(rumors >= 40, `dedikodu ${rumors}`);
  assert.ok(SCENARIOS.length >= 5 && SCENARIOS.length <= 6);
});

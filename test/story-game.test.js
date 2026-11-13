'use strict';

// Hikâye motoru: simüle edilmiş oyunlar üzerinde davranış testleri.
const test = require('node:test');
const assert = require('node:assert/strict');
const { createChronicle, HANG_SCENES, BITE_SCENES } = require('../lib/story');
const { makeScript, runScript } = require('../lib/story/sim');
const { LATE_MS } = require('../lib/story/rumors');

const lower = (s) => String(s).toLocaleLowerCase('tr');
const SIG = {
  gallows: /darağac|ilmi[kğ]|urgan|halat/,
  exile: /sürgün|sürül|kovul|köy kapısı/,
  cellar: /mahzen|kilit|zindan|anahtar/,
  bite: /boyn|(^|[^a-zçğıöşü])diş|ısır/,
  bats: /yarasa|kanat/,
  vanish: /kaybol|ortad[ae]n|iz bırak|izsiz|buharlaş|sırra kadem/,
  poison: /zehir|zehr|şişe|iksir/,
};
const HANG_VERB = { gallows: 'oyla asıldı!', exile: 'oyla köyden sürüldü!', cellar: 'oyla mahzene kapatıldı!' };

function play(seed, opts = {}) {
  const g = makeScript(seed, opts);
  const chron = createChronicle({ seed: `oyun-${seed}`, players: g.players, revealRoles: g.revealRoles });
  const outputs = [];
  for (const step of g.script) {
    const out = chron[step.m](step.input);
    const rec = { m: step.m, input: step.input, out };
    if (step.m === 'day') rec.fact = chron._core.lastRumorFact;
    outputs.push(rec);
  }
  const epilogue = chron.epilogue();
  return { g, chron, outputs, epilogue };
}

const SEEDS = Array.from({ length: 250 }, (_, i) => i);

test('aynı tohum + aynı olaylar = aynı hikâye', () => {
  for (const s of SEEDS.slice(0, 60)) {
    const a = play(s);
    const b = play(s);
    assert.deepEqual(JSON.parse(JSON.stringify(b.outputs.map((o) => o.out))), JSON.parse(JSON.stringify(a.outputs.map((o) => o.out))));
    assert.deepEqual(b.epilogue, a.epilogue);
    assert.equal(a.chron.scenario.id, b.chron.scenario.id);
  }
  // Farklı tohum: farklı senaryo ya da en azından farklı metin.
  const x = play(1).outputs.map((o) => o.out && o.out.story).join('|');
  const g = makeScript(1);
  const other = createChronicle({ seed: 'baska', players: g.players, revealRoles: g.revealRoles });
  const y = runScript(other, g.script).map((o) => o.out && o.out.story).join('|');
  assert.notEqual(x, y);
});

test('bir oyun içinde hiçbir anlatı ya da dedikodu tekrar etmez; uzunluk sınırları', () => {
  let games = 0;
  let longGames = 0;
  for (const s of SEEDS) {
    const { outputs, epilogue, g } = play(s, { maxRounds: 12 });
    games++;
    if (g.script.filter((x) => x.m === 'night').length >= 6) longGames++;
    const seen = new Set();
    for (const { m, out } of outputs) {
      if (!out) continue;
      assert.equal(typeof out.title, 'string');
      assert.equal(typeof out.text, 'string');
      assert.ok(out.text.length > 0, `${m} boş metin`);
      assert.ok(out.story.length > 0, `${m}: anlatı boş (yedek satıra düşülmüş olabilir)`);
      assert.ok(out.story.length <= 220, `${m}: ${out.story.length} -> ${out.story}`);
      assert.ok(!/[{}]|undefined|NaN|null/.test(out.story + out.text), `${m}: ${out.story}`);
      if (out.story) {
        assert.ok(!seen.has(out.story), `tekrar (${s}): ${out.story}`);
        seen.add(out.story);
      }
      if (out.rumor) {
        assert.ok(out.rumor.text.length > 0 && out.rumor.text.length <= 220, out.rumor.text);
        assert.ok(!seen.has(out.rumor.text), `dedikodu tekrarı (${s}): ${out.rumor.text}`);
        seen.add(out.rumor.text);
      }
    }
    assert.ok(epilogue.story.length > 40 && epilogue.story.length <= 1400, epilogue.story);
    assert.ok(!/[{}]|undefined|NaN/.test(epilogue.story));
  }
  assert.ok(longGames > 20, `uzun oyun sayısı ${longGames}/${games}`);
});

test('12 turluk uzun oyunlarda da tekrar yok (20 oyuncu, gizli/açık roller)', () => {
  for (const s of SEEDS.slice(0, 80)) {
    for (const revealRoles of [true, false]) {
      const { outputs } = play(`uzun${s}`, { players: 20, maxRounds: 12, revealRoles });
      const stories = outputs.map((o) => o.out && o.out.story).filter(Boolean);
      assert.equal(new Set(stories).size, stories.length);
    }
  }
});

test('sahne seçimi metinle tutarlı', () => {
  let repeats = 0;
  let pairs = 0;
  for (const s of SEEDS) {
    const { outputs } = play(s);
    let last = null;
    for (const { m, input, out } of outputs) {
      if (m === 'hanged') {
        assert.ok(HANG_SCENES.includes(out.scene), out.scene);
        assert.ok(out.text.includes(HANG_VERB[out.scene]), `${out.scene}: ${out.text}`);
        const t = lower(out.story);
        assert.ok(SIG[out.scene].test(t), `${out.scene}: ${out.story}`);
        for (const other of HANG_SCENES) if (other !== out.scene) assert.ok(!SIG[other].test(t), `${out.scene}/${other}: ${out.story}`);
        assert.ok(out.log.includes(HANG_VERB[out.scene].replace('!', '.')), out.log);
        if (last) { pairs++; if (last === out.scene) repeats++; }
        last = out.scene;
      }
      if (m === 'dawn' && input.deaths.length) {
        assert.equal(out.targets.length, input.deaths.length);
        assert.equal(out.scene, out.targets[0].scene);
        const t = lower(out.story);
        const scenes = out.targets.map((x) => x.scene);
        for (const x of out.targets) {
          if (x.cause === 'zehir') assert.equal(x.scene, 'poison');
          else assert.ok(BITE_SCENES.includes(x.scene));
          assert.ok(SIG[x.scene].test(t), `${x.scene}: ${out.story}`);
        }
        for (const other of [...BITE_SCENES, 'poison']) if (!scenes.includes(other)) assert.ok(!SIG[other].test(t), `${scenes}/${other}: ${out.story}`);
      }
      if (m === 'shot') assert.equal(out.scene, 'arrow');
    }
  }
  assert.ok(pairs > 50 && repeats / pairs < 0.3, `ardışık aynı sahne oranı ${repeats}/${pairs}`);
});

// Gizli rollerde: olay girdilerindeki roller değiştirilse bile çıktı birebir aynı olmalı.
const ROLES = ['vampir', 'iftiraci', 'doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'koylu', 'soytari'];
function scramble(script, seed) {
  let k = seed * 7 + 3;
  const next = (list) => { k = (k * 1103515245 + 12345) % 2147483648; return list[k % list.length]; };
  return script.map((step) => {
    const input = step.input && typeof step.input === 'object' ? { ...step.input } : step.input;
    if (step.m === 'dawn') input.deaths = input.deaths.map((d) => ({ ...d, role: next(ROLES) }));
    if (step.m === 'hanged' && input.role !== 'soytari') input.role = next(ROLES.filter((r) => r !== 'soytari'));
    if (step.m === 'shot' || step.m === 'left') input.role = next(ROLES);
    return { m: step.m, input };
  });
}

test('roller gizliyken anlatı rollerden etkilenmez ve rol adı geçmez', () => {
  const words = ['doktor', 'kahin', 'gözcü', 'gardiyan', 'cadı', 'muhtar', 'soytarı', 'iftiracı', 'köylü'];
  for (const s of SEEDS.slice(0, 150)) {
    const g = makeScript(`gizli${s}`, { revealRoles: false });
    const a = createChronicle({ seed: `g${s}`, players: g.players, revealRoles: false });
    const b = createChronicle({ seed: `g${s}`, players: g.players, revealRoles: false });
    const outA = runScript(a, g.script);
    const outB = runScript(b, scramble(g.script, s));
    for (let i = 0; i < outA.length; i++) {
      const { m, input, out } = outA[i];
      if (m === 'win') break; // oyun sonunda bütün roller zaten açık
      assert.deepEqual(outB[i].out, out, `${m} farklı`);
      if (!out) continue;
      const all = lower(`${out.title} ${out.text} ${out.story} ${out.rumor ? out.rumor.text : ''}`);
      if (m === 'hanged' && input.role === 'soytari') continue; // asılan soytarı her zaman açıklanır
      for (const w of words) assert.ok(!new RegExp(`(^|[^a-zçğıöşü])${w}`).test(all), `${m}: "${w}" -> ${all}`);
      if (['hanged', 'shot', 'left', 'noHang', 'sleep'].includes(m)) assert.ok(!lower(out.story + out.text).includes('vampir'), `${m}: ${out.story}`);
      if (['dawn', 'hanged', 'left'].includes(m)) assert.ok(!lower(out.story + out.text).includes('avcı'), `${m}: ${out.story}`);
      if (out.text) assert.ok(!out.text.includes('Rolü'), out.text);
    }
  }
});

test('roller açıkken ölünün rolüne tepki verilir (rol ya da meslek esprisi)', () => {
  let reacted = 0;
  let total = 0;
  for (const s of SEEDS.slice(0, 100)) {
    const { outputs } = play(`acik${s}`, { revealRoles: true });
    for (const { m, out } of outputs) {
      if (m === 'hanged') {
        total++;
        assert.ok(out.text.includes('Rolü:'), out.text);
        if (out.story.split(/(?<=[.!?…])\s/).length >= 3 || out.story.length > 120) reacted++;
      }
    }
  }
  assert.ok(total > 50 && reacted / total > 0.6, `${reacted}/${total}`);
});

const { JOBS } = require('../lib/story/jobs');
const TWISTS = JOBS.flatMap((j) => [...j.evil, ...j.innocent].map((line) => ({ line, job: j })));

test('meslek esprisi yalnızca rol açıkken ve meslek ana cümlede anılmışken gelir', () => {
  let seen = 0;
  for (const s of SEEDS.slice(0, 150)) {
    for (const revealRoles of [true, false]) {
      const { outputs, chron } = play(`meslek${s}`, { revealRoles });
      for (const { m, input, out } of outputs) {
        if (!out || !out.story || m === 'win') continue;
        for (const { line, job } of TWISTS) {
          if (!out.story.includes(line)) continue;
          assert.ok(revealRoles, `gizli rolde meslek esprisi: ${out.story}`);
          seen++;
          const main = out.story.slice(0, out.story.indexOf(line));
          assert.ok(lower(main).includes(job.noun) || (job.soft && lower(main).includes(job.soft)), `meslek anılmadan espri: ${out.story}`);
          const ids = m === 'dawn' ? input.deaths.map((d) => d.id) : [input.id];
          assert.ok(ids.some((id) => chron.jobOf(id).id === job.id), `başkasının mesleği: ${out.story}`);
        }
      }
    }
  }
  assert.ok(seen > 100, `espri sayısı ${seen}`);
});

// ---------- dedikodular herkese açık kayda harfiyen uyar ----------
function history(g) {
  const days = new Map();
  const deaths = new Map();
  const alive = new Set(g.players.map((p) => p.id));
  const publicRole = new Map();
  let round = 0;
  const day = (r) => {
    if (!days.has(r)) days.set(r, { trail: [], chat: new Map(), ballots: new Map(), weights: new Map(), outcome: null, aliveAtStart: [] });
    return days.get(r);
  };
  const snapshots = [];
  for (const step of g.script) {
    const i = step.input;
    if (step.m === 'night') round = i.round;
    if (step.m === 'dawn') { deaths.set(i.round, i.deaths); for (const d of i.deaths) { alive.delete(d.id); if (g.revealRoles) publicRole.set(d.id, d.role); } }
    if (step.m === 'day') { day(i.round).aliveAtStart = [...alive]; snapshots.push({ round: i.round, alive: new Set(alive), publicRole: new Map(publicRole) }); }
    if (step.m === 'chat' && alive.has(i)) day(round).chat.set(i, (day(round).chat.get(i) || 0) + 1);
    if (step.m === 'vote') day(round).trail.push(i);
    if (['hanged', 'noHang', 'sleep'].includes(step.m)) {
      const d = day(i.round);
      for (const b of i.ballots || []) { d.ballots.set(b.voter, b.target); d.weights.set(b.voter, b.w || 1); }
      d.outcome = step.m === 'hanged' ? { type: 'hanged', id: i.id } : step.m === 'sleep' ? { type: 'sleep' } : { type: i.reason };
      d.closed = true;
    }
    if (step.m === 'hanged') { alive.delete(i.id); if (g.revealRoles || i.role === 'soytari') publicRole.set(i.id, i.role); }
    if (step.m === 'shot' || step.m === 'left') { alive.delete(i.id); if (g.revealRoles) publicRole.set(i.id, i.role); }
    if (step.m === 'hunter') publicRole.set(i.id, 'avci');
  }
  return { days, deaths, snapshots };
}

function tallyOf(d) {
  const c = new Map();
  for (const [v, t] of d.ballots) if (t !== 'sleep') c.set(t, (c.get(t) || 0) + (d.weights.get(v) || 1));
  return c;
}

function verify(fact, h, round, snap) {
  const d = h.days.get(fact.day !== undefined ? fact.day : round - 1);
  const isP = (t) => typeof t === 'string' && t !== 'sleep';
  switch (fact.family) {
    case 'switch': case 'switchLate': {
      const tr = d.trail.filter((e) => e.voter === fact.fact.voter);
      let lastVote = null; let ok = false;
      for (const e of tr) {
        if (lastVote === fact.fact.from && e.to === fact.fact.to) ok = fact.family === 'switch' || e.msLeft <= LATE_MS;
        if (e.to !== null) lastVote = e.to;
      }
      assert.ok(ok, 'oy değiştirme kayıtta yok');
      assert.equal(d.ballots.get(fact.fact.voter), fact.fact.to);
      break;
    }
    case 'fickle': {
      let cur = null; let n = 0;
      for (const e of d.trail.filter((x) => x.voter === fact.fact.voter)) { if (cur !== null && e.to !== cur) n++; cur = e.to; }
      assert.equal(n, fact.fact.changes); assert.ok(n >= 3);
      break;
    }
    case 'sleepy': case 'sleepyAlone':
      assert.equal(d.ballots.get(fact.fact.voter), 'sleep');
      assert.notEqual(d.outcome.type, 'sleep');
      if (fact.family === 'sleepyAlone') assert.equal([...d.ballots.values()].filter((t) => t === 'sleep').length, 1);
      break;
    case 'abstain':
      assert.ok(!d.ballots.has(fact.fact.voter) && d.aliveAtStart.includes(fact.fact.voter));
      break;
    case 'abstainAll':
      for (const r of fact.fact.days) assert.ok(!h.days.get(r).ballots.has(fact.fact.voter));
      assert.deepEqual(fact.fact.days, [...h.days].filter(([r, x]) => x.closed && r < round && x.aliveAtStart.includes(fact.fact.voter)).map(([r]) => r));
      break;
    case 'silent':
      assert.ok(!(d.chat.get(fact.fact.id) > 0));
      assert.ok([...d.chat.values()].reduce((a, b) => a + b, 0) >= 5);
      break;
    case 'chatty': {
      const n = d.chat.get(fact.fact.id);
      for (const [id, c] of d.chat) if (id !== fact.fact.id) assert.ok(c < n);
      break;
    }
    case 'closeCall': {
      const c = tallyOf(d);
      assert.equal(d.outcome.id, fact.fact.hanged);
      assert.equal(c.get(fact.fact.hanged) - c.get(fact.fact.id), 1);
      for (const [t, n] of c) if (t !== fact.fact.hanged && t !== fact.fact.id) assert.ok(n < c.get(fact.fact.id));
      break;
    }
    case 'tie': {
      const c = tallyOf(d);
      const [x, y] = fact.fact.tied;
      assert.equal(c.get(x), c.get(y));
      assert.equal(Math.max(...c.values()), c.get(x));
      break;
    }
    case 'lone':
      assert.deepEqual([...d.ballots].filter(([, t]) => t === fact.fact.target).map(([v]) => v), [fact.fact.voter]);
      break;
    case 'votedThenDied':
      assert.equal(d.ballots.get(fact.fact.voter), fact.fact.target);
      assert.ok(h.deaths.get(round).some((x) => x.id === fact.fact.target && x.cause === 'vampir'));
      break;
    case 'bandwagon': case 'bandwagonEvil': case 'bandwagonInnocent': {
      assert.equal(d.outcome.id, fact.fact.target);
      assert.equal(d.ballots.get(fact.fact.voter), fact.fact.target);
      const role = snap.publicRole.get(fact.fact.target);
      if (fact.family === 'bandwagon') assert.equal(role, undefined);
      if (fact.family === 'bandwagonEvil') assert.ok(['vampir', 'iftiraci'].includes(role));
      if (fact.family === 'bandwagonInnocent') assert.ok(role && !['vampir', 'iftiraci', 'soytari'].includes(role));
      break;
    }
    case 'consistent':
      assert.equal(h.days.get(fact.fact.days[0]).ballots.get(fact.fact.voter), fact.fact.target);
      assert.equal(h.days.get(fact.fact.days[1]).ballots.get(fact.fact.voter), fact.fact.target);
      break;
    case 'firstVoter': {
      const first = d.trail.find((e) => e.to !== null);
      assert.equal(first.voter, fact.fact.voter); assert.equal(first.to, fact.fact.target);
      break;
    }
    case 'heat': case 'untouched': {
      const rec = new Map();
      for (const [r, x] of h.days) if (r < round && x.closed) for (const [, t] of x.ballots) if (isP(t)) rec.set(t, (rec.get(t) || 0) + 1);
      assert.equal(rec.get(fact.fact.id) || 0, fact.fact.ballots);
      if (fact.family === 'heat') for (const [id, n] of rec) if (id !== fact.fact.id) assert.ok(n < fact.fact.ballots);
      break;
    }
    case 'pair': {
      let m = 0;
      for (const [r, x] of h.days) {
        if (r >= round || !x.closed) continue;
        const ta = x.ballots.get(fact.fact.a); const tb = x.ballots.get(fact.fact.b);
        if (!isP(ta) && !isP(tb)) continue;
        assert.ok(isP(ta) && ta === tb, 'ikili ayrı düşmüş');
        m++;
      }
      assert.equal(m, fact.fact.matches);
      break;
    }
    default: assert.fail(`bilinmeyen dedikodu ailesi ${fact.family}`);
  }
}

test('adlı dedikodular herkese açık kayda harfiyen uyar; konu hayatta ve adı geçer', () => {
  const families = new Map();
  let named = 0;
  let atmo = 0;
  for (const s of SEEDS) {
    const { g, outputs } = play(s);
    const h = history(g);
    const names = new Map(g.players.map((p) => [p.id, p.name]));
    for (const { m, input, out, fact } of outputs) {
      if (m !== 'day') continue;
      if (!fact) { atmo++; continue; }
      named++;
      families.set(fact.family, (families.get(fact.family) || 0) + 1);
      const snap = h.snapshots.find((x) => x.round === input.round);
      assert.ok(snap.alive.has(fact.persons.a), 'dedikodunun konusu hayatta değil');
      verify(fact, h, input.round, snap);
      assert.ok(out.rumor.text.includes(names.get(fact.persons.a)), `ad yok: ${out.rumor.text}`);
      if (fact.persons.b && fact.family !== 'closeCall') assert.ok(out.rumor.text.includes(names.get(fact.persons.b)), `ikinci ad yok: ${out.rumor.text}`);
    }
  }
  assert.ok(named > 200 && atmo > 100, `adlı ${named}, atmosfer ${atmo}`);
  assert.ok(families.size >= 14, `aile çeşidi: ${[...families.keys()].join(',')}`);
});

test('sohbet sayımı yoksa sessizlik dedikodusu uydurulmaz; geçmiş yoksa yalnızca atmosfer', () => {
  const g = makeScript('sohbetsiz', { players: 9 });
  const chron = createChronicle({ seed: 'x', players: g.players, revealRoles: true });
  for (const step of g.script) {
    if (step.m === 'chat') continue;
    chron[step.m](step.input);
    if (step.m === 'day') {
      const f = chron._core.lastRumorFact;
      assert.ok(!f || !['silent', 'chatty'].includes(f.family));
      if (step.input.round === 1) assert.equal(f, null);
    }
  }
});

test('garip girdiler asla hata fırlatmaz; iç hata olursa düz olgusal satır döner', () => {
  const junk = [undefined, null, 0, -1, 1e9, NaN, '', 'x', [], {}, { round: 'abc' }, { id: {}, role: [] },
    { deaths: 'yok' }, { deaths: [null, 1, { id: 'yok' }, { id: 'p0', cause: 'uzay', role: 'kral' }] },
    { ballots: 'x' }, { ballots: [null, { voter: 'p1' }, { voter: 'p1', target: 'p2', w: 99 }] },
    { ballots: { p1: 'p2', p3: 'sleep' } }, { winner: 'uzaylılar', roles: 'yok', winners: [null, { id: 1 }] },
    { id: 'p0', name: '🦇🦇🦇' }, { voter: 'p0', to: 'p1', msLeft: 'çok' }];
  const players = [{ id: 'p0', name: 'Ali' }, { id: 'p1', name: 'Xyz' }, { id: 'p2' }, null, { id: 'p0', name: 'kopya' }, 'saçma'];
  for (const opts of [undefined, null, 5, { players: 'yok' }, { players, seed: { a: 1 }, scenario: 'yok' }, { players, revealRoles: false }]) {
    const chron = createChronicle(opts);
    for (const m of ['start', 'night', 'dawn', 'day', 'hanged', 'noHang', 'sleep', 'hunter', 'shot', 'noHunt', 'left', 'win', 'epilogue']) {
      for (const j of junk) {
        const out = chron[m](j);
        assert.equal(typeof out.text, 'string', m);
        assert.equal(typeof out.story, 'string', m);
        assert.equal(typeof out.title, 'string', m);
      }
    }
    for (const j of junk) { chron.chat(j); chron.vote(j); }
    assert.equal(typeof chron.seed, 'string');
    assert.ok(Array.isArray(chron.jobs()));
  }

  const chron = createChronicle({ seed: 1, players: [{ id: 'a', name: 'Burak' }, { id: 'b', name: 'Ece' }], revealRoles: false });
  chron._core.pick = () => { throw new Error('bozuk'); };
  const h = chron.hanged({ round: 2, id: 'a', votes: 3, role: 'vampir' });
  assert.equal(h.text, 'Burak 3 oyla asıldı!'); // rol gizli: yedekte de sızmaz
  assert.equal(h.scene, 'gallows');
  assert.equal(h.story, '');
  const d = chron.dawn({ round: 2, deaths: [{ id: 'b', cause: 'zehir', role: 'doktor' }] });
  assert.equal(d.text, 'Ece bu gece zehirlenerek öldü!');
  assert.equal(d.targets[0].scene, 'poison');
  assert.equal(chron.day({ round: 2 }).rumor.text, '');
  const j = chron.hanged({ round: 3, id: 'b', votes: 2, role: 'soytari' });
  assert.equal(j.text, 'Ece 2 oyla asıldı! Rolü: Soytarı.');
});

test('senaryo, meslekler ve başlangıç çıktısı', () => {
  const ids = new Set();
  for (let s = 0; s < 120; s++) {
    const g = makeScript(s, { players: 20 });
    const chron = createChronicle({ seed: s, players: g.players });
    const st = chron.start();
    assert.equal(st.title, 'Roller dağıtıldı');
    assert.ok(st.story.length > 30 && st.story === st.scenario.intro);
    ids.add(st.scenario.id);
    const jobs = chron.jobs();
    assert.equal(jobs.length, 20);
    assert.equal(new Set(jobs.map((j) => j.job.id)).size, 20);
    assert.deepEqual(chron.jobOf(g.players[3].id), jobs[3].job);
  }
  assert.equal(ids.size, 6);
  const forced = createChronicle({ seed: 1, scenario: 'kara-kis', players: [] });
  assert.equal(forced.scenario.name, 'Kara Kış');
});

'use strict';

// Test ve örnek üretimi için basit oyun simülatörü. game.js kurallarının kabaca bir kopyasıyla
// rastgele bir oyun oynatır ve hikâye motoruna verilecek çağrıların listesini (script) üretir.
// Sunucu bunu kullanmaz.

const { makeRng, shuffled } = require('./engine');

const NAMES = [
  'Ahmet', 'Ayşe', 'Burak', 'Ece', 'Kemal', 'Şule Nur', 'Ali99', 'R2D2', 'Xyz', 'MRK', 'ALI', 'Max',
  'İrem', 'Oğuz', 'Gül', 'Tarık', 'Deniz_', 'Can40', 'Ilgın', 'Ömer', 'José', '007', 'Ufuk', 'Meral',
];

function rolesFor(n, opts) {
  const vamps = n >= 15 ? 3 : n >= 10 ? 2 : 1;
  const list = Array(vamps).fill('vampir');
  if (opts.framer && n >= 7) list.push('iftiraci');
  const specials = ['doktor', 'kahin', 'gozcu', 'cadi', 'avci', 'muhtar', 'soytari'];
  const room = n - list.length - 1;
  list.push(...specials.slice(0, Math.max(0, room)));
  while (list.length < n) list.push('koylu');
  return list;
}

// Bir oyunluk olay dizisi üretir. Dönüş: { players, roles, revealRoles, script:[{m, input}] }
function makeScript(seed, opts = {}) {
  const rng = makeRng(`sim#${seed}`);
  const n = opts.players || 5 + Math.floor(rng() * 16);
  const revealRoles = opts.revealRoles !== undefined ? opts.revealRoles : rng() < 0.6;
  const names = shuffled(rng, NAMES).slice(0, n);
  const players = names.map((name, i) => ({ id: `p${i}`, name }));
  const roleList = shuffled(rng, rolesFor(n, { framer: rng() < 0.5 }));
  const role = new Map(players.map((p, i) => [p.id, roleList[i]]));
  const alive = new Set(players.map((p) => p.id));
  const script = [];
  const evil = (id) => ['vampir', 'iftiraci'].includes(role.get(id));
  const pickOne = (arr) => arr[Math.floor(rng() * arr.length)];
  let poisonUsed = false;
  let ended = false;
  const maxRounds = opts.maxRounds || 12;

  const winner = () => {
    const al = [...alive];
    const e = al.filter(evil).length;
    if (e === 0) return 'koylu';
    if (e >= al.length - e) return 'vampir';
    return null;
  };
  const promote = () => {
    const al = [...alive];
    if (!al.some((id) => role.get(id) === 'vampir')) {
      for (const id of al) if (role.get(id) === 'iftiraci') role.set(id, 'vampir');
    }
  };
  const finish = (w) => {
    ended = true;
    const winners = players.filter((p) => {
      const r = role.get(p.id);
      const team = ['vampir', 'iftiraci'].includes(r) ? 'vampir' : r === 'soytari' ? 'soytari' : 'koylu';
      return team === w;
    }).map((p) => p.id);
    script.push({ m: 'win', input: { winner: w, winners, roles: Object.fromEntries(role) } });
  };
  const checkWin = () => {
    promote();
    const w = winner();
    if (w) finish(w);
    return Boolean(w);
  };
  const hunterAfter = (deadIds, round) => {
    const h = deadIds.find((id) => role.get(id) === 'avci');
    if (!h || winner() === 'koylu') return;
    script.push({ m: 'hunter', input: { id: h } });
    if (rng() < 0.8 && alive.size) {
      const t = pickOne([...alive]);
      alive.delete(t);
      script.push({ m: 'shot', input: { hunterId: h, id: t, role: role.get(t), round } });
    } else script.push({ m: 'noHunt', input: { hunterId: h } });
  };

  script.push({ m: 'start', input: {} });
  for (let round = 1; round <= maxRounds && !ended; round++) {
    script.push({ m: 'night', input: { round } });
    // gece
    const victims = [...alive].filter((id) => !evil(id));
    const deaths = [];
    if (victims.length && rng() < 0.75) {
      const v = pickOne(victims);
      deaths.push({ id: v, cause: 'vampir', role: role.get(v) });
    }
    if (!poisonUsed && [...alive].some((id) => role.get(id) === 'cadi') && rng() < 0.25) {
      poisonUsed = true;
      const t = pickOne([...alive].filter((id) => role.get(id) !== 'cadi'));
      if (t && !deaths.some((d) => d.id === t)) deaths.push({ id: t, cause: 'zehir', role: role.get(t) });
    }
    for (const d of deaths) alive.delete(d.id);
    script.push({ m: 'dawn', input: { round, deaths } });
    promote();
    if (deaths.some((d) => role.get(d.id) === 'avci') && winner() !== 'koylu') hunterAfter(deaths.map((d) => d.id), round);
    if (checkWin()) break;

    // gündüz
    script.push({ m: 'day', input: { round } });
    const voters = [...alive];
    const ballots = [];
    const roll = rng();
    const allSleep = roll < 0.08;
    for (const v of voters) {
      // sohbet
      const msgs = Math.floor(rng() * 6);
      for (let k = 0; k < msgs; k++) script.push({ m: 'chat', input: v });
      if (allSleep) {
        script.push({ m: 'vote', input: { voter: v, to: 'sleep', msLeft: 60000 } });
        ballots.push({ voter: v, target: 'sleep', w: 1 });
        continue;
      }
      const r = rng();
      if (r < 0.15) continue; // oy yok
      let target = r < 0.25 ? 'sleep' : pickOne(voters.filter((x) => x !== v));
      if (!target) continue;
      script.push({ m: 'vote', input: { voter: v, to: target, msLeft: 90000 - Math.floor(rng() * 30000) } });
      if (target !== 'sleep' && rng() < 0.25) {
        const other = pickOne(voters.filter((x) => x !== v && x !== target));
        if (other) {
          script.push({ m: 'vote', input: { voter: v, to: other, msLeft: Math.floor(rng() * 30000) } });
          target = other;
        }
      }
      ballots.push({ voter: v, target, w: role.get(v) === 'muhtar' ? 2 : 1 });
    }
    if (allSleep && voters.length) {
      script.push({ m: 'sleep', input: { round, ballots } });
      continue;
    }
    const counts = new Map();
    let sleep = 0;
    for (const b of ballots) {
      if (b.target === 'sleep') sleep += b.w;
      else counts.set(b.target, (counts.get(b.target) || 0) + b.w);
    }
    let max = 0;
    let top = [];
    for (const [t, c] of counts) {
      if (c > max) { max = c; top = [t]; } else if (c === max) top.push(t);
    }
    if (max > 0 && top.length === 1 && max > sleep) {
      const h = top[0];
      alive.delete(h);
      script.push({ m: 'hanged', input: { round, id: h, votes: max, role: role.get(h), ballots } });
      if (role.get(h) === 'soytari') { finish('soytari'); break; }
      promote();
      hunterAfter([h], round);
      if (checkWin()) break;
    } else {
      script.push({ m: 'noHang', input: { round, reason: max === 0 ? 'novote' : 'tie', ballots } });
      if (checkWin()) break;
    }
    // ara sıra biri oyundan ayrılır
    if (rng() < 0.06 && alive.size > 2) {
      const l = pickOne([...alive]);
      alive.delete(l);
      script.push({ m: 'left', input: { id: l, role: role.get(l) } });
      if (checkWin()) break;
    }
  }
  return { players, roles: role, revealRoles, script, seed };
}

// Script'i bir chronicle'a oynatır; her çıktıyı {m, input, out} olarak döndürür.
function runScript(chron, script) {
  const outputs = [];
  for (const step of script) {
    const out = chron[step.m](step.input);
    outputs.push({ m: step.m, input: step.input, out });
  }
  return outputs;
}

module.exports = { makeScript, runScript, NAMES };

'use strict';

// Oyun geçmişi kaydı (docs/GAME-LOGS.md, V2-PLAN §20). Her oda bir GameRecorder taşır (game.js `room.recorder`);
// akıllı bot olsun olmasın HER oyun için başlangıçtan sona sırayla bir olay dizisi tutulur ve oyun bitince (ya da herkes
// gece görüldükten sonra odayı terk edince) tek bir JSON kaydı kurulur:
//   { v:2, id, room, startedAt, endedAt, durationSec, end:'finished'|'abandoned', winner, rounds, settings, game,
//     players:[{ name, kind:'human'|'bot'|'smart', role, team, alive, death?… }], events:[…], truncated? }
// Olaylar (k): phase, log (herkese açık günlük), chat (genel / vampir / olu), pick, pass, lock (gece/gündüz seçimleri),
// nres (gecenin çözümü), priv (alıcıya özel sonuçlar: Kahin çiftleri, Gözcü raporları, korundu/saldırıldı, kilit…),
// vote (oy değişiklikleri), tally (gün sonu sayımı), bot (akıllı botun düşünce/hafıza notu), fb (rastgele yedeğe düşüş), end.
// Zaman `t`: oyun başından beri saniye. İsimler kullanılır (odada tektir); kimlik, IP, oturum anahtarı, parola kayda GİRMEZ.
//
// Oyun sonu botları incelemesi (review.js) için reviewView() aynı kayıttan eski, küçük (~60K karakter) ve İNSANIN ÖZEL
// BİLGİSİZ görünümü çıkarır: insanların gece sonuçları, seçimleri, gizli kanal satırları incelemeye (dış modele) gitmez.

const crypto = require('crypto');
const zlib = require('zlib');
const { teamOf, isEvil } = require('./roles');

const LOG_MAX_CHARS = 200000;  // tam oyun kaydı üst sınırı
const MAX_CHARS = 60000;       // inceleme görünümü üst sınırı (değişmedi)
const EVENT_KEEP = 8000;       // bellekte en fazla bu kadar olay (en eski sohbet/bot notları atılır)
const TURNS_PER_BOT = 24;      // inceleme görünümünde bot başına en son kaç tur
const THINK_MAX = 500;
const MEMORY_MAX = 600;
const SAY_MAX = 200;
const NOTE_MAX = 400;
const CHAT_MAX = 300;

const PHASE_WORD = { reveal: 'başlangıç', night: 'gece', day: 'gün', trial: 'mahkeme', hunter: 'avcı', ended: 'oyun sonu' };
const SKIP_LOG_KINDS = new Set(['story', 'epilogue', 'rumor']);
const SKIP_LOG = /odaya katıldı\.|artık oda sahibi\.|Yeni oyun için lobiye/;
const SKIP_PRIVATE = new Set(['killed']);   // sabah günlüğünde zaten var
const DEATH_HOW = { vampir: 'vampirler öldürdü', zehir: 'zehirlendi', hirsiz: 'soyulup öldürüldü' };

const cut = (s, n) => String(s == null ? '' : s).slice(0, n);

class GameRecorder {
  constructor(room, now = () => Date.now()) {
    this.room = room;
    this.now = now;
    this.active = false;
    this.record = null;       // oyun bitince kurulan kayıt
    this.reset();
  }

  reset() {
    this.t0 = this.now();
    this.id = '';
    this.events = [];
    this.deaths = new Map();    // oyuncu id -> { ph, how }
    this.startRoles = new Map();
    this.phaseKey = '';
    this.dropped = { bot: 0, chat: 0 };
  }

  rel() { return Math.max(0, Math.round((this.now() - this.t0) / 1000)); }
  tag() { return `${PHASE_WORD[this.room.phase] || this.room.phase} ${this.room.round}`.replace(/ 0$/, ''); }
  nm(id) {
    if (id == null) return null;
    const p = this.room.players.get(id);
    return p ? p.name : String(id);
  }

  // Oyun başladı (roller dağıtıldı).
  begin() {
    this.reset();
    this.id = `${this.t0.toString(36)}${crypto.randomBytes(4).toString('hex')}`;
    this.record = null;
    this.active = true;
    for (const p of this.room.players.values()) if (p.role) this.startRoles.set(p.id, p.role);
  }

  push(k, fields) {
    if (!this.active) return;
    this.events.push({ t: this.rel(), ph: this.tag(), k, ...fields });
    if (this.events.length > EVENT_KEEP) this.prune();
  }

  // Bellek koruması: çok uzun oyunlarda en eski bot notları, sonra sohbet satırları atılır.
  prune() {
    const target = Math.round(EVENT_KEEP * 0.9);
    for (const kind of ['bot', 'chat']) {
      let extra = this.events.length - target;
      if (extra <= 0) return;
      this.events = this.events.filter((e) => {
        if (extra > 0 && e.k === kind) { extra -= 1; this.dropped[kind] += 1; return false; }
        return true;
      });
    }
  }

  // ---------- Room'un çağırdığı kancalar ----------

  phase() {
    if (!this.active) return;
    const r = this.room;
    const tr = r.trial;
    const key = `${r.phase}:${r.round}:${tr ? `${tr.step}:${tr.speaker || ''}` : ''}`;
    if (key === this.phaseKey) return;
    this.phaseKey = key;
    this.push('phase', {
      phase: r.phase,
      ...(tr ? { step: tr.step, ...(tr.speaker ? { speaker: this.nm(tr.speaker) } : {}), accused: tr.accused.map((id) => this.nm(id)) } : {}),
    });
  }

  log(text, kind) {
    if (!this.active || SKIP_LOG_KINDS.has(kind) || SKIP_LOG.test(text)) return;
    this.push('log', { kind, text: cut(text, 400) });
  }

  // to: alıcı kimlikleri (özel sonuç) ya da null (herkese açık; yalnızca ölüm bilgisi için okunur).
  announce(kind, title, text, extra, to) {
    if (!this.active) return;
    if (to) {
      if (SKIP_PRIVATE.has(kind)) return;
      this.push('priv', { to: [...to].map((id) => this.nm(id)), kind, text: cut(text, NOTE_MAX) });
      return;
    }
    const targets = extra && Array.isArray(extra.targets) ? extra.targets : [];
    const how = { death: null, hanged: extra && extra.trial ? 'mahkemede oyla elendi' : 'oyla elendi', shot: 'avcının atışıyla', left: 'oyundan ayrıldı' }[kind];
    if (how === undefined) return;
    for (const t of targets) {
      if (!t || !t.id || this.deaths.has(t.id)) continue;
      this.deaths.set(t.id, { ph: this.tag(), how: kind === 'death' ? (DEATH_HOW[t.cause] || 'öldü') : how });
    }
  }

  // Oyun evrelerindeki her sohbet mesajı (alıcı sayısından bağımsız TEK kez).
  chat(message) {
    if (!this.active || !message || !this.room.inGame) return;
    const sender = this.room.players.get(message.fromId);
    const ch = message.channel === 'vampir' ? 'vampir' : (message.channel === 'olu' ? 'olu' : 'genel');
    this.push('chat', { ch, from: message.from, ...(sender && sender.bot ? { bot: 1 } : {}), text: cut(message.text, CHAT_MAX) });
  }

  pick(p, role, targetId, action) {
    this.push('pick', {
      who: p.name, role: p.role, ...(role !== p.role ? { as: role } : {}), to: this.nm(targetId),
      ...(role === 'cadi' && action ? { act: action } : {}),
    });
  }

  pass(p) { this.push('pass', { who: p.name, role: p.role }); }

  lock(p, targetId) { this.push('lock', { who: p.name, to: this.nm(targetId) }); }

  vote(voterId, target) {
    const r = this.room;
    this.push('vote', {
      who: this.nm(voterId), to: target == null ? null : (target === 'sleep' ? 'uyu' : this.nm(target)),
      ...(r.phase === 'trial' ? { trial: 1 } : {}), ...(r.secretVotes ? { secret: 1 } : {}),
    });
  }

  // Gün / mahkeme oylaması sayılırken (kim kime, ağırlıklarıyla).
  tally() {
    if (!this.active) return;
    const r = this.room;
    const trial = r.phase === 'trial';
    const votes = {};
    const counts = {};
    const sleeping = [];
    for (const [voterId, target] of r.dayVotes) {
      const v = r.players.get(voterId);
      if (!v || !v.alive) continue;
      const w = r.voteWeight(voterId);
      const label = `${v.name}${w > 1 ? ` x${w}` : ''}`;
      if (target === 'sleep') { sleeping.push(label); continue; }
      const t = r.players.get(target);
      if (!t || !t.alive) continue;
      (votes[t.name] = votes[t.name] || []).push(label);
      counts[t.name] = (counts[t.name] || 0) + w;
    }
    this.push('tally', {
      trial, secret: Boolean(r.secretVotes), ...(trial && r.trial ? { accused: r.trial.accused.map((id) => this.nm(id)) } : {}),
      votes, counts, sleeping,
    });
  }

  // Gecenin çözümü: yolculuklar ve sonuçları, ölenler, kurtarılanlar.
  nres() {
    const res = this.room.nightRes;
    if (!this.active || !res) return;
    this.push('nres', {
      ...(res.dark ? { dark: 1 } : {}),
      trips: res.trips.map((t) => ({ who: this.nm(t.actorId), to: this.nm(t.to), kind: t.kind, out: t.outcome })),
      dies: [...res.dies].map(([id, cause]) => ({ who: this.nm(id), cause })),
      saved: [...res.saved].map(([by, id]) => ({ by: this.nm(by), who: this.nm(id) })),
      ...(res.steal ? { steal: { who: this.nm(res.steal.thiefId), to: this.nm(res.steal.targetId), out: res.steal.outcome } } : {}),
      ...(res.framedId ? { framed: this.nm(res.framedId) } : {}),
      ...(res.cleanedId ? { cleaned: this.nm(res.cleanedId) } : {}),
    });
  }

  // Akıllı botun bir model turu (yalnızca başarılı yanıtlar): not ve düşünce dahil. Boş alanlar yazılmaz.
  turn(botId, task, data) {
    const f = { who: this.nm(botId), kind: task.kind + (task.final ? '(final)' : '') };
    const add = (key, v, n) => { const s = cut(v, n); if (s) f[key] = s; };
    add('think', data.think, THINK_MAX);
    add('say', data.say, SAY_MAX);
    add('vote', data.vote, 60);
    add('target', data.target, 60);
    add('poison', data.poison, 60);
    add('memory', data.memory, MEMORY_MAX);
    this.push('bot', f);
  }

  fallback(kind) { this.push('fb', { kind }); }

  // Oyun bitti.
  end() { return this.finish('finished'); }

  // Oda herkes çıkınca kapandı: en az bir gece yaşandıysa kayıt tutulur.
  abandon() {
    if (!this.active) return null;
    if (this.room.round < 1) { this.active = false; return null; }
    return this.finish('abandoned');
  }

  finish(end) {
    if (!this.active) return null;
    this.push('end', end === 'finished' ? { winner: this.room.winner } : { abandoned: 1 });
    let record = null;
    try {
      record = this.build(end);
    } finally {
      this.active = false;
    }
    this.record = record;
    const hooks = this.room.hooks;
    if (record && hooks && typeof hooks.gameLog === 'function') hooks.gameLog(this.room, record);
    return record;
  }

  // ---------- kayıt kurma ----------

  smartInfo() {
    const smart = this.room.bots && this.room.bots.smart;
    if (!smart || !smart.ledger) return null;
    const s = smart.ledger.summary();
    const fallbacks = { ...smart.fallbacks };
    if (!s.calls && !Object.keys(fallbacks).length) return null;
    const start = [...smart.records.values()].map((r) => r.start).find(Boolean) || null;
    return {
      model: s.models.length ? s.models.join('+') : (smart.client && smart.client.config ? smart.client.config.model : null), summary: s, fallbacks, start,
      perBot: smart.ledger.perBot,
    };
  }

  build(end) {
    const room = this.room;
    const smart = this.smartInfo();
    const seated = [...room.players.values()].filter((p) => p.role);
    const players = seated.map((p) => {
      const calls = smart && p.bot ? (smart.perBot.get(p.id) || 0) : 0;
      const death = this.deaths.get(p.id);
      const start = this.startRoles.get(p.id);
      return {
        name: p.name, kind: p.bot ? (calls > 0 ? 'smart' : 'bot') : 'human',
        role: p.role, ...(start && start !== p.role ? { startRole: start } : {}),
        ...(p.fakeRole ? { fakeRole: p.fakeRole } : {}), team: teamOf(p.role), evil: isEvil(p.role),
        alive: Boolean(p.alive), ...(p.left ? { left: true } : {}),
        ...(death ? { death } : {}),
        ...(calls ? { calls } : {}),
        ...(p.promoted ? { promoted: true } : {}), ...(p.framedReveal ? { framedAsVampire: true } : {}), ...(p.cleaned ? { tracesErased: true } : {}),
        ...(p.stolen ? { stoleFrom: this.nm(p.stolen) } : {}),
      };
    });
    const humans = players.filter((p) => p.kind === 'human').length;
    const s = room.settings || {};
    const endedAt = this.now();
    const record = {
      v: 2,
      id: this.id,
      room: room.id,
      startedAt: new Date(this.t0).toISOString(),
      endedAt: new Date(endedAt).toISOString(),
      durationSec: this.rel(),
      end,
      winner: end === 'finished' ? room.winner || null : null,
      rounds: room.round,
      settings: {
        nightSec: s.nightSec, daySec: s.daySec, revealRoles: Boolean(s.revealRoles), events: s.events, roleMode: s.roleMode,
        smartBots: s.smartBots !== false, roles: Object.keys(s.roles || {}).filter((k) => s.roles[k]),
        ...(room.scenario && room.scenario.id ? { scenario: room.scenario.id } : {}),
      },
      game: {
        players: players.length, humans, bots: players.length - humans, smartBots: players.filter((p) => p.kind === 'smart').length,
        rounds: room.round, winner: end === 'finished' ? room.winner || null : null, durationSec: this.rel(),
        revealRoles: Boolean(s.revealRoles), roleMode: s.roleMode,
        ...(smart && smart.start ? { distribution: smart.start.distribution, rolePool: smart.start.rolePool } : {}),
        model: smart ? smart.model : null,
        botCalls: smart ? { calls: smart.summary.calls, ok: smart.summary.ok, failures: smart.summary.failures, costUsd: smart.summary.costUsd } : null,
        fallbacks: smart ? smart.fallbacks : {},
      },
      players,
      events: this.events.map((e) => ({ ...e })),
    };
    return capLog(record, LOG_MAX_CHARS, this.dropped);
  }
}

// ---------- boyut sınırı ----------

// Tam kaydı üst sınıra indirir: önce en eski bot notları, sonra en eski sohbet satırları, sonra oy değişiklikleri
// (sayımlar kalır), en sonda en eski olaylar. `truncated` ne kadar atıldığını söyler.
function capLog(record, max = LOG_MAX_CHARS, already = {}) {
  const size = () => JSON.stringify(record).length;
  const dropped = { bot: already.bot || 0, chat: already.chat || 0, vote: 0, other: 0 };
  const dropOldest = (match, key, frac) => {
    const count = record.events.filter(match).length;
    if (!count) return 0;
    let n = Math.max(1, Math.ceil(count * frac));
    const before = record.events.length;
    record.events = record.events.filter((e) => { if (n > 0 && match(e)) { n -= 1; return false; } return true; });
    const gone = before - record.events.length;
    dropped[key] += gone;
    return gone;
  };
  let guard = 0;
  while (size() > max && guard++ < 400) {
    if (dropOldest((e) => e.k === 'bot', 'bot', 0.1)) continue;
    if (dropOldest((e) => e.k === 'chat', 'chat', 0.1)) continue;
    if (dropOldest((e) => e.k === 'vote', 'vote', 0.2)) continue;
    if (dropOldest((e) => e.k !== 'phase' && e.k !== 'end', 'other', 0.1)) continue;
    break;
  }
  if (dropped.bot || dropped.chat || dropped.vote || dropped.other) record.truncated = dropped;
  return record;
}

// ---------- depolamak için sıkıştırma ----------

function pack(record) {
  return zlib.gzipSync(Buffer.from(JSON.stringify(record), 'utf8'), { level: 9 }).toString('base64');
}

function packAsync(record) {
  return new Promise((resolve, reject) => {
    zlib.gzip(Buffer.from(JSON.stringify(record), 'utf8'), { level: 9 }, (err, buf) => (err ? reject(err) : resolve(buf.toString('base64'))));
  });
}

function unpack(packed) {
  try { return JSON.parse(zlib.gunzipSync(Buffer.from(String(packed), 'base64')).toString('utf8')); } catch { return null; }
}

// ---------- inceleme görünümü (eski küçük biçim; insanın özel bilgisi yok) ----------

const roundOf = (ph) => { const m = /(\d+)/.exec(String(ph || '')); return m ? Number(m[1]) : 0; };

// full: tam oyun kaydı. Dönen kayıt review.js'in beklediği v:1 biçimindedir.
function reviewView(full) {
  const botNames = new Set(full.players.filter((p) => p.kind !== 'human').map((p) => p.name));
  const ev = full.events || [];
  const players = full.players.map((p) => ({
    name: p.name, role: p.role, ...(p.fakeRole ? { fakeRole: p.fakeRole } : {}), team: p.team, evil: p.evil,
    bot: p.kind !== 'human', alive: p.alive, ...(p.left ? { left: true } : {}),
    ...(p.framedAsVampire ? { framedAsVampire: true } : {}), ...(p.tracesErased ? { tracesErased: true } : {}),
  }));
  const votes = ev.filter((e) => e.k === 'tally').map((e) => ({
    round: roundOf(e.ph), trial: Boolean(e.trial), secret: Boolean(e.secret),
    ...(e.accused ? { accused: e.accused } : {}),
    votes: e.secret ? {} : e.votes, counts: e.counts || {},
    sleeping: e.secret ? [] : (e.sleeping || []), ...(e.secret ? { sleepers: (e.sleeping || []).length } : {}),
  }));
  const bots = {};
  for (const p of full.players) {
    if (p.kind === 'human') continue;
    const nights = new Map();
    const night = (round, role) => { if (!nights.has(round)) nights.set(round, { round, role }); return nights.get(round); };
    for (const e of ev) {
      if (e.k === 'pick' && e.who === p.name) {
        const n = night(roundOf(e.ph), e.as || e.role);
        if (e.act) { n.witch = n.witch || { heal: null, poison: null }; n.witch[e.act] = e.to; } else n.pick = e.to;
      } else if (e.k === 'pass' && e.who === p.name) night(roundOf(e.ph), e.role).passed = true;
      else if (e.k === 'nres') {
        const mine = (e.trips || []).filter((t) => t.who === p.name);
        if (mine.length) {
          const n = night(roundOf(e.ph), p.role);
          n.show = mine.map((t) => `${t.kind}>${t.to}:${t.out}`);
          if (mine.some((t) => t.out === 'bounced')) n.bounced = true;
        }
      }
    }
    bots[p.name] = {
      role: p.role, alive: p.alive,
      nights: [...nights.values()].sort((a, b) => a.round - b.round),
      notes: ev.filter((e) => e.k === 'priv' && e.to.includes(p.name)).map((e) => cut(`${e.ph}: ${e.text}`, NOTE_MAX)),
      turns: ev.filter((e) => e.k === 'bot' && e.who === p.name).slice(-TURNS_PER_BOT).map((e) => ({
        t: e.t, ph: e.ph, kind: e.kind, think: e.think || '', say: e.say || '', vote: e.vote || '', target: e.target || '',
        poison: e.poison || '', memory: e.memory || '',
      })),
    };
  }
  const g = full.game || {};
  const record = {
    v: 1,
    game: {
      players: players.length, rounds: full.rounds, winner: full.winner, durationSec: full.durationSec,
      revealRoles: Boolean(full.settings && full.settings.revealRoles), roleMode: full.settings && full.settings.roleMode,
      ...(g.distribution ? { distribution: g.distribution, rolePool: g.rolePool } : {}),
      model: g.model || null,
      botCalls: g.botCalls ? { calls: g.botCalls.calls, ok: g.botCalls.ok, failures: g.botCalls.failures } : null,
      fallbacks: { ...(g.fallbacks || {}) },
    },
    players,
    timeline: ev.filter((e) => e.k === 'log').map((e) => ({ t: e.t, text: e.text })),
    votes,
    // Gizli kanallarda (vampir / ölü) yalnızca botların satırı: insanların fısıltısı incelemeye gitmez.
    chat: ev.filter((e) => e.k === 'chat' && (e.ch === 'genel' || botNames.has(e.from)))
      .map((e) => ({ t: e.t, ph: e.ph, ch: e.ch, from: e.from, ...(e.bot ? { bot: 1 } : {}), text: e.text })),
    bots,
  };
  return capRecord(record, MAX_CHARS);
}

// Kaydı üst sınıra indirir: önce en eski sohbet satırları, sonra en eski bot turları, sonra günlük.
function capRecord(record, max = MAX_CHARS) {
  const size = () => JSON.stringify(record).length;
  const dropped = { chat: 0, turns: 0, timeline: 0 };
  const step = (arr, frac, floor = 0) => {
    const n = Math.max(1, Math.ceil(arr.length * frac));
    return arr.splice(0, Math.min(n, Math.max(0, arr.length - floor))).length;
  };
  let guard = 0;
  while (size() > max && guard++ < 200) {
    if (record.chat.length) { dropped.chat += step(record.chat, 0.1); continue; }
    const withTurns = Object.values(record.bots).filter((b) => b.turns.length > 2);
    if (withTurns.length) { for (const b of withTurns) dropped.turns += step(b.turns, 0.25, 2); continue; }
    if (record.timeline.length > 20) { dropped.timeline += step(record.timeline, 0.1, 20); continue; }
    // Son çare: kalan uzun alanları kısalt.
    for (const b of Object.values(record.bots)) {
      b.turns = b.turns.map((t) => ({ ...t, think: cut(t.think, 150), memory: cut(t.memory, 250) }));
      b.notes = b.notes.slice(-8);
    }
    if (size() > max) break;
  }
  if (dropped.chat || dropped.turns || dropped.timeline) record.truncated = dropped;
  return record;
}

module.exports = { GameRecorder, capRecord, capLog, reviewView, pack, packAsync, unpack, MAX_CHARS, LOG_MAX_CHARS, TURNS_PER_BOT };

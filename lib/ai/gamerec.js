'use strict';

// Oyun sonu incelemesi için TEK oyunluk kayıt (docs/AI-BOTS.md "Otomatik oyun incelemesi", V2-PLAN §19).
// Oyun sürerken SmartBots bu küçük tamponları doldurur; oyun bitince build() tek bir JSON kaydı kurar.
// GİZLİLİK: akıllı bot olmayan (insan) oyuncuların özel bilgisi (rolünün gece sonuçları, notları, gece seçimi,
// gece takım kanalındaki satırları) kayda GİRMEZ; insanlardan yalnızca herkese açık söyledikleri ve oyun sonunda
// zaten herkese açılan rolleri vardır. Botların notları / seçimleri / düşünce notları kayıttadır.
// Kayıt üst sınırı: ~60K karakter (en eski sohbet satırları önce atılır).

const { teamOf, isEvil } = require('./roles');

const MAX_CHARS = 60000;
const CHAT_KEEP = 1200;        // oyun boyunca tutulan en fazla sohbet satırı
const LOG_KEEP = 500;          // en fazla herkese açık günlük satırı
const TURNS_PER_BOT = 24;      // bot başına en son kaç tur (think/memory) tutulur
const THINK_MAX = 500;
const MEMORY_MAX = 800;
const SAY_MAX = 160;
const NOTE_MAX = 400;

const PHASE_WORD = { night: 'gece', day: 'gün', trial: 'mahkeme', hunter: 'avcı' };
const SKIP_LOG_KINDS = new Set(['story', 'epilogue', 'rumor']);
const SKIP_LOG = /odaya katıldı\.|artık oda sahibi\.|Yeni oyun için lobiye/;

const cut = (s, n) => String(s == null ? '' : s).slice(0, n);

class GameRecorder {
  constructor(now = Date.now) {
    this.now = now;
    this.t0 = now();
    this.chat = [];
    this.log = [];
    this.logSeen = new Set();
    this.votes = [];
    this.turns = new Map();     // botId -> [{...}]
  }

  rel() { return Math.round((this.now() - this.t0) / 1000); }

  tag(room) { return `${PHASE_WORD[room.phase] || room.phase} ${room.round}`; }

  // Oyun evrelerinde bir sohbet mesajı (alıcı sayısından bağımsız TEK kez çağrılır).
  addChat(message, room) {
    if (!message || !room.inGame) return;
    const sender = room.players.get(message.fromId);
    const bot = Boolean(sender && sender.bot);
    const channel = message.channel === 'vampir' ? 'vampir' : (message.channel === 'olu' ? 'olu' : 'genel');
    // Gizli kanallarda (vampir / ölü) yalnızca botların satırı: insanların fısıltısı kayda girmez.
    if (channel !== 'genel' && !bot) return;
    this.chat.push({ t: this.rel(), ph: this.tag(room), ch: channel, from: message.from, ...(bot ? { bot: 1 } : {}), text: cut(message.text, 300) });
    if (this.chat.length > CHAT_KEEP) this.chat.shift();
  }

  // Oda günlüğünün yeni satırlarını biriktirir (günlük LOG_MAX ile kesilebildiği için artımlı).
  syncLog(room) {
    for (const l of room.log || []) {
      if (SKIP_LOG_KINDS.has(l.kind) || SKIP_LOG.test(l.text)) continue;
      const key = `${l.ts}|${l.kind}|${l.text}`;
      if (this.logSeen.has(key)) continue;
      this.logSeen.add(key);
      this.log.push({ t: Math.max(0, Math.round((l.ts - this.t0) / 1000)), k: l.kind, text: cut(l.text, 400) });
      if (this.log.length > LOG_KEEP) this.log.shift();
    }
  }

  addVotes(snap) {
    if (snap) this.votes.push(snap);
  }

  // Botun bir model turu (yalnızca başarılı yanıtlar): not ve düşünce dahil.
  addTurn(botId, room, task, data) {
    const list = this.turns.get(botId) || [];
    list.push({
      t: this.rel(), ph: this.tag(room), kind: task.kind + (task.final ? '(final)' : ''),
      think: cut(data.think, THINK_MAX), say: cut(data.say, SAY_MAX), vote: data.vote || '', target: data.target || '',
      poison: data.poison || '', memory: cut(data.memory, MEMORY_MAX),
    });
    while (list.length > TURNS_PER_BOT) list.shift();
    this.turns.set(botId, list);
  }

  // ---- kayıt kurma ----

  // smart: SmartBots (records, ledger, fallbacks). Hata atabilir; çağıran yakalar.
  build(room, smart) {
    this.syncLog(room);
    const names = new Map([...room.players.values()].map((p) => [p.id, p.name]));
    const nm = (id) => (typeof id === 'string' && names.has(id) ? names.get(id) : id);
    const deep = (v) => {
      if (Array.isArray(v)) return v.map(deep);
      if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x)]));
      return nm(v);
    };

    const players = [...room.players.values()].filter((p) => p.role).map((p) => ({
      name: p.name, role: p.role, ...(p.fakeRole ? { fakeRole: p.fakeRole } : {}), team: teamOf(p.role), evil: isEvil(p.role),
      bot: Boolean(p.bot), alive: Boolean(p.alive), ...(p.left ? { left: true } : {}),
      ...(p.framedReveal ? { framedAsVampire: true } : {}), ...(p.cleaned ? { tracesErased: true } : {}),
    }));

    const votes = this.votes.map((s) => ({
      round: s.round, trial: Boolean(s.trial), secret: Boolean(s.secret),
      ...(s.accused ? { accused: s.accused.map(nm) } : {}),
      votes: Object.fromEntries(Object.entries(s.votes || {}).map(([target, list]) => [nm(target), list.map((v) => `${nm(v.id)}${v.w > 1 ? ` x${v.w}` : ''}`)])),
      counts: Object.fromEntries(Object.entries(s.counts || {}).map(([k, v]) => [nm(k), v])),
      sleeping: (s.sleeping || []).map(nm), ...(s.secret ? { sleepers: s.sleepers } : {}),
    }));

    const bots = {};
    for (const p of room.players.values()) {
      if (!p.bot || !p.role) continue;
      const rec = smart.records.get(p.id);
      const nights = [];
      if (rec) {
        for (const [round, n] of [...rec.nights.entries()].sort((a, b) => a[0] - b[0])) nights.push(nightSummary(round, n, nm, deep));
      }
      bots[p.name] = {
        role: p.role, alive: Boolean(p.alive),
        nights,
        // Aldığı özel sonuçlar (Kahin çiftleri, Gözcü raporları, korundu / saldırıya uğradı bildirimleri…).
        notes: (p.notes || []).map((n) => cut(n.text, NOTE_MAX)),
        turns: (this.turns.get(p.id) || []).map((x) => ({ ...x })),
      };
    }

    const start = [...smart.records.values()].map((r) => r.start).find(Boolean) || null;
    const summary = smart.ledger ? smart.ledger.summary() : null;
    const record = {
      v: 1,
      game: {
        players: players.length, rounds: room.round, winner: room.winner, durationSec: this.rel(),
        revealRoles: Boolean(room.settings.revealRoles), roleMode: room.settings.roleMode,
        ...(start ? { distribution: start.distribution, rolePool: start.rolePool } : {}),
        model: smart.client && smart.client.config ? smart.client.config.model : null,
        botCalls: summary ? { calls: summary.calls, ok: summary.ok, failures: summary.failures } : null,
        fallbacks: { ...smart.fallbacks },
      },
      players,
      timeline: this.log.map((x) => ({ t: x.t, text: x.text })),
      votes,
      chat: this.chat.map((c) => ({ ...c })),
      bots,
    };
    return capRecord(record, MAX_CHARS);
  }
}

function nightSummary(round, n, nm, deep) {
  const v = n.night || {};
  const out = { round, role: n.role };
  if (v.mySelection) out.pick = nm(v.mySelection);
  if (v.witch) out.witch = { heal: nm(v.witch.heal), poison: nm(v.witch.poison), victims: (v.witch.victims || []).map(nm) };
  if (v.teamTarget) out.teamTarget = nm(v.teamTarget.targetId);
  if (v.passed) out.passed = true;
  if (v.bounced) out.bounced = true;
  if (v.show) out.show = deep(v.show);
  return out;
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

module.exports = { GameRecorder, capRecord, MAX_CHARS, TURNS_PER_BOT };

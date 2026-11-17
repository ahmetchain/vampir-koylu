'use strict';

// Akıllı bot senaryoları için gerçek Room kurucusu (YALNIZCA geliştirme/test; sunucu kullanmaz).
// Oyuncuları ve rollerini verirsiniz; geceler, oylar, sohbet ve ayrılmalar gerçek oda yöntemleriyle (selectNight,
// vote, endDay, say, removePlayer) oynatılır, böylece günlük satırları, notlar, görünümler ve botun kaydı
// (SeatRecord) oyundaki gerçek akışla oluşur. Botların kendi zamanlayıcıları kapatılır: bot yalnızca
// senaryo sorduğunda karar verir.

const { Room, distributionFor } = require('../game');
const { buildUser } = require('../lib/ai/prompt');
const { personaFor } = require('../lib/ai/personas');

const SPECIALS = ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz'];
const HELPERS = ['iftiraci', 'temizlikci'];

class Game {
  // players: [{ name, role, bot?: true, fake?: 'doktor'|... (Deli'nin inandığı rol) }]; ilk insan oda sahibi olur.
  // settings: oda ayarları (varsayılan: roller açık, 'all' dağıtım, roller ölünce açıklanır).
  constructor({ players, settings = {}, client = null, dealSeed = 1, seerRng = null }) {
    this.spec = players;
    this.ids = new Map();
    this.chats = [];
    const present = new Set(players.map((p) => p.role));
    const roles = {};
    for (const r of [...SPECIALS, ...HELPERS]) roles[r] = present.has(r);
    this.room = new Room({
      id: 'SENARYO',
      name: 'Senaryo',
      settings: { nightSec: 20, daySec: 120, revealRoles: true, roleMode: 'all', events: 'off', roles, ...settings },
      ai: client,
      seerRng,
      botRng: () => 0.5,
      eventRng: () => 0.5,
      storySeed: `senaryo-${dealSeed}`,
      hooks: {
        update() {}, announce() {}, empty() {}, finished() {},
        chat: (r, recipients, message) => { this.chats.push({ recipients, message }); },
      },
    });
    players.forEach((p, i) => {
      const id = `${p.bot ? 'b' : 'h'}${i}`;
      this.ids.set(p.name, id);
      const err = this.room.addPlayer(id, p.name, { bot: Boolean(p.bot), userId: p.bot ? null : `u${i}` });
      if (err) throw new Error(`${p.name}: ${err}`);
    });
    const host = players.findIndex((p) => !p.bot);
    if (host < 0) throw new Error('en az bir insan oyuncu gerekli (oda sahibi)');
    const err = this.room.start(this.ids.get(players[host].name));
    if (err) throw new Error(err);
    // Rolleri senaryoya göre ayarla (oda zaten başladı; lobi kuralı ayarlardan gelir).
    for (const p of players) {
      const r = this.room.players.get(this.ids.get(p.name));
      r.role = p.role;
      r.fakeRole = p.role === 'deli' ? (p.fake || 'kahin') : null;
    }
    // Botların kendi zamanlayıcıları kapalı: yalnızca senaryonun istediği kararlar verilir.
    this.room.bots.later = () => 0;
    if (this.room.bots.smart) {
      this.room.bots.smart.schedule = () => {};
      // Rol ataması değiştiği için oyunun başında kurulan kayıtlar yeniden kurulur.
      this.room.bots.smart.records = new Map();
      for (const p of players) if (p.bot) this.room.bots.smart.recordOf(this.ids.get(p.name));
    }
    this.room.startNight();
  }

  id(name) {
    const id = this.ids.get(name);
    if (!id) throw new Error(`bilinmeyen oyuncu: ${name}`);
    return id;
  }

  get smart() { return this.room.bots.smart; }
  get phase() { return this.room.phase; }
  get round() { return this.room.round; }

  // [{ actor, target, action? }] gece seçimleri; sonra gece biter ve sabah olur (gerçek çözüm).
  night(picks = []) {
    if (this.room.phase !== 'night') throw new Error(`gece değil: ${this.room.phase}`);
    for (const p of picks) {
      const [actor, target, action] = Array.isArray(p) ? p : [p.actor, p.target, p.action];
      const err = this.room.selectNight(this.id(actor), this.id(target), action);
      if (err) throw new Error(`${actor} -> ${target}: ${err}`);
    }
    this.room.endNight();
  }

  say(name, text) {
    const err = this.room.say(this.id(name), text);
    if (err) throw new Error(`${name}: ${err}`);
  }

  // Bir insanın/botun kendi mesajı (say() ile aynı yol).
  talk(lines) { for (const [name, text] of lines) this.say(name, text); }

  vote(voter, target) {
    const err = this.room.vote(this.id(voter), target === 'uyu' ? 'sleep' : this.id(target));
    if (err) throw new Error(`${voter} -> ${target}: ${err}`);
  }

  lock(name, target) {
    const err = this.room.lockHouse(this.id(name), this.id(target));
    if (err) throw new Error(`${name} kilit ${target}: ${err}`);
  }

  // Gün biter (oylar sayılır, asma/gece geçişi gerçek).
  endDay() {
    if (this.room.phase !== 'day') throw new Error(`gün değil: ${this.room.phase}`);
    this.room.endDay();
  }

  leave(name) { this.room.removePlayer(this.id(name)); }

  alive(name) { return this.room.players.get(this.id(name)).alive; }

  view(name) { return this.room.viewFor(this.id(name)); }

  record(name) { return this.smart.recordOf(this.id(name)); }

  // O botun tur istemi (oyundaki gerçek yolla): { system?, user }.
  prompt(name, task, { memory = '', trigger = null } = {}) {
    const id = this.id(name);
    const view = this.room.viewFor(id);
    const tr = trigger || (task.trigger ? task.trigger : null);
    return buildUser({ view, rec: this.smart.recordOf(id), memory, persona: personaFor(name), task: { ...task, trigger: tr } });
  }

  // Son sohbet mesajı (tetikleyici olarak vermek için): o botun koltuğuna gelen son satır.
  lastChat(name) {
    const id = this.id(name);
    const c = [...this.chats].reverse().find((x) => x.recipients.includes(id));
    return c ? c.message : null;
  }

  destroy() { this.room.destroy(); }
}

module.exports = { Game, distributionFor };

'use strict';

// Bir koltuğun (botun) TEK oyunluk kaydı. BİLGİ SINIRI: yalnızca o koltuğun room.viewFor(botId)
// görünümlerinden (herkese açık günlük satırları, oyuncu listesi, gündüz oyları, kendi gece görünümü,
// kendi özel notları) ve koltuğa gelen sohbet mesajlarından beslenir. Room'a hiç dokunmaz.
//
// Kayıt sıralıdır: evre başlıkları, herkese açık olaylar (ölümler, oy sonuçları, avcı, mahkeme, olaylar)
// ve sohbet satırları geldikleri sırayla. Her oyun için yeni bir kayıt kurulur (oyunlar karışmaz).

const EVIL = new Set(['vampir', 'iftiraci', 'temizlikci']);
const HOW = {
  'vampir tarafından öldürüldü': 'vampir',
  'zehirlenerek öldü': 'zehir',
  'soyulup öldürüldü': 'hirsiz',
};
const RE_NIGHT_DEATH = /^(\d+)\. gece (.+?) (vampir tarafından öldürüldü|zehirlenerek öldü|soyulup öldürüldü)\.(.*)$/;
const RE_HANG = /^(\d+)\. gün (.+) (\d+) oyla (asıldı|köyden sürüldü|mahzene kapatıldı)\.(.*)$/;
const RE_SHOT = /^Avcı (.*) son atışıyla (.+) oyuncusunu vurdu\.(.*)$/;
const RE_LEFT = /^(.+) oyundan ayrıldı(?: \((.+)\))?\.$/;
const RE_HUNTER = /^(.+) bir avcıydı!/;
const RE_TRIAL = /^(\d+)\. gün mahkeme: (.+) yargılanıyor\./;
const RE_PHASE = /^(\d+)\. (gece|gün) başladı\./;
const RE_EVENT = /^(\d+)\. (gece|gün): ([^.]+)\. (.*)$/;
const RE_NOTE_ROUND = /(\d+)\. (?:gece|tur)\b/;

const CHAT_MAX = 600;      // kayıtta tutulan en fazla sohbet satırı (kendi satırları hep kalır)

function clone(x) { return x == null ? x : JSON.parse(JSON.stringify(x)); }

class SeatRecord {
  constructor(seatId) {
    this.seatId = seatId;
    this.items = [];          // { k, ... } sıralı
    this.seen = new Set();    // tüketilen günlük satırları
    this.start = null;        // oyun başındaki lobi kuralı (herkese açık)
    this.deaths = [];         // { id, name, round, when: 'night'|'day'|'shot'|'left', cause, hidden }
    this.votes = [];          // gün sonu oy fotoğrafları (görünümdeki gibi; sis gününde gizli)
    this.nights = new Map();  // tur -> kendi gece görünümü (gösterim aşamasının başında)
    this.hunters = new Set(); // herkese "avcıydı" diye duyurulanlar
    this.chats = 0;
  }

  // Görünümdeki yeni herkese açık günlük satırlarını kayda geçirir (bu oyunun satırları).
  sync(view) {
    if (!view || !view.room) return;
    if (!this.start) {
      const active = (view.players || []).filter((p) => !p.left).length;
      this.start = {
        distribution: [...(view.room.distribution || [])],
        rolePool: clone(view.room.rolePool || null),
        size: active,
        revealRoles: Boolean(view.room.settings && view.room.settings.revealRoles),
        // Kötü takımdaki bot başlangıçta takım arkadaşlarını görür (sonradan iftira yüzünden "Vampir" görünen
        // masumlar bu listede olmaz).
        mates: view.me && EVIL.has(view.me.role)
          ? (view.players || []).filter((p) => p.id !== view.me.id && p.role && EVIL.has(p.role)).map((p) => p.id) : [],
      };
    }
    const log = view.log || [];
    let from = 0;
    for (let i = log.length - 1; i >= 0; i--) {
      if (log[i].kind === 'info' && /^Oyun başladı/.test(log[i].text)) { from = i; break; }
    }
    for (let i = from; i < log.length; i++) {
      const l = log[i];
      const key = `${l.ts}|${l.kind}|${l.text}`;
      if (this.seen.has(key)) continue;
      this.seen.add(key);
      this.consume(l, view);
    }
    // Günlükte biçimi tanınmayan bir ölüm/ayrılma olsa bile oyuncu listesinden yakalanır.
    for (const p of view.players || []) {
      if ((p.alive && !p.left) || this.deaths.some((x) => x.id === p.id)) continue;
      const d = { id: p.id, name: p.name, round: this.lastRound(), at: this.lastPhase(), when: this.lastPhase(), cause: p.left ? 'left' : 'unknown', trueRole: Boolean(p.left) };
      this.deaths.push(d);
      this.items.push({ k: 'death', d });
    }
  }

  byName(view, name) {
    return (view.players || []).find((p) => p.name === name) || null;
  }

  lastPhaseItem() {
    for (let i = this.items.length - 1; i >= 0; i--) if (this.items[i].k === 'phase') return this.items[i];
    return null;
  }

  lastRound() { const p = this.lastPhaseItem(); return p ? p.round : 0; }

  lastPhase() { const p = this.lastPhaseItem(); return p ? p.phase : 'night'; }

  consume(l, view) {
    const text = String(l.text || '');
    let m;
    switch (l.kind) {
      case 'info':
        if (/^Oyun başladı/.test(text)) { this.items.push({ k: 'start' }); return; }
        if ((m = text.match(RE_HUNTER))) {
          const p = this.byName(view, m[1]);
          if (p) { this.hunters.add(p.id); this.items.push({ k: 'hunter', id: p.id }); }
          return;
        }
        if ((m = text.match(RE_TRIAL))) {
          const players = view.players || [];
          for (const a of players) {
            for (const b of players) {
              if (a.id !== b.id && m[2] === `${a.name} ve ${b.name}`) {
                this.items.push({ k: 'court', round: Number(m[1]), ids: [a.id, b.id] });
                return;
              }
            }
          }
        }
        return;
      case 'night':
      case 'day':
        if ((m = text.match(RE_PHASE))) this.items.push({ k: 'phase', phase: m[2] === 'gece' ? 'night' : 'day', round: Number(m[1]) });
        return;
      case 'event':
        if ((m = text.match(RE_EVENT))) this.items.push({ k: 'event', round: Number(m[1]), name: m[3], desc: m[4] });
        return;
      case 'safe':
        if ((m = text.match(/^(\d+)\. gece kimse ölmedi/))) this.items.push({ k: 'nodeath', round: Number(m[1]) });
        else if ((m = text.match(/^(\d+)\. gün köy oy birliğiyle uyumaya/))) this.items.push({ k: 'nohang', round: Number(m[1]), why: 'sleep' });
        else if ((m = text.match(/^(\d+)\. gün kimse asılmadı \((.+)\)/))) this.items.push({ k: 'nohang', round: Number(m[1]), why: /oy vermedi/.test(m[2]) ? 'novote' : 'tie' });
        else if (/^Avcı kimseyi vurmadı/.test(text)) this.items.push({ k: 'noshot', round: this.lastRound() });
        return;
      case 'death':
        this.consumeDeath(text, view);
        return;
      default:
    }
  }

  consumeDeath(text, view) {
    let m;
    let d = null;
    const hiddenOf = (rest) => (/izler silinmiş/.test(rest) ? 'cleaned' : (/çalındı/.test(rest) ? 'stolen' : null));
    if ((m = text.match(RE_NIGHT_DEATH))) {
      const p = this.byName(view, m[2]);
      if (p) d = { id: p.id, name: p.name, round: Number(m[1]), when: 'night', cause: HOW[m[3]], hidden: hiddenOf(m[4]) };
    } else if ((m = text.match(RE_HANG))) {
      const p = this.byName(view, m[2]);
      if (p) d = { id: p.id, name: p.name, round: Number(m[1]), when: 'day', cause: 'hanged', votes: Number(m[3]) };
    } else if ((m = text.match(RE_SHOT))) {
      const p = this.byName(view, m[2]);
      const h = this.byName(view, m[1]);
      if (p) d = { id: p.id, name: p.name, round: this.lastRound(), at: this.lastPhase(), when: 'shot', cause: 'shot', by: h ? h.id : null, trueRole: true };
    } else if ((m = text.match(RE_LEFT))) {
      const p = this.byName(view, m[1]);
      if (p) d = { id: p.id, name: p.name, round: this.lastRound(), at: this.lastPhase(), when: 'left', cause: 'left', trueRole: true };
    }
    if (!d || this.deaths.some((x) => x.id === d.id)) return;
    if (d.cause === 'hanged') {
      const v = [...this.votes].reverse().find((x) => x.round === d.round);
      if (v) d.voteRef = v;
    }
    this.deaths.push(d);
    this.items.push({ k: 'death', d });
  }

  // Koltuğa gelen sohbet mesajı (yalnızca oyun evrelerinde çağrılır).
  addChat(message, view) {
    if (!message) return;
    this.sync(view);
    this.items.push({ k: 'chat', m: message });
    this.chats += 1;
    if (this.chats > CHAT_MAX) {
      const i = this.items.findIndex((it) => it.k === 'chat' && it.m.fromId !== this.seatId);
      if (i >= 0) { this.items.splice(i, 1); this.chats -= 1; }
    }
  }

  // Gün (ya da mahkeme oylaması) biterken herkese açık oy fotoğrafı (SmartBots toplar; sis gününde
  // kimin kime verdiği zaten gizli, yalnızca sayılar kalır). Günlük satırı işlenmeden ÖNCE eklenir ki asılan
  // kişinin oyları ölüm satırına bağlanabilsin; bu yüzden burada sync yapılmaz.
  addVoteSnapshot(snap) {
    if (!snap) return;
    const v = clone(snap);
    this.votes.push(v);
    this.items.push({ k: 'votes', v });
  }

  // Gecenin gösterim aşamasının başında botun kendi gece görünümü (seçimi, iksirleri, kendi yürüyüşü).
  addNight(view) {
    this.sync(view);
    const round = view.room.round;
    if (this.nights.has(round) || !view.me || !view.me.alive) return;
    this.nights.set(round, { role: view.me.role, alive: view.me.alive, night: clone(view.night) });
  }

  // Notları turlara ayırır (her not "N. gece:" / "N. tur:" ile başlar).
  static notesByRound(notes) {
    const out = new Map();
    for (const n of notes || []) {
      const m = String(n.text || '').match(RE_NOTE_ROUND);
      const r = m ? Number(m[1]) : 0;
      if (!out.has(r)) out.set(r, []);
      out.get(r).push(n.text);
    }
    return out;
  }
}

module.exports = { SeatRecord, RE_NIGHT_DEATH, RE_HANG, RE_SHOT, RE_LEFT };

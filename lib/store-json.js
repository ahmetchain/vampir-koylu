'use strict';

// Hesapları tek bir JSON dosyasında tutan depo (varsayılan). Veri bellekte durur, her değişiklikte
// dosyaya atomik olarak yazılır (önce geçici dosya, sonra yeniden adlandırma). Yazmalar sıraya
// alınır; aynı anda gelen istekler dosyayı bozamaz. Tek sunucu süreci için tasarlandı.

const fs = require('fs');
const path = require('path');
const { emptyStats, applyResult, TEAMS } = require('./stats');

const FILE_NAME = 'accounts.json';

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class JsonStore {
  constructor({ dir }) {
    this.kind = 'json';
    this.dir = dir;
    this.file = path.join(dir, FILE_NAME);
    this.users = new Map();      // id -> kayıt
    this.byKey = new Map();      // küçük harfli kullanıcı adı -> id
    this.sessions = new Map();   // token özeti -> { userId, expiresAt }
    this.dirty = false;
    this.saving = null;
    this.writeCount = 0;
  }

  async init() {
    await fs.promises.mkdir(this.dir, { recursive: true });
    let raw = null;
    try {
      raw = await fs.promises.readFile(this.file, 'utf8');
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
    if (raw) {
      const data = JSON.parse(raw);
      for (const u of Object.values(data.users || {})) {
        const user = { ...u, stats: { ...emptyStats(), ...(u.stats || {}) } };
        user.stats.teams = { ...emptyStats().teams, ...((u.stats && u.stats.teams) || {}) };
        this.users.set(user.id, user);
        this.byKey.set(user.key, user.id);
      }
      const now = Date.now();
      for (const [hash, s] of Object.entries(data.sessions || {})) {
        if (s.expiresAt > now && this.users.has(s.userId)) this.sessions.set(hash, { ...s });
      }
    }
  }

  async close() {
    while (this.saving) await this.saving.catch(() => {});
  }

  // ---------- kullanıcılar ----------

  async createUser(user) {
    if (this.byKey.has(user.key)) {
      const err = new Error('Kullanıcı adı alınmış.');
      err.code = 'taken';
      throw err;
    }
    const record = { ...clone(user), stats: emptyStats() };
    this.users.set(record.id, record);
    this.byKey.set(record.key, record.id);
    await this.save();
    return clone(record);
  }

  async getUser(id) {
    return clone(this.users.get(id)) || null;
  }

  async findUserByKey(key) {
    const id = this.byKey.get(key);
    return id ? clone(this.users.get(id)) : null;
  }

  async updateLook(id, look) {
    const user = this.users.get(id);
    if (!user) return null;
    user.look = { ...look };
    await this.save();
    return clone(user);
  }

  async recordResults(results) {
    let changed = false;
    for (const r of results) {
      const user = this.users.get(r.userId);
      if (!user || !TEAMS.includes(r.team)) continue;
      applyResult(user.stats, r.team, r.won);
      changed = true;
    }
    if (changed) await this.save();
  }

  async leaderboard(limit) {
    return [...this.users.values()]
      .filter((u) => u.stats.games > 0)
      .sort((a, b) => b.stats.wins - a.stats.wins || a.stats.games - b.stats.games || (a.key < b.key ? -1 : a.key > b.key ? 1 : 0))
      .slice(0, limit)
      .map(clone);
  }

  // ---------- oturumlar ----------

  async createSession(tokenHash, userId, expiresAt) {
    this.sessions.set(tokenHash, { userId, expiresAt });
    await this.save();
  }

  async getSession(tokenHash) {
    const s = this.sessions.get(tokenHash);
    return s ? { ...s } : null;
  }

  async touchSession(tokenHash, expiresAt) {
    const s = this.sessions.get(tokenHash);
    if (!s) return;
    s.expiresAt = expiresAt;
    await this.save();
  }

  async deleteSession(tokenHash) {
    if (this.sessions.delete(tokenHash)) await this.save();
  }

  async deleteExpiredSessions(now) {
    let removed = 0;
    for (const [hash, s] of this.sessions) {
      if (s.expiresAt <= now) { this.sessions.delete(hash); removed += 1; }
    }
    if (removed) await this.save();
    return removed;
  }

  // ---------- dosyaya yazma ----------

  // Değişiklikler birikir; tek seferde bir yazma yapılır, yazma sürerken gelen değişiklikler
  // bir sonraki turda yazılır. Dönen söz, çağıranın değişikliği diske ulaşınca çözülür.
  save() {
    this.dirty = true;
    if (!this.saving) this.saving = this.flushLoop();
    return this.saving;
  }

  async flushLoop() {
    try {
      while (this.dirty) {
        this.dirty = false;
        const data = {
          version: 1,
          users: Object.fromEntries(this.users),
          sessions: Object.fromEntries(this.sessions),
        };
        try {
          await this.writeAtomic(JSON.stringify(data));
        } catch (err) {
          this.dirty = true;   // bir sonraki değişiklikte tekrar denenir
          throw err;
        }
      }
    } finally {
      // Döngü bittiği an (arada bekleme olmadan) serbest bırakılır; yeni değişiklik yeni bir tur başlatır.
      this.saving = null;
    }
  }

  async writeAtomic(text) {
    this.writeCount += 1;
    const tmp = `${this.file}.${process.pid}.${this.writeCount}.tmp`;
    await fs.promises.writeFile(tmp, text, 'utf8');
    // Windows'ta hedef dosya o an başka bir süreçte (ör. antivirüs) açıksa yeniden adlandırma
    // kısa süreliğine başarısız olabilir; birkaç kez dene.
    for (let attempt = 0; ; attempt++) {
      try {
        await fs.promises.rename(tmp, this.file);
        return;
      } catch (err) {
        if (attempt >= 5 || !['EPERM', 'EBUSY', 'EACCES'].includes(err.code)) {
          await fs.promises.unlink(tmp).catch(() => {});
          throw err;
        }
        await sleep(20 * (attempt + 1));
      }
    }
  }
}

module.exports = { JsonStore, FILE_NAME };

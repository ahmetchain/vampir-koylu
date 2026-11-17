'use strict';

// Hesapları tek bir JSON dosyasında tutan depo (varsayılan). Veri bellekte durur, her değişiklikte
// dosyaya atomik olarak yazılır (önce geçici dosya, sonra yeniden adlandırma). Yazmalar sıraya
// alınır; aynı anda gelen istekler dosyayı bozamaz. Tek sunucu süreci için tasarlandı.

const fs = require('fs');
const path = require('path');
const { emptyStats, applyResult, TEAMS } = require('./stats');

const FILE_NAME = 'accounts.json';
const REVIEWS_FILE_NAME = 'ai-reviews.json';   // oyun sonu bot incelemeleri (hesap dosyasından ayrı: büyük)
const MAX_AI_REVIEWS = 200;
const GAMELOGS_FILE_NAME = 'game-logs.json';   // her oyunun tam geçmişi (sıkıştırılmış); büyük olduğu için ayrı dosya
const MAX_GAME_LOGS = 500;                    // en yeni bu kadar oyun
const MAX_GAME_LOG_BYTES = 200 * 1024 * 1024; // ya da bu kadar sıkıştırılmış veri (hangisi önce dolarsa)

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class JsonStore {
  // gameLogLimits: testlerde saklama sınırları ({ max, bytes }).
  constructor({ dir, gameLogLimits = {} }) {
    this.kind = 'json';
    this.dir = dir;
    this.file = path.join(dir, FILE_NAME);
    this.reviewsFile = path.join(dir, REVIEWS_FILE_NAME);
    this.gameLogsFile = path.join(dir, GAMELOGS_FILE_NAME);
    this.gameLogs = [];          // en yeni sonda
    this.gameLogSaving = Promise.resolve();
    this.gameLogMax = gameLogLimits.max || MAX_GAME_LOGS;
    this.gameLogBytes = gameLogLimits.bytes || MAX_GAME_LOG_BYTES;
    this.reviews = [];           // en yeni sonda; en çok MAX_AI_REVIEWS
    this.reviewSaving = Promise.resolve();
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
    try {
      const list = JSON.parse(await fs.promises.readFile(this.reviewsFile, 'utf8'));
      if (Array.isArray(list.reviews)) this.reviews = list.reviews.slice(-MAX_AI_REVIEWS);
    } catch (err) {
      if (err.code !== 'ENOENT') console.error('İnceleme dosyası okunamadı, boş başlanıyor:', err.message);
    }
    try {
      const list = JSON.parse(await fs.promises.readFile(this.gameLogsFile, 'utf8'));
      if (Array.isArray(list.logs)) this.gameLogs = list.logs;
    } catch (err) {
      if (err.code !== 'ENOENT') console.error('Oyun geçmişi dosyası okunamadı, boş başlanıyor:', err.message);
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
    await this.reviewSaving.catch(() => {});
    await this.gameLogSaving.catch(() => {});
  }

  // ---------- bot incelemeleri ----------
  // satır: { id, createdAt, room, model, cost, summary, mistakes, high, medium, low, record (sıkıştırılmış metin), review }

  async saveAiReview(row) {
    this.reviews.push(clone(row));
    if (this.reviews.length > MAX_AI_REVIEWS) this.reviews.splice(0, this.reviews.length - MAX_AI_REVIEWS);
    const text = JSON.stringify({ version: 1, reviews: this.reviews });
    // Yazmalar sıraya girer; her yazma o anki en yeni içeriği yazar.
    this.reviewSaving = this.reviewSaving.catch(() => {}).then(() => this.writeAtomic(text, this.reviewsFile));
    return this.reviewSaving;
  }

  // En yeni önce; özet alanları (kayıt ve tam inceleme olmadan). since: bu zamandan (ms) sonrakiler.
  async listAiReviews({ limit = 50, since = 0 } = {}) {
    return this.reviews.filter((r) => r.createdAt > since).slice().reverse().slice(0, Math.min(MAX_AI_REVIEWS, Math.max(1, limit)))
      .map(({ record, review, ...meta }) => meta);
  }

  async getAiReview(id) {
    return clone(this.reviews.find((r) => r.id === id)) || null;
  }

  // ---------- oyun geçmişi ----------
  // satır: { id, createdAt, room, startedAt, endedAt, end, winner, players, humans, bots, smart, rounds, size, reviewId, record (sıkıştırılmış metin) }
  // Saklama: en yeni gameLogMax oyun ve toplam size ≤ gameLogBytes.

  trimGameLogs() {
    while (this.gameLogs.length > this.gameLogMax) this.gameLogs.shift();
    let total = this.gameLogs.reduce((n, r) => n + (r.size || 0), 0);
    while (this.gameLogs.length > 1 && total > this.gameLogBytes) total -= this.gameLogs.shift().size || 0;
  }

  persistGameLogs() {
    const text = JSON.stringify({ version: 1, logs: this.gameLogs });
    this.gameLogSaving = this.gameLogSaving.catch(() => {}).then(() => this.writeAtomic(text, this.gameLogsFile));
    return this.gameLogSaving;
  }

  async saveGameLog(row) {
    this.gameLogs.push({ reviewId: null, ...clone(row) });
    this.trimGameLogs();
    return this.persistGameLogs();
  }

  // En yeni önce; kayıt metni olmadan.
  async listGameLogs({ limit = 50, since = 0 } = {}) {
    return this.gameLogs.filter((r) => r.createdAt > since).slice().reverse().slice(0, Math.min(this.gameLogMax, Math.max(1, limit)))
      .map(({ record, analysis, ...meta }) => ({ ...meta, analyzedAt: meta.analyzedAt || null, analysisCost: meta.analysisCost == null ? null : meta.analysisCost, analysisModel: meta.analysisModel || null }));
  }

  async getGameLog(id) {
    const row = clone(this.gameLogs.find((r) => r.id === id));
    return row ? { ...row, analysis: row.analysis || null, analyzedAt: row.analyzedAt || null } : null;
  }

  // Çözümleme (lib/ai/analyze.js) oyun geçmişinin yanına yazılır (varsa üzerine); satır yoksa false.
  async saveGameLogAnalysis(id, { text, cost = 0, model = '', analyzedAt = Date.now() }) {
    const row = this.gameLogs.find((r) => r.id === id);
    if (!row) return false;
    Object.assign(row, { analysis: String(text), analysisCost: Number(cost) || 0, analysisModel: String(model || ''), analyzedAt: Number(analyzedAt) || Date.now() });
    await this.persistGameLogs();
    return true;
  }

  // İnceleme bittiğinde oyun geçmişine bağlanır (yoksa sessizce false).
  async linkGameLogReview(id, reviewId) {
    const row = this.gameLogs.find((r) => r.id === id);
    if (!row) return false;
    row.reviewId = reviewId;
    await this.persistGameLogs();
    return true;
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
      if (!user) continue;
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

  async writeAtomic(text, file = this.file) {
    this.writeCount += 1;
    const tmp = `${file}.${process.pid}.${this.writeCount}.tmp`;
    await fs.promises.writeFile(tmp, text, 'utf8');
    // Windows'ta hedef dosya o an başka bir süreçte (ör. antivirüs) açıksa yeniden adlandırma
    // kısa süreliğine başarısız olabilir; birkaç kez dene.
    for (let attempt = 0; ; attempt++) {
      try {
        await fs.promises.rename(tmp, file);
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

module.exports = { JsonStore, FILE_NAME, REVIEWS_FILE_NAME, GAMELOGS_FILE_NAME, MAX_AI_REVIEWS, MAX_GAME_LOGS, MAX_GAME_LOG_BYTES };

'use strict';

// Basit sabit pencereli istek sınırı: her anahtar (IP) için windowMs içinde en fazla max istek.
class RateLimiter {
  constructor({ windowMs, max, now = Date.now }) {
    this.windowMs = windowMs;
    this.max = max;
    this.now = now;
    this.hits = new Map();
  }

  // { ok, retryAfter (saniye) }
  hit(key) {
    const now = this.now();
    if (this.hits.size > 10000) this.sweep(now);
    let entry = this.hits.get(key);
    if (!entry || entry.resetAt <= now) {
      entry = { count: 0, resetAt: now + this.windowMs };
      this.hits.set(key, entry);
    }
    entry.count += 1;
    if (entry.count > this.max) {
      return { ok: false, retryAfter: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)) };
    }
    return { ok: true, retryAfter: 0 };
  }

  sweep(now = this.now()) {
    for (const [key, entry] of this.hits) if (entry.resetAt <= now) this.hits.delete(key);
  }
}

module.exports = { RateLimiter };

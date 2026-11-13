// Kalite kademeleri ve otomatik ayar (ölçülen kare süresine göre, histerezisli).
export const TIERS = {
  low: { name: 'low', px: 1.0, shadows: 0, fps: 30, sparks: 20, fireflies: 14, clouds: false, blob: true, charShadow: false, shadowSize: 0, weather: 220 },
  medium: { name: 'medium', px: 1.5, shadows: 1, fps: 60, sparks: 44, fireflies: 32, clouds: true, blob: true, charShadow: false, shadowSize: 1024, weather: 480 },
  high: { name: 'high', px: 2.0, shadows: 2, fps: 60, sparks: 70, fireflies: 56, clouds: true, blob: false, charShadow: true, shadowSize: 2048, weather: 900 },
};
export const ORDER = ['low', 'medium', 'high'];

// Cihaza göre dekor yoğunluğu (oluşturulurken bir kez seçilir)
export function detailFor(mobile) {
  return mobile
    ? { trees: 150, scatter: 90, groundTex: 1024 }
    : { trees: 260, scatter: 170, groundTex: 2048 };
}

export function isMobile() {
  const ua = navigator.userAgent || '';
  return /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) < 820);
}

export class AutoQuality {
  constructor(start) {
    this.level = start;
    this.samples = 0; this.sum = 0; this.windowStart = 0;
    this.bad = 0; this.good = 0;
    this.failed = new Set();
  }
  reset() { this.samples = 0; this.sum = 0; this.windowStart = 0; this.bad = 0; this.good = 0; }
  // dt: iki kare arası (ms). Döndürür: yeni seviye veya null
  sample(dtMs, now) {
    if (dtMs > 250) return null; // sekme değişimi vb.
    if (!this.windowStart) this.windowStart = now;
    this.sum += dtMs; this.samples++;
    if (now - this.windowStart < 2000) return null;
    const avg = this.sum / this.samples;
    this.sum = 0; this.samples = 0; this.windowStart = now;
    const tier = TIERS[this.level];
    const budget = tier.fps === 30 ? 40 : 38; // < ~26 fps kötü
    if (avg > budget) { this.bad++; this.good = 0; } else if (avg < (tier.fps === 30 ? 34 : 15)) { this.good++; this.bad = 0; } else { this.bad = 0; this.good = 0; }
    const i = ORDER.indexOf(this.level);
    if (this.bad >= 2 && i > 0) {
      this.failed.add(this.level);
      this.level = ORDER[i - 1];
      this.bad = 0; this.good = 0;
      return this.level;
    }
    if (this.good >= 6 && i < ORDER.length - 1 && !this.failed.has(ORDER[i + 1])) {
      this.level = ORDER[i + 1];
      this.good = 0;
      return this.level;
    }
    return null;
  }
}

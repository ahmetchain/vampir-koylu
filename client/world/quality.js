// Kalite kademeleri, otomatik ayar (hızlı karar, histerezis, cihaz başına hatırlanır) ve dinamik çözünürlük.
// pxMobile: telefonlarda piksel oranı tavanı (yüksek DPR'li ekranlarda dolgu maliyeti belirleyici).
export const TIERS = {
  saver: { name: 'saver', px: 0.85, pxMobile: 0.75, shadows: 0, fps: 30, sparks: 10, fireflies: 0, clouds: false, blob: true, charShadow: false, shadowSize: 0, weather: 120, animLod: 2, labelHz: 15, glows: 0.6 },
  low: { name: 'low', px: 1.0, pxMobile: 1.0, shadows: 0, fps: 60, sparks: 20, fireflies: 12, clouds: false, blob: true, charShadow: false, shadowSize: 0, weather: 220, animLod: 1, labelHz: 30, glows: 1 },
  medium: { name: 'medium', px: 1.5, pxMobile: 1.3, shadows: 1, fps: 60, sparks: 44, fireflies: 32, clouds: true, blob: true, charShadow: false, shadowSize: 1024, weather: 480, animLod: 1, labelHz: 60, glows: 1 },
  high: { name: 'high', px: 2.0, pxMobile: 1.75, shadows: 2, fps: 60, sparks: 70, fireflies: 56, clouds: true, blob: false, charShadow: true, shadowSize: 2048, weather: 900, animLod: 1, labelHz: 60, glows: 1 },
};
export const ORDER = ['saver', 'low', 'medium', 'high'];

// Cihaza göre dekor yoğunluğu (oluşturulurken bir kez seçilir)
export function detailFor(mobile) {
  return mobile
    ? { trees: 140, scatter: 80, groundTex: 1024 }
    : { trees: 260, scatter: 170, groundTex: 2048 };
}

export function isMobile() {
  const ua = navigator.userAgent || '';
  return /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) < 820);
}

// İlk tahmin: telefon orta; zayıf işaretler (az çekirdek, az bellek) düşük
export function guessTier(mobile) {
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  if (!mobile) return cores <= 2 ? 'medium' : 'high';
  if (cores <= 4 || mem <= 3) return 'low';
  return 'medium';
}

const KEY = 'vkw.quality.v2';
function load() { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* özel sekme */ } }

// Otomatik kalite: 1 sn'lik pencereler, 2.5 sn ısınma. Karar p75'e göre (tek tük takılmalar kademe düşürmez);
// kötü pencere art arda üç kez (çok kötüyse daha hızlı) -> bir kademe aşağı. Yukarı çıkış: 12 sn kesintisiz iyi;
// bir kez başarısız olmuş kademe için 30 sn; iki kez başarısız olan kademe bu cihazda bir daha denenmez (salınım yok).
// 30 kare/sn kademesinde (tasarruf) "iyi" = JS süresi düşük (bir üst kademe 60 kare/sn'ye yakın gidebilir). Sonuç cihazda saklanır.
export class AutoQuality {
  constructor(fallback) {
    const st = load();
    this.fails = {};
    if (st && Array.isArray(st.failed)) for (const t of st.failed) this.fails[t] = 1;
    else if (st && st.fails && typeof st.fails === 'object') for (const t of Object.keys(st.fails)) if (TIERS[t]) this.fails[t] = +st.fails[t] || 0;
    this.level = st && TIERS[st.tier] ? st.tier : fallback;
    this.remembered = !!(st && TIERS[st.tier]);
    this.reset();
  }
  // geriye dönük: ayarlardan 'auto' seçilince temizlenir
  get failed() { const self = this; return { clear() { self.fails = {}; }, has: (t) => (self.fails[t] || 0) >= 2 }; }
  reset() { this.buf = []; this.cpu = []; this.windowStart = 0; this.bad = 0; this.good = 0; this.warm = 0; }
  persist() { save({ tier: this.level, fails: this.fails, at: Date.now() }); }
  // dtMs: kare aralığı, cpuMs: JS süresi (adım + çizim gönderimi)
  sample(dtMs, cpuMs, now) {
    if (dtMs > 250) return null;            // sekme değişimi, yükleme takılması
    if (!this.windowStart) { this.windowStart = now; this.warm = now + 2500; } // ilk saniyeler: gölgelendirici derleme, doku yükleme
    if (now < this.warm) return null;
    this.buf.push(dtMs); this.cpu.push(cpuMs);
    if (now - this.windowStart < 1000) return null;
    const b = this.buf.slice().sort((x, y) => x - y);
    const c = this.cpu.slice().sort((x, y) => x - y);
    const p75 = b[Math.floor(b.length * 0.75)] || 0, p90 = b[Math.floor(b.length * 0.9)] || 0;
    const c75 = c[Math.floor(c.length * 0.75)] || 0;
    this.buf.length = 0; this.cpu.length = 0; this.windowStart = now;
    const tier = TIERS[this.level];
    const slow30 = tier.fps === 30;
    const budget = slow30 ? 40 : 30;    // ~25 / 33 kare/sn altı kötü
    const i = ORDER.indexOf(this.level);
    const isBad = p75 > budget || p90 > budget * 1.8;
    const isGood = slow30 ? (p90 < 36 && c75 < 11) : p75 < 18 && p90 < 26;
    if (isBad) { this.bad += p75 > budget * 1.6 ? 2 : 1; this.good = 0; } else if (isGood) { this.good++; this.bad = 0; } else { this.good = 0; this.bad = Math.max(0, this.bad - 1); }
    if (this.bad >= 3 && i > 0) {
      this.fails[this.level] = (this.fails[this.level] || 0) + 1;
      this.level = ORDER[i - 1];
      this.bad = 0; this.good = 0; this.warm = now + 800;
      this.persist();
      return this.level;
    }
    const up = ORDER[i + 1];
    if (up && this.good >= ((this.fails[up] || 0) ? 30 : 12) && (this.fails[up] || 0) < 2) {
      this.level = up;
      this.good = 0; this.warm = now + 800;
      this.persist();
      return this.level;
    }
    if (this.good === 5 && !this.remembered) { this.remembered = true; this.persist(); }
    return null;
  }
}

// Dinamik çözünürlük: GPU/dolgu kaynaklı yavaşlıkta (JS süresi kare süresinin küçük bir kısmıyken) ölçeği düşürür.
// CPU kaynaklı yavaşlıkta dokunmaz (çözünürlüğü düşürmek işe yaramaz). Adımlar küçük, değişimler seyrek.
export class DynamicRes {
  constructor() { this.scale = 1; this.buf = []; this.cpu = []; this.t0 = 0; this.lastChange = 0; this.goodFor = 0; }
  reset() { this.buf.length = 0; this.cpu.length = 0; this.t0 = 0; this.trial = null; }
  sample(dtMs, cpuMs, now, targetMs) {
    if (dtMs > 250) return null;
    if (!this.t0) this.t0 = now;
    this.buf.push(dtMs); this.cpu.push(cpuMs);
    if (now - this.t0 < 1000) return null;
    const b = this.buf.slice().sort((x, y) => x - y);
    const p90 = b[Math.floor(b.length * 0.9)] || 0;
    const cpu = this.cpu.reduce((s, x) => s + x, 0) / this.cpu.length;
    this.buf.length = 0; this.cpu.length = 0; this.t0 = now;
    // deneme: son düşürme kareyi hızlandırmadıysa (darboğaz CPU) geri al ve bir süre deneme
    if (this.trial && now - this.trial.at >= 1000) {
      const t = this.trial; this.trial = null;
      if (p90 > t.p90 * 0.92) {
        this.scale = t.prev; this.lastChange = now + 20000; this.goodFor = 0;
        return this.scale;
      }
    }
    if (now - this.lastChange < 1500) return null;
    const gpuBound = cpu < p90 * 0.55;
    if (p90 > targetMs * 1.2 && gpuBound && this.scale > 0.6) {
      this.trial = { at: now, p90, prev: this.scale };
      this.scale = Math.max(0.6, +(this.scale - 0.1).toFixed(2)); this.lastChange = now; this.goodFor = 0;
      return this.scale;
    }
    if (p90 < targetMs * 0.85) this.goodFor++; else this.goodFor = 0;
    if (this.goodFor >= 4 && this.scale < 1) {
      this.scale = Math.min(1, +(this.scale + 0.05).toFixed(2)); this.lastChange = now; this.goodFor = 0;
      return this.scale;
    }
    return null;
  }
}

// Uygulamanın ortak durumu: oturum, soket, son oda durumu. Modüller bu nesneyi paylaşır.
import { toast } from './kit.js';

export const ctx = {
  user: null,            // /api/me kullanıcı nesnesi
  socket: null,
  state: null,           // son `state`
  receivedAt: 0,
  clockOffset: 0,        // serverNow - Date.now()
  view: 'splash',        // splash | auth | menu | room | down
  roomId: null,          // bağlı olduğumuz oda
  witchMode: 'heal',
  statsBefore: null,     // oyun başlarken profil istatistikleri (oyun sonu farkı için)
  listeners: {},
};

export function on(ev, fn) {
  (ctx.listeners[ev] = ctx.listeners[ev] || []).push(fn);
  return () => { ctx.listeners[ev] = (ctx.listeners[ev] || []).filter((f) => f !== fn); };
}
export function emitLocal(ev, ...args) { (ctx.listeners[ev] || []).forEach((fn) => { try { fn(...args); } catch (e) { console.warn(e); } }); }

// Sunucuya olay gönderir; hata varsa bildirim gösterir. Promise ile ack döner.
export function send(event, data, { quiet = false } = {}) {
  return new Promise((resolve) => {
    const s = ctx.socket;
    if (!s || !s.connected) {
      if (!quiet) toast('Sunucuya bağlı değilsin, yeniden bağlanılıyor…', 'error');
      resolve({ ok: false, error: 'offline' });
      return;
    }
    let done = false;
    const timer = setTimeout(() => { if (!done) { done = true; resolve({ ok: false, error: 'Sunucu cevap vermedi.' }); } }, 10000);
    s.emit(event, data === undefined ? {} : data, (res) => {
      if (done) return;
      done = true; clearTimeout(timer);
      if (res && res.ok === false && !quiet) toast(res.error, 'error');
      resolve(res || { ok: false });
    });
  });
}

export const serverNow = () => Date.now() + ctx.clockOffset;

export function me() { return ctx.state && ctx.state.me; }
export function playerById(id) { return ctx.state && ctx.state.players.find((p) => p.id === id); }
export function iAmHost() { return !!(ctx.state && ctx.state.me && ctx.state.room.hostId === ctx.state.me.id); }

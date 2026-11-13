// Seçilebilirlik ve gece ziyaretleri: v1 public/scene.js kuralları v2 rollerine taşındı
// (ui/rules.js ile aynı mantık; sunucu kuralları docs/PROTOCOL.md §7).
import { EVIL, ROLE_MARK } from './constants.js';

// Arayüzün kuralları (window.VKRules) varsa onlar esas alınır: iki taraf asla farklı karar vermesin.
const UI = () => (typeof window !== 'undefined' && window.VKRules) || null;

export function action(state) {
  const u = UI(); if (u && u.action) return u.action(state);
  if (!state || !state.me) return null;
  const { room, me } = state;
  if (room.phase === 'night' && me.alive && state.night) return 'night';
  if (room.phase === 'day' && me.alive && state.day) return 'vote';
  if (room.phase === 'hunter' && room.hunterId === me.id) return 'shoot';
  return null;
}

export function witchBlocked(state, witchMode) {
  const u = UI(); if (u && u.witchBlocked) return u.witchBlocked(state, witchMode);
  const w = state.night && state.night.witch;
  if (!w) return false;
  return witchMode === 'poison' ? w.poisonUsed : w.healUsed;
}

export function selectable(state, p, witchMode) {
  const u = UI(); if (u && u.selectable) return !!u.selectable(state, p, witchMode);
  const act = action(state);
  if (!act || !p || !p.alive || p.left) return false;
  const me = state.me;
  const isMe = p.id === me.id;
  if (act === 'vote' || act === 'shoot') return !isMe;
  switch (me.role) {
    case 'vampir': return !isMe && !EVIL[p.role];
    case 'iftiraci': return !isMe && !EVIL[p.role];
    case 'doktor': return true;
    case 'gozcu': return true;
    case 'kahin': return !isMe;
    case 'cadi':
      if (witchBlocked(state, witchMode)) return false;
      return !(witchMode === 'poison' && isMe);
    default: return false;
  }
}

// Gece kim kimin evine gidiyor (yalnızca izleyicinin bilmeye hakkı olanlar): Map(aktör -> hedef)
export function visits(state) {
  const u = UI();
  if (u && u.visits && state && state.me && state.me.alive) { try { const m = u.visits(state); if (m instanceof Map) { for (const [a, t] of m) if (a === t && a !== state.me.id) m.delete(a); return m; } } catch (e) { /* kendi kuralımız */ } }
  const out = new Map();
  const n = state && state.night;
  if (!n || state.room.phase !== 'night' || !state.me.alive) return out;
  const me = state.me;
  const alive = new Set(state.players.filter((p) => p.alive && !p.left).map((p) => p.id));
  if (n.team) for (const t of n.team) if (t.targetId && alive.has(t.vampId)) out.set(t.vampId, t.targetId);
  if (n.witch) {
    const t = n.witch.poison || n.witch.heal;
    if (t) out.set(me.id, t);
  } else if (n.mySelection && me.role !== 'vampir') {
    out.set(me.id, n.mySelection);
  }
  // vampirler iftiracının hedefini de görür
  if (me.role === 'vampir' && n.framer) {
    const f = state.players.find((p) => p.role === 'iftiraci' && p.alive);
    if (f) out.set(f.id, n.framer);
  }
  // kendi evine "ziyaret" (doktor kendini korur, gözcü kendi evini izler): evde kalır
  for (const [a, t] of out) if (a === t && a !== me.id) out.delete(a);
  return out;
}

// İşaret etiketi: izleyicinin seçimi, takım seçimleri, cadı kurbanları, oy
export function markFor(state, p, witchMode) {
  const { night, day, me, room } = state;
  if (night) {
    if (night.witch) {
      if (night.witch.poison === p.id) return ROLE_MARK.poison;
      if (night.witch.heal === p.id) return ROLE_MARK.heal;
      if ((night.witch.victims || []).includes(p.id)) return { label: '🩸 Saldırı altında', color: '#d7263d' };
    } else if (night.mySelection === p.id && ROLE_MARK[me.role]) return ROLE_MARK[me.role];
    const names = (night.team || []).filter((t) => t.targetId === p.id && t.vampId !== me.id).map((t) => t.name);
    if (names.length) return { label: '🧛 ' + names.join(', '), color: '#d7263d' };
    if (me.role === 'vampir' && night.framer === p.id) return { label: '🎭 İftira', color: '#b197fc' };
  }
  if (day && day.myVote === p.id) return ROLE_MARK.vote;
  if (room.phase === 'hunter' && p.id === room.hunterId) return { label: '🏹 Nişan alıyor', color: '#ff8364' };
  return null;
}

export function isPicked(state, p) {
  const { night, day } = state;
  if (night) {
    if (night.witch) return night.witch.poison === p.id || night.witch.heal === p.id;
    return night.mySelection === p.id;
  }
  if (day) return day.myVote === p.id;
  return false;
}

export function selColor(state, witchMode) {
  const act = action(state);
  if (act === 'vote') return ROLE_MARK.vote.color;
  if (act === 'shoot') return ROLE_MARK.shoot.color;
  if (act === 'night') {
    if (state.me.role === 'cadi') return (witchMode === 'poison' ? ROLE_MARK.poison : ROLE_MARK.heal).color;
    return (ROLE_MARK[state.me.role] || ROLE_MARK.vote).color;
  }
  return '#f2c12e';
}

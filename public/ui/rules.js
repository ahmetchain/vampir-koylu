// Seçim kuralları (window.VKRules): kim, hangi aşamada, kimi seçebilir.
// Arayüz (oyuncu şeridi), 2B yedek dünya ve istenirse 3B dünya aynı kuralları kullanır.
// Sunucu kuralları: docs/PROTOCOL.md §7 (night:select, day:vote, hunter:shoot).
// 4. tur: gece seçimleri kesindir (seçim yapıldıysa başka kimse seçilemez), vampirlerin tek ortak
// hedefi vardır (night.teamTarget), kilitli evdeki ya da tipide kalan köylü bir şey yapamaz
// (night.canAct === false), mahkemede sadece iki sanığa oy verilebilir (room.trial.accused).
(function () {
  'use strict';

  var EVIL = { vampir: true, iftiraci: true };

  function trialVote(state) {
    var t = state.room.trial;
    return state.room.phase === 'trial' && t && t.step === 'vote';
  }

  // İzleyicinin şu anki eylemi: 'night' | 'vote' | 'shoot' | null
  function action(state) {
    if (!state || !state.me) return null;
    var room = state.room;
    var me = state.me;
    var n = state.night;
    if (room.phase === 'night' && me.alive && n && n.canAct !== false) return 'night';
    if (room.phase === 'day' && me.alive && state.day) return 'vote';
    if (trialVote(state) && me.alive) return 'vote';
    if (room.phase === 'hunter' && room.hunterId === me.id) return 'shoot';
    return null;
  }

  function witchBlocked(state, witchMode) {
    var w = state.night && state.night.witch;
    if (!w) return false;
    return witchMode === 'poison' ? (w.poisonUsed || !!w.poison) : (w.healUsed || !!w.heal);
  }

  function selectable(state, p, witchMode) {
    var act = action(state);
    if (!act || !p || !p.alive || p.left) return false;
    var me = state.me;
    var isMe = p.id === me.id;
    if (act === 'shoot') return !isMe;
    if (act === 'vote') {
      if (isMe) return false;
      if (trialVote(state)) return state.room.trial.accused.indexOf(p.id) >= 0;
      return true;
    }
    // gece: seçim kesin; yapıldıysa (ya da takımın hedefi belliyse) başka seçim yok
    var n = state.night || {};
    if (me.role !== 'cadi' && n.mySelection) return false;
    switch (me.role) {
      case 'vampir': return !n.teamTarget && !isMe && !EVIL[p.role];
      case 'iftiraci': return !isMe && !EVIL[p.role];
      case 'doktor': return true;
      case 'gozcu': return true;
      case 'kahin': return !isMe;
      case 'cadi': {
        if (witchBlocked(state, witchMode)) return false;
        var w = n.witch || {};
        var other = witchMode === 'poison' ? w.heal : w.poison;
        if (other && other === p.id) return false; // aynı kişiye iksir ve zehir olmaz
        return !(witchMode === 'poison' && isMe);
      }
      default: return false;
    }
  }

  // Gece kim kimin evine gidiyor (izleyicinin görmeye hakkı olanlar): Map(aktörId -> hedefId)
  function visits(state) {
    var out = new Map();
    var n = state && state.night;
    if (!n || state.room.phase !== 'night') return out;
    var me = state.me;
    if (n.teamTarget && n.teamTarget.targetId) {
      (state.players || []).forEach(function (p) { if (p.alive && p.role === 'vampir') out.set(p.id, n.teamTarget.targetId); });
    } else if (n.team) {
      n.team.forEach(function (t) { if (t.targetId) out.set(t.vampId, t.targetId); });
    }
    if (n.witch) {
      var t = n.witch.poison || n.witch.heal;
      if (t) out.set(me.id, t);
    } else if (n.mySelection && me.role !== 'vampir') {
      out.set(me.id, n.mySelection);
    }
    if (me.role === 'vampir' && n.framer) {
      var f = (state.players || []).find(function (p) { return p.role === 'iftiraci'; });
      if (f && f.alive) out.set(f.id, n.framer);
    }
    return out;
  }

  window.VKRules = { action: action, selectable: selectable, visits: visits, witchBlocked: witchBlocked, trialVote: trialVote, EVIL: EVIL };
})();

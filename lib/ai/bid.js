'use strict';

// Söz isteme (bid) puanlaması, Google "Werewolf Arena" (arXiv 2407.13943) fikrinden: her bot her turda "bir sonraki
// fırsatta ne kadar acil konuşmalıyım" diye 0-4 arası bir urge bildirir (model çıktısında bedava gelir, ayrı çağrı yok).
// Burada yerel (modelsiz) puanlama yapılır: kalabalık kapısı ve inisiyatif turlarında rastgele değil EN YÜKSEK puanlı bot
// tur alır; en yüksek puan eşiğin altındaysa kimse konuşmaz (çağrı tasarrufu). Saf fonksiyonlar: testte deterministik.

const BID = {
  threshold: 2,          // bundan düşük puanlı bot tur almaz
  quietThreshold: 1,     // inisiyatif turunda (12 sn sessizlik, günde ≤5) eşik: sessizliği bozmak için düşük tutulur
  secondMin: 4,          // ikinci bot yalnızca puanı bu kadar yüksekse (acil) tur alır
  maxPicks: 2,           // tek fırsatta en çok bu kadar bot
  defaultUrge: 1,        // modele hiç sorulmamış bota varsayılan urge (genel fikri var sayılır)
  urgeMax: 4,
  mentioned: 3,          // adı geçti / suçlandı ve henüz cevap vermedi
  called: 2,             // rolü çağrıldı ve henüz cevap vermedi
  targeted: 2,           // gün oylamasında üzerine oy var
  unshared: 2,           // Kahin/Gözcü gece sonucu var, bugün henüz konuşmadı
  humanMsg: 1,           // yeni bir insan mesajına tepki
  quiet: 1,              // sohbet sessiz (inisiyatif turu): biri konuşmalı
  recentSpoke: -2,       // son recentMs içinde konuştu
  recentMs: 60000,
  chattyPer: 3,          // bugün her chattyPer mesaj için -1
  signalMs: 90000,       // "adı geçti / rolü çağrıldı" işareti bu kadar süre geçerli
};

// Modelin urge çıktısını 0-4 tam sayıya çevirir (eksik/bozuk -> 0, aralık dışı sıkıştırılır).
function clampUrge(raw) {
  const n = typeof raw === 'string' ? Number.parseFloat(raw) : raw;
  if (typeof n !== 'number' || !Number.isFinite(n)) return 0;
  return Math.min(BID.urgeMax, Math.max(0, Math.round(n)));
}

// s: { urge (sayı ya da null=hiç sorulmadı), mentioned, called, targeted, unshared, humanMsg, quiet,
//      spokeAgoMs (null=hiç), saidToday }. Dönen: { score, parts } (parts: hata ayıklama için).
function bidScore(s, B = BID) {
  const parts = [];
  const add = (label, v) => { if (v) parts.push([label, v]); };
  add('urge', s.urge === null || s.urge === undefined ? B.defaultUrge : clampUrge(s.urge));
  if (s.mentioned) add('mentioned', B.mentioned);
  if (s.called) add('called', B.called);
  if (s.targeted) add('targeted', B.targeted);
  if (s.unshared) add('unshared', B.unshared);
  if (s.humanMsg) add('humanMsg', B.humanMsg);
  if (s.quiet) add('quiet', B.quiet);
  if (s.spokeAgoMs !== null && s.spokeAgoMs !== undefined && s.spokeAgoMs < B.recentMs) add('recent', B.recentSpoke);
  add('chatty', -Math.floor((s.saidToday || 0) / B.chattyPer));
  return { score: parts.reduce((a, [, v]) => a + v, 0), parts };
}

// cands: [{ id, score }] -> söz verilecekler (en yüksek puandan; eşitlikte rng). Eşik altı hiç alınmaz.
function pickBids(cands, { rng = Math.random, B = BID, max = B.maxPicks } = {}) {
  const sorted = cands.map((c) => ({ ...c, tie: rng() })).sort((a, b) => (b.score - a.score) || (a.tie - b.tie));
  const out = [];
  for (const c of sorted) {
    if (out.length >= max) break;
    if (out.length === 0 ? c.score < B.threshold : c.score < B.secondMin) break;
    out.push({ id: c.id, score: c.score });
  }
  return out;
}

module.exports = { BID, clampUrge, bidScore, pickBids };

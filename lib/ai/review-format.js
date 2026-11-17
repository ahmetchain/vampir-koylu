'use strict';

// Oyun incelemelerini geliştirici için okunur markdown'a çevirir ve benzer hataları gruplayıp senaryo
// taslaklarına dönüştürür (scripts/ai-reviews.js kullanır; sunucu kullanmaz). Saf işlevler.

const SEV_RANK = { high: 3, medium: 2, low: 1 };
const STOP = new Set(['the', 'and', 'that', 'this', 'with', 'for', 'not', 'are', 'was', 'from', 'when', 'his', 'her', 'its', 'has', 'have',
  'bot', 'bots', 'rule', 'rules', 'book', 'missing', 'section', 'should', 'must', 'never', 'only', 'any', 'can', 'who', 'what', 'which', 'about',
  'player', 'players', 'because', 'than', 'then', 'they', 'their', 'there', 'into', 'out', 'one', 'all', 'but', 'does', 'did', 'too', 'vague',
  'add', 'say', 'says', 'said']);

function tokens(text) {
  const set = new Set();
  for (const w of String(text || '').toLowerCase().replace(/[^a-zçğıöşü0-9\s]/g, ' ').split(/\s+/)) {
    if (w.length >= 3 && !STOP.has(w)) set.add(w.replace(/(ing|ed|es|s)$/, ''));
  }
  return set;
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
}

// reviews: [{ id, date, room, review: { mistakes: [...] } }] -> gruplar (en sık olan önce).
function groupMistakes(reviews, threshold = 0.25) {
  const groups = [];
  for (const r of reviews) {
    for (const m of (r.review && r.review.mistakes) || []) {
      const tk = tokens(`${m.rule_violated_or_missing} ${m.suggested_rule_change} ${m.suggested_scenario && m.suggested_scenario.title}`);
      let best = null;
      let bestSim = 0;
      for (const g of groups) {
        const sim = jaccard(tk, g.tokens);
        if (sim > bestSim) { bestSim = sim; best = g; }
      }
      const item = { ...m, reviewId: r.id, date: r.date, room: r.room };
      if (best && bestSim >= threshold) {
        best.items.push(item);
        for (const t of tk) best.tokens.add(t);
      } else {
        groups.push({ tokens: new Set(tk), items: [item] });
      }
    }
  }
  const sevScore = (g) => g.items.reduce((s, i) => s + SEV_RANK[i.severity], 0);
  return groups
    .map((g) => ({ ...g, count: g.items.length, maxSeverity: g.items.reduce((s, i) => (SEV_RANK[i.severity] > SEV_RANK[s] ? i.severity : s), 'low'), score: sevScore(g) }))
    .sort((a, b) => b.count - a.count || b.score - a.score);
}

const oneLine = (s) => String(s || '').replace(/\s+/g, ' ').trim();

function reviewMarkdown(meta, review) {
  const L = [];
  L.push(`# Oyun incelemesi ${meta.id}`, '');
  L.push(`- Tarih: ${meta.date || ''} · oda: ${meta.room || '-'} · inceleyen model: ${meta.model || '-'} · maliyet ≈ $${Number(meta.cost || 0).toFixed(4)}`);
  const m = review.mistakes || [];
  L.push(`- Hatalar: ${m.length} (yüksek ${m.filter((x) => x.severity === 'high').length}, orta ${m.filter((x) => x.severity === 'medium').length}, düşük ${m.filter((x) => x.severity === 'low').length})`, '');
  L.push('## Özet', '', oneLine(review.summary), '');
  L.push('## Hatalar', '');
  m.forEach((x, i) => {
    L.push(`### ${i + 1}. [${x.severity.toUpperCase()}] ${x.bot} · ${x.day_or_night}`, '');
    L.push(`- Alıntı: ${JSON.stringify(x.quote)}`);
    L.push(`- Yanlış olan: ${x.what_was_wrong}`);
    L.push(`- İhlal edilen / eksik kural: ${x.rule_violated_or_missing}`);
    L.push(`- Önerilen kural: ${x.suggested_rule_change}`);
    const s = x.suggested_scenario || {};
    L.push(`- Önerilen senaryo **${s.title}**: ${s.setup}`, `  - Beklenen: ${s.expected}`, '');
  });
  if (!m.length) L.push('(hata bulunamadı)', '');
  if ((review.good_moves || []).length) {
    L.push('## İyi hamleler', '', ...review.good_moves.map((g) => `- ${g}`), '');
  }
  return `${L.join('\n')}\n`;
}

function draftsMarkdown(reviews) {
  const groups = groupMistakes(reviews);
  const total = groups.reduce((s, g) => s + g.count, 0);
  const L = ['# Senaryo taslakları', '',
    `${reviews.length} inceleme, ${total} hata, ${groups.length} grup (en sık görülen önce). Her grup: bir kural değişikliği (\`lib/ai/rules.js\`) ve bir senaryo (\`scripts/ai-scenarios.js\`) adayı.`, ''];
  groups.forEach((g, i) => {
    const rep = g.items.slice().sort((a, b) => (b.suggested_rule_change || '').length - (a.suggested_rule_change || '').length)[0];
    L.push(`## ${i + 1}. ${oneLine(rep.suggested_scenario && rep.suggested_scenario.title) || oneLine(rep.rule_violated_or_missing).slice(0, 80)} (${g.count}× · en yüksek önem: ${g.maxSeverity})`, '');
    L.push(`**Kural durumu:** ${oneLine(rep.rule_violated_or_missing)}`, '');
    L.push(`**Önerilen kural değişikliği:** ${oneLine(rep.suggested_rule_change)}`, '');
    const seen = new Set();
    L.push('**Senaryo taslakları:**', '');
    for (const it of g.items.slice().sort((a, b) => SEV_RANK[b.severity] - SEV_RANK[a.severity])) {
      const s = it.suggested_scenario || {};
      const key = oneLine(s.title).toLowerCase();
      if (seen.has(key) || seen.size >= 3) continue;
      seen.add(key);
      L.push(`- **${oneLine(s.title)}** — kurulum: ${oneLine(s.setup)}`, `  - beklenen: ${oneLine(s.expected)}`);
    }
    L.push('', '**Örnekler:**', '');
    for (const it of g.items.slice(0, 4)) {
      L.push(`- [${it.severity}] ${it.bot} (${it.day_or_night}, inceleme ${it.reviewId}): ${JSON.stringify(oneLine(it.quote).slice(0, 220))} — ${oneLine(it.what_was_wrong).slice(0, 260)}`);
    }
    L.push('');
  });
  if (!groups.length) L.push('(henüz hata yok)', '');
  return `${L.join('\n')}\n`;
}

module.exports = { reviewMarkdown, draftsMarkdown, groupMistakes, tokens, jaccard };

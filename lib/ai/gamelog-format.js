'use strict';

// Oyun geçmişini (gamerec.js, v:2) geliştirici için okunur Türkçe markdown'a çevirir (scripts/game-logs.js kullanır;
// sunucu kullanmaz). Saf işlevler. Gün gün zaman çizelgesi: sohbet, oylar, özel sonuçlar "(yalnızca X gördü)" olarak
// işaretlenir, akıllı botların notları girintili verilir.

const ROLE_LABEL = {
  vampir: 'Vampir', iftiraci: 'İftiracı', temizlikci: 'Temizlikçi', doktor: 'Doktor', kahin: 'Kahin',
  gozcu: 'Gözcü', gardiyan: 'Gardiyan', cadi: 'Cadı', avci: 'Avcı', muhtar: 'Muhtar', soytari: 'Soytarı',
  deli: 'Deli', hirsiz: 'Hırsız', koylu: 'Köylü',
};
const TEAM_LABEL = { koylu: 'Köylüler', vampir: 'Vampirler', soytari: 'Soytarı', hirsiz: 'Hırsız' };
const KIND_LABEL = { human: 'insan', bot: 'bot', smart: 'akıllı bot' };
const PRIV_LABEL = {
  seer: 'Kahin sonucu', watch: 'Gözcü raporu', lockreport: 'Gardiyan raporu', rattled: 'Kapı zorlandı', locked: 'Kapı kilitlendi',
  bounced: 'Kapıdan döndü', saved: 'Koruma işe yaradı', attacked: 'Saldırıdan kurtuldu', steal: 'Rol çalındı', stealfail: 'Soygun başarısız',
  promote: 'Vampire dönüştü',
};
const TRIP_LABEL = { kill: 'saldırı', protect: 'koruma', inspect: 'bakış', watch: 'gözcülük', frame: 'iftira', clean: 'iz silme', steal: 'soygun', poison: 'zehir', heal: 'iksir' };
const OUT_LABEL = { done: 'gerçekleşti', saved: 'kurtarıldı', bounced: 'kapıdan döndü', foiled: 'engellendi' };
const CAUSE_LABEL = { vampir: 'vampirler', zehir: 'zehir', hirsiz: 'soygun' };
const END_LABEL = { finished: 'oyun bitti', abandoned: 'herkes çıktı, oyun yarıda kaldı' };

const role = (r) => ROLE_LABEL[r] || r || '?';
const oneLine = (s) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
const mmss = (t) => `${String(Math.floor((Number(t) || 0) / 60)).padStart(2, '0')}:${String(Math.floor((Number(t) || 0) % 60)).padStart(2, '0')}`;
const q = (s) => `"${oneLine(s).replace(/"/g, '\'')}"`;

function winnerText(r) {
  if (r.end === 'abandoned') return 'bitmedi (herkes çıktı)';
  return r.winner ? `${TEAM_LABEL[r.winner] || r.winner} kazandı` : 'sonuç yok';
}

function header(r, meta = {}) {
  const g = r.game || {};
  const s = r.settings || {};
  const L = [];
  L.push(`# Oyun ${r.id}`, '');
  const hm = (iso) => String(iso).slice(0, 16).replace('T', ' ');
  L.push(`- Tarih: ${hm(r.startedAt)} → ${hm(r.endedAt).slice(11)} UTC (${Math.max(1, Math.round((r.durationSec || 0) / 60))} dk) · oda: ${r.room} · ${END_LABEL[r.end] || r.end}`);
  L.push(`- Sonuç: **${winnerText(r)}** · ${r.rounds} gece/gün · ${g.players} oyuncu (${g.humans} insan, ${g.bots} bot${g.smartBots ? `, ${g.smartBots} akıllı` : ''})`);
  L.push(`- Ayarlar: gece ${s.nightSec} sn, gün ${s.daySec} sn, ölenin rolü ${s.revealRoles ? 'açık' : 'gizli'}, roller ${s.roleMode === 'all' ? 'hepsi' : 'rastgele'}, köy olayları: ${s.events}, açık roller: ${(s.roles || []).map(role).join(', ') || '-'}${s.scenario ? `, senaryo: ${s.scenario}` : ''}`);
  if (g.model) {
    const c = g.botCalls || {};
    const fb = Object.entries(g.fallbacks || {}).map(([k, v]) => `${k}=${v}`).join(' ');
    L.push(`- Akıllı botlar: model ${g.model}, çağrı ${c.calls} (başarılı ${c.ok}), maliyet ≈ $${Number(c.costUsd || 0).toFixed(4)}${fb ? `, rastgele yedeğe düşenler: ${fb}` : ''}`);
  }
  if (meta.reviewId) L.push(`- Otomatik inceleme: ${meta.reviewId} (scripts/ai-reviews.js)`);
  if (r.truncated) L.push(`- UYARI: kayıt boyut sınırı için kırpıldı (en eski atılanlar: ${Object.entries(r.truncated).filter(([, v]) => v).map(([k, v]) => `${k}=${v}`).join(', ')}).`);
  L.push('', '## Oyuncular', '', '| Oyuncu | Tür | Rol | Takım | Son durum |', '|---|---|---|---|---|');
  for (const p of r.players || []) {
    const roleText = `${role(p.role)}${p.startRole ? ` (başta ${role(p.startRole)})` : ''}${p.fakeRole ? ` (kendini ${role(p.fakeRole)} sanıyordu)` : ''}${p.ability ? ` (${p.ability} yeteneği)` : ''}`;
    const state = p.alive ? 'sağ' : `öldü${p.death ? ` (${p.death.ph}: ${p.death.how})` : ''}`;
    const extra = [p.left ? 'oyundan ayrıldı' : '', p.promoted ? 'vampire dönüştü' : '', p.framedAsVampire ? 'iftirayla vampir görünüp öldü' : '', p.tracesErased ? 'izleri silindi' : '', p.stoleFrom ? `${p.stoleFrom} rolünü çaldı` : ''].filter(Boolean);
    L.push(`| ${p.name} | ${KIND_LABEL[p.kind] || p.kind}${p.calls ? ` (${p.calls} çağrı)` : ''} | ${roleText} | ${TEAM_LABEL[p.team] || p.team} | ${state}${extra.length ? `; ${extra.join('; ')}` : ''} |`);
  }
  if (g.rolePool || g.distribution) L.push('', `Lobi dağılım bilgisi: ${oneLine(JSON.stringify({ distribution: g.distribution, rolePool: g.rolePool }))}`);
  L.push('');
  return L;
}

const HEADINGS = { reveal: 'Başlangıç', night: 'Gece', day: 'Gün', trial: 'Mahkeme', hunter: 'Avcının son atışı', ended: 'Oyun sonu' };

// Bir olayı bir ya da birkaç satıra çevirir. state: oy değişikliği izi (gün içinde sıfırlanır).
function eventLines(e, state) {
  const at = `\`${mmss(e.t)}\``;
  switch (e.k) {
    case 'log': return [`- ${at} ${oneLine(e.text)}`];
    case 'chat': {
      const who = `**${e.from}**${e.bot ? ' (bot)' : ''}`;
      const ch = e.ch === 'vampir' ? ' [vampir kanalı, yalnızca vampir takımı gördü]' : e.ch === 'olu' ? ' [ölüler kanalı, yalnızca ölüler gördü]' : '';
      return [`- ${at} ${who}${ch}: ${oneLine(e.text)}`];
    }
    case 'priv': {
      const who = (e.to || []).join(', ');
      return [`- ${at} (yalnızca ${who} gördü) ${PRIV_LABEL[e.kind] || e.kind}: ${oneLine(e.text)}`];
    }
    case 'pick': {
      const act = e.act ? ` [${e.act === 'poison' ? 'zehir' : 'iksir'}]` : '';
      return [`- ${at} (gece seçimi, yalnızca ${e.who} gördü) ${e.who} (${role(e.as || e.role)}${e.as ? `, gerçekte ${role(e.role)}` : ''}) → ${e.to}${act}`];
    }
    case 'pass': return [`- ${at} (gece seçimi, yalnızca ${e.who} gördü) ${e.who} (${role(e.role)}) bu gece bekledi`];
    case 'lock': return [`- ${at} (yalnızca ${e.who} gördü) ${e.who} gelecek gece kilitlenecek kapıyı ${e.to ? `seçti: ${e.to}` : 'bıraktı'}`];
    case 'nres': {
      const L = ['- ' + `${at} **Gecenin çözümü** (kimseye gösterilmez; herkes yalnızca kendi payına düşeni görür):`];
      for (const t of e.trips || []) L.push(`  - ${t.who} → ${t.to}: ${TRIP_LABEL[t.kind] || t.kind} ${OUT_LABEL[t.out] || t.out}`);
      for (const d of e.dies || []) L.push(`  - ölen: ${d.who} (${CAUSE_LABEL[d.cause] || d.cause})`);
      for (const s of e.saved || []) L.push(`  - kurtaran ${s.by} → kurtarılan ${s.who}`);
      if (e.steal) L.push(`  - soygun: ${e.steal.who} → ${e.steal.to} (${OUT_LABEL[e.steal.out] || e.steal.out})`);
      if (e.framed) L.push(`  - iftira atılan: ${e.framed}`);
      if (e.cleaned) L.push(`  - izi silinen: ${e.cleaned}`);
      if (e.dark) L.push('  - rüzgâr: gece karanlık');
      if (L.length === 1) L.push('  - (bu gece kimse bir şey yapmadı)');
      return L;
    }
    case 'vote': {
      const before = state.votes.get(e.who) || null;
      const after = e.to || null;
      state.votes.set(e.who, after);
      const secret = e.secret ? ' (Sis günü: yalnızca kendisi gördü)' : '';
      if (after && !before) return [`- ${at} **${e.who}** oy verdi: ${after}${secret}`];
      if (after && before) return [`- ${at} **${e.who}** oyunu değiştirdi: ${before} → ${after}${secret}`];
      return [`- ${at} **${e.who}** oyunu geri çekti${before ? ` (${before})` : ''}${secret}`];
    }
    case 'tally': {
      const L = [`- ${at} **${e.trial ? 'Mahkeme oylaması' : 'Gün oylaması'} sonucu**${e.secret ? ' (Sis günü: oyuncular kimin kime oy verdiğini görmedi)' : ''}:`];
      const names = Object.keys(e.counts || {}).sort((a, b) => e.counts[b] - e.counts[a]);
      for (const n of names) L.push(`  - ${n}: ${e.counts[n]} oy (${((e.votes || {})[n] || []).join(', ')})`);
      if ((e.sleeping || []).length) L.push(`  - Hızlı Uyu: ${e.sleeping.length} oy (${e.sleeping.join(', ')})`);
      if (!names.length && !(e.sleeping || []).length) L.push('  - hiç oy yok');
      state.votes = new Map();
      return L;
    }
    case 'bot': {
      const parts = [];
      if (e.think) parts.push(`düşünce: ${q(e.think)}`);
      if (e.say) parts.push(`söyledi: ${q(e.say)}`);
      if (e.vote) parts.push(`oy: ${e.vote}`);
      if (e.target) parts.push(`hedef: ${e.target}`);
      if (e.poison) parts.push(`zehir: ${e.poison}`);
      if (e.memory) parts.push(`hafıza: ${q(e.memory)}`);
      return [`  - bot notu · ${at} · ${e.who} (${e.kind}) ${parts.join(' | ') || '(boş)'}`];
    }
    case 'fb': return [`  - bot notu · ${at} rastgele yedeğe düşüldü: ${e.kind}`];
    case 'end': return ['', `**${e.abandoned ? 'Herkes çıktı, oyun yarıda kaldı' : `Oyun bitti: ${TEAM_LABEL[e.winner] || e.winner || '?'} kazandı`}.**`];
    default: return [];
  }
}

// record: tam oyun geçmişi (v:2). meta: { reviewId } gibi ek bilgi.
function logMarkdown(record, meta = {}) {
  const L = header(record, meta);
  const state = { votes: new Map() };
  L.push('## Zaman çizelgesi', '', 'Satır başındaki saat oyunun başından beri geçen süredir (dk:sn). "(yalnızca X gördü)" olan satırları başkaları görmedi; girintili "bot notu" satırları akıllı botların özel notlarıdır.', '');
  for (const e of record.events || []) {
    if (e.k === 'phase') {
      const base = HEADINGS[e.phase] || e.phase;
      let title = `${base}${e.phase === 'night' || e.phase === 'day' || e.phase === 'trial' ? ` ${String(e.ph).replace(/\D+/g, '')}` : ''}`;
      if (e.phase === 'trial') title += e.step === 'defense' ? ` · savunma: ${e.speaker}` : ' · oylama';
      if (e.phase === 'trial' && e.step === 'defense' && e.accused) title += ` (sanıklar: ${e.accused.join(', ')})`;
      L.push('', `${e.phase === 'trial' || e.phase === 'hunter' ? '###' : '##'} ${title} · ${mmss(e.t)}`, '');
      if (e.phase === 'day' || (e.phase === 'trial' && e.step === 'vote')) state.votes = new Map();
      continue;
    }
    L.push(...eventLines(e, state));
  }
  return `${L.join('\n')}\n`;
}

module.exports = { logMarkdown, mmss };

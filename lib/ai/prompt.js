'use strict';

// İstem kurulumu. BİLGİ SINIRI (V2-PLAN §17): istem yalnızca botun kendi görünümünden
// (room.viewFor(botId)), koltuğuna gelen sohbet mesajlarından, kendi önceki notundan ve tur
// görevinden kurulur. Bu dosya Room'a hiç dokunmaz; yalnızca kendisine verilen görünümü okur.

const { LABEL, GOAL, MAD_FAKE, isEvil } = require('./roles');
const { SYSTEM_PROMPT } = require('./rules');
const { SeatRecord } = require('./record');
const { timelineBlock, factsBlock, playersBlock, possibleSet } = require('./facts');

const TEXT_MAX = 200;

// Kullanıcı metnindeki etiket kapatmalarını etkisiz kıl (isimler ve sohbet oyunculardan gelir).
function esc(s, max = TEXT_MAX) {
  return String(s == null ? '' : s).replace(/</g, '‹').replace(/>/g, '›').replace(/\s+/g, ' ').trim().slice(0, max);
}

function label(role) { return LABEL[role] || role; }

function secondsLeft(view) {
  const r = view.room;
  if (!r.deadline) return null;
  return Math.max(0, Math.round((r.deadline - view.serverNow) / 1000));
}

function nameOf(view, id) {
  const p = view.players.find((x) => x.id === id);
  return p ? esc(p.name, 40) : '?';
}

function votesBlock(view) {
  const d = view.day;
  if (!d) return '';
  const lines = [];
  if (d.secret) lines.push('Fog day: who voted for whom is secret today.');
  for (const [target, list] of Object.entries(d.votes || {})) {
    lines.push(`${list.map((v) => `${nameOf(view, v.id)}${v.w > 1 ? ' (x2)' : ''}`).join(', ')} → ${nameOf(view, target)} (${d.counts[target] || 0})`);
  }
  if ((d.sleeping || []).length) lines.push(`Hızlı Uyu: ${d.sleeping.map((id) => nameOf(view, id)).join(', ')}`);
  lines.push(`Voted: ${d.votedCount}/${d.voters}. Your vote: ${d.myVote === 'sleep' ? 'uyu' : (d.myVote ? nameOf(view, d.myVote) : 'none')}.`);
  if (d.lock) {
    lines.push(`Your door lock for tonight: ${d.lock.targetId ? nameOf(view, d.lock.targetId) : 'none'}`
      + `${d.lock.lastTargetId ? ` (cannot lock ${nameOf(view, d.lock.lastTargetId)} again)` : ''}.`);
  }
  return lines.join('\n');
}

function nightBlock(view) {
  const n = view.night;
  if (!n) return '';
  const lines = [];
  if (n.locked) lines.push('Your door is locked from outside tonight: you cannot go out.');
  if (n.mySelection) lines.push(`Your choice tonight: ${nameOf(view, n.mySelection)}.`);
  if (n.passed) lines.push('You decided to wait tonight.');
  if (n.team && n.team.length) lines.push(`Living vampires: ${n.team.map((t) => esc(t.name, 40)).join(', ')}.`);
  if (n.teamTarget) lines.push(`Team target (set by ${esc(n.teamTarget.byName, 40)}): ${nameOf(view, n.teamTarget.targetId)}.`);
  if (n.framer) lines.push(`İftiracı frames: ${nameOf(view, n.framer)}.`);
  if (n.cleaner) lines.push(`Temizlikçi cleans: ${nameOf(view, n.cleaner)}.`);
  if (n.witch) {
    const w = n.witch;
    lines.push(`Potions: heal ${w.healUsed ? 'used' : (w.heal ? `given to ${nameOf(view, w.heal)}` : 'available')}, `
      + `poison ${w.poisonUsed ? 'used' : (w.poison ? `given to ${nameOf(view, w.poison)}` : 'available')}.`);
    lines.push(`Vampires' victim tonight: ${w.victims && w.victims.length ? w.victims.map((id) => nameOf(view, id)).join(', ') : 'not known yet'}.`);
  }
  return lines.join('\n');
}

function allowed(list) {
  return list.length ? list.map((p) => esc(p.name, 40)).join(', ') : 'nobody';
}

// Görev metni ve izin verilen hedefler (yalnızca görünümden; kurallar Room'da yine denetlenir).
function taskText(view, task) {
  const meId = view.me.id;
  const role = view.me.role;
  const alive = view.players.filter((p) => p.alive && !p.left);
  const others = alive.filter((p) => p.id !== meId);
  const known = (p) => p.role;   // görünümde rolü görünenler (kötü takım kendini görür)
  const nonEvil = others.filter((p) => !(isEvil(known(p)) && isEvil(role)));
  const trig = task.trigger ? `${esc(task.trigger.from, 40)} said: "${esc(task.trigger.text)}" (marked >> in the timeline)` : '';
  switch (task.kind) {
    case 'night': {
      const n = view.night || {};
      switch (role) {
        case 'vampir':
          return `NIGHT ${view.room.round}. Choose your team's victim in "target" (allowed: ${allowed(nonEvil)}). `
            + 'You may whisper one short line to your team in "say".';
        case 'iftiraci':
          return `NIGHT ${view.room.round}. Choose who to frame in "target" (allowed: ${allowed(nonEvil)}), or "" to skip. `
            + 'You may whisper one short line to your team in "say".';
        case 'temizlikci':
          return `NIGHT ${view.room.round}. Choose whose traces to clean in "target" (allowed: ${allowed(nonEvil)}), or "" to skip. `
            + 'You may whisper one short line to your team in "say".';
        case 'doktor':
          return `NIGHT ${view.room.round}. Choose who to protect in "target" (allowed: ${allowed(alive)}). Leave "say" empty.`;
        case 'kahin':
          return `NIGHT ${view.room.round}. Choose who to inspect in "target" (allowed: ${allowed(others)}); `
            + 'prefer someone you have not inspected yet (see your notes). Leave "say" empty.';
        case 'gozcu':
          return `NIGHT ${view.room.round}. Choose whose house to watch in "target" (allowed: ${allowed(others)}). Leave "say" empty.`;
        case 'hirsiz':
          return `NIGHT ${view.room.round}. Steal a role tonight by naming the player in "target" (allowed: ${allowed(others)}), `
            + 'or "" to wait for a better night (you can steal only once). Leave "say" empty.';
        case 'cadi': {
          const w = n.witch || {};
          const healable = !w.healUsed && !w.heal && w.victims && w.victims.length;
          return `NIGHT ${view.room.round}. ${healable ? `To use your heal on the victim put their name in "target" (allowed: ${allowed(alive.filter((p) => w.victims.includes(p.id)))}), else "".` : 'Your heal is not possible now: "target" "".'} `
            + `${!w.poisonUsed && !w.poison ? `To poison someone put the name in "poison" (allowed: ${allowed(others)}), else "".` : '"poison" "".'} Leave "say" empty.`;
        }
        default:
          return `NIGHT ${view.room.round}. You have nothing to do tonight. Leave everything empty.`;
      }
    }
    case 'open':
      return `DAY ${view.room.round} just started. Open the talk with one short line: react to the night's news, `
        + 'share a suspicion or ask someone a question. You may set your vote if you already suspect someone.';
    case 'direct':
      return `${trig} — this is addressed to you. Answer them now in "say" (always say something). `
        + 'You may update your vote if the talk changed your mind.';
    case 'react':
      return `${trig}. If you have something useful to add, reply in "say" (or ""). You may update your vote.`;
    case 'defend':
      return `${task.byName ? `${esc(task.byName, 40)} just voted for you. ` : ''}${trig ? `${trig}. ` : ''}`
        + 'You are under suspicion: defend yourself or push back in "say". You may update your vote.';
    case 'vote': {
      const door = role === 'gardiyan'
        ? `Also choose the door to lock tonight in "target" (allowed: ${allowed(others.filter((p) => !view.day || !view.day.lock || p.id !== view.day.lock.lastTargetId))}). ` : '';
      if (task.final) {
        return `DAY ${view.room.round}, ${secondsLeft(view)} s left: the day is about to end. Make your FINAL decision now in "vote": the best-supported living suspect (allowed: ${allowed(others)}), `
          + `or "uyu" if nobody is supported by medium evidence. ${door}Give the reason in one short line in "say".`;
      }
      return `DAY ${view.room.round}, ${secondsLeft(view)} s left. EARLY check, optional: set "vote" only if you already have medium evidence or several weak signals against one living player (allowed: ${allowed(others)}); `
        + `otherwise "" is normal and "uyu" is only for later. The binding decision comes near the end of the day. ${door}A short line in "say" is optional.`;
    }
    case 'defense':
      return 'COURT: you are accused and it is your turn to defend yourself. Say one convincing line in "say" (required).';
    case 'trialVote': {
      const acc = (view.room.trial && view.room.trial.accused) || [];
      return `COURT re-vote: vote for one of the two accused in "vote" (allowed: ${allowed(alive.filter((p) => acc.includes(p.id) && p.id !== meId))}).`;
    }
    case 'hunter':
      return `You were killed, and as the Avcı you shoot one last arrow now: put the name in "target" (allowed: ${allowed(others)}). `
        + 'You may say a last line in "say".';
    default:
      return 'Nothing to do. Leave everything empty.';
  }
}

function meBlock(view, persona, rec) {
  const me = view.me;
  const role = me.role;
  const lines = [
    `Name: ${esc(me.name, 40)}${me.job && me.job.label ? ` (village job: ${esc(me.job.label, 30)}, flavour only, not your role)` : ''}. Persona: ${persona}.`,
    `Others call you "${esc(String(me.name).replace(/^bot\s+/i, ''), 40)}" (a "Bot " prefix is only a label). Any line about "${esc(String(me.name).replace(/^bot\s+/i, ''), 40)}" is about YOU: answer in the first person ("beni asmayın", "ben Köylüyüm"), never speak of yourself by name or in the third person.`,
    `Your role: ${label(role)}. ${GOAL[role] || ''}`,
    me.alive ? 'You are alive.' : 'You are dead: you can only talk to other dead players.',
  ];
  if (isEvil(role)) {
    // Takım arkadaşları oyunun başında görülenlerdir (sonradan iftirayla "Vampir" görünen masumlar değil).
    const mates = rec && rec.start && rec.start.mates;
    const team = view.players.filter((p) => p.id !== me.id && isEvil(p.role) && (!mates || mates.includes(p.id)));
    lines.push(`Your evil team-mates: ${team.length ? team.map((p) => `${esc(p.name, 40)} (${label(p.role)}${p.alive ? '' : ', dead'})`).join(', ') : 'none'}.`);
  }
  return lines.join('\n');
}

function gameBlock(view, rec) {
  const r = view.room;
  const left = secondsLeft(view);
  const phase = r.phase === 'night' ? `night ${r.round}${r.night ? ` (${r.night.stage})` : ''}`
    : r.phase === 'day' ? `day ${r.round}` : r.phase === 'trial' ? `court on day ${r.round}` : r.phase;
  const pool = [...(r.distribution || []).map(label)];
  const rp = r.rolePool;
  let extra = '';
  if (rp) {
    const helpers = rp.helpers || 0;
    const names = (rp.maybe || []).map(label).join(' or ');
    if (helpers > 0) extra += `, ${helpers} evil helper (${names})`;
    if ((rp.helpersMax || 0) > helpers) extra += `, maybe one more evil helper`;
    else if (!helpers && (rp.maybe || []).length) extra += `, maybe: ${names}`;
    const rest = rp.pick - Math.max(helpers, rp.helpersMax || 0);
    if (rest > 0) extra += `, ${rest} more from: ${[...(rp.from || []), 'koylu'].map(label).join(', ')}`;
  }
  // Deli olabilir ve bot kendini Delinin sanabileceği bir rolde sanıyorsa: kendisi de Deli olabilir.
  // (Gerçek rol ile Deli aynı metni görür; bilgi sızmaz. <me> ve <players> içinde "Deli" geçmez.)
  const me = view.me;
  const madHint = possibleSet(view, rec).has('deli') && me.alive && MAD_FAKE.has(me.role)
    ? `Deli is possible in this game: as a ${label(me.role)} you could be the Deli without knowing (then your actions do nothing and your results are random).` : '';
  return [
    `Phase: ${phase}${left !== null ? `, ${left} s left` : ''}. Roles of the dead are ${r.settings && r.settings.revealRoles ? 'revealed' : 'hidden until the game ends'}.`,
    `Roles in this game (lobby rule): ${pool.join(', ')}${extra}.`,
    madHint,
    r.event ? `Village event: ${esc(r.event.name, 40)} – ${esc(r.event.desc, 160)}` : '',
  ].filter(Boolean).join('\n');
}

// Tek tur için kullanıcı metni. rec: botun bu oyundaki kaydı (SeatRecord); verilmezse görünümden ve chat
// listesinden geçici bir kayıt kurulur (testler, değerlendirme betiği).
function buildUser({ view, rec = null, chat = [], memory = '', persona = '', task }) {
  let record = rec;
  if (!record) {
    record = new SeatRecord(view.me.id);
    record.sync(view);
    for (const m of chat) record.items.push({ k: 'chat', m });
  } else record.sync(view);
  const trigger = task && task.trigger;
  const block = (tag, text) => `<${tag}>\n${text}\n</${tag}>`;
  const parts = [
    block('me', meBlock(view, persona, record)),
    block('game', gameBlock(view, record)),
    block('players', playersBlock(view, record)),
    block('facts', factsBlock(view, record)),
  ];
  const night = nightBlock(view);
  if (night) parts.push(block('night', night));
  const votes = votesBlock(view);
  if (votes) parts.push(block('votes', votes));
  parts.push(block('timeline', timelineBlock(view, record, trigger) || '(nothing yet)'));
  parts.push(block('memory', esc(memory, 800) || '(empty)'));
  parts.push(block('task', taskText(view, task || {})));
  return parts.join('\n');
}

module.exports = { SYSTEM_PROMPT, buildUser, taskText, esc };

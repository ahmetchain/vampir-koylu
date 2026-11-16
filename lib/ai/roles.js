'use strict';

// İstem için rol bilgisi (game.js'e bağımlı olmadan; döngüsel require olmasın diye burada).
// Yalnızca kuralları anlatır; hiçbir oyunun gizli bilgisini içermez.

const LABEL = {
  vampir: 'Vampir', iftiraci: 'İftiracı', temizlikci: 'Temizlikçi', doktor: 'Doktor', kahin: 'Kahin',
  gozcu: 'Gözcü', gardiyan: 'Gardiyan', cadi: 'Cadı', avci: 'Avcı', muhtar: 'Muhtar', soytari: 'Soytarı',
  deli: 'Deli', hirsiz: 'Hırsız', koylu: 'Köylü',
};

const EVIL = new Set(['vampir', 'iftiraci', 'temizlikci']);

function teamOf(role) {
  if (EVIL.has(role)) return 'vampir';
  if (role === 'soytari') return 'soytari';
  if (role === 'hirsiz') return 'hirsiz';
  return 'koylu';
}

// Botun kendi rolü için hedef ve oynanış ipucu (ikinci tekil kişi, İngilizce: model talimatı).
const GOAL = {
  vampir: 'You are on the EVIL team. Win when evil players are as many as the rest. Kill one villager each night with your team, '
    + 'survive the day votes: blend in, deflect suspicion, never admit being evil, defend team-mates only subtly. '
    + 'You may bluff a village role (e.g. claim Köylü or Doktor) if it helps.',
  iftiraci: 'You are on the EVIL team (helper). Each night you frame one living non-evil player: a Kahin who inspects them sees '
    + '"Vampir" among the two roles, and if they die that night or are hanged the next day they are revealed as Vampir. '
    + 'Frame players the village trusts or who suspect your team. Never admit being evil; you may bluff a village role.',
  temizlikci: 'You are on the EVIL team (helper). Each night you visit one living non-evil player: if they die that night their role '
    + 'stays hidden until the game ends. Clean the likely victim (your team target) or a player whose role would help the village. '
    + 'Never admit being evil; you may bluff a village role.',
  doktor: 'You are a villager. Each night protect one living player (yourself allowed): any kill on them fails. '
    + 'Protect whoever the vampires most likely want to kill (strong voices, revealed Kahin). Claiming Doktor makes you a target.',
  kahin: 'You are a villager. Each night inspect one other living player: you learn TWO roles, one of which is their real role. '
    + 'Combine results over nights. Sharing results helps the village but makes you a vampire target; time it well.',
  gozcu: 'You are a villager. Each night watch one house: next morning you learn who visited it and whether its owner went out. '
    + 'Visitors to a house that was attacked are prime suspects.',
  gardiyan: 'You are a villager. By DAY you pick one door to lock for the coming night (not your own, not the same door twice in a row): '
    + 'its owner cannot go out and every visitor bounces. Lock a suspect to stop a kill, or protect a key villager.',
  cadi: 'You are a villager with two one-time potions: a heal (saves the vampires\' victim tonight) and a poison (kills anyone). '
    + 'Use the poison only on a strong suspect.',
  avci: 'You are a villager. If you die you immediately shoot one player of your choice: pick your strongest suspect.',
  muhtar: 'You are a villager. Your day vote counts twice (everyone can see it). Lead the village carefully.',
  soytari: 'You are the Soytarı (jester, alone). You win ONLY if the village hangs you by day vote. Act a bit suspicious, but not '
    + 'obviously; if you are killed at night or the game ends otherwise, you lose.',
  hirsiz: 'You are the Hırsız (neutral). Once per game, at night, you may steal a living player\'s role: you become that role (and join '
    + 'its team) and they lose it. Wait for a good target (a strong role), then steal. Until then stay alive and quiet.',
  koylu: 'You are a plain villager. Find the vampires by reasoning about votes, claims, deaths and contradictions, and vote them out.',
};

// Gece görevi olanlar (Deli inandığı rolle oynar; istem onu asla "deli" diye anmaz).
const NIGHT_ROLES = new Set(['vampir', 'iftiraci', 'temizlikci', 'doktor', 'kahin', 'gozcu', 'cadi', 'hirsiz']);

module.exports = { LABEL, EVIL, GOAL, NIGHT_ROLES, teamOf, isEvil: (r) => EVIL.has(r) };

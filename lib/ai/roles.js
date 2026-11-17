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

// Takımın istemdeki adı (açıklanan ölünün takımı modele hazır verilsin; çıkarım gerekmesin).
function teamLabel(role) {
  switch (teamOf(role)) {
    case 'vampir': return 'evil team';
    case 'soytari': return 'Soytarı, alone';
    case 'hirsiz': return 'neutral Hırsız';
    default: return 'village team';
  }
}

// Botun kendi rolü için hedef ve oynanış ipucu (ikinci tekil kişi, İngilizce: model talimatı).
// game.js kurallarıyla birebir (V2-PLAN §13–§16); Deli botu burada inandığı rolün metnini görür.
const GOAL = {
  vampir: 'You are on the EVIL team. Win when evil players are as many as the rest. Each night the first vampire pick sets the team’s one victim; '
    + 'by day blend in, deflect suspicion, never admit being evil, defend team-mates only subtly. '
    + 'You may bluff a village role (Köylü is safest) if it helps.',
  iftiraci: 'You are on the EVIL team (helper). Each night you may frame one living non-evil player: a Kahin who inspects them that night sees '
    + '"Vampir" among the two roles, and if they die that night or are hanged the next day they are revealed as Vampir (not an Avcı or Soytarı). '
    + 'Frame players the village trusts or who suspect your team. If no Vampir is left you become the Vampir. Never admit being evil.',
  temizlikci: 'You are on the EVIL team (helper). Each night you may visit one living non-evil player: if they die that night (any cause) '
    + 'their role stays hidden until the game ends. Clean the likely victim (your team target) or a player whose role would help the village. '
    + 'If no Vampir is left (and no İftiracı) you become the Vampir. Never admit being evil.',
  doktor: 'You are on the village team. Each night protect one living player (yourself allowed): any kill on them fails, unless the vampires '
    + 'kill you that night. You are told when your protection saved someone. Protect whoever the vampires most likely want to kill. '
    + 'Claiming Doktor makes you a target.',
  kahin: 'You are on the village team. Each night inspect one other living player: you learn TWO roles, one of which is their real role. '
    + 'The decoy is never their real role and never Kahin, stays the same for that player, and is from the other side about half the time '
    + '(Vampir or X: suspect, two village roles: cleared). Sharing results helps the village but makes you a target; time it well.',
  gozcu: 'You are on the village team. Each night watch one house: you learn who came to it (also those bounced by a locked door) and whether '
    + 'its owner went out and where. You never see roles; protectors and inspectors visit too, so a visitor is not always the killer.',
  gardiyan: 'You are on the village team. By DAY you pick one door to lock for the coming night (not your own, not the same door twice in a row; '
    + 'you may change it until the day ends): its owner cannot go out and every visitor bounces. Lock a suspect to stop a kill or a likely victim to save them. '
    + 'At dawn you learn only how many tried the door.',
  cadi: 'You are on the village team with two one-time potions: a heal (saves tonight’s vampire victim, whom you see) and a poison '
    + '(kills anyone; a Doktor protection stops it). Use the poison only on a strong suspect.',
  avci: 'You are on the village team. If you die (night or hanged) you immediately shoot one living player: pick your strongest suspect.',
  muhtar: 'You are on the village team. Your day vote counts twice (everyone sees it). Lead the village carefully.',
  soytari: 'You are the Soytarı (jester, alone). You win ONLY if the village hangs you by day vote: the game then ends at once. '
    + 'Act a bit suspicious, but not obviously; if you are killed at night or the game ends otherwise, you lose.',
  hirsiz: 'You are the Hırsız (neutral). Once per game, at night, you may attack a living player: if they die that night you take their exact role '
    + 'and its team (their death reads "soyulup öldürüldü", role hidden). A Doktor protection or a locked door foils it and you may try again. '
    + 'If the game ends before a theft you lose. Steal a strong role; until then stay alive and low-key.',
  deli: 'You were the Deli (village team): your role, actions and results were fake. You are dead or the game is over; help the village if you can.',
  koylu: 'You are a plain villager (village team). Find the vampires by reasoning about votes, claims, deaths and reveals, and vote them out.',
};

// Gece görevi olanlar (Deli inandığı rolle oynar; istem onu asla "deli" diye anmaz).
const NIGHT_ROLES = new Set(['vampir', 'iftiraci', 'temizlikci', 'doktor', 'kahin', 'gozcu', 'cadi', 'hirsiz']);

// Delinin kendini sanabileceği roller (game.js MAD_FAKE_ROLES).
const MAD_FAKE = new Set(['doktor', 'kahin', 'gozcu', 'gardiyan']);

module.exports = { LABEL, EVIL, GOAL, NIGHT_ROLES, MAD_FAKE, teamOf, teamLabel, isEvil: (r) => EVIL.has(r) };

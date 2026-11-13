'use strict';

// 4. tur: köy olayları (tellal duyurusu + kapanış satırı), mahkeme anlatısı, Gardiyan rol tepkileri.
// Kurallar:
// - Olaylar herkese açıktır; satırlar olayın kuralını abartmadan anlatır, kimseyi adıyla anmaz.
// - Savunma satırları tarafsızdır: sanığın tavrı, sesi, sözleri hakkında hiçbir şey söylemez
//   (terledi, kekeledi, ikna etti… yok); yalnızca köyün dinleyişini anlatır.
// - Kilit (Gardiyan) gizlidir: motor kilit bilgisini hiç almaz; bu dosyada kilide değinen bir
//   gece/sabah satırı yoktur.
// - Coda/rol satırları sahne kelimesi (kilit, mahzen, darağacı, zehir, diş…) içermez.

const EVENT_IDS = ['tipi', 'ruzgar', 'kisa-gece', 'ayaz', 'sis', 'mahkeme'];
const NIGHT_EVENTS = new Set(['tipi', 'ruzgar', 'kisa-gece']);

// Olgusal duyuru satırları (sunucu kendi metnini kullanabilir; story bunlardan bağımsızdır).
const EVENT_FACT = {
  tipi: { title: 'Tipi bastırdı!', text: 'Bu gece kar fırtınası var: köy halkı evlerinden çıkamaz, yalnızca vampir takımı dolaşabilir.' },
  ruzgar: { title: 'Fırtına rüzgârı!', text: 'Kamp ateşi söndü, köy zifiri karanlık. Bu gece evlere gelenler ancak gölge olarak seçilebilir.' },
  'kisa-gece': { title: 'Kısa gece', text: 'Bu gece her zamankinin yarısı kadar sürecek.' },
  ayaz: { title: 'Ayaz!', text: 'Bugün ayaz var: gün her zamankinin yarısı kadar sürecek.' },
  sis: { title: 'Sis çöktü', text: 'Bugün oylar gizli: herkes yalnızca kimin kaç oy aldığını görür.' },
  mahkeme: { title: 'Mahkeme günü', text: 'Gün sonunda en çok oy alan iki kişi savunma yapacak, sonra köy yalnızca bu ikisi arasında yeniden oy verecek.' },
};

// Epilogda olay adları ("Köy bu hikâyede … gördü").
const EVENT_NOUN = {
  tipi: 'bir tipi', ruzgar: 'bir fırtına rüzgârı', 'kisa-gece': 'kısa bir gece', ayaz: 'bir ayaz günü',
  sis: 'bir sis günü', mahkeme: 'bir mahkeme',
};

const E = {
  // ---------------- olay başlangıcı (tellal) ----------------
  'event.tipi': [
    'Tellal bağırıyor: "Tipi geliyor, kapılarınızı kapayın!" Kar yatay yağıyor; bu gece köyde yalnızca karanlığın çocukları yol bulabilir.',
    'Gökyüzü bembeyaz bir öfkeyle köyün üstüne boşaldı. Tipide sokağa çıkan kendi kapısını bile bulamaz; dolaşan olursa, o köyden değildir.',
    'Rüzgâr karı pencerelere çarpıyor, bacalar uluyor. Tellalın son sözü "Kimse dışarı çıkmasın!" oldu; tipi gerisini kendisi hallediyor.',
    'Kar o kadar yoğun ki kapı önündeki merdiven kayboldu. Bu gece evler birer ada; aralarındaki karanlıkta yalnızca gece yaratıkları yüzer.',
    'Tellal karlar içinde meydanı son kez dolaştı: "Tipi var! Kapıyı açmak yok!" Sonra o da evine koştu.',
  ],
  'event.ruzgar': [
    'Tellal duyurdu: "Fırtına rüzgârı geliyor!" Bir hamlede kamp ateşi söndü; köy, kendi elini göremeyecek kadar karanlık.',
    'Rüzgâr meydandaki ateşi tek nefeste üfledi. Fenerler sallandı, sonra söndü. Bu gece herkes yalnızca gölge.',
    'Kepenkler çarpıyor, çatılar inliyor; ateşin yerinde birkaç kıvılcım kaldı. Zifiri karanlıkta kimin kim olduğunu kimse seçemeyecek.',
    'Uğuldayan rüzgâr köyün bütün ışıklarını tek tek topladı. Kalan tek şey, duvarlarda kayan biçimsiz gölgeler.',
    'Tellalın sesi bile rüzgârda kayboldu. Ateş söndü, ay saklandı; gece bu kez simsiyah.',
  ],
  'event.kisa-gece': [
    'Tellal göğü işaret etti: "Bu gece kısa sürecek!" Ay aceleyle yükseliyor; geceyi kullanacak olan elini çabuk tutmalı.',
    'Bu gece güneş batmaya üşendi, doğmaya ise şimdiden hazırlanıyor. Kısa bir karanlık, hızlı kararlar ister.',
    'Ninelere göre yılın en kısa gecesi bu. Gölgelerin işi az, zamanı daha da az.',
    'Horoz bu gece erken ötecek, herkes biliyor. Karanlık kısa ama kimse onu küçümsemiyor.',
    'Tellal duyurdu: "Gece yarım kalacak!" Yarım gece de bazen bütün bir ömre bedeldir.',
  ],
  'event.ayaz': [
    'Tellal dişlerini takırdatarak duyurdu: "Bugün ayaz var, meydan uzun sürmez!" Herkes ellerini koltuk altına sıkıştırdı.',
    'Ayaz kirpiklere kadar dondurdu. Bugün meydan kısa sürecek; söz uzatanı soğuk bekletmez.',
    'Nefesler buhar buhar yükseliyor, kuyunun ipi bile buz tuttu. Bugün karar çabuk verilmeli.',
    'Bu soğukta kimse meydanda oyalanmak istemiyor. Gün kısa, sabır daha da kısa.',
    'Ayaz kapıları çatlatıyor. Tellal kısa kesti: "Çabuk konuşun, çabuk karar verin!"',
  ],
  'event.sis': [
    'Tellal duyurdu: "Bugün sis var, oylar gizli!" Sandık başında kimse kimin elini kaldırdığını göremeyecek; yalnızca sayılar konuşacak.',
    'Meydana öyle koyu bir sis çöktü ki insan yanındakinin yüzünü bile seçemiyor. Bugün oylar sisin içinde verilecek.',
    'Sis sandığın etrafına bir perde gibi çekildi. Kim kime oy verdi, bugün yalnızca sis bilecek.',
    'Bugün meydanda yüzler değil, gölgeler var. Sayılar görünecek, eller görünmeyecek.',
    'Tellalın feneri sisin içinde zar zor seçiliyor. "Bugün oylar gizli," dedi, "kimse kimseye hesap sormasın."',
  ],
  'event.mahkeme': [
    'Tellal tokmağını vurdu: "Bugün mahkeme kurulacak!" Gün sonunda en çok oy alan iki kişi köyün huzurunda konuşacak.',
    'Meydanın ortasına iki tabure kondu. Bugün kimse aceleyle gönderilmeyecek; önce iki kişi dinlenecek, sonra köy yeniden oylayacak.',
    'Köyün en yaşlıları mahkeme kürsüsünü tozundan arındırdı. Bugün karar iki turda verilecek.',
    'Tellal duyurdu: "Bugün adalet acele etmeyecek!" En çok oy alan iki kişi savunma yapacak.',
    'Bugün meydanda bir mahkeme var. Kimin oturacağını oylar belirleyecek, kimin gideceğini savunmalar.',
  ],
  // ---------------- olay kapanışı (sonraki sabah / akşam) ----------------
  'eventEnd.tipi': [
    'Tipi sabaha karşı dindi; köy beyaz bir sessizliğe uyandı.',
    'Kar durdu, rüzgâr çekildi. Kapıların önünde diz boyu kar var.',
    'Tipi geçti. Kürekler çıktı, yollar yeniden açılıyor.',
  ],
  'eventEnd.ruzgar': [
    'Rüzgâr dindi; kamp ateşi yeniden yakıldı.',
    'Sabahla birlikte rüzgâr da sustu. Meydanda devrilmiş birkaç sepet kaldı.',
    'Fırtına rüzgârı geçti; ateş yeniden çıtırdıyor.',
  ],
  'eventEnd.kisa-gece': [
    'Kısa gece çabucak bitti; horoz her zamankinden erken öttü.',
    'Gece göz açıp kapayıncaya kadar geçti.',
    'Kısa gece geride kaldı; güneş erkenden tepeleri yaladı.',
  ],
  'eventEnd.ayaz': [
    'Ayaz akşamla birlikte biraz gevşedi.',
    'Güneş batarken ayazın dişleri biraz körleşti.',
    'Ayazlı gün bitti; sobalar yeniden gürlüyor.',
  ],
  'eventEnd.sis': [
    'Sis akşamüstü dağıldı; yüzler yeniden seçilir oldu.',
    'Akşam rüzgârı sisi tepelere sürdü.',
    'Sis kalktı ama kimin kime oy verdiği sisle birlikte gitti.',
  ],
  // ---------------- mahkeme ----------------
  'trial.start': [
    'Oylar sayıldı ve kürsüye iki isim çıktı: {a} ile {b}. Köy önce dinleyecek, sonra yeniden oylayacak.',
    'Mahkeme kuruldu. Sanık sandalyelerinde {a} ile {b} oturuyor; meydan nefesini tuttu.',
    'Tellal iki ismi okudu: {a} ve {b}. Şimdi söz onlarda, karar sonra köyde.',
    'Meydanın ortasındaki iki tabure doldu: bir yanda {a}, öbür yanda {b}. Mahkeme başladı.',
    'Sandık iki isimde durdu: {a} ile {b}. Köy, ikisini de sonuna kadar dinlemeye karar verdi.',
    'Kürsünün önünde {a} ile {b} yan yana duruyor. Bugünün sonunu bu iki savunma belirleyecek.',
  ],
  'trial.defense.first': [
    'İlk söz {a|dat} verildi. Meydan sustu; yalnızca ateşin çıtırtısı duyuluyor.',
    'Tellal tokmağını vurdu: önce {a} konuşacak. Herkes kulak kesildi.',
    'Kürsüye önce {a} çıktı. Köy, tek bir sözü kaçırmamak için sessizleşti.',
    '{a} savunmasına başladı. Meydanda kimse kıpırdamıyor.',
    'Önce {a} dinleniyor. Ahali yerinden kalkmadan, sözün sonunu bekliyor.',
    'Söz sırası {a|dat} geldi. Kum saati çevrildi.',
  ],
  'trial.defense.second': [
    'Şimdi söz {a|dat} geçti. Meydan bir kez daha sessizliğe gömüldü.',
    'Sıra {a|dat} geldi. Herkes bu kez öbür tabureye döndü.',
    'Kum saati yeniden çevrildi; şimdi {a} konuşuyor.',
    'İkinci savunma {a|gen}. Köy, ilkini dinlediği dikkatle dinliyor.',
    'Tellal tokmağı bir kez daha vurdu: söz {a|loc}.',
    '{a} kürsüye çıktı. Kararı vermeden önce köy son kez dinliyor.',
  ],
  'trial.verdict': [
    'Savunmalar dinlendi, terazi bir yana yattı.',
    'Mahkeme kararını verdi; tokmak son kez indi.',
    'İki savunma, bir karar. Köy sözünü söyledi.',
    'Kürsü boşaldı; mahkeme dağıldı.',
  ],
  'trial.nohang': [
    'İki savunma da dinlendi ama köy yine ikiye bölündü. Mahkeme kimseyi göndermeden dağıldı.',
    'Terazinin kefeleri savunmalardan sonra da eşit kaldı. Bugün kimse gitmedi.',
    'Mahkeme uzun sürdü, karar çıkmadı. İki tabure de dolu kaldı.',
    'Köy dinledi, düşündü, yeniden oyladı; ve yine karar veremedi.',
    'Tokmak indi ama hüküm çıkmadı. Mahkeme bir dahaki sefere kaldı.',
  ],
  // ---------------- Gardiyan rol tepkileri (rol herkese açıkken) ----------------
  'death.role.gardiyan': [
    'Köyün gardiyanıydı; geceleri hangi kapının kapalı kalacağına artık kimse karar vermeyecek.',
    'Gardiyanmış! O sessiz koruyucu el artık yok.',
  ],
  'hanged.role.gardiyan': [
    'Gardiyanmış! Köy, gecelerini bekleyen eli kendi oyuyla gönderdi.',
    'Köyün gardiyanı gitti. Bundan sonra kapılar yalnızca sahiplerine emanet.',
  ],
};

// Senaryoya özel olay satırları (uyduğu yerde).
const SCENARIO_EVENTS = {
  'kara-kis': {
    'event.tipi': [
      'Kara Kış en sert yüzünü gösterdi: tipi köyü beyaz bir yorganla boğdu. Kapıdan dışarı adım atan kaybolur; dolaşan olursa, insan değildir.',
      'Kurtlar bile sustu. Tipi bacaları dövüyor; bu gece köyde yalnızca soğuğa alışkın olanlar dolaşacak.',
    ],
    'event.ayaz': [
      'Kara Kış dişlerini gösterdi: ayaz öyle sert ki kuyunun suyu kovada donuyor. Bugün meydan kısa sürecek.',
    ],
    'eventEnd.tipi': ['Tipi dindi; Kara Kış bir nefeslik ara verdi.'],
  },
  'sisli-vadi': {
    'event.sis': [
      'Vadi bugün kendi sisine bile şaşırdı: o kadar koyu ki sandığın başında kimin durduğu görünmüyor. Oylar sisin içinde verilecek.',
      'Sisli Vadi bu sabah bütün yüzleri sakladı. Bugün kim kime oy verdi, yalnızca vadi bilecek.',
    ],
    'event.ruzgar': ['Vadiye nadir esen o büyük rüzgâr bu gece geldi; sisi değil, ateşi aldı götürdü.'],
    'eventEnd.sis': ['Sis vadinin dibine çekildi; ama dünkü oyların sırrı da onunla gitti.'],
  },
  'kanli-ay': {
    'event.kisa-gece': ['Kızıl ay bu gece aceleci: doğar doğmaz batmaya hazırlanıyor. Kısa bir gece, kızıl bir gece.'],
    'event.ruzgar': ['Rüzgâr kızıl ayın önüne kara bulutlar sürdü ve ateşi söndürdü. Köy, ayın bile göremediği bir karanlıkta.'],
  },
  'hasat-senligi': {
    'event.mahkeme': ['Şenlik çadırlarından biri bugün mahkeme salonu oldu. Davul sustu; önce savunmalar, sonra halay.'],
    'event.ruzgar': ['Rüzgâr şenlik fenerlerini birer birer söndürdü, balkabaklarını yuvarladı. Köy zifiri karanlıkta.'],
  },
  'veba-soylentisi': {
    'event.sis': ['Sirke kokulu bir sis meydana çöktü. Herkes mendilini ağzına bastırdı; bugün kimse kimin elini kaldırdığını görmeyecek.'],
    'event.mahkeme': ['Söylentiler o kadar çoğaldı ki köy bir mahkeme kurmaya karar verdi. Bugün iki kişi dinlenecek.'],
  },
  panayir: {
    'event.mahkeme': ['Kukla sahnesi bugün mahkeme kürsüsü oldu. Perde açıldı; bu kez oyuncular köyün kendisi.'],
    'event.ruzgar': ['Rüzgâr panayır çadırlarını şişirdi, atlıkarıncanın fenerlerini söndürdü. Bu gece gösteri karanlıkta.'],
  },
};

// Epilog notu: oyunda yaşanan olaylar.
const EPI_EVENTS = {
  'epi.events': [
    'Köy bu hikâye boyunca {list} gördü.',
    'Bu hikâyede köy {list} atlattı.',
  ],
};

module.exports = { EVENT_IDS, NIGHT_EVENTS, EVENT_FACT, EVENT_NOUN, E, SCENARIO_EVENTS, EPI_EVENTS };

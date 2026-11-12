# Vampir Köylü

Arkadaşlarla tarayıcıdan oynanan, gerçek zamanlı ve animasyonlu Vampir Köylü oyunu.
Node.js + Express + Socket.IO sunucusu, sade HTML/CSS/JS arayüz. Karakterler SVG ile kodda çizilir ve
CSS ile canlandırılır; dışarıdan görsel ya da kütüphane dosyası gerekmez, telefonda da hafif çalışır.

## Öne çıkanlar

- **Köy meydanı sahnesi:** Oyuncular kamp ateşinin etrafında sevimli karakterler olarak durur.
  Lobide meydana dokunarak dolaşabilir, kendine dokunarak renk ve şapka seçebilirsin.
- **Gece:** Köy yere uzanıp uyur (Zzz). Gece rolü olan oyuncunun karakteri seçtiği kişinin yanına yürür.
  Bunu sadece kendisi görür; vampirler birbirini pelerinleriyle görür.
- **Gündüz:** Oylar karakterin üstünde oy verenlerin renginde noktalar olarak görünür, sohbet mesajları
  konuşma balonu olarak çıkar.
- **Sahneler:** Vampir saldırısı, zehir, asılma, avcının son atışı, kahinin kristal küresi ve zafer için
  kısa animasyonlar oynar.

## Roller

| Rol | Takım | Ne yapar |
| --- | --- | --- |
| 🧛 Vampir | Vampirler | Her gece bir kurban seçer. Sayıları diğerlerine eşitlenince kazanırlar. |
| 🩺 Doktor | Köylüler | Her gece birini korur; korunan kişi o gece ölmez. |
| 🔮 Kahin | Köylüler | Her gece birine bakar, sabah onun vampir olup olmadığını gizlice öğrenir. |
| 🧪 Cadı | Köylüler | Vampirlerin hedefini görür. Bir kez hayat iksiri, bir kez zehir kullanabilir. |
| 🏹 Avcı | Köylüler | Ölünce 20 saniye içinde birini vurup yanında götürür. |
| 🎖️ Muhtar | Köylüler | Gündüz oyu iki sayılır (oy verince herkes fark eder). |
| 🃏 Soytarı | Tek başına | Gündüz asılırsa tek başına kazanır. |
| 🧑‍🌾 Köylü | Köylüler | Tartışır, oy verir, vampirleri bulmaya çalışır. |

Vampir sayısı oyuncu sayısına göre belirlenir (5–9: 1, 10–14: 2, 15+: 3). Oda sahibi özel rolleri oda
kurarken ya da lobide açıp kapatır. Özel roller tablodaki sırayla eklenir, her oyunda en az bir sade köylü kalır.

## Bilgisayarda çalıştırma

1. [Node.js](https://nodejs.org) 18 veya üstü kurulu olmalı.
2. Bu klasörde:

   ```bash
   npm install
   npm start
   ```

3. Tarayıcıda `http://localhost:3000` adresini aç.

Sunucu açılınca terminalde `Aynı Wi-Fi'dakiler: http://192.168.x.x:3000` gibi bir satır yazar.
Aynı ağdaki arkadaşların bu adresle katılabilir. Oyunu tek başına denemek için aynı tarayıcıda
5 ayrı sekme açman yeterli.

## İnternette yayınlama (farklı evlerden oynamak için)

Oyun, sürekli açık duran bir Node.js sunucusu ister: roller gizli tutulur, gece/gündüz sayaçları ve
oylar sunucuda hesaplanır. Bu yüzden **sadece Netlify ya da Firebase Hosting yetmez** (ikisi de yalnızca
statik dosya sunar, WebSocket sunucusu çalıştırmaz).

### Önerilen: Render (ücretsiz, tek servis)

1. Projeyi GitHub'a yükle.
2. [render.com](https://render.com) → **New → Blueprint** → depoyu seç. `render.yaml` her şeyi ayarlar.
   (Elle kurmak istersen: **New → Web Service**, Build: `npm ci --omit=dev`, Start: `npm start`.)
3. Birkaç dakika sonra `https://vampir-koylu.onrender.com` gibi bir adres verir. Davet linkleri de bu adresle oluşur.

Ücretsiz planda 15 dakika kimse bağlanmazsa sunucu uyur. İlk giren kişide açılış yaklaşık 1 dakika sürer.
Sunucu yeniden başlarsa açık odalar kapanır (oyun durumu bellekte tutulur). Sürekli açık olsun istersen
Render'ın en ucuz ücretli planı ya da Railway, Fly.io gibi bir servis kullanılabilir.

### İsteğe bağlı: arayüz Netlify'da, sunucu Render'da

1. Sunucuyu yukarıdaki gibi Render'a kur.
2. `public/config.js` içindeki `serverUrl` alanına Render adresini yaz.
3. Render'da `CLIENT_ORIGIN` ortam değişkenine Netlify adresini yaz (ör. `https://vampir-koylu.netlify.app`).
4. Netlify'da depoyu bağla; `netlify.toml` yayın klasörünü (`public`) zaten belirtir.

### Firebase neden kullanılmadı?

Firebase ile yapmak için oyun kurallarının Cloud Functions'a taşınması gerekir. Aksi halde roller
veritabanında herkesin okuyabileceği yerde durur. Cloud Functions ücretli (Blaze) plan ister ve
mevcut kodun büyük kısmını yeniden yazmak demektir. Mevcut Socket.IO sunucusu bu iş için daha basit ve güvenli.

## Testler

```bash
npm test
```

Kural testleri (`test/game.test.js`, tüm roller dahil) ve gerçek sunucuyu 5 sanal oyuncuyla oynatan
uçtan uca test (`test/socket.test.js`) çalışır.

## Dosyalar

| Dosya | Görevi |
| --- | --- |
| `game.js` | Oyun kuralları: roller, gece/gündüz döngüsü, avcı atışı, oylama, kazanma koşulları, sohbet kanalları |
| `server.js` | Odalar, oyuncu bağlantıları, Socket.IO olayları, `/healthz` |
| `public/index.html` | Ekranlar: menü, nasıl oynanır, odalar, oda oluştur, lobi/oyun |
| `public/app.js` | Arayüz mantığı |
| `public/avatar.js` | Karakter, şapka, rol kostümü, mezar taşı ve hayalet çizimleri (SVG) |
| `public/scene.js` | Köy meydanı: karakterlerin yeri, yürüme, uyku, seçim, konuşma balonları |
| `public/cine.js` | Duyurularda oynayan kısa animasyonlu sahneler |
| `public/style.css`, `public/scene.css` | Tasarım ve animasyonlar |
| `public/config.js` | Sunucu ayrı bir adresteyse o adres |
| `render.yaml`, `netlify.toml` | Yayınlama ayarları |

Sabit değerler (`MIN_PLAYERS`, `MAX_PLAYERS`, süreler, rol sırası) `game.js` dosyasının başında.

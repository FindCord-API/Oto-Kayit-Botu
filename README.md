#  :clipboard: Kayıt Botu (discord.js v14)

Bu Discord botu, kullanıcıların bir butona tıklayarak [Findcord API]([https://discord.com/findcord](https://app.findcord.com/api/document)) üzerinden isim, yaş ve cinsiyet bilgilerini alır ve bu bilgilere göre sunucuda kayıt işlemlerini otomatik olarak yapar.
##  :rocket: Özellikler
- `!kayıtbutonu` komutları ile kalıcı kayıt butonu gönderir
- Kullanıcı butona bastığında:
  - API'den kullanıcı verisini çeker
  - Kullanıcıya rol ataması yapar
  - Kayıtsız rolünü kaldırır
  - Takma adını örneğin `• Veli | 20` gibi ayarlar
- Hataları `error.txt` dosyasına loglar
- Kurmak için `kur.bat` script'i içerir
- Başlatmak için `baslat.bat` script'i içerir
##  :gear: Kurulum
1. Projeyi indir veya klonla:
- `git clone https://github.com/https://github.com/FindCord-API/Oto-Kayit-Botu.git`
- `cd kayit-botu`
2. Gerekli paketleri yükle:
- `npm install`
3. config.js dosyasını yapılandır:
```js
export const config = {
  botToken: 'BOT_TOKEN', // <-- Bot token

  tag: "•", // <-- İsminin başındaki tag kısmı

  roller: { // <-- Verilecek Roller
    kayitsiz: 'KAYITSIZ_ROL_ID', // <-- Varsa Yeni Gelen Kişilere Verilen Kayıtsız Rolü. Boş Bırakbilirsiniz.
    kayitli: 'KAYITLI_ROL_ID', // <-- Varsa Genel Üye Rolü. Boş Bırakbilirsiniz.
    erkek: 'ERKEK_ROL_ID', // <-- Varsa Erkek Rolü. Boş Bırakbilirsiniz.
    kadin: 'ERKEK_ROL_ID', // <-- Varsa Kadın Rolü. Boş Bırakbilirsiniz.
    unisex: 'UNISEX_ROL_ID' // <-- Varsa Unisex Rolü Cinsiyeti Belirli Olmayanlara Verilecek Rol. Boş Bırakbilirsiniz.
  },

  ayar: {
    cinsiyet_belirsizse_kayit_etme: 'true',  // <-- Cinsiyet Findcord apisi tarafından bilinmiyorsa bu kısım "true" ise kayıt etmez. "false" ise kayıt eder.
  },
  
  api: {
    baseURL: 'https://app.findcord.com/api/sorgu/',  // <-- Buraya elleme
    key: 'API_KEY' // <-- findcord Api Key discod.gg/findcord
  }
};
```
# 🤖 Komutlar
`!kayıtbutonu` `->` Sunucuya buton gönderir. Sadece yöneticiler tarafından kullanılabilir.
# :arrow_forward: Botu Başlatma
- Windows (kolay yöntem): `baslat.bat`
- Manuel başlatma: `node index.js`
# :file_folder: Dosya Yapısı
```
kayıt-botu/
│
├── config.js           → Bot ve rol ayarları
├── getUserData.js      → API veri çekme fonksiyonu
├── index.js            → Botun ana dosyası
├── baslat.bat          → Başlatma scripti (Windows)
├── kur.bat             → Modül kurma scripti (Windows)
├── error.txt           → Hata logları
└── README.md           → Bilgilendirme mesajı
```
#  :safety_pin: Gereksinimler
* Node.js 18 veya üzeri
* Discord Bot Token
* Findcord API Key
* Sunucuda gerekli rol yetkilendirmeleri
# :brain: Notlar
• Kullanıcının Findcord API'de verisi yoksa kayıt işlemi yapılmaz.
• Nickname şu şekilde ayarlanır: `tag + isim | yaş`
• Sadece yetkili kullanıcılar kayıt butonunu gönderebilir.
# :envelope_with_arrow: Destek
Herhangi bir hata veya katkı için [discord.gg/findcord](https://discord.gg/findcord)

Hazırlayan: FindCord Team

Lisans: MIT

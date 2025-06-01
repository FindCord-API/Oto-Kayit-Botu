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
    cinsiyet_belirsizse_kayit_etme: 'true',  // <-- Cinsiyet Findcord apisi tarafından bilinmiyorsa ve bu kısım "true" ise kayıt etmez "false" ise kayıt eder.
  },
  
  api: {
    baseURL: 'https://app.findcord.com/api/sorgu/',  // <-- Buraya elleme
    key: 'API_KEY' // <-- findcord Api Key discod.gg/findcord
  }
};

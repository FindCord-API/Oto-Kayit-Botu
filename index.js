import {
  Client,
  GatewayIntentBits,
  Partials,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  EmbedBuilder,
  Events
} from 'discord.js';

import { config } from './config.js';
import { getUserData } from './getUserData.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.once('ready', () => {
  console.log(`${client.user.tag} hazır!`);
});

client.on('messageCreate', async (message) => {
  if (message.content === '!kayıtbutonu') {
	if (!message.member.permissions.has('Administrator')) return;
	
	const exampleEmbed = new EmbedBuilder()
	.setColor("Blue")
	.setAuthor({ name: 'Hızlı Kayıt Paneli', iconURL: message.guild.iconURL() })
	.setDescription('Hızlı ve kolay bir şekilde kayıt işlemini gerçekleştirmek için, Aşağıda ki "Kayıt Ol" butonuna tıkladıktan sonra kaydınız otomatik olarak gerçekleştirilecektir.')
	.setThumbnail(message.guild.iconURL())
	.setFooter({ text: 'FindCord API' });
	
    const kayitButton = new ButtonBuilder()
      .setCustomId('kayıt_ol')
      .setLabel('Kayıt Ol')
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder().addComponents(kayitButton);

    await message.channel.send({
	  embeds: [exampleEmbed],
      components: [row]
    }).catch(() => null);
  }
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId !== 'kayıt_ol') return;

  const member = interaction.member;
  if (!member){	  
    await interaction.reply({ content: '❌ Bir hata oluştu. Lütfen tekrar deneyin.', flags: 64 }).catch(() => null);
	return;
  }
  
  const userId = member.id;

  const data = await getUserData(userId);

  if (data.error) {
    return interaction.reply({ content: `❌ Kayıt başarısız. FindCord API'de veriniz bulunamadı.`, flags: 64 }).catch(() => null);
  }

  const { isim, yas, cinsiyet } = data;
  const { kayitsiz, kayitli, erkek, kadin, unisex } = config.roller;
  const taglıIsim = `${config.tag.length > 0 ? `${config.tag} ` : ""}${isim} | ${yas}`;
  const cinsiyetLower = cinsiyet.toLowerCase();
  
  try {
	  
	if (config.ayar.cinsiyet_belirsizse_kayit_etme === 'true' && cinsiyetLower === 'unisex') {
      await interaction.reply({ content: `❌ Kayıt başarısız. FindCord API'de cinsiyetiniz belirli değil.`, flags: 64 }).catch(() => null);		
      return;
    }
	  
    if (kayitsiz && member.roles.cache.has(kayitsiz)) {
      await member.roles.remove(kayitsiz).catch(() => null);
    }

    if (kayitli && !member.roles.cache.has(kayitli)) {
      await member.roles.add(kayitli).catch(() => null);
    }

    if (cinsiyetLower === 'erkek' && erkek && !member.roles.cache.has(erkek)) {
      await member.roles.add(erkek).catch(() => null);
    }

    if (cinsiyetLower === 'kadin' && kadin && !member.roles.cache.has(kadin)) {
      await member.roles.add(kadin).catch(() => null);
    }
	
	if (cinsiyetLower === 'unisex' && unisex && !member.roles.cache.has(unisex)) {
      await member.roles.add(unisex).catch(() => null);
    }

    await member.setNickname(taglıIsim).catch(() => null);

    await interaction.reply({ 
		content: 
		`## Kayıt Başarılı ✅`
		+ `\n\`İsim     :\` **${isim}**`
		+ `\n\`Yaş      :\` **${yas}**`
		+ `\n\`Cinsiyet :\` **${cinsiyetLower}**`,
		flags: 64
	}).catch(() => null);

  } catch (err) {
    console.error(err);
    await interaction.reply({ content: '❌ Bir hata oluştu. Lütfen tekrar deneyin.', flags: 64 }).catch(() => null);
  }
});

client.login(config.botToken);

const Discord = require('discord.js');






const client = new Discord.Client();




const prefix = '?';









client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Creativerse',
            type: "PLAYING",
        }
    });
});    





client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
});





client.on('ready', () => {
	console.log("Bot ist fertig xD\n\n")
	});





client.on('message', message => {
	if(message.content.toLowerCase() === '<@464364602965360660>') { if(message.author.bot) { return; }
	         var embed = new Discord.RichEmbed()
			 .addField('test:smile:  ', '?hilfe')
			 .setColor('GREEN')
			message.channel.sendEmbed(embed);						      
	}
});



	

});

client.on('guildMemberAdd', member => {
		const channel = member.guild.channels.find(ch => ch.name === 'willkommen');
        if (!channel) return;
		channel.send(`Herzlich Willkommen beim Server Deutschsprachige Baumaschinen, ${member}Discord Server Regeln:- Nicht beleidigen- Nicht mobben- kein Rassismus- Freundlicher Umgang im Chat- Wenn ein Admin gebraucht wird bitte in den #👀admin-gesucht channel schreiben, @Admin  eintippen wenn es dringend ist.- Server Kommandos: !hilfe, dann erscheint eine Liste mit Kommandos.Wir wünschen viel Spaß beim bauen euer Server Team von den Deutschsprachigen Baumaschinen Server aus Creativerse !`);
});




client.on('message', message => {
	if(message.content.toLowerCase() === prefix + 'hilfe') { if(message.author.bot) { return; }
	         var embed = new Discord.RichEmbed()
			 .addField('du brauchst hilfe? ','meine commandos')
			 .setColor('GREEN')
			message.channel.sendEmbed(embed);
	}
});





// THIS  MUST  BE  THIS  WAY



client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot

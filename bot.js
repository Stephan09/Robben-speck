const Discord = require('discord.js');















const client = new Discord.Client();











const prefix = 't!';







 















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



    if (message.content === prefix + 'twitch') {



       message.channel.send('Here ist the link to Playfulcorp twitch channel: https://www.twitch.tv/playfulcorp ;)');



       }



}); 



















client.on('message', message => {



	



	if(message.content.toLowerCase() === '<@497685236763590656>') { if(message.author.bot) { return; }



	 



	         var embed = new Discord.RichEmbed()



			 



			 .addField('test:smile:  ', 'only test')

			 .setColor('GREEN')



			 



			message.channel.sendEmbed(embed);



	



	}



	



});























client.on('guildMemberAdd', member => {



		const channel = member.guild.channels.find(ch => ch.name === 'chat');



        if (!channel) return;



		channel.send(`${member}Willkommen!`);



});































 



client.on('message', message => {



	



	if(message.content.toLowerCase() === prefix + 'help') { if(message.author.bot) { return; }



	 



	         var embed = new Discord.RichEmbed()



			 



			 .addField('du brauchst hilfe? ','mach t!hilfe für hilfe')



			 .setColor('GREEN')



			 



			message.channel.sendEmbed(embed);



	



	}



	



});

























// THIS  MUST  BE  THIS  WAY















client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot

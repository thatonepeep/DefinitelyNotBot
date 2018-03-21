const Discord = require('discord.js');
const client = new Discord.Client();
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
 bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startswith(PREFIX)) return;

var args = messahe.content.substring(PREFIX.LENGTH).split(" ");
 
    switch (args[0].toLowerCase()) {
     case "Info";
      message.channel.sendMessage("Property of MistyPeak.Bot made by ThatOnePeep#6581,it was designed to help members of the MistyPeak's community to know their way around the commands and the server/group/website. Type /help for detailed help with such things as commands and general questions."))
 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

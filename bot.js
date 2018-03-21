const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("Ready", function() {
    console.log("ready");

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)); return;

     if (message.content == "ping") (
         message.channel.sendMessage("Pong!"))
     

});

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

var bot = new Discord.Client();

bot.on("Ready", function() {
    console.log("ready");

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)); return;

     if (message.content == "ping") (
         message.channel.sendMessage("Pong!"))
     

});

bot.login(TOKEN); 

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('CONNECTED!');

});



let prefix = "#";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "7nung")) {
    message.channel.send("Nung lol me thien ha!!");
  } 
});

client.login(process.env.BOT_TOKEN);

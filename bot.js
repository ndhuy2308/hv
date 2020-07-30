const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

let prefix = "";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } 
});

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

const userID = "479877128368685056"

bot.on("message", function(message){
if(!message.sender === userID)
{

if(message.content === 'ping')
{
    message.channel.send('pong');
}
}});

client.login(process.env.BOT_TOKEN);

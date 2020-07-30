const Discord = require('discord.js');
const client = new Discord.Client();
const userID = "479877128368685056";

client.on('ready', () => {

    console.log('I am ready!');

});

client.on("message", function(message){
if(!message.sender === userID)
{

if(message.content === 'ping')
{
    message.channel.send('pong');
}
}});

client.login(process.env.BOT_TOKEN);

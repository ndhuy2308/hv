const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
if(!message.sender === '479877128368685056')
{
    if (message.content === 'ping') {

       message.reply('pong');

       }
}
});

client.login(process.env.BOT_TOKEN);

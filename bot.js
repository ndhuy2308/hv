const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message',async message => {

    if (message.content === 'pinktea') {

       message.reply('thich" nhun"');

       }

});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

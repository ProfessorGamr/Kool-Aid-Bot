const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'no') {
    	message.reply('OH YEAH');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDk0NjIzNjgyMjEyMzk3MDU3.DpA5Yg.AJVqVC1vW30N0Vo_NbZhM4_7-KU);

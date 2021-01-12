//main.js
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);
//TODO:Later add the commands to their specific files
client.on('message', message => {
if(message.content === `${prefix}bet`){
    message.channel.send('Command is coming soon!');
}else if(message.content === `${prefix}view`)
{
    message.channel.send('Command is coming soon!');
}
});

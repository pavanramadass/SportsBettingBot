module.exports = {
	name: 'contribute',
	description: 'contribute',
	execute(message) {
        message.channel.send(`Hi ${message.author.username}! Thank you for your interest in our project. Here is the link to the github repo: https://github.com/enisaras/SportsBettingBot`);
	},
};
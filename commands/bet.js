/*The command for the main function of the bot, users can make a bet
following the format: !bet {team} {bet_type} {coins}
*/
module.exports = {
	name: 'bet',
	description: 'Bet',
	execute(message) {
		message.channel.send('Command coming soon!');
	},
};

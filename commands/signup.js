const { prefix } = require('../config.json');

var player_ID = Math.floor((Math.random() * 100) + 1); 

module.exports = {
  name: 'signup',
  description: 'sign up to create a profile to partake in the bets.',
  arguments: 'first name and last name',
  usage: `\`${prefix}signup [firstname] [lastname]\``, 
  execute(message, args) {
    let firstname = args[0];
    let lastname = args[1];
    message.reply(`Thank you, ${firstname} for signing up! You have been given a starting balance of $1,000. Your player ID has been sent to your DM.`);
    message.author.send(`Your player ID is ${player_ID}. If you wish to delete your account, then use the player ID to delete the account.`); 
  },
};

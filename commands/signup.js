const { prefix } = require('../config.json');
const { Users } = require ('../dbObjects.js'); 

let player_ID = Math.floor((Math.random() * 10000) + 1); 

// creates a new user in the database 
function create(firstname, lastname, player_ID) {
  const amount = 1000; 
  const newUser = Users.create({ user_id: player_ID, first_name: firstname, last_name: lastname, balance: amount}); 
  return newUser; 
}

module.exports = {
  name: 'signup',
  description: 'sign up to create a profile to partake in the bets.',
  arguments: 'first name and last name',
  usage: `\`${prefix}signup [firstname] [lastname]\``, 
  execute(message, args) {
    let firstname = args[0];
    let lastname = args[1];
    create(firstname, lastname, player_ID); 
    message.reply(`Thank you, ${firstname} for signing up! You have been given a starting balance of $1,000. Your player ID has been sent to your DM.`);
    message.author.send(`Your player ID is ${player_ID}. If you wish to delete your account, then use the player ID to delete the account.`); 
  },
};

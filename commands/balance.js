const {prefix} = require('../config.json');
const Discord = require('discord.js');
const { Users } = require('../dbObjects.js');
//const { Op } = require('sequelize');
//const client = new Discord.Client();
const currency = new Discord.Collection();
Reflect.defineProperty(currency, 'add', {
	/* eslint-disable-next-line func-name-matching */
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		try{
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
		}
		catch(err){
			console.error(err);
		}
	},
});
Reflect.defineProperty(currency, 'getBalance', {
/* eslint-disable-next-line func-name-matching */
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
		},
});
module.exports = {
	name: 'balance',
	description: 'View your current balance.',
	usage:`\`${prefix}balance\``,
	execute(message) {
		currency.add(message.author.id, 1);
		const target = message.mentions.users.first() || message.author;
		message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}.\n`);
			 },
	};

const { prefix } = require("../config.json");

module.exports = {
    name: "donation",
    description: "Make a donation.",
    arguments: "None", 
    usage: `\`${prefix}donation\``,
    execute(message) {
        message.reply("Thank you for wanting to donate. Go to: www.notarealwebsie.com to make your donation.") 
    },
}; 

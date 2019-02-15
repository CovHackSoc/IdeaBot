/* eslint no-console: 0 */
const Discord = require('discord.js');

/* Takes the discord API token and an instance of a commands
 * class that routes the messages to the correct handler */
const Bot = (token, commands) => {
  const client = new Discord.Client();

  /* Tell us we've connected */
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  /* Pass it onto the specialised command handler */
  client.on('message', (msg) => {
    try {
      commands.process(msg);
    } catch (err) {
      console.error(err);
    }
  });


  client.login(token);
};

module.exports = Bot;

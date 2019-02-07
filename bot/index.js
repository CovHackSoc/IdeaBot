/* eslint no-console: 0 */
const Discord = require('discord.js');
const shlex = require('shlex');
const dotenv = require('dotenv');

const client = new Discord.Client();

dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  const { content, author } = msg;
  const message = shlex.split(content);
  if (message[0] === '!idea') {
    /* Process here */
    console.log(message);
  }
});


client.login(process.env.TOKEN);

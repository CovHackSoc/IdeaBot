/* eslint no-console: 0 */
const Discord = require('discord.js');
const admin = require('firebase-admin');
const shlex = require('shlex');
const dotenv = require('dotenv');

const client = new Discord.Client();

dotenv.config();

const serviceAccount = require('../secrets/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL,
});

const database = admin.database();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  try {
    const { content, author } = msg;
    const message = shlex.split(content);
    if (message[0] === '!idea') {
      /* Process here */
      console.log(message);
      if (message.length > 1) {
        const ref = database.ref(process.env.FIREBASEKEY);
        const idea = ref.child('all').push({
          idea: message.slice(1).join(' '),
          author: author.username,
        });
        const id = idea.key;
        msg.reply(`Added! Check it out at: ${process.env.HOST}#${id}`);
      }
    }
  } catch (err) {
    console.log(err);
    // msg.reply('You triggered an exception :(');
  }
});


client.login(process.env.TOKEN);

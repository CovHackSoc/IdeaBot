/* eslint no-console: 0 */
const Discord = require('discord.js');
const admin = require('firebase-admin');
// const shlex = require('shlex');
const dotenv = require('dotenv');

/* Import our handlers */
const ideaHandler = require('./idea');
const infoHandler = require('./info');
const scoreHandler = require('./score');
const adviceHandler = require('./advice');

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
    const { content } = msg;
    if (content[0] !== '!') return;
    const message = content.split(' ');
    switch (message[0]) {
      case '!idea':
        ideaHandler(database, msg, message);
        break;
      case '!info':
        infoHandler(database, msg, message);
        break;
      case '!upvote':
        scoreHandler(database, msg, message, 1);
        break;
      case '!downvote':
        scoreHandler(database, msg, message, -1);
        break;
      case '!advice':
        adviceHandler(database, msg);
        break;
      default:
        break;
    }
  } catch (err) {
    console.log(err);
    // msg.reply('You triggered an exception :(');
  }
});


client.login(process.env.TOKEN);

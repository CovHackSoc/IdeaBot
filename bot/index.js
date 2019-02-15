/* eslint no-console: 0 */
const dotenv = require('dotenv');

const bot = require('./bot');
const Parser = require('./parser');

/* Run everything */
dotenv.config();

/* Configure the commands */
const commands = new Parser();

commands.add('hello', (meta) => {
  meta.reply('world');
});

commands.add('cat', require('./commands/cat'));
commands.add('shibe', require('./commands/shibe'));
commands.add('advice', require('./commands/advice'));
commands.add('reddit <subreddit>', require('./commands/reddit'));

/* Run */
bot(process.env.TOKEN, commands);

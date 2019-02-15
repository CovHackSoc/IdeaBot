/* eslint no-console: 0 */
const axios = require('axios');

const redditHandler = (meta, subreddit) => {
  /* pick one I guess */
  axios.get(`https://www.reddit.com/r/${subreddit}.json`).then(
    (response) => {
      const items = response.data.data.children;
      let choice;
      while (choice === undefined) {
        choice = items[Math.floor(Math.random() * items.length)];
      }
      meta.reply(`${choice.data.url}`);
    },
  ).catch((error) => {
    console.error(error);
    meta.reply('error :( Might be hitting a rate limit');
  });
};


module.exports = redditHandler;

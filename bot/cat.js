/* eslint no-console: 0 */
const axios = require('axios');

const catHandler = (database, msg) => {
  axios.get('https://api.thecatapi.com/v1/images/search').then(
    (response) => {
      msg.reply(response.data[0].url);
    },
  ).catch((error) => {
    console.log(error);
    msg.reply('error :(');
  }).then(() => {
  });
};

module.exports = catHandler;

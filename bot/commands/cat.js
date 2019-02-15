/* eslint no-console: 0 */
const axios = require('axios');

const catHandler = (meta) => {
  axios.get('https://api.thecatapi.com/v1/images/search').then(
    (response) => {
      meta.reply(response.data[0].url);
    },
  ).catch((error) => {
    console.log(error);
    meta.reply('error :(');
  }).then(() => {
  });
};

module.exports = catHandler;

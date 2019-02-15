/* eslint no-console: 0 */
const axios = require('axios');

const adviceHandler = (meta) => {
  axios.get('https://api.adviceslip.com/advice').then(
    (response) => {
      meta.reply(response.data.slip.advice);
    },
  ).catch((error) => {
    console.log(error);
    meta.reply('error :(');
  }).then(() => {
  });
};

module.exports = adviceHandler;

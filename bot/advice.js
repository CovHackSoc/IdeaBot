/* eslint no-console: 0 */
const axios = require('axios');

const adviceHandler = (database, msg) => {
  axios.get('https://api.adviceslip.com/advice').then(
    (response) => {
      msg.reply(response.data.slip.advice);
    },
  ).catch((error) => {
    console.log(error);
    msg.reply('error :(');
  }).then(() => {
  });
};

module.exports = adviceHandler;

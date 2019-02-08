/* eslint no-console: 0 */
const axios = require('axios');

const shibeHandler = (database, msg) => {
  axios.get('http://shibe.online/api/shibes').then(
    (response) => {
      msg.reply(response.data[0]);
    },
  ).catch((error) => {
    console.log(error);
    msg.reply('error :(');
  }).then(() => {
  });
};

module.exports = shibeHandler;

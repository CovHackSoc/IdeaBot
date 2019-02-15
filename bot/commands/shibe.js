/* eslint no-console: 0 */
const axios = require('axios');

const shibeHandler = (meta) => {
  axios.get('http://shibe.online/api/shibes').then(
    (response) => {
      meta.reply(response.data[0]);
    },
  ).catch((error) => {
    console.log(error);
    meta.reply('error :(');
  }).then(() => {
  });
};

module.exports = shibeHandler;

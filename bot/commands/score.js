const scoreHandler = (database, msg, message, change) => {
  if (message.length > 1) {
    const key = message[1];
    const ref = database.ref(process.env.FIREBASEKEY);
    const obj = ref.child('all').child(key);

    database.runTransaction((transaction) => {
      transaction.get(obj).then((doc) => {
        if (!doc.exists) {
          msg.reply('Unable to find idea');
          return;
        }
        let score = doc.data().score;
        if (score) {
          score = score + change;
        } else {
          score = change;
        }
        msg.reply(`Your vote has been counted! Current Score is: ${score}`);
        transaction.update(obj, { score });
        return obj;
      });
    });
  }
};

module.exports = scoreHandler;

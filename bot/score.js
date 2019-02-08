const scoreHandler = (database, msg, message, change) => {
  if (message.length > 1) {
    const key = message[1];
    const ref = database.ref(process.env.FIREBASEKEY);
    const idea = ref.child('all').child(key).child('score');
    idea.transaction((score) => {
      if (score) {
        score = score + change;
      } else {
        score = change;
      }
      msg.reply(`Your vote has been counted! Current Score is: ${score}`);
      return score;
    });
  }
};

module.exports = scoreHandler;

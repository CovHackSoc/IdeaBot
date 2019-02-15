const infoHandler = (database, msg, message) => {
  if (message.length > 1) {
    const key = message[1];
    const ref = database.ref(process.env.FIREBASEKEY);
    const idea = ref.child('all').child(key);
    idea.transaction((value) => {
      if (value) {
        const temp = value.val();
        msg.reply(`@${temp.author || 'anonymous'} suggested "${temp.idea}"`);
      } else {
        msg.reply('I couldn\'t find that one :(');
      }
    });
  }
};

module.exports = infoHandler;

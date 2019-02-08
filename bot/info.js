const infoHandler = (database, msg, message) => {
  if (message.length > 1) {
    const key = message[1];
    console.log(key);
    const ref = database.ref(process.env.FIREBASEKEY);
    try {
      const idea = ref.child('all').child(key);
      const value = idea.val();
      console.log(idea);
      msg.reply(`@${value.author || 'anonymous'} suggested "${value.idea}"`);
    } catch (err) {
      msg.reply('I can\'t find that one :(');
    }
  }
};

module.exports = infoHandler;

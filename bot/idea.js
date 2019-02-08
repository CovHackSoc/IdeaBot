const ideaHandler = (database, msg, message) => {
  const { author } = msg;
  if (message.length > 1) {
    const ref = database.ref(process.env.FIREBASEKEY);
    const idea = ref.child('all').push({
      idea: message.slice(1).join(' '),
      author: author.username,
      score: 0,
    });
    const id = idea.key;
    msg.reply(`Added! Check it out at: ${process.env.HOST}/${id}`);
  }
};

module.exports = ideaHandler;

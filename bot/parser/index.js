/* Ok, this is basically a parser for all of your commands
 * Built around commander.js, so it's pretty flexible.
 */

const commander = require('bot-commander');


class Parser {
  constructor() {
    this.commands = commander
      .prefix('!')
      .showHelpOnEmpty(false);
  }

  add(command, action) {
    this.commands
      .command(command)
      .action(action.bind(commander));
  }

  process(command) {
    const { content } = command;
    this.commands
      .parse(content, command);
  }
}

module.exports = Parser;

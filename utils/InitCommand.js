const CommandOrquester = require("./CommandOrquester");

// services
const HelloCommand = require("./Services/HelloCommand");
const RollCommand = require("./Services/RollCommand");
const CaracolaCommand = require("./Services/CaracolaCommand");

const commandOrquester = new CommandOrquester();
commandOrquester.addCommand(new HelloCommand());
commandOrquester.addCommand(new RollCommand());
commandOrquester.addCommand(new CaracolaCommand());

module.exports = commandOrquester;
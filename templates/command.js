/**
 * Template for commands
 */
module.exports = {
    name: "", // name of command that people can call the command by (MUST MATCH NAME OF FILE without the .js)
    aliases: [], // aliasis that can be used instead of the main name
    category: "bot", // category the command is grouped under (the parent folder name)

    adminOnly: false, // (optional) requires userID to be in config.js array
    permissions: 2, // (optional) permission level required to run this command. See ~/data/permission_config.js

    description: "", // description shown in the help command
    usage: "", // more information about using the command shown with the help command
    run: async (bot) => {
      let { client, message, args, config} = bot //deconstruct the bot object into the individual properties for use in command
      //command logic here

      //example of how to use the error response handler
      if (args[0] === undefined) throw "?give me more info" //this would return "give me more info" back to the user in a message
    }
  }
  
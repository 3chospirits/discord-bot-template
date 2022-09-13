const {getPermissionLevel, getPermissionName} = require("../handlers/permissions")
module.exports = {
    name: "messageCreate",
    run: runAll,
};

function runAll(bot, message) {
    runCommands(bot, message);
}

async function runCommands(bot, message) {
    if (!message.guild) return;
    if (message.author.bot) return;
    let {client, config, prefix} = bot
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if (!command) return

    // old permission compatibility
    if (command.adminOnly === true) {
        if (!config.bot_admins.includes(message.author.id))
            return client.functions.get("functions").response(message, "Only this bot's admins can execute this command!")
    }

    // handles new permissions
    // configure permissions in ~/data/permission_config.js
    if (command.permission && getPermissionLevel(message.member) < command.permission)
        return client.functions.get("functions").response(message, `This command requires ${getPermissionName(command.permission)} permissions`)

    bot.message = message
    bot.args = args
    //add additional things you would like to pass to the command runners here
    try {
        await command.run(bot)
    } catch (err) {
        //accepts any error messages and returns to the user a custom message
        let errMsg = err.toString() //just add `throw "?error message text"` anywhere in your code
        if (errMsg.startsWith("?"))
            //prefix any thrown errors with a "?" to distinguish it from other errors
            client.functions.get("functions").response(message, errMsg.replace(/\?/, ""))
        else console.log(err) //should log to console any errors that are not purposely thrown
    }
}

const Discord = require("discord.js")
module.exports = {
    name: "reload",
    aliases: ["r"],
    category: "dev",
    adminOnly: true,
    description: "reloads the bot",
    run: async (bot) => {
        var { client, message, config } = bot;
		await client.loadCmds(client, true); //reload is true
        await client.loadEvents(client, true);
        await client.loadFunctions(client, true);

		message.channel.send(
			new Discord.MessageEmbed()
				.setColor("#8DC685")
				.setTitle("Bot Reload Complete")
				.setDescription(
					client.functions.get("functions").autoAlign([
						[`\`${client.commands.size}\``, `Commands`],
						[`\`${client.aliases.size}\``, `Aliases`],
						[`\`${client.events.size}\``, `Events`],
						[`\`${client.functions.size}\``, `Functions`],
					])
				)
		)
    }
  }
  
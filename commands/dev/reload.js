const Discord = require("discord.js")
module.exports = {
    name: "reload",
    aliases: ["r"],
    category: "dev",
    adminOnly: true,
    description: "reloads the bot",
    run: async ({ client, message, config }) => {
		await client.loadCmds(client, true); //reload is true
        await client.loadEvents(client, true);
        await client.loadFunctions(client, true);
		const embed = new Discord.EmbedBuilder()
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
		message.channel.send({ embeds: [embed] })
    }
}
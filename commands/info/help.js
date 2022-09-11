const Discord = require("discord.js");


module.exports = {
	name: "help",
	aliases: ["h"],
	category: "info",
	description: "Returns all commands, or one specific command's info",
	usage: "[command | alias]",
	run: async ({client, message, args, prefix}) => {
		message.reply({ ephemeral: true, content: "Lol" })
		if (args[0]) return getCMD(client, message, args[0], prefix);
		else return getAll(client, message, prefix);
	},
};

function getAll(client, message, prefix) {
	let reacts = [
        ":tools:",
        ":information_source:"
	];

	let embedfields = [];

	client.categories.forEach(c => {
		if (c == "hidden") return;
		embedfields.push({
			name: c,
			value: client.commands
                .filter(cmd => cmd.category === c)
				.map(cmd => `\`${cmd.name}\``)
				.join(", "),
			inline: true
		});
	});
	
	for (let i in embedfields) {
		embedfields[i].name = `${reacts[i]} ${embedfields[i].name[0].toUpperCase() + embedfields[i].name.substring(1)}`;
	}

	const em = {
		title: "Bot Commands",
		fields: embedfields,
		footer: { text: `Use ${prefix}help <command> for more info on a specific command\n[Command count: ${client.commands.size} ]` },
	}
	message.channel.send({ embeds: [em] });
}
function getCMD(client, message, input, prefix) {
	const embed = new Discord.EmbedBuilder();

	let cmd;
	
	client.commands.forEach(command => {
		if (command.name == input.toLowerCase() || command.aliases?.includes(input.toLowerCase())) {
			return cmd = command
		}
	})
	let info;
	if (!cmd) {
		//no specified command
		info = `No information found for command **${input.toLowerCase()}**`
		embed
			.setColor("Red")
			.setDescription(info)
		return message.channel.send({ embeds: [embed] });
	}
	else {
		if (cmd.name) info = `**Command name**: ${cmd.name}`;
		if (cmd.aliases)
			info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
		if (cmd.description) info += `\n**Description**: ${cmd.description}`;
		if (cmd.usage) {
			info += `\n**Usage**: ${prefix}${cmd.name} ${cmd.usage}`;
			embed.setFooter({ text: `Syntax: <> = required, [] = optional` });
		}
		embed.setColor("Green").setDescription(info)
		return message.channel.send({ embeds: [embed] });
	}
}
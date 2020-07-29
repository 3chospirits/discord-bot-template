const fs = require("fs");
module.exports = (client, reload, bot) => {
	fs.readdir("./events/", (err, files) => {
		if (err) console.error(err);
		let jsfiles = files.filter((f) => f.split(".").pop() === "js");
		if (jsfiles.length <= 0) return console.log("There are no events to load");
		if (!reload) console.log(`Loading ${jsfiles.length} events...`);
		jsfiles.forEach((f, i) => {
			// if ((f == "logs.js" || f == "smartwarnings.js") && reload) return; //never reloads logs events
			if (reload) delete require.cache[require.resolve(`../events/${f}`)];
			let pull = require(`../events/${f}`);
			client.events.set(pull.name, pull);
			if (!reload) console.log(`${i + 1}: ${f} loaded!`);
		});
	});
	if (!reload) initEvents(client, bot);
};
//IF YOU WISH TO HANDLE MORE EVENTS, BE SURE TO ADD THEM IN initEvents(client, bot)
//adding anything here would require a full bot restart!!
//examples for channelCreate/Delete, GuildCreate/Delete are shown
//if you need to add other events, copy the formatting and use this cheatsheet for reference
// https://gist.github.com/koad/316b265a91d933fd1b62dddfcc3ff584

function initEvents(client, bot) {
	client.on("message", (message) => {
		if (!message.guild) return;
		try {
			client.events.get("message").func(bot, message);
		} catch (err) {
			console.error(err);
		}
    });
    client.on("ready", ()=>{
        try {
			client.events.get("ready").func(bot);
		} catch (err) {
			console.error(err);
		}
	})
	// client.on("channelCreate", (channel)=>{
	// 	try {
	// 		client.events.get("channelCreate").func(bot, channel);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// });
	// client.on("channelDelete", (channel)=>{
	// 	try {
	// 		client.events.get("channelDelete").func(bot, channel);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// });
	// client.on("guildCreate", (guild)=>{
	// 	try{
	// 		client.events.get("guildCreate").func(bot, guild);
	// 	} catch (err){
	// 		console.log(err)
	// 	}
	// })
	// client.on("guildDelete", (guild)=>{
	// 	try{
	// 		client.events.get("guildDelete").func(bot, guild);
	// 	} catch (err){
	// 		console.log(err)
	// 	}
	// })
}

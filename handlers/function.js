const { readdirSync } = require("fs"); //declare FileStream
let errors = "";
//reload true on force reload
module.exports = async (client, reload) => {
	errors = "";
		//Getting folder "functions" and executing script with every sub-directory as parameter.
		const functions = readdirSync(`./functions/`).filter((f) => f.endsWith(".js")); // Filter files in sub-directories that only .js files would be loaded in to variable

		//For file loaded in "functions" variable, take that file.
		for (let file of functions) {
			if (reload) delete require.cache[require.resolve(`../functions/${file}`)];
			let pull = require(`../functions/${file}`); //request file

			// If file have defined name inside, register it as function in to the collection (index.js:8)
			if (pull.name) {
				client.functions.set(pull.name, pull); //Key: function, Value: File(.js) -> basically, if key is called, run value (file)
			} else {
				errors+=`${file}\n`
				continue;
			}
			// If file has aliases and aliases are in an Array (List), register each alias in to the collection (index.js:9)
			if (pull.aliases)
				pull.aliases.forEach((alias) => {
					client.aliases.set(alias, pull.name); //adds it to functions
				});
		}
	if (errors.length == 0) return console.log("Events: Build Success");
  console.log("Errors:" + errors);
};

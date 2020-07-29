/**
 * ALL EVENTS MUST BE MANUALLY ADDED TO EVENT HANDLER!!
 * You must add a handler for each event in the initEvents function 
 * in handlers/event.js !!
 */

const Discord = require("discord.js");
module.exports = {
	name: "", //name of the event (MUST MATCH THE FILE NAME minus the .js)
	func: runAll,
};

function runAll(bot, eventParameter) {
    runStuff(bot, eventParameter);
    //add other functions that use the event 
}
function runStuff(bot, eventParameter){
    //run stuff here 
}

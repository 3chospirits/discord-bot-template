/**
 * This file contains some generic functions used throughout various commands 
 * Add any additional functions that you use commonly throughout your code in here 
 */
const Discord = require("discord.js");


module.exports = {
    name: "functions",
	response,
    formatTime,
    autoAlign,
}

/**
 * Sends a Success/Error response to reply to a message
 * @param {Discord.Message} message the message for which this function is responding to
 * @param {String} desc message to be displayed in the responding message
 * @param {boolean} ok true for ok, false for error
 * @param {boolean} noDelete autodeletes response in 5 seconds unless true
 */
function response(message, desc, ok, noDelete) {
	//replies an error message to user
	var embed = new Discord.MessageEmbed()
		.setTitle(ok ? "Success!" : "Error!")
		.setColor(ok ? "#00ff00" : "ff0000") //change the colors here
		.setDescription(`**${ok ? "`✅` " : "`❌` "}** ${desc}`);
	return message.channel.send(embed).then((m) => {
		if (!noDelete) {
			m.delete({ timeout: 5000 });
		}
	});
}
/**
 * Returns a rounded time value as a string 
 * @param {number} time in ms
 * @returns {string} rounded time value as string
 */
function formatTime(time) {
    //time is in ms, this function changes time to a rounded time
    //returns string time
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const year = day * 365; //screw the leap year days
    var retval = "";
    if (time / year > 1) return t("year", year);
    else if (time / day > 1) return t("day", day);
    else if (time / hour > 1) return t("hour", hour);
    else if (time / min > 1) return t("minute", min);
    else if (time / sec > 1) return t("second", sec);
    else return "Ended";

    function t(unitName, unitTime) {
        return Math.round(time / unitTime) + ` ${Math.round(time / unitTime) == 1 ? unitName : unitName + "s"}`;
    }
}

/**
 * Automatic Alignment
 * @param {Array} align left and right fields to be aligned in size 2 arrays
 * @param {String} char optional character to use for alignment
 * @param {number} lock spaces to add inbetween
 * @returns {String} properly aligned message
 */
function autoAlign(align, char, lock) {
	let str = "";
	char = !char ? " " : char;

	let max = lock ? lock : align[0][0].length;
	for (arr of align) max = max < arr[0].length ? arr[0].length : max;
	max += 2;

	for (arr of align) str += `${arr[0]}${char.repeat(max - arr[0].length)}${arr[1]}\n`;
	return str;
}
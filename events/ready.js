module.exports = {
	name: "ready",
	run: runAll,
};
function runAll(bot) {
    console.log(`
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    Logged in as ${bot.client.user.tag}!   

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	`)
}
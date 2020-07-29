module.exports = {
	name: "ready",
	func: runAll,
};
function runAll(bot) {
	login(bot);
}
function login(bot){
    const {client} = bot;
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    console.log("")
    console.log(`   Logged in as ${client.user.tag}!   `);
    console.log("")
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
}
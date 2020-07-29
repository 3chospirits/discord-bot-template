module.exports = {
    name: "ping",
    category: "dev",
    adminOnly: true,
    description: "Returns bot's latency",
    run: async (bot) => {
      var {client, message, f} = bot;
      const msg = await message.channel.send(`Main bot Pinging...`);
      msg.edit(`Pong! \nAPI: \`${Math.round(client.ws.ping)}\`ms\nBot: \`${msg.createdAt - message.createdAt}\`ms.\nUptime: ${client.functions.get("functions").formatTime(client.uptime)}`);
    }
  }
  
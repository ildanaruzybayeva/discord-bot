const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const { Client } = require("discord.js");

const client = new Client();
client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", message => {
  if (!message.content) return;
  if (message.content.includes("ildana")) {
    message.reply("why u say my name?");
  }
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

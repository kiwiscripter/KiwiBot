const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs")
const mods = JSON.parse(fs.readFileSync("mods.json"))
prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return;
if (msg.content.indexOf(prefix) !== 0) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()
    if (mods[command] !== undefined) {
      require(mods[command].file_path+"index")(msg, args, mods[command], mods)
    }else{
      msg.channel.send("that command does not exist")
    }
})

client.login('NzIxODQ3NDA2MjMyMjA3Mzcx.XuaeyA.Zkzvvtfmb_5599h-PD4u19w2k30')
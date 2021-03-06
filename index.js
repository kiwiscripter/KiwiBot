const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs")
var {token, prefix} = require('./config.json')
const mods = JSON.parse(fs.readFileSync("mods.json"))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()
  try{
    if (mods[command] !== undefined) {
      require(mods[command].file_path+"index")(msg, args, mods[command], mods)
    }else{
      msg.channel.send("that command does not exist")
    }
  }catch(e){
    console.log(e)
    msg.channel.send(`\`\`\`${e}\`\`\``)
  }
})

client.login(token)
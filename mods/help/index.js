const Discord = require('discord.js')

module.exports = (msg, args, mod, mods) => {
	if (args[0] !== undefined) {
		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(mods[args[0]].title)
	.addFields(
		{ name: 'Syntax: ', value: '`;'+ mods[args[0]].syntax +'`'},
		{ name: 'Description: ', value: '```'+ mods[args[0]].description +'```'},
	)
	msg.channel.send(exampleEmbed)
	} else {
		let modlist = ""
		for (key in mods) {
			key = "`;" + key + "`"
			modlist = key + "\n" + modlist
		}
		msg.channel.send("Here is the list of available commands\n" + modlist)
	}
}
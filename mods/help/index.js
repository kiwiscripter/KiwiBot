module.exports = (msg, args, mod, mods) => {
	let modlist = ""
	for(key in mods){
		key = "`!"+key+"`"
		modlist = key + "\n"+modlist
	}
	msg.channel.send("here is the list of available commands\n"+modlist)
}
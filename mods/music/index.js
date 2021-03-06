const Discord = require('discord.js')
const ytdl = require('ytdl-core-discord');
const queue = {}
module.exports = (msg, args, mod, mods) => {
	if(queue[msg.guild.id] === undefined){
		queue[msg.guild.id] = []
	}
	let serverQueue = queue[msg.guild.id]


	if (args[0] === `play`) {
		play(args[1]);
		return;
	}else if (args[0] === `queue`) {
		msg.channel.send(`${serverQueue}`)
		return;
	}else if (args[0] === `stop`) {
		msg.member.voice.channel.leave()
		serverQueue = []
		msg.channel.send('left voice channel')
		return;
	}  else {
		msg.channel.send("You need to enter a valid command!");
	}
	console.log(serverQueue)
	function play(url) {
		if(serverQueue.length === 0) {
			serverQueue.push(url)
			playQueue()
		}else {
			serverQueue.push(url)
		}
	}

	function playQueue(){
		(async () => {
			const connection = await msg.member.voice.channel.join();
			connection.play(await ytdl(serverQueue[0]), { type: 'opus' }).on('start', () => {
				console.log('playing')
			}).on('finish', () => {
				serverQueue.shift()
				if(serverQueue.length === 0) return;

				playQueue()
			}).on('error', console.error)
		})()
	}
}
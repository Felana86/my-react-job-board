module.exports = {
	name: 'ping',
	cooldown: 10,
	description: 'Ping!',
	execute(message) {
		message.channel.send('Pong.');
	},
};
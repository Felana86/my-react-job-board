// require the discord.js module
const Discord = require('discord.js');

const discordController = {

    fetchDiscordBot: async (_, response) => {

        try {
            // create a new Discord client
            const client = new Discord.Client();

            // when the client is ready, run this code
            // this event will only trigger one time after logging in
            client.once('ready', () => {
            console.log('Ready!');
            });

            client.on('message', message => {
                if (message.content === '!ping') {
                    // send back "Pong." to the channel the message was sent in
                    message.channel.send('Pong.');
                }
            });

            // login to Discord with our app's token
            client.login(process.env.DISCORD_BOT_TOKEN);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = discordController;
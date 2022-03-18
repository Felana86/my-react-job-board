const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


const discordController = {

    fetchDiscordBot: async (_, response) => {

        try {

            const client = new Discord.Client();
            client.commands = new Discord.Collection();
            // client.cooldowns = new Discord.Collection();

            const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

            for (const file of commandFiles) {
                const command = require(__dirname + `/commands/${file}`);
                client.commands.set(command.name, command);
            };

            // const { cooldowns } = client;

            // if (!cooldowns.has(command.name)) {
            //     cooldowns.set(command.name, new Discord.Collection());
            // }

            // const now = Date.now();
            // const timestamps = cooldowns.get(command.name);
            // const cooldownAmount = (command.cooldown || 3) * 1000;

            // if (timestamps.has(message.author.id)) {
            //     const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            //     if (now < expirationTime) {
            //         const timeLeft = (expirationTime - now) / 1000;
            //         return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            //     }
            // }

            // timestamps.set(message.author.id, now);
            // setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

            // try {
            //     // ...
            // } catch (error) {
            //     // ...
            // }

            // when the client is ready, run this code
            // this event will only trigger one time after logging in
            client.once('ready', () => {
            console.log('Ready!');
            });

            client.on('message', message => {
                if (!message.content.startsWith(prefix) || message.author.bot) return;
            
                const args = message.content.slice(prefix.length).trim().split(/ +/);
                const command = args.shift().toLowerCase();
            
            
                if (!client.commands.has(command)) return;
            
                try {
                    client.commands.get(command).execute(message, args);
                } catch (error) {
                    console.error(error);
                    message.reply('there was an error trying to execute that command!');
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
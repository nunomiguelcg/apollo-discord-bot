const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

require('dotenv').config();

const token = process.env.TOKEN;

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

//const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

//for (const file of commandFiles) {
//    const command = require(`./commands/${file}`);

//    client.commands.set(command.name, command);
//}

//client.once('ready', () => {

//    console.log(`${client.user.tag} has logged in!`);

//});

//client.on('message', message => {

//    if (!message.content.startsWith(prefix) || message.author.bot) return;

//    const args = message.content.slice(prefix.length).split(/ +/);

//    const command = args.shift().toLowerCase();

//    if (command === 'ping') {
//        client.commands.get('test').execute(message, args);

//    } else if (command === 'youtube') {
//        client.commands.get('youtube').execute(message, args);
//    }

//});

client.login(token);
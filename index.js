const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {

    console.log(`${client.user.tag} has logged in!`);

});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('test').execute(message, args);

    } else if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args);
    }

});

client.login('ODE1OTA5Nzg3NDUxMzkyMDMw.YDzRNA.yN04Vejh42ypJfzoLOwTKFGisN4');
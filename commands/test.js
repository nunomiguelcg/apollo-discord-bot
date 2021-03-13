module.exports = {
    name: 'test',
    description: "Default test command.",
    execute(message, args) {
        message.channel.send('pong!');
    }
}
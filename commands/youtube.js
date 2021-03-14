module.exports = {
    name: 'youtube',
    description: "When commmand <-youtube> is send, the user receives a YouTube link.",
    execute(client, message, args, Discord) {
        message.channel.send('https://www.youtube.com')
    }
}
module.exports = {
    name: 'kick',
    description: "When commmand <-kick @user> is used, the user will be kicked.",
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been successfully kicked!");
        } else {
            message.channel.send("The kick was unsuccessful!");
        }
    }
}
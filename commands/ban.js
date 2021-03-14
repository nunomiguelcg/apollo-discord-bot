module.exports = {
    name: 'ban',
    description: "When commmand <-bam @user> is used, the user will be banned.",
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been successfully banned");
        } else {
            message.channel.send("The ban was unsuccessful!");
        }
    }
}
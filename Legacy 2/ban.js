module.exports.run = async (bot, message, args, db) => {
  message.delete()
  if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (member.id == "611913127780679711") return message.reply("please do not the Husk.")
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.bannable)
            return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

        let role = message.member.highestRole;
        let memberrole = member.highestRole;
        if (role.position < memberrole.position) {
            return await message.channel.send("Can't ban them, they are more powerful than you are!")
        }
        if (role.position === memberrole.position) {
            return await message.channel.send("Can't ban them, they are as powerful as you are!")
        }

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}.`));
        message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}.`);
    }

module.exports.help = {
    name: "ban"
}
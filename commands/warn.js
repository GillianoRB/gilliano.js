exports.run = (guild, message, args) => {
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
      let reason = args.slice(1).join(' ');
      let user = message.mentions.users.first();
      let modlog = guild.channels.find('name', 'log');

      if (!modlog) 
          return message.reply('I cannot find a log channel');

      if (reason.length < 1) 
          return message.reply('You must supply a reason for the warning.');

      if (message.mentions.users.size < 1) 
          return message.reply('You must mention someone to warn them.').catch(console.error);

      const embed = new Discord.RichEmbed()
          .setColor(0x8cff00)
          .setTimestamp()
          .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

      return guild.channels.get(modlog.id).send({embed});
  }
}
exports.help = {
  name: "warn"
}

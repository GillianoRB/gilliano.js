exports.run = async (bot, message, args) => {

  let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${user.tag}'s Info`, `${user.avatarURL}`)
    .setFooter(`User ID: ${user.id}`)
    .setTimestamp()
    .addField("Discord Name:", user.username)
    .addField("Discriminator:", `#${user.discriminator}`)
    .addField("Joined Discord:", user.createdAt)
    .addField("User Status:", user.presence.status)
    .addField("User Game:", `${user.presence.game ? user.presence.game.name: 'Not playing anything!'}`)
    message.channel.send(embed)
    
  }
  exports.help = {
    name: "info"
  }

exports.run = async (bot, message, args) => {

    message.delete();
    
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} Said..`)
    .setColor("RANDOM")
    .setDescription(args.join(' '))
 
    let msg = await message.channel.send(embed)
}

module.exports.help = {
    name: "sudo"
  }

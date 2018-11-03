exports.run = async (bot, message, args) => {

    let botmessage = args.join(" ");
    
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} Said..`)
    .setColor("RANDOM")
    .setDescription(botmessage)
 
    let msg = await message.channel.send(embed)
}

module.exports.help = {
    name: "sudo"
  }
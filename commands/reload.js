module.exports.run = async (bot, msg, args) => {
    if(msg.author.id != `244169411026485259`) return msg.channel.send (`$(msg.author), you may now use this command!`)
      if(!args || args.size < 1) return msg.channel.send("Please provide a valid command");
      delete require.cache[require.resolve(`./$(args[0]).js`)];
      msg.reply('The command ${args[0] has been reloaded!}')

}

module.exports.help = {
    name = "reload"
}

module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("give me a min and ill send you the avatar");
    let target = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
        {
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name: "avatar",
    description: "show the avatar of a user",
    usage: "[@user]"
}
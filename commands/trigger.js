module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;

    message.channel.send({
        file: {
            attachment: "https://cute-api.tk/v1/generate/triggered?url=" + user.displayAvatarURL,
            name: "triggered.gif"
        }
    });

};

module.exports.help = {
    name: 'trigger'
};
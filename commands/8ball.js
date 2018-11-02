const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
module.exports.run = async (client, message, args) => {
    var rnd = randomIntInc(1, 5);
    if (rnd === 1) {
        const embed1 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'No')
        message.channel.send(embed1);
    } else if (rnd === 2) {
        const embed2 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Not Probable')
        message.channel.send(embed2);
    } else if (rnd === 3) {
        const embed3 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Maybe')
        message.channel.send(embed3);
    } else if (rnd === 4) {
        const embed3 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Probably')
        message.channel.send(embed3);
    } else if (rnd === 5) {
        const embed3 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Yes')
        message.channel.send(embed3);
    }

}
exports.help = {
    name: '8ball',
    description: 'Answers to a question which you ask',
    usage: '!8ball <question>'
};

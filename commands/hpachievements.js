const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setAuthor(`${user.tag}'s Info`, `${user.avatarURL}`)
    .setFooter(`User ID: ${user.id}`)
    .setTimestamp()
    .addField("Hypixel includes many achievements, there is achievements in EVERY gamemode except for PTL lobby games! Hypixel has AP or Achievement Points, where you gain Hypixel XP and cosmetics for completing achievements!");

    message.channel.send(embed)
    }
    exports.help = {
      name: "hpachievements"
    }
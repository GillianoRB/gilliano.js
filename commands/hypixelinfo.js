const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setAuthor(`${user.tag}'s Info`, `${user.avatarURL}`)
    .setFooter(`User ID: ${user.id}`)
    .setTimestamp()
    .addField("**hypixel** is a minecraft server based on many fun minigames.")
    .addField("Hypixel includes games such as Skywars, Bedwars and Build Battle. Hypixel has a lot of different communities, such as PvP, Building and roleplaying Hypixel also has different ranks and cosmetics.")
    .addField("You can buy the ranks on store.hypixel.net where you can buy many more things than ranks. https://i.imgur.com/EEG244D.png");

    message.channel.send(embed)
    }
    exports.help = {
      name: "hypixelinfo"
    }

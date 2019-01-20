const botconfig = require("./botconfig.json");
const YTDL = require("ytdl-core");;
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
let purple = botconfig.purple;




fs.readdir("./commands/", (err, files) => {
	

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    });
});

	



bot.on("ready", () => {
    

 
    console.log(`${bot.user.username} has started, with ${bot.users.size}  users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
 
    bot.user.setActivity(`You`, { type: "WATCHING" });
	
 
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('524038952647131146').send('**' + member.user.username + '**, has joined the server! there are now ' + member.guild.memberCount + ' now'); 
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('524038952647131146').send('**' + member.user.username + '**, has left the server! there are now ' + member.guild.memberCount + ' now');
});


bot.on("messageDelete", (messageDelete) => {

  let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#fc3c3c")
  .addField("Author", messageDelete.author.tag, true)
  .addField("Channel", messageDelete.channel, true)
  .addField("Message", messageDelete.content)
  .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);

  let DeleteChannel = messageDelete.guild.channels.find(x => x.name === "logs");
  DeleteChannel.send(DeleteEmbed);
});



bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") {
    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("Direct Message To The Bot")
    .addField(`Sent By:`,`<@${message.author.id}>`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Message: `,message.content)
    .setFooter(`DM Bot Messages | DM Logs`)
   
    bot.users.get("244169411026485259").send(embed)
  }
  
  
  
  const swearWords = ["fuck", "Fuck","wtf", "motherfucker", "fucker"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
    }
  
    
    


      
  
  if (message.content.startsWith("DemonGilly")) {
    message.author.send(`NUUU dont ping muu`)
    message.delete();
  }
	
  


  if (message.content.startsWith("hey")) {
    message.channel.send(`Hey, ${message.author.username}`)
  }

  if (message.content.startsWith("hello")) {
    message.channel.send(`Hey, ${message.author.username}`)
  }

  if (message.content.startsWith("hi")) {
    message.channel.send(`Hey, ${message.author.username}`)
  }
  
  if (message.content.startsWith("!vote")) {

    channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
  .then(collected => console.log(collected.size))
  .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
  }

  if (message.content.startsWith("!math1")) {
    message.channel.send("10+10=?, 4 options: 20, 30, 0, 4");
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    console.log(collector)
    collector.on('collect', message => {
        if (message.content == "20") {
            message.channel.send("Good Job");
        } else if (message.content == "30") {
            message.channel.send("Well You tried...");
        } else if (message.content == "0") {
            message.channel.send("Well You tried...");
        } else if (message.content == "4") {
            message.channel.send("Well you tried...")
        }
      })
    }

    if (message.content.startsWith("!math3")) {
      message.channel.send("100-10=?, 4 options: 90, 235, 0, 14");
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
      console.log(collector)
      collector.on('collect', message => {
          if (message.content == "90") {
              message.channel.send("Good Job");
          } else if (message.content == "235") {
              message.channel.send("Well You tried...");
          } else if (message.content == "0") {
              message.channel.send("Well You tried...");
          } else if (message.content == "14") {
              message.channel.send("Well you tried...")
          }
        })
      }

      if (message.content.startsWith("!math4")) {
        message.channel.send("1284uwqsdjahwr8u4214-4218487sa2=?, 4 options: -40, 210, 1, 0");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "-40") {
                message.channel.send("Good Job");
            } else if (message.content == "210") {
                message.channel.send("Well You tried...");
            } else if (message.content == "1") {
                message.channel.send("Well You tried...");
            } else if (message.content == "0") {
                message.channel.send("Well you tried...")
            }
          })
        }

        if (message.content.startsWith("!math5")) {
          message.channel.send("666-666=?, 4 options: 0, -0, 10, 244");
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
          console.log(collector)
          collector.on('collect', message => {
              if (message.content == "0") {
                  message.channel.send("Good Job");
              } else if (message.content == "-0") {
                  message.channel.send("Well You tried...");
              } else if (message.content == "10") {
                  message.channel.send("Well You tried...");
              } else if (message.content == "244") {
                  message.channel.send("Well you tried...")
              }
            })
          }

          if (message.content.startsWith("!math6")) {
            message.channel.send("X-3=?, 4 options: 7, 10, 50, 42");
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            console.log(collector)
            collector.on('collect', message => {
                if (message.content == "7") {
                    message.channel.send("Good Job");
                } else if (message.content == "10") {
                    message.channel.send("Well You tried...");
                } else if (message.content == "50") {
                    message.channel.send("Well You tried...");
                } else if (message.content == "42") {
                    message.channel.send("Well you tried...")
                }
              })
            }

            if (message.content.startsWith("!math7")) {
              message.channel.send("VII-7=?, 4 options: 124, 30512, 0, 42");
              const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
              console.log(collector)
              collector.on('collect', message => {
                  if (message.content == "0") {
                      message.channel.send("Good Job");
                  } else if (message.content == "124") {
                      message.channel.send("Well You tried...");
                  } else if (message.content == "30512") {
                      message.channel.send("Well You tried...");
                  } else if (message.content == "42") {
                      message.channel.send("Well you tried...")
                  }
                })
              }

              if (message.content.startsWith("!math8")) {
                message.channel.send("90-10+10-10+50-32=?, 4 options: 130, 230, 5, 412");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                console.log(collector)
                collector.on('collect', message => {
                    if (message.content == "130")  {
                        message.channel.send("Good Job");
                    } else if (message.content == "230") {
                        message.channel.send("Well You tried...");
                    } else if (message.content == "5") {
                        message.channel.send("Well You tried...");
                    } else if (message.content == "412") {
                        message.channel.send("Well you tried...")
                    }
                  })
                }

                if (message.content.startsWith("!math9")) {
                  message.channel.send("X-100=?, 4 options: -90, -30, -0, 124");
                  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                  console.log(collector)
                  collector.on('collect', message => {
                      if (message.content == "-90") {
                          message.channel.send("Good Job");
                      } else if (message.content == "-30") {
                          message.channel.send("Well You tried...");
                      } else if (message.content == "-0") {
                          message.channel.send("Well You tried...");
                      } else if (message.content == "124") {
                          message.channel.send("Well you tried...")
                      }
                    })
                  }
	   
	         
		

              

    if (message.content.startsWith("!math2")) {
      message.channel.send("1294÷125=?, 4 options: 10.352, 301, 12.354, 205");
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
      console.log(collector)
      collector.on('collect', message => {
          if (message.content == "205") {
              message.channel.send("Well You tried...");
          } else if (message.content == "301") {
              message.channel.send("Well You tried...");
          } else if (message.content == "10.352") {
              message.channel.send("Great Job");
          } else if (message.content == "12.352") {
              message.channel.send("Well you tried...")
          }
        })
      }

      if (message.content.startsWith("!help-hypixel")) {
        message.channel.send("Type which command you want to know: hypixelinfo, hypixelxp, hpquests, hpbwachievements, hpguildtop10, hpachievements");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "hypixelinfo") {
                message.channel.send("The command is : !hypixelinfo");
            } else if (message.content == "hypixelxp") {
                message.channel.send("the command is : !hypixelxp");
            } else if (message.content == "hpquests") {
                message.channel.send("command is : !hpquests");
            } else if (message.content == "hpbwachievements") {
                message.channel.send("command is : !hpbwachievements")
            } else if (message.content == "hpguildtop10") {
                message.channel.send("command is : !hpguildtop10")
            } else if (message.content == "hpachievements") {
                message.channel.send("command is : !hpachievements")
        }
    })
}


  

  let prefix = botconfig.prefix;
  if(!message.content.startsWith(prefix)) return;
 

  


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  


  

  if(cmd === `${prefix}verify`){

    if(args[0] == "help"){
      message.reply("Usage: !verify");
      return;
    }
    let role = message.guild.roles.find(r => r.name == "Guests")

    if(message.member.roles.has(role.id)) return message.channel.send(`***${message.author.username}** You are Already Verified*`)
  
    await(message.member.addRole(role));
  
    try{
      await message.author.send(`You have been verified.`)
    }catch(e){
      message.delete().catch(O_o=>{});
      message.channel.send(`~You're DM is locked~`)
    }
  }

  if(cmd === `${prefix}time`){
    var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
  }
  

  

  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed)
  }

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.got (args[0]));
    if(!rUser) return message.channel.send("Couldn't find user");
    let reason = args.join (" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No Can Do Pal!");
    if(rUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That Person Cant Be Report Server Owner/ Higher then my role!");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("$15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find("name", "logs");
    if(!reportschannel) return message.channel.send("Couldn't find logs channel.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;

  }

  if(cmd === `${prefix}help-mod`){
    let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Help Mod")
    .setColor("#f48c42")
    .addField("!ban (user) (reason)", "banning")
    .addField("!kick (user) (reason)", "kicking")
    .addField("!report (user) (reason)", "reporting")
    .addField("!Lockdown (time: s, m, h)")
    .addField("!poll (question)")
    .addField("!mute (user)")
    .addField("!removerole and ?addrole", "adding roles and removing tag the person");

    message.channel.send(helpmodEmbed);
  }

  if(cmd === `${prefix}help-fun`){
    let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Help fun")
    .setColor("#f48c42")
    .addField("!avatar (user)", "avatar of user")
    .addField("!rps", "rock paper scissor")
    .addField("!roast (user)")
    .addField("!slap (user)", "clap")
    .addField("!kiss (user)", "kisses user")
    .addField("!hug (user)", "hugs user")
    .addField("!coinflip", "flips coin")
    .addField("!google (something)", "searches at google")
    .addField("!ratewaifu (user)", "rates user ")
    .addField("!info (user)", "gives user info")
    .addField("!dadjoke")
    .addField("!8ball (question)")
    .addField("!bingo")
    .addField("!serverinfo (user)", "gives guild info");

    message.channel.send(helpmodEmbed);
  }
	

  if(cmd === `${prefix}dm`){
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    dUser.send(`${dMessage}`)

    message.author.send(`${message.author} You have sent your message to ${dUser}`)

 }


  if(cmd === `${prefix}help-math`){
    let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Help math")
    .setColor("#f48c42")
    .addField("!math1", "math 1 = easy")
    .addField("!math2", "math 2 = medium")
    .addField("!math3", "math 3 = hard")
    .addField("!math4", "math 4 = very hard")
    .addField("!math5", "math 5 = most hard")
    .addField("!math6", "math 6 = good luck about this 1")
    .addField("!math7", "math 7 = well gg ")
    .addField("!math8", "math 8 = ULTRA HARD")
    .addField("!math9", "math 9 = medium hard");

    message.channel.send(helpmodEmbed);
  }

  if(cmd === `${prefix}help`){
    let helpEmbed = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#f48c42")
    .addField("!help-mod", "only for mod")
    .addField("!help-fun", "for fun")
    .addField("!help-math", "for maths");

    message.channel.send(helpEmbed);
  }

  if(cmd === `${prefix}kick`){

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't Find User");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No Can Do Pal!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That Person Cant Be Kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f48c42")
    .addField("Kick User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Cant Find The Logs channel");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't Find User");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No Can Do Pal!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That Person Cant Be Kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#f48c42")
    .addField("Ban User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "logs");
    if(!banChannel) return message.channel.send("Cant Find The Logs channel pls create a logs channel");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);

    return;
  }



  
  

  if(cmd === `${prefix}clear`){
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(!args[0]) return message.channel.send("oof");
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}


});



bot.login(process.env.TOKEN);

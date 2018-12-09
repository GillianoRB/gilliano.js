const botconfig = require("./botconfig.json");
const YTDL = require("ytdl-core");;
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
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
    member.guild.channels.get('520778562421129219').send('**' + member.user.username + '**, has joined the server! there are now ' + member.guild.memberCount + ' now'); 
    member.addRole(member.guild.roles.find(role => role.name === "Guests"));
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('520778562421129219').send('**' + member.user.username + '**, has left the server! there are now ' + member.guild.memberCount + ' now');
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

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  
  
  
  const swearWords = ["dddawd", "asgwe","nnoo", "gillydea"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
    }
  
    
    


      
  
  if (message.content.startsWith("DemonGilly")) {
    message.author.send(`NUUU dont ping muu`)
    message.delete();
  }

  if (cmd === `${prefix}guild`) {
    message.author.send(`Type in hypixel /g join The Community`)
    message.delete();
  }

  if (cmd === `${prefix}roast`) {
    let user = message.mentions.users.first();
     if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.').catch(console.error);
     var roast = [
               "Were you born on the highway? That is where most accidents happen.",
               "I was going to give you a nasty look... but I see you already have one.",
               "Remember when I asked for your opinion? Me neither.",
               "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
               "I'm trying to see things from your point of view, but I can't get my head that far up my ass.",
               "I haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
               "Two wrongs don't make a right, take your parents as an example.",
               "Just looking at you, I now understand why some animals eat their young offspring.",
               "Does time actually fly when you're having sex, or was it just one minute after all?",
               "You should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
               "This is why you dont have nice things",
               "My teacher told me to erase mistakes, i'm going to need a bigger eraser.",
               "You're IQ's lower than your dick size.",
               "Are you always such an idiot, or do you just show off when I’m around?",
               "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
               "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
               "You’re about as useful as a screen door on a submarine.",
               "You always bring me so much joy—as soon as you leave the room.",
               "Stupidity’s not a crime, so feel free to go.",
               "If laughter is the best medicine, your face must be curing the world.",
               "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
               "It looks like your face caught fire and someone tried to put it out with a hammer.",
               "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
               "Why is it acceptable for you to be an idiot but not for me to point it out?",
               "You're so fat you could sell shade.",
               "Your family tree must be a cactus because everyone on it is a prick.",
               "You'll never be the man your mother is.",
               "Just because you have an ass doesn't mean you need to act like one.",
               "Which sexual position produces the ugliest children? Ask your mother she knows.",
               "If I had a face like yours I'd sue my parents.",
               "The zoo called. They're wondering how you got out of your cage?",
               "Hey, you have something on your chin... no, the 3rd one down.",
               "Aww, it's so cute when you try to talk about things you don't understand.",
               "You are proof that evolution can go in reverse.",
               "Brains aren't everything. In your case they're nothing.",
               "You're so ugly when you look in the mirror, your reflection looks away.",
               "I'm sorry I didn't get that - I don't speak idiot.",
               "It's better to let someone think you're stupid than open your mouth and prove it.",
               "Were you born this stupid or did you take lessons?",
               "You're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
               "Don't you get tired of putting make up on two faces every morning?",
               "Hey, I'm straighter than the pole your mom dances on.",
               "If ugliness were measured in bricks, you would be the Great Wall of China.",
               "I thought I said goodbye to you this morning when I flushed the toilet",
               "If you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
               "Zombies are looking for brains. Don't worry. You're safe.",
               "spreading rumors? At least you found a hobby spreading something other than your legs.",
               "i would tell you to eat trash but that’s cannibalism",
               "If you spoke your mind, you would be speechless",
               "I can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
               "Acting like a dick won't make yours any bigger",
               "If I wanted to hear from an asshole, I would have farted",
               "Roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
               "You remind me of a penny, two faced and worthless!",
               "I've met some pricks in my time but you my friend, are the f*cking cactus",
               "I'd slap you, but that would be animal abuse",
               "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
               "I know I’m talking like an idiot. I have to, other wise you wouldn't understand me.",
               "You're so dumb, your brain cell died of loneliness",
               "You shouldn't let your mind wander..its way to small to be out on its own",
               "I don't know what makes you so dumb, but its working",
               "You should put the diaper on your mouth, that's where the craps comin' out.",
               "You would be much more likable if it wasn’t for that hole in your mouth that stupid stuff comes out of. ",
               "Could you go away please, I'm allergic to douchebags",
               "If you had any intelligence to question I would have questioned it already.",
               "I wish I had a lower I.Q,  maybe then I could enjoy your company.",
               "I would answer you back but life is too short, just like your d*ck",
               "Mirrors don't lie. Lucky for you, they can't laugh either.",
               "I was right there are no humans in this channel",
               "You have a face not even a mother could love....",
               "You know what I would find if I looked up idiot in the dictionary a picture of you?",
               "You make the guys on Jackass look like Einstein.....",
               "I would slap you but I don't want to make your face look any better",
               "Sorry, I can't put small objects in my mouth or Ill choke",
               "You should wear a condom on your head, if you're going to be a dick you might as well dress like one",
               "Have you been shopping lately? They're selling lives at the mall, you should get one"

];
var roasts = roast[Math.floor(Math.random() * roast.length)];
   message.channel.send(user.username + " " + roasts);
 } else

 if (cmd === `${prefix}mute`) {
  let reason = args.slice(1).join(' ');
   let user = message.mentions.users.first();
   let muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'Muted');
   if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
   if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
   if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
   const embed = new Discord.RichEmbed()
     .setColor(0x00AE86)
     .setTimestamp()
     .setDescription(`**Action:** Un/mute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  
   if (!message.guild.member(bot.user).hasPermission('ADMINISTRATION')) return message.reply('I do not have the correct permissions.').catch(console.error);
  
   if (message.guild.member(user).roles.has(muteRole.id)) {
     message.guild.member(user).removeRole(muteRole).then(() => {
     });
   } else {
     message.guild.member(user).addRole(muteRole).then(() =>  {
     });
   }
 };
	
  


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


  

  let prefix = botconfig.prefix;
  if(!message.content.startsWith(prefix)) return;
 

  


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  


  if(cmd === `${prefix}addrole`){
    if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
if (args[0] == "help") {
  message.reply("Usage: !addrole <user> <role>");
  return;
}
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if (!rMember) return errors.cantfindUser(message.channel);
let role = args.join(" ").slice(22);
if (!role) return message.reply("Specify a role!");
let gRole = message.guild.roles.find(`name`, role);
if (!gRole) return message.reply("Couldn't find that role.");

if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
await (rMember.addRole(gRole.id));

try {
  await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
} catch (e) {
  console.log(e.stack);
  message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
}
};
	



  if(cmd === `${prefix}removerole`){

    if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] == "help"){
      message.reply("Usage: !removerole <user> <role>");
      return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");
  
    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rMember.removeRole(gRole.id));
  
    try{
      await rMember.send(`RIP, you lost the ${gRole.name} role.`)
    }catch(e){
      message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
    }
  }

  if(cmd === `${prefix}verify`){

    if(args[0] == "help"){
      message.reply("Usage: !verify");
      return;
    }
    let role = message.guild.roles.find(r => r.name == "Verified")

    if(message.member.roles.has(role.id)) return message.channel.send(`***${message.author.username}** You are Already Verified*`)
  
    await(message.member.addRole(role));
  
    try{
      await message.author.send(`You have been verified.`)
    }catch(e){
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
    .addField("invite link: https://discordapp.com/api/oauth2/authorize?client_id=502908034868051969&permissions=8&scope=bot")
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
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

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
    if(!banChannel) return message.channel.send("Cant Find The Logs channel");

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

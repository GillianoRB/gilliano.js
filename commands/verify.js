exports.run = (client, message) => {
    var role = message.guild.roles.find(role => role.name === "Guests");
    message.member.addRole(role);
    message.author.send('Hello thank you for verifying! ');
    message.delete{}
    }
  


module.exports.help = {
    name: 'verify'
};

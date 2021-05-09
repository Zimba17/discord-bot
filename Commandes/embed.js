const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


message.delete()

const msg = args.slice(0).join(" ");

 
const embed = new Discord.MessageEmbed() 
.setDescription(`${msg}`) 
.setColor("#00ff45") 
message.channel.send(embed) 

}
 
module.exports.help = {
    name: "embed"
}
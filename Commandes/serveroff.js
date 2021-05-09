const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


message.delete()

const msg = args.slice(0).join(" ");

 
const embed = new Discord.MessageEmbed() 
.setDescription(`The server is switched off <:708290923208900618:836624244150239363>`) 
.setColor("#00ff45") 
message.channel.send(embed) 

}
 
module.exports.help = {
    name: "serveroff"
}
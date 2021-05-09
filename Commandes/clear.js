const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    if(message.content.startsWith(".clear")) {
        message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas la permission...`);
    if(!args[0]) return message.channel.send("Tu dois spécifier un nombre de messages à supprimer !");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`À ton service! (${args[0]}) `).then(msg => msg.delete(5000));

    })
}}

module.exports.help = {
    name: "clear"
}
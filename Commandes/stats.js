const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.mentions;
    if(!membre) return message.channel.send(`Veuillez mentionner un utilisateur !`);

    message.channel.send({
        embed: {
            color: 0xff0000,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id                 
                },
                {
                    name: "> Créé le :",
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: "> Jeu :",
                    value: `${membre.user.presence.activities[0] ? `${membre.user.presence.activities[0].name}` : "L'utilisateur n'est pas en train de jouer !"}`
                },
                {
                    name: "> Rejoind le :",
                    value: moment.utc(membre.joinAt).format("LL")
                },
            ],
            footer: {
                text: `Information de l'utilisateur ${membre.user.username}`
            }
        }
    })
};

module.exports.help = {
    name: "stats"
}

   
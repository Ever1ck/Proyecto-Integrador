const db = require ('megadb');
const Discord = require("discord.js")

module.exports = {
    name: "purga",
    aliases: [],
    description: "Borra mensajes",
    categoria: "admin",
    async execute(client, message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No teienes permisos"); //Los usuarios deberán tener el permiso "Gestionar Mensajes"
        if(!args[0]) return message.channel.send("oof");
        	message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Elimine ${args[0]} Mensajes`).then(msg => msg.delete(5000));
            }); 
          }
}
const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
    name: "setprefix",
    aliases: [],
    description: "Determina un prefix al bot",
    categoria: "Aminds",
    async execute(client, message, args) {
        //PErmisos
        if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("No tienes permisos para cambiar el prefix")
          }
          if(!args[0]) {
            return message.channel.send("Escriba el prefijo a cambiar")
          } 
       if(args[1]) {
          return message.channel.send("No puede estableces un prefijo con dos argumentos")
        }
        if(args[0].length > 3) {
           return message.channel.send("No se puede usar prefijo de mas de 3 letras")
        }
        if(args.join("") === default_prefix) {
          db.delete(`prefix_${message.guild.id}`)
         return await message.channel.send("Prefix reseteado ✅")
       }
       db.set(`prefix_${message.guild.id}`, args[0])
      await message.channel.send(`Prefijo cambiado a: ${args[0]}`)
    }
}
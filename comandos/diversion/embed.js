const Discord = require("discord.js")

module.exports = {
    name: "embed",
    aliases: ["emb"],
    description: "Mensaje embed de prueba",
    categoria: "diversion",
    async execute(client, message, args) {

        const link = ("https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg")
        const embed = new Discord.MessageEmbed()
        .setAuthor("Everl")
        .setTitle("Embed")
        .setDescription("Embed de prueba")
        .setImage(link)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        var Reaccion = await message.channel.send(embed)
        await Reaccion.react("👍");
        await Reaccion.react("🚘")
        const filter = (reaction, user) => user.id !== message.client.user.id;
          const collector = Reaccion.createReactionCollector(filter, { time: 15000 });
          collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name) {
              case "👍":
                reaction.users.remove(user).catch(console.error);
                message.channel.send("Hola")
                break;
              case "🚘":
                reaction.users.remove(user).catch(console.error);
                message.channel.send("Buenas Tardes")
                break;
            }
          });
          collector.on("end", () => {
            Reaccion.reactions.removeAll().catch(console.error);
          });
    }
}
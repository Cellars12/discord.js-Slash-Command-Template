const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('핑') //name of the slash command
    .setDescription('봇의 응답속도를 알려줍니다.'), //description of the slash cmd
    async execute(client, interaction) {
        interaction.reply({ content: `퐁! **${client.ws.ping} ms**`, ephemeral: true })
    }
}
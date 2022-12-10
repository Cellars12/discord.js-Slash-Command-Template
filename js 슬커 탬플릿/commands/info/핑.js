const { Client, Message } = require('discord.js');

module.exports = {
    name: '핑',
    description: '봇의 응답속도를 알려줍니다.',
    run: async(client, message, args) => {
        const msg = await message.channel.send('불러오는중...')
        await msg.edit(`퐁!! **${client.ws.ping} ms**`)
    }
}
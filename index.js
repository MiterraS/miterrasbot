const { Telegraf } = require('telegraf')

const bot = new Telegraf('1312084702:AAERk-3Jgu9ZueKIlf7cVdVvRh9EFqHw78U')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
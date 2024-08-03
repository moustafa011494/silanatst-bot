import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/201022647804
*instagram:*\ninstagram.com/moustafa_shiref

*facebook page:*\nhttps://www.facebook.com/share/KRUTgQXBvLTsAj4p/?mibextid=qi2Omg

*script bot :* github.com

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler

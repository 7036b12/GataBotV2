let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '*A quien quiere desbanear? etiquete a la persona con el @*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*Etiquete a una persona con el @*'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `*✅ Listo, usuario desbaneado*\n\nYa puede usar a GataBot`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unbanuser|unbanusuario|conbot|sibot|$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler

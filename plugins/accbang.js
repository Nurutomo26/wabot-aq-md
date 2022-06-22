let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Tidak dapat mempromote diri sendiri!'
  if (isAdmin) throw 'Kamu sudah menjadi admin!'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
  m.reply('Berhasil promote owner bot!')
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler

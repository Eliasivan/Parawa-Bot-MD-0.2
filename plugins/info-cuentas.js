let media = [imagen1, imagen2].getRandom()
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"", "remoteJid": "", "fromMe": false, "id": "Halo" }, "message": { "": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "" }
let str = `
┏───◆ CUENTAS ◆───┓
│ *GITHUB*
│ ${No puse xD}
┣────────────────
│ *INSTAGRAM*
│ ${En breve lo pongo xD}
┣────────────────
│ *YOUTUBE*
│ ${obvio lo pondré en breve}
┗───◆ CUENTAS ◆───┛`

await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentasofc|cuentas$/i
handler.exp = 35
handler.register = true
export default handler

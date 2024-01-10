import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['51902247905', '𝗞𝗘𝗡𝗡 🤡', true], ['5217294888993'], ['573155428601'], ['5214531287294'], ['51906662557'], ['5492266466080'], ['593968585383'], ['573026191480'], ['5492266613038'], ['573106040746'], ['5215610314499']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['5214531287294']
global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.packname = '𝗢𝗡𝗬𝗫 𝗕𝗢𝗧'
global.author = '𝗕𝗬 𝗞𝗘𝗡𝗡'
global.wm = '𝗞𝗘𝗡𝗡'
global.wm2 = '𝗢𝗡𝗬𝗫 𝗕𝗬 𝗞𝗘𝗡𝗡'
global.azami = '𝗞𝗘𝗡𝗡'
global.cb = '𝗢𝗡𝗬𝗫'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '𝗢𝗡𝗬𝗫 𝗕𝗬 𝗞𝗘𝗡𝗡'
global.devnum = '𝗢𝗡𝗬𝗫'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

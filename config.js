import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['595992809980', 'Ivan 👾', true], ['595972157130'], ['573155428601'], ['5214531287294'], ['51906662557'], ['5492266466080'], ['593968585383'], ['573026191480'], ['5492266613038'], ['573106040746'], ['5215610314499']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['5214531287294']
global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.packname = 'Parawa-Bot-MD-2.0'
global.author = 'Ivan'
global.wm = 'Ivan'
global.wm2 = 'Parawa-Bot-MD-2.0 Ivan'
global.azami = 'Ivan'
global.cb = 'Parawa-Bot'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = 'ivan'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'Ivan'
global.devnum = 'Parawa'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

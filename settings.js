//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '743648144832', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['62859193578139']
global.premium = ['62859193578139']
global.ownernomer = '62859193578139'
global.ownername = 'ｖｙｎｕｔｚｘｘ２２'
global.botname = '𝐀𝐋𝐕𝐘𝐍-𝐁𝐎𝐓𝐙'
global.footer = '© ｖｙｎｕｔｚｘｘ２２.'
global.ig = 'https://instagram.com/vynutzxx22'
global.region = 'Deli Serdang, Sumatera Utara'
global.sc = 'https://linktr.ee/vynutzxx22'
global.myweb = 'https://instagram.com/vynutzxx22'
global.packname = '𝐀𝐋𝐕𝐘𝐍-𝐁𝐎𝐓𝐙'
global.author = 'ｖｙｎｕｔｚｘｘ２２'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '❏'
global.mess = {
    success: '✅ *Selesai*',
    admin: '🙅 *Fitur Khusus Admin Group!*',
    botAdmin: '🙏 *Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '🙅 *Fitur Khusus Owner Bot*',
    group: '👥 *Fitur hanya bisa digunakan didalam Grup, Silahkan Join Grup Bot : https://chat.whatsapp.com/C3mbk4fnGHW3LbEEtFgj8T*',
    private: '👤 *Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '❎ *Fitur Khusus Pengguna Nomor Bot*',
    wait: '⏳ *Loading...*',
    error: 'Error! Mungkin Limit Apikey Sudah Habis\nCoba Lagi Besok',
    endLimit: '⚠️ *Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
    global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/keqing.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

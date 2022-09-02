let handler = async m => m.reply(`
            Contact Owner : wa.me/6283823701518
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

module.exports = handler
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "agni~mQVUkBob#nYNoWXtcElDRhuoXNMsjIZ9iUrIti9fM9 FDe3Y030H4",
    
    // Alive page image (can be any URL)
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/wy8i4k.jpg",
    
    // Alive message text
    ALIVE_MSG: process.env.ALIVE_MSG || `╭────────────────────────────╮
│          ✧•    Anubis •✧       │
│╭──────────────⋆⋅☆⋅⋆─────────────╮│
││ • Ｓｔａｔｕｓ : 𝔸𝕃𝕀𝕍𝔼 ✨          ││
││ • ☣️ 𝕄𝕒𝕕𝕖 𝔹𝕪 : shashika        ││
││ • ☣️ status : online      ││
││ • ☣️ Vibe : 𒀭𒀮𒀯𒆙𒆜 100% good││
│╰──────────────⋆⋅☆⋅⋆─────────────╯│
╰────────────────────────────╯`,
    
    // Bot owner phone number
    BOT_OWNER: '94705104830',
};

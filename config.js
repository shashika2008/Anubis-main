const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Tf4SWC4Q#ItlmzCE8lKgLv9Mv-4dbm1XOfwFxNJlGs-HZkozXVvU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/wy8i4k.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DANUWA-MD Is Alive Now😍*",
BOT_OWNER: '94705104830',  // Replace with the owner's phone number



};

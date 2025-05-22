const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

FOOTER: process.env.FOOTER || "*◆─〈 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2 〉─◆*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍 𝐁𝐘 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2*",
ANTI_CALL: process.env.ANTI_CALL || "false",

//   Add your session id




SESSION_ID: process.env.SESSION_ID || "xStEmQSI#VLBaTVnoYRb_NC5Xhb6nQRSndlY5TsUyDW7JgJMoCDk",



//   Add your session id









ALIVE_REACT: process.env.ALIVE_REACT || "⚠️",
};



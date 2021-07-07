/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

// Sentances
const QR_DESC = "එය text Qr කේතයට පරිවර්තනය කරයි"
const NEED_TEXT = "*වචන ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'qr ?(.*)', fromMe: true, desc: QR_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED_TEXT);

        var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ"})

    }));
}

else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'qr ?(.*)', fromMe: false, desc: QR_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED_TEXT);

        var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ"})

    }));
}

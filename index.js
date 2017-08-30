const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
var app = express();

const settings = require('./settings.json')
const token = settings.tokenset;

let bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    console.log("@"+msg.from.username+" - "+msg.text);
});

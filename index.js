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
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "메시지가 정상 수신되었습니다");
});

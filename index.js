const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
var app = express();
const log4js = require("log4js");
var logger = log4js.getLogger();


const settings = require('./settings.json')
const token = settings.tokenset;

logger.level = "debug";

let bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, "텔레그램 한국어 가상 비서, alertMe(얼러트미) 입니다. 개발 진행 중이므로 불안정할 수 있습니다.");
});

bot.onText(/\/say (.+)/, (msg, match) => {
    bot.sendMessage(msg.chat.id, match[1]);
    logger.debug(`/say command from @${msg.from.username}`);
});

bot.onText(/alertme|alertMe|얼러트미/, (msg, match) => {
    bot.sendMessage(msg.chat.id, `네, ${msg.from.first_name}님?`);
    logger.debug(`/alertme command from @${msg.from.username}`);
});

bot.on('message', (msg) => {
    logger.debug(`(${msg.chat.title}) @${msg.from.last_name} ${msg.from.first_name} - ${msg.text}`);
});

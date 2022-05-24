import TelegramBot from 'node-telegram-bot-api';

import { env } from './env';

export const runServer = () => {
  const bot = new TelegramBot(env.botToken, { polling: true });

  bot.onText(/\/when/, (message) => {
    const chatId = message.chat.id;
    bot.sendMessage(chatId, 'Coming soon...');
  });

  console.log('Polling server runnning.');
};

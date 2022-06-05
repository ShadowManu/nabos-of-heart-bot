import { z } from 'zod';
import { cached } from './utils/cached';

const schemas = {
  bot: z.object({
    token: z.string(),
  }),
};

export const env = {
  bot: cached(() =>
    schemas.bot.parse({
      token: process.env.TELEGRAM_BOT_TOKEN,
    })
  ),
};

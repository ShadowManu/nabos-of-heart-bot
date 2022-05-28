import { z } from 'zod';

export type Env = z.infer<typeof schema>;

const schema = z.object({
  botToken: z.string(),
  postgres: z.object({
    host: z.string(),
    port: z.preprocess((val) => Number(val), z.number()),
    username: z.string(),
    password: z.string(),
    database: z.string(),
  }),
});

export const env: Env = (() => {
  try {
    return schema.parse({
      botToken: process.env.TELEGRAM_BOT_TOKEN,
      postgres: {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT ?? 5432,
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
      },
    });
  } catch (e) {
    // TODO IMPROVE error display
    console.error('Environment variables are invalid');
    throw e;
  }
})();

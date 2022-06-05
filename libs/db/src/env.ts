import { z } from 'zod';
import { cached } from './utils/cached';

const schemas = {
  postgres: z.object({
    host: z.string(),
    port: z.preprocess((val) => Number(val), z.number()),
    username: z.string(),
    password: z.string(),
    database: z.string(),
  }),
};

export const env = {
  postgres: cached(() =>
    schemas.postgres.parse({
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT ?? 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    })
  ),
};

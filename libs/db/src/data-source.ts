import { DataSource } from 'typeorm';

import { env } from './env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  logging: true,
  migrations: ['apps/bot/src/app/db/migrations/*.ts'],
  entities: ['apps/bot/src/app/db/entities/*.ts'],
  ...env.postgres(),
});

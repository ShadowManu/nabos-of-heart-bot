import { DataSource } from 'typeorm';

import { env } from '../env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  logging: true,
  ...env.postgres(),
});

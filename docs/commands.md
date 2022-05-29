# Commands

Some useful commands until it's better documented

### Run the app

```docker-compose ---env-file envs/.dev.env up```

### Run a typeorm command

```docker-compose -f docker-compose.yml -f docker-compose.tasks.yml --env-file envs/.dev.env run typeorm npx typeorm-ts-node-esm ...```

### Generate a migration

```docker-compose -f docker-compose.yml -f docker-compose.tasks.yml --env-file envs/.dev.env run typeorm npx typeorm-ts-node-esm migration:generate --dataSource apps/bot/src/app/db/data-source.ts apps/bot/src/app/db/migrations/add-message```

### Run migrations

```docker-compose -f docker-compose.yml -f docker-compose.tasks.yml --env-file envs/.dev.env run typeorm npx typeorm-ts-node-esm migration:run --dataSource apps/bot/src/app/db/data-source.ts```
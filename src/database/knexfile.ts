import type { Knex } from "knex";
import { config } from "../config/default.config";
// Update with your config settings.
console.log({ config });
export const dbConfig: { [key: string]: Knex.Config } = {
  development: {
    client: config.db.client,
    connection: {
      filename: config.db.name,
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: config.db.client,
    connection: {
      database: config.db.name,
      user: config.db.user,
      password: config.db.pass,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default dbConfig;

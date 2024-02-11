import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      user: process.env.RDS_USERNAME || "postgres",
      password: process.env.RDS_PASSWORD || "C4r4m3l0",
      database: process.env.RDS_DB_NAME || "postgres",
      host: process.env.RDS_HOSTNAME || "localhost",
      port: process.env.RDS_PORT ? Number(process.env.RDS_PORT) : 5432,
      ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
    useNullAsDefault: true,
  },
};

export default config;

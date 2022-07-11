import knex from "knex";
import database_config from "@config/database";

const database = knex({
  client: "postgres",
  connection: {
    host: database_config.database_host,
    port: Number(database_config.database_port),
    user: database_config.database_user,
    password: database_config.database_password,
    database: database_config.database_database,
    ssl: Boolean(String(database_config.database_ssl) === "true" ? true : false),
  },
});

export { database };

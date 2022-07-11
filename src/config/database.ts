import "dotenv/config";

export default {
  database_host: process.env.DATABASE_HOST,
  database_port: process.env.DATABASE_PORT,
  database_user: process.env.DATABASE_USER,
  database_password: process.env.DATABASE_PASSWORD,
  database_database: process.env.DATABASE_DATABASE,
  database_ssl: process.env.DATABASE_SSL,
};

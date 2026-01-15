import dotenv from "dotenv";

dotenv.config();

export const environment = {
    PORT: Number(process.env.PORT) || 8080,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: Number(process.env.DB_PORT) || 1433,
    DB_NAME: process.env.DB_NAME,
    DB_SCHEMA: process.env.DB_SCHEMA,
};

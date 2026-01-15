import { DataSource } from "typeorm";
import { QueryLogger } from "../logger/QueryLogger";
import { environment } from "../../config/environment/environment";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const DatasourseMSSQL = new DataSource({
    type: "mssql",
    host: environment.DB_HOST,
    port: environment.DB_PORT,
    database: environment.DB_NAME,
    schema: environment.DB_SCHEMA,
    username: environment.DB_USERNAME,
    password: environment.DB_PASSWORD,
    entities: [],
    logging: false,
    logger: new QueryLogger(),
    options: {
        encrypt: false,
        trustServerCertificate: false,
        enableArithAbort: true,
    },
    namingStrategy: new SnakeNamingStrategy(),
});

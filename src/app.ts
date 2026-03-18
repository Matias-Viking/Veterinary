import { DatasourceMSSQL } from "./infrastructure/database/datasource/dataSource";

async function bootstrap(): Promise<void> {
    try {
        console.log("Inicializando dataSource...");
        await DatasourceMSSQL.initialize();
        const result = await DatasourceMSSQL.query("select 1 as OK");
        console.log("resultado query: ", result);
    } catch (error) {
        console.log(error);
    }
}

bootstrap();

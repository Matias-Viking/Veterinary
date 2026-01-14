import { DatasourseMSSQL } from "./infrastructure/database/datasource/dataSource";



async function bootstrap():Promise<void> {
    
    try {
        console.log("Inicializando dataSource...");
        await DatasourseMSSQL.initialize();
        const result= await DatasourseMSSQL.query("select 1 as OK");
        console.log("resultado query: ",result);
    } catch (error) {
        console.log(error)
    }
}

bootstrap();
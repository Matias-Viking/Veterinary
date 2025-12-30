import { DataSource } from "typeorm";
import { QueryLogger } from "../logger/QueryLogger";


export const DatasourseMSSQL=new DataSource({
    type:'mssql',
    entities:[],
    logging:false,
    logger: new QueryLogger(),
    
})
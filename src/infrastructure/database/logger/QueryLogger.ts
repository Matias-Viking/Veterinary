import type { QueryRunner, Logger as TypeOrmLogger } from "typeorm";
import { logger } from "../../logger/logger";


export class QueryLogger implements TypeOrmLogger {

    logQuery(query: string, parameters?: any[]) {
        
        logger.debug({
            label:'Executed Query in DB',
            message:{
                query:query.replace(/\n/g," ").replace(/\s+/g," ").replace(/"/g," ").trim(),
                parameters:parameters
            }
        });
    }

    logQueryError(error: string | Error, query: string, parameters?: any[]) {
        
        logger.error({

            label:'Error executing query',
            error:error,
            message:{
                query:query.replace(/\n/g," ").replace(/\s+/g," ").replace(/"/g," ").trim(),
                parameters:parameters
            }
        });
    }

    logQuerySlow(time: number, query: string, parameters?: any[]) {
        
        logger.warn({
            label:'Slow query',
            message:{
                query:query.replace(/\n/g," ").replace(/\s+/g," ").replace(/"/g," ").trim(),
                time:time,
                parameters:parameters
            }
        });
        
    }

    logSchemaBuild(message: string) {
        
        logger.debug({
            label:"Schema build",
            message
        })
    }

    logMigration(message: string) {
        
        logger.info({
            label:'Migration',
            message
        })
    }

    log(level: "log" | "info" | "warn", message: any) {
        
        switch (level) {
            case "warn":
                logger.warn({
                    label:'TypeORM',
                    message
                })
                break;
            case "info":
            case"log":
            default:
                logger.debug({
                    label:'TypeORM',
                    message
                })
        }
    }


}
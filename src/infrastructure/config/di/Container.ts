import { Container } from "inversify";
import { PROVIDES } from "./PROVIDES";
import { DatasourceMSSQL } from "../../database/datasource/dataSource";
import { DataSource } from "typeorm";




export const containerIoC= new Container();

containerIoC.bind<DataSource>(PROVIDES.DatasourceMSSQL).toConstantValue(DatasourceMSSQL);
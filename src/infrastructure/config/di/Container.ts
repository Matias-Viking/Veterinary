import { Container } from "inversify";
import { PROVIDES } from "./PROVIDES";
import { DatasourceMSSQL } from "../../database/datasource/dataSource";
import { DataSource } from "typeorm";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { UserRepositoryImpl } from "../../database/repositories/User.repository";




export const containerIoC= new Container();

containerIoC.bind<DataSource>(PROVIDES.DatasourceMSSQL).toConstantValue(DatasourceMSSQL);
containerIoC.bind<UserRepository>(PROVIDES.UserRepository).to(UserRepositoryImpl);
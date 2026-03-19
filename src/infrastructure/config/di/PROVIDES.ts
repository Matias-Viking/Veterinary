import { DatasourceMSSQL } from "../../database/datasource/dataSource";

export const PROVIDES={

    DatasourceMSSQL: Symbol.for('DatasourceMSSQL'),
    UserRepository: Symbol.for('UserRepository')
}
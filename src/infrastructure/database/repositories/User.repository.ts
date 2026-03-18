import { DataSource, Repository } from "typeorm";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { inject, injectable } from "inversify";
import { PROVIDES } from "../../config/di/PROVIDES";
import { UserEntity } from "../database-entities/User.entity";

@injectable()
export class UserRepositoryImpl implements UserRepository{

    
    private readonly repository:Repository<UserEntity>;

    constructor(@inject(PROVIDES.DatasourceMSSQL) datasource:DataSource){

        
        this.repository=datasource.getRepository(UserEntity);
        
    }

    async save(user: UserEntity): Promise<UserEntity> {
        
        return  this.repository.save(user);
    }

    async findOne(idNumber: string): Promise<UserEntity | null> {
        
        return this.repository.findOne({where:{idNumber}});
    }

    async findAll(): Promise<UserEntity[]> {
        return this.repository.find()
    }


}
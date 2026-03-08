import { UserEntity } from "../../infrastructure/database/database-entities/User.entity";


export interface UserRepository{

    save(user:UserEntity):UserEntity;
    findBy(name?:string,lastName?:string,idNumber?:string):UserEntity | null;
    findAll():UserEntity[];
}
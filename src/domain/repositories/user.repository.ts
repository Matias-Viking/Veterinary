import { UserEntity } from "../../infrastructure/database/database-entities/User.entity";

export interface UserRepository {

    save(user: UserEntity): Promise<UserEntity>;
    findOne(idNumber:string): Promise<UserEntity | null>;
    findAll(): Promise<UserEntity[]>;
}

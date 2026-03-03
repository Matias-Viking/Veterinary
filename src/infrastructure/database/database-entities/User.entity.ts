import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PetEntity } from "./Pet.entity";

@Entity('USERS')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar2',length:20,nullable:false})
    name:string;

    @Column({type:'varchar2',length:20,nullable:false})
    lastName:string;

    @Column({type:'varchar2',length:20,nullable:false,unique:true})
    idNumber:string;

    @Column({type:'varchar2',length:15,nullable:true})
    phoneNumber?:string;

    @Column({type:'varchar2',length:20,nullable:true})
    eMail?:string;

    @OneToMany(() => PetEntity,petEntity =>petEntity.user,{eager:true,cascade:true})
    pets:PetEntity[];

    @Column({type:'varchar2',length:15,nullable:false})
    status:string;

    @CreateDateColumn()
    creationDate:Date;

}
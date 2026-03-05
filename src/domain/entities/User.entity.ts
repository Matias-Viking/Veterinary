import { UserStatusEnum } from "../enums/UserStatus.enum";
import { Pet } from "./Pet.entity";

export class User{

    private name:string;
    private lastName:string;
    private idNumber:string;
    private phoneNumber?:string;
    private email?:string;
    private status:UserStatusEnum;
    private creationDate:Date;
    private pets:Pet[];

    constructor(name:string,lastName:string,idNumber:string,status:UserStatusEnum,creationDate:Date,phoneNumber?:string,email?:string,pets?:Pet[]){
        this.name=name;
        this.lastName=lastName;
        this.idNumber=idNumber;
        this.status=status;
        this.creationDate=creationDate;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.pets=pets ?? [];
    }

    changeStatus(newStatus:UserStatusEnum):void{
        if(this.status===newStatus){
            return;
        }
        this.status=newStatus;
    }

    addPet(newPet:Pet):void{
        if (this.status===UserStatusEnum.INACTIVE){
            throw new Error();
        }
        this.pets.push(newPet);
    }

    getName():string{
        return this.name;
    }
    getLastName():string{
        return this.lastName;
    }
    getIdNumber():string{
        return this.idNumber;
    }
    getStatus():UserStatusEnum{
        return this.status;
    }
    getCreationDate():Date{
        return this.creationDate;
    }
    getEmail():string{
        return this.email ?? ''
    }
    getPhoneNumber():string{
        return this.phoneNumber ?? ''
    }
    getPets():Pet[]{
        return[...this.pets];
    }

    static create(name:string,lastName:string,idNumber:string,phoneNumber?:string,email?:string,pets?:Pet[]):User{
        return new User(name,lastName,idNumber,UserStatusEnum.ACTIVE,new Date(),phoneNumber,email,pets)
    }
}
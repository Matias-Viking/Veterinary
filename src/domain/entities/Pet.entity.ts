import { PetStatusEnum } from "../enums/PetStatus.enum";
import { SpeciesEnum } from "../enums/Species.enum";
import { MedicalRecord } from "./MedicalRecord.entity";

export class Pet {
    private name:string;
    private birthDate:Date;
    private species:SpeciesEnum;
    private status:PetStatusEnum;
    private medicalHistory:MedicalRecord[];

    constructor(name:string,birthDate:Date,species:SpeciesEnum,status:PetStatusEnum){
        this.name=name;
        this.birthDate=birthDate;
        this.species=species;
        this.status=status;
    }

    getName():string{
        return this.name;
    }

    getBirthDate():Date{
        return this.birthDate;
    }

    getSpecies():string{
        return this.species;
    }

    getStatus():string{
        return this.status;
    }

    getMedicalHistory():MedicalRecord[]{
        return [...this.medicalHistory];
    }

    getAge():number{
        const today=new Date()
        return (today.getFullYear() - this.birthDate.getFullYear())
    }

    addMedicalRecord(newMedicalRecord:MedicalRecord):void{

        if(this.status===PetStatusEnum.DECEASED){
            throw new Error();
        }

        this.medicalHistory.push(newMedicalRecord);
    }

    changeStatus(newStatus:PetStatusEnum):void{
        if(this.status===newStatus){
            return;
        }

        this.status=newStatus;
    }
}
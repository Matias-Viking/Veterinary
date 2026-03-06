import { MedicalRecordStatus } from "../enums/MedicalRecordStatus.enum";

export class MedicalRecord{
    private clinicalHistory:string;
    private creationDate:Date;
    private updateDate:Date;
    private createdBy:string;
    private updatedBy:string;
    private status:MedicalRecordStatus;

    constructor(createdBy:string,status:MedicalRecordStatus){
        this.createdBy=createdBy;
        this.status=status;
    }

    getClinicalHistory():string{
        return this.clinicalHistory;
    }

    getCreationDate():Date{
        return this.creationDate;
    }

    setCreationDate(creationDate:Date):void{
        this.creationDate=creationDate;
    }

    getUpdateDate():Date{
        return this.updateDate;
    }

    setUpdateDate(updateDate:Date):void{
        this.updateDate=updateDate;
    }

    getCreatedBy():string{
        return this.createdBy;
    }

    getUpdatedBy():string{
        return this.updatedBy;
    }

    getStatus():MedicalRecordStatus{
        return this.status;
    }

    changeStatus(newStatus:MedicalRecordStatus):void{

        if(this.status===newStatus){
            return;
        }
        if(this.status===MedicalRecordStatus.CLOSED){
            throw new Error();
        }

        this.status=newStatus;
    }

    updateClinicalHistory(newClinicalHistory:string):void{

        if(this.status===MedicalRecordStatus.CLOSED){
            throw new Error();
        }

        if(!this.clinicalHistory){
            this.clinicalHistory=newClinicalHistory;
            return;
        }

        this.clinicalHistory=`${this.clinicalHistory}\n${newClinicalHistory}`;
    }

    static create(createdBy:string):MedicalRecord{
        return new MedicalRecord(createdBy,MedicalRecordStatus.OPEN)
    }

}
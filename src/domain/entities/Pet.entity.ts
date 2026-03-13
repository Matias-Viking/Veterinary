import { PetStatusEnum } from "../enums/PetStatus.enum";
import { SpeciesEnum } from "../enums/Species.enum";
import { MedicalRecord } from "./MedicalRecord.entity";

export class Pet {
    private name: string;
    private birthDate: Date;
    private species: SpeciesEnum;
    private breed: string;
    private status: PetStatusEnum;
    private medicalHistory: MedicalRecord[];

    constructor(
        name: string,
        birthDate: Date,
        species: SpeciesEnum,
        breed: string,
        status: PetStatusEnum,
    ) {
        this.name = name;
        this.birthDate = birthDate;
        this.species = species;
        this.status = status;
        this.breed = breed;
        this.medicalHistory = [];
    }

    getName(): string {
        return this.name;
    }

    getBirthDate(): Date {
        return this.birthDate;
    }

    getSpecies(): SpeciesEnum {
        return this.species;
    }

    getStatus(): PetStatusEnum {
        return this.status;
    }

    getMedicalHistory(): MedicalRecord[] {
        return [...this.medicalHistory];
    }

    getAge(): number {
        const today = new Date();
        if (this.birthDate > today) {
            throw new Error();
        }
        return today.getFullYear() - this.birthDate.getFullYear();
    }

    getBreed(): string {
        return this.breed;
    }

    addMedicalRecord(newMedicalRecord: MedicalRecord): void {
        if (this.status === PetStatusEnum.DECEASED) {
            throw new Error();
        }

        this.medicalHistory.push(newMedicalRecord);
    }

    changeStatus(newStatus: PetStatusEnum): void {
        if (this.status === PetStatusEnum.DECEASED) {
            throw new Error();
        }
        if (this.status === newStatus) {
            return;
        }

        this.status = newStatus;
    }

    static create(name: string, birthDate: Date, species: SpeciesEnum, breed: string): Pet {
        return new Pet(name, birthDate, species, breed, PetStatusEnum.ACTIVE);
    }
}

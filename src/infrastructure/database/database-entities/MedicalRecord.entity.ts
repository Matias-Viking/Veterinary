import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { PetEntity } from "./Pet.entity";

@Entity("MEDICAL_RECORDS")
export class MedicalRecordEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => PetEntity,
        (petEntity) => petEntity.medicalHistory,
        { nullable: false },
    )
    @JoinColumn({ name: "id_pet" })
    pet: PetEntity;

    @Column({ type: "clob", nullable: false })
    clinicalHistory: string;

    @CreateDateColumn()
    creationDate: Date;

    @Column({ type: "varchar2", length: 20, nullable: false })
    createdBy: string;

    @UpdateDateColumn()
    updateDate: Date;

    @Column({ type: "varchar2", length: 20, nullable: false })
    updatedBy: string;

    @Column({ type: "varchar2", length: 10, nullable: false })
    status: string;
}

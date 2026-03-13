import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./User.entity";
import { MedicalRecordEntity } from "./MedicalRecord.entity";

@Entity("PETS")
export class PetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => UserEntity,
        (user) => user.pets,
        { nullable: false },
    )
    @JoinColumn({ name: "id_user" })
    user: UserEntity;

    @Column({ type: "varchar2", length: 20, nullable: false })
    name: string;

    @Column({ type: "date", nullable: false })
    birthDate: Date;

    @Column({ type: "varchar2", length: 20, nullable: false })
    species: string;

    @Column({ type: "varchar2", length: 20, nullable: true })
    breed?: string;

    @Column({ type: "varchar2", length: 10, nullable: false })
    status: string;

    @OneToMany(
        () => MedicalRecordEntity,
        (medicalRecordEntity) => medicalRecordEntity.pet,
        { eager: true, cascade: true },
    )
    medicalHistory: MedicalRecordEntity[];
}

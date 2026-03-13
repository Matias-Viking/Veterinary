import { IsEnum, IsISO8601, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { SpeciesEnum } from "../../domain/enums/Species.enum";
import { Transform } from "class-transformer";

export class CreatePetDto {
    @IsString({ message: "Name must be a string" })
    @MaxLength(15, { message: "Name has a max length of 15 characters" })
    @IsNotEmpty({ message: "You must provide a pet name" })
    name: string;

    @IsISO8601({}, { message: "You must provide the birthDate in ISO8601 Format" })
    @IsNotEmpty()
    birthDate: string;

    @Transform(({ value }) => (typeof value === "string" ? value.toUpperCase() : value))
    @IsEnum(SpeciesEnum, { message: "You must provide a valid species" })
    @IsNotEmpty({ message: "you must provide a species" })
    species: SpeciesEnum;

    @IsString()
    @MaxLength(30, { message: "breed has a max length 30 characters" })
    @IsOptional()
    breed?: string;

    @IsString()
    @IsOptional()
    medicalRecord?: string;
}

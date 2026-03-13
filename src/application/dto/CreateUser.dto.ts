import {
    IsAlphanumeric,
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    MaxLength,
    ValidateNested,
} from "class-validator";
import { CreatePetDto } from "./CreatePet.dto";
import { Type } from "class-transformer";

const PHONE_REGEX = /^\d{10}$/;

export class CreateUserDto {
    @IsString({ message: "Name must be a string" })
    @MaxLength(30, { message: "Name has a max length of 30 characters" })
    @IsNotEmpty()
    name: string;

    @IsString({ message: "Last name must be a string" })
    @MaxLength(30, { message: "Last name has a max length of 30 characters" })
    @IsNotEmpty()
    lastName: string;

    @IsString({ message: "Id number must be a string" })
    @IsAlphanumeric(undefined, {
        message: "you must provide a valid id number (only alphanumeric characters)",
    })
    @MaxLength(20, { message: "Id number has a max length of 20 characters" })
    @IsNotEmpty()
    idNumber: string;

    @Matches(PHONE_REGEX, { message: "You must provide a valid phone number" })
    @IsOptional()
    phoneNumber?: string;

    @IsOptional()
    @IsEmail({}, { message: "you must provide a valid email" })
    email?: string;

    @Type(() => CreatePetDto)
    @IsArray({ message: "pets must be an array" })
    @ValidateNested({ each: true })
    @IsOptional()
    pets?: CreatePetDto[];
}

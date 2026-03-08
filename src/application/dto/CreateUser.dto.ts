import { IsAlphanumeric, IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, ValidateNested } from "class-validator";
import { CreatePetDto } from "./CreatePet.dto";
import { Type } from "class-transformer";

const PHONE_REGEX=/^\d{10}$/;

export class CreateUserDto{ 

    @IsNotEmpty()
    @IsString({message:"Name must be a string"})
    @MaxLength(30,{message:"Name has a max length of 30 characters"})
    name:string;

    @IsNotEmpty()
    @IsString({message:"Last name must be a string"})
    @MaxLength(30,{message:"Last name has a max length of 30 characters"})
    lastName:string;

    @IsNotEmpty()
    @IsString({message:"Id number must be a string"})
    @IsAlphanumeric(undefined,{message:"you must provide a valid id number (only alphanumeric characters)"})
    @MaxLength(20,{message:"Id number has a max length of 20 characters"})
    idNumber:string;

    @IsOptional()
    @Matches(PHONE_REGEX,{message:"You must give a valid phone number"})
    phoneNumber?:string;

    @IsOptional()
    @IsEmail({},{message:"you must give a valid email"})
    email?:string;

    @IsOptional()
    @IsArray({message:"pets must be an array"})
    @ValidateNested({each:true})
    @Type(()=>CreatePetDto)
    pets?:CreatePetDto[]

}
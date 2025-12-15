import { StatusCodes } from "http-status-codes";
import { ErrorCodes } from "./ErrorCodes";


export abstract class AppError extends Error{

    readonly errorCode:string;
    readonly statusCode:number;

    constructor(message:string,errorCode:string,statusCode:number){

        super(message);
        this.errorCode=errorCode;
        this.statusCode=statusCode;
        (Error as any).captureStackTrace(this,this.constructor)
        
    }
}
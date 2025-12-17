import { StatusCodes } from "http-status-codes";
import { HttpError } from "./HttpError";
import { AppError } from "../../../shared/AppError";
import { ErrorCodes } from "../../../shared/ErrorCodes";

export class ErrorMapper{

    static toHttpError(error:unknown,xCorrelator?:string){

        if(error instanceof HttpError){
            return new HttpError(error.statusCode,error.errorCode,error.message,xCorrelator || error.xCorrelator)
        }

        if(error instanceof AppError){
            return new HttpError(error.statusCode,error.errorCode,error.message,error.details,xCorrelator)
        }

        return new HttpError(StatusCodes.INTERNAL_SERVER_ERROR,ErrorCodes.internal_server_error,"AN INTERNAL SERVER ERROR HAS OCURRED",undefined,xCorrelator)
    }
}
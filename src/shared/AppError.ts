import { StatusCodes } from "http-status-codes";
import { ErrorCodes } from "./ErrorCodes";

export abstract class AppError extends Error {
    readonly errorCode: string;
    readonly statusCode: number;
    readonly details?: any;

    constructor(message: string, errorCode: string, statusCode: number, details?: any) {
        super(message);
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}

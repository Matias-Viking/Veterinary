import { AppError } from "../../../shared/AppError";

export class HttpError extends AppError {
    readonly xCorrelator?: string;

    constructor(
        statusCode: number,
        errorCode: string,
        message: string,
        deatils?: any,
        xCorrelator?: string,
    ) {
        super(message, errorCode, statusCode, deatils);
        this.xCorrelator = xCorrelator;
    }
}

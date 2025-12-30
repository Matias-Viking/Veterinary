import { StatusCodes } from "http-status-codes";
import { AppError } from "../../shared/AppError";
import { ErrorCodes } from "../../shared/ErrorCodes";

export interface InvalidParameter {
    property: string;
    value: unknown;
    message: string;
    children?: InvalidParameter[];
}

export class IllegalArgumentError extends AppError {
    readonly isOperational = true;
    readonly invalidParameters: InvalidParameter[];
    readonly parameters: object;

    constructor(invalidParameters: InvalidParameter[], parameters: object) {
        const fullErrorMessage = invalidParameters.map(({ message }) => message.trim()).join(". ");
        super(fullErrorMessage, ErrorCodes.invalidParamter, StatusCodes.NOT_FOUND, {
            parameters,
            invalidParameters,
        });
    }
}

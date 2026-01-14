import { StatusCodes } from "http-status-codes";
import { AppError } from "../../shared/AppError";
import { ErrorCodes } from "../../shared/ErrorCodes";

export class CustomerNotFoundError extends AppError {
    constructor(identityDocument: string) {
        super(
            `The customer ${identityDocument} does not exists in the database`,
            ErrorCodes.customerNotFound,
            StatusCodes.NOT_FOUND,
        );
    }
}

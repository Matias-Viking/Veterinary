import { NextFunction, Request, Response } from "express";
import correlator from "express-correlation-id";
import { ErrorMapper } from "../errors/ErrorMapper";
import { logger } from "../../logger/logger";

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction): void {
    const xCorrelator = correlator.getId();
    const httpError = ErrorMapper.toHttpError(error, xCorrelator);

    logger.error({
        label: httpError.errorCode,
        meesage: {
            description: httpError.message,
            code: httpError.statusCode,
            stack: error instanceof Error ? error.stack : undefined,
            deatils: httpError.details,
            correlator: xCorrelator,
        },
    });

    const responseError = {
        code: httpError.errorCode,
        message: httpError.message,
        ...(httpError.details && { details: httpError.details }),
        ...(xCorrelator && { xCorrelator }),
    };

    res.locals.error = responseError;

    res.status(httpError.statusCode).json(responseError);
}

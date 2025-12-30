import type { NextFunction, Request, RequestHandler, Response } from "express";
import {
    IllegalArgumentError,
    InvalidParameter,
} from "../../../application/errors/IllegalArgumentError";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

function mapValidationErrorToInvalidParamter(
    error: any,
    isArray: boolean,
    index?: number,
): InvalidParameter {
    const prefix = isArray && index !== undefined ? `[${index}]` : undefined;

    const recurse = (error: any, parentPath?: string): InvalidParameter => {
        const propertyName = error && typeof error.property === "string" ? error.property : "unknown";
        const currentPath = parentPath ? `${parentPath}.[${propertyName}]` : propertyName;

        const message = error && error.constraints ? Object.values(error.constraints).join(". ") : "";

        const children =
            error && Array.isArray(error.children) && error.children.length > 0
                ? error.children.map((child: any) => recurse(child, currentPath))
                : undefined;

        return {
            property: currentPath,
            value: error ? error.value : undefined,
            message,
            children,
        };
    };

    return recurse(error, prefix);
}

/**
 * Process validation results and returns errors
 */
function processValidationResults(results: any[], isArray: boolean): InvalidParameter[] {
    const allErrors: InvalidParameter[] = [];

    for (const result of results) {
        if (result.errors.length > 0) {
            const invalidParameters = result.errors.map((error: any) =>
                mapValidationErrorToInvalidParamter(error, isArray, result.index),
            );
            allErrors.push(invalidParameters);
        }
    }
    return allErrors;
}

/**
 * Middleware to validate request body
 */

export function validateRequestBody<T extends object>(cls: new () => T): RequestHandler {
    return async function (req: Request, _res: Response, next: NextFunction): Promise<void> {
        try {
            const isArray = Array.isArray(req.body);
            const bodyData = isArray ? req.body : [req.body];

            const dtos = bodyData.map((item: any) =>
                plainToInstance(cls, item, { enableImplicitConversion: true }),
            );

            const validationPromises = dtos.map(async (dto: T, index: number) => {
                const errors = await validate(dto, { whitelist: true, forbidNonWhitelisted: true });

                return {
                    errors,
                    index,
                    dto,
                };
            });

            const validationResults = await Promise.all(validationPromises);
            const allErrors = processValidationResults(validationResults, isArray);

            if (allErrors.length > 0) {
                return next(new IllegalArgumentError(allErrors, req.body));
            }

            (req.body as any).dto = isArray ? dtos : dtos[0];

            return next();
        } catch (error) {
            next(error);
        }
    };
}

/**
 * Middleware to validate query params
 */

export function validateQueryParams<T extends object>(Cls: new () => T): RequestHandler {
    return async function (req: Request, _res: Response, next: NextFunction): Promise<void> {
        try {
            const dto = plainToInstance(Cls, req.query, { enableImplicitConversion: true,
                excludeExtraneousValues:false,
                exposeDefaultValues:true
             });

            const errors = await validate(dto, {
                whitelist: true,
                forbidNonWhitelisted: true,
                skipMissingProperties: false,
            });

            if (errors.length > 0) {
                const invalidParameters = errors.map((item) =>
                    mapValidationErrorToInvalidParamter(item, false),
                );
                return next(new IllegalArgumentError(invalidParameters, req.query));
            }

            (req as any).queryDto = dto;

            return next();
        } catch (error) {
            next(error);
        }
    };
}

/**
 * Middleware to validate path params
 */

export function validatePathParams<T extends object>(Cls: new () => T):RequestHandler{

    return async function(req:Request,_res:Response,next:NextFunction):Promise<void>{

        try {

            const dto=plainToInstance(Cls,req.params,{enableImplicitConversion:true,
                excludeExtraneousValues:false,
                exposeDefaultValues:true
            })

        const errors=await validate(dto,{
            whitelist:true,
            forbidNonWhitelisted:true,
            skipMissingProperties: false,
        });

        if(errors.length>0){

            const invalidParameters=errors.map((item)=>(mapValidationErrorToInvalidParamter(item,false)));
            return next(new IllegalArgumentError(invalidParameters,req.params));
        }

        (req as any).paramsDto=dto;

        return next();
            
        } catch (error) {

            next(error);
        }
 
    }
}

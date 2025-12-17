import { NextFunction, Request, Response } from "express";
import correlator from "express-correlation-id";
import { ErrorMapper } from "../http/errors/ErrorMapper";


export function errorHandler(error:unknown,_req: Request,res:Response,_next:NextFunction): void{

    const xCorrelator=correlator.getId();
    const httpError= ErrorMapper.toHttpError(error,xCorrelator);

    
}
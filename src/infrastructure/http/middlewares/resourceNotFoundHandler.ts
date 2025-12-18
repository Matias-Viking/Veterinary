import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/HttpError";
import { StatusCodes } from "http-status-codes";
import { ErrorCodes } from "../../../shared/ErrorCodes";


export function resourceNotFoundHandler(_req:Request,_res:Response,next:NextFunction):void{

    next( new HttpError(StatusCodes.NOT_FOUND,ErrorCodes.non_existent_resource_id,"RESOURCE NOT FOUND"))
}
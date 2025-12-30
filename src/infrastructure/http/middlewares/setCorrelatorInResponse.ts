import { NextFunction, Request, Response } from "express";
import correlator from "express-correlation-id";

export function setCorrelatorInResponse(_req: Request, res: Response, next: NextFunction): void {
    res.set("x-correlator", correlator.getId());
    next();
}

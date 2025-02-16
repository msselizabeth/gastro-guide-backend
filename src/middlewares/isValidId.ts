import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";
import { HttpError } from "../helpers/index.js";

export const isValidId = (req: Request, res: Response, next: NextFunction): void => {
    const params = req.params;

    for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            const id = params[key];
            if (!isValidObjectId(id)) {
                return next(HttpError(400, `${id} is not a valid ObjectId`));
            }
        }
    }

    next();
};

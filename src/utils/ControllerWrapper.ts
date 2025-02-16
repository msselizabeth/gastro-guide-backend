import { Request, Response, NextFunction } from 'express';

export const ControllerWrapper = (ctrl: (req: Request, res: Response, next: NextFunction) => Promise<void> ) => {
    const wrapper = async (req: Request, res: Response, next: NextFunction) => { 
        try {
            await ctrl(req, res, next)
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
    return wrapper;
}
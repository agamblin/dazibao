import { validationResult } from 'express-validator/check';
import { Response, NextFunction } from 'express';
import IRequest from '@typings/general/IRequest';
import IError from '@typings/general/IError';

// Use express validator to check if all rules are passing, redirecting to error handler otherwise

export default (req: IRequest, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    res;
    if (!errors.isEmpty()) {
        const error: IError = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        return next(error);
    }
    next();
};

import { ErrorRequestHandler } from 'express';

export default interface IError extends Error {
    // tslint:disable-next-line: no-any
    data?: any[];
    statusCode?: number;
    message: string;
}

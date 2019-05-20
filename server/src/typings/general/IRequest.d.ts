import { Request } from 'express';
import IUser from '@typings/user/IUser';

export default interface IRequest extends Request {
    user: IUser;
}

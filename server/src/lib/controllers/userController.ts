import { Response, NextFunction } from 'express';
import { encode } from 'jwt-simple';
import { compare } from 'bcryptjs';
import { jwtSecret } from '@config/keys';
import IRequest from '@typings/general/IRequest';
import User from '@models/User';
import IError from '@typings/general/IError';
import { pick } from 'lodash';

const tokenForUser = (user: User) => {
    const timestamp = new Date().getTime();
    return encode({ sub: user.id, iat: timestamp }, jwtSecret);
};

export const getUserInfo = async (req: IRequest, res: Response) => {
    return res.status(200).json({
        ...pick(req.user, 'id', 'username', 'createdAt', 'updatedAt'),
    });
};

export const getToken = async (
    req: IRequest,
    res: Response,
    next: NextFunction
) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
        const error: IError = new Error('Username not found');
        error.statusCode = 404;
        error.message = 'Username not found';
        return next(error);
    }
    const equal = await compare(password, user.password);
    if (!equal) {
        const error: IError = new Error('Bad credentials');
        error.statusCode = 401;
        error.message = 'Bad credentials';
        return next(error);
    }
    return res.status(200).json({
        token: tokenForUser(user),
    });
};

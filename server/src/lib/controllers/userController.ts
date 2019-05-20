import { Response, NextFunction } from 'express';
import { encode } from 'jwt-simple';
import { compare } from 'bcryptjs';
import { jwtSecret } from '@config/keys';
import IRequest from '@typings/general/IRequest';
import userFactory from '@factories/userFactory';
import User from '@models/User';
import IError from '@typings/general/IError';

const tokenForUser = (user: User) => {
    const timestamp = new Date().getTime();
    return encode({ sub: user.id, iat: timestamp }, jwtSecret);
};

export const register = async (
    req: IRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await userFactory.create(req.body);
        return res.status(201).json({ token: tokenForUser(user) });
    } catch (err) {
        return next(err);
    }
};

export const getUserInfo = async (req: IRequest, res: Response) => {
    return res.status(200).json({ name: req.user.username });
};

export const getToken = async (
    req: IRequest,
    res: Response,
    next: NextFunction
) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
        const error: IError = new Error('Email not found');
        error.statusCode = 404;
        error.message = 'Email not found';
        return next(error);
    }
    const equal = await compare(password, user.password);
    if (!equal) {
        const error: IError = new Error('Bad credentials');
        error.statusCode = 401;
        error.message = 'Bad credentials';
        return next(error);
    }
    return res.status(200).json({ token: tokenForUser(user) });
};

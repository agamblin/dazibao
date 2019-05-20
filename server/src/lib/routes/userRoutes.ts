import { Router } from 'express';
import { body } from 'express-validator/check';
import * as userController from '@controllers/userController';
import validateRequest from '@middlewares/validateRequest';
import requireAuth from '@middlewares/requireAuth';

const userRoutes = Router();

userRoutes.post(
    '/',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email'),
        body('password')
            .trim()
            .isLength({ min: 5, max: 20 })
            .withMessage('Please enter a password between 5 and 20 characters'),
    ],
    validateRequest,
    userController.register
);

userRoutes.post(
    '/token',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email'),
    ],
    validateRequest,
    userController.getToken
);

userRoutes.get('/', requireAuth, userController.getUserInfo);

export default userRoutes;

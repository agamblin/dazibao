import { Router } from 'express';
import * as userController from '@controllers/userController';
import requireAuth from '@middlewares/requireAuth';

const userRoutes = Router();

userRoutes.post('/token', userController.getToken);

userRoutes.get('/token', requireAuth, userController.getUserInfo);

export default userRoutes;

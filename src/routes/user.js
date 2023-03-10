import express from 'express';
import * as UserController from '../app/controllers/UserController';

const userRouter = express.Router();

userRouter.get('/', UserController.getAllUser);
userRouter.post('/signup', UserController.signup);
userRouter.post('/login', UserController.login);

export default userRouter;
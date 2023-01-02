import express from 'express';
import { getAllUser } from '../app/controllers/UserController';

const userRouter = express.Router();

userRouter.get('/', getAllUser);

export default userRouter;
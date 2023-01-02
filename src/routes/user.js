import express from 'express';
import { getAllUser } from '../controllers/UserController'

const userRouter = express.Router();

userRouter.get('/', getAllUser);

export default userRouter;
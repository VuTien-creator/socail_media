import userRouter from './user';

const routes = (app) => {
    app.use('/user', userRouter);
}

export default routes;
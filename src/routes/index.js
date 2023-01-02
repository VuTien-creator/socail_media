import userRouter from './user';
import getDivision  from '../helper/getDivision';

const prefix = getDivision('api');

const routes = (app) => {
    app.use(`/${prefix}/user`, userRouter);
}

export default routes;
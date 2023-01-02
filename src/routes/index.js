import userRouter from './user';
import getDivision  from '../helper/getDivision';

const prefix = getDivision('prefix.api');
const routes = (app) => {
    app.use(`/${prefix}/user`, userRouter);
}

export default routes;
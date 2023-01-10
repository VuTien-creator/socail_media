import * as UserService from '../services/UserService'

const getAllUser = async (req, res, next) => {
    const result = await UserService.getAllUser();
    return res.status(result.status).json(result);
}

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    const result = await UserService.createNewUser({ name, email, password });
    return res.status(result.status).json(result);
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const result = await UserService.userLogin({ email, password });
    return res.status(result.status).json(result);
}

export { getAllUser, signup, login }
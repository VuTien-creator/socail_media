import User from "../models/User";
import convertData from "../../helper/convertData";
import * as UserService from '../services/UserService'
import * as constant from '../../config/app/constants'
import getDivision from "../../helper/getDivision";
import bcrypt from 'bcryptjs';

const getAllUser = async (req, res, next) => {
    const result = await UserService.getAllUser();

    return res.status(result.status).json(result);
}

const signup = async (req, res, next) => {
    const object = {};
    const { name, email, password } = req.body;
    
    const user = await UserService.getUser({email});

    //check if user already exist
    if (user.data.length) {
        object.status = constant.HTTP_STATUS.CONFLICT;
        object.message = getDivision('message.error');
        object.data = [];
        const result = convertData(object);
        return res.status(result.status).json(result);
    }

    const result = await UserService.createNewUser({ name, email, password });
    return res.status(result.status).json(result);
}

const login = async (req, res, next) => {
    
    const { email, password } = req.body;

    const result = await UserService.userLogin({ email, password });
    return res.status(result.status).json(result);
}

export { getAllUser, signup, login }
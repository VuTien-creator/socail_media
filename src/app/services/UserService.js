import * as UserRepository from '../repositories/UserRepository';
import convertData from '../../helper/convertData';
import getDivision from '../../helper/getDivision';
import * as constant from '../../config/app/constants';
import bcrypt from 'bcryptjs';

const getAllUser = async () => {
    const users = await UserRepository.getAllUser();
    return handleResult(users);
}

const getUser = async (param) => {
    const user = await UserRepository.getUser(param);
    return handleResult(user);
}

const createNewUser = async (data) => {
    //validate data
    // do something

    // convert password to encode
    data.password = bcrypt.hashSync(data.password);
    const newUser = await UserRepository.createNewUser(data);
    return handleResult(newUser);
}

const userLogin = async (data) => {
    const object = {};
    //validate data
    // do something here

    const user = await getUser({ email: data.email });

    if (!user.data.length) {
        object.status = constant.HTTP_STATUS.NOT_FOUND;
        object.message = getDivision('message.user_not_found');
        object.data = [];
        return convertData(object);
    }

    const isAuthen = bcrypt.compareSync(data.password, user.data[0].password);

    if (!isAuthen) {
        object.status = constant.HTTP_STATUS.NOT_FOUND;
        object.message = getDivision('message.incorrect_password');
        object.data = [];
        return convertData(object);
    }

    object.status = constant.HTTP_STATUS.SUCCESS;
    object.message = getDivision('message.success');
    object.data = user.data;
    return convertData(object);
}

const handleResult = (object) => {
    const result = {};

    // convert to array
    if (object && !Array.isArray(object)) {
        object = [object];
    }

    if (!object || !object.length) {
        result.status = constant.HTTP_STATUS.NOT_FOUND;
        result.message = getDivision('message.not_users_found');
        result.data = [];
    } else {
        result.status = constant.HTTP_STATUS.SUCCESS;
        result.message = getDivision('message.success');
        result.data = [...object];
    }
    return convertData(result);
}

export { getAllUser, getUser, createNewUser, userLogin };
import User from "../models/User";

const getUser = async (param) => {
    try {
        return await User.findOne(param).exec();
    } catch (error) {
        return console.log(error)
    }
}

const getAllUser = async () => {
    try {
        return await User.find();
    } catch (error) {
        return console.log(error)
    }
}

const createNewUser = async (data) => {
    const newUser = new User(data);
    try {
        return await newUser.save();
    } catch (error) {
        return console.log('can not create new user ', error);
    }
}

export { getUser, getAllUser, createNewUser };
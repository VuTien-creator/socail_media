import User from "../models/User";
import convertData from "../../helper/convertData";

export const getAllUser = async(req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error)
    }

    const data = convertData(users);

    return res.status(data.status).json(data);
}
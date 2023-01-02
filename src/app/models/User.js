import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userShema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    }
});

export default mongoose.model('User', userShema)
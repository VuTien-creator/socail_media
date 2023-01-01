import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

// create instance for app
const app = express();

// use .env file
const env = dotenv.config();
dotenvExpand.expand(env);

const port = process.env.PORT || 3000;

// connect to DB
mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(port, console.log('hello')));

app.use('/api', (req, res, next) => {
    res.send('My API app');
});

import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import routes from './routes/index';

// create instance for app
const app = express();

// use .env file
const env = dotenv.config();
dotenvExpand.expand(env);

const port = process.env.PORT || 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// connect to DB
mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(port, console.log('hello')))
    .catch((error) => console.log(error));

app.get('/api', (req, res, next) => {
    res.send('My API app');
});

// definition routers
routes(app);

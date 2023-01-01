import express from 'express';
import mongoose from 'mongoose'

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://admin:admin@cluster0.jgt3mof.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(() => app.listen(port, console.log('hello')));

app.use('/api', (req, res, next) => {
    res.send('My API app');
});

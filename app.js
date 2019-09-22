const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('./middlewares/cors')

const postRouter = require('./routes/posts');
const usersRouter = require('./routes/users')

mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true
    },
    err => {
        if (!err) {
            console.log('Connected to database')
        } else {
            console.log(err)
        }
    });

const app = express();

app.use(logger('dev'));

app.use(cors);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use('/posts', postRouter);
app.use('/', usersRouter);

module.exports = app;
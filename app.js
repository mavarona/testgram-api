const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use('/posts', postRouter);
app.use('/', usersRouter);

module.exports = app;
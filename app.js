const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')

const postRouter = require('./routes/posts');

const app = express();

app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use('/posts', postRouter);

module.exports = app;
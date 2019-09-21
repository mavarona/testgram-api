const express = require('express');
const logger = require('morgan');

const postRouter = require('./routes/posts');

const app = express();

app.use(logger('dev'));

app.use('/posts', postRouter);

module.exports = app;
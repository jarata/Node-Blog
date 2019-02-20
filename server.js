const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');

const postsRouter = require('./postsRouter');
const usersRouter = require('./usersRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/posts', postsRouter);
server.use('/api/users', usersRouter);

server.get('/', async  (req, res) => {
    res.send(`<h2>Server is online!</h2>`)
});

module.exports = server;
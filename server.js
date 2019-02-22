const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const postsRouter = require('./postsRouter');
const usersRouter = require('./usersRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use('/api/posts', postsRouter);
server.use('/api/users', usersRouter);

server.get('/', async  (req, res) => {
    const motd = process.env.MOTD || 'Hello from Heroku';
    res.send(`<h2>${motd}, this server is online!</h2>`)
});

module.exports = server;
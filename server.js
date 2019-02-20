const express = require('express');
const postsRouter = require('./postsRouter');
// const usersRouter = require('./usersRouter');

const server = express();

server.use(express.json());
server.use('/api/posts', postsRouter);
// server.use('/api/users', usersRouter);

server.get('/', async  (req, res) => {
    res.send(`<h2>Server is online!</h2>`)
});

module.exports = server;
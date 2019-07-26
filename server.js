const express = require('express');

const server = express();
const postDB = require('./data/db_posts');

// parse req.body
server.use(express.json());
server.use('/api/posts', postDB);

server.get('/', (req, res) => {
 res.send(`<h1>Home Page</h1>`);
});

module.exports = server;

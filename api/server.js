const express = require('express');
const server = express();

server.use(express.json());

const Members = require('../members/membersModel');

server.get('/', async (req, res) => {
    
    res.status(200).json({ message: 'The members API is running' });
});

module.exports = server;

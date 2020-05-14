const http = require('http');

const express = require('express');
const app = express();

const server = http.createServer(app);

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server Runnig ...`);
});
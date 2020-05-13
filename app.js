const http = require('http');

const routers = require('./routers');
const server = http.createServer(routers);

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server Runnig ...`);
});
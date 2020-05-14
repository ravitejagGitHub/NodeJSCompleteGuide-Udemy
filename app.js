const http = require('http');

const express = require('express');
const app = express();


app.use((req, res, next)=>{
    console.log('This is first middleware!');
    next(); // Allow the request to continue to the next middleware.
})

app.use((req, res, next)=>{
    console.log('This is 2nd middleware!');
    res.send(`<h1> Hello from Express Js</h1>`) ; // Default content text/html
    next();
})
const server = http.createServer(app);


server.listen(3000, '127.0.0.1', () => {
    console.log(`Server Runnig ...`);
});
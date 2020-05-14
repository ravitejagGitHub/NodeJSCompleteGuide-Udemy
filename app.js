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
app.listen(3000); // will create server with port;
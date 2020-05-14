

const express = require('express');
const app = express();


app.use(('/', (req, res, next) => {
    console.log('This is first middleware! alway run.');
    next(); // Allow the request to continue to the next middleware.
}));

app.use('/hello', (req, res, next) => {
    console.log('This is 2nd middleware!');
    res.send(`<h1> Hello from Express Js</h1>`); // Default content text/html
    //wii not continue for next middleware
});

app.use('/', (req, res, next) => {
    console.log('This will not  run if res.send execute.!');
    res.send(`<h1> res.send not found before</h1>`); // Default content text/html
    //wii not continue for next middleware
});
app.listen(3000); // will create server with port;
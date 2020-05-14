

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(('/', (req, res, next) => {
    // console.log('This is first middleware! alway run.');
    next(); // Allow the request to continue to the next middleware.
}));

app.use('/hello', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    res.send(`<h1> Hello from Express Js</h1>`); // Default content text/html
    //wii not continue for next middleware
});


app.use('/add-product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    res.send(`
        <form action="/product" method="POST">
            <h1> Add Product </h1>
            <input type="text" name="title" />
            <button type=""Submit> Add </button>
        </form>
    `);
});


app.post('/product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    console.log(req.body);
    res.redirect("/hello")
});

app.use('/', (req, res, next) => {
    //console.log('This will not  run if res.send execute.!');
    res.send(`<h1> res.send not found before</h1>`); // Default content text/html
    //wii not continue for next middleware
});
app.listen(3000); // will create server with port;
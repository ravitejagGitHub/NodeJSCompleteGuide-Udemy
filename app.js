
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const rootDir = require('./utils/path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(('/', (req, res, next) => {
    console.log('This is first middleware! alway run.');
    next(); // Allow the request to continue to the next middleware.
}));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

app.use('/hello', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    res.send(`<h1> Hello from Express Js</h1>`); // Default content text/html
    //wii not continue for next middleware
});


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'view', '404.html'));
});


app.listen(3000); // will create server with port;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const rootDir = require('./utils/path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/errors');

app.set('view engine', 'pug');
app.set('views', 'views'); // folder name

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(('/', (req, res, next) => {
    console.log('This is first middleware! alway run.');
    next(); // Allow the request to continue to the next middleware.
}));

app.use('/admin', adminRouter.router);
app.use('/shop', shopRouter);

app.use('/hello', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    res.send(`<h1> Hello from Express Js</h1>`); // Default content text/html
    //wii not continue for next middleware
});


app.use(errorController.getPageNotFound);


app.listen(3000); // will create server with port;
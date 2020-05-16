const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoDBConnect = require('./utils/database').connect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


mongoDBConnect(db=> {
  //  console.log(db);
    app.listen(3000);
})
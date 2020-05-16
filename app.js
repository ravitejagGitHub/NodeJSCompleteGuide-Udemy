const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoDBConnect = require('./utils/database').connect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/errors');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5ec03a1024e27139d88885e8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getPageNotFound);


mongoDBConnect(db => {
  //  console.log(db);
  User.findOne().then(user => {
    if (!user) {
      const user = new User({
        name: 'raviteja',
        email: 'raviteja.giduturi@gmail.com',
        cart: {
          items: []
        }
      });
      console.log('New User Created!')
      return user.save();
    }
  }).catch(err => console.log(err));

  app.listen(3000);
})
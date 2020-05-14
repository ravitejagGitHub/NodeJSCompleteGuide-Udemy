const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    res.send(`
        <form action="/product" method="POST">
            <h1> Add Product </h1>
            <input type="text" name="title" />
            <button type=""Submit> Add </button>
        </form>
    `);
});


router.post('/product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    console.log(req.body);
    res.redirect("/hello")
});

module.exports = router;
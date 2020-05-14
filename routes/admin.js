const express = require('express');
const router = express.Router();

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    res.send(`
        <form action="/admin/add-product" method="POST">
            <h1> Add Product </h1>
            <input type="text" name="title" />
            <button type=""Submit> Add </button>
        </form>
    `);
});


router.post('/add-product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    console.log(req.body);
    res.redirect("/shop")
});

module.exports = router;
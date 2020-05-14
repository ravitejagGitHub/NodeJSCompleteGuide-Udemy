const express = require('express');
const path = require('path');

const rootDir =require('../utils/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'view', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    console.log(req.body);
    res.redirect("/shop")
});

module.exports = router;
const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();


const products = require('./admin').products;
router.get('/', (req, res, next) => {
    // res.send(`<h1> Home </h1>`);
    console.log('products ', products);
    res.sendFile(path.join(rootDir, 'view', 'shop.html'));
});

module.exports = router;
const express = require('express');
const path = require('path');

const rootDir =require('../utils/path');

const router = express.Router();
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(rootDir , 'view', 'add-product.html'));
    res.render('add-product', {
        pageTitle : 'Add Product',
        path : '/admin/add-product'
    })
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // console.log('This is 2nd middleware!');
    // console.log(req.body);
    products.push({
        title : req.body.title
    })

    res.redirect("/shop")
});

module.exports = {
    router,
    products
} 
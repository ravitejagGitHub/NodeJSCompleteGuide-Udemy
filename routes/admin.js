const express = require('express');
const path = require('path');

const router = express.Router();
const productController = require('../controllers/products');


// /admin/add-product => GET
router.get('/add-product', productController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productController.postProduct);

module.exports = {
    router
};
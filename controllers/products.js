const products = [];

const getAddProducts = (req, res, next) => {
    //res.sendFile(path.join(rootDir , 'view', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
};

const postProduct = (req, res, next) => {
    products.push({
        title: req.body.title
    })
    res.redirect("/shop")
};


const getAllProducts =  (req, res, next) => {
    // res.send(`<h1> Home </h1>`);
   //  console.log('products ', products);
    //res.sendFile(path.join(rootDir, 'view', 'shop.html'));
    res.render('shop', {
        pageTitle : 'Shop',
        prods: products,
        path : '/'
    })
};

module.exports = {
    getAddProducts,
    postProduct,
    getAllProducts
}
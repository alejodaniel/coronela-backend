;
const express = require('express');
const api = express.Router(),
    productController = require('../../app/Http/Controllers/productController');



//GET METHODS

api.get('/', productController.welcome);
api.get('/product',productController.getProduct );
api.get('/getProduct/:id', productController.getProductId);
api.get('/deleteProd/:id', productController.deleteProd)
api.post('/addProd',  productController.addProduct);
api.post('/updateProd',productController.updateProduct)



module.exports = api;

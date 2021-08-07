const bookshelf = require('../../bookshelf');

var Product,
    Products;

Product = bookshelf.Model.extend({
    tableName: 'Products',
    idAttribute: 'idProducts',
});

Products = bookshelf.Collection.extend({
    model: Product
});

module.exports = {
    Product: bookshelf.model('Product', Product),
    Products: bookshelf.collection('Products', Products)
};

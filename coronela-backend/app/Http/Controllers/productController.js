;
const config = require('../../../knexfile');
const db = require('knex')(config['development']);
const Product = require('../../Models/Products').Product;
const Products = require('../../Models/Products').Products;
//METODOS GET
let welcome = (req, res) => {
    return res.status(200).json({
        action: 'Servidor Funcionando'
    })
};

let getProduct = (req, res) => {
    new Products().query().then(function (product) {
        return res.status(200).json({
            ok: true,
            product
        })
    }).catch(function (err) {
        return res.status(500).json({
            ok: false,
            err
        })
    });
}
let getProductId = (req, res) => {
    let id = req.params.id;
    Product.query( {where: {idProducts: id}}).fetch()
       .then(productId => {
            return res.status(200).json({
                ok: true,
                productId
            })
        }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: `Error del servidor: ${err}`
        })
    });
}
let addProduct = (req, res) => {
    new Product(req.body).save().then(response => {
        return res.status(200).json({
            ok: true,
            message: 'PRODUCTO CREADO CON ÉXITO',
            response
        })
    }).catch(err => {
        return res.status(500).json({
            ok: true,
            message: 'OCURRIO UN ERROR AL GUARDAR EL PRODUCTO',
            err
        })
    });
}
let updateProduct = (req, res) => {
    new Product(req.body).save().then(response => {
        return res.status(200).json({
            ok: true,
            message: 'PRODUCTO ACTUALIZADO  CON ÉXITO',
            response
        })
    }).catch(err => {
        return res.status(500).json({
            ok: true,
            message: 'OCURRIO UN ERROR AL ACTUALIZAR EL PRODUCTO',
            err
        })
    });
}

let deleteProd = (req, res) => {
    let idProducts = req.params.id;

    Product.forge({idProducts: idProducts}).destroy().then(resp => {
        return res.status(200).json({
            ok: true,
            message: 'PRODUCTO ELIMINADO CON EXITO',
            resp
        })
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'OCURRIO UN ERROR AL ELIMINAR EL PRODUCTO',
            err
        })

    });
}

module.exports = {
    getProduct,
    welcome,
    deleteProd,
    addProduct,
    updateProduct,
    getProductId
};

;
const express = require('express');
let api = express.Router(),
    counter = 0,
    repeats = 'Rutas repetidas: \n';
let rutes = [
    product_routes = require('./product')
];

api = rutes[0];

rutes.forEach((ruta, index) => {
    if (index > 0)
        ruta.stack.forEach((accion) => {
            api.stack.push(accion)
        })
});

api.stack.forEach((ruta, index) => {
    for (let i = (index + 1); i < api.stack.length; i++) {
        if (ruta.route.path === api.stack[i].route.path && ruta.route.stack[0].method === api.stack[i].route.stack[0].method) {
            repeats += `path: ${ruta.route.path} metodo: ${ruta.route.stack[0].method} \n`
        }
    }
});

if (repeats.length > 20) throw new Error(repeats);

module.exports = api;
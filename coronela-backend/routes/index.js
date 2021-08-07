;
const express = require('express');
const bodyParser = require('body-parser');

const app = express(),

    product_routes = require('./product');


app.use('/', product_routes);


module.exports = app;


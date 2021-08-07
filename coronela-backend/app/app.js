;
const express = require('express'),
    bodyParser = require('body-parser');

var cors = require('cors')

const app = express(),
    routes = require('../routes');
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    next()
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));

app.use('/server', routes);

module.exports = app;

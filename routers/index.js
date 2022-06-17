const express = require('express');

const homeRouter = require('./homeRouter');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const nuevarutaRouter = require('./nueva-rutaRouter');

function routerApi(app) {
        const router = express.Router();
    app.use('/api/v1', router);
    router.use('/', homeRouter);
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/nueva-ruta', nuevarutaRouter);
}
module.exports = routerApi;
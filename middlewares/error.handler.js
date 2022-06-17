//para logear errores
function logErrors(err, req, res, next) {
    console.log('logErrors');
    console.error(err);
    next(err)
}

//para crear un formato de error en la app
function errorHandler(err, req, res, next){
    console.log('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
}

//boom
function boomErrorHandler(err, req, res, next){
   if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
   }
   next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
    //usaremos un clousure
    return (req, res, next) => {
        //hacemos una validacion dinamica
        const data = req[property];
        //ya que el req. dependiendo nos puede llegar en
        //req.body
        //req.params
        //req.query
        //esto depende del request (post, get , patch, etc)
        const error = schema.validate();

        if(error) {
            next(boom.badRequest(error));
        }
        next();
    }
}

module.exports = validatorHandler;
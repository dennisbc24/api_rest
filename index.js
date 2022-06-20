// este es el inicio de github
const express = require('express');
const cors = require('cors')
const routerApi = require('./routers')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5555', 'https://myapp.com', 'http://127.0.0.1:3000'];
        const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin){
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
};
    
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('MI port ' + port);
});

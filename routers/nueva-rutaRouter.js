const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hola soy una nueva ruta');
  });
  
  module.exports = router;
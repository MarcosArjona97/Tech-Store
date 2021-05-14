var express = require('express');
var router = express.Router();
const productRouter = require('./product')

/* GET home page. */
router.use('/product', productRouter);

module.exports = router;

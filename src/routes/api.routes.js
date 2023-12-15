const express = require('express');
const { checkEmail } = require('../controllers/APIs/userApiController');
const {
    listProducts,
    showProduct,
} = require('../controllers/APIs/productsApiController');
const router = express.Router();

/* /Api */

/* Users */
router.get('/check-email', checkEmail);

/* Products */
router.get('/products', listProducts).get('/products/:id', showProduct);

/* Categoríes  */

module.exports = router;

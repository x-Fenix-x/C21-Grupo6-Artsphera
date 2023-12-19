const express = require('express');
const {
    checkEmail,
    listUsers,
    showUser,
} = require('../controllers/APIs/userApiController');
const {
    listProducts,
    showProduct,
} = require('../controllers/APIs/productsApiController');
const {
    getCart,
    addItemToCart,
} = require('../controllers/APIs/cartApiController');
const router = express.Router();

/* /Api */

/* Users */
router
    .get('/check-email', checkEmail)
    .get('/users', listUsers)
    .get('/users/:id', showUser)
    .get('/cart', getCart)
    .get('/cart/item', addItemToCart);

/* Products */
router.get('/products', listProducts).get('/products/:id', showProduct);

/* Categoríes  */

module.exports = router;

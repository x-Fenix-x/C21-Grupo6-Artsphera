const express = require('express');
const {
    checkEmail,
    listUsers,
    showUser,
} = require('../controllers/APIs/userApiController');
const {
    listProducts,
    totalProductInDb,
} = require('../controllers/APIs/productsApiController');
const {
    getCart,
    addItemToCart,
    clearCart,
} = require('../controllers/APIs/cartApiController');
const {
    getAllCategory,
} = require('../controllers/APIs/categoriesApiController');

const router = express.Router();

/* /Api */

/* Users */
router
    .get('/check-email', checkEmail)
    .get('/users', listUsers)
    .get('/users/:id', showUser)
    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart/all', clearCart);

/* Products */
router
    .get('/products', listProducts)
    .get('/products/count', totalProductInDb);

/* Categoríes  */
router.get('/categories', getAllCategory);

module.exports = router;

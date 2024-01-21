const express = require('express');
const {
    checkEmail,
    listUsers,
    showUser,
} = require('../controllers/APIs/userApiController');
const {
    getAllProducts,
    totalProductInDb,
    createProduct,
} = require('../controllers/APIs/productsApiController');
const {
    getCart,
    addItemToCart,
    clearCart,
} = require('../controllers/APIs/cartApiController');
const {
    getCategoriesWithProducts,
    getCategories,
    getSections,
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
    .get('/products', getAllProducts)
    .get('/products/count', totalProductInDb)
    .post('/products/', createProduct);

/* Categoríes  */
router
    .get('/categories', getCategories)
    .get('/categories/products', getCategoriesWithProducts);

/* sections  */
router.get('/sections', getSections);

module.exports = router;

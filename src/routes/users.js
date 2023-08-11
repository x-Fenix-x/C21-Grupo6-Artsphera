const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

/* Users */
router.get('/carrito', usersController.carrito);
router.get('/login', usersController.login);
router.get('/productDetail', usersController.productDetail);
router.get('/register', usersController.register);

module.exports = router;

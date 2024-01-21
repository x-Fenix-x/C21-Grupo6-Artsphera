const express = require('express');
const { index, cart } = require('../controllers/indexController');
const router = express.Router();

/* Rutas principales */
router.get('/', index).get('/cart', cart);

module.exports = router;
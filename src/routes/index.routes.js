const express = require('express');
const { index, carrito } = require('../controllers/indexController');
const router = express.Router();

/* Index */
router.get('/', index).get('/carrito', carrito);

module.exports = router;

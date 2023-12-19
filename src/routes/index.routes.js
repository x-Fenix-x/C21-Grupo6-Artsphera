const express = require('express');
const { index, cart } = require('../controllers/indexController');
const router = express.Router();

/* Index */
router.get('/', index).get('/cart', cart);

module.exports = router;

const express = require('express');
const { detail } = require('../controllers/productsController');
const router = express.Router();

/* Productos */
router.get('/detail', detail);

module.exports = router;

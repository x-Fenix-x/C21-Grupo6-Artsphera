const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

/* Users */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/admin', usersController.adminPanel);

module.exports = router;

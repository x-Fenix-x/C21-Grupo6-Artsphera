const express = require('express');
const router = express.Router();
const { checkEmail } = require('../controllers/APIs/userApiController');


/* /api */
router.get('/check-email', checkEmail)

module.exports = router;

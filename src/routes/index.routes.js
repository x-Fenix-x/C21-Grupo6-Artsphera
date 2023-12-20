const express = require('express');
const path = require('path');
const { index, cart, error404 } = require('../controllers/indexController');
const router = express.Router();

/* Rutas principales */
router.get('/', index).get('/cart', cart);

/* Ruta para manejar errores 404 */
router.use((req, res, next) => {
    const filePath = path.join(__dirname, '../views/404.ejs');
    res.status(404);
    error404(req, res);
});

module.exports = router;

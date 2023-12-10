const express = require('express');
const {
    detail,
    add,
    create,
    edit,
    update,
    products,
    remove,
    search,
    addCategory,
    createCategory
} = require('../controllers/productsController');

const router = express.Router();
const upload = require('../middlewares/upload');
const productAddValidator = require('../validations/productAddValidator');
const productEditValidator = require('../validations/productEditValidator');

/* Productos */
router
    .get('/', products)
    .get('/category/:category', products)
    .get('/search', search)
    .get('/detail/:id', detail)
    .get('/add', add)
    .get('/categoryAdd', addCategory)
    .post('/categoryAdd',upload.single('image'), createCategory)
    .post('/add', upload.single('image'), productAddValidator, create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('image'), productEditValidator, update)
    .delete('/delete/:id', remove);

module.exports = router;

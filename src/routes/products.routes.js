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
    createCategory,
    editCategory,
    updateCategory,
    removeCategory
} = require('../controllers/productsController');

const router = express.Router();
const upload = require('../middlewares/upload');
const productAddValidator = require('../validations/productAddValidator');
const productEditValidator = require('../validations/productEditValidator');

/* Products */
router
    .get('/', products)
    .get('/category/:category', products)
    .get('/search', search)
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('image'), productAddValidator, create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('image'), productEditValidator, update)
    .delete('/delete/:id', remove)
    .get('/categories/add', addCategory)
    .get('/categories/edit/:id', editCategory)
    .post('/categories/add',upload.single('image'), createCategory)
    .put('/categories/update/:id',upload.single('image'), updateCategory)
    .delete('/categories/delete/:id', removeCategory)

module.exports = router;

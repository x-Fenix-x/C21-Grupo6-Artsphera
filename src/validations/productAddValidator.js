const { check } = require('express-validator');

module.exports = [
    check('title')
        .notEmpty()
        .withMessage('El titulo es obligatorio')
        .bail()
        .isLength({
            min: 3,
            max: 20,
        })
        .withMessage('Debe tener entre 3 y 20 caracteres'),
    check('category').notEmpty().withMessage('Seleccione categoría'),
    check('section').notEmpty().withMessage('Seleccione sección'),
    check('price')
        .notEmpty()
        .withMessage('El precio es obligatorio')
        .isInt({
            gt: 1,
        })
        .withMessage('Debe ser positivo'),
    check('stock')
        .notEmpty()
        .withMessage('No puede quedar vacio')
        .isInt({
            gt: 1,
        })
        .withMessage('Debe ser positivo'),
    check('description')
        .notEmpty()
        .withMessage('No puede quedar vacia')
        .isLength({
            min: 10,
            max: 500,
        })
        .withMessage('Debe tener entre 10 y 500 caracteres'),
];

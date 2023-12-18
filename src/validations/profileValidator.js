const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
        .isLength({
            min: 2,
        })
        .withMessage('Debe ingresar un nombre')
        .isAlpha('es-ES')
        .withMessage('Valido solo letras'),
    check('surname')
        .isLength({
            min: 2,
        })
        .withMessage('Debe ingresar un apellido')
        .isAlpha('es-ES')
        .withMessage('Valido solo letras'),
    check('address')
        .notEmpty()
        .withMessage('La dirección no puede quedar vacio')
        .isLength({
            min: 2,
        })
        .withMessage('Debe ingresar una dirección'),
];

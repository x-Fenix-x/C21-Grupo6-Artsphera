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
    body('email')
        .notEmpty()
        .withMessage('El email no puede quedar vacio')
        .isEmail()
        .withMessage('Ingrese un email valido')
        .custom((value, { req }) => {
            return db.User.findOne({
                where: {
                    email: value,
                },
            })
                .then((user) => {
                    if (user) {
                        return Promise.reject();
                    }
                })
                .catch((error) => {
                    console.log(error);
                    return Promise.reject('Este email ya esta registrado');
                });
        })
        .withMessage('Email registrado'),
    check('password')
        .isLength({
            min: 4,
            max: 10,
        })
        .withMessage('Ingrese un min de 4 & max 10 caracteres'),
    body('password2')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                return false;
            }
            return true;
        })
        .withMessage('Las contraseñas deben coincidir'),
];

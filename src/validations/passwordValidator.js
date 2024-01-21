const { check, body } = require('express-validator');

module.exports = passwordValidator = [
    check('password')
        .isLength({ min: 4, max: 12 })
        .withMessage('La contraseña debe tener entre 4 y 12 caracteres'),
    body('password2')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                return false;
            }
            return true;
        })
        .withMessage('Las contraseñas deben coincidir'),
];

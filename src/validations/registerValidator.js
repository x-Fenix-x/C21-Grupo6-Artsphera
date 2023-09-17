const { check, body } = require("express-validator");
const { readJSON } = require("../data");

const registerValidator = [
    check("name")
        .isLength({
            min: 2,
        })
        .withMessage("Debe ingresar un nombre")
        .isAlpha("es-ES")
        .withMessage("Valido solo letras"),
    check("surname")
        .isLength({
            min: 2,
        })
        .withMessage("Debe ingresar un apellido")
        .isAlpha("es-ES")
        .withMessage("Valido solo letras"),
    body("email")
        .notEmpty()
        .withMessage("El email no puede quedar vacio")
        .isEmail()
        .withMessage("Ingrese un email valido")
        .custom((value, { req }) => {
            const users = readJSON("users.json");
            const user = users.find((user) => user.email === value);

            if (user) {
                return false;
            }
            return true;
        })
        .withMessage("El email se encuentra registrado"),
    check("password")
        .isLength({
            min: 4,
            max: 10,
        })
        .withMessage("Ingrese un min de 4 & max 10 caracteres"),
    body("password2")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                return false;
            }
            return true;
        })
        .withMessage("Las contraseñas deben coincidir"),
];

module.exports = registerValidator;

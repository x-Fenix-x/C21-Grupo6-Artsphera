const { check, body, validationResult } = require("express-validator");
const { readJSON } = require("../data");

const profileValidator = [
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
		.withMessage("Ingrese un email valido"),
];

module.exports = profileValidator;

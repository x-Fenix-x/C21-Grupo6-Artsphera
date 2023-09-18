const { check, body } = require("express-validator");

const passwordValidator = [
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

module.exports = passwordValidator;

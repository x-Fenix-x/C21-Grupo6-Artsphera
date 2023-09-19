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

const profileErrors = (req, res, next) => {
	const errors = validationResult(req);
	const users = readJSON("users.json");
	const categories = readJSON("categories.json");
	const id = req.params.id;

	const user = users.find((user) => user.id === id);

	if (!user) {
		return res.redirect("/users/login");
	}

	if (errors.isEmpty()) {
	} else {
		return res.render("profile", {
			errors: errors.mapped(),
			categories,
			users,
			user,
		});
	}
	next();
};

module.exports = {
	profileValidator,
	profileErrors,
};

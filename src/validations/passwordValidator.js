const { check, body, validationResult } = require("express-validator");
const { readJSON } = require("../data");

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

const passwordErrors = (req, res, next) => {
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
	passwordValidator,
	passwordErrors,
};

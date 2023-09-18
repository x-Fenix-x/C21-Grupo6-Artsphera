const { check, body, validationResult } = require("express-validator");
const { readJSON } = require("../data");
const { compareSync } = require("bcryptjs");

const loginValidator = [
	check("usernameOrEmail")
		.notEmpty()
		.withMessage("El email es obligatorio")
		.isEmail()
		.withMessage("Formato inválido")
		.custom((value, { req }) => {
			const users = readJSON("users.json");
			const user = users.find((user) => user.email === value);

			if (user) {
				const { id, name, role } = user;

				req.session.userLogin = {
					id,
					name,
					role,
				};

				if (req.body.remember !== undefined) {
					res.cookie("artesphera", req.session.userLogin, {
						maxAge: 1000 * 60 * 5,
					});
				}

				console.log(req.session.userLogin);

				return true;
			} else {
				throw new Error("El email no está registrado");
			}
		}),
	body("password")
		.custom((value, { req }) => {
			const users = readJSON("users.json");
			const user = users.find(
				(user) => user.email === req.body.usernameOrEmail
			);

			if (!user || !compareSync(value, user.password)) {
				return false;
			}
			return true;
		})
		.withMessage("Credenciales inválidas"),
];

const manejarErrores = (req, res, next) => {
	const datos = req.body;
	const errors = validationResult(req);
	const categories = readJSON("categories.json");

	if (errors.isEmpty()) {
	} else {
		res.render("login", {
			datos,
			errors: errors.mapped(),
			old: req.body,
			categories,
		});
	}
	next();
};

module.exports = {
	loginValidator,
	manejarErrores,
};

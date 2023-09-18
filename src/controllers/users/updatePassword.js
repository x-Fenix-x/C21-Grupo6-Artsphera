const { readJSON, writeJSON } = require("../../data");
const { hashSync } = require("bcryptjs");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
	const errors = validationResult(req);
	const users = readJSON("users.json");
	const { password } = req.body;
	const userUpdate = users.find((user) => user.id === req.params.id);

	if (!userUpdate) {
		return res.status(404).send("Usuario no encontrado");
	}

	if (errors.isEmpty()) {
		// Procede con la lógica de actualización del perfil
	} else {
		return res.send(errors.mapped());
	}

	if (password) {
		userUpdate.password = hashSync(password, 10);
	}

	writeJSON(users, "users.json");

	return res.redirect(`/users/profile/${req.params.id}`);
};

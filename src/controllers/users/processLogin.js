const { readJSON } = require("../../data");

module.exports = (req, res) => {
	const users = readJSON("users.json");
	const { id, name, role } = users.find(
		(user) => user.email === req.body.usernameOrEmail
	);

	req.session.userLogin = {
		id,
		name,
		role,
	};

	req.body.rememberMe !== undefined &&
		res.cookie("artesphera", req.session.userLogin, {
			maxAge: 1000 * 60 * 5,
		});

	console.log(req.session.userLogin);

	return res.redirect("/");
};

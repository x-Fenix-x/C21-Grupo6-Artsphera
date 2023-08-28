const { readJSON } = require("../../data");

module.exports = (req, res) => {
	const products = readJSON("products.json");
	const categories = readJSON("categories.json");

	return res.render("products", {
		products,
		categories,
	});
};

const { readJSON } = require("../data");

module.exports = {
	index: (req, res) => {
		const products = readJSON("products.json");
		const categories = readJSON("categories.json");
		const news = products.filter((product) => product.discount === 0);
		const offers = products.filter((product) => product.discount);
		const lastunits = products.filter((product) => product.stock <= 3);

		return res.render("index", {
			news,
			categories,
			offers,
			lastunits,
		});
	},
	carrito: (req, res) => {
		return res.render("carrito");
	},
};

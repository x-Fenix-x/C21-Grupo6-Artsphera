const { readJSON } = require("../../data");

module.exports = (req, res) => {
	const products = readJSON("products.json");
	const categories = readJSON("categories.json");

	let filteredProducts = products; // Mostrar todos los productos

	const category = req.params.category; //Categoría desde la URL

	if (category) {
		// Si hay una categoría en la URL, filtra los productos por esa categoría
		filteredProducts = products.filter(
			(product) => product.category === category
		);
	}

	return res.render("products", {
		products: filteredProducts,
		categories,
	});
};

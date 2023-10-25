const db = require('../../database/models');

module.exports = (req, res) => {
	const products = readJSON("products.json");
	const categories = readJSON("categories.json");

	// Verifica si query está presente en req.query antes de usarlo
	const query = req.query.query ? req.query.query.toLowerCase().trim() : "";

	let filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(query)
	);
	// Filtra los productos cuyo título contiene el término de búsqueda

	return res.render("products", {
		products: filteredProducts,
		categories,
		query, // Pasa el valor del input a la vista
	});
};

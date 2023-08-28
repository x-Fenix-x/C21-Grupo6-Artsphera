const { readJSON, writeJSON } = require("../../data");
const { existsSync, unlinkSync } = require("fs");

module.exports = (req, res) => {
	const productId = req.params.id;
	const products = readJSON("products.json");
	const productToRemove = products.find((product) => product.id === productId);

	if (!productToRemove) {
		return res.status(404).send("Product not found");
	}
	// Verificar si hay imágenes asociadas al producto antes de eliminar
	if (productToRemove.images && Array.isArray(productToRemove.images)) {
		productToRemove.images.forEach((image) => {
			const imagePath = `./public/images/${image}`;
			if (existsSync(imagePath)) {
				unlinkSync(imagePath);
			}
		});
	}
	// Filtrar los productos para excluir el producto a eliminar
	const productsModify = products.filter((product) => product.id !== productId);

	writeJSON(productsModify, "products.json");

	return res.redirect("/users/admin");
};

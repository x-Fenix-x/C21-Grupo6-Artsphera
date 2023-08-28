const { readJSON } = require("../../data");

module.exports = (req, res) => {
	const productId = req.params.id; // ID del producto recibido desde la URL
	const products = readJSON("products.json");
	const product = products.find((item) => item.id === productId);
	

	return res.render("productDetail", {
		product,
		
	});
};

const { readJSON } = require("../../data");
const priceFinal = require("../../../public/javascripts/products-function");

module.exports = (req, res) => {
    const categories = readJSON("categories.json");
    const products = readJSON("products.json");
    const id = req.params.id;

    const product = products.find((product) => product.id === id);

    return res.render("productEdit", {
        categories,
        products,
        product,
        priceFinal,
    });
};

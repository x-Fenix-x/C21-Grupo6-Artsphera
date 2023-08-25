const { readJSON } = require("../../data");
const priceFinal = require("../../../public/javascripts/products-function");

module.exports = (req, res) => {
    const categories = readJSON("categories.json");
    const products = readJSON("products.json");

    return res.render("productAdd", {
        categories,
        products,
        priceFinal
    });
};

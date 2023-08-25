const { readJSON } = require("../../data");
const priceFinal = require("../../../public/javascripts/products-function");

module.exports = (req, res) => {
    const products = readJSON("products.json");

    return res.render("adminPanel", {
        products,
        priceFinal,
    });
};

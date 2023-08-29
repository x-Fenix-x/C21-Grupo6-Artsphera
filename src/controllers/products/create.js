const { readJSON, writeJSON } = require("../../data");
const Product = require("../../data/Product");

module.exports = (req, res) => {
    const products = readJSON("products.json");

    const images = req.files ? req.files.map(file => file.filename) : [];

    const newProduct = new Product ({
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        discount: req.body.discount,
        stock: req.body.stock,
        images: images,
        section: req.body.section,
        description: req.body.description
    });

    products.push(newProduct);

    writeJSON(products, "products.json");

    return res.redirect("/products/add");
};

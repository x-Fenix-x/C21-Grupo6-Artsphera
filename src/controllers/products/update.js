const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
    const products = readJSON("products.json");
    const { title, category, price, discount, stock, description, section } = req.body;
    const images = req.files ? req.files.map(file => file.filename) : [];

    const productEdit = products.map((product) => {
        if (product.id === req.params.id) {
            product.title = title.trim();
            product.category = category;
            product.price = +price;
            product.discount = +discount;
            product.stock = +stock;
            product.images = images || product.images;
            product.section = section;
            product.description = description.trim();
        }

        return product;
    });

    writeJSON(productEdit, "products.json");

    return res.redirect("/users/admin");
};

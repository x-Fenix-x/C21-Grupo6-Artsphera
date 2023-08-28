const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
    const products = readJSON("products.json");
    const { title, category, price, discount, stock, description, image, images } = req.body;

    const productEdit = products.map((product) => {
        if (product.id === req.params.id) {
            product.title = title.trim();
            product.category = category;
            product.price = +price;
            product.discount = +discount;
            product.stock = +stock;
            product.image = image;
            product.images = images;
            product.description = description.trim();
        }

        return product;
    });

    writeJSON(productEdit, "products.json");

    return res.redirect("/users/admin");
};

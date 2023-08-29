const { readJSON, writeJSON } = require("../../data");
const { existsSync, unlinkSync } = require("fs");

module.exports = (req, res) => {
    const products = readJSON("products.json");
    const { title, category, price, discount, stock, description, section } = req.body;
    const images = req.files ? req.files.map((file) => file.filename) : [];

    const productToUpdate = products.find(
        (product) => product.id === req.params.id
    );

    if (productToUpdate.images && Array.isArray(productToUpdate.images)) {
        productToUpdate.images.forEach((image) => {
            const imagePath = `./public/images/productos/${image}`;
            if (existsSync(imagePath)) {
                unlinkSync(imagePath);
            }
        });
    }

    productToUpdate.title = title.trim();
    productToUpdate.category = category;
    productToUpdate.price = +price;
    productToUpdate.discount = +discount;
    productToUpdate.stock = +stock;
    productToUpdate.images = images || productToUpdate.images;
    productToUpdate.section = section;
    productToUpdate.description = description.trim();

    writeJSON(products, "products.json");

    return res.redirect("/users/admin");
};

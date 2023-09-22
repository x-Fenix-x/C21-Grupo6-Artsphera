const { readJSON, writeJSON } = require('../../data');
const { existsSync, unlinkSync } = require('fs');
const { validationResult } = require('express-validator');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const errors = validationResult(req);
    const categories = readJSON('categories.json');
    const sections = readJSON('sections.json');
    const products = readJSON('products.json');
    const { title, category, price, discount, stock, description, section } =
        req.body;

    const productToUpdate = products.find(
        (product) => product.id === req.params.id
    );

    const product = productToUpdate;

    if (errors.isEmpty()) {
        let images = req.files ? req.files.map((file) => file.filename) : [];

        if (images.length > 0) {
            if (
                productToUpdate.images &&
                Array.isArray(productToUpdate.images)
            ) {
                productToUpdate.images.forEach((image) => {
                    const imagePath = `./public/images/productos/${image}`;
                    if (existsSync(imagePath)) {
                        unlinkSync(imagePath);
                    }
                });
            }
        } else {
            images = productToUpdate.images;
        }

        productToUpdate.title = title.trim();
        productToUpdate.category = category;
        productToUpdate.price = +price;
        productToUpdate.discount = +discount;
        productToUpdate.stock = +stock;
        productToUpdate.images = images;
        productToUpdate.section = section;
        productToUpdate.description = description.trim();

        writeJSON(products, 'products.json');
        return res.redirect('/users/admin');
    } else {
        return res.render('productEdit', {
            products,
            categories,
            sections,
            errors: errors.mapped(),
            old: req.body,
            priceFinal,
            product,
        });
    }
};

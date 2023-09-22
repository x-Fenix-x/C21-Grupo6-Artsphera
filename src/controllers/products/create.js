const { readJSON, writeJSON } = require('../../data');
const Product = require('../../data/Product');
const { validationResult } = require('express-validator');
const priceFinal = require('../../../public/javascripts/products-function');
const path = require('path');

module.exports = (req, res) => {
    const errors = validationResult(req);
    const categories = readJSON('categories.json');
    const sections = readJSON('sections.json');
    const products = readJSON('products.json');

    if (errors.isEmpty()) {
        const products = readJSON('products.json');
        const images = req.files ? req.files.map((file) => file.filename) : [];

        const newProduct = new Product({
            title: req.body.title,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
            stock: req.body.stock,
            images: images,
            section: req.body.section,
            description: req.body.description,
        });

        products.push(newProduct);
        writeJSON(products, 'products.json');

        return res.redirect('/products/add');
    } else {
        return res.render('productAdd', {
            products,
            categories,
            sections,
            errors: errors.mapped(),
            old: req.body,
            priceFinal,
        });
    }
};

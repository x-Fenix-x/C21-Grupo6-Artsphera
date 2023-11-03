const db = require('../../database/models');
const { validationResult } = require('express-validator');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const errors = validationResult(req);

    const products = db.Product.findAll({
        include: ['category'],
    });

    if (errors.isEmpty()) {
        const {
            title,
            price,
            discount,
            description,
            categoryId,
            sectionId,
            stock,
        } = req.body;

        db.Product.create({
            title: title.trim(),
            price,
            discount: discount || 0,
            sectionId,
            categoryId,
            description: description.trim(),
            stock: stock || 1,
        })
            .then((product) => {
                db.Item.create({
                    stock,
                    productId: product.id,
                });

                if (req.file) {
                    db.Image.create({
                        image: req.file.filename,
                        productId: product.id,
                    });
                } else {
                    const imageDefault = '/defaultImage.png';
                    db.Image.create({
                        image: imageDefault,
                        productId: product.id,
                    });
                }
                return res.redirect('/products/add');
            })
            .catch((error) => console.log(error));
    } else {
        const categories = db.Category.findAll({
            order: ['id'],
        });
        const sections = db.Section.findAll({
            order: ['name'],
        });

        Promise.all([categories, sections, products])
            .then(([categories, sections, products]) => {
                return res.render('productAdd', {
                    products,
                    categories,
                    sections,
                    errors: errors.mapped(),
                    old: req.body,
                    priceFinal,
                });
            })
            .catch((error) => console.log(error));
    }
};

const db = require('../../database/models');
const { existsSync, unlinkSync } = require('fs');
const { validationResult } = require('express-validator');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const {
            title,
            categoryId,
            sectionId,
            price,
            discount,
            stock,
            description,
        } = req.body;

        db.Product.findByPk(req.params.id)
            .then((product) => {
                product
                    .update({
                        title: title.trim(),
                        categoryId,
                        sectionId,
                        price,
                        discount,
                        description: description.trim(),
                    })
                    .then(() => {
                        if (req.file) {
                            db.Image.findOne({
                                where: {
                                    productId: req.params.id,
                                },
                            }).then((image) => {
                                if (image) {
                                    image
                                        .update({
                                            image: req.file.filename,
                                        })
                                        .then(() => {
                                            db.Item.update(
                                                {
                                                    stock: stock || 1,
                                                },
                                                {
                                                    where: {
                                                        productId:
                                                            req.params.id,
                                                    },
                                                }
                                            ).then(() => {
                                                return res.redirect(
                                                    '/users/admin'
                                                );
                                            });
                                        });
                                } else {
                                    db.Image.create({
                                        image: req.file.filename,
                                        productId: req.params.id,
                                    }).then(() => {
                                        db.Item.update(
                                            {
                                                stock: stock || 1,
                                            },
                                            {
                                                where: {
                                                    productId: req.params.id,
                                                },
                                            }
                                        ).then(() => {
                                            return res.redirect('/users/admin');
                                        });
                                    });
                                }
                            });
                        } else {
                            db.Item.update(
                                {
                                    stock: stock || 1,
                                },
                                {
                                    where: {
                                        productId: req.params.id,
                                    },
                                }
                            ).then(() => {
                                return res.redirect('/users/admin');
                            });
                        }
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    } else {
        const id = req.params.id;

        const product = db.Product.findByPk(id, {
            include: {
                all: true,
            },
        });
        const categories = db.Category.findAll({
            order: ['id'],
        });
        const sections = db.Section.findAll({
            order: ['name'],
        });
        const products = db.Product.findAll({
            include: ['category'],
        });

        Promise.all([product, categories, sections, products])
            .then(([product, categories, sections, products]) => {
                return res.render('productEdit', {
                    ...product.dataValues,
                    categories,
                    sections,
                    products,
                    priceFinal,
                    errors: errors.mapped(),
                });
            })
            .catch((error) => console.log(error));
    }
};
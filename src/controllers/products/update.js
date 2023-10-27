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

        db.Product.findByPk(req.params.id, {
            include: ['images'],
        }).then((product) => {
            db.Product.update(
                {
                    title: title.trim(),
                    categoryId,
                    sectionId,
                    price,
                    discount,
                    description: description.trim(),
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
                .then(() => {
                    if (req.files.image) {
                        product.images.forEach((image) => {
                            if (
                                existsSync(
                                    `./public/images/productos/${
                                        product.images.find(
                                            (image) => image.main
                                        ).file
                                    }`
                                )
                            ) {
                                unlinkSync(
                                    `./public/images/productos/${
                                        product.images.find(
                                            (image) => image.main
                                        ).file
                                    }`
                                );
                            }
                        });
                        db.Image.destroy({
                            where: {
                                productId: req.params.id,
                                main: true,
                            },
                        }).then(() => {
                            db.Image.create({
                                file: req.files.image[0].filename,
                                main: true,
                                productId: req.params.id,
                            });
                        });
                    }

                    db.Item.update(
                        { stock: stock },
                        {
                            where: {
                                productId: req.params.id,
                            },
                        }
                    );

                    return res.redirect('/users/admin');
                })
                .catch((error) => console.log(error));
        });
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

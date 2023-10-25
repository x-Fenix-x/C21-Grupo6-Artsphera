const db = require('../../database/models');
const { validationResult } = require('express-validator');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const errors = validationResult(req);

    const products = db.Product.findAll({
        order: ['title'],
    });

    if (errors.isEmpty()) {
        const { title, price, discount, description, categoryId, sectionId } =
            req.body;

        db.Product.create({
            title: title.trim(),
            price,
            discount,
            sectionId,
            categoryId,
            description: description.trim(),
        })
            .then((product) => {
                if (req.files.image && req.files.length > 0) {
                    const imageDefault = '../../../images/defaultImage.png';

                    db.Image.Create({
                        file: req.files.image[0].filename || imageDefault,
                        main: true,
                        productId: product.id,
                    });
                }
                return res.redirect('/products/add');
            })
            .catch((error) => console.log(error));
    } else {
        req.files.image &&
            existsSync(
                `./public/images/productos/${req.files.image[0].filename}`
            ) &&
            unlinkSync(
                `./public/images/productos/${req.files.image[0].filename}`
            );

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

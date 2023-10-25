const db = require('../../database/models');
const { validationResult } = require('express-validator');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const errors = validationResult(req);

    const products = db.Product.findAll({
        order: ['title'],
    });
    const imageDefault = '../../../images/defaultImage.png';

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
        });


        if (req.files && req.files.length > 0) {
            images = req.files.map((file) => file.filename);
        } else {
            images = [imageDefault];
        }

        return res.redirect('/products/add');
    } else {
        const categories = db.Category.findAll({
            order: ['name'],
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

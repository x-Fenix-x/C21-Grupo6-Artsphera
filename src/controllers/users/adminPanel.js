const db = require('../../database/models');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const products = db.Product.findAll({
        include: ['category', 'section', 'images'],
    });
    const categories = db.Category.findAll();
    const sections = db.Section.findAll({
        order: ['name'],
    });

    Promise.all([categories, sections, products])
        .then(([categories, sections, products]) => {
            return res.render('adminPanel', {
                products,
                categories,
                sections,
                priceFinal,
            });
        })
        .catch((error) => console.log(error));
};

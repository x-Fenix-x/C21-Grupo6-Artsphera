const db = require('../../database/models');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const categories = db.Category.findAll({
        order: ['id'],
    });
    const sections = db.Section.findAll({
        order: ['name'],
    });

    const products = db.Product.findAll({
        include: ['category'],
    });

    Promise.all([categories, sections, products])
        .then(([categories, sections, products]) => {
            return res.render('productAdd', {
                categories,
                products,
                sections,
                priceFinal,
            });
        })
        .catch((error) => console.log(error));
};

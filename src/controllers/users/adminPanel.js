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
        order: ['title'],
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

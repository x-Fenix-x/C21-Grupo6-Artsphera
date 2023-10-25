const db = require('../../database/models');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const id = req.params.id;

    const product = db.Product.findByPk(id);
    const categories = db.Category.findAll({
        order: ['id'],
    });
    const sections = db.Section.findAll({
        order: ['name'],
    });

    Promise.all([categories, sections, product])
        .then(([product, categories, sections]) => {
            return res.render('productAdd', {
                ...product?.dataValues,
                categories,
                sections,
                priceFinal,
            });
        })
        .catch((error) => console.log(error));

};

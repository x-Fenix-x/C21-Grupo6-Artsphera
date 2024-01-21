const db = require('../../database/models');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const product = db.Product.findByPk(req.params.id, {
        include: ['images'],
    });

    const categories = db.Category.findAll({
        order: ['id'],
    });

    Promise.all([categories, product])
        .then(([categories, product]) => {
            return res.render('productDetail', {
                categories,
                priceFinal,
                product,
            });
        })
        .catch((error) => console.log(error));
};

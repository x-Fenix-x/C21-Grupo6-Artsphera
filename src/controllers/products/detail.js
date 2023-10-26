const db = require('../../database/models');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const product = db.Product.findByPk(req.params.id, {
        include: ['images'],
    });

    const categories = db.Category.findAll({
        order: ['id'],
    });

    const products = db.Product.findAll();

    Promise.all([categories, product, products])
        .then(([categories, product, products]) => {
            const lastunits = products.filter((product) => product.stock <= 3);

            return res.render('productDetail', {
                categories,
                priceFinal,
                product,
                lastunits,
            });
        })
        .catch((error) => console.log(error));
};

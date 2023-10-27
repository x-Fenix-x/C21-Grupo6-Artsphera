const db = require('../../database/models');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = (req, res) => {
    const id = req.params.id;

    const product = db.Product.findByPk(id, {
        include: {
            all: true,
        },
    });

    const stock = db.Item.findOne({
        where: { productId: id },
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

    Promise.all([product, stock, categories, sections, products])
        .then(([product, stock, categories, sections, products]) => {
            return res.render('productEdit', {
                ...product?.dataValues,
                stock: stock ? stock.stock : 1,
                categories,
                sections,
                products,
                priceFinal,
            });
        })
        .catch((error) => console.log(error));
};

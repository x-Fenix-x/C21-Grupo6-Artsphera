const db = require('../database/models');
const priceFinal = require('../../public/javascripts/products-function');

module.exports = {
    index: (req, res) => {
        const categories = db.Category.findAll({
            order: ['id'],
        });

        const products = db.Product.findAll({
            include: ['images'],
        });

        Promise.all([categories, products])
            .then(([categories, products]) => {
                const news = products.filter(
                    (product) => product.sectionId === 1
                );

                const offers = products.filter(
                    (product) => product.sectionId === 2
                );

                const week = products.filter(
                    (product) => product.sectionId === 3
                );

                // return res.send(news)
                return res.render('index', {
                    news,
                    categories,
                    offers,
                    week,
                    products,
                    priceFinal,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    },
    cart: (req, res) => {
        db.Category.findAll()
            .then((categories) => {
                return res.render('cart', {
                    categories,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    },
};

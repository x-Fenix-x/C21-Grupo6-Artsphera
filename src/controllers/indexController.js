const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        const categories = db.Category.findAll({
            order: ['id'],
        });
        const sections = db.Section.findAll({
            order: ['name'],
        });

        const products = db.Product.findAll({
            include: ['images'],
        });

        Promise.all([categories, sections, products])
            .then(([categories, sections, products]) => {
                const news = products.filter(
                    (product) => product.sectionId === 1
                );

                const offers = products.filter(
                    (product) => product.discount >= 5
                );
                const lastunits = products.filter(
                    (product) => product.stock <= 3
                );
                // return res.send(news)
                return res.render('index', {
                    news,
                    categories,
                    offers,
                    lastunits,
                    products,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    },
    carrito: (req, res) => {
        db.Category.findAll()
            .then((categories) => {
                return res.render('carrito', {
                    categories,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    },
};

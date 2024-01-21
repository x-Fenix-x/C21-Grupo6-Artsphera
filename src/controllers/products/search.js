const db = require('../../database/models');

module.exports = (req, res) => {
    const query = req.query.query ? req.query.query.toLowerCase().trim() : '';

    db.Product.findAll({
        where: db.Sequelize.where(
            db.Sequelize.fn('LOWER', db.Sequelize.col('title')),
            'LIKE',
            '%' + query + '%'
        ),
        include: ['images'],
    })
        .then((products) => {
            db.Category.findAll().then((categories) => {
                return res.render('products', {
                    products,
                    query,
                    categories,
                });
            });
        })
        .catch((error) => console.log(error));
};

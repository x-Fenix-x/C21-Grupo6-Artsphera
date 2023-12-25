const db = require('../../database/models');
const paginate = require('express-paginate');

module.exports = async (req, res) => {
    try {
        const { count, rows } = await db.Product.findAndCountAll({
            limit: req.query.limit,
            offset: req.skip,
            include: ['category', 'images'],
        });

        const pagesCount = Math.ceil(count / req.query.limit);

        const categories = await db.Category.findAll({
            order: ['id', 'name'],
        });

        return res.render('products', {
            products: rows,
            categories,
            pages: paginate.getArrayPages(req)(
                pagesCount,
                pagesCount,
                req.query.page
            ),
            paginate,
            pagesCount,
            currentPage: req.query.page,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error en el servidor');
    }
};

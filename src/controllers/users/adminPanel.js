const db = require('../../database/models');
const paginate = require('express-paginate');
const priceFinal = require('../../../public/javascripts/products-function');

module.exports = async (req, res) => {
    try {
        const { count, rows } = await db.Product.findAndCountAll({
            limit: req.query.limit,
            offset: req.skip,
            include: ['category', 'section', 'images'],
        });

        const pagesCount = Math.ceil(count / req.query.limit);

        const categories = await db.Category.findAll();
        const sections = await db.Section.findAll({
            order: ['name'],
        });

        return res.render('adminPanel', {
            products: rows,
            categories,
            sections,
            priceFinal,
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

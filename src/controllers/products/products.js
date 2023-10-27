const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const categories = await db.Category.findAll({
            order: ['id', 'name'],
        });

        let filteredProducts;

        const category = req.params.categoryId;

        if (category) {
            filteredProducts = await db.Product.findAll({
                where: {
                    categoryId: category,
                },
                include: ['category', 'images'],
            });
        } else {
            filteredProducts = await db.Product.findAll({
                include: ['category', 'images'],
            });
        }

        return res.render('products', {
            products: filteredProducts,
            categories,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error en el servidor');
    }
};

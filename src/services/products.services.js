const db = require('../database/models');

const getAllProducts = async (limit, offset) => {
    try {
        const { count, rows } = await db.Product.findAndCountAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'categoryId'],
            },
            limit,
            offset,
            include: [
                {
                    association: 'category',
                    attributes: ['name', 'image'],
                },
            ],
        });

        return {
            total: count,
            products: rows,
        };
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio de productos',
        };
    }
};

module.exports = {
    getAllProducts,
};

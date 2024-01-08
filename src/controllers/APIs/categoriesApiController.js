const db = require('../../database/models');

module.exports = {
    getAllCategory: async (req, res) => {
        try {
            const categories = await db.Category.findAll({
                include: [
                    {
                        association: 'products',
                        attributes: ['id', 'title', 'price', 'discount'],
                    },
                ],
            });

            return res.status(200).json({
                ok: true,
                data: categories,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'Error en el servidor',
            });
        }
    },

    

    // getCategoryById: async (req, res) => {
    //     try {
    //         const category = await getCategoryById(req.params.id);
    //         return res.status(200).json({
    //             ok: true,
    //             data: category,
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(error.status || 500).json({
    //             ok: false,
    //             status: error.status || 500,
    //             error: error.message || 'Error en el servidor',
    //         });
    //     }
    // },
};

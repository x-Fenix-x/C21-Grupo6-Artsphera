const db = require('../../database/models');

module.exports = (req, res) => {
    db.Product.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            res.json({ success: true });
        })
        .catch((error) => {
            console.error(error);
            res.json({
                success: false,
                error: 'Error al eliminar el producto',
            });
        });
};

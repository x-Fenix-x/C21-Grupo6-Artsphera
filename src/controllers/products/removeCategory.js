const db = require('../../database/models');

module.exports = (req, res) => {
    db.Category.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            return res.redirect('/products/categories/add');
        })
        .catch((error) => console.error(error));
};

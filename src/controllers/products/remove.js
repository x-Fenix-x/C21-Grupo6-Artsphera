const db = require('../../database/models');

module.exports = (req, res) => {
    db.Product.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            return res.redirect('/users/admin');
        })
        .catch((error) => console.error(error));
};

const db = require('../../database/models');

module.exports = (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            return res.redirect('/');
        })
        .catch((error) => console.error(error));
};

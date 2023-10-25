const db = require('../../database/models');

module.exports = (req, res) => {
    db.Category.findAll()
        .then((categories) => {
            return res.render('login', {
                categories,
            });
        })
        .catch((error) => console.log(error));
};

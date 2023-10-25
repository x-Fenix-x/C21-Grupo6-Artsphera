const db = require('../../database/models');

module.exports = (req, res) => {
    db.Category.findAll()
        .then((categories) => {
            db.User.findByPk(req.session.userLogin.id)
                .then((user) => {
                    return res.render('profile', {
                        categories,
                        ...user.dataValues,
                        user
                    });
                })
                .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
};

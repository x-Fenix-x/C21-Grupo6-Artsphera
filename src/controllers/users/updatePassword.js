const db = require('../../database/models');
const { hashSync } = require('bcryptjs');
const { validationResult } = require('express-validator');

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { password } = req.body;

    if (errors.isEmpty()) {

        db.User.findByPk(req.params.id).then((user) => {
            if (password) {
                const hashedPassword = hashSync(password, 10);
                user.update({ password: hashedPassword }).then(() => {
                    return res.redirect(`/users/profile/${req.params.id}`);
                });
            } else {
                return res.redirect(`/users/profile/${req.params.id}`);
            }
        });
    } else {
        db.Category.findAll().then((categories) => {
            db.User.findByPk(req.session.userLogin.id)
                .then((user) => {
                    return res.render('profile', {
                        ...user.dataValues,
                        errors: errors.mapped(),
                        categories,
                        user,
                    });
                })
                .catch((error) => console.log(error));
        });
    }
};

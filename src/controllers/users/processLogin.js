const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        db.User.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((user) => {
                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    role: user.roleId,
                };

                req.body.rememberMe !== undefined &&
                    res.cookie('artesphera', req.session.userLogin, {
                        maxAge: 1000 * 60 * 10,
                    });

                return res.redirect('/');
            })
            .catch((error) => console.log(error));
    } else {
        db.Category.findAll()
            .then((categories) => {
                return res.render('login', {
                    categories,
                    errors: errors.mapped(),
                    old: req.body,
                });
            })
            .catch((error) => console.log(error));
    }
};

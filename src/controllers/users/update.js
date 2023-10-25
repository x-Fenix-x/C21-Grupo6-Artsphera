const db = require('../../database/models');
const { validationResult } = require('express-validator');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name, surname, email, password } = req.body;

        db.User.update(
            {
                name: name.trim(),
                surname: surname.trim(),
            },
            { where: { id: req.session.userLogin.id } }
        ).then((response) => {
            console.log(response);
            req.session.userLogin.name = name;
            res.locals.userLogin = req.session.userLogin;
            return res.redirect('/users/profile/' + req.params.id);
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

const db = require('../../database/models');
const { hashSync } = require('bcryptjs');
const { validationResult } = require('express-validator');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name, surname, email, password } = req.body;
        db.User.create({
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim(),
            password: hashSync(password, 10),
            roleId: 2,
        })
            .then(() => {
                return res.redirect('/users/login');
            })
            .catch((error) => console.log(error));
    } else {
        db.Category.findAll().then((categories) => {
            return res.render('register', {
                errors: errors.mapped(),
                old: req.body,
                categories
            });
        });
    }
};

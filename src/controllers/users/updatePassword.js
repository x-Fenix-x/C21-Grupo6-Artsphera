const db = require('../../database/models');
const { hashSync } = require('bcryptjs');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
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
            const provinceResults = await db.Address.findAll({
                attributes: ['province'],
                group: ['province'],
            });
            const cityResults = await db.Address.findAll({
                attributes: ['city'],
                group: ['city'],
            });

            const provinces = provinceResults.map((result) => result.province);
            const cities = cityResults.map((result) => result.city);
            db.Category.findAll().then((categories) => {
                db.User.findByPk(req.session.userLogin.id)
                    .then((user) => {
                        return res.render('profile', {
                            ...user.dataValues,
                            errors: errors.mapped(),
                            categories,
                            user,
                            provinces,
                            cities,
                        });
                    })
                    .catch((error) => console.log(error));
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error en el servidor');
    }
};

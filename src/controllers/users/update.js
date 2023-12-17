const db = require('../../database/models');
const { existsSync, unlinkSync } = require('fs');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, surname, email } = req.body;
            const avatar = req.file
                ? req.file.filename
                : req.session.userLogin.avatar;

            const user = await db.User.findByPk(req.session.userLogin.id);

            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            const oneAvatar = user.avatar;

            await db.User.update(
                {
                    name: name.trim(),
                    surname: surname.trim(),
                    email: email.trim(),
                    avatar,
                },
                { where: { id: req.session.userLogin.id } }
            );

            req.session.userLogin.name = name;
            res.locals.userLogin.name = name;

            if (req.cookies.artesphera) {
                res.cookie('artesphera', req.session.userLogin);
            }

            if (req.file && oneAvatar) {
                const filePath = `./public/images/users/${user.avatar}`;
                if (existsSync(filePath)) {
                    unlinkSync(filePath);
                }
            }

            return res.redirect('/users/profile/' + req.params.id);
        } else {
            if (req.file) {
                const filePath = `./public/images/users/${req.file.filename}`;
                if (existsSync(filePath)) {
                    unlinkSync(filePath);
                }
            }

            const categories = await db.Category.findAll();
            const user = await db.User.findByPk(req.session.userLogin.id);

            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            return res.render('profile', {
                ...user.dataValues,
                errors: errors.mapped(),
                categories,
                user,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error en el servidor');
    }
};

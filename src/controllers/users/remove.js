const db = require('../../database/models');

module.exports = (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            if (req.body.rememberMe === 'on') {
                res.clearCookie('artesphera');
            }

            req.session.destroy(() => {
                return res.redirect('/');
            });
        })
        .catch((error) => console.error(error));
};

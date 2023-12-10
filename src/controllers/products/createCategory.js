const db = require('../../database/models');
const { validationResult } = require('express-validator');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name } = req.body;
        let image = '/defaultImageCategory.png';

        if (req.file) {
            image = req.file.filename;
        }

        db.Category.create({
            name: name,
            image: image,
        })
        .then(() => {
            return res.redirect('/products/categoryAdd');
        })
        .catch((error) => console.log(error));
    } else {
        db.Category.findAll()
            .then((categories) => {
                return res.render('categoryAdd', {
                    categories,
                    errors: errors.mapped(),
                    old: req.body,
                });
            })
            .catch((error) => console.log(error));
    }
};

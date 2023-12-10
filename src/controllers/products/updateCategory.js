const db = require('../../database/models');
const { validationResult } = require('express-validator');

module.exports = (req, res) => {
    const errors = validationResult(req);
    const categoryId = req.params.id;

    if (errors.isEmpty()) {
        const { name } = req.body;
        let image = '/defaultImageCategory.png';

        if (req.file) {
            image = req.file.filename;
        }

        db.Category.findByPk(categoryId)
            .then((category) => {
                if (!category) {
                    return res.status(404).send('Categoría no encontrada');
                }

                const updatedImage = req.file ? image : category.image;

                return db.Category.update(
                    {
                        name: name,
                        image: updatedImage,
                    },
                    {
                        where: {
                            id: categoryId,
                        },
                    }
                );
            })
            .then(() => {
                return res.redirect('/products/categories/add');
            })
            .catch((error) => console.log(error));
    } else {
        db.Category.findByPk(categoryId)
            .then((category) => {
                if (!category) {
                    return res.status(404).send('Categoría no encontrada');
                }

                return res.render('categoryEdit', {
                    category,
                    errors: errors.mapped(),
                    old: req.body,
                });
            })
            .catch((error) => console.log(error));
    }
};

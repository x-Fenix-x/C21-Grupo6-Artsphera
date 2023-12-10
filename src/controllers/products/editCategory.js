const db = require('../../database/models');

module.exports = (req, res) => {
    const categoryId = req.params.id;

    db.Category.findAll()
        .then((categories) => {
            const category = categories.find(
                (category) => category.id === parseInt(categoryId)
            );

            if (!category) {
                return res.status(404).send('Categoría no encontrada');
            }

            return res.render('categoryEdit', {
                categories,
                category,
            });
        })
        .catch((error) => console.log(error));
};

const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const categories = await db.Category.findAll();
        const user = await db.User.findByPk(req.session.userLogin.id, {
            include: ['address'],
        });

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

        return res.render('profile', {
            categories,
            ...user.dataValues,
            user,
            provinces,
            cities,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error en el servidor');
    }
};

const db = require('../../database/models');
const paginate = require('express-paginate');
const { getAllUsers, getUserById } = require('../../services/users.services');

module.exports = {
    checkEmail: async (req, res) => {
        const email = req.query.email;

        try {
            const user = await db.User.findOne({
                where: {
                    email,
                },
            });

            return res.status(200).json({
                ok: true,
                data: user ? true : false,
            });
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Error en el servidor',
            });
        }
    },
    listUsers: async (req, res) => {
        try {
            const { total, users } = await getAllUsers(
                req.query.limit,
                req.skip
            );

            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(
                pagesCount,
                pagesCount,
                currentPage
            );

            return res.status(200).json({
                ok: true,
                data: users.map((user) => {
                    return {
                        ...user.dataValues,
                        avatar: `${req.protocol}://${req.get(
                            'host'
                        )}/images/users/${user.avatar}`,
                        url: `${req.protocol}://${req.get('host')}/api/users/${
                            user.id
                        }`,
                    };
                }),
                meta: {
                    total,
                    pagesCount,
                    currentPage,
                    pages,
                },
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'Error en el servidor',
            });
        }
    },
    showUser: async (req, res) => {
        try {
            const user = await getUserById(req.params.id);

            return res.status(200).json({
                ok: true,
                data: {
                    ...user.dataValues,
                    avatar: `${req.protocol}://${req.get(
                        'host'
                    )}/images/users/${user.avatar}`,
                },
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'Error en el servidor',
            });
        }
    },
};

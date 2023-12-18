const db = require('../database/models');

const getAllUsers = async (limit, offset) => {
    try {
        const { count, rows } = await db.User.findAndCountAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'roleId', 'password'],
            },
            limit,
            offset,
            include: [
                {
                    association: 'role',
                    attributes: ['name'],
                },
            ],
        });

        return {
            total: count,
            users: rows,
        };
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio de usuarios',
        };
    }
};

const getUserById = async (id) => {
    try {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                message: 'ID inexistente o corrupto',
            };
        }

        const user = await db.User.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'roleId', 'password'],
            },
            include: [
                {
                    association: 'role',
                    attributes: ['name'],
                },
                {
                    association: 'address',
                    attributes: ['province', 'city', 'address'],
                },
            ],
        });

        if (!user) {
            throw {
                status: 404,
                message: 'Usuario no encontrado',
            };
        }

        return user;
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio de usuarios',
        };
    }
};

module.exports = {
    getAllUsers,
    getUserById,
};

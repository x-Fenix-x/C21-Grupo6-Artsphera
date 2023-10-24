'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Admin',
                    surname: 'Artesphera',
                    email: 'admin@artesphera.com',
                    password:
                        '$2a$10$t0oLDMMUDEU0cMT4SdgDZe42AP/gqaJx65VQBs4xfYQgx3FXD5muS',
                    roleId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'User',
                    surname: 'Artesphera',
                    email: 'user@artesphera.com',
                    password:
                        '$2a$10$t0oLDMMUDEU0cMT4SdgDZe42AP/gqaJx65VQBs4xfYQgx3FXD5muS',
                    roleId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    },
};

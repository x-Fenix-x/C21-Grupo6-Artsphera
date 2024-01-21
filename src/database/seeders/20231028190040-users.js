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
                        '$2a$10$SfBc1RudoK3PmeOOuOOSMOkm23pPOuLJwwmmE7y3BITS9RcsNMz7.',
                    roleId: 1,
                    avatar: '1-admin.png',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'User',
                    surname: 'Artesphera',
                    email: 'user@artesphera.com',
                    password:
                        '$2a$10$Pt3A3cvWAGYKN8sGtO37n.F/dnL57ug4CHzR.JBYUuinYHs8r1AzS',
                    avatar: '2-user.png',
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

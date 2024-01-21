'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Addresses',
            [
                {
                    province: 'Catamarca',
                    city: 'Aconquija',
                    address: 'Irigoyen',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    province: 'Jujuy',
                    city: 'Casabindo',
                    address: 'Paz',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Addresses', null, {});
    },
};

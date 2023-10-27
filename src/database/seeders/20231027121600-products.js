'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Products',
            [
                {
                    title: 'Totoro',
                    price: 5000,
                    discount: 0,
                    description: 'Mi vecino Totoro',
                    categoryId: 1,
                    sectionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'Marilyn Monroe',
                    price: 2000,
                    discount: 0,
                    description: 'Marilyn Monroe',
                    categoryId: 4,
                    sectionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'The Girl color',
                    price: 7000,
                    discount: 0,
                    description: 'The Girl color',
                    categoryId: 3,
                    sectionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'Stranger Thing',
                    price: 7000,
                    discount: 0,
                    description: 'Stranger Thing',
                    categoryId: 3,
                    sectionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'La floreria',
                    price: 7000,
                    discount: 0,
                    description: 'Dulces flores y más colores',
                    categoryId: 3,
                    sectionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'Two Loves',
                    price: 7000,
                    discount: 0,
                    description: 'Two persons & Love',
                    categoryId: 5,
                    sectionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Products', null, {});
    },
};

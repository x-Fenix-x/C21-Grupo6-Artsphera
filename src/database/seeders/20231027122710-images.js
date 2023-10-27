'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Images',
            [
                {
                    file: 'totoro.jpg',
                    main: true,
                    productId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    file: '4.jpg',
                    main: true,
                    productId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    file: '3.jpg',
                    main: true,
                    productId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    file: 'st.jpg',
                    main: true,
                    productId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    file: '1.jpg',
                    main: true,
                    productId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    file: '5.jpg',
                    main: true,
                    productId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Images', null, {});
    },
};

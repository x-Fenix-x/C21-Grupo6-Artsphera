'use strict';

const categoriesArray = [
    'Pintura',
    'Escultura',
    'Fotografía',
    'Dibujo',
    'Ilustración',
    'Collage',
];

const categoriesDB = categoriesArray.map((category) => {
    return {
        name: category,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Categories', categoriesDB, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    },
};

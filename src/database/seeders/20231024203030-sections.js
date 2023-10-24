'use strict';

const sectionsArray = ['Nuevo', 'Ofertas', 'Últimas unidades'];

const sectionsDB = sectionsArray.map((section) => {
    return {
        name: section,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Sections', sectionsDB, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Sections', null, {});
    },
};

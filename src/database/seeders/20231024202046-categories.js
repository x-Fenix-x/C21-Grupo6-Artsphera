'use strict';

const categoriesArray = [
    { name: 'Pintura', image: '1.jpg' },
    { name: 'Escultura', image: '2.jpeg' },
    { name: 'Fotografía', image: '3.jpg' },
    { name: 'Dibujo', image: '4.jpg' },
    { name: 'Ilustración', image: '5.jpg' },
    { name: 'Collage', image: '6.jpg' },
];

const categoriesDB = categoriesArray.map((category) => {
    return {
        name: category.name,
        image: category.image,
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

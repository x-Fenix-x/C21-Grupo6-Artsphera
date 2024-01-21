'use strict';

const categoriesArray = [
    { name: 'Pintura', image: './cards/card1.jpg' },
    { name: 'Escultura', image: './cards/card2.jpeg' },
    { name: 'Fotografía', image: './cards/card3.jpg' },
    { name: 'Dibujo', image: './cards/card4.jpg' },
    { name: 'Ilustración', image: './cards/card5.jpg' },
    { name: 'Collage', image: './cards/card6.jpg' },
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

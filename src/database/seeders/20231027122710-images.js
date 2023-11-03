'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Images',
            [
                {
                    image: '1p-totoro.jpg',
                    productId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '2e-diana.jpeg',
                    productId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '3p-girlWhite.jpeg',
                    productId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '4d-marilyn.jpg',
                    productId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '5i-loves.jpg',
                    productId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '6f-girlColor.jpg',
                    productId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '7p-lost.jpeg',
                    productId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '8c-girl.jpg',
                    productId: 8,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '9f-marilynSad.jpeg',
                    productId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '10p-flores.jpg',
                    productId: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '11c-monkey.jpeg',
                    productId: 11,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '12c-primavera.jpeg',
                    productId: 12,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '13d-faces.jpeg',
                    productId: 13,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '14c-ali.jpeg',
                    productId: 14,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '15c-eggs.jpeg',
                    productId: 15,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '16c-espectros.jpeg',
                    productId: 16,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '17f-bowie.jpeg',
                    productId: 17,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '18i-conectados.jpeg',
                    productId: 18,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '19d-oneDay.jpeg',
                    productId: 19,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '20c-queen.jpeg',
                    productId: 20,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '21c-aitana.jpeg',
                    productId: 21,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '22p-miradas.jpeg',
                    productId: 22,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '23d-control.jpeg',
                    productId: 23,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '24p-womenAnimals.jpeg',
                    productId: 24,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '25i-soledad.jpeg',
                    productId: 25,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '26i-octava.jpeg',
                    productId: 26,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '27i-butterfly.jpeg',
                    productId: 27,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '28f-desolation.jpeg',
                    productId: 28,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '29i-danza.jpeg',
                    productId: 29,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    image: '30i-lobo.jpeg',
                    productId: 30,
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

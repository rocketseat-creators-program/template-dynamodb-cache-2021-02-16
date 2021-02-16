'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const users = []
   for (let index = 0; index < 50; index++) {
      users.push({
        name: faker.name.findName(),
        document: faker.address.zipCode(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryInterface.bulkInsert('Patients', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Patients', null, {});
  }
};

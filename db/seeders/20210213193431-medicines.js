'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const medicines = []
    for (let patientId = 0; patientId < 50; patientId++) {
      for (let index = 0; index < 10; index++) {
        medicines.push({
          patientId,
          name: `medicine-${index}`,
          date: faker.date.recent(),
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      }
    }
    await queryInterface.bulkInsert('Medicines', medicines, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Medicines', null, {});
  }
};
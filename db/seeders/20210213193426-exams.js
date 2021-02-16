'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exams = []
    for (let patientId = 0; patientId < 50; patientId++) {
      for (let index = 0; index < 10; index++) {
        exams.push({
          patientId,
          name: `exam-${index}`,
          result: faker.internet.url(),
          date: faker.date.recent(),
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      }
    }
    await queryInterface.bulkInsert('Exams', exams, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Exams', null, {});
  }
};
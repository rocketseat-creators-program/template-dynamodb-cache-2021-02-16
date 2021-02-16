const { sequelize } = require('../../../db')
const Exam = require('../../../db/models/exam')

const findAllByPatientId = patientId => Exam(sequelize).findAll({ where: {patientId}, order: [['createdAt', 'DESC']] })

module.exports = {
    findAllByPatientId,
}
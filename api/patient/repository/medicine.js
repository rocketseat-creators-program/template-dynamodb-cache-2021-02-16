const { sequelize } = require('../../../db')
const Medicine = require('../../../db/models/medicine')

const findAllByPatientId = patientId => Medicine(sequelize).findAll({ where: { patientId }, order: [['createdAt', 'DESC']] })

module.exports = {
    findAllByPatientId,
}
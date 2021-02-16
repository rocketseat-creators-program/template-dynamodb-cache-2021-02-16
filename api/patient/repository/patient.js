const { sequelize } = require('../../../db')
const Patient = require('../../../db/models/patient')

const findById = id => Patient(sequelize).findOne({ where: { id } })

module.exports = {
    findById,
}
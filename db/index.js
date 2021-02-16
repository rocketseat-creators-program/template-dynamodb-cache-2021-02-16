const Sequelize = require('sequelize')
const { database: config } = require('../config')

const sequelize = new Sequelize(config.database, config.username, config.password, {...config})

module.exports = {
  sequelize,
  Sequelize,
  connect: () => sequelize.authenticate(),
  ping: () => sequelize.authenticate(),
}

require('dotenv').config()

const { env } = process

module.exports = {
  api: {
    port: env.PORT || 3000,
  },
  database: {
    dialect: env.DB_DIALECT,
    host: env.DB_HOST,
    database: env.DB_DATABASE,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    port: parseInt(env.DB_PORT || 5432),
    schemas: {
      options: {
        timestamps: true,
        paranoid: false,
        underscored: true,
        freezeTableName: true,
      },
    },
  },
}

'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Medicine.init({
    patientId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Medicine',
  });
  return Medicine;
};
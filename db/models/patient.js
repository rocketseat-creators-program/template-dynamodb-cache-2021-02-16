'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Patient.init({
    name: DataTypes.STRING,
    document: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};
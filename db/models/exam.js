'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Exam.init({
    patientId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    result: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Exam',
  });
  return Exam;
};
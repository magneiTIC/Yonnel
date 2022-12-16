'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pays extends Model {
    static associate(models) {
      models.Pays.belongsTo(models.Devise,{
        foreignKey:{
          allowNull:false
        }
      })
    }
  }
  Pays.init({
    codeISO1: DataTypes.STRING,
    nom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pays',
  });
  return Pays;
};
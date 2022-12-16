'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SousAgence extends Model {
    static associate(models) {
      models.SousAgence.belongsTo(models.Agence,{
        foreignKey:{
          allowNull:false
        }
      }),
      models.SousAgence.hasMany(models.Users)
    }
  }
  SousAgence.init({
    nom: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ville: DataTypes.STRING,
    pays: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'SousAgence',
  });
  return SousAgence;
};
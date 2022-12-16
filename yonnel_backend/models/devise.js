'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Devise extends Model {
    static associate(models) {
      models.Devise.hasMany(models.Pays)
      models.Devise.hasMany(models.Transaction, { foreignKey: 'idDeviseOri' })
      models.Devise.hasMany(models.Transaction, { foreignKey: 'idDeviseOri' })
    }
  }
  Devise.init({
    codeISO3: DataTypes.STRING,
    nom: DataTypes.STRING,
    symbole: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Devise',
  });
  return Devise;
};
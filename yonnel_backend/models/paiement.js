'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paiement extends Model {
    static associate(models) {
      models.Paiement.belongsTo(models.Transaction,{
        foreignKey:{
          allowNull:false
        }
      })
    }
  }
  Paiement.init({
    date: DataTypes.DATE,
    numPiece:DataTypes.INTEGER,
    typePiece:DataTypes.ENUM('passport','CNI','permis')

  }, {
    sequelize,
    modelName: 'Paiement',
  });
  return Paiement;
};
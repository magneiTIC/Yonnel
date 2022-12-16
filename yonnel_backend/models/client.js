'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      models.Client.hasMany(models.Transaction, { foreignKey: 'idClientEmetteur' })
      models.Client.hasMany(models.Transaction, { foreignKey: 'idClientRecepteur' })

    }
  }
  Client.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    tel: DataTypes.INTEGER,
    email: DataTypes.STRING,
    dateNaiss: DataTypes.DATE,
    lieuNAiss: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
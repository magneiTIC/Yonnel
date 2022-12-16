'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      /////// CLIENT EMETTEUR RECEPTEUR
      models.Transaction.belongsTo(models.Client, {
        foreignKey: {
          allowNull: false,
          name: 'idClientEmetteur'
        }
      })
      models.Transaction.belongsTo(models.Client, {
        foreignKey: {
          allowNull: false,
          name: 'idClientRecepteur'
        }
      })
      ///////////// DEVISE D'ORIGINE ET DESTINATAIRE 
      models.Transaction.belongsTo(models.Devise, {
        foreignKey: {
          allowNull: false,
          name: 'idDeviseDest'
        }
      })
      models.Transaction.belongsTo(models.Devise, {
        foreignKey: {
          allowNull: false,
          name: 'idDeviseOri'
        }
      })
      /////////// USER EMETTEUR ET RECEPTEUR 
      models.Transaction.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false,
          name: 'idUserEmetteur'
        }
      })
      models.Transaction.belongsTo(models.Users, {
        foreignKey: {
          allowNull: true,
          name: 'idUserRecepteur'
        }
      })
      /////////// PAIEMENT 
      models.Transaction.hasOne(models.Paiement)

    }
  }
  Transaction.init({
    date: DataTypes.DATE,
    frais: DataTypes.FLOAT,
    montantRec: DataTypes.DOUBLE,
    statut: DataTypes.ENUM('transmitted', 'paid', 'payable', 'canceled'),
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
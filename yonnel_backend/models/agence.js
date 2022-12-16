sous_agence=require('./sous_agence')
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agence extends Model {
    static associate(models) {
      models.Agence.hasMany(models.SousAgence)
    }
  }
  Agence.init({
    nom: DataTypes.STRING,
    statut:{
      type: DataTypes.ENUM,
      values:[
        'actif',
        'inactif'
      ]
    },
    balance:DataTypes.DOUBLE

  }, {
    sequelize,
    modelName: 'Agence',
  }, );
  return Agence;
};



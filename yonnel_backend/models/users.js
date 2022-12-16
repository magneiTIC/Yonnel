'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      models.Users.belongsTo(models.SousAgence,{
        foreignKey:{
          allowNull:false
        }
      })
      models.Users.hasMany(models.Transaction, { foreignKey: 'idUserEmetteur' })
      models.Users.hasMany(models.Transaction, { foreignKey: 'idUserRecepteur' })
    }
  };
  Users.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    key: DataTypes.STRING,
    status: DataTypes.ENUM("admin","user"),
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
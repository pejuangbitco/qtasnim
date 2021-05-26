'use strict';
const {
  Model
} = require('sequelize');
const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
      });
    }
  };
  Transaction.init({
    quantity: DataTypes.INTEGER,
    tanggal: {
      type: DataTypes.DATE,
      get: function() {
        return moment(this.getDataValue("tanggal")).format("MM/DD/YYYY");
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
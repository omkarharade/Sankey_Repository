'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guardian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guardian.init({
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    alias: {
      type:DataTypes.STRING(15)
    },
    max_defence_power: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_attack_power: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_certified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    government_allowance: {
      type: DataTypes.DECIMAL(10,2),
    },
    date_introduced: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Guardian',
  });
  return Guardian;
};
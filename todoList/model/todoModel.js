const { sequelize, DataTypes } = require('../db');

module.exports = sequelize.define(
  'tasks',
  {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tasks',
    paranoid: true,
  }
);

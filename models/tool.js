const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Tool = sequelize.define(
  "tool",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    brand: {
      type: DataTypes.STRING(15),
    },
    description: {
      type: DataTypes.STRING(),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Tool;

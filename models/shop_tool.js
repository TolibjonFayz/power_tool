const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Shop_Tool = sequelize.define(
  "shop_tool",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_id: {
      type: DataTypes.INTEGER,
    },
    tool_id: {
      type: DataTypes.INTEGER,
    },
    rent_price: {
      type: DataTypes.INTEGER,
    },
    tool_price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Shop_Tool;

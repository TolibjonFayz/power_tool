const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Shop = require("./shop");
const Tool = require("./tool");

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
      type: DataTypes.DECIMAL(15, 2),
    },
    tool_price: {
      type: DataTypes.DECIMAL(15, 2),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Shop.belongsToMany(Tool, { through: Shop_Tool });

module.exports = Shop_Tool;

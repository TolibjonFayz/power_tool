const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Shop_Tool = require("./shop_tool");

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

Shop_Tool.belongsTo(Tool);
Tool.hasMany(Shop_Tool);

module.exports = Tool;

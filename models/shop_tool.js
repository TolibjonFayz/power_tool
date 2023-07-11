const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Shop = require("./shop");
const Tool = require("./tool");
const Order = require("./order");

const Shop_Tool = sequelize.define(
  "shop_tool",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

Shop_Tool.hasMany(Order);
Order.belongsTo(Shop_Tool);
// Shop.hasMany(Shop_Tool);

Shop.hasMany(Shop_Tool);
Shop_Tool.belongsTo(Shop);

// Shop.belongsToMany(Tool, { through: "shop_tool" });
// Tool.belongsToMany(Shop, { through: "shop_tool" });

module.exports = Shop_Tool;

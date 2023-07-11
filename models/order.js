const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
    },
    rent_tool_id: {
      type: DataTypes.INTEGER,
    },
    order_date: {
      type: DataTypes.DATE,
    },
    period: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Order;

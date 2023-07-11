const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Shop = sequelize.define(
  "shop",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_name: {
      type: DataTypes.STRING(20),
    },
    phone_number: {
      type: DataTypes.STRING(20),
    },
    district_id: {
      type: DataTypes.STRING(20),
    },
    address: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Shop;

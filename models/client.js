const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Order = require("./order");

const Client = sequelize.define(
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    client_name: {
      type: DataTypes.STRING(50),
    },

    client_phone_number: {
      type: DataTypes.STRING(15),
    },
    address: {
      type: DataTypes.STRING(),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Order.belongsTo(Client);
Client.hasMany(Order);

module.exports = Client;

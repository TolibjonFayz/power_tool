const Client = require("../models/client");
const Order = require("../models/order");
const Shop_Tool = require("../models/shop_tool");

const getAllOrder = async (ctx) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: Client }, { model: Shop_Tool }],
    });
    if (orders.length > 0) {
      ctx.status = 200;
      ctx.body = orders;
    } else {
      ctx.status = 201;
      ctx.body = "Any order not found";
    }
  } catch (error) {
    ctx.status = 500;
    3;
    ctx.body = "Error is detected";
  }
};

const addOrder = async (ctx) => {
  try {
    const { order_date, period, total_price, clientId, shopToolId } =
      ctx.request.body;
    const newOrder = await Order.create({
      order_date,
      period,
      total_price,
      clientId,
      shopToolId,
    });
    ctx.status = 200;
    ctx.body = newOrder;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = "Error is detected";
  }
};

module.exports = { getAllOrder, addOrder };

const Order = require("../models/order");

const getAllOrder = async (ctx) => {
  try {
    const orders = await Order.findAll();
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
    const { client_id, rent_tool_id, order_date, period, total_price } =
      ctx.request.body;
    const newOrder = await Order.create({
      client_id,
      rent_tool_id,
      order_date,
      period,
      total_price,
    });
    ctx.status = 200;
    ctx.body = newOrder;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Error is detected";
  }
};

module.exports = { getAllOrder, addOrder };

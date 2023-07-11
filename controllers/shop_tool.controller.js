const shop_tool = require("../models/shop_tool");

const getAllShop_tools = async (ctx) => {
  try {
    const shop_tools = await shop_tool.findAll();
    if (shop_tool.length > 0) {
      ctx.status = 200;
      ctx.body = shop_tools;
    } else {
      ctx.status = 201;
      ctx.body = "Any shop tool not found";
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Error is detected";
  }
};

module.exports = { getAllShop_tools };

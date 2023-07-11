const Shop = require("../models/shop");
const Shop_Tool = require("../models/shop_tool");
const Tool = require("../models/tool");

const getAllShop_tools = async (ctx) => {
  try {
    const shop_tools = await Shop_Tool.findAll({
      include: [{ model: Shop }, { model: Tool }],
    });
    if (shop_tools.length > 0) {
      ctx.status = 200;
      ctx.body = shop_tools;
    } else {
      ctx.status = 201;
      ctx.body = "Any shop tool not found";
    }
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = "Error is detected";
  }
};

const addShop_tools = async (ctx) => {
  try {
    const { rent_price, tool_price, toolId, shopId } = ctx.request.body;
    const newShop_tool = await Shop_Tool.create({
      rent_price,
      tool_price,
      toolId,
      shopId,
    });
    ctx.status = 200;
    ctx.body = newShop_tool;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = "Error is detected";
  }
};

module.exports = { getAllShop_tools, addShop_tools };

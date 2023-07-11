const Owner = require("../models/owner");
const Shop = require("../models/shop");

const getAllShop = async (ctx) => {
  try {
    const shops = await Shop.findAll({ include: Owner });
    if (shops.length > 0) {
      ctx.status = 200;
      ctx.body = shops;
    } else {
      ctx.status = 201;
      ctx.body = "Any shop not found...";
    }
  } catch (error) {
    ctx.status = 410;
    ctx.body = "Error is detected";
  }
};

const addShop = async (ctx) => {
  try {
    const { shop_name, phone_number, district_id, address, location, ownerId } =
      ctx.request.body;
    const newShop = await Shop.create({
      shop_name,
      phone_number,
      district_id,
      address,
      location,
      ownerId,
    });
    ctx.status = 201;
    ctx.body = newShop;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = "error is detected";
  }
};

module.exports = { getAllShop, addShop };

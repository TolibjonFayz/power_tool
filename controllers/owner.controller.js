const Owner = require("../models/owner");

const getAllOwner = async (ctx) => {
  try {
    const owners = await Owner.findAll();
    if (owners.length > 0) {
      ctx.status = 200;
      ctx.body = owners;
    } else {
      ctx.status = 201;
      ctx.body = "Any owner nit found";
    }
  } catch (error) {
    ctx.status = 400;
    ctx.body = "Error is detected";
  }
};

const addOwner = async (ctx) => {
  try {
    const { name, phone_number, otp_id } = ctx.request.body;
    const newOwner = await Owner.create({
      name,
      phone_number,
      otp_id,
    });
    ctx.status = 201;
    ctx.body = newOwner;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = "Error is detected";
  }
};

module.exports = { getAllOwner, addOwner };

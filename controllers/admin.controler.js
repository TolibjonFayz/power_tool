const Admin = require("../models/admin");

const getAllAdmin = async (ctx) => {
  try {
    const admins = await Admin.findAll();
    if (admins.length > 0) {
      ctx.status = 200;
      ctx.body = admins;
    } else {
      ctx.status = 201;
      ctx.body = "Any admin not found";
    }
  } catch (error) {
    ctx.status = 400;
    ctx.body = "Error is detected";
  }
};

module.exports = { getAllAdmin };

const Client = require("../models/client");
const Order = require("../models/order");
const Tool = require("../models/tool");

const getAllClients = async (ctx) => {
  try {
    const clients = await Client.findAll({ include: Order });
    if (clients.length > 0) {
      ctx.status = 200;
      ctx.body = clients;
    } else {
      ctx.status = 200;
      ctx.body = "Any clients not found";
    }
  } catch (error) {
    console.log(error);
  }
};

const getClient = async (ctx) => {
  try {
    const id = ctx.params.id;
    const client = await Client.findByPk(id);
    if (client) {
      ctx.status = 200;
      ctx.body = client.dataValues;
    } else {
      ctx.status = 201;
      ctx.body = "Client not found at this id";
    }
  } catch (error) {}
};

const addClient = async (ctx) => {
  try {
    const { client_name, client_phone_number, otp_id, address } =
      ctx.request.body;
    const newClient = await Client.create({
      client_name,
      client_phone_number,
      otp_id,
      address,
    });
    ctx.status = 201;
    ctx.body = newClient;
  } catch (error) {
    ctx.status(500);
    ctx.body = "Serverda xatolik";
  }
};

const editClient = async (ctx) => {
  try {
    const id = ctx.params.id;
    const { client_name, client_phone_number, otp_id, address } =
      ctx.request.body;
    const editing = await Client.update(
      {
        client_name: client_name,
        client_phone_number: client_phone_number,
        otp_id: otp_id,
        address: address,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (editing) {
      ctx.status = 200;
      ctx.body = "Client successfully updated";
    } else {
      ctx.status = 201;
      ctx.body = "Client not found at this id or smt wrong";
    }
  } catch (error) {
    console.log(error);
    ctx.body = error;
  }
};

const deleteClient = async (ctx) => {
  try {
    const id = ctx.params.id;
    const deleting = await Client.destroy({
      where: { id: id },
    });
    if (deleting) {
      ctx.status = 200;
      ctx.body = "Client successfully deleted";
    } else {
      ctx.status = 500;
      ctx.body = "Client not found at this id";
    }
  } catch (error) {
    ctx.status = 400;
    ctx.body = "Error is detected";
    console.log(error);
  }
};
module.exports = {
  getClient,
  getAllClients,
  addClient,
  editClient,
  deleteClient,
};

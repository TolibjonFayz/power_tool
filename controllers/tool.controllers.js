const Order = require("../models/order");
const Tool = require("../models/tool");

const addTool = async (ctx) => {
  try {
    const { name, brand, description } = ctx.request.body;
    const newTool = await Tool.create({
      name,
      brand,
      description,
    });
    ctx.status = 201;
    ctx.body = newTool;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = "error is detected";
  }
};

const getAllTools = async (ctx) => {
  try {
    const tools = await Tool.findAll();
    if (tools.length > 0) {
      ctx.status = 200;
      ctx.body = tools;
    } else {
      ctx.body = "Any tools not found at this id";
    }
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = "Error is detected";
  }
};

const getToolById = async (ctx) => {
  try {
    const id = ctx.params.id;
    const tool = await Tool.findByPk(id);
    if (tool) {
      ctx.status = 200;
      ctx.body = tool;
    } else {
      ctx.status = 400;
      ctx.body = "Tool not found at this id";
    }
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = "Error is detected";
  }
};

const editTool = async (ctx) => {
  try {
    const id = ctx.params.id;
    const { name, brand, description } = ctx.request.body;
    const editing = await Tool.update(
      {
        name: name,
        brand: brand,
        description: description,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (editing) {
      ctx.status = 200;
      ctx.body = "Tool successfully updated";
    } else {
      ctx.status = 200;
      ctx.body = "Tool not found at this id or dmt wrong";
    }
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = "Error is detected";
  }
};

const deleteTool = async (ctx) => {
  try {
    const id = ctx.params.id;
    const deletingTool = await Tool.destroy({
      where: { id: id },
    });
    if (deletingTool) {
      ctx.status = 200;
      ctx.body = "Tool successfully deleted";
    } else {
      ctx.status = 400;
      ctx.body = "Tool not found at this id or smt wrong";
    }
  } catch (error) {
    ctx.status = 400;
    ctx.body = "Error is detected";
  }
};

module.exports = { addTool, getAllTools, getToolById, editTool, deleteTool };

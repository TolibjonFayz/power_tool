const Router = require("koa-router");
const {
  getAllShop_tools,
  addShop_tools,
} = require("../controllers/shop_tool.controller");

const router = new Router();

router.get("/", getAllShop_tools);
router.post("/add", addShop_tools);

module.exports = () => router.routes();

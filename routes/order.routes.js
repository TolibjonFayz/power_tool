const Router = require("koa-router");
const { getAllOrder, addOrder } = require("../controllers/order.controller");

const router = new Router();

router.get("/", getAllOrder);
router.post("/add", addOrder);

module.exports = () => router.routes();

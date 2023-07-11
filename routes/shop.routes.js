const Router = require("koa-router");
const { getAllShop, addShop } = require("../controllers/shop.controller");

const router = new Router();

router.get("/", getAllShop);
router.post("/add", addShop);

module.exports = () => router.routes();

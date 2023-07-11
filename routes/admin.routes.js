const Router = require("koa-router");
const { getAllAdmin } = require("../controllers/admin.controler");

const router = new Router();

router.get("/", getAllAdmin);

module.exports = () => router.routes();

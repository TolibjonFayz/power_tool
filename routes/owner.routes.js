const Router = require("koa-router");
const { getAllOwner, addOwner } = require("../controllers/owner.controller");

const router = new Router();

router.get("/", getAllOwner);
router.post("/add", addOwner);

module.exports = () => router.routes();

const Router = require("koa-router");
const clientRouter = require("./client.routes");
const toolRouter = require("./tool.routes");
const shopRouter = require("./shop.routes");
const ownerRouter = require("./owner.routes");
const orderRouter = require("./order.routes");
const adminRouter = require("./admin.routes");
const shop_toolRouter = require("./shop_tool.routes");

const router = new Router();

router.use("/api/client", clientRouter());
router.use("/api/tool", toolRouter());
router.use("/api/shop", shopRouter());
router.use("/api/owner", ownerRouter());
router.use("/api/order", orderRouter());
router.use("/api/admin", adminRouter());
router.use("/api/shop_tool", shop_toolRouter());

module.exports = () => router.routes();

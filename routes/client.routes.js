const Router = require("koa-router");
const {
  getAllClients,
  getClient,
  addClient,
  editClient,
  deleteClient,
} = require("../controllers/client.controller");

const router = new Router();

router.get("/", getAllClients);
router.get("/:id", getClient);
router.post("/add", addClient);
router.put("/:id", editClient);
router.delete("/:id", deleteClient);

module.exports = () => router.routes();

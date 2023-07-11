const Router = require("koa-router");
const {
  addTool,
  getAllTools,
  getToolById,
  editTool,
  deleteTool,
} = require("../controllers/tool.controllers");

const router = new Router();

router.post("/add", addTool);
router.get("/", getAllTools);
router.get("/:id", getToolById);
router.put("/:id", editTool);
router.delete("/:id", deleteTool);

module.exports = () => router.routes();

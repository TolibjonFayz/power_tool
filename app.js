const Koa = require("koa");
const config = require("config");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const serve = require("koa-static");
const sequelize = require("./config/db");
const router = require("./routes/index.routes");

const PORT = config.get("port") || 3030;

const app = new Koa();
app.use(bodyParser());
app.use(cors());
app.use(router());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Koa listening on ${PORT}-port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

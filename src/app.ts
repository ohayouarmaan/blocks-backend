import path from "node:path";
import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import router from "./router/router";
import connect from "./config/database.config";
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use(router);

var port: number;
!process.env.PORT
  ? (() => {
      console.log("[SERVER]: No default port provided using 3000");
      port = 3000;
    })()
  : (port = parseInt(process.env.PORT));

async function run() {
  try {
    // Database Connection
    await connect();

    app.listen(port, "0.0.0.0", () => {
      console.log(`[SERVER 🚀]: Listening on port ${port}`);
    });
  } catch (e) {
    process.exit(1);
  }
}

run();

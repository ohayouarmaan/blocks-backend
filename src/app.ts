import express, { Request, Response } from "express";
import morgan from "morgan";
import router from "./router/router";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use(router);

var port: number;
!process.env.PORT ? (() => {
    console.log("[SERVER]: No default port provided using 3000");
    port = 3000;
})() : port = parseInt(process.env.PORT);

app.listen(port, "0.0.0.0", () => {
    console.log(`[SERVER 🚀]: Listening on port ${port}`);
})

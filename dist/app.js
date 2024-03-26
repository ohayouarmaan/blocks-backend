"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = __importDefault(require("./router/router"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(router_1.default);
var port;
!process.env.PORT ? (() => {
    console.log("[SERVER]: No default port provided using 3000");
    port = 3000;
})() : port = parseInt(process.env.PORT);
app.listen(port, "0.0.0.0", () => {
    console.log(`[SERVER 🚀]: Listening on port ${port}`);
});

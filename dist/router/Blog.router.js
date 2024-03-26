"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Blog_controller_1 = require("../controller/Blog.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", Blog_controller_1.test);
exports.default = router;

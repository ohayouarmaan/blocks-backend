import { test } from "../controller/Blog.controller";
import { Router } from "express";

const router = Router();

router.get("/", test);

export default router;

import { Router } from "express";
import BlogRouter from "./Blog.router";

const router = Router();

router.use("/blogs", BlogRouter);

export default router;

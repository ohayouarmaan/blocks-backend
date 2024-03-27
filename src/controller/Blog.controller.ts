import { Request, Response, NextFunction } from "express";

export function test(req: Request, res: Response) {
  return res.json({
    message: "API Working! 🚀",
  });
}

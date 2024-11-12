import { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    status: 404,
    message: "API Not found!",
    error: {
      path: req.originalUrl,
      method: req.method,
    },
  });
};

import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
function globalErrorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: httpStatus.INTERNAL_SERVER_ERROR,
    message: error?.message || "Internal Server Error",
    error: error,
  });
}

export default globalErrorHandler;

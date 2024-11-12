import { Response } from "express";

type ResponseType<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
};

const sendResponse = <T>(res: Response, data: ResponseType<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    status: data.statusCode,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;

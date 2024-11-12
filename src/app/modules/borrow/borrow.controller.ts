import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BorrowServices } from "./borrow.service";

const createBorrow = catchAsync(async (req, res) => {
  const result = await BorrowServices.createBorrowIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const BorrowControllers = {
  createBorrow,
};

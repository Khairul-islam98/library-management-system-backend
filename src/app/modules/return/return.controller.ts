import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReturnServices } from "./return.service";

const returnBook = catchAsync(async (req, res) => {
  console.log("Received borrowId:", req.body.borrowId);
  const result = await ReturnServices.returnBookIntoDB(
    req.body.borrowId as string
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book returned successfully",
  });
});

export const ReturnControllers = {
  returnBook,
};

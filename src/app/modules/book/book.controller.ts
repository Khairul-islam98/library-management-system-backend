import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBookIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const getBooks = catchAsync(async (req, res) => {
  const result = await BookServices.getBooksFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookServices.getBookByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  getBooks,
  getBookById,
};

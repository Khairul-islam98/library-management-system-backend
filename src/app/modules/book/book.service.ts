import { Book } from "@prisma/client";
import prisma from "../../utils/prisma";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createBookIntoDB = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

const getBooksFromDB = async () => {
  const result = await prisma.book.findMany();
  return result;
};

const getBookByIdFromDB = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  }
  return result;
};

const updateBookById = async (id: string, payload: Partial<Book>) => {
  const isExist = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  }
  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: payload,
  });
  return result;
};

const deleteBookById = async (id: string) => {
  const isExist = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  }
  const result = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getBooksFromDB,
  getBookByIdFromDB,
  updateBookById,
  deleteBookById,
};

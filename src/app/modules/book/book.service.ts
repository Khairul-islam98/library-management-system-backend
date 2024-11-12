import { Book } from "@prisma/client";
import prisma from "../../utils/prisma";

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
  return result;
};

const updateBookById = async (id: string, payload: Partial<Book>) => {
  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: payload,
  });
  return result;
};

const deleteBookById = async (id: string) => {
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

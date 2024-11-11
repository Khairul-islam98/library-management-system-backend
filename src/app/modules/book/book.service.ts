import prisma from "../../utils/prisma";
import { IBook } from "./book.interface";

const createBookIntoDB = async (payload: IBook) => {
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

export const BookServices = {
  createBookIntoDB,
  getBooksFromDB,
  getBookByIdFromDB,
};

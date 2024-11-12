import { BorrowRecord } from "@prisma/client";
import prisma from "../../utils/prisma";

const createBorrowIntoDB = async (payload: BorrowRecord) => {
  const { returnDate, ...borrowrecord } = await prisma.borrowRecord.create({
    data: payload,
  });
  return borrowrecord;
};

export const BorrowServices = {
  createBorrowIntoDB,
};

import AppError from "../../errors/AppError";
import prisma from "../../utils/prisma";
import httpStatus from "http-status";

const returnBookIntoDB = async (borrowId: string) => {
  const borrowRecord = await prisma.borrowRecord.findFirst({
    where: { borrowId },
  });

  if (!borrowRecord) {
    throw new AppError(httpStatus.NOT_FOUND, "Borrow record not found");
  }

  if (borrowRecord.returnDate) {
    throw new AppError(httpStatus.BAD_REQUEST, "Book already returned");
  }

  const result = await prisma.borrowRecord.update({
    where: { borrowId },
    data: { returnDate: new Date() },
  });

  return result;
};

export const ReturnServices = {
  returnBookIntoDB,
};

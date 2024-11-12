import AppError from "../../errors/AppError";
import prisma from "../../utils/prisma";
import httpStatus from "http-status";

const returnBookIntoDB = async (borrowId: string) => {
  const alreadyReturned = await prisma.borrowRecord.findFirst({
    where: {
      borrowId,
      returnDate: {
        not: null,
      },
    },
  });
  if (!alreadyReturned) {
    throw new AppError(httpStatus.NOT_FOUND, "Borrow record not found");
  }
  if (alreadyReturned) {
    throw new AppError(httpStatus.BAD_REQUEST, "Book already returned");
  }
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};

export const ReturnServices = {
  returnBookIntoDB,
};

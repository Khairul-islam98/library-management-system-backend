import prisma from "../../utils/prisma";

const returnBookIntoDB = async (borrowId: string) => {
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

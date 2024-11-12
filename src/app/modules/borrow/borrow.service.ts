import { BorrowRecord } from "@prisma/client";
import prisma from "../../utils/prisma";

const createBorrowIntoDB = async (payload: BorrowRecord) => {
  const { returnDate, ...borrowrecord } = await prisma.borrowRecord.create({
    data: payload,
  });
  return borrowrecord;
};

const borrowOverDueListIntoDB = async () => {
  const today = new Date();
  const overDueBorrow = new Date(today);
  overDueBorrow.setDate(today.getDate() - 14);

  const borrowRecordsOverDue = await prisma.borrowRecord.findMany({
    where: {
      AND: [
        { returnDate: null },
        {
          borrowDate: {
            lt: overDueBorrow,
          },
        },
      ],
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  const result = borrowRecordsOverDue.map((borrow) => {
    const borrowDate = new Date(borrow.borrowDate);
    const overDueDays = Math.floor(
      (Date.now() - borrowDate.getTime()) / (1000 * 60 * 60 * 24) - 14
    );

    return {
      borrowId: borrow.borrowId,
      bookTitle: borrow.book.title,
      borrowerName: borrow.member.name,
      overDueDays,
    };
  });
  return result;
};

export const BorrowServices = {
  createBorrowIntoDB,
  borrowOverDueListIntoDB,
};

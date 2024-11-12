import { Member } from "@prisma/client";
import prisma from "../../utils/prisma";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createMemberIntoDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

const getMembersFromDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getMemberByIdFromDB = async (id: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Member not found");
  }
  return result;
};
const updateMemberById = async (id: string, payload: Partial<Member>) => {
  const isExist = await prisma.member.findUnique({
    where: {
      memberId: id,
    },
  });
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Member not found");
  }
  const result = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: payload,
  });
  return result;
};

const deleteMemberById = async (id: string) => {
  const isExist = await prisma.member.findUnique({
    where: {
      memberId: id,
    },
  });
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Member not found");
  }
  const result = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });
  return result;
};

export const MemberServices = {
  createMemberIntoDB,
  getMembersFromDB,
  getMemberByIdFromDB,
  updateMemberById,
  deleteMemberById,
};

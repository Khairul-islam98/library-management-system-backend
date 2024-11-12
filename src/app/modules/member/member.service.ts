import { Member } from "@prisma/client";
import prisma from "../../utils/prisma";

const createMemberIntoDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

export const MemberServices = {
  createMemberIntoDB,
};

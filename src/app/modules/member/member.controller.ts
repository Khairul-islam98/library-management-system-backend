import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMemberIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Member created successfully",
    data: result,
  });
});
const getmembers = catchAsync(async (req, res) => {
  const result = await MemberServices.getMembersFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Members retrieved successfully",
    data: result,
  });
});
const getMemberById = catchAsync(async (req, res) => {
  const result = await MemberServices.getMemberByIdFromDB(
    req.params.memberId as string
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req, res) => {
  const result = await MemberServices.updateMemberById(
    req.params.memberId as string,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member updated successfully",
    data: result,
  });
});
const deleteMember = catchAsync(async (req, res) => {
  const result = await MemberServices.deleteMemberById(
    req.params.memberId as string
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member successfully deleted",
  });
});

export const MemberControllers = {
  createMember,
  getmembers,
  getMemberById,
  updateMember,
  deleteMember,
};

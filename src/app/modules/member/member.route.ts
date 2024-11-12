import exporess from "express";
import { MemberControllers } from "./member.controller";

const router = exporess.Router();

router.post("/", MemberControllers.createMember);
router.get("/", MemberControllers.getmembers);
router.get("/:memberId", MemberControllers.getMemberById);
router.put("/:memberId", MemberControllers.updateMember);
router.delete("/:memberId", MemberControllers.deleteMember);

export const MemberRoutes = router;

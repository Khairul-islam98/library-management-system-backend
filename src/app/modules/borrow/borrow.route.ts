import express from "express";
import { BorrowControllers } from "./borrow.controller";

const router = express.Router();

router.post("/", BorrowControllers.createBorrow);
router.get("/overdue", BorrowControllers.borrowOverDueList);

export const BorrowRoutes = router;

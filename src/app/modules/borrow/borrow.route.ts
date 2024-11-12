import express from "express";
import { BorrowControllers } from "./borrow.controller";

const router = express.Router();

router.post("/", BorrowControllers.createBorrow);

export const BorrowRoutes = router;

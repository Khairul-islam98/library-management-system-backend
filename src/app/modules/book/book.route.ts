import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getBooks);
router.get("/:id", BookControllers.getBookById);

export const BookRoutes = router;

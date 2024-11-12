import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getBooks);
router.get("/:bookId", BookControllers.getBookById);
router.put("/:bookId", BookControllers.updateBook);
router.delete("/:bookId", BookControllers.deleteBook);

export const BookRoutes = router;

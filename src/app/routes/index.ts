import { Router } from "express";
import { BookRoutes } from "../modules/book/book.route";

const router = Router();

const moduleRoute = [
  {
    path: "/books",
    route: BookRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;

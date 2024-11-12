import { Router } from "express";
import { BookRoutes } from "../modules/book/book.route";
import { MemberRoutes } from "../modules/member/member.route";
import { BorrowRoutes } from "../modules/borrow/borrow.route";

const router = Router();

const moduleRoute = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: BorrowRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;

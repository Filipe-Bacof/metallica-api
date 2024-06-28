import { Router } from "express";
import { Request, Response } from "express";

import bandMemberRouter from "./bandMember.router";
import albumRouter from "./album.router";
import songRouter from "./song.router";

const router = Router();
router.use(bandMemberRouter);
router.use(albumRouter);
router.use(songRouter);

router.get("/", (_request: Request, response: Response) => {
  response.send("Let's Rock! 🤘😎🔥");
});

router.get("/ping", (_request: Request, response: Response) => {
  return response.send("pong 🏓");
});

export default router;

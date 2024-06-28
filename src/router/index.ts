import { Router } from "express";

import bandMemberRouter from "./bandMember.router";
import albumRouter from "./album.router";
import songRouter from "./song.router";

const router = Router();
router.use(bandMemberRouter);
router.use(albumRouter);
router.use(songRouter);

router.get("/", (_request, response) => {
  response.send("Let's Rock! 🤘😎🔥");
});

export default router;

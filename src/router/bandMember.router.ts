import { Router } from "express";

import {
  getAllMembers,
  getMemberById,
  getMembersByName,
} from "../controllers/bandMember.controller";

const bandMemberRouter = Router();

bandMemberRouter.get("/member", getAllMembers);

bandMemberRouter.get("/member/id/:id", getMemberById);

bandMemberRouter.get("/member/name/:name", getMembersByName);

export default bandMemberRouter;

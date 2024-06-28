"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bandMember_controller_1 = require("../controllers/bandMember.controller");
const bandMemberRouter = (0, express_1.Router)();
bandMemberRouter.get("/member", bandMember_controller_1.getAllMembers);
bandMemberRouter.get("/member/id/:id", bandMember_controller_1.getMemberById);
bandMemberRouter.get("/member/name/:name", bandMember_controller_1.getMembersByName);
exports.default = bandMemberRouter;
//# sourceMappingURL=bandMember.router.js.map
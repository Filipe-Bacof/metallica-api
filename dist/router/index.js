"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bandMember_router_1 = __importDefault(require("./bandMember.router"));
const album_router_1 = __importDefault(require("./album.router"));
const song_router_1 = __importDefault(require("./song.router"));
const router = (0, express_1.Router)();
router.use(bandMember_router_1.default);
router.use(album_router_1.default);
router.use(song_router_1.default);
router.get("/", (_request, response) => {
    response.send("Let's Rock! 🤘😎🔥");
});
router.get("/ping", (_request, response) => {
    return response.send("pong 🏓");
});
exports.default = router;
//# sourceMappingURL=index.js.map
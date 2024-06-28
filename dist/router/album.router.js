"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const album_controller_1 = require("../controllers/album.controller");
const albumRouter = (0, express_1.Router)();
albumRouter.get("/album", album_controller_1.getAllAlbuns);
albumRouter.get("/album/id/:id", album_controller_1.getAlbumById);
albumRouter.get("/album/title/:title", album_controller_1.getAlbunsByTitle);
exports.default = albumRouter;
//# sourceMappingURL=album.router.js.map
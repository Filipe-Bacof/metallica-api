"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const song_controller_1 = require("../controllers/song.controller");
const songRouter = (0, express_1.Router)();
songRouter.get("/song", song_controller_1.getAllSongs);
songRouter.get("/song/id/:id", song_controller_1.getSongById);
songRouter.get("/song/title/:title", song_controller_1.getSongsByTitle);
songRouter.get("/song/album/:title", song_controller_1.getSongsByAlbumTitle);
songRouter.get("/song/random", song_controller_1.getRandomSong);
exports.default = songRouter;
//# sourceMappingURL=song.router.js.map
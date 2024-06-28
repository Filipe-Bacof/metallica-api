import { Router } from "express";

import {
  getAllSongs,
  getSongById,
  getSongsByTitle,
  getSongsByAlbumTitle,
} from "../controllers/song.controller";

const songRouter = Router();

songRouter.get("/song", getAllSongs);

songRouter.get("/song/id/:id", getSongById);

songRouter.get("/song/title/:title", getSongsByTitle);

songRouter.get("/song/album/:title", getSongsByAlbumTitle);

export default songRouter;

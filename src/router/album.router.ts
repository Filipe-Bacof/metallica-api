import { Router } from "express";

import {
  getAllAlbuns,
  getAlbumById,
  getAlbunsByTitle,
} from "../controllers/album.controller";

const albumRouter = Router();

albumRouter.get("/album", getAllAlbuns);

albumRouter.get("/album/id/:id", getAlbumById);

albumRouter.get("/album/title/:title", getAlbunsByTitle);

export default albumRouter;

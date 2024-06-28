import { Request, Response } from "express";
// import { Album } from "../interfaces/Album.interface"
import albumService from "../services/album.service";

export async function getAllAlbuns(_req: Request, res: Response) {
  const result = await albumService.getAll();
  res.status(200).send(result);
}

export async function getAlbumById(req: Request, res: Response) {
  const { id } = req.params;
  const idAlbum = Number(id);

  const result = await albumService.getById(idAlbum);
  res.status(200).send(result);
}

export async function getAlbunsByTitle(req: Request, res: Response) {
  const { title } = req.params;

  const result = await albumService.getByTitle(title);
  res.status(200).send(result);
}

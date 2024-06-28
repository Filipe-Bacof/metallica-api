import { Request, Response } from "express";
// import { Song } from "../interfaces/Song.interface"
import songService from "../services/song.service";

export async function getAllSongs(_req: Request, res: Response) {
  const result = await songService.getAll();
  res.status(200).send(result);
}

export async function getSongById(req: Request, res: Response) {
  const { id } = req.params;
  const idSong = Number(id);

  const result = await songService.getById(idSong);
  res.status(200).send(result);
}

export async function getSongsByTitle(req: Request, res: Response) {
  const { title } = req.params;

  const result = await songService.getByTitle(title);
  res.status(200).send(result);
}

export async function getSongsByAlbumTitle(req: Request, res: Response) {
  const { title } = req.params;

  const result = await songService.getSongsByAlbumTitle(title);
  res.status(200).send(result);
}

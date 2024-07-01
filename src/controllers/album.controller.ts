import { Request, Response } from "express";
// import { Album } from "../interfaces/Album.interface"
import albumService from "../services/album.service";
import {
  validateNumericString,
  validateTextString,
} from "../utils/stringFunctions";

export async function getAllAlbuns(_req: Request, res: Response) {
  try {
    const result = await albumService.getAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching albums." });
  }
}

export async function getAlbumById(req: Request, res: Response) {
  const { id } = req.params;
  if (!validateNumericString(id)) {
    return res
      .status(400)
      .send({ message: "The provided id cannot contain letters." });
  }

  try {
    const result = await albumService.getById(Number(id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching album by id." });
  }
}

export async function getAlbunsByTitle(req: Request, res: Response) {
  const { title } = req.params;
  if (!validateTextString(title)) {
    return res.status(400).send({
      message: "Only names with more than 3 characters are allowed.",
    });
  }

  try {
    const result = await albumService.getByTitle(title);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching albums by title." });
  }
}

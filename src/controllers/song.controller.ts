import { Request, Response } from "express";
import songService from "../services/song.service";
import {
  validateNumericString,
  validateTextString,
} from "../utils/stringFunctions";

export async function getAllSongs(_req: Request, res: Response) {
  try {
    const result = await songService.getAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching songs." });
  }
}

export async function getSongById(req: Request, res: Response) {
  const { id } = req.params;
  if (!validateNumericString(id)) {
    return res
      .status(400)
      .send({ message: "The provided id cannot contain letters." });
  }

  try {
    const result = await songService.getById(Number(id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching song by id." });
  }
}

export async function getSongsByTitle(req: Request, res: Response) {
  const { title } = req.params;
  if (!validateTextString(title)) {
    return res.status(400).send({
      message: "Only titles with more than 3 characters are allowed.",
    });
  }

  try {
    const result = await songService.getByTitle(title);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching songs by title." });
  }
}

export async function getSongsByAlbumTitle(req: Request, res: Response) {
  const { title } = req.params;
  if (!validateTextString(title)) {
    return res.status(400).send({
      message: "Only titles with more than 3 characters are allowed.",
    });
  }

  try {
    const result = await songService.getSongsByAlbumTitle(title);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching songs by album title." });
  }
}

export async function getRandomSong(_req: Request, res: Response) {
  try {
    const result = await songService.getRandomSong();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching random song." });
  }
}

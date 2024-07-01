import { Request, Response } from "express";
import bandMemberService from "../services/bandMember.service";
import {
  validateNumericString,
  validateTextString,
} from "../utils/stringFunctions";

export async function getAllMembers(_req: Request, res: Response) {
  try {
    const result = await bandMemberService.getAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching band members." });
  }
}

export async function getMemberById(req: Request, res: Response) {
  const { id } = req.params;
  if (!validateNumericString(id)) {
    return res
      .status(400)
      .send({ message: "The provided id cannot contain letters." });
  }

  try {
    const result = await bandMemberService.getById(Number(id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching band member by id." });
  }
}

export async function getMembersByName(req: Request, res: Response) {
  const { name } = req.params;
  if (!validateTextString(name)) {
    return res.status(400).send({
      message: "Only names with more than 3 characters are allowed.",
    });
  }

  try {
    const result = await bandMemberService.getByName(name);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching band members by name." });
  }
}

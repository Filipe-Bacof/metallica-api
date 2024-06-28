import { Request, Response } from "express";
// import { BandMember } from "../interfaces/BandMember.interface"
import bandMemberService from "../services/bandMember.service";

export async function getAllMembers(_req: Request, res: Response) {
  const result = await bandMemberService.getAll();
  res.status(200).send(result);
}

export async function getMemberById(req: Request, res: Response) {
  const { id } = req.params;
  const idMember = Number(id);

  const result = await bandMemberService.getById(idMember);
  res.status(200).send(result);
}

export async function getMembersByName(req: Request, res: Response) {
  const { name } = req.params;

  const result = await bandMemberService.getByName(name);
  res.status(200).send(result);
}

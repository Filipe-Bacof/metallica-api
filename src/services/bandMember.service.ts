// import { BandMember } from "../interfaces/BandMember.interface"
import bandMemberRepository from "../repositories/bandMember.repository";

async function getAll() {
  const result = await bandMemberRepository.getAll();
  return result;
}

async function getById(id: number) {
  const result = await bandMemberRepository.getById(id);
  return result;
}

async function getByName(name: string) {
  const result = await bandMemberRepository.getByName(name);
  return result;
}

const bandMemberService = {
  getAll,
  getById,
  getByName,
};

export default bandMemberService;

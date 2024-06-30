import bandMemberRepository from "../repositories/bandMember.repository";

async function getAll() {
  return await bandMemberRepository.getAll();
}

async function getById(id: number) {
  return await bandMemberRepository.getById(id);
}

async function getByName(name: string) {
  return await bandMemberRepository.getByName(name);
}

const bandMemberService = {
  getAll,
  getById,
  getByName,
};

export default bandMemberService;

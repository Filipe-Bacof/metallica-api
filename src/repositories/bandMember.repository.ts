import { prisma } from "../config/database.js";

async function getAll() {
  return prisma.bandMember.findMany({});
}

async function getById(id: number) {
  return prisma.bandMember.findUnique({ where: { id } });
}

async function getByName(name: string) {
  return prisma.bandMember.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
  });
}

const bandMemberRepository = {
  getAll,
  getById,
  getByName,
};

export default bandMemberRepository;

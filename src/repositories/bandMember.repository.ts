import { prisma } from "../config/database.js";

async function getAll() {
  return prisma.bandMember.findMany({
    orderBy: { id: "asc" },
  });
}

async function getById(id: number) {
  return prisma.bandMember.findUnique({
    where: { id },
    include: {
      albums: {
        orderBy: { albumId: "asc" },
        include: { album: { include: { tracks: { orderBy: { id: "asc" } } } } },
      },
    },
  });
}

async function getByName(name: string) {
  return prisma.bandMember.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
    orderBy: { id: "asc" },
  });
}

const bandMemberRepository = {
  getAll,
  getById,
  getByName,
};

export default bandMemberRepository;

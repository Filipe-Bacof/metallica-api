import { prisma } from "../config/database.js";

async function getAll() {
  return prisma.album.findMany({});
}

async function getById(id: number) {
  return prisma.album.findUnique({ where: { id } });
}

async function getByTitle(name: string) {
  return prisma.album.findMany({
    where: {
      title: {
        contains: name,
        mode: "insensitive",
      },
    },
  });
}

const albumRepository = {
  getAll,
  getById,
  getByTitle,
};

export default albumRepository;

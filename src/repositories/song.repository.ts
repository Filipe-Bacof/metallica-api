import { prisma } from "../config/database.js";

async function getAll() {
  return prisma.song.findMany({});
}

async function getById(id: number) {
  return prisma.song.findUnique({ where: { id } });
}

async function getByTitle(title: string) {
  return prisma.song.findMany({
    where: {
      title: {
        contains: title,
        mode: "insensitive",
      },
    },
  });
}

async function getSongsByAlbumId(id: number) {
  return prisma.song.findMany({
    where: {
      albumId: id,
    },
  });
}

const songRepository = {
  getAll,
  getById,
  getByTitle,
  getSongsByAlbumId,
};

export default songRepository;

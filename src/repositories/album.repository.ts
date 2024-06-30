import { prisma } from "../config/database.js";

async function getAll() {
  return prisma.album.findMany({
    include: {
      tracks: {
        select: {
          id: true,
          discTrack: true,
          title: true,
        },
        orderBy: { id: "asc" },
      },
      composers: {
        include: {
          bandMember: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: { bandMember: { id: "asc" } },
      },
    },
    orderBy: { id: "asc" },
  });
}

async function getById(id: number) {
  return prisma.album.findUnique({
    where: { id },
    include: {
      tracks: {
        orderBy: { id: "asc" },
      },
      composers: {
        include: { bandMember: true },
        orderBy: { bandMemberId: "asc" },
      },
    },
  });
}

async function getByTitle(name: string) {
  return prisma.album.findMany({
    where: {
      title: {
        contains: name,
        mode: "insensitive",
      },
    },
    include: {
      tracks: {
        select: {
          id: true,
          discTrack: true,
          title: true,
        },
        orderBy: { id: "asc" },
      },
      composers: {
        include: {
          bandMember: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: { bandMember: { id: "asc" } },
      },
    },
    orderBy: { id: "asc" },
  });
}

const albumRepository = {
  getAll,
  getById,
  getByTitle,
};

export default albumRepository;

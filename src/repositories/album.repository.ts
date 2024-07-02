import { prisma } from "../config/database.js";

async function getAll(page: number) {
  const resultsPerPage = 3;
  const skip = (page - 1) * resultsPerPage;

  return prisma.album.findMany({
    skip: skip,
    take: resultsPerPage,
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

async function checkNumberOfEntries(): Promise<number> {
  const result = await prisma.album.count();
  return result;
}

const albumRepository = {
  getAll,
  getById,
  getByTitle,
  checkNumberOfEntries,
};

export default albumRepository;

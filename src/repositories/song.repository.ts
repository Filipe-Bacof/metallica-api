import { prisma } from "../config/database.js";

async function getAll(page: number) {
  const resultsPerPage = 5;
  const skip = (page - 1) * resultsPerPage;

  return prisma.song.findMany({
    skip: skip,
    take: resultsPerPage,
    select: {
      id: true,
      title: true,
      discTrack: true,
      duration: true,
      spotifyURL: true,
      officialMusicVideo: true,
      album: { select: { title: true } },
    },
  });
}

async function getById(id: number) {
  return prisma.song.findUnique({
    where: { id },
    include: {
      album: true,
      composers: { include: { bandMember: true } },
    },
  });
}

async function getByTitle(title: string) {
  return prisma.song.findMany({
    where: {
      title: {
        contains: title,
        mode: "insensitive",
      },
    },
    include: {
      album: true,
      composers: { include: { bandMember: true } },
    },
  });
}

async function getSongsByAlbumId(id: number) {
  return prisma.song.findMany({
    where: {
      albumId: id,
    },
    include: {
      composers: { include: { bandMember: true } },
    },
  });
}

async function getRandomSong() {
  const totalSongs = await checkNumberOfEntries();

  const randomId = Math.floor(Math.random() * totalSongs) + 1;

  return prisma.song.findFirst({
    where: {
      id: randomId,
    },
    include: {
      album: true,
      composers: { include: { bandMember: true } },
    },
  });
}

async function checkNumberOfEntries(): Promise<number> {
  const result = await prisma.song.count();
  return result;
}

const songRepository = {
  getAll,
  getById,
  getByTitle,
  getSongsByAlbumId,
  getRandomSong,
  checkNumberOfEntries,
};

export default songRepository;

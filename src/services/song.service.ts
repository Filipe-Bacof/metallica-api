// import { Song } from "../interfaces/Song.interface"
import songRepository from "../repositories/song.repository";
import albumRepository from "../repositories/album.repository";

async function getAll() {
  const result = await songRepository.getAll();
  const orderedResult = result.sort((a, b) => {
    return a.id - b.id;
  });
  return orderedResult;
}

async function getById(id: number) {
  const result = await songRepository.getById(id);
  return result;
}

async function getByTitle(title: string) {
  const result = await songRepository.getByTitle(title);
  const orderedResult = result.sort((a, b) => {
    return a.id - b.id;
  });
  return orderedResult;
}

async function getSongsByAlbumTitle(title: string) {
  return await albumRepository.getByTitle(title);
}

async function getRandomSong() {
  return await songRepository.getRandomSong();
}

const songService = {
  getAll,
  getById,
  getByTitle,
  getSongsByAlbumTitle,
  getRandomSong,
};

export default songService;

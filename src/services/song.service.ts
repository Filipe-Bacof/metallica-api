// import { Song } from "../interfaces/Song.interface"
import songRepository from "../repositories/song.repository";
import albumRepository from "../repositories/album.repository";

async function getAll(page: number) {
  const result = await songRepository.getAll(page);
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

async function checkNumberOfEntries() {
  return await songRepository.checkNumberOfEntries();
}

const songService = {
  getAll,
  getById,
  getByTitle,
  getSongsByAlbumTitle,
  getRandomSong,
  checkNumberOfEntries,
};

export default songService;

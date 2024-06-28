// import { Song } from "../interfaces/Song.interface"
import songRepository from "../repositories/song.repository";
import albumRepository from "../repositories/album.repository";

async function getAll() {
  const result = await songRepository.getAll();
  return result;
}

async function getById(id: number) {
  const result = await songRepository.getById(id);
  return result;
}

async function getByTitle(title: string) {
  const result = await songRepository.getByTitle(title);
  return result;
}

async function getSongsByAlbumTitle(title: string) {
  // Testar isso com Load e Reload
  const album = await albumRepository.getByTitle(title);
  if (album.length > 1) {
    throw {
      status: 401,
      message:
        "Encontrado mais de um album com esse nome, seja mais específico.",
    };
  }
  const result = await songRepository.getSongsByAlbumId(album[0].id);
  return result;
}

const songService = {
  getAll,
  getById,
  getByTitle,
  getSongsByAlbumTitle,
};

export default songService;

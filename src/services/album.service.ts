// import { Album } from "../interfaces/Album.interface"
import albumRepository from "../repositories/album.repository";

async function getAll() {
  const result = await albumRepository.getAll();
  return result;
}

async function getById(id: number) {
  const result = await albumRepository.getById(id);
  return result;
}

async function getByTitle(name: string) {
  const result = await albumRepository.getByTitle(name);
  return result;
}

const albumService = {
  getAll,
  getById,
  getByTitle,
};

export default albumService;

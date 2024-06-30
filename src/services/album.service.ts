import albumRepository from "../repositories/album.repository";

async function getAll() {
  return await albumRepository.getAll();
}

async function getById(id: number) {
  return await albumRepository.getById(id);
}

async function getByTitle(name: string) {
  return await albumRepository.getByTitle(name);
}

const albumService = {
  getAll,
  getById,
  getByTitle,
};

export default albumService;

import albumRepository from "../repositories/album.repository";

async function getAll(page: number) {
  return await albumRepository.getAll(page);
}

async function getById(id: number) {
  return await albumRepository.getById(id);
}

async function getByTitle(name: string) {
  return await albumRepository.getByTitle(name);
}

async function checkNumberOfEntries() {
  return await albumRepository.checkNumberOfEntries();
}

const albumService = {
  getAll,
  getById,
  getByTitle,
  checkNumberOfEntries,
};

export default albumService;

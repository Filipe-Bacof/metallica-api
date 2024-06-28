"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Song } from "../interfaces/Song.interface"
const song_repository_1 = __importDefault(require("../repositories/song.repository"));
const album_repository_1 = __importDefault(require("../repositories/album.repository"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield song_repository_1.default.getAll();
        return result;
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield song_repository_1.default.getById(id);
        return result;
    });
}
function getByTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield song_repository_1.default.getByTitle(title);
        return result;
    });
}
function getSongsByAlbumTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        // Testar isso com Load e Reload
        const album = yield album_repository_1.default.getByTitle(title);
        if (album.length > 1) {
            throw {
                status: 401,
                message: "Encontrado mais de um album com esse nome, seja mais específico.",
            };
        }
        const result = yield song_repository_1.default.getSongsByAlbumId(album[0].id);
        return result;
    });
}
const songService = {
    getAll,
    getById,
    getByTitle,
    getSongsByAlbumTitle,
};
exports.default = songService;
//# sourceMappingURL=song.service.js.map
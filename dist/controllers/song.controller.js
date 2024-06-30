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
exports.getAllSongs = getAllSongs;
exports.getSongById = getSongById;
exports.getSongsByTitle = getSongsByTitle;
exports.getSongsByAlbumTitle = getSongsByAlbumTitle;
exports.getRandomSong = getRandomSong;
// import { Song } from "../interfaces/Song.interface"
const song_service_1 = __importDefault(require("../services/song.service"));
function getAllSongs(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield song_service_1.default.getAll();
        res.status(200).send(result);
    });
}
function getSongById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const idSong = Number(id);
        const result = yield song_service_1.default.getById(idSong);
        res.status(200).send(result);
    });
}
function getSongsByTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title } = req.params;
        const result = yield song_service_1.default.getByTitle(title);
        res.status(200).send(result);
    });
}
function getSongsByAlbumTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title } = req.params;
        const result = yield song_service_1.default.getSongsByAlbumTitle(title);
        res.status(200).send(result);
    });
}
function getRandomSong(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield song_service_1.default.getRandomSong();
        res.status(200).send(result);
    });
}
//# sourceMappingURL=song.controller.js.map
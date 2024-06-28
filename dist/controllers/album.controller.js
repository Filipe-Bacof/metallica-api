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
exports.getAllAlbuns = getAllAlbuns;
exports.getAlbumById = getAlbumById;
exports.getAlbunsByTitle = getAlbunsByTitle;
// import { Album } from "../interfaces/Album.interface"
const album_service_1 = __importDefault(require("../services/album.service"));
function getAllAlbuns(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield album_service_1.default.getAll();
        res.status(200).send(result);
    });
}
function getAlbumById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const idAlbum = Number(id);
        const result = yield album_service_1.default.getById(idAlbum);
        res.status(200).send(result);
    });
}
function getAlbunsByTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title } = req.params;
        const result = yield album_service_1.default.getByTitle(title);
        res.status(200).send(result);
    });
}
//# sourceMappingURL=album.controller.js.map
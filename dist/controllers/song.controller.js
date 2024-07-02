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
const song_service_1 = __importDefault(require("../services/song.service"));
const stringFunctions_1 = require("../utils/stringFunctions");
const urlFunctions_1 = require("../utils/urlFunctions");
function getAllSongs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = req.query.page;
        if (page && !(0, stringFunctions_1.validateNumericString)(page)) {
            return res
                .status(400)
                .send({ message: "The provided page cannot contain letters." });
        }
        const pageNumber = page ? Number(page) : 1;
        const totalEntries = yield song_service_1.default.checkNumberOfEntries();
        const totalPages = (0, urlFunctions_1.calculateTotalPages)(totalEntries, 5);
        if (pageNumber && !(0, urlFunctions_1.isPageParamNumberValid)(pageNumber, totalPages)) {
            return res
                .status(400)
                .send({ message: "The provided page number doesn't exist." });
        }
        try {
            const result = yield song_service_1.default.getAll(pageNumber);
            res.status(200).send({
                navigation: (0, urlFunctions_1.generateUrlPrevAndNext)("song", pageNumber, totalPages),
                data: result,
            });
        }
        catch (error) {
            res.status(500).send({ message: "Error fetching songs." });
        }
    });
}
function getSongById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!(0, stringFunctions_1.validateNumericString)(id)) {
            return res
                .status(400)
                .send({ message: "The provided id cannot contain letters." });
        }
        try {
            const result = yield song_service_1.default.getById(Number(id));
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send({ message: "Error fetching song by id." });
        }
    });
}
function getSongsByTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title } = req.params;
        if (!(0, stringFunctions_1.validateTextString)(title)) {
            return res.status(400).send({
                message: "Only titles with more than 3 characters are allowed.",
            });
        }
        try {
            const result = yield song_service_1.default.getByTitle(title);
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send({ message: "Error fetching songs by title." });
        }
    });
}
function getSongsByAlbumTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title } = req.params;
        if (!(0, stringFunctions_1.validateTextString)(title)) {
            return res.status(400).send({
                message: "Only titles with more than 3 characters are allowed.",
            });
        }
        try {
            const result = yield song_service_1.default.getSongsByAlbumTitle(title);
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send({ message: "Error fetching songs by album title." });
        }
    });
}
function getRandomSong(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield song_service_1.default.getRandomSong();
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send({ message: "Error fetching random song." });
        }
    });
}
//# sourceMappingURL=song.controller.js.map
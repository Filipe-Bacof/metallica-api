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
Object.defineProperty(exports, "__esModule", { value: true });
const database_js_1 = require("../config/database.js");
function getAll(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultsPerPage = 5;
        const skip = (page - 1) * resultsPerPage;
        return database_js_1.prisma.song.findMany({
            skip: skip,
            take: resultsPerPage,
            select: {
                id: true,
                title: true,
                discTrack: true,
                duration: true,
                spotifyURL: true,
                officialMusicVideo: true,
                album: { select: { title: true } },
            },
        });
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.song.findUnique({
            where: { id },
            include: {
                album: true,
                composers: { include: { bandMember: true } },
            },
        });
    });
}
function getByTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.song.findMany({
            where: {
                title: {
                    contains: title,
                    mode: "insensitive",
                },
            },
            include: {
                album: true,
                composers: { include: { bandMember: true } },
            },
        });
    });
}
function getSongsByAlbumId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.song.findMany({
            where: {
                albumId: id,
            },
            include: {
                composers: { include: { bandMember: true } },
            },
        });
    });
}
function getRandomSong() {
    return __awaiter(this, void 0, void 0, function* () {
        const totalSongs = yield checkNumberOfEntries();
        const randomId = Math.floor(Math.random() * totalSongs) + 1;
        return database_js_1.prisma.song.findFirst({
            where: {
                id: randomId,
            },
            include: {
                album: true,
                composers: { include: { bandMember: true } },
            },
        });
    });
}
function checkNumberOfEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_js_1.prisma.song.count();
        return result;
    });
}
const songRepository = {
    getAll,
    getById,
    getByTitle,
    getSongsByAlbumId,
    getRandomSong,
    checkNumberOfEntries,
};
exports.default = songRepository;
//# sourceMappingURL=song.repository.js.map
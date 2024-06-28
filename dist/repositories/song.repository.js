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
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.song.findMany({});
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.song.findUnique({ where: { id } });
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
        });
    });
}
function getSongsByAlbumId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.song.findMany({
            where: {
                albumId: id,
            },
        });
    });
}
const songRepository = {
    getAll,
    getById,
    getByTitle,
    getSongsByAlbumId,
};
exports.default = songRepository;
//# sourceMappingURL=song.repository.js.map
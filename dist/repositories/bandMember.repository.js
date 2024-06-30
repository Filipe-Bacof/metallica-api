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
        return database_js_1.prisma.bandMember.findMany({
            orderBy: { id: "asc" },
        });
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.bandMember.findUnique({
            where: { id },
            include: {
                albums: {
                    orderBy: { albumId: "asc" },
                    select: {
                        album: {
                            include: {
                                tracks: {
                                    select: {
                                        id: true,
                                        discTrack: true,
                                        title: true,
                                        duration: true,
                                        spotifyURL: true,
                                        officialMusicVideo: true,
                                    },
                                    orderBy: { id: "asc" },
                                },
                            },
                        },
                    },
                },
            },
        });
    });
}
function getByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.bandMember.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive",
                },
            },
            include: {
                albums: {
                    orderBy: { albumId: "asc" },
                    select: {
                        album: {
                            include: {
                                tracks: {
                                    select: {
                                        id: true,
                                        discTrack: true,
                                        title: true,
                                        duration: true,
                                        spotifyURL: true,
                                        officialMusicVideo: true,
                                    },
                                    orderBy: { id: "asc" },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: { name: "asc" },
        });
    });
}
const bandMemberRepository = {
    getAll,
    getById,
    getByName,
};
exports.default = bandMemberRepository;
//# sourceMappingURL=bandMember.repository.js.map
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
        return database_js_1.prisma.album.findMany({
            include: {
                tracks: {
                    select: {
                        id: true,
                        discTrack: true,
                        title: true,
                    },
                    orderBy: { id: "asc" },
                },
                composers: {
                    include: {
                        bandMember: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                    orderBy: { bandMember: { id: "asc" } },
                },
            },
            orderBy: { id: "asc" },
        });
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.album.findUnique({
            where: { id },
            include: {
                tracks: {
                    orderBy: { id: "asc" },
                },
                composers: {
                    include: { bandMember: true },
                    orderBy: { bandMemberId: "asc" },
                },
            },
        });
    });
}
function getByTitle(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return database_js_1.prisma.album.findMany({
            where: {
                title: {
                    contains: name,
                    mode: "insensitive",
                },
            },
            include: {
                tracks: {
                    select: {
                        id: true,
                        discTrack: true,
                        title: true,
                    },
                    orderBy: { id: "asc" },
                },
                composers: {
                    include: {
                        bandMember: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                    orderBy: { bandMember: { id: "asc" } },
                },
            },
            orderBy: { id: "asc" },
        });
    });
}
const albumRepository = {
    getAll,
    getById,
    getByTitle,
};
exports.default = albumRepository;
//# sourceMappingURL=album.repository.js.map
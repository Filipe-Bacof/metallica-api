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
const album_repository_1 = __importDefault(require("../repositories/album.repository"));
function getAll(page) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield album_repository_1.default.getAll(page);
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield album_repository_1.default.getById(id);
    });
}
function getByTitle(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield album_repository_1.default.getByTitle(name);
    });
}
function checkNumberOfEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield album_repository_1.default.checkNumberOfEntries();
    });
}
const albumService = {
    getAll,
    getById,
    getByTitle,
    checkNumberOfEntries,
};
exports.default = albumService;
//# sourceMappingURL=album.service.js.map
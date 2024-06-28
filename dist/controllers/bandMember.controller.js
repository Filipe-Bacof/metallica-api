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
exports.getAllMembers = getAllMembers;
exports.getMemberById = getMemberById;
exports.getMembersByName = getMembersByName;
// import { BandMember } from "../interfaces/BandMember.interface"
const bandMember_service_1 = __importDefault(require("../services/bandMember.service"));
function getAllMembers(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield bandMember_service_1.default.getAll();
        res.status(200).send(result);
    });
}
function getMemberById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const idMember = Number(id);
        const result = yield bandMember_service_1.default.getById(idMember);
        res.status(200).send(result);
    });
}
function getMembersByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = req.params;
        const result = yield bandMember_service_1.default.getByName(name);
        res.status(200).send(result);
    });
}
//# sourceMappingURL=bandMember.controller.js.map
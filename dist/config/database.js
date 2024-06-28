"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = __importDefault(require("@prisma/client"));
const { PrismaClient } = client_1.default;
console.log("🎲 Conectado com DB PostgreSQL.");
exports.prisma = new PrismaClient();
//# sourceMappingURL=database.js.map
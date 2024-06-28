import pkg from "@prisma/client";

const { PrismaClient } = pkg;
console.log("🎲 Conectado com DB PostgreSQL.");
export const prisma = new PrismaClient();

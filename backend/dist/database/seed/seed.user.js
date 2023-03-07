"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = void 0;
const client_1 = require("@prisma/client");
const client_2 = require("@prisma/client");
const argon2 = require("argon2");
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
async function seedUsers() {
    const hash = await argon2.hash('123');
    const salt = await (0, crypto_1.randomBytes)(16);
    const charlie = await prisma.account.upsert({
        where: { email: 'charlie1@info.com' },
        update: {},
        create: {
            email: 'charlie1@info.com',
            password: hash,
            salt: salt,
            role: client_2.enumRole.BUYER,
            user: {
                create: {
                    firstName: 'Charlie',
                    lastName: 'Smith',
                },
            },
        },
    });
    const klaus = await prisma.account.upsert({
        where: { email: 'klaus@info.com' },
        update: {},
        create: {
            email: 'klaus@info.com',
            password: hash,
            salt: salt,
            role: client_2.enumRole.BUYER,
            user: {
                create: {
                    firstName: 'Klaus',
                    lastName: 'Marka',
                },
            },
        },
    });
    const john = await prisma.account.upsert({
        where: { email: 'john@test.com' },
        update: {},
        create: {
            email: 'john@test.com',
            password: hash,
            salt: salt,
            role: client_2.enumRole.BUYER,
            user: {
                create: {
                    firstName: 'John',
                    lastName: 'Doe',
                },
            },
        },
    });
    const jane = await prisma.account.upsert({
        where: { email: 'jane@test.de' },
        update: {},
        create: {
            email: 'jane@test.de',
            password: hash,
            salt: salt,
            role: client_2.enumRole.BUYER,
            user: {
                create: {
                    firstName: 'Jane',
                    lastName: 'Doe',
                },
            },
        },
    });
}
exports.seedUsers = seedUsers;
//# sourceMappingURL=seed.user.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = void 0;
const client_1 = require("@prisma/client");
const argon2 = require("argon2");
const prisma = new client_1.PrismaClient();
async function seedUsers() {
    const hash = await argon2.hash('123');
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            hash: hash,
            firstName: 'Alice',
            lastName: 'Smith',
        },
    });
    const bob = await prisma.user.upsert({
        where: { email: 'bob@prisma.io' },
        update: {},
        create: {
            email: 'bob@prisma.io',
            hash: hash,
            firstName: 'Bob',
            lastName: 'Johnson',
        },
    });
}
exports.seedUsers = seedUsers;
//# sourceMappingURL=seed.user.js.map
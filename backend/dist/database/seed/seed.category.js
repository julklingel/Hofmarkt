"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedCategory() {
    const fruit = await prisma.category.upsert({
        where: { name: 'fruit' },
        update: {},
        create: {
            name: 'fruit',
        },
    });
    const vegetable = await prisma.category.upsert({
        where: { name: 'vegetable' },
        update: {},
        create: {
            name: 'vegetable',
        },
    });
    const meat = await prisma.category.upsert({
        where: { name: 'meat' },
        update: {},
        create: {
            name: 'meat',
        },
    });
    const dairy = await prisma.category.upsert({
        where: { name: 'dairy' },
        update: {},
        create: {
            name: 'dairy',
        },
    });
}
exports.seedCategory = seedCategory;
//# sourceMappingURL=seed.category.js.map
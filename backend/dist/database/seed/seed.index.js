"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seed_product_1 = require("./seed.product");
const seed_user_1 = require("./seed.user");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const seed = async () => {
    (0, seed_product_1.seedProducts)();
    (0, seed_user_1.seedUsers)();
};
seed()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.index.js.map
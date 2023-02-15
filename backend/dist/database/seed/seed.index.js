"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seed_supplier_1 = require("./seed.supplier");
const seed_user_1 = require("./seed.user");
const seed_category_1 = require("./seed.category");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const seed = async () => {
    (0, seed_category_1.seedCategory)();
    (0, seed_supplier_1.seedSupplier)();
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
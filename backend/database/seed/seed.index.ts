import { seedSupplier } from './seed.supplier';
import { seedUsers } from './seed.user';
import { seedCategory } from './seed.category';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seed = async () => {
  seedUsers();
  seedSupplier();
  seedCategory();
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

import {seedProducts} from './seed.product';
import {seedUsers} from './seed.user';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seed = async () => {
    seedProducts()
    seedUsers()
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
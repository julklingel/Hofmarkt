import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedCategory() {
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

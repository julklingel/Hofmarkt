import { PrismaClient } from '@prisma/client'
import * as argon2 from 'argon2';

//try

const prisma = new PrismaClient()


export async function seedUsers() {
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

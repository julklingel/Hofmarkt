import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function seedUsers() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      hash: '123',
      firstName: 'Alice',
      lastName: 'Smith',
    },
  })
    const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
        email: 'bob@prisma.io',
        hash: '123',
        firstName: 'Bob',
        lastName: 'Johnson',
    },
    })


}

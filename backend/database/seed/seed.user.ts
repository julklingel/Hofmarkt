import { PrismaClient } from '@prisma/client';
import { enumRole } from '@prisma/client';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();
export async function seedUsers() {
  const hash = await argon2.hash('123');
  const salt = await randomBytes(16);

  const charlie = await prisma.account.upsert({
    where: { email: 'charlie1@info.com' },
    update: {},
    create: {
      email: 'charlie1@info.com',
      password: hash,
      salt: salt,
      role: enumRole.BUYER,
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
      role: enumRole.BUYER,
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
      role: enumRole.BUYER,
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
      role: enumRole.BUYER,
      user: {
        create: {
          firstName: 'Jane',
          lastName: 'Doe',
        },
      },
    },
  });

  const hofmarkt24 = await prisma.account.upsert({
    where: { email: '' },
    update: {},
    create: {
      email: '',
      password: hash,
      salt: salt,
      role: enumRole.BUYER,
      user: {
        create: {
          firstName: 'Hofmarkt',
          lastName: '24',
        },
      },
    },
  });


}
